import { motion } from "framer-motion";
import { FaHtml5, FaCode, FaEye, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState } from "react";

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
  },
  {
    id: 3,
    titulo: "Párrafos",
    descripcion: "El elemento <p> se usa para definir párrafos de texto",
    codigo: `<p>Este es un párrafo de texto en HTML.</p>`,
    resultado: "Este es un párrafo de texto en HTML.",
    explicacion: "- <p>: Define un párrafo. Se usa para estructurar bloques de texto."
  },
  {
    id: 4,
    titulo: "Enlaces",
    descripcion: "El elemento <a> se usa para crear hipervínculos",
    codigo: `<a href="https://www.example.com">Haz clic aquí</a>`,
    resultado: "Haz clic aquí",
    explicacion: "- <a>: Define un enlace.\n- href: Atributo que especifica la URL del destino."
  },
  {
    id: 5,
    titulo: "Listas Desordenadas",
    descripcion: "El elemento <ul> define una lista sin orden, y <li> define los elementos de la lista",
    codigo: `<ul>
    <li>Elemento 1</li>
    <li>Elemento 2</li>
    <li>Elemento 3</li>
</ul>`,
    resultado: "Elemento 1\nElemento 2\nElemento 3",
    explicacion: "- <ul>: Define una lista desordenada.\n- <li>: Define un ítem de lista."
  },
  {
    id: 6,
    titulo: "Listas Ordenadas",
    descripcion: "El elemento <ol> define una lista ordenada, y <li> define los elementos de la lista",
    codigo: `<ol>
    <li>Primer elemento</li>
    <li>Segundo elemento</li>
    <li>Tercer elemento</li>
</ol>`,
    resultado: "1. Primer elemento\n2. Segundo elemento\n3. Tercer elemento",
    explicacion: "- <ol>: Define una lista ordenada.\n- <li>: Define un ítem de lista."
  },
  {
    id: 7,
    titulo: "Imágenes",
    descripcion: "El elemento <img> se usa para agregar imágenes",
    codigo: `<img src="imagen.jpg" alt="Descripción de la imagen">`,
    resultado: "Imagen mostrada (si existe el archivo imagen.jpg)",
    explicacion: "- <img>: Define una imagen.\n- src: Atributo que especifica la ubicación de la imagen.\n- alt: Atributo para proporcionar una descripción alternativa de la imagen."
  },
  {
    id: 8,
    titulo: "Tablas",
    descripcion: "HTML permite crear tablas con el elemento <table>, y se definen filas con <tr>, celdas con <td>, y encabezados con <th>",
    codigo: `<table>
    <tr>
        <th>Encabezado 1</th>
        <th>Encabezado 2</th>
    </tr>
    <tr>
        <td>Celda 1</td>
        <td>Celda 2</td>
    </tr>
</table>`,
    resultado: 
    "Encabezado 1   | Encabezado 2\nCelda 1        | Celda 2",
    explicacion: "- <table>: Define una tabla.\n- <tr>: Define una fila de la tabla.\n- <th>: Define una celda de encabezado.\n- <td>: Define una celda de datos."
  },
  {
    id: 9,
    titulo: "Formularios",
    descripcion: "El elemento <form> permite crear formularios para recibir información del usuario",
    codigo: `<form action="/enviar" method="post">
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre">
    <button type="submit">Enviar</button>
</form>`,
    resultado: "Formulario con campo para ingresar un nombre y botón para enviar",
    explicacion: "- <form>: Define un formulario.\n- <input>: Define un campo de entrada.\n- <button>: Define un botón para enviar."
  },
  {
    id: 10,
    titulo: "Comentarios en HTML",
    descripcion: "Los comentarios se agregan con el elemento <!-- --> y no se muestran en la página",
    codigo: `<!-- Este es un comentario -->`,
    resultado: "No se muestra nada en la página",
    explicacion: "- <!-- -->: Define un comentario. No se muestra en la página."
  },
  {
    id: 11,
    titulo: "Etiquetas de Estilo Interno",
    descripcion: "El elemento <style> se usa para agregar estilos dentro de la página",
    codigo: `<style>
    body {
        background-color: lightblue;
        color: darkblue;
    }
</style>`,
    resultado: "Fondo azul claro con texto azul oscuro",
    explicacion: "- <style>: Define reglas CSS dentro del documento HTML."
  },
  {
    id: 12,
    titulo: "Divisiones de Contenido",
    descripcion: "El elemento <div> se usa para agrupar contenido, facilitando su estilo o manipulación",
    codigo: `<div>
    <h2>Sección 1</h2>
    <p>Contenido de la sección 1</p>
</div>`,
    resultado: "Sección 1 con su contenido",
    explicacion: "- <div>: Agrupa elementos y les permite aplicarles estilos o manipulación."
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
            <h1 className="text-5xl font-bold text-white">Aprendiendo lo principal del HTML</h1>
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
            onClick={() => setEjemploActual((prev) => Math.min(ejemplosHTML.length - 1, prev + 1))}
            disabled={ejemploActual === ejemplosHTML.length - 1}
            className={`px-6 py-2 rounded-lg font-semibold transition ${
              ejemploActual === ejemplosHTML.length - 1
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

const ejemplosHTMLIntermedio = [
    {
      id: 1,
      titulo: "Atributos globales",
      descripcion: "Los atributos como class, id, title, y style se usan en casi todas las etiquetas.",
      codigo: `<p id="intro" class="texto" style="color: blue;" title="Texto introductorio">
    Este es un párrafo con varios atributos.
  </p>`,
      resultado: "Texto azul con tooltip al pasar el mouse",
      explicacion: "- id: identificador único\n- class: para aplicar estilos\n- style: CSS en línea\n- title: muestra un mensaje al pasar el mouse"
    },
    {
      id: 2,
      titulo: "Enlaces",
      descripcion: "Los enlaces permiten navegar entre páginas.",
      codigo: `<a href="https://www.google.com" target="_blank">Ir a Google</a>`,
      resultado: "Texto con enlace que abre una nueva pestaña",
      explicacion: "- href: URL del destino\n- target=\"_blank\": abre en nueva pestaña"
    },
    {
      id: 3,
      titulo: "Listas ordenadas y no ordenadas",
      descripcion: "Organiza elementos en listas con o sin orden.",
      codigo: `<ul>
    <li>HTML</li>
    <li>CSS</li>
  </ul>
  
  <ol>
    <li>Instalar editor</li>
    <li>Escribir código</li>
  </ol>`,
      resultado: "Dos listas: una con viñetas y otra numerada",
      explicacion: "- ul: lista no ordenada\n- ol: lista ordenada\n- li: elemento de lista"
    },
    {
      id: 4,
      titulo: "Etiqueta semántica: section",
      descripcion: "section se usa para dividir el contenido por secciones temáticas.",
      codigo: `<section>
    <h2>Servicios</h2>
    <p>Ofrecemos desarrollo web y soporte técnico.</p>
  </section>`,
      resultado: "Sección con título y párrafo",
      explicacion: "- section: agrupa contenido relacionado"
    },
    {
      id: 5,
      titulo: "Tablas en HTML",
      descripcion: "Estructura datos en forma de tabla.",
      codigo: `<table border="1">
    <tr>
      <th>Nombre</th>
      <th>Edad</th>
    </tr>
    <tr>
      <td>Juan</td>
      <td>25</td>
    </tr>
  </table>`,
      resultado: "Tabla con encabezados y filas",
      explicacion: "- table: contenedor\n- tr: fila\n- th: encabezado\n- td: celda"
    },
    {
      id: 6,
      titulo: "Formulario básico",
      descripcion: "Los formularios recopilan datos del usuario.",
      codigo: `<form>
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre">
    <input type="submit" value="Enviar">
  </form>`,
      resultado: "Formulario con campo de texto y botón",
      explicacion: "- form: contenedor del formulario\n- label: etiqueta\n- input: campo de entrada"
    },
    {
      id: 7,
      titulo: "Insertar imágenes",
      descripcion: "Muestra imágenes desde una URL o archivo local.",
      codigo: `<img src="https://via.placeholder.com/150" alt="Imagen de ejemplo">`,
      resultado: "Imagen cargada en la página",
      explicacion: "- src: ruta de la imagen\n- alt: texto alternativo (accesibilidad)"
    },
    {
      id: 8,
      titulo: "Insertar video y audio",
      descripcion: "Se puede reproducir multimedia directamente en HTML.",
      codigo: `<video width="320" controls>
    <source src="video.mp4" type="video/mp4">
    Tu navegador no soporta video.
  </video>
  
  <audio controls>
    <source src="audio.mp3" type="audio/mpeg">
    Tu navegador no soporta audio.
  </audio>`,
      resultado: "Reproductor de video y audio en la página",
      explicacion: "- video/audio: contenedores multimedia\n- source: define el archivo\n- controls: muestra los controles"
    },
    {
      id: 9,
      titulo: "Etiqueta article",
      descripcion: "article representa contenido independiente como blogs o noticias.",
      codigo: `<article>
    <h2>Noticia</h2>
    <p>Hoy se lanzó una nueva versión de HTML.</p>
  </article>`,
      resultado: "Sección de noticia con encabezado",
      explicacion: "- article: contenido que tiene sentido por sí solo"
    },
    {
      id: 10,
      titulo: "Etiqueta nav",
      descripcion: "nav define una barra de navegación.",
      codigo: `<nav>
    <a href="#inicio">Inicio</a>
    <a href="#servicios">Servicios</a>
  </nav>`,
      resultado: "Enlaces de navegación",
      explicacion: "- nav: agrupa enlaces de navegación"
    },
    {
      id: 11,
      titulo: "Etiqueta aside",
      descripcion: "aside representa contenido relacionado pero no principal.",
      codigo: `<aside>
    <h3>Publicidad</h3>
    <p>Compra tu hosting aquí.</p>
  </aside>`,
      resultado: "Caja lateral con contenido",
      explicacion: "- aside: para contenido complementario como barras laterales"
    },
    {
      id: 12,
      titulo: "Etiqueta figure y figcaption",
      descripcion: "figure permite agrupar imágenes con un título.",
      codigo: `<figure>
    <img src="foto.jpg" alt="Mi Foto">
    <figcaption>Una foto mía en la playa</figcaption>
  </figure>`,
      resultado: "Imagen con texto explicativo debajo",
      explicacion: "- figure: agrupa imagen y pie\n- figcaption: texto descriptivo"
    }
  ];
  
  export const AprendiendoHtmlIntermedio = () => {
    const [ejemploActual, setEjemploActual] = useState(0);
    const ejemplo = ejemplosHTMLIntermedio[ejemploActual];
  
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
              <h1 className="text-5xl font-bold text-white">HTML Intermedio</h1>
            </div>
            <p className="text-gray-300 text-xl">Dominando conceptos avanzados de HTML</p>
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
                <h2 className="text-2xl font-semibold text-white">{ejemplo.titulo}</h2>
              </div>
              <p className="text-gray-300 mb-4">{ejemplo.descripcion}</p>
              <pre className="bg-gray-900/80 p-6 rounded-lg overflow-x-auto text-sm font-mono border border-purple-500/20">
                <code className="text-green-400 whitespace-pre">{ejemplo.codigo}</code>
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
                <div className="bg-white rounded-lg p-6 text-black">
                  <div dangerouslySetInnerHTML={{ __html: ejemplo.codigo }} />
                </div>
              </div>
  
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30">
                <h3 className="text-xl font-semibold text-white mb-4">Explicación</h3>
                <p className="text-gray-300 whitespace-pre-line">{ejemplo.explicacion}</p>
              </div>
            </motion.div>
          </div>
  
          {/* Navegación Mejorada */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center items-center space-x-6"
          >
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(147, 51, 234, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setEjemploActual((prev) => Math.max(0, prev - 1))}
              disabled={ejemploActual === 0}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl backdrop-blur-sm transition-all
                ${ejemploActual === 0
                  ? 'bg-gray-800/30 text-gray-500 cursor-not-allowed border border-gray-700/30'
                  : 'bg-purple-600/50 text-white border border-purple-500/50 hover:bg-purple-500/60'}
              `}
            >
              <FaArrowLeft className="text-lg" />
              <span>Anterior</span>
            </motion.button>
  
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(147, 51, 234, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setEjemploActual((prev) => Math.min(ejemplosHTMLIntermedio.length - 1, prev + 1))}
              disabled={ejemploActual === ejemplosHTMLIntermedio.length - 1}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl backdrop-blur-sm transition-all
                ${ejemploActual === ejemplosHTMLIntermedio.length - 1
                  ? 'bg-gray-800/30 text-gray-500 cursor-not-allowed border border-gray-700/30'
                  : 'bg-purple-600/50 text-white border border-purple-500/50 hover:bg-purple-500/60'}
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