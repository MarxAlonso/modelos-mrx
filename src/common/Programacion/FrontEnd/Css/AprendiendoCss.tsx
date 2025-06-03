import { motion } from "framer-motion";
import { FaCss3Alt, FaCode, FaEye, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState } from "react";

const ejemplosCSS = [
  {
    id: 1,
    titulo: "Selectores Básicos",
    descripcion: "Los selectores CSS te permiten aplicar estilos a elementos HTML específicos",
    codigo: `/* Selector de elemento */
p {
    color: blue;
    font-size: 16px;
}

/* Selector de clase */
.destacado {
    background-color: yellow;
    padding: 10px;
}

/* Selector de ID */
#titulo-principal {
    font-size: 24px;
    font-weight: bold;
}`,
    html: `<h1 id="titulo-principal">Título Principal</h1>
<p class="destacado">Párrafo destacado</p>
<p>Párrafo normal</p>`,
    explicacion: "- Selector de elemento: Aplica estilos a todos los elementos del mismo tipo\n- Selector de clase (.): Aplica estilos a elementos con una clase específica\n- Selector de ID (#): Aplica estilos a un elemento único con un ID específico"
  },
  {
    id: 2,
    titulo: "Modelo de Caja",
    descripcion: "El modelo de caja es fundamental en CSS y define cómo se comportan los elementos",
    codigo: `.caja {
    width: 200px;
    height: 100px;
    padding: 20px;
    border: 2px solid black;
    margin: 10px;
    background-color: lightblue;
}`,
    html: `<div class="caja">Contenido de la caja</div>`,
    explicacion: "- width/height: Dimensiones del contenido\n- padding: Espacio interno\n- border: Borde del elemento\n- margin: Espacio externo"
  },
  {
    id: 3,
    titulo: "Flexbox",
    descripcion: "Flexbox es un modelo de diseño que facilita la creación de layouts flexibles",
    codigo: `.contenedor-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
}

.item-flex {
    padding: 20px;
    background-color: #e0e0e0;
}`,
    html: `<div class="contenedor-flex">
    <div class="item-flex">Item 1</div>
    <div class="item-flex">Item 2</div>
    <div class="item-flex">Item 3</div>
</div>`,
    explicacion: "- display: flex: Activa el modelo flexbox\n- justify-content: Alineación horizontal\n- align-items: Alineación vertical\n- gap: Espacio entre elementos"
  }
];

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