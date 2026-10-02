import { AvisoMotivacional } from "../../../common/Aviso/AvisoMotivacional";
import { Footer } from "../../../common/Footer/Footer";
import { Navbar } from "../../../common/Header/Navbar";
import { RUTA_FRONTEND } from "../../../common/Programacion/FrontEnd/rutaFrontEnd";
import { BotonRuta } from "../../../common/Programacion/Ruta/BotonRuta";
import { EditorCodigo } from "../../../common/Programacion/FrontEnd/Html/EditorCodigo";
import { AprendiendoBootstrap, BootstrapPortada } from "../../../common/Programacion/FrontEnd/Bootstrap/AprendiendoBootstrap";
import { AprendiendoBootstrapIntermedio } from "../../../common/Programacion/FrontEnd/Bootstrap/AprendiendoBootstrapIntermedio";
import {mensajesMotivacionalesCss} from './mensajesMotivacionales';

export const AprendiendoBootstrapPage = () => {
    return (
        <>
            <Navbar />
            <BotonRuta pasos={RUTA_FRONTEND} />
            <BootstrapPortada />
            <AprendiendoBootstrap />
            <AprendiendoBootstrapIntermedio />
            <EditorCodigo bootstrap />
            <Footer />

            {/* el primero dura 10 segundos; los de cada 5 minutos, 25 */}
            <AvisoMotivacional mensajes={mensajesMotivacionalesCss} duracion={10000} duracionSiguientes={25000} />
        </>
    );
};
