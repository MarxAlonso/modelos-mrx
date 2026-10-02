import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaLightbulb, FaTools, FaLaptopCode } from "react-icons/fa";
import { Panal } from "../Nano/Panal";
import { Guion, Ventana, type PasoGuion } from "../Terminal/Terminal";
import { CAPAS, type CapaId } from "./stack";
import "./hero.css";

const menosMovimiento = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Tiempo que cada lámina queda en pantalla. */
const DURACION_LAMINA = 7000;
/** Cada cuánto se enciende sola una ficha. */
const RITMO_FICHA = 1700;

interface Accion {
  texto: string;
  link: string;
}

interface Lamina {
  nombre: string;
  claim: string;
  titulo: [string, string, ReactNode];
  bajada: string;
  acciones: Accion[];
  /** Capa de la pila que resalta (ninguna = todas). */
  capa?: CapaId;
}

const LAMINAS: Lamina[] = [
  {
    nombre: "Coders MRX",
    claim: "Módulos web · Rutas de aprendizaje",
    titulo: ["Coders", "MRX", <>Aprende <em>web</em></>],
    bajada:
      "Aprende desde lo más básico de HTML, CSS y JS hasta desarrollar APIs con Spring Boot. Visualiza módulos interactivos y edítalos en vivo.",
    acciones: [
      { texto: "Ver módulos", link: "/modulosestaticos" },
      { texto: "Front-end", link: "/frontend" },
      { texto: "Spring Boot", link: "/springbootinfo" },
    ],
  },
  {
    nombre: "Frontend",
    claim: "HTML · CSS · JavaScript · Bootstrap",
    titulo: ["Frontend", "interactivo", <>paso a <em>paso</em></>],
    bajada:
      "Ejemplos de básico a intermedio con un editor de código en vivo: escribe, mira el resultado y entiende cada etiqueta.",
    acciones: [
      { texto: "Aprender Front-end", link: "/frontend" },
      { texto: "Módulos dinámicos", link: "/modulosdinamicos" },
    ],
    capa: "frontend",
  },
  {
    nombre: "Backend",
    claim: "Java · POO · Spring Core · Spring Boot",
    titulo: ["Backend", "robusto", <>con <em>Spring</em></>],
    bajada:
      "De los fundamentos de Java y la programación orientada a objetos a construir APIs con Spring Boot conectadas a una base de datos.",
    acciones: [
      { texto: "Aprender Spring Boot", link: "/springbootinfo" },
      { texto: "Java", link: "/aprendiendojava" },
    ],
    capa: "backend",
  },
  {
    nombre: "IA",
    claim: "OpenCode · Prompts · Skills · DeepSeek",
    titulo: ["Programa", "con IA", <>sin <em>pagar</em></>],
    bajada:
      "Usa OpenCode con modelos gratis o la API de DeepSeek y aprende a escribir prompts y skills que resuelven a la primera: páginas web, resúmenes y APIs.",
    acciones: [
      { texto: "Prompt Libre", link: "/promptlibre" },
      { texto: "Prompts", link: "/aprendiendoprompts" },
    ],
  },
  {
    nombre: "Módulos",
    claim: "Estáticos · Dinámicos · Listos para copiar",
    titulo: ["Módulos", "listos", <>para <em>usar</em></>],
    bajada:
      "Secciones de interfaz hechas con HTML, TailwindCSS y React para inspirarte, adaptarlas y llevarlas directo a tu proyecto.",
    acciones: [
      { texto: "Módulos estáticos", link: "/modulosestaticos" },
      { texto: "Módulos dinámicos", link: "/modulosdinamicos" },
    ],
  },
];

const FICHAS = CAPAS.flatMap((capa) => capa.tecnologias.map((t) => ({ ...t, capa })));

const GUION_LINUX: PasoGuion[] = [
  { tipo: "cmd", texto: "git clone coders-mrx" },
  { tipo: "out", texto: "Clonando en 'coders-mrx'... listo", clase: "t-mute" },
  { tipo: "cmd", texto: "cd coders-mrx && pnpm dev" },
  { tipo: "out", texto: "➜ Local: http://localhost:5173/", clase: "t-verde" },
];

const PromptLinux = (
  <>
    <span className="t-verde">marx@coders</span>
    <span className="t-mute">:</span>
    <span className="t-acento">~</span>
    <span className="t-mute">$ </span>
  </>
);

/**
 * Hero del inicio: la pila full-stack.
 *
 * El stack se dibuja como tres capas isométricas —frontend, backend y datos—
 * con una ficha por tecnología:
 *   · la pila sigue al puntero con inercia y se mece sola;
 *   · una ficha se enciende cada cierto tiempo (o al pasar el puntero) y la
 *     ventana de PowerShell dice qué es;
 *   · la portada rota sus láminas y cada una resalta su capa.
 */
export const Home = () => {
  const [reduce] = useState(menosMovimiento);
  const [actual, setActual] = useState(0);
  // la primera lámina entra con animaciones de carga; al primer cambio se
  // retiran y, de ahí en adelante, todas entran y salen por transición
  const [rotando, setRotando] = useState(false);
  const [pausa, setPausa] = useState(false);
  const [foco, setFoco] = useState(0);

  const area = useRef<HTMLElement>(null);
  const escena = useRef<HTMLDivElement>(null);
  const portada = useRef<HTMLDivElement>(null);
  const conPuntero = useRef(false);

  const capaActiva = LAMINAS[actual].capa;
  const ficha = FICHAS[foco];

  const mostrar = (i: number) => {
    if (i === actual) return;
    setRotando(true);
    setActual(i);
  };

  // el puntero manda mientras está sobre una ficha; si no, se encienden solas
  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => {
      if (conPuntero.current || document.hidden) return;
      setFoco((previa) => {
        const candidatas = FICHAS.map((_, i) => i).filter(
          (i) => i !== previa && (!capaActiva || FICHAS[i].capa.id === capaActiva),
        );
        return candidatas[Math.floor(Math.random() * candidatas.length)] ?? previa;
      });
    }, RITMO_FICHA);
    return () => window.clearInterval(id);
  }, [reduce, capaActiva]);

  // inclinación: el puntero empuja la pila y ex/ey lo siguen con inercia
  useEffect(() => {
    const zona = area.current;
    const pila = escena.current;
    if (reduce || !zona || !pila) return;

    let mx = 0;
    let my = 0;
    let ex = 0;
    let ey = 0;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      const r = zona.getBoundingClientRect();
      mx = (e.clientX - r.left) / r.width - 0.5;
      my = (e.clientY - r.top) / r.height - 0.5;
    };
    const onOut = () => {
      mx = 0;
      my = 0;
    };
    const frame = (t: number) => {
      ex += (mx - ex) * 0.05;
      ey += (my - ey) * 0.05;
      // se mece sola unos grados, como si flotara
      const vaiven = Math.sin(t / 3800) * 3;
      pila.style.setProperty("--giro", `${(ex * 18 + vaiven).toFixed(2)}deg`);
      pila.style.setProperty("--inclinacion", `${(-ey * 8).toFixed(2)}deg`);
      pila.style.setProperty("--flote", `${(Math.sin(t / 2600) * 8).toFixed(2)}px`);
      raf = requestAnimationFrame(frame);
    };

    if (window.matchMedia("(hover:hover) and (pointer:fine)").matches) {
      zona.addEventListener("mousemove", onMove);
      zona.addEventListener("mouseleave", onOut);
    }
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      zona.removeEventListener("mousemove", onMove);
      zona.removeEventListener("mouseleave", onOut);
    };
  }, [reduce]);

  // El reloj de la rotación es la barra de avance del paso activo: pausarla
  // (hover, foco o pestaña oculta) pausa también la rotación.
  const seguir = () => {
    if (!portada.current?.matches(":hover, :focus-within") && !document.hidden) setPausa(false);
  };
  useEffect(() => {
    const onVisibilidad = () => {
      if (document.hidden) setPausa(true);
      else if (!portada.current?.matches(":hover, :focus-within")) setPausa(false);
    };
    document.addEventListener("visibilitychange", onVisibilidad);
    return () => document.removeEventListener("visibilitychange", onVisibilidad);
  }, []);

  const entrada = (clase: string) => (rotando ? undefined : clase);
  const retraso = (segundos: number): CSSProperties | undefined =>
    rotando ? undefined : { animationDelay: `${segundos}s` };

  return (
    <section
      id="hero"
      ref={area}
      className="mrx-hero mrx-oscura"
      data-tono={actual}
      data-capa={capaActiva ?? ""}
    >
      {/* un fondo por lámina: se funden entre sí al cambiar de portada */}
      {LAMINAS.map((_, i) => (
        <div key={i} className={`mrx-hero__fondo mrx-hero__fondo--${i}`} aria-hidden="true" />
      ))}
      <div className="mrx-hero__velo" aria-hidden="true" />
      <div className="mrx-hero__trama" aria-hidden="true" />
      <Panal className="mrx-panal--a" />
      <Panal className="mrx-panal--b" />

      <div className="mrx-pila" aria-hidden="true" onPointerLeave={() => (conPuntero.current = false)}>
        <div className="mrx-pila__escena" ref={escena}>
          {CAPAS.map((capa) => (
            <div
              key={capa.id}
              className="mrx-capa"
              data-capa={capa.id}
              style={{ "--tinte": capa.tinte, "--nivel": capa.nivel } as CSSProperties}
            >
              <span className="mrx-capa__nombre">{capa.nombre}</span>
              {capa.tecnologias.map((t) => {
                const indice = FICHAS.findIndex((f) => f.nombre === t.nombre);
                return (
                  <div
                    key={t.nombre}
                    className="mrx-ficha"
                    data-on={indice === foco || undefined}
                    onPointerEnter={() => {
                      conPuntero.current = true;
                      setFoco(indice);
                    }}
                  >
                    <t.Icon style={{ color: t.color }} />
                    <span>{t.nombre}</span>
                  </div>
                );
              })}
            </div>
          ))}
          {/* los cuatro pilares por los que suben y bajan los datos */}
          {[0, 1, 2, 3].map((i) => (
            <i key={i} className={`mrx-pilar mrx-pilar--${i}`} />
          ))}
        </div>
      </div>

      {/* qué ficha está encendida, contado por una ventana de PowerShell */}
      <div className="mrx-hero__ps" aria-hidden="true" style={{ "--tinte": ficha.capa.tinte } as CSSProperties}>
        <Ventana shell="powershell" titulo="Windows PowerShell">
          <p>
            <span className="t-lila">PS C:\coders-mrx&gt;</span> Get-Stack <span className="t-mute">-Focus</span>
          </p>
          <p><span className="t-mute">Nombre : </span><b>{ficha.nombre}</b></p>
          <p><span className="t-mute">Capa   : </span><span className="mrx-hero__ps-capa">{ficha.capa.nombre}</span></p>
          <p><span className="t-mute">Nota   : </span>{ficha.nota}</p>
        </Ventana>
      </div>

      {/* una sesión de Linux que arranca el proyecto en bucle */}
      <div className="mrx-hero__linux" aria-hidden="true">
        <Ventana shell="linux" titulo="marx@coders: ~">
          <Guion prompt={PromptLinux} guion={GUION_LINUX} />
        </Ventana>
      </div>

      {/* lecturas del monitor */}
      <div className="mrx-hero__lecturas">
        <span className="mrx-lectura">Ruta <b>HTML → Spring Boot</b></span>
        <span className="mrx-lectura">Editor <b>En vivo</b></span>
        <span className="mrx-lectura">Módulos <b>Estáticos · Dinámicos</b></span>
      </div>

      {/* Portada rotativa: cuatro láminas en la misma celda. */}
      <div
        className="mrx-hero__texto"
        ref={portada}
        data-auto={!reduce || undefined}
        data-pausa={pausa || undefined}
        style={{ "--duracion": `${DURACION_LAMINA}ms` } as CSSProperties}
        onPointerEnter={() => setPausa(true)}
        onPointerLeave={seguir}
        onFocus={() => setPausa(true)}
        onBlur={() => requestAnimationFrame(seguir)}
      >
        <div className="mrx-hero__laminas" data-rotando={rotando || undefined}>
          {LAMINAS.map((lamina, i) => {
            const activa = i === actual;
            const primera = i === 0;
            const Titulo = primera ? "h1" : "h2";
            return (
              <div
                key={lamina.nombre}
                className="mrx-hero__lamina"
                data-tono={i}
                data-activa={activa || undefined}
                aria-hidden={!activa}
                inert={!activa}
              >
                <span
                  className={`mrx-hud mrx-hero__claim ${(primera && entrada("mrx-fade")) || ""}`}
                  style={primera ? retraso(0.7) : undefined}
                >
                  {lamina.claim}
                </span>

                <Titulo className="mrx-display mrx-hero__titulo">
                  <span className="mrx-mask">
                    <span className={primera ? entrada("mrx-rise") : undefined}>{lamina.titulo[0]}</span>
                  </span>
                  <span className="mrx-mask">
                    <span className={primera ? entrada("mrx-rise") : undefined} style={primera ? retraso(0.1) : undefined}>
                      <span className="mrx-fill" data-word={lamina.titulo[1]}>{lamina.titulo[1]}</span>
                    </span>
                  </span>
                  <span className="mrx-mask">
                    <span className={primera ? entrada("mrx-rise") : undefined} style={primera ? retraso(0.2) : undefined}>
                      {lamina.titulo[2]}
                    </span>
                  </span>
                </Titulo>

                <p
                  className={`mrx-hero__bajada ${(primera && entrada("mrx-fade")) || ""}`}
                  style={primera ? retraso(0.9) : undefined}
                >
                  {lamina.bajada}
                </p>

                <div
                  className={`mrx-hero__acciones ${(primera && entrada("mrx-fade")) || ""}`}
                  style={primera ? retraso(1.1) : undefined}
                >
                  {lamina.acciones.map((accion, j) => (
                    <Link
                      key={accion.link}
                      to={accion.link}
                      className={`mrx-cta ${j === 0 ? "mrx-cta--lleno" : "mrx-cta--linea"}`}
                    >
                      {j === 0 && <i />}
                      {accion.texto}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* las rayas: una por lámina, cada una con el color de su portada */}
        <div className="mrx-hero__pasos mrx-fade" style={{ animationDelay: "1.3s" }} aria-label="Portadas">
          {LAMINAS.map((lamina, i) => (
            <button
              key={lamina.nombre}
              type="button"
              className="mrx-hero__paso"
              data-tono={i}
              aria-label={`Portada ${i + 1}: ${lamina.nombre}`}
              aria-current={i === actual ? "true" : undefined}
              onClick={() => mostrar(i)}
            >
              <span className="mrx-hero__paso-nombre">
                <span className="mrx-num">0{i + 1}</span> {lamina.nombre}
              </span>
              {/* al llenarse la raya activa se pasa a la lámina siguiente */}
              <i onAnimationEnd={() => i === actual && mostrar((actual + 1) % LAMINAS.length)} />
            </button>
          ))}
        </div>
      </div>

      {/* cinta con todo el stack; la segunda copia solo existe para el bucle */}
      <div className="mrx-cinta">
        {[0, 1].map((copia) => (
          <ul
            key={copia}
            className="mrx-cinta__lista"
            aria-hidden={copia === 1 || undefined}
            aria-label={copia === 0 ? "Tecnologías" : undefined}
          >
            {FICHAS.map((t) => (
              <li key={t.nombre}>
                <t.Icon style={{ color: t.color }} aria-hidden="true" />
                {t.nombre}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
};

const OFERTAS = [
  {
    shell: "linux" as const,
    ventana: "ideas.sh",
    comando: "mrx inspirar --ideas",
    icon: <FaLightbulb className="text-yellow-400" />,
    title: "Inspírate con ideas de diseño",
    description: "Explora módulos creativos y modernos que puedes adaptar a tus propios proyectos.",
  },
  {
    shell: "powershell" as const,
    ventana: "Windows PowerShell",
    comando: "Get-Componente -Listo",
    icon: <FaTools className="text-purple-400" />,
    title: "Componentes listos para usar",
    description: "Aprovecha diseños funcionales hechos con HTML, TailwindCSS y React para implementarlos directamente.",
  },
  {
    shell: "linux" as const,
    ventana: "flujo.sh",
    comando: "mrx optimizar --flujo",
    icon: <FaLaptopCode className="text-cyan-400" />,
    title: "Optimiza tu flujo de desarrollo",
    description: "Ahorra tiempo reutilizando secciones de interfaz visualmente atractivas y bien estructuradas.",
  },
];

export const InfoInicio = () => (
  <section className="mrx-oferta mrx-oscura">
    <span className="mrx-oferta__trama" aria-hidden="true" />
    <div className="mrx-oferta__marco">
      <span className="mrx-hud">// la plataforma</span>
      <h2 className="mrx-titulo-seccion">
        ¿Qué ofrece <em>esta plataforma</em>?
      </h2>

      <div className="mrx-oferta__rejilla">
        {OFERTAS.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <Ventana shell={item.shell} titulo={item.ventana} className="mrx-oferta__ventana">
              <p>
                {item.shell === "linux" ? (
                  <span className="t-verde">$ </span>
                ) : (
                  <span className="t-lila">PS&gt; </span>
                )}
                {item.comando}
              </p>
              <div className="mrx-oferta__icono">{item.icon}</div>
              <h3>{item.title}</h3>
              <p className="mrx-oferta__texto">{item.description}</p>
            </Ventana>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
