export const ejemplosBootstrap = [
  {
    titulo: 'Cards en Bootstrap',
    descripcion: 'Aprende a crear tarjetas responsivas con Bootstrap',
    codigo: `.card {
  max-width: 540px;
}
.card-body {
  padding: 1.25rem;
}
.card-title {
  margin-bottom: 0.75rem;
}
.card-text {
  margin-bottom: 1rem;
}`,
    html: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Card Bootstrap</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
  <div class="card mb-3">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="imagen.jpg" class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">Título de la Tarjeta</h5>
          <p class="card-text">Este es un ejemplo de una tarjeta más ancha con texto de apoyo.</p>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    explicacion: 'Las Cards en Bootstrap son componentes flexibles que permiten mostrar contenido de manera organizada.\nUtilizan clases predefinidas como .card, .card-body, .card-title y .card-text.\nSe pueden combinar con el sistema de grid de Bootstrap para crear layouts responsivos.\nLas cards son ideales para mostrar contenido como artículos, productos o información destacada.'
  },
  {
    titulo: 'Navbar Responsiva',
    descripcion: 'Implementa una barra de navegación adaptable',
    codigo: `.navbar {
  padding: 1rem;
}
.navbar-brand {
  font-size: 1.25rem;
}
.navbar-toggler {
  padding: 0.25rem 0.75rem;
}
.navbar-nav .nav-link {
  padding: 0.5rem 1rem;
}`,
    html: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Navbar Bootstrap</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" defer></script>
</head>
<body>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Logo</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
              data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" href="#">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Acerca</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</body>
</html>`,
    explicacion: 'La navbar de Bootstrap es completamente responsiva y colapsa en dispositivos móviles.\nUtiliza clases como .navbar-expand-lg para controlar el punto de quiebre del menú.\nIncluye un botón hamburguesa que aparece en pantallas pequeñas.\nSe puede personalizar con diferentes variantes como light/dark y cambiar colores.'
  },
  {
    titulo: 'Sistema Grid',
    descripcion: 'Domina el sistema de rejilla de Bootstrap',
    codigo: `.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}`,
    html: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Sistema Grid Bootstrap</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
  <div class="container">
    <div class="row">
      <div class="col-sm-6 col-md-4 col-lg-3">
        Columna 1
      </div>
      <div class="col-sm-6 col-md-4 col-lg-3">
        Columna 2
      </div>
      <div class="col-sm-6 col-md-4 col-lg-3">
        Columna 3
      </div>
      <div class="col-sm-6 col-md-4 col-lg-3">
        Columna 4
      </div>
    </div>
  </div>
</body>
</html>`,
    explicacion: 'El sistema grid de Bootstrap está basado en un layout de 12 columnas.\nUtiliza clases como col-sm-6 para definir el ancho de las columnas en diferentes breakpoints.\nLos breakpoints principales son: sm (576px), md (768px), lg (992px), xl (1200px).\nEl grid es completamente responsivo y se ajusta automáticamente según el tamaño de la pantalla.'
  }
];
