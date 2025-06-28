import { useState } from "react";
import { motion } from "framer-motion";
import { disenos, Diseno } from "./data/disenos";
import { categorias } from "./data/categorias"

// Componente Modal para mostrar el código
const ModalCodigo = ({
  diseno,
  onClose,
}: {
  diseno: Diseno;
  onClose: () => void;
}) => {
  const [tabActiva, setTabActiva] = useState("html");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-gray-800 rounded-xl w-full max-w-4xl max-h-[80vh] overflow-hidden"
      >
        <div className="p-6 border-b border-gray-700">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold">{diseno.titulo}</h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              ✕
            </button>
          </div>
          <div className="flex gap-4 mt-4">
            <button
              onClick={() => setTabActiva("html")}
              className={`px-4 py-2 rounded-lg transition-colors ${
                tabActiva === "html"
                  ? "bg-purple-500 text-white"
                  : "bg-gray-700 text-gray-300"
              }`}
            >
              HTML
            </button>
            <button
              onClick={() => setTabActiva("css")}
              className={`px-4 py-2 rounded-lg transition-colors ${
                tabActiva === "css"
                  ? "bg-purple-500 text-white"
                  : "bg-gray-700 text-gray-300"
              }`}
            >
              CSS
            </button>
            <button
              onClick={() => setTabActiva("js")}
              className={`px-4 py-2 rounded-lg transition-colors ${
                tabActiva === "js"
                  ? "bg-purple-500 text-white"
                  : "bg-gray-700 text-gray-300"
              }`}
            >
              JavaScript
            </button>
          </div>
        </div>
        <div className="p-6 overflow-auto max-h-[60vh]">
          <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
            <code className="text-sm">
              {tabActiva === "html" 
                ? diseno.codigo.html 
                : tabActiva === "css" 
                ? diseno.codigo.css 
                : diseno.codigo.js}
            </code>
          </pre>
        </div>
        <div className="p-2 border-t border-gray-700">
          <button
            onClick={() => {
              navigator.clipboard.writeText(
                tabActiva === "html" 
                  ? diseno.codigo.html 
                  : tabActiva === "css" 
                  ? diseno.codigo.css 
                  : diseno.codigo.js
              );
            }}
            className="px-4 py-2 bg-purple-500 hover:bg-purple-600 rounded-lg transition-colors"
          >
            Copiar Código
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const ModulosEstaticos = () => {
  const [categoriaActiva, setCategoriaActiva] = useState("Todos");

  // Estado para el modal de código
  const [modalAbierto, setModalAbierto] = useState(false);
  const [disenoSeleccionado, setDisenoSeleccionado] = useState<Diseno | null>(null);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white">
      {/* Header de bienvenida */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-4 py-16 text-center"
      >
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          ¡Bienvenido Programador!
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Explora nuestra colección de diseños HTML y CSS listos para usar.
          Encuentra inspiración y mejora tus proyectos web con componentes
          modernos y atractivos.
        </p>
      </motion.div>
      {/* Filtro de categorías */}
      <div className="container mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {categorias.map((categoria) => (
            <motion.button
              key={categoria}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCategoriaActiva(categoria)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                categoriaActiva === categoria
                  ? "bg-purple-500 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {categoria}
            </motion.button>
          ))}
        </motion.div>
      </div>
      {/* Grid de diseños */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {disenos
            .filter(
              (diseno) =>
                categoriaActiva === "Todos" ||
                diseno.categoria === categoriaActiva
            )
            .map((diseno, index) => (
              <motion.div
                key={diseno.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
              >
                <div className="h-48 bg-gray-700">
                  <img
                    src={diseno.imagen}
                    alt={diseno.titulo}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {diseno.titulo}
                  </h3>
                  <p className="text-gray-400 mb-4">{diseno.descripcion}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-purple-400">
                      {diseno.dificultad}
                    </span>
                    <button
                      onClick={() => {
                        setDisenoSeleccionado(diseno);
                        setModalAbierto(true);
                      }}
                      className="px-4 py-2 bg-purple-500 hover:bg-purple-600 rounded-lg transition-colors"
                    >
                      Ver Código
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </div>

      {/* Modal */}
      {modalAbierto && disenoSeleccionado && (
        <ModalCodigo
          diseno={disenoSeleccionado}
          onClose={() => {
            setModalAbierto(false);
            setDisenoSeleccionado(null);
          }}
        />
      )}
    </div>
  );
};
