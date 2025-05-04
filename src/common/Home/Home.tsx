import { motion } from "framer-motion";
import { FaCode, FaReact, FaCss3Alt } from "react-icons/fa";
import { FaLightbulb, FaTools, FaLaptopCode } from "react-icons/fa";
export const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white px-4">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold text-center mb-6"
      >
        ¡Bienvenido a <span className="text-purple-400">CodeModules</span>!
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-xl text-center mb-10 max-w-2xl"
      >
        Encuentra módulos visuales listos para usar en tus proyectos web con HTML, CSS y Tailwind.
      </motion.p>

      <motion.div
        className="flex gap-6 text-5xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <FaCode className="text-blue-400 hover:scale-110 transition-transform" />
        <FaReact className="text-cyan-400 hover:scale-110 transition-transform" />
        <FaCss3Alt className="text-pink-400 hover:scale-110 transition-transform" />
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