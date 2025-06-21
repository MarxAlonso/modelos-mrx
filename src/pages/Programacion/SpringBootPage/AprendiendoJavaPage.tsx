import { Footer } from "../../../common/Footer/Footer";
import { Navbar } from "../../../common/Header/Navbar";
import { AprendiendoJava } from "../../../common/Programacion/SpringBoot/Java/AprendiendoJava";
import { AprendiendoJavaIntermedio } from "../../../common/Programacion/SpringBoot/Java/AprendiendoJavaIntermedio";
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import {mensajesMotivacionalesJava} from './mensajesMotivacionales';
const bgStyle = {
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
};

export const AprendiendoJavaPage = () => {
    const [isVisible, setIsVisible] = useState(true); // Comienza visible
    const [currentMessage, setCurrentMessage] = useState(0);

    useEffect(() => {
        // Ocultar el mensaje inicial después de 10 segundos
        const initialTimer = setTimeout(() => setIsVisible(false), 10000);

        // Mostrar nuevos mensajes cada 5 minutos
        const interval = setInterval(() => {
            setCurrentMessage((prev) => (prev + 1) % mensajesMotivacionalesJava.length);
            setIsVisible(true);
            // Ocultar después de 10 segundos
            setTimeout(() => setIsVisible(false), 25000);
        }, 300000); // 5 minutos

        return () => {
            clearTimeout(initialTimer);
            clearInterval(interval);
        };
    }, []);

    const mensaje = mensajesMotivacionalesJava[currentMessage];
    const Icon = mensaje.icon;

    return (
        <div className="overflow-x-hidden">
            <div style={bgStyle}>
                <Navbar />
            </div>
            <div className="bg-gradient-to-b from-black via-gray-900 to-black text-white">
                <AprendiendoJava />
                <AprendiendoJavaIntermedio />
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