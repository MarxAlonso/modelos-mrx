import { AvisoMotivacional } from "../../../common/Aviso/AvisoMotivacional";
import { Footer } from "../../../common/Footer/Footer";
import { Navbar } from "../../../common/Header/Navbar";
import { BotonRuta } from "../../../common/Programacion/Ruta/BotonRuta";
import { RUTA_SPRING } from "../../../common/Programacion/SpringBoot/rutaSpring";
import { SpringBootPortada, SpringBootPrimerosPasos } from "../../../common/Programacion/SpringBoot/SpringBoot/SpringBootPrimerosPasos";
import {mensajesMotivacionalesJava} from './mensajesMotivacionales';

export const SpringBootPage = () => {
    return (
        <>
            <Navbar />
            <BotonRuta pasos={RUTA_SPRING} />
            <SpringBootPortada />
            <SpringBootPrimerosPasos />
            <Footer />

            {/* el primero dura 10 segundos; los de cada 5 minutos, 25 */}
            <AvisoMotivacional mensajes={mensajesMotivacionalesJava} duracion={10000} duracionSiguientes={25000} />
        </>
    );
};
