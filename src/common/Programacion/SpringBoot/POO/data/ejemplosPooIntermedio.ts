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
      }
  ];
  