export const ejemplosJavaAvanzado = [
    {
      id: 1,
      titulo: "Uso de HashMap",
      descripcion: "Creación y manipulación de un HashMap para almacenar pares clave-valor.",
      codigo: `import java.util.HashMap;
  
  public class MapaEjemplo {
      public static void main(String[] args) {
          HashMap<String, Integer> edades = new HashMap<>();
  
          edades.put("Ana", 28);
          edades.put("Luis", 35);
          edades.put("Carlos", 40);
  
          System.out.println("Edad de Luis: " + edades.get("Luis"));
  
          if (edades.containsKey("Ana")) {
              System.out.println("Ana está en el mapa con edad: " + edades.get("Ana"));
          }
  
          edades.remove("Carlos");
          System.out.println("Contenido del mapa: " + edades);
      }
  }`,
      resultado: `Edad de Luis: 35\nAna está en el mapa con edad: 28\nContenido del mapa: {Ana=28, Luis=35}`,
      explicacion: `- **import java.util.HashMap**: Importa la clase HashMap desde la librería estándar de Java.
  - **HashMap<String, Integer> edades**: Crea un mapa donde la clave es una cadena (nombre) y el valor un entero (edad).
  - **put("Ana", 28)**: Inserta el par clave-valor en el mapa.
  - **get("Luis")**: Recupera el valor asociado a la clave "Luis".
  - **containsKey("Ana")**: Verifica si la clave "Ana" existe en el mapa.
  - **remove("Carlos")**: Elimina la entrada con clave "Carlos" del mapa.
  - **System.out.println(edades)**: Imprime todo el contenido del mapa.
  
  💡 **¿Qué es un HashMap?**  
  Es una estructura de datos que permite almacenar datos como pares **clave → valor**, con acceso rápido. Internamente usa una tabla hash para optimizar búsquedas, inserciones y eliminaciones. Ideal para representar catálogos, diccionarios o registros asociados.`
    },
    {
        id: 2,
        titulo: "Lectura de datos con Scanner",
        descripcion: "Usar Scanner para capturar texto y números desde el teclado.",
        codigo: `import java.util.Scanner;
    
    public class EntradaUsuario {
        public static void main(String[] args) {
            Scanner scanner = new Scanner(System.in);
    
            System.out.print("¿Cuál es tu nombre? ");
            String nombre = scanner.nextLine();
    
            System.out.print("¿Cuál es tu edad? ");
            int edad = scanner.nextInt();
    
            System.out.println("Hola " + nombre + ", tienes " + edad + " años.");
    
            scanner.close();
        }
    }`,
        resultado: `¿Cuál es tu nombre? Luis\n¿Cuál es tu edad? 25\nHola Luis, tienes 25 años.`,
        explicacion: `- **import java.util.Scanner**: Importa la clase Scanner de la biblioteca estándar para lectura desde entrada estándar.
    - **Scanner scanner = new Scanner(System.in)**: Crea un objeto Scanner que lee desde el teclado (System.in).
    - **scanner.nextLine()**: Lee una línea completa de texto (útil para strings con espacios).
    - **scanner.nextInt()**: Lee un número entero ingresado por el usuario.
    - **System.out.println(...)**: Muestra un mensaje en consola combinando los datos ingresados.
    - **scanner.close()**: Cierra el scanner (buena práctica para liberar recursos).
    
    💡 **¿Qué es Scanner?**  
    Es una clase de utilidad en Java para **leer datos desde diferentes fuentes**, como teclado, archivos o cadenas. Se utiliza comúnmente para construir aplicaciones interactivas donde el usuario ingresa información.
    
    👉 Puedes usar otros métodos como:
    - next() para palabras individuales,
    - nextDouble() para decimales,
    - hasNextInt() para validar entrada numérica.`
      },
      {
        id: 3,
        titulo: "Combinar Scanner con List y Map",
        descripcion: "Usar Scanner para capturar datos del usuario y almacenarlos en estructuras dinámicas.",
        codigo: `import java.util.*;
    
    public class RegistroNotas {
        public static void main(String[] args) {
            Scanner scanner = new Scanner(System.in);
            Map<String, List<Integer>> notasEstudiantes = new HashMap<>();
    
            System.out.print("¿Cuántos estudiantes deseas registrar? ");
            int cantidad = scanner.nextInt();
            scanner.nextLine(); // limpiar el buffer
    
            for (int i = 0; i < cantidad; i++) {
                System.out.print("Nombre del estudiante " + (i + 1) + ": ");
                String nombre = scanner.nextLine();
    
                List<Integer> notas = new ArrayList<>();
                for (int j = 0; j < 3; j++) {
                    System.out.print("Nota " + (j + 1) + " para " + nombre + ": ");
                    notas.add(scanner.nextInt());
                }
                scanner.nextLine(); // limpiar el buffer
    
                notasEstudiantes.put(nombre, notas);
            }
    
            System.out.println("\nResumen de notas:");
            for (Map.Entry<String, List<Integer>> entry : notasEstudiantes.entrySet()) {
                System.out.println(entry.getKey() + ": " + entry.getValue());
            }
    
            scanner.close();
        }
    }`,
        resultado: `¿Cuántos estudiantes deseas registrar? 2
    Nombre del estudiante 1: Ana
    Nota 1 para Ana: 18
    Nota 2 para Ana: 17
    Nota 3 para Ana: 20
    Nombre del estudiante 2: Juan
    Nota 1 para Juan: 15
    Nota 2 para Juan: 14
    Nota 3 para Juan: 19
    
    Resumen de notas:
    Ana: [18, 17, 20]
    Juan: [15, 14, 19]`,
        explicacion: `- **Scanner scanner = new Scanner(System.in)**: Se crea un lector para capturar datos desde el teclado.
    - **Map<String, List<Integer>> notasEstudiantes**: Mapa que asocia el nombre del estudiante con una lista de sus 3 notas.
    - **scanner.nextLine()**: Se usa para capturar texto completo. También se utiliza para limpiar el buffer después de nextInt().
    - **new ArrayList<>()**: Se crea una lista dinámica para almacenar las notas de cada estudiante.
    - **notasEstudiantes.put(nombre, notas)**: Asocia el nombre del estudiante con su lista de notas.
    - **Map.Entry<String, List<Integer>>**: Permite recorrer el mapa y mostrar nombre y notas.
    
    💡 **¿Por qué combinar Scanner con estructuras como List y Map?**  
    Porque permite construir aplicaciones más reales y dinámicas, como sistemas de registro, encuestas, y bases de datos temporales. Esta combinación facilita el almacenamiento estructurado de múltiples datos ingresados por el usuario.`
      },
      {
        id: 4,
        titulo: "Ordenamiento y Búsqueda en Colecciones",
        descripcion: "Uso de ArrayList para ordenar y buscar elementos.",
        codigo: `import java.util.*;
      
      public class OrdenarBuscar {
          public static void main(String[] args) {
              List<String> frutas = new ArrayList<>();
              frutas.add("Mango");
              frutas.add("Fresa");
              frutas.add("Manzana");
              frutas.add("Plátano");
              frutas.add("Kiwi");
      
              System.out.println("Lista original:");
              System.out.println(frutas);
      
              // Ordenar la lista alfabéticamente
              Collections.sort(frutas);
              System.out.println("Lista ordenada:");
              System.out.println(frutas);
      
              // Buscar un elemento en la lista
              String buscar = "Fresa";
              int indice = Collections.binarySearch(frutas, buscar);
              if (indice >= 0) {
                  System.out.println(buscar + " encontrada en la posición " + indice);
              } else {
                  System.out.println(buscar + " no se encontró.");
              }
          }
      }`,
        resultado: `Lista original:
      [Mango, Fresa, Manzana, Plátano, Kiwi]
      Lista ordenada:
      [Fresa, Kiwi, Mango, Manzana, Plátano]
      Fresa encontrada en la posición 0`,
        explicacion: `- **ArrayList<String> frutas**: Se crea una lista dinámica de cadenas.
      - **frutas.add(...)**: Agrega elementos a la lista.
      - **Collections.sort(frutas)**: Ordena la lista alfabéticamente. Requiere que los elementos sean comparables.
      - **Collections.binarySearch(frutas, buscar)**: Busca un elemento en una lista ordenada utilizando búsqueda binaria.
      - **binarySearch(...) devuelve el índice** del elemento encontrado o un valor negativo si no existe.
      
      🔍 **¿Por qué usar Collections.sort y binarySearch?**
      Estas utilidades son parte de la biblioteca estándar de Java para simplificar el manejo de listas:
      - sort(...) funciona en cualquier List con elementos que implementen Comparable (como String, Integer, etc.).
      - binarySearch(...) permite búsquedas rápidas (O(log n)), pero **requiere** que la lista esté previamente ordenada.
      
      📘 **Extras:**
      - Puedes ordenar listas de objetos personalizados usando Comparator.
      - También puedes aplicar filtros y operaciones más complejas con Streams.
      
      ✅ Este ejemplo muestra cómo combinar estructuras de datos dinámicas con algoritmos clásicos de ordenación y búsqueda en Java.`
      }
      
  ];
  