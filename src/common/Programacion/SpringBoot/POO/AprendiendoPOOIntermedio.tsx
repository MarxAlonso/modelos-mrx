import { motion } from "framer-motion";
import { FaCodeBranch, FaCode, FaEye } from "react-icons/fa";
import { useState } from "react";
import { ejemplosPooIntermedio } from './data/ejemplosPooIntermedio';

export const AprendiendoPOOIntermedio = () => {
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
            <FaCodeBranch className="text-6xl text-green-600" />
            <h1 className="text-5xl font-bold text-white">Aprendiendo POO Intermedio</h1>
          </div>
          <p className="text-gray-300 text-xl">Paso a paso hacia el desarrollo en Java implementado POO</p>
        </motion.div>

        {/* Contenido Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Código Java */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30"
          >
            <div className="flex items-center space-x-3 mb-4">
              <FaCode className="text-2xl text-purple-400" />
              <h2 className="text-2xl font-semibold text-white">
                {ejemplosPooIntermedio[ejemploActual].titulo}
              </h2>
            </div>
            <p className="text-gray-300 mb-4">
              {ejemplosPooIntermedio[ejemploActual].descripcion}
            </p>
            <pre className="bg-gray-900/80 p-6 rounded-lg overflow-x-auto text-sm text-white font-mono border border-purple-500/20">
              {ejemplosPooIntermedio[ejemploActual].codigo}
            </pre>
          </motion.div>

          {/* Resultado y Explicación */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30">
              <div className="flex items-center space-x-3 mb-4">
                <FaEye className="text-2xl text-purple-400" />
                <h2 className="text-2xl font-semibold text-white">Resultado</h2>
              </div>
              <div className="bg-white/5 rounded-lg p-6 border border-purple-500/20">
                <p className="text-white text-lg">{ejemplosPooIntermedio[ejemploActual].resultado}</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30">
              <h3 className="text-xl font-semibold text-white mb-4">Explicación</h3>
              <p className="text-gray-300 whitespace-pre-line">
                {ejemplosPooIntermedio[ejemploActual].explicacion}
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
          <button
            onClick={() => setEjemploActual((prev) => Math.max(0, prev - 1))}
            disabled={ejemploActual === 0}
            className={`px-6 py-2 rounded-lg font-semibold transition ${
              ejemploActual === 0
                ? "bg-gray-600 cursor-not-allowed text-gray-300"
                : "bg-purple-600 hover:bg-purple-700 text-white"
            }`}
          >
            Anterior
          </button>

          <button
            onClick={() =>
              setEjemploActual((prev) => Math.min(ejemplosPooIntermedio.length - 1, prev + 1))
            }
            disabled={ejemploActual === ejemplosPooIntermedio.length - 1}
            className={`px-6 py-2 rounded-lg font-semibold transition ${
              ejemploActual === ejemplosPooIntermedio.length - 1
                ? "bg-gray-600 cursor-not-allowed text-gray-300"
                : "bg-purple-600 hover:bg-purple-700 text-white"
            }`}
          >
            Siguiente
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};
