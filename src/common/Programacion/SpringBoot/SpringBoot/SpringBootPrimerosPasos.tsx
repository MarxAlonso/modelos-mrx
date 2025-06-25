import { motion } from "framer-motion";
import { useState } from "react";
import { ejemplosSpringBootBasico } from "./data/ejemplosSpringBootBasico";
import { FaToolbox, FaRocket, FaInfoCircle } from "react-icons/fa";

export const SpringBootPrimerosPasos = () => {
  const [ejemploActual, setEjemploActual] = useState(0);
  const [archivoActual, setArchivoActual] = useState(0);

  const ejemplo = ejemplosSpringBootBasico[ejemploActual];
  const archivo = ejemplo.archivos[archivoActual];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white px-6 py-12 overflow-hidden">
      {/* Banner explicativo */}
      <motion.div
        className="max-w-5xl mx-auto mb-12 bg-gray-800/50 backdrop-blur-lg p-6 rounded-2xl border border-purple-500/30"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="flex items-center space-x-4 mb-4">
          <FaInfoCircle className="text-3xl text-purple-400" />
          <h2 className="text-3xl font-bold text-purple-300">¿Qué es Spring Boot?</h2>
        </div>
        <p className="text-gray-300 text-lg mb-4">
          Spring Boot es un framework que simplifica el desarrollo de aplicaciones Java modernas. 
          Elimina la necesidad de configurar manualmente archivos XML y proporciona un entorno listo 
          para producción con embebido Tomcat, integración con bases de datos, seguridad y más.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="flex items-start gap-4">
            <FaRocket className="text-2xl text-green-400 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-green-300">¿Por qué usarlo?</h3>
              <ul className="list-disc pl-5 text-gray-300 mt-2">
                <li>Despliegue rápido y sencillo</li>
                <li>Evita configuración repetitiva</li>
                <li>Ideal para microservicios</li>
                <li>Compatible con JPA, REST, seguridad, etc.</li>
              </ul>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaToolbox className="text-2xl text-yellow-400 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-yellow-300">Herramientas necesarias</h3>
              <ul className="list-disc pl-5 text-gray-300 mt-2">
                <li>Java 17+ (JDK)</li>
                <li>Maven o Gradle</li>
                <li>IDE (IntelliJ, VS Code, Eclipse)</li>
                <li>Spring Initializr (https://start.spring.io)</li>
                <li>MySQL o cualquier base de datos compatible</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Header del ejemplo actual */}
      <motion.div className="text-center mb-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
          {ejemplo.titulo}
        </h1>
        <p className="text-xl mt-4 text-gray-300 max-w-3xl mx-auto">{ejemplo.descripcion}</p>
      </motion.div>

      {/* Selector de archivos */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {ejemplo.archivos.map((archivo, index) => (
          <button
            key={index}
            onClick={() => setArchivoActual(index)}
            className={`px-4 py-2 rounded-md font-semibold ${
              index === archivoActual
                ? "bg-purple-600 text-white"
                : "bg-gray-700 text-gray-300 hover:bg-purple-500"
            }`}
          >
            {archivo.nombre}
          </button>
        ))}
      </div>

      {/* Vista de archivo */}
      <div className="bg-gray-800/60 border border-purple-400/30 rounded-xl p-6 mb-8 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-purple-300 mb-2">{archivo.nombre}</h2>
        <pre className="bg-gray-900/80 p-4 rounded-lg overflow-x-auto text-sm text-white font-mono border border-purple-500/20">
          {archivo.codigo}
        </pre>
      </div>

      {/* Resultado */}
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30 max-w-5xl mx-auto mb-6">
        <h2 className="text-xl font-semibold text-white mb-2">Resultado</h2>
        <p className="text-gray-300">{ejemplo.resultado}</p>
      </div>

      {/* Explicación */}
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30 max-w-5xl mx-auto">
        <h2 className="text-xl font-semibold text-white mb-4">Explicación</h2>
        <p className="text-gray-300 whitespace-pre-line">{ejemplo.explicacion}</p>
      </div>

      {/* Navegación entre ejemplos */}
      <div className="flex justify-center space-x-4 mt-12">
        <button
          onClick={() => {
            setEjemploActual((prev) => Math.max(0, prev - 1));
            setArchivoActual(0);
          }}
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
          onClick={() => {
            setEjemploActual((prev) =>
              Math.min(ejemplosSpringBootBasico.length - 1, prev + 1)
            );
            setArchivoActual(0);
          }}
          disabled={ejemploActual === ejemplosSpringBootBasico.length - 1}
          className={`px-6 py-2 rounded-lg font-semibold transition ${
            ejemploActual === ejemplosSpringBootBasico.length - 1
              ? "bg-gray-600 cursor-not-allowed text-gray-300"
              : "bg-purple-600 hover:bg-purple-700 text-white"
          }`}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};
