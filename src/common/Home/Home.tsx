import { motion } from "framer-motion";
import { FaCode, FaReact, FaCss3Alt } from "react-icons/fa";
import { FaLightbulb, FaTools, FaLaptopCode } from "react-icons/fa";

export const Home = () => {
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
          ¡Bienvenido a{" "}
          <motion.span
            className="inline-block"
            whileHover={{
              scale: 1.1,
              textShadow: "0 0 8px rgb(168, 85, 247, 0.5)",
            }}
          >
            CodeModules
          </motion.span>
          !
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl text-center mb-10 max-w-2xl leading-relaxed backdrop-blur-sm bg-gray-900/30 p-6 rounded-xl"
        >
          Encuentra módulos visuales listos para usar en tus proyectos web con HTML, CSS y Tailwind.
        </motion.p>

        <motion.div
          className="flex gap-8 text-6xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          {[
            { Icon: FaCode, color: "text-blue-400" },
            { Icon: FaReact, color: "text-cyan-400" },
            { Icon: FaCss3Alt, color: "text-pink-400" },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.2,
                rotate: 360,
                filter: "drop-shadow(0 0 0.5rem currentColor)",
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 15,
              }}
              className={`${item.color} cursor-pointer`}
            >
              <item.Icon />
            </motion.div>
          ))}
        </motion.div>

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