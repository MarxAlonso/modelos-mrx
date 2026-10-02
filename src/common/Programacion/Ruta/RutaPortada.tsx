import { useEffect, useState, type CSSProperties, type ReactNode } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Panal } from "../../Nano/Panal";
import { Ventana } from "../../Terminal/Terminal";
import type { Trozo } from "../Leccion/resaltar";
import type { PasoRuta } from "./ruta";
import "./ruta.css";

export interface ArchivoDemo {
  nombre: string;
  /** El código ya coloreado, línea a línea. */
  lineas: Trozo[][];
}

/** Cada cuánto cambia sola la pestaña del editor. */
const RITMO_ARCHIVO = 4200;

interface EditorDemoProps {
  titulo: string;
  archivos: ArchivoDemo[];
  /** Lo que ese código produce: una ventana que asoma por la esquina. */
  children: ReactNode;
}

/** Editor de muestra de una portada: unos pocos archivos cuyas pestañas rotan solas. */
export const EditorDemo = ({ titulo, archivos, children }: EditorDemoProps) => {
  const [activo, setActivo] = useState(0);
  const [manual, setManual] = useState(false);

  // las pestañas rotan solas hasta que el visitante elige una
  useEffect(() => {
    if (manual || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setActivo((a) => (a + 1) % archivos.length), RITMO_ARCHIVO);
    return () => window.clearInterval(id);
  }, [manual, archivos.length]);

  return (
    <div className="mrx-fe-editor">
      <Ventana shell="linux" titulo={titulo}>
        <div className="mrx-fe-editor__pestanas" role="tablist" aria-label="Archivos">
          {archivos.map((archivo, i) => (
            <button
              key={archivo.nombre}
              type="button"
              role="tab"
              aria-selected={i === activo}
              onClick={() => {
                setManual(true);
                setActivo(i);
              }}
            >
              {archivo.nombre}
            </button>
          ))}
        </div>
        <div className="mrx-fe-editor__codigo" role="tabpanel">
          {archivos[activo].lineas.map((linea, i, todas) => (
            <p key={`${activo}-${i}`} style={{ animationDelay: `${i * 0.12}s` }}>
              <span className="mrx-fe-editor__num">{i + 1}</span>
              {linea.map(([texto, clase], j) => (
                <span key={j} className={clase}>{texto}</span>
              ))}
              {i === todas.length - 1 && <span className="mrx-term__cursor" />}
            </p>
          ))}
        </div>
      </Ventana>
      {children}
    </div>
  );
};

interface RutaPortadaProps {
  /** Tiñe el titular y el fondo: el color de la capa en la pila del inicio. */
  tono: "frontend" | "backend" | "ia";
  claim: string;
  /** Las tres líneas del titular; la segunda va en contorno y se rellena. */
  titulo: [string, string, ReactNode];
  bajada: string;
  /** El primer paso de la ruta, al que lleva el botón principal. */
  primerPaso: { texto: string; ruta: string };
  /** La pieza de la derecha: el editor de muestra. */
  children: ReactNode;
}

/** Portada de una ruta de aprendizaje: titular a la izquierda y un editor a la derecha. */
export const RutaPortada = ({ tono, claim, titulo, bajada, primerPaso, children }: RutaPortadaProps) => (
  <section className="mrx-fe-hero mrx-oscura" data-tono={tono}>
    <div className="mrx-fe-hero__fondo" aria-hidden="true" />
    <div className="mrx-fe-hero__trama" aria-hidden="true" />
    <Panal className="mrx-fe-panal--a" />
    <Panal className="mrx-fe-panal--b" />

    <div className="mrx-fe-hero__marco">
      <div className="mrx-fe-hero__texto">
        <span className="mrx-hud mrx-fade" style={{ animationDelay: ".7s" }}>{claim}</span>

        <h1 className="mrx-display mrx-fe-hero__titulo">
          <span className="mrx-mask"><span className="mrx-rise">{titulo[0]}</span></span>
          <span className="mrx-mask">
            <span className="mrx-rise" style={{ animationDelay: ".1s" }}>
              <span className="mrx-fill" data-word={titulo[1]}>{titulo[1]}</span>
            </span>
          </span>
          <span className="mrx-mask">
            <span className="mrx-rise" style={{ animationDelay: ".2s" }}>{titulo[2]}</span>
          </span>
        </h1>

        <p className="mrx-fe-hero__bajada mrx-fade" style={{ animationDelay: ".9s" }}>{bajada}</p>

        <div className="mrx-fe-hero__acciones mrx-fade" style={{ animationDelay: "1.1s" }}>
          <Link to={primerPaso.ruta} className="mrx-cta mrx-cta--lleno"><i />{primerPaso.texto}</Link>
          <a href="#ruta" className="mrx-cta mrx-cta--linea">Ver la ruta</a>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.9 }}
      >
        {children}
      </motion.div>
    </div>
  </section>
);

/** Tecnologías: la ruta paso a paso */
export const RutaPasos = ({ pasos }: { pasos: PasoRuta[] }) => (
  <section id="ruta" className="mrx-fe-ruta mrx-oscura">
    <div className="mrx-fe-marco">
      <span className="mrx-hud">// la ruta</span>
      <h2 className="mrx-titulo-seccion">La ruta, <em>paso a paso</em></h2>

      <ol className="mrx-fe-ruta__pasos">
        {pasos.map((paso, index) => {
          const contenido = (
            <>
              <span className="mrx-fe-paso__celda"><paso.Icon /></span>
              <span className="mrx-num mrx-fe-paso__indice">0{index + 1}</span>
              <h3>{paso.nombre}</h3>
              <p>{paso.descripcion}</p>
              <span className="mrx-fe-paso__pie">
                {paso.ruta ? <>Abrir lección <i /></> : "Pronto"}
              </span>
            </>
          );
          return (
            <motion.li
              key={paso.nombre}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              style={{ "--tinte": paso.color } as CSSProperties}
            >
              {paso.ruta ? (
                <Link to={paso.ruta} className="mrx-fe-paso">{contenido}</Link>
              ) : (
                <div className="mrx-fe-paso mrx-fe-paso--pronto">{contenido}</div>
              )}
            </motion.li>
          );
        })}
      </ol>
    </div>
  </section>
);
