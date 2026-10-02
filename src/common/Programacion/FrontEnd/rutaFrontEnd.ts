import { FaBootstrap, FaCode, FaCss3Alt, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import type { PasoRuta } from "../Ruta/ruta";

export const RUTA_FRONTEND: PasoRuta[] = [
  {
    nombre: "HTML5",
    descripcion: "Estructura y semántica web moderna",
    resumen: "El lenguaje fundamental de la web",
    color: "#fb923c",
    Icon: FaHtml5,
    ruta: "/aprendiendohtml",
  },
  {
    nombre: "CSS3",
    descripcion: "Diseño responsive y animaciones",
    resumen: "Estiliza y da vida a tus páginas",
    color: "#60a5fa",
    Icon: FaCss3Alt,
    ruta: "/aprendiendocss",
  },
  {
    nombre: "JavaScript",
    descripcion: "Interactividad y dinamismo",
    resumen: "Añade interactividad y dinamismo",
    color: "#facc15",
    Icon: FaJs,
    ruta: "/aprendiendojs",
  },
  {
    nombre: "Bootstrap",
    descripcion: "Framework CSS responsive",
    resumen: "Framework CSS responsive y moderno",
    color: "#a78bfa",
    Icon: FaBootstrap,
    ruta: "/aprendiendobootstrap",
  },
  {
    nombre: "React",
    descripcion: "Desarrollo de SPA modernas",
    resumen: "Construye interfaces modernas",
    color: "#22d3ee",
    Icon: FaReact,
  },
  {
    nombre: "Más",
    descripcion: "Tailwind, SASS, y más",
    resumen: "Tailwind, SASS, y más",
    color: "#4ade80",
    Icon: FaCode,
  },
];
