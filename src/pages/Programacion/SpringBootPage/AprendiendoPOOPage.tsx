import { AvisoMotivacional } from "../../../common/Aviso/AvisoMotivacional";
import { Footer } from "../../../common/Footer/Footer";
import { Navbar } from "../../../common/Header/Navbar";
import { BotonRuta } from "../../../common/Programacion/Ruta/BotonRuta";
import { RUTA_SPRING } from "../../../common/Programacion/SpringBoot/rutaSpring";
import { AprendiendoPOO, PooPortada } from "../../../common/Programacion/SpringBoot/POO/AprendiendoPOO";
import { AprendiendoPOOIntermedio } from "../../../common/Programacion/SpringBoot/POO/AprendiendoPOOIntermedio";
import { AprendiendoPOOAvanzado } from "../../../common/Programacion/SpringBoot/POO/AprendiendoPOOAvanzado";
import {mensajesMotivacionalesJava} from './mensajesMotivacionales';

export const AprendiendoPOOPage = () => {
    return (
        <>
            <Navbar />
            <BotonRuta pasos={RUTA_SPRING} />
            <PooPortada />
            <AprendiendoPOO />
            <AprendiendoPOOIntermedio />
            <AprendiendoPOOAvanzado />
            <Footer />

            {/* el primero dura 10 segundos; los de cada 5 minutos, 25 */}
            <AvisoMotivacional mensajes={mensajesMotivacionalesJava} duracion={10000} duracionSiguientes={25000} />
        </>
    );
};
