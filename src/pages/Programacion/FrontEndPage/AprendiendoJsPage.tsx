import { AvisoMotivacional } from "../../../common/Aviso/AvisoMotivacional";
import { Footer } from "../../../common/Footer/Footer";
import { Navbar } from "../../../common/Header/Navbar";
import { RUTA_FRONTEND } from "../../../common/Programacion/FrontEnd/rutaFrontEnd";
import { BotonRuta } from "../../../common/Programacion/Ruta/BotonRuta";
import { AprendiendoJs, AprendiendoJsIntermedio, AprendiendoJsAvanzado, JsPortada } from "../../../common/Programacion/FrontEnd/Js/AprendiendoJs";
import { EditorCodigoJs } from "../../../common/Programacion/FrontEnd/Js/EditorCodigoJs";
import {mensajesMotivacionalesJS} from './mensajesMotivacionales';

export const AprendiendoJsPage = () => {
    return (
        <>
            <Navbar />
            <BotonRuta pasos={RUTA_FRONTEND} />
            <JsPortada />
            <AprendiendoJs />
            <AprendiendoJsIntermedio />
            <AprendiendoJsAvanzado />
            <EditorCodigoJs />
            <Footer />

            {/* el primero dura 10 segundos; los de cada 5 minutos, 25 */}
            <AvisoMotivacional mensajes={mensajesMotivacionalesJS} duracion={10000} duracionSiguientes={25000} />
        </>
    );
};
