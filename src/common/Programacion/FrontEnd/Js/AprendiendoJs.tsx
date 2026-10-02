import { FaJs } from "react-icons/fa";
import type { PasoGuion } from "../../../Terminal/Terminal";
import { Leccion } from "../../Leccion/Leccion";
import { PortadaLeccion } from "../../Leccion/PortadaLeccion";
import { ejemplosJS } from './ejemplosJS';
import { ejemplosJSIntermedio } from './ejemplosJsIntermedio';
import { ejemplosAvanzados } from './ejemplosAvanzados';

const NIVELES = [
  { ancla: "#basico", nombre: "Básico", detalle: `${ejemplosJS.length} ejemplos` },
  { ancla: "#intermedio", nombre: "Intermedio", detalle: `${ejemplosJSIntermedio.length} ejemplos` },
  { ancla: "#avanzado", nombre: "Avanzado", detalle: `${ejemplosAvanzados.length} ejemplos` },
  { ancla: "#editor", nombre: "Consola en vivo", detalle: "Ejecuta tu código" },
];

const GUION: PasoGuion[] = [
  { tipo: "cmd", texto: "echo \"console.log('¡Hola Mundo!')\" > app.js" },
  { tipo: "cmd", texto: "node app.js" },
  { tipo: "out", texto: "¡Hola Mundo!" },
  { tipo: "out", texto: "➜ Tu primer programa ya corre", clase: "t-verde" },
];

export const JsPortada = () => (
  <PortadaLeccion
    nombre="JavaScript"
    Icon={FaJs}
    color="#facc15"
    bajada="Fundamentos de programación con JavaScript: cada ejemplo se ejecuta de verdad y su consola te muestra lo que imprime."
    niveles={NIVELES}
    carpeta="js"
    guion={GUION}
  />
);

export const AprendiendoJs = () => (
  <Leccion
    id="basico"
    nivel={1}
    etiqueta="básico"
    tipo="js"
    titulo={<>Aprendiendo <em>JavaScript</em></>}
    bajada="Fundamentos de programación con JavaScript"
    ejemplos={ejemplosJS}
  />
);

export const AprendiendoJsIntermedio = () => (
  <Leccion
    id="intermedio"
    nivel={2}
    etiqueta="intermedio"
    tipo="js"
    titulo={<>JavaScript <em>intermedio</em></>}
    bajada="Funciones modernas, arrays, destructuring y promesas"
    ejemplos={ejemplosJSIntermedio}
  />
);

export const AprendiendoJsAvanzado = () => (
  <Leccion
    id="avanzado"
    nivel={3}
    etiqueta="avanzado"
    tipo="js"
    titulo={<>JavaScript <em>avanzado</em></>}
    bajada="Fundamentos de programación Avanzado con JavaScript"
    ejemplos={ejemplosAvanzados}
  />
);
