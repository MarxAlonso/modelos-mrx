import React from 'react';
import { motion } from "framer-motion";
import { FaCode, FaReact, FaCss3Alt, FaHtml5, FaJs, FaBootstrap, FaLightbulb, FaRocket, FaUsers } from "react-icons/fa";
import { useState, useEffect } from "react";

export const FrontEndInfo = () => {
    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white px-4 overflow-hidden z-[1]">
            {/* Partículas de fondo animadas */}
            <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-purple-400/30 rounded-full"
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight,
                        }}
                        animate={{
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight,
                        }}
                        transition={{
                            duration: Math.random() * 10 + 5,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                ))}
            </div>

            {/* Contenido principal con efectos mejorados */}
            <motion.div
                className="relative z-10 flex flex-col items-center max-w-6xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-6xl font-extrabold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400"
                >
                    Desarrollo Front-End
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="text-xl text-center mb-10 max-w-3xl leading-relaxed backdrop-blur-sm bg-gray-900/30 p-6 rounded-xl"
                >
                    Aprende a crear interfaces web modernas y responsivas utilizando las tecnologías más demandadas en el desarrollo front-end. Domina HTML, CSS, JavaScript y los frameworks más populares.
                </motion.p>

                {/* Tecnologías Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl mb-12">
                    {[
                        {
                            Icon: FaHtml5,
                            color: "text-orange-500",
                            title: "HTML5",
                            description: "Estructura y semántica web moderna"
                        },
                        {
                            Icon: FaCss3Alt,
                            color: "text-blue-400",
                            title: "CSS3",
                            description: "Diseño responsive y animaciones"
                        },
                        {
                            Icon: FaJs,
                            color: "text-yellow-400",
                            title: "JavaScript",
                            description: "Interactividad y dinamismo"
                        },
                        {
                            Icon: FaReact,
                            color: "text-cyan-400",
                            title: "React",
                            description: "Desarrollo de SPA modernas"
                        },
                        {
                            Icon: FaBootstrap,
                            color: "text-purple-500",
                            title: "Bootstrap",
                            description: "Framework CSS responsive"
                        },
                        {
                            Icon: FaCode,
                            color: "text-green-400",
                            title: "Más",
                            description: "Tailwind, SASS, y más"
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 + 1 }}
                            className="flex flex-col items-center p-6 backdrop-blur-sm bg-gray-800/50 rounded-xl hover:bg-gray-700/50 transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                        >
                            <item.Icon className={`text-5xl ${item.color} mb-4`} />
                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                            <p className="text-gray-300 text-center">{item.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Efecto de resplandor en el fondo */}
                <motion.div
                    className="absolute -bottom-20 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </motion.div>
        </div>
    );
};


export const FrontEndDescripcion = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            icon: FaLightbulb,
            title: "¿Por qué Front-End?",
            description: "El desarrollo front-end es la puerta de entrada al mundo del desarrollo web. Es donde la creatividad se encuentra con la tecnología, permitiéndote crear experiencias visuales impactantes que los usuarios pueden ver y sentir.",
            color: "text-yellow-400"
        },
        {
            icon: FaUsers,
            title: "Para Principiantes",
            description: "Como principiante, el front-end te ofrece resultados visibles desde el primer día. Cada línea de código que escribes se traduce en cambios que puedes ver, lo que hace que el aprendizaje sea más gratificante y motivador.",
            color: "text-blue-400"
        },
        {
            icon: FaRocket,
            title: "Tu Camino al Éxito",
            description: "El desarrollo front-end es una habilidad altamente demandada. Con dedicación y práctica, podrás construir interfaces modernas, sitios web responsivos y aplicaciones interactivas que impresionen a usuarios y empleadores por igual.",
            color: "text-purple-400"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return(
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-white mb-4">Tu Viaje en el Desarrollo Web</h2>
                    <p className="text-gray-300 text-lg">Descubre por qué el desarrollo front-end es el punto de partida perfecto</p>
                </motion.div>

                <div className="relative overflow-hidden rounded-2xl bg-gray-800/50 backdrop-blur-lg p-8">
                    <div className="flex justify-center gap-4 mb-8">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-purple-500 w-8' : 'bg-gray-600'}`}
                            />
                        ))}
                    </div>

                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                    >
                        {/* Corrección en la línea del icono */}
                        <div className={`text-6xl ${slides[currentSlide].color} mx-auto mb-6`}>
                            {React.createElement(slides[currentSlide].icon)}
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-4">{slides[currentSlide].title}</h3>
                        <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
                            {slides[currentSlide].description}
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                    {[
                        {
                            title: "Aprende Paso a Paso",
                            description: "Comienza con HTML y CSS, luego avanza hacia JavaScript y frameworks modernos.",
                            icon: FaCode,
                            color: "bg-gradient-to-br from-pink-500 to-purple-600"
                        },
                        {
                            title: "Construye tu Portfolio",
                            description: "Crea proyectos reales que demuestren tus habilidades a futuros empleadores.",
                            icon: FaReact,
                            color: "bg-gradient-to-br from-blue-500 to-cyan-600"
                        },
                        {
                            title: "Únete a la Comunidad",
                            description: "Conecta con otros desarrolladores, comparte conocimientos y crece juntos.",
                            icon: FaUsers,
                            color: "bg-gradient-to-br from-green-500 to-teal-600"
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="p-6 rounded-xl backdrop-blur-sm bg-gray-800/30 hover:bg-gray-700/30 transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className={`w-14 h-14 ${item.color} rounded-lg flex items-center justify-center mb-4`}>
                                <item.icon className="text-2xl text-white" />
                            </div>
                            <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                            <p className="text-gray-300">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};