import { AvisoMotivacional } from "../../../common/Aviso/AvisoMotivacional";
import { Footer } from "../../../common/Footer/Footer";
import { Navbar } from "../../../common/Header/Navbar";
import { RUTA_FRONTEND } from "../../../common/Programacion/FrontEnd/rutaFrontEnd";
import { BotonRuta } from "../../../common/Programacion/Ruta/BotonRuta";
import { AprendiendoCss, AprendiendoCssIntermedio, CssPortada } from "../../../common/Programacion/FrontEnd/Css/AprendiendoCss";
import { EditorCodigo } from "../../../common/Programacion/FrontEnd/Html/EditorCodigo";
import {mensajesMotivacionalesCss} from './mensajesMotivacionales';

export const AprendiendoCssPage = () => {
    return (
        <>
            <Navbar />
            <BotonRuta pasos={RUTA_FRONTEND} />
            <CssPortada />
            <AprendiendoCss />
            <AprendiendoCssIntermedio />
            <EditorCodigo />
            <Footer />

            {/* el primero dura 10 segundos; los de cada 5 minutos, 25 */}
            <AvisoMotivacional mensajes={mensajesMotivacionalesCss} duracion={10000} duracionSiguientes={25000} />
        </>
    );
};
