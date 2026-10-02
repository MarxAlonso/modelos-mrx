import { FaHtml5 } from "react-icons/fa";
import type { PasoGuion } from "../../../Terminal/Terminal";
import { Leccion } from "../../Leccion/Leccion";
import { PortadaLeccion } from "../../Leccion/PortadaLeccion";
import { ejemplosHTML } from './data/ejemplosHtml';
import { ejemplosHTMLIntermedio } from './data/ejemplosHTMLIntermedio';

const NIVELES = [
  { ancla: "#basico", nombre: "Básico", detalle: `${ejemplosHTML.length} ejemplos` },
  { ancla: "#intermedio", nombre: "Intermedio", detalle: `${ejemplosHTMLIntermedio.length} ejemplos` },
  { ancla: "#editor", nombre: "Editor en vivo", detalle: "HTML + CSS" },
];

const GUION: PasoGuion[] = [
  { tipo: "cmd", texto: "touch index.html" },
  { tipo: "cmd", texto: 'echo "<h1>¡Hola Mundo!</h1>" > index.html' },
  { tipo: "cmd", texto: "open index.html" },
  { tipo: "out", texto: "➜ Tu primera página ya está en el navegador", clase: "t-verde" },
];

export const HtmlPortada = () => (
  <PortadaLeccion
    nombre="HTML5"
    Icon={FaHtml5}
    color="#fb923c"
    bajada="Lo principal del HTML, paso a paso hacia el desarrollo web: lee el código, mira el resultado y pruébalo tú en el editor."
    niveles={NIVELES}
    carpeta="html"
    guion={GUION}
  />
);

export const AprendiendoHtml = () => (
  <Leccion
    id="basico"
    nivel={1}
    etiqueta="básico"
    titulo={<>Lo principal <em>del HTML</em></>}
    bajada="Paso a paso hacia el desarrollo web"
    ejemplos={ejemplosHTML}
  />
);

export const AprendiendoHtmlIntermedio = () => (
  <Leccion
    id="intermedio"
    nivel={2}
    etiqueta="intermedio"
    titulo={<>HTML <em>intermedio</em></>}
    bajada="Dominando conceptos avanzados de HTML"
    ejemplos={ejemplosHTMLIntermedio}
  />
);
