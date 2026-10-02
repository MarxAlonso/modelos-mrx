import { FaPuzzlePiece } from "react-icons/fa";
import type { PasoGuion } from "../../../Terminal/Terminal";
import { PortadaLeccion } from "../../Leccion/PortadaLeccion";
import { LeccionIA } from "../LeccionIA";
import { RUTA_IA_PORTADA } from "../rutaIA";
import { ejemplosComandos } from "./data/ejemplosComandos";
import { ejemplosSkills } from "./data/ejemplosSkills";

const NIVELES = [
  { ancla: "#comandos", nombre: "AGENTS.md y comandos", detalle: `${ejemplosComandos.length} ejemplos` },
  { ancla: "#skills", nombre: "Skills", detalle: `${ejemplosSkills.length} ejemplos` },
];

const GUION: PasoGuion[] = [
  { tipo: "cmd", texto: "mkdir -p .opencode/skills/landing-page" },
  { tipo: "cmd", texto: "code .opencode/skills/landing-page/SKILL.md" },
  { tipo: "cmd", texto: "opencode" },
  { tipo: "out", texto: "◆ Skill landing-page · cargada sola", clase: "t-verde" },
];

export const SkillsPortada = () => (
  <PortadaLeccion
    nombre="Skills"
    Icon={FaPuzzlePiece}
    color="#4ade80"
    bajada="Deja de repetir los mismos prompts. Escribe tus reglas en AGENTS.md, guarda tus prompts como comandos y crea skills: recetas que la IA carga sola cuando la tarea las necesita."
    niveles={NIVELES}
    carpeta="cafe-aroma"
    guion={GUION}
    ruta={RUTA_IA_PORTADA}
  />
);

export const AprendiendoSkills = () => (
  <>
    <LeccionIA
      id="comandos"
      nivel={1}
      etiqueta="agents.md y comandos"
      titulo={<>Reglas y <em>comandos propios</em></>}
      bajada="AGENTS.md guarda lo que vale para todas las tareas; los comandos guardan los prompts que lanzas a menudo. Cada ejemplo trae el archivo listo para copiar."
      ejemplos={ejemplosComandos}
    />

    <LeccionIA
      id="skills"
      nivel={2}
      etiqueta="skills"
      titulo={<>Skills que la IA <em>elige sola</em></>}
      bajada="Una skill es una carpeta con un SKILL.md. El agente ve su descripción y la carga cuando encaja con lo que pides: fíjate en la línea «◆ Skill» de cada sesión."
      ejemplos={ejemplosSkills}
    />
  </>
);
