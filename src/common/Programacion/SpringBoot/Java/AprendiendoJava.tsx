import { FaJava } from "react-icons/fa";
import type { PasoGuion } from "../../../Terminal/Terminal";
import { Leccion } from "../../Leccion/Leccion";
import { PortadaLeccion } from "../../Leccion/PortadaLeccion";
import { ejemplosJava } from './data/ejemplosJava';
import { ejemplosJavaIntermedios } from './data/ejemplosJavaIntermedios';
import { ejemplosJavaAvanzado } from './data/ejemplosJavaAvanzado';

const NIVELES = [
  { ancla: "#basico", nombre: "Básico", detalle: `${ejemplosJava.length} ejemplos` },
  { ancla: "#intermedio", nombre: "Intermedio", detalle: `${ejemplosJavaIntermedios.length} ejemplos` },
  { ancla: "#avanzado", nombre: "Avanzado", detalle: `${ejemplosJavaAvanzado.length} ejemplos` },
];

const GUION: PasoGuion[] = [
  { tipo: "cmd", texto: "javac HolaMundo.java" },
  { tipo: "cmd", texto: "java HolaMundo" },
  { tipo: "out", texto: "¡Hola, Mundo!" },
  { tipo: "out", texto: "➜ Tu primer programa en Java ya corre", clase: "t-verde" },
];

export const JavaPortada = () => (
  <PortadaLeccion
    nombre="Java"
    Icon={FaJava}
    color="#fb923c"
    bajada="Paso a paso hacia el desarrollo en Java: cada ejemplo trae su código, la salida que da al ejecutarlo y la explicación línea a línea."
    niveles={NIVELES}
    carpeta="java"
    guion={GUION}
    ruta={{ nombre: "Spring Boot", link: "/springbootinfo" }}
  />
);

export const AprendiendoJava = () => (
  <Leccion
    id="basico"
    nivel={1}
    etiqueta="básico"
    tipo="java"
    titulo={<>Java <em>básico</em></>}
    bajada="Paso a paso hacia el desarrollo en Java"
    ejemplos={ejemplosJava}
  />
);
