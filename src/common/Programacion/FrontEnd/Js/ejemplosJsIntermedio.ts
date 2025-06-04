export const ejemplosJSIntermedio = [
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
  };`,
      resultado: `// Resultados:
  sumar(5, 3)               // 8
  multiplicar(4, 2)         // 8
  saludar()                 // "¡Hola Usuario!"
  saludar("María")          // "¡Hola María!"
  operarNumeros(5, 3, sumar) // 8`,
      explicacion: "Las funciones modernas en JavaScript ofrecen diferentes sintaxis y características:\n\n- Arrow Functions: Sintaxis más concisa y manejo especial del this\n- Parámetros por defecto: Permiten valores predeterminados\n- Funciones de orden superior: Pueden recibir otras funciones como argumentos\n- Template literals: Permiten interpolación de strings con \`\${variable}\`"
    },
    {
      id: 2,
      titulo: "Manipulación Avanzada de Arrays",
      descripcion: "Aprende métodos modernos para trabajar con arrays en JavaScript.",
      codigo: `const numeros = [1, 2, 3, 4, 5];
  
  // map: transformar elementos
  const duplicados = numeros.map(n => n * 2);
  
  // filter: filtrar elementos
  const pares = numeros.filter(n => n % 2 === 0);
  
  // reduce: acumular valores
  const suma = numeros.reduce((acc, n) => acc + n, 0);
  
  // find: encontrar un elemento
  const mayor3 = numeros.find(n => n > 3);
  
  // some: verificar si alguno cumple
  const hayMayor4 = numeros.some(n => n > 4);`,
      resultado: `// Resultados:
  duplicados  // [2, 4, 6, 8, 10]
  pares       // [2, 4]
  suma        // 15
  mayor3      // 4
  hayMayor4   // true`,
      explicacion: "Los métodos modernos de arrays son fundamentales para la programación funcional:\n\n- map(): Transforma cada elemento del array\n- filter(): Crea un nuevo array con elementos que cumplen una condición\n- reduce(): Combina todos los elementos en un único valor\n- find(): Encuentra el primer elemento que cumple una condición\n- some(): Verifica si al menos un elemento cumple una condición"
    },
    {
      id: 3,
      titulo: "Destructuring y Spread Operator",
      descripcion: "Técnicas modernas para trabajar con objetos y arrays.",
      codigo: `// Destructuring de objetos
  const persona = {
    nombre: 'Ana',
    edad: 28,
    ciudad: 'Madrid'
  };
  const { nombre, edad } = persona;
  
  // Destructuring de arrays
  const colores = ['rojo', 'verde', 'azul'];
  const [primario, secundario] = colores;
  
  // Spread operator con arrays
  const numeros1 = [1, 2, 3];
  const numeros2 = [4, 5, 6];
  const todosNumeros = [...numeros1, ...numeros2];
  
  // Spread con objetos
  const datosBase = { id: 1, nombre: 'Producto' };
  const producto = {
    ...datosBase,
    precio: 100
  };`,
      resultado: `// Resultados:
  nombre     // "Ana"
  edad       // 28
  
  primario   // "rojo"
  secundario // "verde"
  
  todosNumeros // [1, 2, 3, 4, 5, 6]
  
  producto // { id: 1, nombre: "Producto", precio: 100 }`,
      explicacion: "Destructuring y Spread son características poderosas de ES6+:\n\n- Destructuring: Extrae valores de objetos y arrays de forma sencilla\n- Spread operator (...): \n  * En arrays: Combina o copia arrays\n  * En objetos: Copia o fusiona propiedades\n  * Útil para crear copias sin referencia\n  * Simplifica la manipulación de datos"
    },
    {
      id: 4,
      titulo: "Promesas y Async/Await",
      descripcion: "Manejo de operaciones asíncronas en JavaScript moderno.",
      codigo: `// Crear una promesa
  const obtenerDatos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const exito = true;
        if (exito) {
          resolve({ id: 1, data: 'Información' });
        } else {
          reject('Error al obtener datos');
        }
      }, 1000);
    });
  };
  
  // Usar promesas con .then()
  obtenerDatos()
    .then(resultado => console.log(resultado))
    .catch(error => console.error(error));
  
  // Usar async/await
  async function procesarDatos() {
    try {
      const datos = await obtenerDatos();
      console.log(datos);
    } catch (error) {
      console.error(error);
    }
  }`,
      resultado: `// Resultado después de 1 segundo:
  { id: 1, data: 'Información' }
  
  // Si hay error:
  "Error al obtener datos"`,
      explicacion: "Las Promesas y Async/Await son fundamentales para manejar operaciones asíncronas:\n\n- Promesas: Representan un valor que puede estar disponible ahora, en el futuro, o nunca\n- .then(): Maneja el resultado exitoso\n- .catch(): Maneja los errores\n- async/await: Sintaxis más limpia para trabajar con promesas\n- try/catch: Manejo de errores con async/await"
    }
  ];