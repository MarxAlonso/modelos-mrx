import { ThinkingOrb } from "thinking-orbs";

interface LoaderProps {
  texto?: string;
  /** Ocupa el hueco de su contenedor en vez de la pantalla completa. */
  bloque?: boolean;
}

export const Loader = ({ texto = "Cargando", bloque = false }: LoaderProps) => (
  <div className={`mrx-loader mrx-oscura ${bloque ? "mrx-loader--bloque" : ""}`} role="status">
    <ThinkingOrb state="connecting" size={64} theme="dark" color="#a78bfa" aria-label={texto} />
    <span className="mrx-hud">{texto}…</span>
  </div>
);
