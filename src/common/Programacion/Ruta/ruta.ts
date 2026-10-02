import type { IconType } from "react-icons";

/** Un paso de una ruta de aprendizaje: una tecnología y su lección. */
export interface PasoRuta {
  nombre: string;
  /** Qué se aprende en el paso. */
  descripcion: string;
  /** Frase corta para el menú de «por dónde empezar». */
  resumen: string;
  color: string;
  Icon: IconType;
  /** Sin ruta: la lección todavía no existe. */
  ruta?: string;
}
