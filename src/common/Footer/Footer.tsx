import { motion } from "framer-motion";
import {
  FaDumbbell,
  FaGithub,
  FaGlobe,
  FaWhatsapp
} from "react-icons/fa";
import { Link } from "react-router-dom";

export const Footer = () => {
  const fadeInUp = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5 }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-gray-900 via-purple-900 to-black rounded-t-3xl shadow-lg shadow-purple-500/20"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 py-12 border-t-2 border-purple-500/20 text-white">
          {/* Logo y descripción */}
          <motion.div 
            {...fadeInUp}
            className="py-8 px-4 space-y-6"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-2xl flex items-center gap-2 font-bold uppercase"
            >
              <FaDumbbell className="text-purple-400" />
              <p>CODERS</p>
              <p className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">MRX</p>
            </motion.div>
            <p className="text-gray-300">
              Explora nuestra colección de diseños HTML y CSS listos para usar.
              Encuentra inspiración y mejora tus proyectos web.
            </p>
            <div className="flex items-center gap-6 !mt-8">
              <motion.a
                href="https://github.com/MarxAlonso"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: "#8B5CF6" }}
                whileTap={{ scale: 0.9 }}
                className="text-3xl text-gray-300 hover:text-purple-500 transition-colors"
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://developer-marx.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: "#8B5CF6" }}
                whileTap={{ scale: 0.9 }}
                className="text-3xl text-gray-300 hover:text-purple-500 transition-colors"
              >
                <FaGlobe />
              </motion.a>
              <motion.a
                href="https://wa.me/922061911"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: "#8B5CF6" }}
                whileTap={{ scale: 0.9 }}
                className="text-3xl text-gray-300 hover:text-purple-500 transition-colors"
              >
                <FaWhatsapp />
              </motion.a>
            </div>
          </motion.div>

          {/* Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 md:col-span-3 gap-8">
            {/* Enlaces Importantes */}
            <motion.div {...fadeInUp} className="py-8 px-4">
              <h2 className="text-xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Enlaces Importantes
              </h2>
              <ul className="flex flex-col gap-4">
                <motion.li whileHover={{ x: 5 }} className="transition-colors">
                  <Link to="/" className="text-gray-300 hover:text-purple-400">Inicio</Link>
                </motion.li>
                <motion.li whileHover={{ x: 5 }} className="transition-colors">
                  <Link to="/frontend" className="text-gray-300 hover:text-purple-400">Front-end</Link>
                </motion.li>
                <motion.li whileHover={{ x: 5 }} className="transition-colors">
                  <Link to="/modulosestaticos" className="text-gray-300 hover:text-purple-400">Módulos Estáticos</Link>
                </motion.li>
              </ul>
            </motion.div>

            {/* Módulos */}
            <motion.div {...fadeInUp} className="py-8 px-4">
              <h2 className="text-xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Módulos
              </h2>
              <ul className="flex flex-col gap-4">
                <motion.li whileHover={{ x: 5 }} className="transition-colors">
                  <Link to="/modulosestaticos" className="text-gray-300 hover:text-purple-400">Módulos Estáticos</Link>
                </motion.li>
                <motion.li whileHover={{ x: 5 }} className="transition-colors">
                  <Link to="/modulosdinamicos" className="text-gray-300 hover:text-purple-400">Módulos Dinámicos</Link>
                </motion.li>
                <motion.li whileHover={{ x: 5 }} className="transition-colors">
                  <Link to="#" className="text-gray-300 hover:text-purple-400">Módulos Animados</Link>
                </motion.li>
              </ul>
            </motion.div>

            {/* Programación */}
            <motion.div {...fadeInUp} className="py-8 px-4">
              <h2 className="text-xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Programación
              </h2>
              <ul className="flex flex-col gap-4">
                <motion.li whileHover={{ x: 5 }} className="transition-colors">
                  <Link to="/frontend" className="text-gray-300 hover:text-purple-400">Front-end</Link>
                </motion.li>
                <motion.li whileHover={{ x: 5 }} className="transition-colors">
                  <Link to="/springbootinfo" className="text-gray-300 hover:text-purple-400">Spring Boot</Link>
                </motion.li>
                <motion.li whileHover={{ x: 5 }} className="transition-colors">
                  <Link to="#" className="text-gray-300 hover:text-purple-400">Frameworks</Link>
                </motion.li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Copyright Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center py-6 border-t border-purple-500/20"
        >
          <span className="text-sm text-gray-400">
            © {new Date().getFullYear()} Marx Chipana. Todos los derechos reservados.
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
};