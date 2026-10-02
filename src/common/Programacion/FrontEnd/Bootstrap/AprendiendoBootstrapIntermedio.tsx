import { Leccion } from "../../Leccion/Leccion";
import { ejemplosBootstrapIntermedio } from './data/ejemplosBootstrapIntermedio';

export const AprendiendoBootstrapIntermedio = () => (
  <Leccion
    id="intermedio"
    nivel={2}
    etiqueta="intermedio"
    tipo="bootstrap"
    titulo={<>Bootstrap <em>intermedio</em></>}
    bajada="Componentes interactivos: modales, alertas, pestañas y formularios"
    ejemplos={ejemplosBootstrapIntermedio}
  />
);
