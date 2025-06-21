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
    }
  ];
  