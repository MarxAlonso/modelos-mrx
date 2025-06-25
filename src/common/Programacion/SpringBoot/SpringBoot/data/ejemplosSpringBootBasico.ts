export const ejemplosSpringBootBasico = [
    {
      id: 1,
      titulo: "Ejemplo CRUD básico con Spring Boot",
      descripcion: "Crear una API REST básica con operaciones CRUD usando Spring Boot y JPA.",
      archivos: [
        {
          nombre: "Usuario.java (Entidad)",
          lenguaje: "java",
          codigo: `
  package com.ejemplo.demo.modelo;
  
  import jakarta.persistence.*;
  
  @Entity
  public class Usuario {
      @Id
      @GeneratedValue(strategy = GenerationType.IDENTITY)
      private Long id;
  
      private String nombre;
      private String correo;
  
      // Getters y Setters
  }
          `.trim(),
        },
        {
          nombre: "UsuarioRepository.java",
          lenguaje: "java",
          codigo: `
  package com.ejemplo.demo.repositorio;
  
  import com.ejemplo.demo.modelo.Usuario;
  import org.springframework.data.jpa.repository.JpaRepository;
  
  public interface UsuarioRepository extends JpaRepository<Usuario, Long> {}
          `.trim(),
        },
        {
          nombre: "UsuarioController.java",
          lenguaje: "java",
          codigo: `
  package com.ejemplo.demo.controlador;
  
  import com.ejemplo.demo.modelo.Usuario;
  import com.ejemplo.demo.repositorio.UsuarioRepository;
  import org.springframework.web.bind.annotation.*;
  
  import java.util.List;
  
  @RestController
  @RequestMapping("/usuarios")
  public class UsuarioController {
  
      private final UsuarioRepository repo;
  
      public UsuarioController(UsuarioRepository repo) {
          this.repo = repo;
      }
  
      @GetMapping
      public List<Usuario> listar() {
          return repo.findAll();
      }
  
      @PostMapping
      public Usuario crear(@RequestBody Usuario usuario) {
          return repo.save(usuario);
      }
  }
          `.trim(),
        },
      ],
      resultado: "Se crea un endpoint REST /usuarios con métodos GET y POST.",
      explicacion: `
  🔍 Este ejemplo muestra cómo estructurar un CRUD básico en Spring Boot.
  
  🧱 Componentes:
  - 📦 **Entidad (Usuario.java)**: Define los campos de la tabla con anotaciones JPA.
  - 🧠 **Repositorio (UsuarioRepository.java)**: Extiende JpaRepository para operaciones CRUD automáticas.
  - 🌐 **Controlador (UsuarioController.java)**: Mapea las rutas y conecta el modelo con el repositorio.
  
  🚀 Resultado:
  Puedes acceder a:
  - GET http://localhost:8080/usuarios → Lista todos los usuarios
  - POST http://localhost:8080/usuarios → Crea un nuevo usuario (con JSON)
  `.trim(),
    },
    {
        id: 2,
        titulo: "Aplicación Web con Spring Boot y Thymeleaf",
        descripcion: "Ejemplo de aplicación web donde los datos se muestran en una plantilla HTML usando el motor Thymeleaf, sin API REST.",
        archivos: [
          {
            nombre: "Usuario.java (Entidad)",
            lenguaje: "java",
            codigo: `
    package com.ejemplo.web.modelo;
    
    import jakarta.persistence.*;
    
    @Entity
    public class Usuario {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;
    
        private String nombre;
        private String correo;
    
        // Getters y Setters
    }
            `.trim(),
          },
          {
            nombre: "UsuarioRepository.java",
            lenguaje: "java",
            codigo: `
    package com.ejemplo.web.repositorio;
    
    import com.ejemplo.web.modelo.Usuario;
    import org.springframework.data.jpa.repository.JpaRepository;
    
    public interface UsuarioRepository extends JpaRepository<Usuario, Long> {}
            `.trim(),
          },
          {
            nombre: "UsuarioController.java",
            lenguaje: "java",
            codigo: `
    package com.ejemplo.web.controlador;
    
    import com.ejemplo.web.modelo.Usuario;
    import com.ejemplo.web.repositorio.UsuarioRepository;
    import org.springframework.stereotype.Controller;
    import org.springframework.ui.Model;
    import org.springframework.web.bind.annotation.GetMapping;
    
    import java.util.List;
    
    @Controller
    public class UsuarioController {
    
        private final UsuarioRepository usuarioRepository;
    
        public UsuarioController(UsuarioRepository usuarioRepository) {
            this.usuarioRepository = usuarioRepository;
        }
    
        @GetMapping("/usuarios")
        public String listarUsuarios(Model model) {
            List<Usuario> usuarios = usuarioRepository.findAll();
            model.addAttribute("usuarios", usuarios);
            return "usuarios"; // usuarios.html
        }
    }
            `.trim(),
          },
          {
            nombre: "usuarios.html (Thymeleaf)",
            lenguaje: "html",
            codigo: `
    <!DOCTYPE html>
    <html xmlns:th="http://www.thymeleaf.org">
    <head>
        <title>Lista de Usuarios</title>
        <meta charset="UTF-8" />
    </head>
    <body>
        <h1>Usuarios registrados</h1>
        <ul>
            <li th:each="usuario : \${usuarios}">
                <strong th:text="\${usuario.nombre}"></strong> - 
                <span th:text="\${usuario.correo}"></span>
            </li>
        </ul>
    </body>
    </html>
            `.trim(),
          },
        ],
        resultado: "Accediendo a /usuarios en el navegador, se mostrará una lista de usuarios renderizada dinámicamente con HTML.",
        explicacion: `
    📘 En este ejemplo usamos el patrón MVC tradicional con Spring Boot, sin exponer servicios REST.
    
    🧱 Componentes:
    - 📦 **Entidad (Usuario.java)**: Representa la tabla 'usuario' en la base de datos.
    - 🧠 **Repositorio (UsuarioRepository.java)**: Usa JPA para acceder a los datos.
    - 🎮 **Controlador MVC (UsuarioController.java)**: Carga los datos y los pasa al modelo.
    - 🖼️ **Vista (usuarios.html)**: Plantilla HTML que muestra los datos usando Thymeleaf.
    
    🔗 Accede desde el navegador a: 
    - http://localhost:8080/usuarios
    
    ✅ Este enfoque es útil cuando necesitas crear una aplicación web clásica con frontend generado en el servidor.
    `.trim(),
      },
      {
        id: 3,
        titulo: "Formulario para guardar usuarios con Spring Boot + MySQL",
        descripcion: "En este ejemplo se crea un formulario HTML que permite registrar usuarios en una base de datos MySQL utilizando Spring Boot, MVC y JPA.",
        archivos: [
          {
            nombre: "Usuario.java (Entidad)",
            lenguaje: "java",
            codigo: `
    package com.formulario.modelo;
    
    import jakarta.persistence.*;
    
    @Entity
    public class Usuario {
    
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;
    
        private String nombre;
        private String correo;
    
        // Getters y setters
    }
            `.trim(),
          },
          {
            nombre: "UsuarioRepository.java",
            lenguaje: "java",
            codigo: `
    package com.formulario.repositorio;
    
    import com.formulario.modelo.Usuario;
    import org.springframework.data.jpa.repository.JpaRepository;
    
    public interface UsuarioRepository extends JpaRepository<Usuario, Long> {}
            `.trim(),
          },
          {
            nombre: "UsuarioController.java",
            lenguaje: "java",
            codigo: `
    package com.formulario.controlador;
    
    import com.formulario.modelo.Usuario;
    import com.formulario.repositorio.UsuarioRepository;
    import org.springframework.stereotype.Controller;
    import org.springframework.ui.Model;
    import org.springframework.web.bind.annotation.*;
    
    @Controller
    public class UsuarioController {
    
        private final UsuarioRepository usuarioRepository;
    
        public UsuarioController(UsuarioRepository usuarioRepository) {
            this.usuarioRepository = usuarioRepository;
        }
    
        @GetMapping("/registro")
        public String mostrarFormulario(Model model) {
            model.addAttribute("usuario", new Usuario());
            return "formulario";
        }
    
        @PostMapping("/guardar")
        public String guardarUsuario(@ModelAttribute Usuario usuario) {
            usuarioRepository.save(usuario);
            return "redirect:/registro?exito";
        }
    }
            `.trim(),
          },
          {
            nombre: "formulario.html (Thymeleaf)",
            lenguaje: "html",
            codigo: `
    <!DOCTYPE html>
    <html xmlns:th="http://www.thymeleaf.org">
    <head>
        <title>Registro de Usuario</title>
        <meta charset="UTF-8" />
    </head>
    <body>
        <h1>Registro de Usuario</h1>
    
        <form th:action="@{/guardar}" th:object="\${usuario}" method="post">
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" th:field="*{nombre}" required /><br/>
    
            <label for="correo">Correo:</label>
            <input type="email" id="correo" th:field="*{correo}" required /><br/>
    
            <button type="submit">Registrar</button>
        </form>
    
        <div th:if="\${param.exito}">
            <p>✅ ¡Usuario registrado correctamente!</p>
        </div>
    </body>
    </html>
            `.trim(),
          },
          {
            nombre: "application.properties (conexión MySQL)",
            lenguaje: "properties",
            codigo: `
    spring.datasource.url=jdbc:mysql://localhost:3306/usuarios_db
    spring.datasource.username=root
    spring.datasource.password=tu_contraseña
    spring.jpa.hibernate.ddl-auto=update
    spring.jpa.show-sql=true
    spring.jpa.properties.hibernate.format_sql=true
            `.trim(),
          }
        ],
        resultado: "Desde el navegador se accede a un formulario en /registro. Al enviarlo, se guarda el usuario en MySQL y redirige al mismo formulario con mensaje de éxito.",
        explicacion: `
    📋 Este ejemplo muestra un caso real de cómo integrar un formulario HTML con Spring Boot y MySQL.
    
    📦 Componentes:
    - ✍️ **Entidad (Usuario.java)**: Define el modelo de datos.
    - 🔁 **Repositorio (UsuarioRepository.java)**: Hereda de JpaRepository para guardar automáticamente.
    - 🎮 **Controlador (UsuarioController.java)**: Muestra el formulario y guarda el usuario.
    - 🖼️ **Vista (formulario.html)**: Formulario Thymeleaf con campos vinculados a la entidad.
    - ⚙️ **application.properties**: Configuración de conexión a MySQL.
    
    🔗 Accede a:
    - http://localhost:8080/registro → formulario
    - POST /guardar → guarda en la base de datos
    
    ✅ Ideal para sitios web donde se necesita guardar registros desde formularios de contacto, encuestas, registros, etc.
        `.trim()
      },
      {
        id: 4,
        titulo: "Formulario con validaciones usando anotaciones",
        descripcion:
          "Formulario HTML para registrar usuarios, validando campos con anotaciones como @NotNull, @Size y @Email.",
        archivos: [
          {
            nombre: "Usuario.java (Entidad con validaciones)",
            lenguaje: "java",
            codigo: `
    package com.validacion.modelo;
    
    import jakarta.persistence.*;
    import jakarta.validation.constraints.*;
    
    @Entity
    public class Usuario {
    
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;
    
        @NotBlank(message = "El nombre es obligatorio")
        @Size(min = 2, max = 50, message = "El nombre debe tener entre 2 y 50 caracteres")
        private String nombre;
    
        @NotBlank(message = "El correo es obligatorio")
        @Email(message = "El correo debe ser válido")
        private String correo;
    
        // Getters y Setters
    }
            `.trim(),
          },
          {
            nombre: "UsuarioRepository.java",
            lenguaje: "java",
            codigo: `
    package com.validacion.repositorio;
    
    import com.validacion.modelo.Usuario;
    import org.springframework.data.jpa.repository.JpaRepository;
    
    public interface UsuarioRepository extends JpaRepository<Usuario, Long> {}
            `.trim(),
          },
          {
            nombre: "UsuarioController.java",
            lenguaje: "java",
            codigo: `
    package com.validacion.controlador;
    
    import com.validacion.modelo.Usuario;
    import com.validacion.repositorio.UsuarioRepository;
    import jakarta.validation.Valid;
    import org.springframework.stereotype.Controller;
    import org.springframework.ui.Model;
    import org.springframework.validation.BindingResult;
    import org.springframework.web.bind.annotation.*;
    
    @Controller
    public class UsuarioController {
    
        private final UsuarioRepository usuarioRepository;
    
        public UsuarioController(UsuarioRepository usuarioRepository) {
            this.usuarioRepository = usuarioRepository;
        }
    
        @GetMapping("/validar")
        public String mostrarFormulario(Model model) {
            model.addAttribute("usuario", new Usuario());
            return "formulario-validado";
        }
    
        @PostMapping("/validar")
        public String guardar(@Valid @ModelAttribute Usuario usuario, BindingResult result, Model model) {
            if (result.hasErrors()) {
                return "formulario-validado";
            }
            usuarioRepository.save(usuario);
            model.addAttribute("exito", true);
            return "formulario-validado";
        }
    }
            `.trim(),
          },
          {
            nombre: "formulario-validado.html (Thymeleaf con errores)",
            lenguaje: "html",
            codigo: `
    <!DOCTYPE html>
    <html xmlns:th="http://www.thymeleaf.org">
    <head>
        <title>Validación</title>
        <meta charset="UTF-8" />
    </head>
    <body>
        <h1>Formulario con Validación</h1>
    
        <form th:action="@{/validar}" th:object="\${usuario}" method="post">
            <div>
                <label>Nombre:</label>
                <input type="text" th:field="*{nombre}" />
                <span th:if="\${#fields.hasErrors('nombre')}" th:errors="*{nombre}"></span>
            </div>
    
            <div>
                <label>Correo:</label>
                <input type="email" th:field="*{correo}" />
                <span th:if="\${#fields.hasErrors('correo')}" th:errors="*{correo}"></span>
            </div>
    
            <button type="submit">Enviar</button>
        </form>
    
        <div th:if="\${exito}">
            <p>✅ Usuario registrado correctamente.</p>
        </div>
    </body>
    </html>
            `.trim(),
          },
          {
            nombre: "application.properties (MySQL)",
            lenguaje: "properties",
            codigo: `
    spring.datasource.url=jdbc:mysql://localhost:3306/usuarios_validacion
    spring.datasource.username=root
    spring.datasource.password=tu_contraseña
    spring.jpa.hibernate.ddl-auto=update
            `.trim(),
          },
        ],
        resultado:
          "El formulario no se envía hasta que los campos cumplen las validaciones definidas. Los errores se muestran automáticamente en la interfaz.",
        explicacion: `
    ✅ En este ejemplo aprendiste cómo usar anotaciones de validación en tu entidad y mostrar errores con Thymeleaf.
    
    📦 Componentes usados:
    - 🔒 **@NotBlank**: El campo no puede estar vacío.
    - 🔍 **@Email**: Valida formato de correo electrónico.
    - 📏 **@Size**: Restringe el tamaño del texto.
    
    📌 Spring maneja la validación con:
    - @Valid: Activa la validación en el controlador.
    - BindingResult: Captura errores y evita que el formulario se procese si hay errores.
    
    🧪 Prueba en:  
    - http://localhost:8080/validar  
    - El formulario rechazará entradas incorrectas y mostrará mensajes personalizados.
        `.trim(),
      }
  ];
  
  