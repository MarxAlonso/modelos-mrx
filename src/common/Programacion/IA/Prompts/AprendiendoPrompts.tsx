import { FaCommentDots } from "react-icons/fa";
import type { PasoGuion } from "../../../Terminal/Terminal";
import { PortadaLeccion } from "../../Leccion/PortadaLeccion";
import { LeccionIA } from "../LeccionIA";
import { RUTA_IA_PORTADA } from "../rutaIA";
import { ConstructorPrompt } from "./ConstructorPrompt";
import { ejemplosPrompts } from "./data/ejemplosPrompts";
import { ejemplosPromptsProgramacion } from "./data/ejemplosPromptsProgramacion";

const NIVELES = [
  { ancla: "#anatomia", nombre: "Anatomía", detalle: `${ejemplosPrompts.length} piezas` },
  { ancla: "#constructor", nombre: "Simulador", detalle: "Arma tu prompt" },
  { ancla: "#programar", nombre: "Para programar", detalle: `${ejemplosPromptsProgramacion.length} patrones` },
];

const GUION: PasoGuion[] = [
  { tipo: "cmd", texto: "opencode run \"haz un botón\"" },
  { tipo: "out", texto: "✗ ¿qué botón? ¿dónde? ¿qué hace?", clase: "t-mute" },
  { tipo: "cmd", texto: "opencode run \"@Navbar.tsx añade un botón «Reservar» que…\"" },
  { tipo: "out", texto: "✓ hecho a la primera", clase: "t-verde" },
];

export const PromptsPortada = () => (
  <PortadaLeccion
    nombre="Prompts"
    Icon={FaCommentDots}
    color="#22d3ee"
    bajada="Un prompt es una especificación. Aprende las piezas que convierten un pedido vago en uno que la IA resuelve a la primera, y los patrones que usa un programador cada día."
    niveles={NIVELES}
    carpeta="cafe-aroma"
    guion={GUION}
    ruta={RUTA_IA_PORTADA}
  />
);

export const AprendiendoPrompts = () => (
  <>
    <LeccionIA
      id="anatomia"
      nivel={1}
      etiqueta="anatomía de un prompt"
      titulo={<>Las piezas de un <em>buen prompt</em></>}
      bajada="Cada ejemplo enfrenta un prompt flojo con uno claro y reproduce lo que OpenCode hace con el bueno. Copia el prompt claro y pruébalo en tu proyecto."
      ejemplos={ejemplosPrompts}
    />

    <ConstructorPrompt />

    <LeccionIA
      id="programar"
      nivel={2}
      etiqueta="prompts para programar"
      titulo={<>Prompts del <em>día a día</em></>}
      bajada="Entender código, depurar, refactorizar, testear, revisar y resumir: los seis pedidos que más hace un programador, bien escritos."
      ejemplos={ejemplosPromptsProgramacion}
    />
  </>
);
