import { useEffect, useRef, useState, type CSSProperties } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Ventana } from "../../Terminal/Terminal";
import type { PasoRuta } from "./ruta";
import "./boton-ruta.css";

interface BotonRutaProps {
  pasos: PasoRuta[];
}

/**
 * Botón flotante «por dónde empezar»: una celda hexagonal con un anillo que
 * gira a su alrededor. Abre la ruta dentro de una ventana de terminal; en
 * móvil esa ventana ocupa el ancho de la pantalla sobre el botón.
 */
export const BotonRuta = ({ pasos }: BotonRutaProps) => {
  const { pathname } = useLocation();
  const [abierto, setAbierto] = useState(false);
  const raiz = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!abierto) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAbierto(false);
    };
    // un toque fuera del panel lo cierra
    const onPointer = (e: PointerEvent) => {
      if (!raiz.current?.contains(e.target as Node)) setAbierto(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [abierto]);

  return (
    <div className="mrx-fab mrx-oscura" ref={raiz} data-abierto={abierto || undefined}>
      <AnimatePresence>
        {abierto && (
          <motion.div
            id="ruta-rapida"
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mrx-fab__panel"
          >
            <Ventana shell="linux" titulo="marx@coders: ~/ruta">
              <p className="mrx-fab__comando">
                <span className="t-verde">$ </span>ls ruta/ <span className="t-mute"># ¿por dónde empezar?</span>
              </p>
              <ul className="mrx-fab__lista">
                {pasos.map((paso, index) => {
                  const aqui = paso.ruta === pathname;
                  const contenido = (
                    <>
                      <span className="mrx-num mrx-fab__indice">0{index + 1}</span>
                      <paso.Icon className="mrx-fab__icono" />
                      <span className="mrx-fab__texto">
                        <b>{paso.nombre}</b>
                        <small>{paso.resumen}</small>
                      </span>
                      <span className="mrx-fab__ir">{aqui ? "Aquí" : paso.ruta ? "→" : "Pronto"}</span>
                    </>
                  );
                  return (
                    <motion.li
                      key={paso.nombre}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + index * 0.05 }}
                      style={{ "--tinte": paso.color } as CSSProperties}
                    >
                      {paso.ruta ? (
                        <Link
                          to={paso.ruta}
                          className="mrx-fab__enlace"
                          aria-current={aqui ? "page" : undefined}
                          onClick={() => setAbierto(false)}
                        >
                          {contenido}
                        </Link>
                      ) : (
                        <div className="mrx-fab__enlace mrx-fab__enlace--pronto">{contenido}</div>
                      )}
                    </motion.li>
                  );
                })}
              </ul>
            </Ventana>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        className="mrx-fab__boton"
        aria-expanded={abierto}
        aria-controls="ruta-rapida"
        aria-label={abierto ? "Cerrar la ruta" : "¿Por dónde empezar?"}
        onClick={() => setAbierto(!abierto)}
      >
        {/* el anillo: una celda mayor cuyo trazo no deja de recorrerse */}
        <svg className="mrx-fab__anillo" viewBox="0 0 80 88" aria-hidden="true">
          <path d="M40 3 76 23.5v41L40 85 4 64.5v-41z" />
          <path d="M40 3 76 23.5v41L40 85 4 64.5v-41z" />
        </svg>
        <span className="mrx-fab__celda">
          <span className="mrx-fab__glifo" aria-hidden="true">{abierto ? "×" : "</>"}</span>
          <span className="mrx-fab__barrido" aria-hidden="true" />
        </span>
      </button>
      <span className="mrx-hud mrx-fab__rotulo" aria-hidden="true">Empezar</span>
    </div>
  );
};
