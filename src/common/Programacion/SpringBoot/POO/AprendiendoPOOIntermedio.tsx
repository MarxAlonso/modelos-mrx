import { Leccion } from "../../Leccion/Leccion";
import { ejemplosPooIntermedio } from './data/ejemplosPooIntermedio';

export const AprendiendoPOOIntermedio = () => (
  <Leccion
    id="intermedio"
    nivel={2}
    etiqueta="intermedio"
    tipo="java"
    titulo={<>POO <em>intermedio</em></>}
    bajada="Paso a paso hacia el desarrollo en Java implementado POO"
    ejemplos={ejemplosPooIntermedio}
  />
);
