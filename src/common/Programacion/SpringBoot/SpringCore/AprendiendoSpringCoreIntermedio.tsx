import { Leccion } from "../../Leccion/Leccion";
import { ejemplosSpringCoreIntermedio } from './data/ejemplosSpringCoreIntermedio';

export const AprendiendoSpringCoreIntermedio = () => (
  <Leccion
    id="intermedio"
    nivel={2}
    etiqueta="intermedio"
    tipo="java"
    titulo={<>Spring Core <em>intermedio</em></>}
    bajada="Configuraciones avanzadas de Beans, inyección por constructor, separación por capas, múltiples implementaciones, uso de interfaces y buenas prácticas de desacoplamiento usando Spring puro (sin Spring Boot)."
    ejemplos={ejemplosSpringCoreIntermedio}
  />
);
