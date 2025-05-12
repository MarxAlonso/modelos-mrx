import banner1Image from '../../../assets/images/banner1.png';
export interface Diseno {
  id: number;
  titulo: string;
  categoria: string;
  descripcion: string;
  imagen: string;
  dificultad: string;
  codigo: {
    html: string;
    css: string;
  };
}

export const categorias = [
  "Todos",
  "Landing Pages",
  "Formularios",
  "Navegación",
  "Cards",
  "Heroes",
  "Footers",
];

export const disenos: Diseno[] = [
  {
    id: 1,
    titulo: "Hero Section Arrendamiento",
    categoria: "Heroes",
    descripcion:
      "Sección hero moderna con círculos decorativos y características destacadas",
    imagen:
      "https://server1.3rcore.com/wp-content/uploads/2025/05/imagen2-home.jpg",
    dificultad: "Intermedio",
    codigo: {
      html: `<section class="hero-section-arrendamiento">
      <div class="container-arrendamiento">
        <!-- Círculos de fondo decorativos -->
        <div class="background-circle circle1"></div>
        <div class="background-circle circle2"></div>
    
        <!-- Columna de texto -->
        <div class="text-content-arrendamiento">
          <h4 class="subtitle-arrendamiento">
            Soluciones de <span class="highlight-arrendamiento">Arrendamiento TI</span>
          </h4>
          <h1 class="main-title-arrendamiento">Leasing Tecnológico Inteligente</h1>
          <p class="description-arrendamiento">
            Capital Core IT ofrece modelos de arrendamiento tecnológico que permiten el uso de equipos sin compra directa, optimizando recursos financieros y asegurando infraestructura siempre actualizada.
          </p>
    
          <div class="features-arrendamiento">
            <div class="feature-arrendamiento feature-branch-arrendamiento">
              <img src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png" alt="Flexibilidad" />
              <div>
                <h3>Flexibilidad y Escalabilidad</h3>
                <p>Adapta tu infraestructura a las necesidades cambiantes de tu empresa, con contratos renovables y tecnología actualizable.</p>
              </div>
            </div>
            <div class="feature-arrendamiento feature-branch-arrendamiento">
              <img src="https://cdn-icons-png.flaticon.com/512/1828/1828400.png" alt="Ahorro financiero" />
              <div>
                <h3>Conservación de Capital</h3>
                <p>Evita grandes inversiones iniciales y conserva tus líneas de crédito para otras prioridades estratégicas.</p>
              </div>
            </div>
            <div class="feature-arrendamiento feature-branch-arrendamiento">
              <img src="https://cdn-icons-png.flaticon.com/512/1170/1170576.png" alt="Soporte incluido" />
              <div>
                <h3>Soporte y Mantenimiento</h3>
                <p>Incluye servicios de soporte técnico y mantenimiento preventivo en el contrato.</p>
              </div>
            </div>
            <div class="feature-arrendamiento feature-branch-arrendamiento">
              <img src="https://cdn-icons-png.flaticon.com/512/181/181515.png" alt="Beneficio fiscal" />
              <div>
                <h3>Ventajas Fiscales</h3>
                <p>Los pagos mensuales pueden deducirse como gastos operativos, reduciendo la carga fiscal.</p>
              </div>
            </div>
            <div class="feature-arrendamiento feature-branch-arrendamiento">
              <img src="https://cdn-icons-png.flaticon.com/512/2989/2989988.png" alt="Compra al final" />
              <div>
                <h3>Opción de Compra</h3>
                <p>Posibilidad de adquirir los equipos al finalizar el contrato si lo necesitas.</p>
              </div>
            </div>
            <div class="feature-arrendamiento feature-branch-arrendamiento">
              <img src="https://cdn-icons-png.flaticon.com/512/3022/3022819.png" alt="Mitigación de riesgos" />
              <div>
                <h3>Mitigación de Riesgos</h3>
                <p>Reduce la obsolescencia tecnológica y el costo de propiedad a largo plazo.</p>
              </div>
            </div>
          </div>
        </div>
    
        <!-- Columna de imagen -->
        <div class="image-container-arrendamiento">
          <img src="https://server1.3rcore.com/wp-content/uploads/2025/05/imagen2-home.jpg" alt="Equipamiento TI Leasing" class="hero-image-arrendamiento" />
        </div>
      </div>
    </section>`,
      css: `.hero-section-arrendamiento {
      padding: 60px 40px;
    }
    
    .container-arrendamiento {
      max-width: 1300px;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
    }
    
    .text-content-arrendamiento {
      max-width: 600px;
      flex: 1;
    }
    
    .subtitle-arrendamiento {
      font-size: 18px;
      color: #0077cc;
      font-weight: 600;
    }
    
    .highlight-arrendamiento {
      color: #00aaff;
    }
    
    .main-title-arrendamiento {
      font-size: 32px;
      font-weight: 700;
      margin: 20px 0;
      color: #222;
    }
    
    .description-arrendamiento {
      font-size: 16px;
      color: #555;
      margin-bottom: 30px;
    }
    
    .features-arrendamiento {
      display: flex;
      flex-direction: column;
      gap: 25px;
    }
    
    .feature-arrendamiento {
      display: flex;
      gap: 15px;
      padding: 10px;
    }
    .feature-arrendamiento:hover {
      background: #2b5eb3;
      color: white;
    }
    
    .feature-arrendamiento img {
      width: 40px;
      height: 40px;
    }
    
    .feature-arrendamiento h3 {
      margin: 0;
      font-size: 16px;
      color: #111;
    }
    .background-circle {
      position: absolute;
      border-radius: 50%;
      background-color: rgba(0, 122, 255, 0.1);
      z-index: 0;
    }
    
    .circle1 {
      width: 300px;
      height: 300px;
      top: -100px;
      left: -100px;
    }
    
    .circle2 {
      width: 200px;
      height: 200px;
      bottom: -80px;
      right: -80px;
    }
    .feature-arrendamiento p {
      margin: 5px 0 0;
      color: #555;
      font-size: 14px;
    }
    
    /* Línea azul tipo rama */
    .feature-branch-arrendamiento {
      position: relative;
      padding-left: 20px;
      border-left: 3px solid #00aaff;
    }
    
    .cta-button-arrendamiento {
      display: inline-block;
      margin-top: 30px;
      background: linear-gradient(to right, #0077cc, #00aaff);
      color: white;
      padding: 12px 24px;
      border-radius: 8px;
      text-decoration: none;
      font-weight: 600;
      transition: background 0.3s ease;
    }
    
    .cta-button-arrendamiento:hover {
      background: linear-gradient(to right, #005fa3, #008ecc);
    }
    .feature-arrendamiento:hover h3,
    .feature-arrendamiento:hover p {
      color: #fff !important; 
    }
    .image-container-arrendamiento {
      position: relative;
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 30px;
    }
      @media (max-width: 992px) {
      .container-arrendamiento {
        flex-direction: column;
        align-items: center;
        padding: 20px;
      }
    
      .text-content-arrendamiento {
        max-width: 100%;
        text-align: center;
      }
    
      .features-arrendamiento {
        align-items: center;
      }
    
      .feature-arrendamiento {
        flex-direction: column;
        align-items: center;
        text-align: center;
      }
    
      .feature-arrendamiento img {
        margin-bottom: 10px;
      }
    
      .image-container-arrendamiento {
        margin-top: 40px;
        width: 100%;
      }
    
      .hero-image-arrendamiento {
        width: 100%;
        max-width: 400px;
        height: auto;
      }
    
      .background-circle {
        display: none; /* Ocultar decoraciones en móvil/tablet para evitar que estorben */
      }
    }
    
    @media (max-width: 576px) {
      .main-title-arrendamiento {
        font-size: 26px;
      }
    
      .subtitle-arrendamiento {
        font-size: 16px;
      }
    
      .description-arrendamiento {
        font-size: 15px;
      }
    
      .feature-arrendamiento h3 {
        font-size: 15px;
      }
    
      .feature-arrendamiento p {
        font-size: 13px;
      }
    }`,
    },
  },
  {
    id: 2,
    titulo: "Formulario de Contacto Moderno",
    categoria: "Formularios",
    descripcion: "Formulario elegante con efectos de hover y validación visual",
    imagen: "url_to_navbar_preview",
    dificultad: "Básico",
    codigo: {
      html: `<!-- Código del formulario -->`,
      css: `/* Estilos del formulario */`,
    },
  },
  {
    id: 3,
    titulo: "Navbar Responsiva",
    categoria: "Navegación",
    descripcion:
      "Barra de navegación con menú hamburguesa y animaciones suaves",
    imagen: "url_to_navbar_preview",
    dificultad: "Intermedio",
    codigo: {
      html: `<!-- Código de la navbar -->`,
      css: `/* Estilos de la navbar */`,
    },
  },
  {
    id: 4,
    titulo: "Banner 1 Responsiva",
    categoria: "Heroes",
    descripcion:
      "Banner para tu web responsiva con imágenes de fondo y texto destacado",
    imagen: banner1Image,
    dificultad: "Intermedio",
    codigo: {
      html: `<!-- Banner HTML -->
<div class="banner-techo">
  <div class="banner-content-techo">
    <h1>SOLUCIONES DE CIBERSEGURIDAD
</h1>
    <p><strong>¿Cómo proteger su empresa ante amenazas digitales?</strong> En Capital Core IT brindamos soluciones integrales de ciberseguridad que combinan hardware avanzado y servicios especializados para una protección completa de su infraestructura.</p>
    <button onclick="">Comenzamos</button>
  </div>
</div>`,
      css: `.banner-techo {
    position: relative;
    width: 100%;
    height: 700px;
    background: url('https://server1.3rcore.com/wp-content/uploads/2025/05/banner-solucioninformatico2.png') center/cover no-repeat;
    display: flex;
    align-items: center;
    justify-content: flex-start; 
    text-align: left; 
    color: white;
    font-family: 'Montserrat', sans-serif; 
    padding-left: 9%;
    padding-right: 9%;
  }

  .banner-techo::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(90deg, rgba(0, 234, 255, 0.6), rgba(0, 123, 255, 0.6), rgba(0, 46, 102, 0.6));
  z-index: 1;
}


  .banner-content-techo {
    position: relative;
    z-index: 2;
  }

  .banner-techo h1 {
    font-size: 3rem;
    font-weight: bold;
    color: white;
    margin-bottom: 1rem;
  }
  .banner-techo p {
    font-size: 1.5rem;
    color: white;
  line-height: 1.6rem;
    margin-bottom: 1rem;
  }

  .banner-techo button {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    border: none;
    background-color: white;
    color: black;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }

  .banner-techo button:hover {
    background-color: #ddd;
  }

  @media (max-width: 768px) {
    .banner-techo {
      justify-content: center;
      text-align: center;
      text-align: left;
      padding-left: 35px;
    height: 450px;
    padding-right: 9%;
    }

    .banner-techo h1 {
      font-size: 2rem;
    }
.banner-techo p {
   font-size: 1rem;
    color: white;
  line-height: 1.6rem;
    margin-bottom: 1rem;
  }
    
    .banner-techo button {
      padding: 0.5rem 1rem;
      font-size: 0.9rem;
    }
  }`,
    },
  },
];
