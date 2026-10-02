import { AvisoMotivacional } from "../../../common/Aviso/AvisoMotivacional";
import { Footer } from "../../../common/Footer/Footer";
import { Navbar } from "../../../common/Header/Navbar";
import { BotonRuta } from "../../../common/Programacion/Ruta/BotonRuta";
import { RUTA_IA } from "../../../common/Programacion/IA/rutaIA";
import { ProyectosIA, ProyectosIAPortada } from "../../../common/Programacion/IA/Proyectos/ProyectosIA";
import { mensajesMotivacionalesIA } from "./mensajesMotivacionales";

export const ProyectosIAPage = () => {
    return (
        <>
            <Navbar />
            <BotonRuta pasos={RUTA_IA} />
            <ProyectosIAPortada />
            <ProyectosIA />
            <Footer />

            {/* el primero dura 10 segundos; los de cada 5 minutos, 25 */}
            <AvisoMotivacional mensajes={mensajesMotivacionalesIA} duracion={10000} duracionSiguientes={25000} />
        </>
    );
};
