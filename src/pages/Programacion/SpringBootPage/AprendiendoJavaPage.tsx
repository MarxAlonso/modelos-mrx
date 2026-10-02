import { AvisoMotivacional } from "../../../common/Aviso/AvisoMotivacional";
import { Footer } from "../../../common/Footer/Footer";
import { Navbar } from "../../../common/Header/Navbar";
import { BotonRuta } from "../../../common/Programacion/Ruta/BotonRuta";
import { RUTA_SPRING } from "../../../common/Programacion/SpringBoot/rutaSpring";
import { AprendiendoJava, JavaPortada } from "../../../common/Programacion/SpringBoot/Java/AprendiendoJava";
import { AprendiendoJavaIntermedio } from "../../../common/Programacion/SpringBoot/Java/AprendiendoJavaIntermedio";
import { AprendiendoJavaAvanzado } from "../../../common/Programacion/SpringBoot/Java/AprendiendoJavaAvanzado";
import {mensajesMotivacionalesJava} from './mensajesMotivacionales';

export const AprendiendoJavaPage = () => {
    return (
        <>
            <Navbar />
            <BotonRuta pasos={RUTA_SPRING} />
            <JavaPortada />
            <AprendiendoJava />
            <AprendiendoJavaIntermedio />
            <AprendiendoJavaAvanzado />
            <Footer />

            {/* el primero dura 10 segundos; los de cada 5 minutos, 25 */}
            <AvisoMotivacional mensajes={mensajesMotivacionalesJava} duracion={10000} duracionSiguientes={25000} />
        </>
    );
};
