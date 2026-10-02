import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaCheck, FaPlay, FaRegCopy } from "react-icons/fa";
import { Ventana } from "../../Terminal/Terminal";
import { SalidaConsola, useConsola } from "./Consola";
import { conImagenes } from "./imagenes";
import { resaltar, sinSangria, type Lenguaje } from "./resaltar";
import "./leccion.css";

/** Un archivo de un ejemplo que se reparte en varios, como un proyecto de Spring Boot. */
export interface ArchivoEjemplo {
  nombre: string;
  lenguaje: string;
  codigo: string;
}

export interface Ejemplo {
  id?: number;
  titulo: string;
  descripcion: string;
  /** El código del ejemplo, cuando cabe en un solo archivo. */
  codigo?: string;
  /** Los archivos del ejemplo, cuando es un proyecto. */
  archivos?: ArchivoEjemplo[];
  /** El HTML sobre el que actúa el código, en las lecciones de CSS y Bootstrap. */
  html?: string;
  /** Qué se ve al ejecutar el código, contado con palabras. */
  resultado?: string;
  explicacion: string;
}

/**
 * Qué enseña el nivel, que decide cómo se prueba cada ejemplo:
 * - `html`: `codigo` es la página y se pinta tal cual;
 * - `css`: `codigo` son los estilos de la página `html`;
 * - `bootstrap`: `html` es un documento completo con Bootstrap y `codigo` sus estilos propios;
 * - `js`: `codigo` se ejecuta y se muestra lo que imprime en la consola;
 * - `java`: no se puede ejecutar en el navegador: la consola muestra la salida esperada (`resultado`);
 * - `proyecto`: varios `archivos` de un proyecto de Spring Boot; `resultado` cuenta qué se obtiene al arrancarlo.
 */
export type TipoLeccion = "html" | "css" | "bootstrap" | "js" | "java" | "proyecto";

/** Los tipos cuyo resultado es una página que se pinta en un navegador. */
type TipoPagina = "html" | "css" | "bootstrap";

interface NavegadorProps {
  url: string;
  className?: string;
  children: ReactNode;
}

/** Ventana de navegador: enmarca lo que el código pinta. */
export const Navegador = ({ url, className = "", children }: NavegadorProps) => (
  <div className={`mrx-nav ${className}`}>
    <div className="mrx-nav__barra">
      <span className="mrx-nav__luces"><i /><i /><i /></span>
      <span className="mrx-nav__url">{url}</span>
    </div>
    <div className="mrx-nav__pagina">{children}</div>
  </div>
);

// los enlaces de los ejemplos no deben sacar la vista previa de su página
const BASE = '<base target="_blank">';
const ESTILO_BASE = "<style>body{margin:16px;font-family:system-ui,sans-serif;line-height:1.5;color:#111}img,video,iframe{max-width:100%}</style>";

/** El documento que se pinta en la vista previa de un ejemplo. */
function documento(tipo: TipoPagina, ejemplo: { codigo: string; html: string }) {
  const pagina = conImagenes(tipo === "html" ? ejemplo.codigo : ejemplo.html);
  const estilos = tipo === "html" ? "" : `<style>${ejemplo.codigo}</style>`;

  if (/<html[\s>]/i.test(pagina)) {
    // documento completo: la base va al principio del head y los estilos al final
    const conBase = /<head[\s>]/i.test(pagina) ? pagina.replace(/<head[^>]*>/i, (m) => m + BASE) : BASE + pagina;
    return /<\/head>/i.test(conBase) ? conBase.replace(/<\/head>/i, estilos + "</head>") : estilos + conBase;
  }
  return `<!DOCTYPE html><html lang="es"><head>${BASE}${ESTILO_BASE}${estilos}</head><body>${pagina}</body></html>`;
}

/** Límites del alto de la vista previa, en px. */
const ALTO_MIN = 96;
const ALTO_MAX = 440;

interface VistaProps {
  tipo: TipoPagina;
  documento: string;
  titulo: string;
}

const VistaPrevia = ({ tipo, documento, titulo }: VistaProps) => {
  const [alto, setAlto] = useState(ALTO_MIN);

  // Bootstrap necesita sus scripts (modales, pestañas…): con scripts el marco
  // queda aislado del todo, no se puede medir y lleva un alto fijo.
  if (tipo === "bootstrap") {
    return (
      <iframe
        title={`Resultado: ${titulo}`}
        srcDoc={documento}
        sandbox="allow-scripts allow-modals allow-forms"
        style={{ height: ALTO_MAX }}
      />
    );
  }

  return (
    <iframe
      title={`Resultado: ${titulo}`}
      srcDoc={documento}
      // sin scripts: solo se permite el mismo origen para poder medir el alto
      sandbox="allow-same-origin"
      style={{ height: alto }}
      onLoad={(e) => {
        const doc = e.currentTarget.contentDocument;
        if (doc) setAlto(Math.max(ALTO_MIN, Math.min(ALTO_MAX, doc.documentElement.scrollHeight)));
      }}
    />
  );
};

/** Pinta como código lo que el texto trae entre acentos graves. */
const conCodigo = (texto: string) =>
  texto.split("`").map((parte, i) => (i % 2 ? <code key={i}>{parte}</code> : parte));

/**
 * Parte la explicación en líneas; las que empiezan por guion son una lista de
 * términos. Algunos textos vienen con marcas de Markdown (`**negrita**`,
 * acentos graves): las negritas se quitan y los acentos pasan a código.
 */
export const Explicacion = ({ texto }: { texto: string }) => (
  <>
    {texto.replace(/\*\*/g, "").split("\n").filter((l) => l.trim()).map((linea, i) => {
      const item = linea.match(/^\s*-\s*(.*)$/);
      if (!item) return <p key={i}>{conCodigo(linea.trim())}</p>;
      const corte = item[1].indexOf(": ");
      return (
        <p key={i} className="mrx-lec__termino">
          <span className="t-verde" aria-hidden="true">➜ </span>
          {corte > 0 ? (
            <>
              <code>{item[1].slice(0, corte).replace(/`/g, "")}</code>
              <span>{conCodigo(item[1].slice(corte + 2))}</span>
            </>
          ) : (
            <span>{conCodigo(item[1])}</span>
          )}
        </p>
      );
    })}
  </>
);

interface Archivo {
  nombre: string;
  lenguaje: Lenguaje;
  codigo: string;
}

const dosCifras = (n: number) => String(n).padStart(2, "0");

const LENGUAJES: Record<string, Lenguaje> = {
  java: "java",
  html: "html",
  css: "css",
  js: "js",
  properties: "properties",
  json: "json",
  md: "md",
};

/** La clase que tiene el `main`: la que se le pasa a `java` para ejecutar el ejemplo. */
function clasePrincipal(codigo: string): string {
  const main = codigo.indexOf("static void main");
  const clases = [...codigo.matchAll(/\bclass\s+(\w+)/g)];
  const antes = clases.filter((c) => (c.index ?? 0) < main);
  return (antes[antes.length - 1] ?? clases[0])?.[1] ?? "Main";
}

/** Los archivos que forman un ejemplo; el primero es el que enseña la lección. */
function archivosDe(tipo: TipoLeccion, ejemplo: Ejemplo, numero: number): Archivo[] {
  if (ejemplo.archivos?.length) {
    return ejemplo.archivos.map((a) => ({
      nombre: a.nombre,
      lenguaje: LENGUAJES[a.lenguaje] ?? "java",
      codigo: sinSangria(a.codigo),
    }));
  }
  const codigo = sinSangria(ejemplo.codigo ?? "");
  const html = sinSangria(ejemplo.html ?? "");
  const base = `ejemplo-${dosCifras(numero)}`;
  switch (tipo) {
    case "html":
      return [{ nombre: `${base}.html`, lenguaje: "html", codigo }];
    case "js":
      return [{ nombre: `${base}.js`, lenguaje: "js", codigo }];
    case "java":
    case "proyecto":
      return [{ nombre: `${clasePrincipal(codigo)}.java`, lenguaje: "java", codigo }];
    case "css":
      return [
        { nombre: "estilos.css", lenguaje: "css", codigo },
        { nombre: "index.html", lenguaje: "html", codigo: html },
      ];
    case "bootstrap":
      return [
        { nombre: "index.html", lenguaje: "html", codigo: html },
        { nombre: "estilos.css", lenguaje: "css", codigo },
      ];
  }
}

interface LeccionProps {
  id: string;
  /** Número del nivel dentro de la página: 1, 2… */
  nivel: number;
  etiqueta: string;
  titulo: ReactNode;
  bajada: string;
  ejemplos: Ejemplo[];
  tipo?: TipoLeccion;
}

/**
 * Un nivel de la ruta: el índice de ejemplos a un lado y, para el ejemplo
 * elegido, su código en una terminal, la prueba real (un navegador o la
 * consola) y la explicación como salida de PowerShell.
 */
export const Leccion = ({ id, nivel, etiqueta, titulo, bajada, ejemplos, tipo = "html" }: LeccionProps) => {
  const [actual, setActual] = useState(0);
  const [pestana, setPestana] = useState(0);
  const [copiado, setCopiado] = useState(false);
  const raiz = useRef<HTMLElement>(null);
  const consola = useConsola();

  const ejemplo = ejemplos[actual];
  const archivos = useMemo(() => archivosDe(tipo, ejemplo, actual + 1), [tipo, ejemplo, actual]);
  const archivo = archivos[pestana] ?? archivos[0];
  const lineas = useMemo(() => resaltar(archivo.codigo, archivo.lenguaje), [archivo]);
  const principal = archivos[0];

  // un ejemplo de JavaScript se ejecuta solo al abrirlo
  const { ejecutar } = consola;
  useEffect(() => {
    if (tipo === "js") ejecutar(principal.codigo);
  }, [tipo, principal.codigo, ejecutar]);

  const ir = (i: number, subir = false) => {
    setActual(Math.max(0, Math.min(ejemplos.length - 1, i)));
    setPestana(0);
    setCopiado(false);
    // desde los botones del pie, el ejemplo nuevo empieza arriba
    if (subir) raiz.current?.querySelector(".mrx-lec__visor")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(archivo.codigo);
      setCopiado(true);
      window.setTimeout(() => setCopiado(false), 1800);
    } catch {
      // sin permiso de portapapeles: el código sigue seleccionable a mano
    }
  };

  return (
    <section id={id} className="mrx-lec mrx-oscura" ref={raiz}>
      <div className="mrx-lec__marco">
        <header className="mrx-lec__cabecera">
          <span className="mrx-hud">// nivel {dosCifras(nivel)} · {etiqueta}</span>
          <h2 className="mrx-titulo-seccion">{titulo}</h2>
          <p>{bajada}</p>
        </header>

        <div className="mrx-lec__cuerpo">
          {/* índice: los ejemplos como archivos de una carpeta */}
          <nav className="mrx-lec__indice" aria-label={`Ejemplos de ${etiqueta}`}>
            <span className="mrx-lec__carpeta">
              <span className="t-verde">$</span> ls {id}/
            </span>
            <ol>
              {ejemplos.map((e, i) => (
                <li key={e.id ?? e.titulo}>
                  <button type="button" aria-current={i === actual ? "true" : undefined} onClick={() => ir(i)}>
                    <span className="mrx-num">{dosCifras(i + 1)}</span>
                    <span>{e.titulo}</span>
                  </button>
                </li>
              ))}
            </ol>
          </nav>

          <div className="mrx-lec__visor">
            <div className="mrx-lec__titulo">
              <span className="mrx-num mrx-lec__cuenta">
                {dosCifras(actual + 1)}<small>/{dosCifras(ejemplos.length)}</small>
              </span>
              <div>
                <h3>{ejemplo.titulo}</h3>
                <p>{ejemplo.descripcion}</p>
              </div>
            </div>

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={actual}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="mrx-lec__paneles"
              >
                <Ventana shell="linux" titulo={`~/${id}/${principal.nombre}`} className="mrx-lec__codigo">
                  <div className="mrx-lec__barra">
                    {archivos.length > 1 ? (
                      <div className="mrx-lec__pestanas" role="tablist" aria-label="Archivos del ejemplo">
                        {archivos.map((a, i) => (
                          <button
                            key={a.nombre}
                            type="button"
                            role="tab"
                            aria-selected={i === pestana}
                            onClick={() => {
                              setPestana(i);
                              setCopiado(false);
                            }}
                          >
                            {a.nombre}
                          </button>
                        ))}
                      </div>
                    ) : (
                      <span className="mrx-lec__dato">
                        {archivo.lenguaje} · {lineas.length} {lineas.length === 1 ? "línea" : "líneas"}
                      </span>
                    )}
                    <button type="button" className="mrx-lec__copiar" onClick={copiar}>
                      {copiado ? <FaCheck /> : <FaRegCopy />}
                      {copiado ? "Copiado" : "Copiar"}
                    </button>
                  </div>
                  <pre>
                    <code>
                      {lineas.map((linea, i) => (
                        <span key={i} className="mrx-lec__linea">
                          <span className="mrx-lec__num" aria-hidden="true">{i + 1}</span>
                          <span>
                            {linea.map(([texto, clase], j) => (
                              <span key={j} className={clase}>{texto}</span>
                            ))}
                            {"\n"}
                          </span>
                        </span>
                      ))}
                    </code>
                  </pre>
                </Ventana>

                {tipo === "js" ? (
                  <div className="mrx-lec__resultado">
                    <Ventana shell="linux" titulo="marx@coders: ~/consola" className="mrx-consola">
                      <div className="mrx-consola__salida" aria-live="polite">
                        <p>
                          <span className="t-verde">$ </span>node {principal.nombre}
                        </p>
                        <SalidaConsola
                          lineas={consola.lineas}
                          vacio="// Este código no imprime nada: añade un console.log() en el editor de abajo para ver sus valores."
                        />
                      </div>
                      <button type="button" className="mrx-consola__ejecutar" onClick={() => ejecutar(principal.codigo)}>
                        <FaPlay /> Ejecutar de nuevo
                      </button>
                    </Ventana>
                    {ejemplo.resultado && (
                      <div className="mrx-lec__pie">
                        <span className="mrx-hud">Qué esperar</span>
                        <pre>{sinSangria(ejemplo.resultado)}</pre>
                      </div>
                    )}
                  </div>
                ) : tipo === "java" || tipo === "proyecto" ? (
                  <div className="mrx-lec__resultado">
                    {/* Java no corre en el navegador: esta es la salida que da al ejecutarlo */}
                    <Ventana shell="linux" titulo="marx@coders: ~/consola" className="mrx-consola">
                      <div className="mrx-consola__salida">
                        <p>
                          <span className="t-verde">$ </span>
                          {tipo === "proyecto"
                            ? "./mvnw spring-boot:run"
                            : // sin `main`, la clase es una pieza de un proyecto: lo arranca Maven
                              principal.codigo.includes("static void main")
                              ? `java ${principal.nombre}`
                              : "mvn -q compile exec:java"}
                        </p>
                        {tipo === "java" ? (
                          <pre className="mrx-consola__esperada">{sinSangria(ejemplo.resultado ?? "")}</pre>
                        ) : (
                          <>
                            <p className="t-mute">Started DemoApplication on port 8080</p>
                            <p className="mrx-consola__nota">
                              <span className="t-verde" aria-hidden="true">➜ </span>
                              {ejemplo.resultado}
                            </p>
                          </>
                        )}
                      </div>
                      <span className="mrx-consola__aviso">
                        {tipo === "java" ? "Salida esperada al ejecutarlo en tu equipo" : "Qué obtienes al arrancar el proyecto"}
                      </span>
                    </Ventana>
                  </div>
                ) : (
                  <div className={`mrx-lec__resultado ${tipo === "bootstrap" ? "mrx-lec__resultado--ancho" : ""}`}>
                    <Navegador url={`localhost:5173/${principal.nombre.replace("estilos.css", "index.html")}`}>
                      <VistaPrevia
                        tipo={tipo}
                        documento={documento(tipo, {
                          codigo: sinSangria(ejemplo.codigo ?? ""),
                          html: sinSangria(ejemplo.html ?? ""),
                        })}
                        titulo={ejemplo.titulo}
                      />
                    </Navegador>
                    {ejemplo.resultado && (
                      <p className="mrx-lec__pie">
                        <span className="mrx-hud">Resultado</span> {ejemplo.resultado}
                      </p>
                    )}
                  </div>
                )}

                <Ventana
                  shell="powershell"
                  titulo="Windows PowerShell"
                  className={`mrx-lec__explicacion ${tipo === "bootstrap" ? "mrx-lec__explicacion--ancho" : ""}`}
                >
                  <p>
                    <span className="t-lila">PS&gt;</span> Get-Help <span className="t-mute">{principal.nombre}</span>
                  </p>
                  <Explicacion texto={ejemplo.explicacion} />
                </Ventana>
              </motion.div>
            </AnimatePresence>

            <div className="mrx-lec__pasos">
              <button type="button" className="mrx-cta mrx-cta--linea" disabled={actual === 0} onClick={() => ir(actual - 1, true)}>
                <FaArrowLeft /> Anterior
              </button>
              {/* avance dentro del nivel */}
              <span className="mrx-lec__avance" aria-hidden="true">
                <i style={{ width: `${((actual + 1) / ejemplos.length) * 100}%` }} />
              </span>
              <button
                type="button"
                className="mrx-cta mrx-cta--lleno"
                disabled={actual === ejemplos.length - 1}
                onClick={() => ir(actual + 1, true)}
              >
                Siguiente <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* fuera de los paneles animados: el código se ejecuta una sola vez por ejemplo */}
      {consola.iframe}
    </section>
  );
};
