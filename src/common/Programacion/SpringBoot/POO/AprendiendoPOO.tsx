import { FaCodeBranch } from "react-icons/fa";
import type { PasoGuion } from "../../../Terminal/Terminal";
import { Leccion } from "../../Leccion/Leccion";
import { PortadaLeccion } from "../../Leccion/PortadaLeccion";
import { ejemplosPooBasico } from './data/ejemplosPooBasico';
import { ejemplosPooIntermedio } from './data/ejemplosPooIntermedio';
import { ejemplosPooAvanzado } from './data/ejemplosPooAvanzado';

const NIVELES = [
  { ancla: "#basico", nombre: "Básico", detalle: `${ejemplosPooBasico.length} ejemplos` },
  { ancla: "#intermedio", nombre: "Intermedio", detalle: `${ejemplosPooIntermedio.length} ejemplos` },
  { ancla: "#avanzado", nombre: "Avanzado", detalle: `${ejemplosPooAvanzado.length} ejemplos` },
];

const GUION: PasoGuion[] = [
  { tipo: "cmd", texto: "javac Persona.java Main.java" },
  { tipo: "cmd", texto: "java Main" },
  { tipo: "out", texto: "Nombre: Carlos" },
  { tipo: "out", texto: "➜ Un objeto creado a partir de su clase", clase: "t-verde" },
];

export const PooPortada = () => (
  <PortadaLeccion
    nombre="POO"
    Icon={FaCodeBranch}
    color="#4ade80"
    bajada="Paso a paso hacia el desarrollo en Java implementando POO: clases, objetos, herencia, polimorfismo y encapsulamiento con ejemplos comentados."
    niveles={NIVELES}
    carpeta="poo"
    guion={GUION}
    ruta={{ nombre: "Spring Boot", link: "/springbootinfo" }}
  />
);

export const AprendiendoPOO = () => (
  <Leccion
    id="basico"
    nivel={1}
    etiqueta="básico"
    tipo="java"
    titulo={<>POO <em>básico</em></>}
    bajada="Paso a paso hacia el desarrollo en Java implementado POO"
    ejemplos={ejemplosPooBasico}
  />
);
