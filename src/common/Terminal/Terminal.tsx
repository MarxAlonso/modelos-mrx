import { useEffect, useState, type ReactNode } from "react";

interface VentanaProps {
  shell: "powershell" | "linux";
  titulo: string;
  className?: string;
  children: ReactNode;
}

/** Ventana de terminal decorativa: PowerShell o una consola de Linux. */
export const Ventana = ({ shell, titulo, className = "", children }: VentanaProps) => (
  <div className={`mrx-term mrx-term--${shell} ${className}`}>
    <div className="mrx-term__barra">
      {shell === "linux" ? (
        <>
          <span className="mrx-term__luces"><i /><i /><i /></span>
          <span className="mrx-term__titulo">{titulo}</span>
        </>
      ) : (
        <>
          <span className="mrx-term__ps">&gt;_</span>
          <span className="mrx-term__titulo">{titulo}</span>
          <span className="mrx-term__controles">
            <svg viewBox="0 0 10 10"><path d="M1 5h8" /></svg>
            <svg viewBox="0 0 10 10"><path d="M1.5 1.5h7v7h-7z" /></svg>
            <svg viewBox="0 0 10 10"><path d="m1 1 8 8M9 1 1 9" /></svg>
          </span>
        </>
      )}
    </div>
    <div className="mrx-term__cuerpo">{children}</div>
  </div>
);

export interface PasoGuion {
  /** `cmd` se teclea letra a letra tras el prompt; `out` aparece de golpe. */
  tipo: "cmd" | "out";
  texto: string;
  clase?: string;
}

const menosMovimiento = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

interface GuionProps {
  prompt: ReactNode;
  guion: PasoGuion[];
}

/** Teclea un guion de comandos en bucle, como una sesión grabada. */
export const Guion = ({ prompt, guion }: GuionProps) => {
  const [reduce] = useState(menosMovimiento);
  const [paso, setPaso] = useState(reduce ? guion.length : 0);
  const [letras, setLetras] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const actual = guion[paso];
    let espera: number;
    let siguiente: () => void;

    if (!actual) {
      // guion completo: se queda un momento a la vista y vuelve a empezar
      espera = 3200;
      siguiente = () => { setPaso(0); setLetras(0); };
    } else if (actual.tipo === "cmd" && letras < actual.texto.length) {
      espera = 55;
      siguiente = () => setLetras(letras + 1);
    } else {
      espera = actual.tipo === "cmd" ? 380 : 520;
      siguiente = () => { setPaso(paso + 1); setLetras(0); };
    }

    const id = window.setTimeout(siguiente, espera);
    return () => window.clearTimeout(id);
  }, [reduce, guion, paso, letras]);

  const enCurso = guion[paso];

  return (
    <>
      {guion.slice(0, paso).map((linea, i) => (
        <p key={i} className={linea.clase}>
          {linea.tipo === "cmd" && prompt}
          {linea.texto}
        </p>
      ))}
      {/* mientras llega una salida no hay prompt: el comando sigue corriendo */}
      {enCurso?.tipo !== "out" && (
        <p>
          {prompt}
          {enCurso?.texto.slice(0, letras)}
          <span className="mrx-term__cursor" />
        </p>
      )}
    </>
  );
};
