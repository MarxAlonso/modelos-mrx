export const ejemplosBootstrapIntermedio = [
  {
    titulo: "Modal con Bootstrap",
    descripcion: "Ejemplo de cómo implementar un modal básico",
    codigo: `.btn-primary {
    margin-top: 1rem;
  }`,
    html: `<!DOCTYPE html>
  <html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Modal Bootstrap</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" defer></script>
  </head>
  <body>
    <div class="container mt-5 text-center">
      <h2>Ejemplo de Modal</h2>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#miModal">
        Abrir Modal
      </button>
    </div>
  
    <div class="modal fade" id="miModal" tabindex="-1" aria-labelledby="miModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="miModalLabel">Título del Modal</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
          </div>
          <div class="modal-body">
            Este es el contenido del modal.
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  </body>
  </html>`,
    explicacion:
      'Un modal en Bootstrap es una ventana emergente que aparece encima del contenido principal.\nUsa clases como .modal, .modal-dialog y .modal-content.\nEl botón debe tener data-bs-toggle="modal" y data-bs-target con el ID del modal que se va a abrir.',
  },
  {
    titulo: "Botones de Colores Bootstrap",
    descripcion: "Cómo aplicar diferentes estilos de botones",
    codigo: `.btn {
    margin: 0.5rem;
  }`,
    html: `<!DOCTYPE html>
  <html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Botones de Colores</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  </head>
  <body>
    <div class="container mt-5 text-center">
      <h2>Botones con diferentes estilos</h2>
      <button class="btn btn-primary">Primario</button>
      <button class="btn btn-success">Éxito</button>
      <button class="btn btn-danger">Peligro</button>
      <button class="btn btn-warning">Advertencia</button>
      <button class="btn btn-info">Info</button>
      <button class="btn btn-dark">Oscuro</button>
    </div>
  </body>
  </html>`,
    explicacion:
      "Bootstrap proporciona clases como .btn-primary, .btn-success, .btn-danger, etc., para estilizar botones de forma rápida.\nEstas clases también pueden combinarse con .btn-lg o .btn-sm para cambiar el tamaño.",
  },
  {
    titulo: "Alertas con SweetAlert",
    descripcion: "Usa SweetAlert para mostrar alertas elegantes con Bootstrap",
    codigo: `.btn-alerta {
    margin-top: 2rem;
  }`,
    html: `<!DOCTYPE html>
  <html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>SweetAlert con Bootstrap</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
  </head>
  <body>
    <div class="container mt-5 text-center">
      <h2>Alerta personalizada</h2>
      <button class="btn btn-warning btn-alerta" onclick="mostrarAlerta()">Mostrar Alerta</button>
    </div>
  
    <script>
      function mostrarAlerta() {
        Swal.fire({
          title: '¡Atención!',
          text: 'Esto es una alerta personalizada.',
          icon: 'warning',
          confirmButtonText: 'Entendido'
        });
      }
    </script>
  </body>
  </html>`,
    explicacion:
      "SweetAlert permite crear alertas personalizadas con íconos y botones personalizados.\nSe integra fácilmente con Bootstrap para mantener una estética coherente.\nLa librería se puede usar con eventos como onclick o al enviar formularios.",
  },
  {
    titulo: 'Collapse (Contenido Colapsable)',
    descripcion: 'Muestra y oculta contenido con animaciones',
    codigo: `.btn-collapse {
  margin: 1rem;
}`,
    html: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Collapse en Bootstrap</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" defer></script>
</head>
<body>
  <div class="container mt-5 text-center">
    <button class="btn btn-info btn-collapse" data-bs-toggle="collapse" data-bs-target="#contenido">
      Mostrar/Ocultar Contenido
    </button>
    <div id="contenido" class="collapse mt-3">
      <div class="card card-body">
        Este es un contenido colapsable que aparece o desaparece al hacer clic en el botón.
      </div>
    </div>
  </div>
</body>
</html>`,
    explicacion: 'El componente Collapse permite ocultar o mostrar contenido de forma animada.\nUsa data-bs-toggle="collapse" y un ID con data-bs-target="#id".\nIdeal para FAQ, secciones opcionales o menús.'
  },
  {
    titulo: 'Tooltips con Bootstrap',
    descripcion: 'Agrega mensajes emergentes a botones y elementos',
    codigo: `.btn-tooltip {
  margin: 1rem;
}`,
    html: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Tooltips Bootstrap</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" defer></script>
</head>
<body>
  <div class="container mt-5 text-center">
    <button type="button" class="btn btn-secondary btn-tooltip" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip arriba">
      Pasa el cursor
    </button>
  </div>

  <script>
    document.addEventListener('DOMContentLoaded', function () {
      const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
      tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
      })
    });
  </script>
</body>
</html>`,
    explicacion: 'Los tooltips muestran información al pasar el cursor sobre un elemento.\nSe activan con data-bs-toggle="tooltip" y deben inicializarse con JavaScript.\nSe puede personalizar la posición con data-bs-placement.'
  },
  {
    titulo: 'Toasts de Notificación',
    descripcion: 'Crea notificaciones emergentes discretas',
    codigo: `.toast-container {
  position: fixed;
  top: 1rem;
  right: 1rem;
}
.toast {
  min-width: 250px;
}`,
    html: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Toast Bootstrap</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" defer></script>
</head>
<body>
  <div class="container mt-5 text-center">
    <button class="btn btn-success" onclick="mostrarToast()">Mostrar Toast</button>
  </div>

  <div class="toast-container">
    <div class="toast align-items-center text-white bg-success border-0" id="miToast" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="d-flex">
        <div class="toast-body">
          Notificación enviada con éxito.
        </div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Cerrar"></button>
      </div>
    </div>
  </div>

  <script>
    function mostrarToast() {
      const toast = new bootstrap.Toast(document.getElementById('miToast'));
      toast.show();
    }
  </script>
</body>
</html>`,
    explicacion: 'Los toasts son notificaciones breves que aparecen en una esquina.\nUsan JavaScript para mostrarse manualmente.\nPuedes personalizar colores, texto y posición.'
  },
  {
    titulo: 'Formulario con Validación y SweetAlert',
    descripcion: 'Un formulario que valida campos obligatorios y muestra una alerta personalizada si está completo',
    codigo: `.form-container {
  max-width: 500px;
  margin: auto;
}
.btn-enviar {
  width: 100%;
  margin-top: 1rem;
}`,
    html: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Formulario Validado</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" defer></script>
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
</head>
<body>
  <div class="container mt-5">
    <div class="form-container">
      <h2 class="text-center">Formulario de Contacto</h2>
      <form id="contactForm">
        <div class="mb-3">
          <label for="nombre" class="form-label">Nombre</label>
          <input type="text" class="form-control" id="nombre" required>
        </div>
        <div class="mb-3">
          <label for="correo" class="form-label">Correo</label>
          <input type="email" class="form-control" id="correo" required>
        </div>
        <button type="submit" class="btn btn-success btn-enviar">Enviar</button>
      </form>
    </div>
  </div>
  <script>
    document.getElementById('contactForm').addEventListener('submit', function(event) {
      event.preventDefault();
      const nombre = document.getElementById('nombre').value.trim();
      const correo = document.getElementById('correo').value.trim();

      if (nombre && correo) {
        Swal.fire('¡Enviado!', 'Tu formulario ha sido enviado correctamente.', 'success');
      } else {
        Swal.fire('Error', 'Por favor completa todos los campos.', 'error');
      }
    });
  </script>
</body>
</html>`,
    explicacion: 'Este ejemplo combina validación de formularios en HTML5 y alertas con SweetAlert. El evento submit se previene con JavaScript para controlar la validación manualmente. Si ambos campos están llenos, se muestra una alerta de éxito, si no, una de error.Es ideal para formularios de contacto, encuestas o cualquier sistema de registro.'
  },
  {
    titulo: 'Tabs Navegables con Contenido Dinámico',
    descripcion: 'Crea pestañas (tabs) con contenido diferente para cada sección sin recargar la página',
    codigo: `.nav-tabs {
  margin-bottom: 1rem;
}`,
    html: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Tabs con Bootstrap</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" defer></script>
</head>
<body>
  <div class="container mt-5">
    <h2 class="text-center">Ejemplo de Tabs</h2>
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab">Inicio</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab">Perfil</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab">Contacto</button>
      </li>
    </ul>
    <div class="tab-content" id="myTabContent">
      <div class="tab-pane fade show active p-3 border rounded" id="home" role="tabpanel">Bienvenido a la página de inicio.</div>
      <div class="tab-pane fade p-3 border rounded" id="profile" role="tabpanel">Esta es la sección de perfil.</div>
      <div class="tab-pane fade p-3 border rounded" id="contact" role="tabpanel">Aquí puedes encontrar información de contacto.</div>
    </div>
  </div>
</body>
</html>`,
    explicacion: 'Los tabs permiten navegar entre secciones sin recargar la página. Se usan con la clase .nav-tabs y cada botón tiene data-bs-target apuntando a un .tab-pane. Ideal para paneles administrativos, perfiles de usuario o dashboards.'
  }
];
