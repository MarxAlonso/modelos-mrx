import { FaProjectDiagram } from "react-icons/fa";
import type { PasoGuion } from "../../../Terminal/Terminal";
import { Leccion } from "../../Leccion/Leccion";
import { PortadaLeccion } from "../../Leccion/PortadaLeccion";
import { ejemplosSpringCoreBasico } from './data/ejemplosSpringCoreBasico';
import { ejemplosSpringCoreIntermedio } from './data/ejemplosSpringCoreIntermedio';

const NIVELES = [
  { ancla: "#basico", nombre: "Básico", detalle: `${ejemplosSpringCoreBasico.length} ejemplos` },
  { ancla: "#intermedio", nombre: "Intermedio", detalle: `${ejemplosSpringCoreIntermedio.length} ejemplos` },
];

const GUION: PasoGuion[] = [
  { tipo: "cmd", texto: "mvn compile exec:java" },
  { tipo: "out", texto: "Creating bean 'saludoService'", clase: "t-mute" },
  { tipo: "out", texto: "Hola desde Spring Core" },
  { tipo: "out", texto: "➜ Spring creó e inyectó el bean por ti", clase: "t-verde" },
];

export const SpringCorePortada = () => (
  <PortadaLeccion
    nombre="Spring Core"
    Icon={FaProjectDiagram}
    color="#22d3ee"
    bajada="Spring Core es el núcleo del framework Spring. Permite construir aplicaciones Java desacopladas y organizadas a través de principios como la inversión de control (IoC) y la inyección de dependencias."
    niveles={NIVELES}
    carpeta="spring-core"
    guion={GUION}
    ruta={{ nombre: "Spring Boot", link: "/springbootinfo" }}
  />
);

export const AprendiendoSpringCore = () => (
  <Leccion
    id="basico"
    nivel={1}
    etiqueta="básico"
    tipo="java"
    titulo={<>Spring Core <em>básico</em></>}
    bajada="Aprende desde cero cómo funcionan los componentes, beans, configuraciones y servicios utilizando anotaciones y el contenedor de Spring."
    ejemplos={ejemplosSpringCoreBasico}
  />
);
