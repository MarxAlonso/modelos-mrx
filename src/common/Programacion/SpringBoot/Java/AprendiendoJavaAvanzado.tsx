import { Leccion } from "../../Leccion/Leccion";
import { ejemplosJavaAvanzado } from './data/ejemplosJavaAvanzado';

export const AprendiendoJavaAvanzado = () => (
  <Leccion
    id="avanzado"
    nivel={3}
    etiqueta="avanzado"
    tipo="java"
    titulo={<>Java <em>avanzado</em></>}
    bajada="Paso a paso hacia el desarrollo en Java"
    ejemplos={ejemplosJavaAvanzado}
  />
);
