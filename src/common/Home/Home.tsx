import { motion } from "framer-motion";
import { FaCode, FaReact, FaCss3Alt } from "react-icons/fa";

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
