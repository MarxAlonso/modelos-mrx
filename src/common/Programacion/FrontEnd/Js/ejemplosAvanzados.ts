export const ejemplosAvanzados = [
    {
      id: 1,
      titulo: "Funciones Avanzadas y Arrow Functions",
      descripcion: "Explora las diferentes formas de escribir funciones en JavaScript moderno.",
      codigo: `// Función tradicional
  function sumar(a, b) {
    return a + b;
  }
  
  // Arrow function
  const multiplicar = (a, b) => a * b;
  
  // Función con parámetros por defecto
  const saludar = (nombre = "Usuario") => {
    return \`¡Hola \${nombre}!\`;
  };
  
  // Función de orden superior
  const operarNumeros = (a, b, operacion) => {
    return operacion(a, b);
  };
  
  // Probando las funciones
  console.log(sumar(5, 3));
  console.log(multiplicar(4, 2));
  console.log(saludar());
  console.log(saludar("María"));
  console.log(operarNumeros(5, 3, sumar));`,
      resultado: `8
  8
  ¡Hola Usuario!
  ¡Hola María!
  8`,
      explicacion: "Las funciones modernas en JavaScript ofrecen diferentes sintaxis y características."
    },
    {
      id: 2,
      titulo: "Manipulación Avanzada de Arrays",
      descripcion: "Aprende a usar métodos modernos de arrays como map, filter, reduce y destructuring.",
      codigo: `const numeros = [1, 2, 3, 4, 5, 6];
  
  // Map: Duplicar números
  const duplicados = numeros.map(n => n * 2);
  console.log('Números duplicados:', duplicados);
  
  // Filter: Obtener números pares
  const pares = numeros.filter(n => n % 2 === 0);
  console.log('Números pares:', pares);
  
  // Reduce: Sumar todos los números
  const suma = numeros.reduce((acc, curr) => acc + curr, 0);
  console.log('Suma total:', suma);
  
  // Destructuring en arrays
  const [primero, segundo, ...resto] = numeros;
  console.log('Destructuring:', { primero, segundo, resto });`,
      resultado: `Números duplicados: [2, 4, 6, 8, 10, 12]
  Números pares: [2, 4, 6]
  Suma total: 21
  Destructuring: { primero: 1, segundo: 2, resto: [3, 4, 5, 6] }`,
      explicacion: "Métodos modernos de arrays para transformación y manipulación de datos."
    },
    {
      id: 3,
      titulo: "Programación Asíncrona con Promesas y Async/Await",
      descripcion: "Manejo de operaciones asíncronas usando promesas y async/await.",
      codigo: `// Simulación de una API
  const obtenerDatos = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ id: 1, nombre: "Producto" });
      }, 1000);
    });
  };
  
  // Usando Promise
  obtenerDatos()
    .then(datos => {
      console.log('Datos con Promise:', datos);
    });
  
  // Usando Async/Await
  async function obtenerDatosAsync() {
    const datos = await obtenerDatos();
    console.log('Datos con Async/Await:', datos);
  }
  
  obtenerDatosAsync();
  
  console.log('Este mensaje aparece primero');`,
      resultado: `Este mensaje aparece primero
  Datos con Promise: { id: 1, nombre: "Producto" }
  Datos con Async/Await: { id: 1, nombre: "Producto" }`,
      explicacion: "Manejo de operaciones asíncronas con diferentes patrones modernos."
    },
    {
      id: 4,
      titulo: "Objetos y Clases Modernas",
      descripcion: "Trabajo con clases, herencia y métodos de objetos en ES6+.",
      codigo: `// Definición de clase base
  class Animal {
    constructor(nombre) {
      this.nombre = nombre;
    }
    
    saludar() {
      return \`Hola, soy \${this.nombre}\`;
    }
  }
  
  // Herencia
  class Perro extends Animal {
    ladrar() {
      return \`\${this.nombre} dice: ¡Guau!\`;
    }
  }
  
  // Object spread y rest
  const perro = new Perro('Max');
  const info = {
    edad: 3,
    raza: 'Labrador'
  };
  
  const perroCompleto = { ...info, nombre: perro.nombre };
  
  console.log(perro.saludar());
  console.log(perro.ladrar());
  console.log('Info completa:', perroCompleto);`,
      resultado: `Hola, soy Max
  Max dice: ¡Guau!
  Info completa: { edad: 3, raza: 'Labrador', nombre: 'Max' }`,
      explicacion: "Uso de características modernas de POO en JavaScript."
    }
  ];