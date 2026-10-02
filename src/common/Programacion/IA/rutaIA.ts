import { FaCommentDots, FaCubes, FaPlug, FaPuzzlePiece, FaRobot, FaTerminal } from "react-icons/fa";
import type { PasoRuta } from "../Ruta/ruta";

/** La ruta a la que vuelven las migas de cada lección. */
export const RUTA_IA_PORTADA = { nombre: "Prompt Libre", link: "/promptlibre" };

export const RUTA_IA: PasoRuta[] = [
  {
    nombre: "OpenCode",
    descripcion: "Instala el agente y conéctalo a modelos gratis o a la API de DeepSeek",
    resumen: "El agente de IA en tu terminal, con modelos gratis",
    color: "#fab283",
    Icon: FaTerminal,
    ruta: "/aprendiendoopencode",
  },
  {
    nombre: "Prompts",
    descripcion: "La anatomía de un buen prompt y los patrones para programar",
    resumen: "Pedir bien: contexto, tarea, límites y formato",
    color: "#22d3ee",
    Icon: FaCommentDots,
    ruta: "/aprendiendoprompts",
  },
  {
    nombre: "Skills",
    descripcion: "AGENTS.md, comandos propios y skills que la IA reutiliza",
    resumen: "Enseñar a la IA tus reglas y tus recetas",
    color: "#4ade80",
    Icon: FaPuzzlePiece,
    ruta: "/aprendiendoskills",
  },
  {
    nombre: "Proyectos",
    descripcion: "Una página web, un resumidor con DeepSeek y una API, de principio a fin",
    resumen: "Proyectos reales construidos con prompts",
    color: "#facc15",
    Icon: FaCubes,
    ruta: "/proyectosia",
  },
  {
    nombre: "MCP",
    descripcion: "Conectar la IA a bases de datos, navegadores y otras herramientas",
    resumen: "Herramientas externas para el agente",
    color: "#a78bfa",
    Icon: FaPlug,
  },
  {
    nombre: "Agentes propios",
    descripcion: "Subagentes especializados: revisor, tester, documentador",
    resumen: "Tu propio equipo de agentes",
    color: "#f472b6",
    Icon: FaRobot,
  },
];
