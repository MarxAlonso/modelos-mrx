import type { IconType } from "react-icons";
import {
  FaBootstrap,
  FaCss3Alt,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJava,
  FaJsSquare,
  FaLinux,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiApachemaven,
  SiHibernate,
  SiMysql,
  SiPostgresql,
  SiSpring,
  SiSpringboot,
  SiTailwindcss,
} from "react-icons/si";

export type CapaId = "frontend" | "backend" | "datos";

export interface Tecnologia {
  nombre: string;
  nota: string;
  color: string;
  Icon: IconType;
}

export interface Capa {
  id: CapaId;
  nombre: string;
  tinte: string;
  /** Altura en la pila: se dibuja de abajo hacia arriba. */
  nivel: number;
  tecnologias: Tecnologia[];
}

export const CAPAS: Capa[] = [
  {
    id: "frontend",
    nombre: "Frontend",
    tinte: "#e879f9",
    nivel: 1,
    tecnologias: [
      { nombre: "HTML5", nota: "Estructura el contenido de la web", color: "#fb923c", Icon: FaHtml5 },
      { nombre: "CSS3", nota: "Define el diseño visual", color: "#60a5fa", Icon: FaCss3Alt },
      { nombre: "JavaScript", nota: "Añade interactividad", color: "#facc15", Icon: FaJsSquare },
      { nombre: "Bootstrap", nota: "Diseño rápido y responsivo", color: "#a78bfa", Icon: FaBootstrap },
      { nombre: "React", nota: "Interfaces por componentes", color: "#22d3ee", Icon: FaReact },
      { nombre: "Tailwind", nota: "Estilos con clases utilitarias", color: "#38bdf8", Icon: SiTailwindcss },
    ],
  },
  {
    id: "backend",
    nombre: "Backend",
    tinte: "#818cf8",
    nivel: 0,
    tecnologias: [
      { nombre: "Java", nota: "Orientado a objetos y empresarial", color: "#f87171", Icon: FaJava },
      { nombre: "Spring Boot", nota: "APIs y microservicios con Java", color: "#4ade80", Icon: SiSpringboot },
      { nombre: "Spring Core", nota: "Inyección de dependencias", color: "#86efac", Icon: SiSpring },
      { nombre: "Node.js", nota: "JavaScript del lado del servidor", color: "#22c55e", Icon: FaNodeJs },
      { nombre: "Maven", nota: "Dependencias y construcción", color: "#fb7185", Icon: SiApachemaven },
      { nombre: "Hibernate", nota: "Objetos mapeados a tablas", color: "#d6b98c", Icon: SiHibernate },
    ],
  },
  {
    id: "datos",
    nombre: "Datos y herramientas",
    tinte: "#a78bfa",
    nivel: -1,
    tecnologias: [
      { nombre: "MySQL", nota: "Base de datos relacional", color: "#7dd3fc", Icon: SiMysql },
      { nombre: "PostgreSQL", nota: "Relacional y de código abierto", color: "#93c5fd", Icon: SiPostgresql },
      { nombre: "Git", nota: "Historial y versiones del código", color: "#f97316", Icon: FaGitAlt },
      { nombre: "GitHub", nota: "Repositorios y colaboración", color: "#e5e7eb", Icon: FaGithub },
      { nombre: "Docker", nota: "Entornos en contenedores", color: "#38bdf8", Icon: FaDocker },
      { nombre: "Linux", nota: "La terminal de los servidores", color: "#fde68a", Icon: FaLinux },
    ],
  },
];
