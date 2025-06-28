import { motion } from "framer-motion";
import { FaLightbulb, FaTools, FaLaptopCode } from "react-icons/fa";
import {
  FaReact,
  FaCss3Alt,
  FaHtml5,
  FaJsSquare,
  FaBootstrap,
  FaJava,
  FaDatabase,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaServer,
} from "react-icons/fa";
import { useState } from "react";

// Lista de tecnologías
const icons = [
  {
    Icon: FaHtml5,
    color: "text-orange-400",
    label: "HTML5",
    descripcion: "Lenguaje de marcado que estructura el contenido web.",
  },
  {
    Icon: FaCss3Alt,
    color: "text-blue-400",
    label: "CSS3",
    descripcion: "Lenguaje de estilos que define el diseño visual de la web.",
  },
  {
    Icon: FaJsSquare,
    color: "text-yellow-400",
    label: "JavaScript",
    descripcion: "Lenguaje de programación para añadir interactividad en el frontend.",
  },
  {
    Icon: FaBootstrap,
    color: "text-purple-400",
    label: "Bootstrap",
    descripcion: "Framework CSS para diseño rápido y responsivo.",
  },
  {
    Icon: FaReact,
    color: "text-cyan-400",
    label: "React",
    descripcion: "Librería de JavaScript para construir interfaces de usuario modernas.",
  },
  {
    Icon: FaJava,
    color: "text-red-500",
    label: "Java",
    descripcion: "Lenguaje orientado a objetos muy utilizado en backend y aplicaciones empresariales.",
  },
  {
    Icon: FaServer,
    color: "text-teal-400",
    label: "Spring Boot",
    descripcion: "Framework que simplifica la creación de APIs y microservicios con Java.",
  },
  {
    Icon: FaDatabase,
    color: "text-purple-300",
    label: "MySQL",
    descripcion: "Sistema gestor de bases de datos relacional popular y robusto.",
  },
  {
    Icon: FaNodeJs,
    color: "text-green-500",
    label: "Node.js",
    descripcion: "Entorno de ejecución para JavaScript del lado del servidor.",
  },
  {
    Icon: FaGitAlt,
    color: "text-orange-500",
    label: "Git",
    descripcion: "Sistema de control de versiones para gestionar el historial de código.",
  },
  {
    Icon: FaGithub,
    color: "text-gray-300",
    label: "GitHub",
    descripcion: "Plataforma para alojar repositorios de código y colaborar en proyectos.",
  },
];
type ModalInfo = {
  label: string;
  descripcion: string;
};

export const Home = () => {
  const [modalInfo, setModalInfo] = useState<ModalInfo | null>(null);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white px-4 overflow-hidden z-[1]">

      {/* Partículas */}
      <div className="absolute inset-0 pointer-events-none">
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

      {/* Contenido principal */}
      <motion.div
        className="relative z-10 flex flex-col items-center"
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
          ¡Bienvenido a CODERS MRX!
      {/* CodeModules */}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl text-center mb-10 max-w-3xl leading-relaxed backdrop-blur-sm bg-gray-900/30 p-6 rounded-xl"
        >
          Aprende desde lo más básico de HTML, CSS, JS hasta desarrollar APIs con Spring Boot y
          conectarlas con bases de datos. Visualiza módulos interactivos, edítalos en vivo y lleva tus
          habilidades web al siguiente nivel.
        </motion.p>

        {/* Iconos de tecnologías */}
        <motion.div
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 text-4xl sm:text-5xl lg:text-6xl mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          {icons.map(({ Icon, color, label, descripcion }) => (
            <motion.div
              key={label}
              whileHover={{
                scale: 1.2,
                filter: "drop-shadow(0 0 0.5rem currentColor)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className={`flex flex-col items-center ${color} cursor-pointer`}
              onClick={() => setModalInfo({ label, descripcion })}
              title={label}
            >
              <Icon />
              <span className="text-xs mt-1 text-white/70">{label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Fondo animado */}
        <motion.div
          className="absolute -bottom-20 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl pointer-events-none"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />

      </motion.div>

      {/* Modal */}
      {modalInfo && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="bg-gray-900 text-white p-6 rounded-xl max-w-md w-full border border-purple-500 shadow-lg relative"
          >
            <button
              onClick={() => setModalInfo(null)}
              className="absolute top-2 right-3 text-white text-lg hover:text-purple-400"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-2 text-purple-300">{modalInfo.label}</h2>
            <p className="text-gray-300">{modalInfo.descripcion}</p>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export const InfoInicio = () => {
    const items = [
      {
        icon: <FaLightbulb className="text-yellow-400 text-4xl mb-4" />,
        title: "Inspírate con ideas de diseño",
        description: "Explora módulos creativos y modernos que puedes adaptar a tus propios proyectos."
      },
      {
        icon: <FaTools className="text-purple-400 text-4xl mb-4" />,
        title: "Componentes listos para usar",
        description: "Aprovecha diseños funcionales hechos con HTML, TailwindCSS y React para implementarlos directamente."
      },
      {
        icon: <FaLaptopCode className="text-cyan-400 text-4xl mb-4" />,
        title: "Optimiza tu flujo de desarrollo",
        description: "Ahorra tiempo reutilizando secciones de interfaz visualmente atractivas y bien estructuradas."
      }
    ];

    return (
      <div className="py-16 bg-gradient-to-b from-black via-gray-900 to-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">¿Qué ofrece esta plataforma?</h2>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gray-800 hover:shadow-xl hover:scale-[1.02] transition-all rounded-2xl p-6 text-center"
              >
                {item.icon}
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  };