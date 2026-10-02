import { AvisoMotivacional } from "../../../common/Aviso/AvisoMotivacional";
import { Footer } from "../../../common/Footer/Footer";
import { Navbar } from "../../../common/Header/Navbar";
import { BotonRuta } from "../../../common/Programacion/Ruta/BotonRuta";
import { PromptLibreInfo } from "../../../common/Programacion/IA/PromptLibreInfo";
import { RUTA_IA } from "../../../common/Programacion/IA/rutaIA";
import { mensajesMotivacionalesIA } from "./mensajesMotivacionales";

export const PromptLibreInfoPage = () => {
    return (
        <>
            <Navbar />

            <BotonRuta pasos={RUTA_IA} />

            <div className="overflow-x-clip">
                <PromptLibreInfo />
                <Footer />
            </div>

            <AvisoMotivacional mensajes={mensajesMotivacionalesIA} />
        </>
    );
};
