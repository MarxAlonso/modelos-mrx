import { FaCubes } from "react-icons/fa";
import type { PasoGuion } from "../../../Terminal/Terminal";
import { PortadaLeccion } from "../../Leccion/PortadaLeccion";
import { LeccionIA } from "../LeccionIA";
import { RUTA_IA_PORTADA } from "../rutaIA";
import { ejemplosProyectos } from "./data/ejemplosProyectos";

const NIVELES = [{ ancla: "#proyectos", nombre: "Proyectos", detalle: `${ejemplosProyectos.length} de principio a fin` }];

const GUION: PasoGuion[] = [
  { tipo: "cmd", texto: "opencode" },
  { tipo: "out", texto: "Plan → Build → probar → corregir", clase: "t-mute" },
  { tipo: "cmd", texto: "git push" },
  { tipo: "out", texto: "➜ desplegado en Netlify", clase: "t-verde" },
];

export const ProyectosIAPortada = () => (
  <PortadaLeccion
    nombre="Proyectos"
    Icon={FaCubes}
    color="#facc15"
    bajada="Todo junto: una landing page con un modelo gratis, un resumidor de textos que llama a la API de DeepSeek y una API con Spring Boot. Varios prompts encadenados, como se trabaja de verdad."
    niveles={NIVELES}
    carpeta="proyectos"
    guion={GUION}
    ruta={RUTA_IA_PORTADA}
  />
);

export const ProyectosIA = () => (
  <LeccionIA
    id="proyectos"
    nivel={1}
    etiqueta="proyectos"
    titulo={<>Construye con <em>prompts</em></>}
    bajada="Sesiones largas con varias vueltas: planificar, construir, corregir y desplegar. Pulsa «saltar» si quieres ver el resultado final directamente."
    ejemplos={ejemplosProyectos}
  />
);
