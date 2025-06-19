import { Footer } from "../../../common/Footer/Footer";
import { Navbar } from "../../../common/Header/Navbar";
import { FrontEndInfo, FrontEndDescripcion } from "../../../common/Programacion/FrontEnd/FrontEndInfo";
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaCode, FaReact, FaCss3Alt, FaHtml5, FaJs, FaBootstrap, FaLightbulb, FaRocket, FaStar, FaBrain, FaHeart } from 'react-icons/fa';
import { useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const bgStyle = {
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
};
const tecnologiasFrontEnd = [
  {
      nombre: "HTML5",
      descripcion: "El lenguaje fundamental de la web",
      icon: FaHtml5,
      color: "from-orange-500 to-red-500",
      ruta: "/aprendiendohtml"
  },
  {
      nombre: "CSS3",
      descripcion: "Estiliza y da vida a tus páginas",
      icon: FaCss3Alt,
      color: "from-blue-500 to-blue-600",
      ruta: "/aprendiendocss"
  },
  {
      nombre: "JavaScript",
      descripcion: "Añade interactividad y dinamismo",
      icon: FaJs,
      color: "from-yellow-400 to-yellow-600",
      ruta: "/aprendiendojs"
  },
  {
      nombre: "Bootstrap",
      descripcion: "Framework CSS responsive y moderno",
      icon: FaBootstrap,
      color: "from-purple-500 to-purple-700",
      ruta: "/aprendiendobootstrap"
  },
  {
      nombre: "React",
      descripcion: "Construye interfaces modernas",
      icon: FaReact,
      color: "from-cyan-400 to-blue-500",
      ruta: "/react"
  }
];
const mensajesMotivacionales = [
    {
        titulo: "¡Bienvenido al Desarrollo Front-End!",
        mensaje: "Aquí comenzarás un viaje emocionante hacia la creación de interfaces web increíbles. ¡Tu creatividad no tiene límites!",
        icon: FaRocket,
        color: "from-purple-600 to-pink-600"
    },
    {
        titulo: "El Poder del Front-End",
        mensaje: "Cada línea de HTML, CSS y JavaScript te acerca más a convertirte en un desarrollador extraordinario. ¡Sigue adelante!",
        icon: FaBrain,
        color: "from-blue-600 to-cyan-600"
    },
    {
        titulo: "¡Persiste y Triunfa!",
        mensaje: "El camino del aprendizaje tiene desafíos, pero cada obstáculo superado te hace más fuerte. ¡Tú puedes lograrlo!",
        icon: FaStar,
        color: "from-yellow-600 to-red-600"
    },
    {
        titulo: "Innovación sin Límites",
        mensaje: "El front-end es donde la magia sucede. Tu código dará vida a ideas asombrosas que impactarán a usuarios en todo el mundo.",
        icon: FaLightbulb,
        color: "from-green-600 to-teal-600"
    },
    {
        titulo: "¡Construye tu Futuro!",
        mensaje: "Cada proyecto que construyas te acerca más a tus metas. La comunidad del desarrollo web te espera con los brazos abiertos.",
        icon: FaHeart,
        color: "from-red-600 to-orange-600"
    }
];

export const FrontEndPage = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [currentMessage, setCurrentMessage] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);
    
    const containerRef = useRef(null);
    const { scrollY } = useScroll();
    
    // Animación del menú flotante basada en el scroll
    const menuY = useTransform(scrollY, 
        [0, 200], // Rango de scroll
        ["0%", "20%"] // Rango de movimiento
    );

    useEffect(() => {
        // Ocultar el mensaje inicial después de 10 segundos
        const initialTimer = setTimeout(() => setIsVisible(false), 10000);

        // Mostrar nuevos mensajes cada 5 minutos
        const interval = setInterval(() => {
            setCurrentMessage((prev) => (prev + 1) % mensajesMotivacionales.length);
            setIsVisible(true);
            // Ocultar después de 10 segundos
            setTimeout(() => setIsVisible(false), 10000);
        }, 300000); // 5 minutos

        return () => {
            clearTimeout(initialTimer);
            clearInterval(interval);
        };
    }, []);

    const mensaje = mensajesMotivacionales[currentMessage];
    const Icon = mensaje.icon;

    return (
      <div className="overflow-x-hidden" ref={containerRef}>
            <div style={bgStyle}>
                <Navbar />
            </div>
            
            {/* Menú flotante */}
            <motion.div
                style={{ y: menuY }}
                className="fixed right-6 top-1/2 -translate-y-1/2 z-40"
            >
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow"
                >
                    <FaCode className="text-2xl text-white" />
                </motion.button>

                <AnimatePresence>
                    {menuOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: 100, scale: 0.6 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: 100, scale: 0.6 }}
                            transition={{ type: "spring", damping: 20, stiffness: 300 }}
                            className="absolute right-16 top-1/2 -translate-y-1/2 bg-gray-900/95 backdrop-blur-sm rounded-2xl p-4 w-72 shadow-xl border border-gray-700/50"
                        >
                            <h3 className="text-xl font-bold text-white mb-4 text-center">¿Por dónde empezar?</h3>
                            <div className="space-y-3 max-h-96 overflow-y-auto pr-1">
                              {tecnologiasFrontEnd.map((tech, index) => (
                                <motion.a
                                  key={tech.nombre}
                                  href={tech.ruta}
                                  initial={{ opacity: 0, x: 50 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: index * 0.1 }}
                                  className={`block cursor-pointer bg-gradient-to-r ${tech.color} p-3 rounded-xl hover:scale-105 transform transition-all duration-300 group`}
                                >
                                  <div className="flex items-center space-x-3">
                                    <tech.icon className="text-2xl text-white" />
                                    <div>
                                      <h4 className="font-semibold text-white">{tech.nombre}</h4>
                                      <p className="text-sm text-white/80 group-hover:text-white transition-colors">
                                        {tech.descripcion}
                                      </p>
                                    </div>
                                  </div>
                                </motion.a>
                              ))}
                            </div>

                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>

            <div className="bg-gradient-to-b from-black via-gray-900 to-black text-white">
                <FrontEndInfo />
                <FrontEndDescripcion />
                <Footer />
            </div>

            {/* Modal Motivacional */}
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ type: "spring", damping: 20, stiffness: 300 }}
                        className="fixed inset-0 flex items-center justify-center z-50 px-4"
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black"
                            onClick={() => setIsVisible(false)}
                        />
                        <motion.div
                            initial={{ y: 50 }}
                            animate={{ y: 0 }}
                            exit={{ y: 50 }}
                            className="relative bg-gray-900 rounded-2xl p-8 max-w-md w-full shadow-2xl overflow-hidden"
                        >
                            {/* Efecto de brillo en el fondo */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${mensaje.color} opacity-10 blur-xl`} />
                            
                            {/* Contenido del modal */}
                            <div className="relative z-10">
                                <motion.div
                                    initial={{ rotate: -180, scale: 0 }}
                                    animate={{ rotate: 0, scale: 1 }}
                                    transition={{ type: "spring", damping: 10 }}
                                    className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${mensaje.color} rounded-full flex items-center justify-center`}
                                >
                                    <Icon className="text-3xl text-white" />
                                </motion.div>
                                
                                <motion.h3
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-2xl font-bold text-white text-center mb-4"
                                >
                                    {mensaje.titulo}
                                </motion.h3>
                                
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                    className="text-gray-300 text-center leading-relaxed"
                                >
                                    {mensaje.mensaje}
                                </motion.p>
                                
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="mt-6 w-full py-2 px-4 bg-white/10 hover:bg-white/20 rounded-lg text-white font-medium transition-colors"
                                    onClick={() => setIsVisible(false)}
                                >
                                    ¡Entendido!
                                </motion.button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};