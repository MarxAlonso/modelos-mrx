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
      }
  ];
  
  