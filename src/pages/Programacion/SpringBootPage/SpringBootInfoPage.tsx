import { AvisoMotivacional } from "../../../common/Aviso/AvisoMotivacional";
import { Footer } from "../../../common/Footer/Footer";
import { Navbar } from "../../../common/Header/Navbar";
import { BotonRuta } from "../../../common/Programacion/Ruta/BotonRuta";
import { RUTA_SPRING } from "../../../common/Programacion/SpringBoot/rutaSpring";
import { SpringBootInfo } from "../../../common/Programacion/SpringBoot/SpringBootInfo";
import { mensajesMotivacionalesJava } from './mensajesMotivacionales';

export const SpringBootInfoPage = () => {
    return (
      <>
            <Navbar />

            <BotonRuta pasos={RUTA_SPRING} />

            <div className="overflow-x-clip">
                <SpringBootInfo />
                <Footer />
            </div>

            <AvisoMotivacional mensajes={mensajesMotivacionalesJava} />
        </>
    );
};
