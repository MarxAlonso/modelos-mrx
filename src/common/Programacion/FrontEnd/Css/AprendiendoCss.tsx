import { FaCss3Alt } from "react-icons/fa";
import type { PasoGuion } from "../../../Terminal/Terminal";
import { Leccion } from "../../Leccion/Leccion";
import { PortadaLeccion } from "../../Leccion/PortadaLeccion";
import { ejemplosCSS } from './data/ejemploCss';
import { ejemplosCSSIntermedio } from './data/ejemplosCSSIntermedio';

const NIVELES = [
  { ancla: "#basico", nombre: "Básico", detalle: `${ejemplosCSS.length} ejemplos` },
  { ancla: "#intermedio", nombre: "Intermedio", detalle: `${ejemplosCSSIntermedio.length} ejemplos` },
  { ancla: "#editor", nombre: "Editor en vivo", detalle: "HTML + CSS" },
];

const GUION: PasoGuion[] = [
  { tipo: "cmd", texto: "touch estilos.css" },
  { tipo: "cmd", texto: 'echo "h1 { color: rebeccapurple; }" > estilos.css' },
  { tipo: "cmd", texto: "open index.html" },
  { tipo: "out", texto: "➜ El título ya salió morado", clase: "t-verde" },
];

export const CssPortada = () => (
  <PortadaLeccion
    nombre="CSS3"
    Icon={FaCss3Alt}
    color="#60a5fa"
    bajada="Lo principal de CSS, estilizando la web paso a paso: cada ejemplo trae sus estilos, su HTML y el resultado real en un navegador."
    niveles={NIVELES}
    carpeta="css"
    guion={GUION}
  />
);

export const AprendiendoCss = () => (
  <Leccion
    id="basico"
    nivel={1}
    etiqueta="básico"
    tipo="css"
    titulo={<>Lo principal <em>de CSS</em></>}
    bajada="Estilizando el web paso a paso"
    ejemplos={ejemplosCSS}
  />
);

export const AprendiendoCssIntermedio = () => (
  <Leccion
    id="intermedio"
    nivel={2}
    etiqueta="intermedio"
    tipo="css"
    titulo={<>CSS <em>intermedio</em></>}
    bajada="Dominando técnicas avanzadas de CSS"
    ejemplos={ejemplosCSSIntermedio}
  />
);
