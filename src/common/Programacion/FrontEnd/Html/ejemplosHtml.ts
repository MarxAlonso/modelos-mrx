export const ejemplosHTML = [
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
  