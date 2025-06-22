export const ejemplosHTMLIntermedio = [
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