export const ejemplosSpringCoreBasico = [
    {
      id: 1,
      titulo: "Definición de Componente con @Component",
      descripcion: "Se declara una clase como bean con la anotación @Component.",
      codigo: `import org.springframework.stereotype.Component;
  
  @Component
  public class SaludoService {
      public void saludar() {
          System.out.println("Hola desde Spring Core");
      }
  }`,
      resultado: "Hola desde Spring Core",
      explicacion: `- @Component: Marca esta clase como un componente que Spring puede detectar automáticamente.
  - saludar(): Método que imprime un mensaje. Será invocado desde otra clase si se inyecta el bean.
  - Spring administrará automáticamente este objeto si se encuentra en el escaneo de componentes.`
    },
    {
      id: 2,
      titulo: "Inyección de dependencias con @Autowired",
      descripcion: "Se inyecta automáticamente una instancia de una clase con @Autowired.",
      codigo: `import org.springframework.beans.factory.annotation.Autowired;
  import org.springframework.stereotype.Component;
  
  @Component
  public class Aplicacion {
  
      @Autowired
      private SaludoService saludoService;
  
      public void ejecutar() {
          saludoService.saludar();
      }
  }`,
      resultado: "Hola desde Spring Core",
      explicacion: `- @Autowired: Indica que Spring debe inyectar automáticamente una instancia de SaludoService.
  - private SaludoService saludoService: Es una dependencia que Spring resolverá.
  - ejecutar(): Método que llama a la lógica del servicio inyectado.
  - Este es un ejemplo de Inversión de Control (IoC).`
    },
    {
      id: 3,
      titulo: "Creación de contexto con AnnotationConfigApplicationContext",
      descripcion: "Uso del contenedor Spring para obtener beans con configuración basada en anotaciones.",
      codigo: `import org.springframework.context.ApplicationContext;
  import org.springframework.context.annotation.AnnotationConfigApplicationContext;
  
  public class MainApp {
      public static void main(String[] args) {
          ApplicationContext context = new AnnotationConfigApplicationContext("mi.paquete");
  
          Aplicacion app = context.getBean(Aplicacion.class);
          app.ejecutar();
      }
  }`,
      resultado: "Hola desde Spring Core",
      explicacion: `- AnnotationConfigApplicationContext("mi.paquete"): Escanea el paquete en busca de clases con anotaciones como @Component.
  - context.getBean(...): Recupera el bean administrado por Spring.
  - Spring administra el ciclo de vida de los objetos automáticamente.`
    },
    {
      id: 4,
      titulo: "Configuración manual con @Configuration y @Bean",
      descripcion: "Se define una clase de configuración que declara beans manualmente.",
      codigo: `import org.springframework.context.annotation.Bean;
  import org.springframework.context.annotation.Configuration;
  
  @Configuration
  public class AppConfig {
      
      @Bean
      public SaludoService saludoService() {
          return new SaludoService();
      }
  
      @Bean
      public Aplicacion aplicacion() {
          return new Aplicacion(saludoService());
      }
  }`,
      resultado: "Hola desde Spring Core",
      explicacion: `- @Configuration: Indica que esta clase contiene la configuración de los beans.
  - @Bean: Cada método con esta anotación devuelve un objeto que Spring administrará.
  - Es útil cuando se desea mayor control sin usar anotaciones como @Component/@Autowired.`
    },
    {
      id: 5,
      titulo: "Ciclo de vida del Bean",
      descripcion: "Inicialización personalizada usando @PostConstruct.",
      codigo: `import org.springframework.stereotype.Component;
  import javax.annotation.PostConstruct;
  
  @Component
  public class ServicioInicializado {
  
      @PostConstruct
      public void init() {
          System.out.println("Bean inicializado automáticamente");
      }
  }`,
      resultado: "Bean inicializado automáticamente",
      explicacion: `- @PostConstruct: Indica que este método debe ejecutarse después de que el bean sea creado e inyectado.
  - Este método es útil para tareas de inicialización como establecer valores o abrir conexiones.
  - Forma parte del ciclo de vida de los beans gestionados por Spring.`
    },
    {
        id: 6,
        titulo: "Clase Modelo - Entidad Usuario",
        descripcion: "Representa un modelo de datos simple llamado Usuario.",
        codigo: `public class Usuario {
          private int id;
          private String nombre;
      
          // Constructor
          public Usuario(int id, String nombre) {
              this.id = id;
              this.nombre = nombre;
          }
      
          // Getters
          public int getId() {
              return id;
          }
      
          public String getNombre() {
              return nombre;
          }
      }`,
        resultado: "Clase Usuario creada con atributos y métodos",
        explicacion: `🧠 Esta clase es un modelo (entidad) que representa los datos de un usuario.
      
      - \`private int id, String nombre\`: Atributos privados para encapsulación.
      - \`public Usuario(...)\`: Constructor que permite crear un objeto con valores iniciales.
      - \`getId(), getNombre()\`: Métodos getter que permiten acceder a los datos del objeto.
      
      📌 Este patrón de entidad será usado en otras capas del proyecto, como los repositorios o controladores.`
      },
      {
        id: 7,
        titulo: "Repositorio simulado - Lista de usuarios",
        descripcion: "Crea un repositorio que gestiona usuarios en memoria.",
        codigo: `import java.util.ArrayList;
      import java.util.List;
      
      public class UsuarioRepositorio {
          private List<Usuario> usuarios = new ArrayList<>();
      
          public UsuarioRepositorio() {
              usuarios.add(new Usuario(1, "Ana"));
              usuarios.add(new Usuario(2, "Luis"));
          }
      
          public List<Usuario> obtenerTodos() {
              return usuarios;
          }
      
          public Usuario buscarPorId(int id) {
              for (Usuario u : usuarios) {
                  if (u.getId() == id) return u;
              }
              return null;
          }
      }`,
        resultado: "Repositorio creado con métodos para obtener y buscar usuarios",
        explicacion: `📚 El repositorio es responsable de acceder a los datos (simulados en memoria):
      
      - \`usuarios = new ArrayList<>()\`: Lista interna de usuarios.
      - \`obtenerTodos()\`: Devuelve la lista completa.
      - \`buscarPorId(int id)\`: Recorre la lista buscando un usuario por su ID.
      
      ✅ Este repositorio no se conecta aún a una base de datos. Es útil para aprender el patrón DAO en POO y Spring.`
      },
      {
        id: 8,
        titulo: "Servicio de Usuario con @Component",
        descripcion: "Un servicio que encapsula la lógica del negocio, usando un repositorio.",
        codigo: `import org.springframework.beans.factory.annotation.Autowired;
      import org.springframework.stereotype.Component;
      
      @Component
      public class UsuarioServicio {
      
          @Autowired
          private UsuarioRepositorio repositorio;
      
          public void listarUsuarios() {
              for (Usuario u : repositorio.obtenerTodos()) {
                  System.out.println("Usuario: " + u.getNombre());
              }
          }
      }`,
        resultado: "Imprime los nombres de todos los usuarios",
        explicacion: `🧠 El servicio es una capa intermedia entre los controladores y el acceso a datos:
      
      - \`@Component\`: Declara la clase como un bean de Spring.
      - \`@Autowired UsuarioRepositorio\`: Inyecta el repositorio automáticamente.
      - \`listarUsuarios()\`: Llama al repositorio para obtener e imprimir los usuarios.
      
      📌 Esta estructura facilita la separación de responsabilidades en una aplicación.`
      },
      {
        id: 9,
        titulo: "Controlador de Usuario",
        descripcion: "Una clase que representa un controlador de acceso para la capa de presentación.",
        codigo: `import org.springframework.beans.factory.annotation.Autowired;
      import org.springframework.stereotype.Component;
      
      @Component
      public class UsuarioControlador {
      
          @Autowired
          private UsuarioServicio servicio;
      
          public void iniciar() {
              System.out.println("Lista de usuarios:");
              servicio.listarUsuarios();
          }
      }`,
        resultado: "Lista de usuarios:\nUsuario: Ana\nUsuario: Luis",
        explicacion: `📌 El controlador es la clase de entrada para la lógica de la aplicación:
      
      - \`@Component\`: Lo registra como bean de Spring.
      - \`@Autowired UsuarioServicio\`: Inyecta el servicio necesario.
      - \`iniciar()\`: Punto de entrada que ejecuta una acción completa.
      
      🧠 Este patrón estructura las aplicaciones en capas: Controlador → Servicio → Repositorio → Modelo`
      }
  ];
  