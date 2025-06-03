export const ejemplosCSSIntermedio = [
    {
      id: 1,
      titulo: "Grid Layout",
      descripcion: "CSS Grid es un sistema de diseño bidimensional poderoso para crear layouts complejos",
      codigo: `.grid-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: auto;
      gap: 20px;
      padding: 20px;
  }
  
  .grid-item {
      background-color: #3498db;
      color: white;
      padding: 20px;
      border-radius: 8px;
  }
  
  .item-destacado {
      grid-column: span 2;
      background-color: #e74c3c;
  }`,
      html: `<div class="grid-container">
      <div class="grid-item">Item 1</div>
      <div class="grid-item item-destacado">Item Destacado</div>
      <div class="grid-item">Item 3</div>
      <div class="grid-item">Item 4</div>
  </div>`,
      explicacion: "- display: grid: Activa el layout grid\n- grid-template-columns: Define columnas con fracciones iguales\n- gap: Espacio entre elementos\n- grid-column: span 2: Hace que un elemento ocupe dos columnas"
    },
    {
      id: 2,
      titulo: "Transformaciones y Transiciones",
      descripcion: "Efectos visuales avanzados con transformaciones y transiciones CSS",
      codigo: `.card {
      width: 200px;
      padding: 20px;
      background: #fff;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .card:hover {
      transform: translateY(-10px) rotate(2deg);
      box-shadow: 0 8px 16px rgba(0,0,0,0.2);
  }`,
      html: `<div class="card">
      <h3>Tarjeta Interactiva</h3>
      <p>Pasa el mouse por encima</p>
  </div>`,
      explicacion: "- transition: Define la duración y tipo de transición\n- transform: Combina traslación y rotación\n- box-shadow: Sombra con efecto de elevación\n- :hover: Estado al pasar el mouse"
    },
    {
      id: 3,
      titulo: "Animaciones Personalizadas",
      descripcion: "Creación de animaciones CSS con @keyframes",
      codigo: `@keyframes pulso {
      0% {
          transform: scale(1);
          opacity: 1;
      }
      50% {
          transform: scale(1.2);
          opacity: 0.8;
      }
      100% {
          transform: scale(1);
          opacity: 1;
      }
  }
  
  .boton-animado {
      padding: 15px 30px;
      background: linear-gradient(45deg, #ff6b6b, #ff8e53);
      border: none;
      border-radius: 25px;
      color: white;
      animation: pulso 2s infinite;
  }`,
      html: `<button class="boton-animado">
      Click Me!
  </button>`,
      explicacion: "- @keyframes: Define los pasos de la animación\n- animation: Aplica la animación con duración e iteraciones\n- transform: scale(): Cambia el tamaño del elemento\n- linear-gradient: Crea un degradado de colores"
    },
    {
      id: 4,
      titulo: "Media Queries y Diseño Responsivo",
      descripcion: "Adaptación del diseño a diferentes tamaños de pantalla",
      codigo: `.contenedor {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
  }
  
  @media (max-width: 768px) {
      .contenedor {
          padding: 10px;
      }
      .menu {
          flex-direction: column;
      }
  }
  
  @media (max-width: 480px) {
      .titulo {
          font-size: 24px;
      }
      .grid {
          grid-template-columns: 1fr;
      }
  }`,
      html: `<div class="contenedor">
      <h1 class="titulo">Título Responsivo</h1>
      <nav class="menu">...</nav>
      <div class="grid">...</div>
  </div>`,
      explicacion: "- @media: Define reglas para diferentes tamaños de pantalla\n- max-width: Punto de quiebre para tablets (768px)\n- flex-direction: column: Apila elementos en móviles\n- grid-template-columns: 1fr: Una sola columna en móviles"
    },
    {
      id: 5,
      titulo: "Variables CSS (Custom Properties)",
      descripcion: "Uso de variables CSS para mantener estilos consistentes y fáciles de modificar",
      codigo: `:root {
      --color-primario: #2ecc71;
      --color-secundario: #3498db;
      --espaciado-base: 20px;
      --fuente-principal: 'Arial', sans-serif;
  }
  
  .boton {
      background-color: var(--color-primario);
      padding: var(--espaciado-base);
      font-family: var(--fuente-principal);
      border: none;
      border-radius: 8px;
  }
  
  .boton:hover {
      background-color: var(--color-secundario);
  }`,
      html: `<button class="boton">
      Botón con Variables CSS
  </button>`,
      explicacion: "- :root: Define variables globales\n- --nombre-variable: Define una variable CSS\n- var(): Usa el valor de una variable\n- Las variables facilitan cambios globales de estilo"
    }
  ];