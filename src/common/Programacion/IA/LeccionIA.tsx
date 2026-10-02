import { useMemo, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaCheck, FaRegCopy, FaTimes } from "react-icons/fa";
import { Ventana } from "../../Terminal/Terminal";
import { Explicacion } from "../Leccion/Leccion";
import { resaltar, sinSangria, type Lenguaje } from "../Leccion/resaltar";
import { OpenCode } from "./OpenCode";
import type { EjemploIA, LineaSesion } from "./sesion";
import "../Leccion/leccion.css";
import "./ia.css";

const dosCifras = (n: number) => String(n).padStart(2, "0");

const LENGUAJES: Record<string, Lenguaje> = {
  json: "json",
  md: "md",
  js: "js",
  html: "html",
  css: "css",
  java: "java",
  // los .env y los .toml son pares clave=valor, como un .properties
  properties: "properties",
};

/** Copia un texto al portapapeles y avisa durante un momento. */
function useCopiar() {
  const [copiado, setCopiado] = useState<string | null>(null);
  const copiar = async (clave: string, texto: string) => {
    try {
      await navigator.clipboard.writeText(texto);
      setCopiado(clave);
      window.setTimeout(() => setCopiado((c) => (c === clave ? null : c)), 1800);
    } catch {
      // sin permiso de portapapeles: el texto sigue seleccionable a mano
    }
  };
  return { copiado, copiar };
}

interface ComparadorProps {
  antes: string;
  fallo?: string;
  despues: string;
}

/** El mismo pedido dos veces: el prompt flojo y el que de verdad funciona. */
const Comparador = ({ antes, fallo, despues }: ComparadorProps) => {
  const { copiado, copiar } = useCopiar();
  return (
    <div className="mrx-cmp">
      <div className="mrx-cmp__lado" data-lado="malo">
        <span className="mrx-cmp__rotulo"><FaTimes /> Prompt flojo</span>
        <p className="mrx-cmp__prompt">{antes}</p>
        {fallo && <p className="mrx-cmp__fallo">{fallo}</p>}
      </div>
      <div className="mrx-cmp__lado" data-lado="bueno">
        <span className="mrx-cmp__rotulo"><FaCheck /> Prompt claro</span>
        <button type="button" className="mrx-lec__copiar" onClick={() => copiar("prompt", despues)}>
          {copiado ? <FaCheck /> : <FaRegCopy />}
          {copiado ? "Copiado" : "Copiar"}
        </button>
        <p className="mrx-cmp__prompt">{despues}</p>
      </div>
    </div>
  );
};

interface LeccionIAProps {
  id: string;
  nivel: number;
  etiqueta: string;
  titulo: ReactNode;
  bajada: string;
  ejemplos: EjemploIA[];
}

/**
 * Un nivel de la ruta de IA: el índice de ejemplos a un lado y, para el
 * elegido, el prompt flojo frente al claro, la sesión de OpenCode que lo
 * resuelve, los archivos que se escriben a mano y la explicación.
 */
export const LeccionIA = ({ id, nivel, etiqueta, titulo, bajada, ejemplos }: LeccionIAProps) => {
  const [actual, setActual] = useState(0);
  const [pestana, setPestana] = useState(0);
  const raiz = useRef<HTMLElement>(null);
  const { copiado, copiar } = useCopiar();

  const ejemplo = ejemplos[actual];
  const archivos = useMemo(
    () => (ejemplo.archivos ?? []).map((a) => ({ ...a, codigo: sinSangria(a.codigo) })),
    [ejemplo],
  );
  const archivo = archivos[pestana] ?? archivos[0];
  const lineas = useMemo(
    () => (archivo ? resaltar(archivo.codigo, LENGUAJES[archivo.lenguaje] ?? "md") : []),
    [archivo],
  );
  // el prompt claro es el primero que el alumno envía en la sesión
  const prompt = ejemplo.sesion.find((l): l is Extract<LineaSesion, { tipo: "usuario" }> => l.tipo === "usuario");

  const ir = (i: number, subir = false) => {
    setActual(Math.max(0, Math.min(ejemplos.length - 1, i)));
    setPestana(0);
    if (subir) raiz.current?.querySelector(".mrx-lec__visor")?.scrollIntoView({ behavior: "smooth", block: "start" });
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
          <nav className="mrx-lec__indice" aria-label={`Ejemplos de ${etiqueta}`}>
            <span className="mrx-lec__carpeta">
              <span className="t-verde">$</span> ls {id}/
            </span>
            <ol>
              {ejemplos.map((e, i) => (
                <li key={e.titulo}>
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
                {ejemplo.antes && prompt && (
                  <Comparador antes={sinSangria(ejemplo.antes)} fallo={ejemplo.fallo} despues={prompt.texto} />
                )}

                <OpenCode
                  className="mrx-ia__ancho"
                  sesion={ejemplo.sesion}
                  agente={ejemplo.agente}
                  modelo={ejemplo.modelo}
                  carpeta={ejemplo.carpeta}
                />

                {archivo && (
                  <Ventana
                    shell="linux"
                    // los archivos globales ya traen su ruta desde la carpeta personal
                    titulo={archivo.nombre.startsWith("~") ? archivo.nombre : `~/${ejemplo.carpeta ?? "mi-proyecto"}/${archivo.nombre}`}
                    className="mrx-lec__codigo mrx-ia__archivos"
                  >
                    <div className="mrx-lec__barra">
                      <div className="mrx-lec__pestanas" role="tablist" aria-label="Archivos del ejemplo">
                        {archivos.map((a, i) => (
                          <button
                            key={a.nombre}
                            type="button"
                            role="tab"
                            aria-selected={i === pestana}
                            onClick={() => setPestana(i)}
                          >
                            {a.nombre}
                          </button>
                        ))}
                      </div>
                      <button type="button" className="mrx-lec__copiar" onClick={() => copiar(archivo.nombre, archivo.codigo)}>
                        {copiado === archivo.nombre ? <FaCheck /> : <FaRegCopy />}
                        {copiado === archivo.nombre ? "Copiado" : "Copiar"}
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
                )}

                <Ventana shell="powershell" titulo="Windows PowerShell" className="mrx-lec__explicacion mrx-ia__ancho">
                  <p>
                    <span className="t-lila">PS&gt;</span> Get-Help <span className="t-mute">{id}/{dosCifras(actual + 1)}</span>
                  </p>
                  <Explicacion texto={ejemplo.explicacion} />
                </Ventana>
              </motion.div>
            </AnimatePresence>

            <div className="mrx-lec__pasos">
              <button type="button" className="mrx-cta mrx-cta--linea" disabled={actual === 0} onClick={() => ir(actual - 1, true)}>
                <FaArrowLeft /> Anterior
              </button>
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
    </section>
  );
};
