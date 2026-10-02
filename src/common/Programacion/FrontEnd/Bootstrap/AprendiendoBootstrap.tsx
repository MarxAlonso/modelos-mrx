import { FaBootstrap } from "react-icons/fa";
import type { PasoGuion } from "../../../Terminal/Terminal";
import { Leccion } from "../../Leccion/Leccion";
import { PortadaLeccion } from "../../Leccion/PortadaLeccion";
import { ejemplosBootstrap } from './data/ejemplosBootstrap';
import { ejemplosBootstrapIntermedio } from './data/ejemplosBootstrapIntermedio';

const NIVELES = [
  { ancla: "#basico", nombre: "Básico", detalle: `${ejemplosBootstrap.length} ejemplos` },
  { ancla: "#intermedio", nombre: "Intermedio", detalle: `${ejemplosBootstrapIntermedio.length} ejemplos` },
  { ancla: "#editor", nombre: "Editor en vivo", detalle: "Con Bootstrap 5" },
];

const GUION: PasoGuion[] = [
  { tipo: "cmd", texto: "npm install bootstrap" },
  { tipo: "out", texto: "added 2 packages", clase: "t-mute" },
  { tipo: "cmd", texto: 'echo \'<button class="btn btn-primary">\' >> index.html' },
  { tipo: "out", texto: "➜ Un botón con estilo, sin escribir CSS", clase: "t-verde" },
];

export const BootstrapPortada = () => (
  <PortadaLeccion
    nombre="Bootstrap"
    Icon={FaBootstrap}
    color="#a78bfa"
    bajada="Dominando el framework más popular de CSS: cada ejemplo carga Bootstrap de verdad, así que modales, pestañas y alertas funcionan en la vista previa."
    niveles={NIVELES}
    carpeta="bootstrap"
    guion={GUION}
  />
);

export const AprendiendoBootstrap = () => (
  <Leccion
    id="basico"
    nivel={1}
    etiqueta="básico"
    tipo="bootstrap"
    titulo={<>Aprendiendo <em>Bootstrap</em></>}
    bajada="Dominando el framework más popular de CSS"
    ejemplos={ejemplosBootstrap}
  />
);
