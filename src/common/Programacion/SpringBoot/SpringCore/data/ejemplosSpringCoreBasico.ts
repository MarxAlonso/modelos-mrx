export const ejemplosSpringCoreBasico = [
    {
      id: 1,
      titulo: "Uso de @Component",
      descripcion: "Anotación que indica que una clase es un bean administrado por Spring.",
      codigo: `import org.springframework.stereotype.Component;
  
  @Component
  public class MiServicio {
      public void saludar() {
          System.out.println("Hola desde el servicio Spring");
      }
  }`,
      resultado: `Hola desde el servicio Spring`,
      explicacion: `- @Component: Marca la clase para que Spring la registre como un componente.
  - MiServicio: Clase con lógica que puede ser inyectada donde se necesite.
  - Spring detecta esta clase durante el escaneo del paquete.`
    },
  ];
  