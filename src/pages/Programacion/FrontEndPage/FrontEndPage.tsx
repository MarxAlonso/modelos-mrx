import { AvisoMotivacional } from "../../../common/Aviso/AvisoMotivacional";
import { Footer } from "../../../common/Footer/Footer";
import { Navbar } from "../../../common/Header/Navbar";
import { FrontEndInfo, FrontEndDescripcion } from "../../../common/Programacion/FrontEnd/FrontEndInfo";
import { BotonRuta } from "../../../common/Programacion/Ruta/BotonRuta";
import { RUTA_FRONTEND } from "../../../common/Programacion/FrontEnd/rutaFrontEnd";
import { FaLightbulb, FaRocket, FaStar, FaBrain, FaHeart } from 'react-icons/fa';

const mensajesMotivacionales = [
    {
        titulo: "¡Bienvenido al Desarrollo Front-End!",
        mensaje: "Aquí comenzarás un viaje emocionante hacia la creación de interfaces web increíbles. ¡Tu creatividad no tiene límites!",
        icon: FaRocket,
    },
    {
        titulo: "El Poder del Front-End",
        mensaje: "Cada línea de HTML, CSS y JavaScript te acerca más a convertirte en un desarrollador extraordinario. ¡Sigue adelante!",
        icon: FaBrain,
    },
    {
        titulo: "¡Persiste y Triunfa!",
        mensaje: "El camino del aprendizaje tiene desafíos, pero cada obstáculo superado te hace más fuerte. ¡Tú puedes lograrlo!",
        icon: FaStar,
    },
    {
        titulo: "Innovación sin Límites",
        mensaje: "El front-end es donde la magia sucede. Tu código dará vida a ideas asombrosas que impactarán a usuarios en todo el mundo.",
        icon: FaLightbulb,
    },
    {
        titulo: "¡Construye tu Futuro!",
        mensaje: "Cada proyecto que construyas te acerca más a tus metas. La comunidad del desarrollo web te espera con los brazos abiertos.",
        icon: FaHeart,
    }
];

export const FrontEndPage = () => {
    return (
      <>
            <Navbar />

            <BotonRuta pasos={RUTA_FRONTEND} />

            <div className="overflow-x-clip">
                <FrontEndInfo />
                <FrontEndDescripcion />
                <Footer />
            </div>

            <AvisoMotivacional mensajes={mensajesMotivacionales} />
        </>
    );
};
