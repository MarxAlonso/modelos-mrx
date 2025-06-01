import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaLightbulb, FaStar, FaRocket, FaHeart } from 'react-icons/fa';

const mensajesInspiradores = [
    {
        titulo: "¡Sigue Adelante!",
        mensaje: "Cada línea de código que escribes te acerca más a tus metas. La persistencia es la clave del éxito.",
        icon: FaRocket,
        color: "from-purple-600 to-pink-600"
    },
    {
        titulo: "¡Tú Puedes!",
        mensaje: "El aprendizaje es un viaje, no una carrera. Celebra cada pequeño progreso y mantén la motivación.",
        icon: FaStar,
        color: "from-yellow-400 to-orange-500"
    },
    {
        titulo: "¡No Te Rindas!",
        mensaje: "Los mejores desarrolladores también fueron principiantes. Tu dedicación de hoy construye tu éxito de mañana.",
        icon: FaHeart,
        color: "from-red-500 to-pink-500"
    },
    {
        titulo: "¡Inspírate!",
        mensaje: "Cada desafío es una oportunidad para aprender. La programación es un superpoder que te permite crear mundos.",
        icon: FaLightbulb,
        color: "from-blue-500 to-teal-500"
    }
];

export const InspirationalModal = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [mensajeActual, setMensajeActual] = useState(0);

    useEffect(() => {
        const showModal = () => {
            setMensajeActual((prev) => (prev + 1) % mensajesInspiradores.length);
            setIsVisible(true);
            setTimeout(() => setIsVisible(false), 8000); // El modal se cierra después de 8 segundos
        };

        const interval = setInterval(showModal, 7000); // Mostrar cada 5 minutos (300000ms)
        return () => clearInterval(interval);
    }, []);

    return (
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
                        className={`bg-gradient-to-br ${mensajesInspiradores[mensajeActual].color} p-8 rounded-2xl shadow-2xl max-w-md w-full relative overflow-hidden`}
                        layoutId="modal"
                    >
                        <motion.div
                            className="absolute inset-0 opacity-20"
                            initial={{ rotate: 0, scale: 1 }}
                            animate={{ rotate: 360, scale: 1.5 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            style={{
                                background: "radial-gradient(circle, transparent 20%, white 60%)",
                                filter: "blur(40px)"
                            }}
                        />
                        <div className="relative z-10">
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="flex items-center gap-4 mb-6"
                            >
                                {React.createElement(mensajesInspiradores[mensajeActual].icon, {
                                    className: "text-4xl text-white"
                                })}
                                <h3 className="text-2xl font-bold text-white">
                                    {mensajesInspiradores[mensajeActual].titulo}
                                </h3>
                            </motion.div>
                            <motion.p
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="text-white/90 text-lg leading-relaxed"
                            >
                                {mensajesInspiradores[mensajeActual].mensaje}
                            </motion.p>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="mt-6 px-6 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-white font-semibold transition-colors"
                                onClick={() => setIsVisible(false)}
                            >
                                ¡Entendido!
                            </motion.button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};