import { Leccion } from "../../Leccion/Leccion";
import { ejemplosJavaIntermedios } from './data/ejemplosJavaIntermedios';

export const AprendiendoJavaIntermedio = () => (
  <Leccion
    id="intermedio"
    nivel={2}
    etiqueta="intermedio"
    tipo="java"
    titulo={<>Java <em>intermedio</em></>}
    bajada="Paso a paso hacia el desarrollo en Java"
    ejemplos={ejemplosJavaIntermedios}
  />
);
