import { motion } from "framer-motion";
import { FaJs, FaCode, FaEye, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import { ejemplosJS } from './ejemplosJS';

export const AprendiendoJs = () => {
  const [ejemploActual, setEjemploActual] = useState(0);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 p-8 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-7xl mx-auto"
      >
        {/* Encabezado */}
        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center space-x-4 mb-4">
            <FaJs className="text-6xl text-yellow-400" />
            <h1 className="text-5xl font-bold text-white">Aprendiendo JavaScript</h1>
          </div>
          <p className="text-gray-300 text-xl">Fundamentos de programación con JavaScript</p>
        </motion.div>

        {/* Contenido Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Panel de Código */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/30"
          >
            <div className="flex items-center space-x-3 mb-4">
              <FaCode className="text-2xl text-yellow-400" />
              <h2 className="text-2xl font-semibold text-white">{ejemplosJS[ejemploActual].titulo}</h2>
            </div>
            <p className="text-gray-300 mb-4">{ejemplosJS[ejemploActual].descripcion}</p>
            <pre className="bg-gray-900/80 p-6 rounded-lg overflow-x-auto text-sm text-white font-mono border border-yellow-500/20">
              {ejemplosJS[ejemploActual].codigo}
            </pre>
          </motion.div>

          {/* Panel de Resultado y Explicación */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/30">
              <div className="flex items-center space-x-3 mb-4">
                <FaEye className="text-2xl text-yellow-400" />
                <h2 className="text-2xl font-semibold text-white">Resultado</h2>
              </div>
              <pre className="bg-gray-900/80 p-6 rounded-lg overflow-x-auto text-sm text-green-400 font-mono border border-yellow-500/20">
                {ejemplosJS[ejemploActual].resultado}
              </pre>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/30">
              <h3 className="text-xl font-semibold text-white mb-4">Explicación</h3>
              <p className="text-gray-300 whitespace-pre-line">
                {ejemplosJS[ejemploActual].explicacion}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Navegación */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center space-x-4 mt-8"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setEjemploActual((prev) => Math.max(0, prev - 1))}
            disabled={ejemploActual === 0}
            className={`flex items-center space-x-2 px-6 py-3 rounded-xl backdrop-blur-sm transition-all
              ${ejemploActual === 0
                ? 'bg-gray-800/30 text-gray-500 cursor-not-allowed border border-gray-700/30'
                : 'bg-yellow-600/50 text-white border border-yellow-500/50 hover:bg-yellow-500/60'}
            `}
          >
            <FaArrowLeft className="text-lg" />
            <span>Anterior</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setEjemploActual((prev) => Math.min(ejemplosJS.length - 1, prev + 1))}
            disabled={ejemploActual === ejemplosJS.length - 1}
            className={`flex items-center space-x-2 px-6 py-3 rounded-xl backdrop-blur-sm transition-all
              ${ejemploActual === ejemplosJS.length - 1
                ? 'bg-gray-800/30 text-gray-500 cursor-not-allowed border border-gray-700/30'
                : 'bg-yellow-600/50 text-white border border-yellow-500/50 hover:bg-yellow-500/60'}
            `}
          >
            <span>Siguiente</span>
            <FaArrowRight className="text-lg" />
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};