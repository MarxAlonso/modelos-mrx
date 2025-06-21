export const ejemplosJavaIntermedios = [
    {
      id: 1,
      titulo: "Clase y Objeto",
      descripcion: "Creación de una clase con atributos y uso de objetos.",
      codigo: `public class Persona {
        String nombre;
        int edad;
  
        public void mostrarInfo() {
            System.out.println("Nombre: " + nombre);
            System.out.println("Edad: " + edad);
        }
  
        public static void main(String[] args) {
            Persona p = new Persona();
            p.nombre = "Ana";
            p.edad = 28;
            p.mostrarInfo();
        }
    }`,
      resultado: "Nombre: Ana\nEdad: 28",
      explicacion: `- Una **clase** es un molde o plantilla que define las características y comportamientos de un objeto.
  - **Objeto** es una instancia concreta de una clase: algo con sus propios valores (estado) y comportamientos (métodos).
  - class Persona: Define una clase llamada Persona con dos atributos: nombre (tipo String) y edad (tipo int).
  - mostrarInfo(): Método que imprime los valores actuales del objeto.
  - new Persona(): Crea una instancia (objeto) de la clase Persona.
  - p.nombre = "Ana"; y p.edad = 28; asignan valores a los atributos del objeto.
  - p.mostrarInfo(): Llama al método que imprime los valores del objeto.`
    },
    {
      id: 2,
      titulo: "Constructor en Java",
      descripcion: "Uso de un constructor para inicializar objetos.",
      codigo: `public class Animal {
        String tipo;
  
        public Animal(String tipo) {
            this.tipo = tipo;
        }
  
        public void mostrar() {
            System.out.println("Tipo: " + tipo);
        }
  
        public static void main(String[] args) {
            Animal gato = new Animal("Felino");
            gato.mostrar();
        }
    }`,
      resultado: "Tipo: Felino",
      explicacion: `- Un **constructor** es un método especial que se ejecuta automáticamente al crear un objeto.
  - Su función principal es inicializar los atributos del objeto.
  - public Animal(String tipo): Constructor que recibe un parámetro y asigna su valor al atributo tipo.
  - this.tipo = tipo: 'this' hace referencia al atributo de la clase, para distinguirlo del parámetro.
  - new Animal("Felino"): Crea un objeto pasando el valor "Felino" al constructor.
  - gato.mostrar(): Llama al método mostrar() para imprimir el tipo del animal.`
    },
    {
      id: 3,
      titulo: "Encapsulamiento",
      descripcion: "Uso de getters y setters para acceder a atributos privados.",
      codigo: `public class Producto {
        private String nombre;
  
        public void setNombre(String nombre) {
            this.nombre = nombre;
        }
  
        public String getNombre() {
            return this.nombre;
        }
  
        public static void main(String[] args) {
            Producto p = new Producto();
            p.setNombre("Laptop");
            System.out.println("Producto: " + p.getNombre());
        }
    }`,
      resultado: "Producto: Laptop",
      explicacion: `- **Encapsulamiento** es un principio de POO que oculta los detalles internos de una clase.
  - Los atributos se marcan como **private** para que solo puedan ser modificados desde dentro de la clase.
  - setNombre(...): Método público que permite establecer el valor del atributo privado.
  - getNombre(): Método público que permite leer el valor del atributo.
  - Producto p = new Producto(): Se crea una instancia de Producto.
  - p.setNombre("Laptop"): Se asigna el nombre "Laptop" al producto usando el setter.
  - p.getNombre(): Devuelve el nombre usando el getter para mostrarlo.`
    },
    {
      id: 4,
      titulo: "Herencia",
      descripcion: "Una clase puede heredar atributos y métodos de otra.",
      codigo: `class Vehiculo {
        public void encender() {
            System.out.println("Vehículo encendido");
        }
    }
  
    class Carro extends Vehiculo {
        public void acelerar() {
            System.out.println("Carro acelerando");
        }
  
        public static void main(String[] args) {
            Carro c = new Carro();
            c.encender();
            c.acelerar();
        }
    }`,
      resultado: "Vehículo encendido\nCarro acelerando",
      explicacion: `- **Herencia** es un mecanismo que permite a una clase heredar propiedades (atributos y métodos) de otra.
  - class Vehiculo: Clase base o superclase que tiene un método encender().
  - class Carro extends Vehiculo: Carro es una subclase que hereda todo lo público de Vehiculo.
  - Carro también tiene su propio método: acelerar().
  - Carro c = new Carro(): Crea una instancia de Carro.
  - c.encender(): Llama al método heredado de Vehiculo.
  - c.acelerar(): Llama al método propio de la clase Carro.`
    },
    {
        id: 5,
        titulo: "Polimorfismo en Java",
        descripcion: "Demostración del uso de polimorfismo con métodos sobrescritos.",
        codigo: `class Animal {
          public void sonido() {
              System.out.println("El animal hace un sonido");
          }
      }
      
      class Perro extends Animal {
          public void sonido() {
              System.out.println("El perro ladra");
          }
      }
      
      class Gato extends Animal {
          public void sonido() {
              System.out.println("El gato maúlla");
          }
      }
      
      public class TestPolimorfismo {
          public static void main(String[] args) {
              Animal miAnimal = new Animal();
              Animal miPerro = new Perro();
              Animal miGato = new Gato();
      
              miAnimal.sonido();
              miPerro.sonido();
              miGato.sonido();
          }
      }`,
        resultado: `El animal hace un sonido\nEl perro ladra\nEl gato maúlla`,
        explicacion: `- **Polimorfismo** permite que un mismo método se comporte de manera diferente según el tipo de objeto que lo invoque.
      - class Animal: Clase base con un método llamado sonido().
      - class Perro y class Gato: Subclases que sobrescriben el método sonido() con su propia implementación.
      - Animal miAnimal = new Animal(): Instancia de la clase base.
      - Animal miPerro = new Perro(): Se declara como tipo Animal, pero es un objeto Perro (polimorfismo).
      - miPerro.sonido(): Aunque el tipo es Animal, se ejecuta la versión del método de la clase Perro.
      - Esto demuestra que el método correcto es llamado en tiempo de ejecución según el tipo real del objeto.`
      },
      {
        id: 6,
        titulo: "Interfaces en Java",
        descripcion: "Uso de interfaces para definir comportamientos comunes entre clases no relacionadas.",
        codigo: `interface Volador {
          void volar();
      }
      
      class Pajaro implements Volador {
          public void volar() {
              System.out.println("El pájaro vuela por el cielo.");
          }
      }
      
      class Avion implements Volador {
          public void volar() {
              System.out.println("El avión surca las nubes.");
          }
      }
      
      public class TestInterface {
          public static void main(String[] args) {
              Volador miPajaro = new Pajaro();
              Volador miAvion = new Avion();
      
              miPajaro.volar();
              miAvion.volar();
          }
      }`,
        resultado: `El pájaro vuela por el cielo.\nEl avión surca las nubes.`,
        explicacion: `- **interface Volador**: Declara un contrato que cualquier clase puede implementar si desea tener la habilidad de "volar".
      - **implements Volador**: Tanto Pajaro como Avion implementan la interfaz, obligándolos a definir el método volar().
      - **Polimorfismo con interfaces**: Puedes declarar un objeto como tipo Volador y asignarle cualquier clase que implemente esa interfaz.
      - **miPajaro.volar()** y **miAvion.volar()**: Se llama al método correcto dependiendo de la implementación concreta.
      - Las interfaces permiten que clases sin relación directa compartan comportamientos comunes.`
      },
      {
        id: 7,
        titulo: "Uso de ArrayList",
        descripcion: "Cómo declarar, agregar y recorrer una lista dinámica en Java usando ArrayList.",
        codigo: `import java.util.ArrayList;
      
      public class ListaNombres {
          public static void main(String[] args) {
              ArrayList<String> nombres = new ArrayList<>();
      
              nombres.add("Luis");
              nombres.add("Ana");
              nombres.add("Carlos");
      
              for (String nombre : nombres) {
                  System.out.println("Nombre: " + nombre);
              }
          }
      }`,
        resultado: `Nombre: Luis\nNombre: Ana\nNombre: Carlos`,
        explicacion: `- **import java.util.ArrayList;**: Importa la clase ArrayList del paquete java.util, necesaria para usar listas dinámicas.
      - **ArrayList<String> nombres = new ArrayList<>();**: Crea una lista de cadenas de texto que puede crecer dinámicamente.
      - **nombres.add(...)**: Agrega elementos al final de la lista. A diferencia de los arrays, no se necesita definir el tamaño.
      - **for (String nombre : nombres)**: Bucle "for-each" que recorre todos los elementos de la lista uno por uno.
      - **System.out.println(...)**: Muestra cada nombre almacenado en la lista.
      
      💡 **¿Qué es un ArrayList?**  
      Una estructura de datos que permite almacenar elementos de manera ordenada, acceder a ellos por su índice y modificar su tamaño dinámicamente (agregar o eliminar sin definir una longitud fija como en los arrays tradicionales).`
      },
      {
        id: 8,
        titulo: "Manejo de errores con try-catch",
        descripcion: "Captura de excepciones para evitar que el programa se detenga ante errores.",
        codigo: `public class DivisionSeguro {
          public static void main(String[] args) {
              int numerador = 10;
              int denominador = 0;
      
              try {
                  int resultado = numerador / denominador;
                  System.out.println("Resultado: " + resultado);
              } catch (ArithmeticException e) {
                  System.out.println("¡Error! No se puede dividir entre cero.");
              }
      
              System.out.println("Programa continúa ejecutándose.");
          }
      }`,
        resultado: `¡Error! No se puede dividir entre cero.\nPrograma continúa ejecutándose.`,
        explicacion: `- **try { ... }**: Bloque que contiene código que puede generar una excepción (error en tiempo de ejecución).
      - **numerador / denominador**: Al intentar dividir por cero, Java lanza una excepción del tipo **ArithmeticException**.
      - **catch (ArithmeticException e)**: Captura la excepción y permite manejarla sin que el programa se detenga bruscamente.
      - **System.out.println(...)** dentro del catch: Muestra un mensaje de error amigable para el usuario.
      - **El programa continúa...**: A diferencia de un fallo normal, gracias al try-catch el programa no termina inesperadamente.
      
      💡 **¿Qué es una excepción en Java?**  
      Es un evento que ocurre durante la ejecución del programa y que interrumpe el flujo normal de instrucciones. El bloque try-catch permite capturarlas y actuar en consecuencia para evitar fallos críticos.`
      }            
  ];
  