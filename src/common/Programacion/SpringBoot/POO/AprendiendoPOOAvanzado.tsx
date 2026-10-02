import { Leccion } from "../../Leccion/Leccion";
import { ejemplosPooAvanzado } from './data/ejemplosPooAvanzado';

export const AprendiendoPOOAvanzado = () => (
  <Leccion
    id="avanzado"
    nivel={3}
    etiqueta="avanzado"
    tipo="java"
    titulo={<>POO <em>avanzado</em></>}
    bajada="Paso a paso hacia el desarrollo en Java implementado POO"
    ejemplos={ejemplosPooAvanzado}
  />
);
