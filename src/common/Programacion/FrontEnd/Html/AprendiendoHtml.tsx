import { motion } from "framer-motion";
import { FaHtml5, FaCode, FaEye, FaArrowRight } from "react-icons/fa";
import { useState, useEffect } from "react";

const StarryBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            opacity: Math.random(),
            scale: Math.random()
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

const ejemplosHTML = [
  {
    id: 1,
    titulo: "Estructura Básica HTML",
    descripcion: "Todo documento HTML debe comenzar con esta estructura básica",
    codigo: `<!DOCTYPE html>
<html>
<head>
    <title>Mi primera página</title>
</head>
<body>
    <h1>¡Hola Mundo!</h1>
</body>
</html>`,
    resultado: "¡Hola Mundo!",
    explicacion: "- <!DOCTYPE html>: Define el tipo de documento\n- <html>: Elemento raíz\n- <head>: Metadatos y título\n- <body>: Contenido visible"
  },
  {
    id: 2,
    titulo: "Encabezados",
    descripcion: "HTML tiene 6 niveles de encabezados",
    codigo: `<h1>Encabezado 1</h1>
<h2>Encabezado 2</h2>
<h3>Encabezado 3</h3>`,
    resultado: "Encabezados de diferentes tamaños",
    explicacion: "Los encabezados van desde h1 (más grande) hasta h6 (más pequeño)"
  }
];

export const AprendiendoHtml = () => {
  const [ejemploActual, setEjemploActual] = useState(0);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 p-8 overflow-hidden">
      <StarryBackground />
      
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
            <FaHtml5 className="text-6xl text-orange-500" />
            <h1 className="text-5xl font-bold text-white">Aprendiendo HTML</h1>
          </div>
          <p className="text-gray-300 text-xl">Paso a paso hacia el desarrollo web</p>
        </motion.div>

        {/* Contenido Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Panel de Código */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30"
          >
            <div className="flex items-center space-x-3 mb-4">
              <FaCode className="text-2xl text-purple-400" />
              <h2 className="text-2xl font-semibold text-white">{ejemplosHTML[ejemploActual].titulo}</h2>
            </div>
            <p className="text-gray-300 mb-4">{ejemplosHTML[ejemploActual].descripcion}</p>
            <pre className="bg-gray-900/80 p-6 rounded-lg overflow-x-auto text-sm text-white font-mono border border-purple-500/20">
              {ejemplosHTML[ejemploActual].codigo}
            </pre>
          </motion.div>

          {/* Panel de Resultado y Explicación */}
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
                <div className="text-white text-lg" dangerouslySetInnerHTML={{ __html: ejemplosHTML[ejemploActual].resultado }} />
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30">
              <h3 className="text-xl font-semibold text-white mb-4">Explicación</h3>
              <p className="text-gray-300 whitespace-pre-line">
                {ejemplosHTML[ejemploActual].explicacion}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Navegación */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center space-x-4"
        >
          {ejemplosHTML.map((ejemplo) => (
            <motion.button
              key={ejemplo.id}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(147, 51, 234, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setEjemploActual(ejemplo.id - 1)}
              className={`px-6 py-3 rounded-xl backdrop-blur-sm transition-all
                ${ejemplo.id - 1 === ejemploActual 
                  ? 'bg-purple-600/50 text-white border-2 border-purple-500'
                  : 'bg-gray-800/30 text-gray-300 border border-purple-500/30'}
              `}
            >
              {ejemplo.id}
            </motion.button>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};