import { AvisoMotivacional } from "../../../common/Aviso/AvisoMotivacional";
import { Footer } from "../../../common/Footer/Footer";
import { Navbar } from "../../../common/Header/Navbar";
import { RUTA_FRONTEND } from "../../../common/Programacion/FrontEnd/rutaFrontEnd";
import { BotonRuta } from "../../../common/Programacion/Ruta/BotonRuta";
import { AprendiendoHtml, AprendiendoHtmlIntermedio, HtmlPortada } from "../../../common/Programacion/FrontEnd/Html/AprendiendoHtml";
import { EditorCodigo } from "../../../common/Programacion/FrontEnd/Html/EditorCodigo";
import {mensajesMotivacionalesHtml} from './mensajesMotivacionales';

export const AprendiendoHtmlPage = () => {
    return (
        <>
            <Navbar />
            <BotonRuta pasos={RUTA_FRONTEND} />
            <HtmlPortada />
            <AprendiendoHtml />
            <AprendiendoHtmlIntermedio />
            <EditorCodigo />
            <Footer />

            {/* el primero dura 10 segundos; los de cada 5 minutos, 25 */}
            <AvisoMotivacional mensajes={mensajesMotivacionalesHtml} duracion={10000} duracionSiguientes={25000} />
        </>
    );
};
