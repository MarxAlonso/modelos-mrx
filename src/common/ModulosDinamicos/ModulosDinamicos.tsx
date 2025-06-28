import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import {
  proyectos,
  ProyectoDinamico,
} from "./data/disenosDinamicos";
import { categorias } from "./data/categorias"
const ModalCodigo = ({
  diseno,
  onClose,
}: {
  diseno: ProyectoDinamico;
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

export const ModulosDinamicos = () => {
  const [categoriaActiva, setCategoriaActiva] = useState("Todos");
  const [imagenVista, setImagenVista] = useState<string | null>(null);
  const [busqueda, setBusqueda] = useState("");
  const [modalAbierto, setModalAbierto] = useState(false);
  const [proyectoSeleccionado, setProyectoSeleccionado] =
    useState<ProyectoDinamico | null>(null);

  // Filtrar proyectos por búsqueda y categoría
  const proyectosFiltrados = proyectos.filter((proyecto) => {
    const coincideBusqueda = proyecto.titulo
      .toLowerCase()
      .includes(busqueda.toLowerCase());
    const coincideCategoria =
      categoriaActiva === "Todos" || proyecto.categoria === categoriaActiva;
    return coincideBusqueda && coincideCategoria;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-4 py-16 text-center"
      >
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Módulos Dinámicos
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Explora nuestra colección de componentes dinámicos con JavaScript.
          Encuentra inspiración para tus proyectos interactivos.
        </p>
      </motion.div>

      {/* Buscador */}
      <div className="container mx-auto px-4 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative max-w-md mx-auto"
        >
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar proyectos..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300"
          />
        </motion.div>
      </div>

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
                  ? "bg-purple-500 text-white shadow-lg shadow-purple-500/25"
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 backdrop-blur-sm"
              }`}
            >
              {categoria}
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Grid de proyectos */}
      <div className="container mx-auto px-4 pb-16">
        <AnimatePresence>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {proyectosFiltrados.map((proyecto, index) => (
              <motion.div
                key={proyecto.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  {/* Imagen debe ir después del overlay */}
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    src={proyecto.imagen}
                    alt={proyecto.titulo}
                    className="w-full h-full object-cover transition-transform duration-300 cursor-pointer relative z-10"
                    onClick={() => setImagenVista(proyecto.imagen)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/75 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-400 transition-colors">
                    {proyecto.titulo}
                  </h3>
                  <p className="text-gray-400 mb-4">{proyecto.descripcion}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full">
                      {proyecto.dificultad}
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        setProyectoSeleccionado(proyecto);
                        setModalAbierto(true);
                      }}
                      className="px-4 py-2 bg-purple-500 hover:bg-purple-600 rounded-lg transition-colors shadow-lg shadow-purple-500/25"
                    >
                      Ver Código
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </div>

      {/* Modal (puedes reutilizar el ModalCodigo de ModulosEstaticos) */}
      {modalAbierto && proyectoSeleccionado && (
        <ModalCodigo
          diseno={proyectoSeleccionado}
          onClose={() => {
            setModalAbierto(false);
            setProyectoSeleccionado(null);
          }}
        />
      )}
      {imagenVista && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
          onClick={() => setImagenVista(null)}
        >
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setImagenVista(null)}
              className="absolute top-3 right-3 z-10 bg-black bg-opacity-70 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg hover:bg-opacity-90 transition"
            >
              ✕
            </button>

            <img
              src={imagenVista}
              alt="Vista ampliada"
              className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-xl transition-transform duration-300 hover:scale-105 cursor-zoom-out"
              style={{ touchAction: 'manipulation' }}
            />
          </div>
        </div>
      )}

    </div>
  );
};
