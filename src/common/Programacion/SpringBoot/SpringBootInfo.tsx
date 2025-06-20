import { motion } from "framer-motion";
import { FaJava, FaDatabase, FaServer, FaProjectDiagram, FaCodeBranch, FaCode } from "react-icons/fa";

export const SpringBootInfo = () => {
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
                    Aprende Spring Boot
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="text-xl text-center mb-10 max-w-3xl leading-relaxed backdrop-blur-sm bg-gray-900/30 p-6 rounded-xl"
                >
                    Inicia desde lo esencial de Java hasta crear APIs RESTful con Spring Boot conectadas a bases de datos MySQL. Este recorrido práctico y moderno te preparará para el desarrollo backend profesional en el ecosistema de Spring.
                </motion.p>

                {/* Tecnologías Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl mb-12">
                    {[
                        {
                            Icon: FaJava,
                            color: "text-orange-400",
                            title: "Java",
                            description: "Fundamentos del lenguaje orientado a objetos"
                        },
                        {
                            Icon: FaCodeBranch,
                            color: "text-green-400",
                            title: "POO",
                            description: "Programación orientada a objetos aplicada"
                        },
                        {
                            Icon: FaProjectDiagram,
                            color: "text-cyan-400",
                            title: "Spring Core",
                            description: "Inversión de control y dependencias"
                        },
                        {
                            Icon: FaServer,
                            color: "text-yellow-400",
                            title: "Spring Boot",
                            description: "Framework para crear aplicaciones web"
                        },
                        {
                            Icon: FaDatabase,
                            color: "text-purple-400",
                            title: "MySQL",
                            description: "Conexión a bases de datos relacionales"
                        },
                        {
                            Icon: FaCode,
                            color: "text-pink-400",
                            title: "APIs REST",
                            description: "Construcción de servicios web RESTful"
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
