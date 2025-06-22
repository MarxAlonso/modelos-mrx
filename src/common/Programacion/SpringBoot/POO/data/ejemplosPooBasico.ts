export const ejemplosPooBasico = [
    {
      id: 1,
      titulo: "Clase con atributos y método",
      descripcion: "Definición de una clase simple con atributos y un método para mostrar datos.",
      codigo: `public class Persona {
      // Atributos de la clase
      String nombre;
      int edad;
  
      // Método que muestra la información de la persona
      public void mostrarInformacion() {
          System.out.println("Nombre: " + nombre);
          System.out.println("Edad: " + edad);
      }
  
      // Método principal
      public static void main(String[] args) {
          // Crear un objeto de la clase Persona
          Persona p = new Persona();
          // Asignar valores a los atributos
          p.nombre = "Carlos";
          p.edad = 25;
          // Llamar al método
          p.mostrarInformacion();
      }
  }`,
      resultado: `Nombre: Carlos
  Edad: 25`,
      explicacion: `🧠 **Explicación detallada**:
  
  - \`public class Persona\`: Se define una clase llamada \`Persona\`, que representa un modelo con atributos y comportamientos.
  - \`String nombre;\` y \`int edad;\`: Son atributos (o propiedades) que almacenan el estado de cada objeto.
  - \`public void mostrarInformacion()\`: Es un **método de instancia**, es decir, pertenece a cada objeto y muestra los valores almacenados en los atributos.
  - \`main(String[] args)\`: Es el punto de inicio del programa donde se crea y utiliza un objeto de la clase.
  - \`Persona p = new Persona();\`: Crea una instancia (objeto) de la clase \`Persona\`.
  - \`p.nombre = "Carlos";\` y \`p.edad = 25;\`: Se asignan valores a los atributos del objeto.
  - \`p.mostrarInformacion();\`: Llama al método definido en la clase para imprimir los datos.
  
  📌 **Conceptos clave de POO aplicados:**
  - **Clase**: Plantilla para crear objetos.
  - **Objeto**: Instancia concreta de una clase.
  - **Atributo**: Propiedad o característica del objeto.
  - **Método**: Comportamiento del objeto.
  
  Este ejemplo muestra los pilares básicos de POO: estructura de clase, creación de objetos, encapsulación de datos y uso de métodos.`
    },
    {
        id: 2,
        titulo: "Constructores y Encapsulamiento",
        descripcion: "Se crea una clase con atributos privados, constructor y métodos getters y setters.",
        codigo: `public class Persona {
          // Atributos privados
          private String nombre;
          private int edad;
      
          // Constructor para inicializar la clase
          public Persona(String nombre, int edad) {
              this.nombre = nombre;
              this.edad = edad;
          }
      
          // Getter para el nombre
          public String getNombre() {
              return nombre;
          }
      
          // Setter para el nombre
          public void setNombre(String nombre) {
              this.nombre = nombre;
          }
      
          // Getter para la edad
          public int getEdad() {
              return edad;
          }
      
          // Setter para la edad
          public void setEdad(int edad) {
              this.edad = edad;
          }
      
          // Método para mostrar la información
          public void mostrarInfo() {
              System.out.println("Nombre: " + nombre);
              System.out.println("Edad: " + edad);
          }
      
          public static void main(String[] args) {
              // Crear objeto con constructor
              Persona p = new Persona("Laura", 30);
              p.mostrarInfo();
      
              // Modificar valores con setters
              p.setNombre("Andrea");
              p.setEdad(32);
      
              // Mostrar nueva información
              System.out.println("Datos actualizados:");
              p.mostrarInfo();
          }
      }`,
        resultado: `Nombre: Laura
      Edad: 30
      Datos actualizados:
      Nombre: Andrea
      Edad: 32`,
        explicacion: `🧠 **Explicación detallada:**
      
      - \`private String nombre;\` / \`private int edad;\`: Los atributos son **privados**, lo que significa que sólo se puede acceder a ellos mediante métodos (encapsulamiento).
      - \`public Persona(String nombre, int edad)\`: Este es un **constructor**, que permite inicializar los atributos cuando se crea un nuevo objeto.
      - \`getNombre()\` y \`getEdad()\`: Son métodos **getters**, que permiten leer el valor de un atributo privado.
      - \`setNombre(...)\` y \`setEdad(...)\`: Son métodos **setters**, que permiten modificar un atributo privado de forma controlada.
      - \`mostrarInfo()\`: Método adicional para mostrar el estado del objeto.
      - \`p.setNombre("Andrea");\`: Se usa un **setter** para cambiar el valor del nombre luego de haber creado el objeto.
      
      📌 **Conceptos clave cubiertos:**
      - **Encapsulamiento**: Protección de los datos internos de una clase.
      - **Constructor**: Método especial que se ejecuta al crear un objeto.
      - **Getter/Setter**: Métodos que permiten el acceso controlado a los atributos.
      
      Este enfoque protege la integridad de los datos y mejora la mantenibilidad del código.`
      },
      {
        id: 3,
        titulo: "Herencia y Polimorfismo Básico",
        descripcion: "Uso de clases base y derivadas para reutilizar código y aplicar comportamiento polimórfico.",
        codigo: `// Clase base
      class Animal {
          public void hacerSonido() {
              System.out.println("El animal hace un sonido");
          }
      }
      
      // Clase derivada
      class Perro extends Animal {
          @Override
          public void hacerSonido() {
              System.out.println("El perro ladra");
          }
      }
      
      // Clase principal
      public class Principal {
          public static void main(String[] args) {
              // Herencia
              Perro miPerro = new Perro();
              miPerro.hacerSonido(); // Llama al método sobreescrito
      
              // Polimorfismo
              Animal miAnimal = new Perro(); // Referencia de tipo Animal, instancia de Perro
              miAnimal.hacerSonido(); // Ejecuta el método de Perro gracias al polimorfismo
          }
      }`,
        resultado: `El perro ladra
      El perro ladra`,
        explicacion: `🧠 **Explicación detallada:**
      
      - \`class Animal\`: Esta es la **clase base** (superclase) que define el comportamiento común para los animales.
      - \`public void hacerSonido()\`: Método que será sobreescrito en las clases hijas.
      - \`class Perro extends Animal\`: Aquí se declara que **Perro hereda de Animal**, por lo tanto, hereda sus métodos.
      - \`@Override\`: Indica que se está **sobrescribiendo** el método original de la clase padre.
      - \`miPerro.hacerSonido()\`: Ejecuta el método sobreescrito en la clase hija (**herencia**).
      - \`Animal miAnimal = new Perro();\`: Aquí es donde entra el **polimorfismo**: usamos una referencia de tipo padre (\`Animal\`), pero instanciamos una clase hija (\`Perro\`).
      - \`miAnimal.hacerSonido()\`: Aunque usamos una referencia de tipo padre, el método sobreescrito en la clase hija se ejecuta (**polimorfismo dinámico**).
      
      📌 **Conceptos clave cubiertos:**
      - **Herencia**: Permite reutilizar código común entre clases.
      - **Sobrescritura (override)**: Permite redefinir métodos heredados para comportamientos específicos.
      - **Polimorfismo**: Una referencia de tipo padre puede ejecutar el comportamiento específico del hijo, según el tipo real del objeto.
      
      ✅ Este patrón es esencial para escribir código más flexible, reutilizable y orientado a objetos.`
      },
      {
        id: 4,
        titulo: "Clases Abstractas y Métodos Abstractos",
        descripcion: "Uso de una clase abstracta para definir estructura común sin implementación concreta.",
        codigo: `// Clase abstracta
      abstract class Figura {
          // Método abstracto (sin cuerpo)
          public abstract double calcularArea();
      
          // Método concreto
          public void mostrarTipo() {
              System.out.println("Soy una figura");
          }
      }
      
      // Clase hija que implementa el método abstracto
      class Cuadrado extends Figura {
          private double lado;
      
          public Cuadrado(double lado) {
              this.lado = lado;
          }
      
          @Override
          public double calcularArea() {
              return lado * lado;
          }
      }
      
      // Clase principal
      public class Principal {
          public static void main(String[] args) {
              Figura figura = new Cuadrado(5);
      
              figura.mostrarTipo();                      // Método heredado (concreto)
              System.out.println(figura.calcularArea()); // Implementación concreta del método abstracto
          }
      }`,
        resultado: `Soy una figura
      25.0`,
        explicacion: `🧠 **Explicación detallada:**
      
      - \`abstract class Figura\`: Declara una **clase abstracta**, que no se puede instanciar directamente. Se usa como base para otras clases.
      - \`public abstract double calcularArea()\`: Este es un **método abstracto**, que **debe ser implementado** por cualquier clase que herede de \`Figura\`.
      - \`public void mostrarTipo()\`: Método **concreto** que sí tiene implementación y puede ser usado por las clases hijas.
      - \`class Cuadrado extends Figura\`: \`Cuadrado\` **hereda** de \`Figura\` y está obligado a implementar el método \`calcularArea()\`.
      - \`@Override\`: Sobrescribe el método abstracto definido en la clase padre.
      - \`Figura figura = new Cuadrado(5);\`: Gracias al **polimorfismo**, usamos una variable de tipo \`Figura\` que contiene una instancia de \`Cuadrado\`.
      - \`figura.mostrarTipo()\`: Ejecuta el método concreto definido en la clase abstracta.
      - \`figura.calcularArea()\`: Ejecuta la implementación proporcionada por \`Cuadrado\`.
      
      📌 **Conceptos clave cubiertos:**
      - Las **clases abstractas** son útiles para definir una base común sin permitir instancias directas.
      - Los **métodos abstractos** obligan a las clases hijas a proporcionar su propia implementación.
      - Es una forma poderosa de aplicar el principio de diseño de “programar para una interfaz, no para una implementación”.
      
      ✅ Ideal cuando tienes varias clases que comparten estructura, pero cada una necesita su propio comportamiento específico.
      `
      },
      {
        id: 5,
        titulo: "Uso de Interfaces en Java",
        descripcion: "Ejemplo básico de una interfaz y cómo se implementa en una clase.",
        codigo: `// Definimos una interfaz
      interface Animal {
          void hacerSonido(); // Método sin implementación
      }
      
      // Clase que implementa la interfaz
      class Perro implements Animal {
          public void hacerSonido() {
              System.out.println("El perro dice: ¡Guau!");
          }
      }
      
      // Clase principal
      public class Principal {
          public static void main(String[] args) {
              Animal miPerro = new Perro();
              miPerro.hacerSonido();
          }
      }`,
        resultado: `El perro dice: ¡Guau!`,
        explicacion: `🧠 **Explicación detallada:**
      
      - \`interface Animal\`: Se define una **interfaz**, que es un contrato. Las clases que la implementen deben definir sus métodos.
      - \`void hacerSonido();\`: Es un **método abstracto implícito**, ya que las interfaces no tienen implementación (hasta Java 8+).
      - \`class Perro implements Animal\`: Esta clase **implementa** la interfaz, por lo que debe definir el método \`hacerSonido()\`.
      - \`System.out.println(...)\`: Imprime un mensaje personalizado del perro.
      - \`Animal miPerro = new Perro();\`: Se usa una **referencia de tipo interfaz** para contener un objeto concreto (\`Perro\`). Esto se llama **polimorfismo basado en interfaces**.
      
      📌 **Conceptos clave cubiertos:**
      - Una **interfaz** define métodos que deben implementarse, sin lógica.
      - Las **clases pueden implementar múltiples interfaces**, a diferencia de las clases que solo pueden extender una clase base.
      - **Polimorfismo:** Puedes tratar cualquier objeto como una instancia de su interfaz.
      
      ✅ Las interfaces son fundamentales para la programación orientada a objetos y el diseño desacoplado, y son muy utilizadas en Java para definir comportamientos comunes que pueden ser compartidos por clases muy diferentes.
      `
      },
      {
        id: 6,
        titulo: "Sobrecarga de Métodos",
        descripcion: "Demuestra cómo una clase puede tener varios métodos con el mismo nombre pero diferentes parámetros.",
        codigo: `public class Calculadora {
      
          // Método suma con dos enteros
          public int sumar(int a, int b) {
              return a + b;
          }
      
          // Método suma con tres enteros
          public int sumar(int a, int b, int c) {
              return a + b + c;
          }
      
          // Método suma con dos números decimales
          public double sumar(double a, double b) {
              return a + b;
          }
      
          public static void main(String[] args) {
              Calculadora calc = new Calculadora();
      
              System.out.println("Suma de 2 enteros: " + calc.sumar(3, 4));
              System.out.println("Suma de 3 enteros: " + calc.sumar(1, 2, 3));
              System.out.println("Suma de 2 decimales: " + calc.sumar(2.5, 3.7));
          }
      }`,
        resultado: `Suma de 2 enteros: 7
      Suma de 3 enteros: 6
      Suma de 2 decimales: 6.2`,
        explicacion: `🧠 **Explicación detallada:**
      
      - 🔁 **Sobrecarga de métodos (Overloading)**: Se refiere a definir varios métodos con el **mismo nombre**, pero con **diferentes parámetros** (tipo o cantidad).
        
      - \`public int sumar(int a, int b)\`: Suma dos números enteros.
      - \`public int sumar(int a, int b, int c)\`: Variante que suma tres números enteros.
      - \`public double sumar(double a, double b)\`: Variante que trabaja con números decimales (tipo \`double\`).
      
      - 🔍 El compilador decide cuál método llamar **según los argumentos** que se pasen:
        - \`calc.sumar(3, 4)\`: Llama al primero (2 enteros).
        - \`calc.sumar(1, 2, 3)\`: Llama al segundo (3 enteros).
        - \`calc.sumar(2.5, 3.7)\`: Llama al tercero (2 doubles).
      
      📌 **Ventajas del Overloading:**
      - Hace el código más limpio y legible.
      - Permite reutilizar el mismo nombre para operaciones similares con distintos tipos de datos.
      
      ✅ Este concepto es muy útil en librerías, frameworks y APIs, como por ejemplo al construir objetos o realizar cálculos con diferentes tipos.
      `
      }                      
  ];
  