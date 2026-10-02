import { useEffect, useRef, useState, type ReactNode } from "react";
import { FaForward, FaRedo } from "react-icons/fa";
import { MODELOS, type Agente, type Herramienta, type LineaSesion, type ModeloId } from "./sesion";
import "./ia.css";

const menosMovimiento = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Lo que tarda en aparecer cada línea después de la anterior, en ms. */
const ESPERA: Record<LineaSesion["tipo"], number> = {
  usuario: 350,
  comando: 350,
  modo: 450,
  pensar: 800,
  tool: 600,
  diff: 700,
  ia: 950,
};

/** Las líneas que antes de aparecer se teclean en la caja de entrada. */
const seTeclea = (l?: LineaSesion): l is Extract<LineaSesion, { texto: string }> & { tipo: "usuario" | "comando" } =>
  l?.tipo === "usuario" || l?.tipo === "comando";

/** Cómo se rotula cada herramienta en la sesión, como en la TUI de OpenCode. */
const ROTULO: Record<Herramienta, [icono: string, nombre: string]> = {
  read: ["→", "Read"],
  write: ["←", "Write"],
  edit: ["←", "Edit"],
  bash: ["$", "Bash"],
  glob: ["✱", "Glob"],
  grep: ["✱", "Grep"],
  list: ["→", "List"],
  skill: ["◆", "Skill"],
  webfetch: ["%", "WebFetch"],
  todowrite: ["☐", "Todo"],
};

/** Pinta como código lo que el texto trae entre acentos graves. */
const enLinea = (texto: string) =>
  texto.split("`").map((parte, i) => (i % 2 ? <code key={i}>{parte}</code> : parte));

/** La respuesta del modelo: párrafos y listas con guion. */
const Respuesta = ({ texto }: { texto: string }) => (
  <div className="mrx-oc__ia">
    {texto.replace(/\*\*/g, "").split("\n").filter((l) => l.trim()).map((linea, i) => {
      const item = linea.match(/^\s*[-*]\s+(.*)$/);
      return item ? (
        <p key={i} className="mrx-oc__item">
          <span aria-hidden="true">•</span> {enLinea(item[1])}
        </p>
      ) : (
        <p key={i}>{enLinea(linea)}</p>
      );
    })}
  </div>
);

const Linea = ({ linea }: { linea: LineaSesion }) => {
  switch (linea.tipo) {
    case "usuario":
      return <div className="mrx-oc__usuario">{linea.texto}</div>;
    case "comando":
      return (
        <div className="mrx-oc__usuario mrx-oc__usuario--comando">
          <span>{linea.texto}</span>
          {linea.salida && <pre className="mrx-oc__salida">{linea.salida}</pre>}
        </div>
      );
    case "modo":
      return (
        <p className="mrx-oc__sistema">
          ⇥ Tab · agente <b data-agente={linea.modo}>{linea.modo === "plan" ? "Plan" : "Build"}</b>
          {linea.modo === "plan" ? " — solo lee y propone, no toca archivos" : " — puede escribir archivos y ejecutar comandos"}
        </p>
      );
    case "pensar":
      return <p className="mrx-oc__pensar"><i>Thinking:</i> {linea.texto}</p>;
    case "tool": {
      const [icono, nombre] = ROTULO[linea.herramienta];
      return (
        <div className="mrx-oc__tool">
          <p>
            <span className="mrx-oc__icono">{icono}</span> {nombre} <span className="mrx-oc__objetivo">{linea.objetivo}</span>
          </p>
          {linea.salida && <pre className="mrx-oc__salida">{linea.salida}</pre>}
        </div>
      );
    }
    case "diff":
      return (
        <div className="mrx-oc__tool">
          <p>
            <span className="mrx-oc__icono">←</span> Edit <span className="mrx-oc__objetivo">{linea.archivo}</span>
          </p>
          <pre className="mrx-oc__diff">
            {linea.lineas.split("\n").map((l, i) => (
              <span key={i} data-signo={l[0] === "+" ? "mas" : l[0] === "-" ? "menos" : undefined}>
                {l}
                {"\n"}
              </span>
            ))}
          </pre>
        </div>
      );
    case "ia":
      return <Respuesta texto={linea.texto} />;
  }
};

/** «12.4K»: los tokens como los cuenta la barra de OpenCode. */
const miles = (n: number) => (n >= 1000 ? `${(n / 1000).toFixed(1)}K` : String(n));

/** El logo de la pantalla de inicio de OpenCode, en bloques. */
const LOGO_OPEN = ["█▀▀█ █▀▀█ █▀▀ █▀▀▄", "█  █ █  █ █▀▀ █  █", "▀▀▀▀ █▀▀▀ ▀▀▀ ▀  ▀"];
const LOGO_CODE = ["█▀▀ █▀▀█ █▀▀▄ █▀▀", "█   █  █ █  █ █▀▀", "▀▀▀ ▀▀▀▀ ▀▀▀  ▀▀▀"];

interface OpenCodeProps {
  sesion: LineaSesion[];
  agente?: Agente;
  modelo?: ModeloId;
  carpeta?: string;
  /** Vuelve a empezar al terminar, como las terminales de las portadas. */
  bucle?: boolean;
  /** Muestra los botones de repetir y saltar al final. */
  controles?: boolean;
  className?: string;
}

/**
 * La terminal de OpenCode dibujada: reproduce una sesión grabada. El prompt
 * se teclea en la caja de entrada, se envía y el agente responde línea a
 * línea con su razonamiento, sus herramientas y los cambios en los archivos.
 */
export const OpenCode = ({
  sesion,
  agente = "build",
  modelo = "deepseek",
  carpeta = "mi-proyecto",
  bucle = false,
  controles = true,
  className = "",
}: OpenCodeProps) => {
  const [reduce] = useState(menosMovimiento);
  const [vistas, setVistas] = useState(reduce ? sesion.length : 0);
  const [letras, setLetras] = useState(0);
  // la sesión arranca la primera vez que la terminal entra en pantalla
  const [enMarcha, setEnMarcha] = useState(false);
  const raiz = useRef<HTMLDivElement>(null);
  const mensajes = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = raiz.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setEnMarcha(true);
        obs.disconnect();
      }
    }, { threshold: 0.25 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (reduce || !enMarcha) return;
    const actual = sesion[vistas];
    let espera: number;
    let siguiente: () => void;

    if (!actual) {
      if (!bucle) return;
      espera = 4200;
      siguiente = () => { setVistas(0); setLetras(0); };
    } else if (seTeclea(actual) && letras < actual.texto.length) {
      // los prompts largos se teclean más deprisa: ninguno tarda más de dos segundos
      const salto = Math.max(1, Math.ceil(actual.texto.length / 80));
      espera = 24;
      siguiente = () => setLetras(Math.min(actual.texto.length, letras + salto));
    } else {
      espera = ESPERA[actual.tipo];
      siguiente = () => { setVistas(vistas + 1); setLetras(0); };
    }

    const id = window.setTimeout(siguiente, espera);
    return () => window.clearTimeout(id);
  }, [reduce, enMarcha, bucle, sesion, vistas, letras]);

  // lo último que llega queda siempre a la vista, sin mover la página
  useEffect(() => {
    const el = mensajes.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [vistas]);

  const visibles = sesion.slice(0, vistas);
  const proxima = sesion[vistas];
  const tecleando = seTeclea(proxima) ? proxima.texto.slice(0, letras) : "";
  // trabaja mientras falte una línea que no escribe el usuario
  const trabajando = !!proxima && !seTeclea(proxima) && vistas > 0;
  const terminado = vistas >= sesion.length;

  const ultimoModo = [...visibles].reverse().find((l) => l.tipo === "modo");
  const agenteActual = ultimoModo?.tipo === "modo" ? ultimoModo.modo : agente;

  const datos = MODELOS[modelo];
  // el system prompt de OpenCode ya ocupa unos miles de tokens antes de empezar
  const tokens = visibles.length
    ? 9800 + visibles.reduce((t, l) => t + Math.round(JSON.stringify(l).length / 3.2), 0)
    : 0;
  const coste = (tokens / 1000) * datos.precio;

  const titulo = (sesion.find((l) => l.tipo === "usuario") as { texto: string } | undefined)?.texto ?? "Nueva sesión";

  let cuerpo: ReactNode;
  if (!visibles.length) {
    cuerpo = (
      <div className="mrx-oc__inicio">
        <div className="mrx-oc__logo" aria-label="opencode" role="img">
          <pre className="mrx-oc__logo-open">{LOGO_OPEN.join("\n")}</pre>
          <pre>{LOGO_CODE.join("\n")}</pre>
        </div>
        <ul className="mrx-oc__atajos">
          <li><b>/connect</b> conectar un proveedor</li>
          <li><b>/models</b> elegir el modelo</li>
          <li><b>/init</b> crear AGENTS.md</li>
          <li><b>@</b> citar un archivo · <b>!</b> ejecutar un comando</li>
        </ul>
      </div>
    );
  } else {
    cuerpo = visibles.map((l, i) => <Linea key={i} linea={l} />);
  }

  return (
    <div className={`mrx-oc ${className}`} ref={raiz}>
      <div className="mrx-oc__barra">
        <span className="mrx-term__luces"><i /><i /><i /></span>
        <span className="mrx-oc__ventana">opencode — ~/{carpeta}</span>
      </div>

      {visibles.length > 0 && (
        <div className="mrx-oc__cabecera">
          <span className="mrx-oc__sesion"># {titulo}</span>
          <span className="mrx-oc__gasto">
            {miles(tokens)} · {datos.precio ? `$${coste.toFixed(4)}` : "$0.00"}
          </span>
        </div>
      )}

      <div className="mrx-oc__mensajes" ref={mensajes} aria-live="polite">
        {cuerpo}
        {trabajando && (
          <p className="mrx-oc__trabajando" aria-hidden="true">
            <span className="mrx-oc__puntos"><i /><i /><i /><i /></span> trabajando
          </p>
        )}
      </div>

      {/* la caja de entrada: aquí se teclea el prompt antes de enviarlo */}
      <div className="mrx-oc__entrada" data-agente={agenteActual}>
        <p>
          <span className="mrx-oc__flecha">&gt;</span>{" "}
          {tecleando ? (
            <span>{tecleando}</span>
          ) : (
            <span className="mrx-oc__placeholder">
              {terminado && vistas > 0 ? "Escribe tu siguiente prompt…" : "Pregunta lo que quieras…"}
            </span>
          )}
          <span className="mrx-term__cursor" />
        </p>
        <div className="mrx-oc__pie">
          <span>
            <b className="mrx-oc__agente" data-agente={agenteActual}>{agenteActual === "plan" ? "Plan" : "Build"}</b>
            <span className="mrx-oc__modelo">{datos.nombre}</span>
            <span className="mrx-oc__proveedor">{datos.proveedor}</span>
          </span>
          <span className="mrx-oc__teclas">
            {trabajando ? <>esc <i>interrumpir</i></> : <>tab <i>agentes</i> · ctrl+p <i>comandos</i></>}
          </span>
        </div>
      </div>

      <div className="mrx-oc__estado">
        <span>~/{carpeta}<span className="mrx-oc__rama">:main</span></span>
        {controles && !reduce ? (
          <span className="mrx-oc__controles">
            <button
              type="button"
              onClick={() => { setVistas(0); setLetras(0); setEnMarcha(true); }}
              aria-label="Repetir la sesión"
            >
              <FaRedo /> repetir
            </button>
            <button
              type="button"
              disabled={terminado}
              onClick={() => { setVistas(sesion.length); setLetras(0); }}
              aria-label="Saltar al final de la sesión"
            >
              <FaForward /> saltar
            </button>
          </span>
        ) : (
          <span>opencode</span>
        )}
      </div>
    </div>
  );
};
