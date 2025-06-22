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
    }
  ];
  