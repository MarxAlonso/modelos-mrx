export const ejemplosCSS = [
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