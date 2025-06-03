export const ejemplosJS = [
    {
      id: 1,
      titulo: "Variables y Tipos de Datos",
      descripcion: "Aprende a declarar variables y los tipos de datos básicos en JavaScript.",
      codigo: `// Declaración de variables
  let nombre = "Juan";
  const edad = 25;
  var esEstudiante = true;
  
  // Tipos de datos
  let numero = 42;           // Number
  let texto = "Hola";        // String
  let booleano = false;      // Boolean
  let arreglo = [1, 2, 3];   // Array
  let objeto = {             // Object
    nombre: "Juan",
    edad: 25
  };`,
      resultado: `// Resultado en consola:
  nombre = "Juan"
  edad = 25
  esEstudiante = true
  
  numero = 42
  texto = "Hola"
  booleano = false
  arreglo = [1, 2, 3]
  objeto = { nombre: "Juan", edad: 25 }`,
      explicacion: "En JavaScript, podemos declarar variables usando let, const, o var. Cada tipo de declaración tiene sus propias reglas:\n\n- let: Para variables que pueden cambiar\n- const: Para valores constantes que no cambiarán\n- var: Forma tradicional (menos usada actualmente)\n\nJavaScript tiene varios tipos de datos fundamentales como números, textos (strings), booleanos, arreglos y objetos."
    },
    {
      id: 2,
      titulo: "Operadores y Expresiones",
      descripcion: "Conoce los operadores básicos para realizar operaciones en JavaScript.",
      codigo: `// Operadores aritméticos
  let suma = 5 + 3;        // 8
  let resta = 10 - 4;      // 6
  let multiplicacion = 3 * 4; // 12
  let division = 15 / 3;    // 5
  
  // Operadores de comparación
  let mayorQue = 5 > 3;     // true
  let menorQue = 2 < 1;     // false
  let igualdad = 4 === "4"; // false
  let desigualdad = 4 !== "4"; // true`,
      resultado: `// Resultados:
  suma = 8
  resta = 6
  multiplicacion = 12
  division = 5
  
  mayorQue = true
  menorQue = false
  igualdad = false
  desigualdad = true`,
      explicacion: "Los operadores en JavaScript nos permiten realizar diferentes tipos de operaciones:\n\nOperadores Aritméticos:\n- + para suma\n- - para resta\n- * para multiplicación\n- / para división\n\nOperadores de Comparación:\n- > mayor que\n- < menor que\n- === igualdad estricta\n- !== desigualdad estricta"
    },
    {
      id: 3,
      titulo: "Estructuras de Control",
      descripcion: "Aprende a controlar el flujo de tu programa con condicionales y bucles.",
      codigo: `// Condicional if-else
  let edad = 18;
  if (edad >= 18) {
      console.log("Eres mayor de edad");
  } else {
      console.log("Eres menor de edad");
  }
  
  // Bucle for
  for (let i = 0; i < 3; i++) {
      console.log("Iteración: " + i);
  }
  
  // Bucle while
  let contador = 0;
  while (contador < 3) {
      console.log("Contador: " + contador);
      contador++;
  }`,
      resultado: `// Resultado:
  "Eres mayor de edad"
  
  "Iteración: 0"
  "Iteración: 1"
  "Iteración: 2"
  
  "Contador: 0"
  "Contador: 1"
  "Contador: 2"`,
      explicacion: "Las estructuras de control nos permiten tomar decisiones y repetir acciones en nuestro código:\n\nCondicionales (if-else):\n- Ejecutan código basado en condiciones\n- Permiten tomar decisiones en el programa\n\nBucles:\n- for: Para un número específico de iteraciones\n- while: Repite mientras una condición sea verdadera\n\nEstas estructuras son fundamentales para crear programas dinámicos y funcionales."
    }
  ];