export const ejemplosPooIntermedio = [
    {
        id: 1,
        titulo: "Encapsulamiento y Constructores",
        descripcion: "Uso de constructor para inicializar valores y encapsulamiento con atributos privados y métodos de acceso.",
        codigo: `public class Producto {
          // Atributos privados (encapsulados)
          private String nombre;
          private double precio;
      
          // Constructor para inicializar atributos
          public Producto(String nombre, double precio) {
              this.nombre = nombre;
              this.precio = precio;
          }
      
          // Método getter para obtener el nombre
          public String getNombre() {
              return nombre;
          }
      
          // Método setter para cambiar el nombre
          public void setNombre(String nombre) {
              this.nombre = nombre;
          }
      
          // Método getter para obtener el precio
          public double getPrecio() {
              return precio;
          }
      
          // Método setter para cambiar el precio
          public void setPrecio(double precio) {
              this.precio = precio;
          }
      
          // Método para mostrar la información del producto
          public void mostrar() {
              System.out.println("Producto: " + nombre);
              System.out.println("Precio: S/ " + precio);
          }
      
          public static void main(String[] args) {
              Producto p = new Producto("Laptop", 2800.50);
              p.mostrar();
      
              // Modificando valores con setters
              p.setNombre("Monitor");
              p.setPrecio(850.00);
              p.mostrar();
          }
      }`,
        resultado: `Producto: Laptop
      Precio: S/ 2800.5
      Producto: Monitor
      Precio: S/ 850.0`,
        explicacion: `🧠 **Explicación detallada:**
      
      - 🔒 \`private String nombre;\`, \`private double precio;\`: Se encapsulan los atributos, es decir, no se puede acceder directamente desde fuera de la clase.
      - 🔨 \`public Producto(...)\`: Es un **constructor**, que permite inicializar los valores de los atributos al crear un objeto.
      - 📥 \`setNombre(...)\`, \`setPrecio(...)\`: Son métodos *setters* que permiten modificar los valores encapsulados.
      - 📤 \`getNombre()\`, \`getPrecio()\`: Son métodos *getters* que devuelven el valor actual de los atributos.
      - 🖨️ \`mostrar()\`: Muestra los datos almacenados en los atributos.
      - 🧪 En \`main()\`, se crea un objeto con valores iniciales usando el constructor y luego se modifican con los setters.
      
      📌 Conceptos aplicados:
      - **Encapsulamiento**: Controlar el acceso a los datos internos de un objeto.
      - **Constructor**: Método especial que se ejecuta al crear un objeto y se usa para inicializarlo.
      - **Métodos de acceso**: *getters* y *setters* permiten leer y modificar atributos encapsulados.
      - **Buenas prácticas**: Usar encapsulamiento mejora la seguridad, mantenimiento y reutilización del código.`  
      },
      {
        id: 2,
        titulo: "Asociación entre Clases (Composición)",
        descripcion: "Una clase contiene otra clase como atributo, formando una relación de 'tiene un'.",
        codigo: `// Clase Dirección
      public class Direccion {
          String ciudad;
          String pais;
      
          public Direccion(String ciudad, String pais) {
              this.ciudad = ciudad;
              this.pais = pais;
          }
      
          public void mostrarDireccion() {
              System.out.println("Ciudad: " + ciudad);
              System.out.println("País: " + pais);
          }
      }
      
      // Clase Persona que contiene un objeto Direccion
      public class Persona {
          String nombre;
          Direccion direccion; // Asociación (composición)
      
          public Persona(String nombre, Direccion direccion) {
              this.nombre = nombre;
              this.direccion = direccion;
          }
      
          public void mostrarInformacion() {
              System.out.println("Nombre: " + nombre);
              direccion.mostrarDireccion(); // Uso del objeto Direccion
          }
      
          public static void main(String[] args) {
              Direccion d = new Direccion("Lima", "Perú");
              Persona p = new Persona("Lucía", d);
              p.mostrarInformacion();
          }
      }`,
        resultado: `Nombre: Lucía
      Ciudad: Lima
      País: Perú`,
        explicacion: `🧠 **Explicación detallada:**
      
      - 📦 **Composición**: Es una relación en la que una clase incluye otra como parte de su estructura. En este caso, \`Persona\` "tiene una" \`Direccion\`.
      - 🧱 \`Direccion\`: Es una clase independiente que representa una ubicación con ciudad y país.
      - 🔗 \`Direccion direccion;\`: En la clase \`Persona\`, se declara un atributo que es una instancia de otra clase.
      - 🛠️ \`new Direccion("Lima", "Perú")\`: Se crea un objeto dirección.
      - 🧍 \`new Persona("Lucía", d)\`: Se crea una persona que tiene como dirección el objeto creado anteriormente.
      - 📞 \`direccion.mostrarDireccion();\`: La clase \`Persona\` invoca un método de la clase \`Direccion\`.
      
      📌 **Conceptos aplicados:**
      - **Composición**: Representa una relación fuerte de dependencia entre clases, donde una clase contiene otra como parte de su definición.
      - **Reutilización**: Permite separar responsabilidades y reutilizar clases independientes.
      - **Organización del código**: Facilita el modelado del mundo real, ya que los objetos pueden estar compuestos por otros objetos.`  
      },
      {
        id: 3,
        titulo: "Uso de Arrays de Objetos",
        descripcion: "Manejo de múltiples instancias de una clase utilizando un arreglo.",
        codigo: `public class Estudiante {
          String nombre;
          int edad;
      
          // Constructor
          public Estudiante(String nombre, int edad) {
              this.nombre = nombre;
              this.edad = edad;
          }
      
          // Método para mostrar información
          public void mostrarDatos() {
              System.out.println("Nombre: " + nombre + ", Edad: " + edad);
          }
      
          // Método principal
          public static void main(String[] args) {
              // Crear un array de estudiantes
              Estudiante[] estudiantes = new Estudiante[3];
              
              // Asignar objetos al array
              estudiantes[0] = new Estudiante("María", 20);
              estudiantes[1] = new Estudiante("José", 22);
              estudiantes[2] = new Estudiante("Ana", 19);
      
              // Recorrer e imprimir datos de los estudiantes
              for (int i = 0; i < estudiantes.length; i++) {
                  estudiantes[i].mostrarDatos();
              }
          }
      }`,
        resultado: `Nombre: María, Edad: 20
      Nombre: José, Edad: 22
      Nombre: Ana, Edad: 19`,
        explicacion: `🧠 **Explicación detallada**:
      
      - 🔁 **Array de Objetos**: Permite almacenar múltiples instancias de una clase en una sola estructura.
      - 🧑‍🎓 \`Estudiante[] estudiantes = new Estudiante[3];\`: Se crea un arreglo para 3 objetos de tipo \`Estudiante\`.
      - 🏗️ \`new Estudiante(...)\`: Cada posición del arreglo se llena con una instancia diferente de la clase.
      - 🔄 \`for (int i = 0; i < estudiantes.length; i++)\`: Se recorre el arreglo y se accede a los métodos de cada objeto.
      
      📌 **Conceptos aplicados:**
      - **Array de objetos**: Manejo estructurado de múltiples instancias.
      - **Instanciación dinámica**: Se crean objetos en tiempo de ejecución.
      - **Reutilización de código**: El mismo método \`mostrarDatos()\` es llamado para cada instancia, promoviendo modularidad.
      
      Este tipo de estructura es muy útil para colecciones de datos como listas de usuarios, productos, etc.`  
      },
      {
        id: 4,
        titulo: "Listas Dinámicas con ArrayList",
        descripcion: "Uso de ArrayList para almacenar y manipular objetos dinámicamente.",
        codigo: `import java.util.ArrayList;
      
      public class Producto {
          String nombre;
          double precio;
      
          // Constructor
          public Producto(String nombre, double precio) {
              this.nombre = nombre;
              this.precio = precio;
          }
      
          // Método para mostrar información del producto
          public void mostrar() {
              System.out.println("Producto: " + nombre + ", Precio: $" + precio);
          }
      
          public static void main(String[] args) {
              // Crear una lista dinámica de productos
              ArrayList<Producto> lista = new ArrayList<>();
      
              // Agregar productos a la lista
              lista.add(new Producto("Laptop", 2500.0));
              lista.add(new Producto("Mouse", 80.0));
              lista.add(new Producto("Teclado", 150.0));
      
              // Recorrer y mostrar los productos
              for (Producto p : lista) {
                  p.mostrar();
              }
          }
      }`,
        resultado: `Producto: Laptop, Precio: $2500.0
      Producto: Mouse, Precio: $80.0
      Producto: Teclado, Precio: $150.0`,
        explicacion: `🧠 **Explicación detallada**:
      
      - 📦 \`ArrayList<Producto> lista = new ArrayList<>();\`: Crea una lista dinámica para almacenar objetos de tipo \`Producto\`.
      - 🧱 \`lista.add(...)\`: Inserta nuevos elementos (objetos) en la lista. A diferencia de los arrays, puedes agregar tantos elementos como quieras sin definir un tamaño fijo.
      - 🔁 \`for (Producto p : lista)\`: Bucle mejorado que recorre cada objeto en la lista.
      - 📤 \`p.mostrar()\`: Llama al método definido en la clase para mostrar datos del producto.
      
      📌 **Conceptos clave aplicados:**
      - **ArrayList**: Colección dinámica que permite almacenar cualquier cantidad de objetos sin necesidad de definir un tamaño fijo al inicio.
      - **Polimorfismo aplicado a colecciones**: Cada elemento en la lista puede ser accedido y manipulado mediante sus métodos.
      - **Flexibilidad**: Permite operaciones como agregar, eliminar, buscar y ordenar elementos fácilmente.
      
      Este enfoque es muy usado en aplicaciones reales donde la cantidad de datos no es conocida de antemano, como carritos de compras, catálogos o listas de usuarios.`  
      },
      {
        id: 5,
        titulo: "Búsqueda y Eliminación en ArrayList",
        descripcion: "Cómo buscar y eliminar objetos en una lista dinámica de Java.",
        codigo: `import java.util.ArrayList;
      
      public class Estudiante {
          String nombre;
      
          public Estudiante(String nombre) {
              this.nombre = nombre;
          }
      
          public void mostrar() {
              System.out.println("Estudiante: " + nombre);
          }
      
          public static void main(String[] args) {
              ArrayList<Estudiante> lista = new ArrayList<>();
      
              // Agregar estudiantes
              lista.add(new Estudiante("Ana"));
              lista.add(new Estudiante("Luis"));
              lista.add(new Estudiante("Carlos"));
      
              // Buscar estudiante llamado "Luis"
              for (Estudiante e : lista) {
                  if (e.nombre.equals("Luis")) {
                      System.out.println("Encontrado: " + e.nombre);
                      break;
                  }
              }
      
              // Eliminar estudiante llamado "Carlos"
              lista.removeIf(e -> e.nombre.equals("Carlos"));
      
              // Mostrar estudiantes restantes
              System.out.println("Lista actual:");
              for (Estudiante e : lista) {
                  e.mostrar();
              }
          }
      }`,
        resultado: `Encontrado: Luis
      Lista actual:
      Estudiante: Ana
      Estudiante: Luis`,
        explicacion: `🔍 **Explicación detallada**:
      
      - 🧑‍🎓 \`ArrayList<Estudiante> lista = new ArrayList<>();\`: Creamos una lista dinámica para objetos de tipo \`Estudiante\`.
      - ➕ \`lista.add(...)\`: Agrega objetos a la lista.
      - 🔎 **Búsqueda**:
        - \`for (Estudiante e : lista)\`: Recorremos la lista.
        - \`e.nombre.equals("Luis")\`: Verificamos si el nombre del estudiante coincide.
        - \`break\`: Detiene el bucle al encontrar el estudiante.
      - 🗑️ **Eliminación**:
        - \`lista.removeIf(...)\`: Elimina todos los elementos que cumplan la condición especificada.
        - En este caso, se elimina el estudiante con nombre "Carlos".
      - 📤 \`e.mostrar()\`: Muestra los estudiantes que quedan tras la eliminación.
      
      📌 **Conceptos aplicados**:
      - **Búsqueda secuencial**: Recorre toda la lista hasta encontrar el valor.
      - **Eliminación condicional**: \`removeIf\` es una forma elegante y moderna de filtrar elementos.
      - **Expresiones lambda**: \`e -> e.nombre.equals("Carlos")\` simplifica el código al usar funciones anónimas.
      
      Este ejemplo refleja tareas comunes en programas reales: verificar existencia de datos y modificarlos en tiempo de ejecución.`  
      },
      {
        id: 6,
        titulo: "Ordenamiento con Comparator",
        descripcion: "Ordenar una lista de objetos usando Comparator y Collections.sort().",
        codigo: `import java.util.ArrayList;
      import java.util.Collections;
      import java.util.Comparator;
      
      public class Producto {
          String nombre;
          double precio;
      
          public Producto(String nombre, double precio) {
              this.nombre = nombre;
              this.precio = precio;
          }
      
          public void mostrar() {
              System.out.println(nombre + " - S/" + precio);
          }
      
          public static void main(String[] args) {
              ArrayList<Producto> productos = new ArrayList<>();
              productos.add(new Producto("Mouse", 49.90));
              productos.add(new Producto("Teclado", 89.00));
              productos.add(new Producto("Monitor", 550.00));
      
              // Ordenar por precio (menor a mayor)
              Collections.sort(productos, new Comparator<Producto>() {
                  @Override
                  public int compare(Producto p1, Producto p2) {
                      return Double.compare(p1.precio, p2.precio);
                  }
              });
      
              // Mostrar productos ordenados
              System.out.println("Productos ordenados por precio:");
              for (Producto p : productos) {
                  p.mostrar();
              }
          }
      }`,
        resultado: `Productos ordenados por precio:
      Mouse - S/49.9
      Teclado - S/89.0
      Monitor - S/550.0`,
        explicacion: `📌 **Explicación detallada**:
      
      🔸 \`ArrayList<Producto>\`: Lista dinámica para objetos de tipo \`Producto\`.
      
      🔸 \`Collections.sort(lista, comparator)\`: Método de Java para ordenar listas usando un criterio personalizado.
      
      🔸 \`Comparator<Producto>\`:
      - Es una **interfaz funcional** que define cómo comparar dos objetos.
      - Se implementa de forma anónima para comparar por el atributo \`precio\`.
      - \`Double.compare(p1.precio, p2.precio)\`: Devuelve:
        - Valor negativo si \`p1.precio < p2.precio\`
        - 0 si son iguales
        - Valor positivo si \`p1.precio > p2.precio\`
      
      🔸 \`mostrar()\`: Método para imprimir los productos con su precio.
      
      ✅ **Conceptos clave aplicados**:
      - Ordenamiento personalizado con Comparator.
      - Uso de clases anónimas.
      - Aplicación práctica en listas de objetos.
      
      💡 También se podría usar una expresión lambda para mayor simplicidad:
      \`\`\`java
      productos.sort((p1, p2) -> Double.compare(p1.precio, p2.precio));
      \`\`\`
      
      Este ejercicio es muy útil cuando necesitas mostrar datos ordenados al usuario, como catálogos, listas de ventas o reportes.`  
      }      
  ];
  