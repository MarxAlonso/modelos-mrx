export const ejemplosJava = [
    {
      id: 1,
      titulo: "Hola Mundo en Java",
      descripcion: "Primer programa básico que imprime un mensaje.",
      codigo: `public class HolaMundo {
      public static void main(String[] args) {
          System.out.println("¡Hola, Mundo!");
      }
  }`,
      resultado: "¡Hola, Mundo!",
      explicacion: `- public class HolaMundo: Define una clase pública llamada HolaMundo
  - public static void main(String[] args): Punto de entrada principal del programa
  - System.out.println(...): Imprime texto en consola`
    },
    {
      id: 2,
      titulo: "Variables en Java",
      descripcion: "Declaración y uso de variables básicas.",
      codigo: `public class Variables {
      public static void main(String[] args) {
          int edad = 25;
          String nombre = "María";
          System.out.println(nombre + " tiene " + edad + " años.");
      }
  }`,
      resultado: "María tiene 25 años.",
      explicacion: `- int edad = 25: Declara una variable entera
  - String nombre = "María": Declara una variable tipo texto
  - System.out.println(...): Muestra el texto concatenado en consola`
    },
    {
      id: 3,
      titulo: "Condicional if",
      descripcion: "Estructura condicional simple.",
      codigo: `public class Condicional {
      public static void main(String[] args) {
          int numero = 10;
          if (numero > 0) {
              System.out.println("El número es positivo");
          }
      }
  }`,
      resultado: "El número es positivo",
      explicacion: `- if (numero > 0): Evalúa si el número es mayor que 0
  - System.out.println(...): Se ejecuta si la condición es verdadera`
    },
    {
      id: 4,
      titulo: "Ciclo for",
      descripcion: "Repetir instrucciones usando un bucle for.",
      codigo: `public class Bucle {
      public static void main(String[] args) {
          for (int i = 1; i <= 3; i++) {
              System.out.println("Iteración " + i);
          }
      }
  }`,
      resultado: `Iteración 1
  Iteración 2
  Iteración 3`,
      explicacion: `- for (int i = 1; i <= 3; i++): Bucle que repite 3 veces
  - System.out.println(...): Muestra la iteración actual`
    },
    {
      id: 5,
      titulo: "Método con parámetros",
      descripcion: "Uso de métodos en Java con argumentos.",
      codigo: `public class Saludo {
      public static void main(String[] args) {
          saludar("Luis");
      }
  
      public static void saludar(String nombre) {
          System.out.println("Hola, " + nombre);
      }
  }`,
      resultado: "Hola, Luis",
      explicacion: `- saludar("Luis"): Llama al método y le pasa el argumento
  - public static void saludar(...): Define un método que recibe un parámetro
  - System.out.println(...): Muestra el saludo personalizado`
    },
    {
        id: 6,
        titulo: "Condicional if-else",
        descripcion: "Uso de estructuras condicionales para tomar decisiones.",
        codigo: `public class Comparacion {
          public static void main(String[] args) {
              int numero = 10;
              if (numero > 5) {
                  System.out.println("El número es mayor que 5");
              } else {
                  System.out.println("El número es menor o igual que 5");
              }
          }
      }`,
        resultado: "El número es mayor que 5",
        explicacion: `- int numero = 10: Define una variable entera
      - if (numero > 5): Evalúa si el número es mayor a 5
      - System.out.println(...): Imprime el mensaje según la condición`
      },
      {
        id: 7,
        titulo: "Bucle for",
        descripcion: "Repetir instrucciones usando un bucle for.",
        codigo: `public class Conteo {
          public static void main(String[] args) {
              for (int i = 1; i <= 5; i++) {
                  System.out.println("Número: " + i);
              }
          }
      }`,
        resultado: "Número: 1\nNúmero: 2\nNúmero: 3\nNúmero: 4\nNúmero: 5",
        explicacion: `- for (...): Estructura de repetición que va de 1 a 5
      - i++: Incrementa el valor de i en cada iteración
      - System.out.println(...): Imprime el valor actual de i`
      },
      {
        id: 8,
        titulo: "Arreglos en Java",
        descripcion: "Uso básico de arreglos para almacenar múltiples valores.",
        codigo: `public class Arreglo {
          public static void main(String[] args) {
              String[] nombres = {"Ana", "Luis", "Pedro"};
              System.out.println(nombres[1]);
          }
      }`,
        resultado: "Luis",
        explicacion: `- String[] nombres: Declara un arreglo de cadenas
      - {"Ana", "Luis", "Pedro"}: Elementos del arreglo
      - nombres[1]: Accede al segundo elemento (posición 1)`
      },
      {
        id: 9,
        titulo: "Switch Case",
        descripcion: "Control de flujo con múltiples casos.",
        codigo: `public class Dias {
          public static void main(String[] args) {
              int dia = 3;
              switch (dia) {
                  case 1: System.out.println("Lunes"); break;
                  case 2: System.out.println("Martes"); break;
                  case 3: System.out.println("Miércoles"); break;
                  default: System.out.println("Otro día");
              }
          }
      }`,
        resultado: "Miércoles",
        explicacion: `- switch (dia): Evalúa el valor de la variable
      - case 3: Coincide y ejecuta "Miércoles"
      - break: Finaliza el bloque para evitar ejecutar otros casos`
      },
      {
        id: 10,
        titulo: "Entrada con Scanner",
        descripcion: "Leer datos desde consola usando Scanner.",
        codigo: `import java.util.Scanner;
      public class Entrada {
          public static void main(String[] args) {
              Scanner sc = new Scanner(System.in);
              System.out.print("Escribe tu nombre: ");
              String nombre = sc.nextLine();
              System.out.println("Hola, " + nombre);
          }
      }`,
        resultado: "Hola, Juan (si el usuario escribe Juan)",
        explicacion: `- import java.util.Scanner: Importa la clase para leer entradas
      - Scanner sc = new Scanner(...): Crea el lector
      - nextLine(): Lee una línea completa del usuario
      - System.out.println(...): Muestra el saludo con el nombre`
      }      
  ];
  