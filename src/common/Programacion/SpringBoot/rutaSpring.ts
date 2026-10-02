import { FaCode, FaCodeBranch, FaDatabase, FaJava, FaProjectDiagram, FaServer } from "react-icons/fa";
import type { PasoRuta } from "../Ruta/ruta";

export const RUTA_SPRING: PasoRuta[] = [
  {
    nombre: "Java",
    descripcion: "Fundamentos del lenguaje orientado a objetos",
    resumen: "Fundamentos del lenguaje orientado a objetos",
    color: "#fb923c",
    Icon: FaJava,
    ruta: "/aprendiendojava",
  },
  {
    nombre: "POO",
    descripcion: "Programación orientada a objetos aplicada",
    resumen: "Programación orientada a objetos aplicada",
    color: "#4ade80",
    Icon: FaCodeBranch,
    ruta: "/aprendiendopoo",
  },
  {
    nombre: "Spring Core",
    descripcion: "Inversión de control y dependencias",
    resumen: "Inversión de control y contenedor de dependencias",
    color: "#22d3ee",
    Icon: FaProjectDiagram,
    ruta: "/aprendiendospringcore",
  },
  {
    nombre: "Spring Boot",
    descripcion: "Framework para crear aplicaciones web",
    resumen: "Framework para construir aplicaciones backend",
    color: "#facc15",
    Icon: FaServer,
    ruta: "/springboot",
  },
  {
    nombre: "MySQL",
    descripcion: "Conexión a bases de datos relacionales",
    resumen: "Gestión de base de datos relacional",
    color: "#a78bfa",
    Icon: FaDatabase,
  },
  {
    nombre: "APIs REST",
    descripcion: "Construcción de servicios web RESTful",
    resumen: "Creación de servicios RESTful modernos",
    color: "#f472b6",
    Icon: FaCode,
  },
];
