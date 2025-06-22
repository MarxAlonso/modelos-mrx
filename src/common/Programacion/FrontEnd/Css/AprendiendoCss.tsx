import { motion } from "framer-motion";
import { FaCss3Alt, FaCode, FaEye, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import { ejemplosCSS } from './data/ejemploCss';
import { ejemplosCSSIntermedio } from './data/ejemplosCSSIntermedio';
export const AprendiendoCss = () => {
  const [ejemploActual, setEjemploActual] = useState(0);
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 p-8 overflow-hidden">
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
            <FaCss3Alt className="text-6xl text-blue-500" />
            <h1 className="text-5xl font-bold text-white">Aprendiendo lo principal de CSS</h1>
          </div>
          <p className="text-gray-300 text-xl">Estilizando el web paso a paso</p>
        </motion.div>

        {/* Contenido Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Panel Izquierdo - Código */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-gray-800 rounded-xl p-6 shadow-xl"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <FaCode className="mr-2" />
                {ejemplosCSS[ejemploActual].titulo}
              </h2>
            </div>
            <p className="text-gray-400 mb-4">{ejemplosCSS[ejemploActual].descripcion}</p>
            <div className="bg-gray-900 rounded-lg p-4 mb-4">
              <pre className="text-green-400 overflow-x-auto">
                <code>{ejemplosCSS[ejemploActual].codigo}</code>
              </pre>
            </div>
            <div className="bg-gray-900 rounded-lg p-4">
              <h3 className="text-white mb-2">HTML Relacionado:</h3>
              <pre className="text-orange-400 overflow-x-auto">
                <code>{ejemplosCSS[ejemploActual].html}</code>
              </pre>
            </div>
          </motion.div>

          {/* Panel Derecho - Explicación */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-gray-800 rounded-xl p-6 shadow-xl"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <FaEye className="mr-2" />
                Explicación
              </h2>
            </div>
            <div className="prose prose-invert">
              {ejemplosCSS[ejemploActual].explicacion.split('\n').map((line, index) => (
                <p key={index} className="text-gray-300">{line}</p>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Controles de Navegación */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center space-x-4"
        >
          <button
            onClick={() => setEjemploActual(prev => (prev > 0 ? prev - 1 : ejemplosCSS.length - 1))}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full flex items-center transition-colors"
          >
            <FaArrowLeft className="mr-2" /> Anterior
          </button>
          <button
            onClick={() => setEjemploActual(prev => (prev < ejemplosCSS.length - 1 ? prev + 1 : 0))}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full flex items-center transition-colors"
          >
            Siguiente <FaArrowRight className="ml-2" />
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export const AprendiendoCssIntermedio = () => {
  const [ejemploActual, setEjemploActual] = useState(0);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 p-8 overflow-hidden">
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
            <FaCss3Alt className="text-6xl text-blue-500" />
            <h1 className="text-5xl font-bold text-white">CSS Intermedio</h1>
          </div>
          <p className="text-gray-300 text-xl">Dominando técnicas avanzadas de CSS</p>
        </motion.div>

        {/* Contenido Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Panel Izquierdo - Código */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-gray-800 rounded-xl p-6 shadow-xl"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <FaCode className="mr-2" />
                {ejemplosCSSIntermedio[ejemploActual].titulo}
              </h2>
            </div>
            <p className="text-gray-400 mb-4">{ejemplosCSSIntermedio[ejemploActual].descripcion}</p>
            <div className="bg-gray-900 rounded-lg p-4 mb-4">
              <pre className="text-green-400 overflow-x-auto">
                <code>{ejemplosCSSIntermedio[ejemploActual].codigo}</code>
              </pre>
            </div>
            <div className="bg-gray-900 rounded-lg p-4">
              <h3 className="text-white mb-2">HTML Relacionado:</h3>
              <pre className="text-orange-400 overflow-x-auto">
                <code>{ejemplosCSSIntermedio[ejemploActual].html}</code>
              </pre>
            </div>
          </motion.div>

          {/* Panel Derecho - Explicación */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-gray-800 rounded-xl p-6 shadow-xl"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <FaEye className="mr-2" />
                Explicación
              </h2>
            </div>
            <div className="prose prose-invert">
              {ejemplosCSSIntermedio[ejemploActual].explicacion.split('\n').map((line, index) => (
                <p key={index} className="text-gray-300">{line}</p>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Controles de Navegación */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center space-x-4"
        >
          <button
            onClick={() => setEjemploActual(prev => (prev > 0 ? prev - 1 : ejemplosCSSIntermedio.length - 1))}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full flex items-center transition-colors"
          >
            <FaArrowLeft className="mr-2" /> Anterior
          </button>
          <button
            onClick={() => setEjemploActual(prev => (prev < ejemplosCSSIntermedio.length - 1 ? prev + 1 : 0))}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full flex items-center transition-colors"
          >
            Siguiente <FaArrowRight className="ml-2" />
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};