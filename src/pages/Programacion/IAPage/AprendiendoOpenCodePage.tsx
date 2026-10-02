import { AvisoMotivacional } from "../../../common/Aviso/AvisoMotivacional";
import { Footer } from "../../../common/Footer/Footer";
import { Navbar } from "../../../common/Header/Navbar";
import { BotonRuta } from "../../../common/Programacion/Ruta/BotonRuta";
import { RUTA_IA } from "../../../common/Programacion/IA/rutaIA";
import { AprendiendoOpenCode, OpenCodePortada } from "../../../common/Programacion/IA/OpenCode/AprendiendoOpenCode";
import { mensajesMotivacionalesIA } from "./mensajesMotivacionales";

export const AprendiendoOpenCodePage = () => {
    return (
        <>
            <Navbar />
            <BotonRuta pasos={RUTA_IA} />
            <OpenCodePortada />
            <AprendiendoOpenCode />
            <Footer />

            {/* el primero dura 10 segundos; los de cada 5 minutos, 25 */}
            <AvisoMotivacional mensajes={mensajesMotivacionalesIA} duracion={10000} duracionSiguientes={25000} />
        </>
    );
};
