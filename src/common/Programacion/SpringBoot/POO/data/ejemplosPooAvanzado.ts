export const ejemplosPooAvanzado = [
    {
      id: 1,
      titulo: "Clases abstractas y polimorfismo",
      descripcion: "Uso de una clase abstracta para modelar diferentes tipos de empleados.",
      codigo: `abstract class Empleado {
      protected String nombre;
  
      public Empleado(String nombre) {
          this.nombre = nombre;
      }
  
      // Método abstracto que cada subclase implementará
      public abstract double calcularSalario();
  }
  
  class EmpleadoTiempoCompleto extends Empleado {
      private double salarioMensual;
  
      public EmpleadoTiempoCompleto(String nombre, double salarioMensual) {
          super(nombre);
          this.salarioMensual = salarioMensual;
      }
  
      @Override
      public double calcularSalario() {
          return salarioMensual;
      }
  }
  
  class EmpleadoPorHoras extends Empleado {
      private int horasTrabajadas;
      private double pagoPorHora;
  
      public EmpleadoPorHoras(String nombre, int horas, double pagoHora) {
          super(nombre);
          this.horasTrabajadas = horas;
          this.pagoPorHora = pagoHora;
      }
  
      @Override
      public double calcularSalario() {
          return horasTrabajadas * pagoPorHora;
      }
  }
  
  public class Main {
      public static void main(String[] args) {
          Empleado e1 = new EmpleadoTiempoCompleto("Carlos", 3000);
          Empleado e2 = new EmpleadoPorHoras("Laura", 120, 15.5);
  
          System.out.println(e1.nombre + " gana: S/" + e1.calcularSalario());
          System.out.println(e2.nombre + " gana: S/" + e2.calcularSalario());
      }
  }`,
      resultado: `Carlos gana: S/3000.0
  Laura gana: S/1860.0`,
      explicacion: `🧠 **Explicación detallada**:
  
  🔸 \`abstract class Empleado\`: Es una clase base que **no se puede instanciar directamente**, ideal para representar conceptos generales. Declara un método abstracto que **obliga a sus subclases** a implementarlo.
  
  🔸 \`EmpleadoTiempoCompleto\` y \`EmpleadoPorHoras\`: Son subclases que heredan de \`Empleado\` y definen cómo se calcula el salario según el tipo de contrato.
  
  🔸 \`calcularSalario()\`: Es un método abstracto en la clase padre, y cada subclase lo **sobrescribe** (override) con su lógica.
  
  🔸 \`Empleado e1 = new EmpleadoTiempoCompleto(...)\`: Gracias al **polimorfismo**, se puede usar una referencia de tipo padre para apuntar a cualquier subclase.
  
  ✅ **Conceptos avanzados aplicados**:
  - Clases abstractas
  - Polimorfismo
  - Herencia
  - Encapsulamiento
  - Override de métodos
  
  🎯 Este tipo de estructura es ideal en aplicaciones empresariales donde se tienen jerarquías de entidades y se requiere reutilización de código.`
    },
    {
        id: 2,
        titulo: "Manejo de Archivos en Java",
        descripcion: "Lectura y escritura de archivos de texto usando clases de java.io.",
        codigo: `import java.io.*;
      
      public class ArchivoTexto {
          public static void main(String[] args) {
              String nombreArchivo = "saludo.txt";
      
              // Escritura en el archivo
              try (FileWriter fw = new FileWriter(nombreArchivo)) {
                  fw.write("Hola desde Java\\n");
                  fw.write("Este es un archivo de texto.");
                  System.out.println("✅ Archivo creado y escrito exitosamente.");
              } catch (IOException e) {
                  System.out.println("❌ Error al escribir el archivo: " + e.getMessage());
              }
      
              // Lectura del archivo
              try (BufferedReader br = new BufferedReader(new FileReader(nombreArchivo))) {
                  String linea;
                  System.out.println("📄 Contenido del archivo:");
                  while ((linea = br.readLine()) != null) {
                      System.out.println(linea);
                  }
              } catch (IOException e) {
                  System.out.println("❌ Error al leer el archivo: " + e.getMessage());
              }
          }
      }`,
        resultado: `✅ Archivo creado y escrito exitosamente.
      📄 Contenido del archivo:
      Hola desde Java
      Este es un archivo de texto.`,
        explicacion: `📘 **Explicación detallada**:
      
      🔹 \`FileWriter fw = new FileWriter(nombreArchivo)\`: Crea o sobrescribe un archivo llamado \`saludo.txt\`.
      
      🔹 \`fw.write(...)\`: Escribe líneas de texto en el archivo.
      
      🔹 \`BufferedReader br = new BufferedReader(new FileReader(nombreArchivo))\`: Abre el archivo para su lectura línea por línea.
      
      🔹 \`readLine()\`: Lee cada línea del archivo hasta que ya no hay más.
      
      🔹 \`try-with-resources\`: Asegura que el archivo se cierre correctamente después de usarse, evitando fugas de recursos.
      
      📌 **Conceptos aplicados**:
      - Clases del paquete \`java.io\`
      - Lectura y escritura de archivos
      - Excepciones con \`try-catch\`
      - Recursos automáticos con \`try-with-resources\`
      
      ✅ Este ejemplo es clave para aprender a guardar datos en disco o cargar configuraciones desde archivos externos.`
      },
      {
        id: 3,
        titulo: "Expresiones Lambda e Interfaces Funcionales",
        descripcion: "Uso de funciones lambda con interfaces funcionales para simplificar el código.",
        codigo: `@FunctionalInterface
      interface Operacion {
          int calcular(int a, int b);
      }
      
      public class LambdaEjemplo {
          public static void main(String[] args) {
              // Uso de expresión lambda para sumar
              Operacion suma = (a, b) -> a + b;
              System.out.println("Suma: " + suma.calcular(10, 5));
      
              // Otra expresión lambda para multiplicar
              Operacion multiplicar = (a, b) -> a * b;
              System.out.println("Multiplicación: " + multiplicar.calcular(10, 5));
          }
      }`,
        resultado: `Suma: 15
      Multiplicación: 50`,
        explicacion: `🔍 **Explicación detallada**:
      
      🧩 \`@FunctionalInterface\`: Esta anotación indica que la interfaz tiene un solo método abstracto y puede ser usada con expresiones lambda.
      
      🧠 \`Operacion\`: Es una interfaz funcional que define un método \`calcular(int a, int b)\`.
      
      ⚡ \`Operacion suma = (a, b) -> a + b;\`: Esta es una expresión lambda que implementa la interfaz sin usar una clase anónima o implementación explícita.
      
      🎯 Las lambdas permiten pasar lógica como parámetro, útil para programación funcional y métodos que reciben funciones como argumentos (como en streams).
      
      📌 **Conceptos clave aplicados**:
      - Interfaces funcionales
      - Expresiones lambda
      - Programación funcional en Java
      - Simplificación del código frente a clases anónimas
      
      ✅ Este ejemplo muestra cómo las lambdas hacen el código más limpio y expresivo al trabajar con funciones simples como operaciones matemáticas.`
      }
  ];
  