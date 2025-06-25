export const ejemplosSpringCoreIntermedio = [
    {
        id: 1,
        titulo: "Configuración de Beans con @Configuration",
        descripcion: "Define y configura manualmente los beans usando clases de configuración en Spring.",
        codigo: `import org.springframework.context.annotation.Bean;
      import org.springframework.context.annotation.Configuration;
      
      @Configuration
      public class AppConfig {
      
          @Bean
          public UsuarioServicio usuarioServicio() {
              return new UsuarioServicio(usuarioRepositorio());
          }
      
          @Bean
          public UsuarioRepositorio usuarioRepositorio() {
              return new UsuarioRepositorio();
          }
      }`,
        resultado: "Beans configurados manualmente para inyección",
        explicacion: `🧠 **¿Qué se hace aquí?**
      
      - \`@Configuration\`: Indica que esta clase define la configuración de beans.
      - \`@Bean\`: Marca los métodos que devuelven instancias que serán gestionadas por Spring.
      - \`usuarioServicio()\`: Se inyecta el repositorio manualmente al crear el servicio.
      
      📌 Esto te da control total sobre cómo se crean y relacionan los objetos. Ideal cuando no se desea usar anotaciones en las clases o para testeo.`
      },
      {
        id: 2,
        titulo: "Inyección por constructor",
        descripcion: "Uso de inyección de dependencias a través del constructor, facilitando pruebas.",
        codigo: `public class UsuarioServicio {
          private final UsuarioRepositorio repositorio;
      
          // Inyección por constructor
          public UsuarioServicio(UsuarioRepositorio repositorio) {
              this.repositorio = repositorio;
          }
      
          public void mostrarUsuarios() {
              for (Usuario u : repositorio.obtenerTodos()) {
                  System.out.println("Usuario: " + u.getNombre());
              }
          }
      }`,
        resultado: "Dependencia inyectada correctamente por constructor",
        explicacion: `✅ **Ventajas de esta forma:**
      
      - Favorece la **inmutabilidad**: una vez creada la instancia, la dependencia no cambia.
      - Es ideal para pruebas (mocking).
      - Cumple con el principio de inversión de dependencias (DIP).
      
      🧠 En vez de usar \`@Autowired\`, dejamos que Spring inyecte automáticamente el repositorio desde la configuración.`
      },
      {
        id: 3,
        titulo: "Uso de Interfaces para Servicios",
        descripcion: "Se crea una interfaz para el servicio, promoviendo el desacoplamiento.",
        codigo: `public interface UsuarioServicio {
          void mostrarUsuarios();
      }
      
      public class UsuarioServicioImpl implements UsuarioServicio {
          private UsuarioRepositorio repositorio;
      
          public UsuarioServicioImpl(UsuarioRepositorio repositorio) {
              this.repositorio = repositorio;
          }
      
          @Override
          public void mostrarUsuarios() {
              for (Usuario u : repositorio.obtenerTodos()) {
                  System.out.println("Usuario: " + u.getNombre());
              }
          }
      }`,
        resultado: "Servicio desacoplado de su implementación",
        explicacion: `🧠 **Buenas prácticas de arquitectura:**
      
      - Se define una interfaz: \`UsuarioServicio\`.
      - La clase \`UsuarioServicioImpl\` implementa esa interfaz.
      - Esto permite cambiar la lógica del servicio sin afectar a quienes lo usan.
      
      ✅ Promueve el principio de sustitución de Liskov (LSP) y la inversión de dependencias.`
      },
      {
        id: 4,
        titulo: "Múltiples implementaciones de un servicio",
        descripcion: "Se crean distintas estrategias para manejar datos, y se elige una en el @Configuration.",
        codigo: `public class UsuarioRepositorioMemoria implements UsuarioRepositorio {
          public List<Usuario> obtenerTodos() {
              return List.of(new Usuario(1, "Ana"), new Usuario(2, "Luis"));
          }
      }
      
      public class UsuarioRepositorioBD implements UsuarioRepositorio {
          public List<Usuario> obtenerTodos() {
              // Simula acceso a base de datos
              return List.of(new Usuario(1, "BD-Juan"), new Usuario(2, "BD-Maria"));
          }
      }
      
      @Configuration
      public class AppConfig {
      
          @Bean
          public UsuarioRepositorio usuarioRepositorio() {
              // Cambiar aquí la estrategia: memoria o base de datos
              return new UsuarioRepositorioMemoria();
              // return new UsuarioRepositorioBD();
          }
      
          @Bean
          public UsuarioServicio usuarioServicio() {
              return new UsuarioServicioImpl(usuarioRepositorio());
          }
      }`,
        resultado: "Cambiar la implementación sin afectar al servicio",
        explicacion: `✅ Este patrón se llama **estrategia**.
      
      - Se crean múltiples implementaciones de \`UsuarioRepositorio\`.
      - Se elige cuál usar en tiempo de configuración.
      - La lógica del servicio nunca cambia, solo cambia la fuente de datos.
      
      📌 Esto es útil para pruebas vs producción, o para extender funcionalidades en el futuro.`
      },
      {
        id: 5,
        titulo: "Selección de beans con @Qualifier",
        descripcion: "Cuando hay múltiples beans del mismo tipo, se puede usar @Qualifier para especificar cuál inyectar.",
        codigo: `@Component("memoriaRepo")
      public class UsuarioRepositorioMemoria implements UsuarioRepositorio { ... }
      
      @Component("bdRepo")
      public class UsuarioRepositorioBD implements UsuarioRepositorio { ... }
      
      @Component
      public class UsuarioServicio {
      
          @Autowired
          @Qualifier("bdRepo")
          private UsuarioRepositorio repositorio;
      
          public void mostrarUsuarios() {
              for (Usuario u : repositorio.obtenerTodos()) {
                  System.out.println("Usuario: " + u.getNombre());
              }
          }
      }`,
        resultado: "Bean específico inyectado usando @Qualifier",
        explicacion: `🧠 Cuando hay más de un bean del mismo tipo, Spring necesita saber cuál usar.
      
      - \`@Component("nombre")\`: Da un nombre específico al bean.
      - \`@Qualifier("nombre")\`: Se indica explícitamente qué bean se desea inyectar.
      
      ✅ Esto evita ambigüedad y permite tener múltiples implementaciones coexistiendo.`
      }            
];