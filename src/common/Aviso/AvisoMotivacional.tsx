import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { IconType } from "react-icons";
import { Ventana } from "../Terminal/Terminal";
import "./aviso.css";

export interface MensajeMotivacional {
  titulo: string;
  mensaje: string;
  icon: IconType;
}

interface AvisoProps {
  mensajes: MensajeMotivacional[];
  /** Cuánto queda a la vista el primer mensaje, en ms. */
  duracion?: number;
  /** Cuánto quedan a la vista los siguientes, en ms. */
  duracionSiguientes?: number;
}

/** Cada cuánto aparece un mensaje nuevo: 5 minutos. */
const INTERVALO = 300000;

/**
 * Mensaje motivacional en una ventana de PowerShell: aparece al entrar y
 * vuelve cada cinco minutos con el siguiente de la lista.
 */
export const AvisoMotivacional = ({ mensajes, duracion = 10000, duracionSiguientes = duracion }: AvisoProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    let ocultar = window.setTimeout(() => setIsVisible(false), duracion);

    const interval = window.setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % mensajes.length);
      setIsVisible(true);
      window.clearTimeout(ocultar);
      ocultar = window.setTimeout(() => setIsVisible(false), duracionSiguientes);
    }, INTERVALO);

    return () => {
      window.clearTimeout(ocultar);
      window.clearInterval(interval);
    };
  }, [mensajes.length, duracion, duracionSiguientes]);

  useEffect(() => {
    if (!isVisible) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsVisible(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isVisible]);

  const mensaje = mensajes[currentMessage];
  const Icon = mensaje.icon;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="mrx-aviso mrx-oscura"
        >
          <div className="mrx-aviso__velo" onClick={() => setIsVisible(false)} />
          <motion.div
            initial={{ y: 40, scale: 0.94 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: 40, scale: 0.94 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="mrx-aviso__caja"
            role="dialog"
            aria-modal="true"
            aria-labelledby="aviso-titulo"
          >
            <Ventana shell="powershell" titulo="Mensaje del sistema">
              <p>
                <span className="t-lila">PS&gt;</span> Write-Host <span className="t-mute">-Motivacion</span>
              </p>
              <motion.div
                initial={{ rotate: -180, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ type: "spring", damping: 10 }}
                className="mrx-aviso__celda"
              >
                <Icon />
              </motion.div>
              <h3 id="aviso-titulo">{mensaje.titulo}</h3>
              <p className="mrx-aviso__texto">{mensaje.mensaje}</p>
              <button
                type="button"
                className="mrx-cta mrx-cta--lleno mrx-aviso__boton"
                onClick={() => setIsVisible(false)}
              >
                <i />¡Entendido!
              </button>
            </Ventana>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
