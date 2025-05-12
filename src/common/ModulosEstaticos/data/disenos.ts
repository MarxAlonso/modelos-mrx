import banner1Image from "../../../assets/images/banner1.png";
import heroes3Image from "../../../assets/images/heoresarrendamiento1.png";
import heroes2Image from "../../../assets/images/heroesswitches.png";
import heroes4Image from "../../../assets/images/heroesciberseguridad.png";
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
    imagen: heroes3Image,
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
  {
    id: 5,
    titulo: "Heroes Switches",
    categoria: "Heroes",
    descripcion: "Heroes switches responsive con estilos css",
    imagen: heroes2Image,
    dificultad: "Intermedio",
    codigo: {
      html: `<section class="hybrid-work-section">
    <div class="background-circle"></div>
    <div class="container">
        <div class="image-column">
            <img src="https://server1.3rcore.com/wp-content/uploads/2025/05/server-e1614758148604.png" alt="Ilustración de soluciones de networking">
        </div>
        <div class="text-content-column">
            <p class="pre-heading">Soluciones de Networking: Switches y APs</p>
            <h1>Impulsa tu empresa con conectividad de alto nivel</h1>
            <p class="description">Implementar una red optimizada con Capital Core IT mejora la productividad, garantiza la seguridad de la información y permite escalar tu infraestructura tecnológica de forma eficiente.</p>
            
            <div class="features-grid">
                <div class="feature-box">
                    <img src="https://server1.3rcore.com/wp-content/uploads/2025/05/eficiencia.png" class="icon" alt="Icono eficiencia">
                    <p><strong>Eficiencia operativa:</strong> Minimiza interrupciones y mejora el desempeño.</p>
                </div>
                <div class="feature-box">
                    <img src="https://server1.3rcore.com/wp-content/uploads/2025/05/seguridad.png" class="icon" alt="Icono seguridad">
                    <p><strong>Seguridad reforzada:</strong> Protege tu red con sistemas de acceso seguros.</p>
                </div>
                <div class="feature-box">
                    <img src="https://server1.3rcore.com/wp-content/uploads/2025/05/escalabilidad.png" class="icon" alt="Icono escalabilidad">
                    <p><strong>Escalabilidad:</strong> Nuestra infraestructura se adapta al crecimiento de tu empresa.</p>
                </div>
                <div class="feature-box">
                    <img src="https://server1.3rcore.com/wp-content/uploads/2025/05/rendimiento.png" class="icon" alt="Icono rendimiento">
                    <p><strong>Rendimiento asegurado:</strong> Conectividad veloz y estable con equipos de marcas.</p>
                </div>
            </div>
        </div>
    </div>
</section>
`,
      css: `.hybrid-work-section {
            position: relative;
            padding: 60px 20px;
            overflow: hidden; 
        }

        .background-circle {
            position: absolute;
            top: -150px; 
            left: -250px;
            width: 700px;
            height: 700px;
            background-color: rgba(220, 235, 255, 0.6);
            border-radius: 50%;
            z-index: 0;
        }

        .hybrid-work-section .container {
            max-width: 1140px;
            margin: 0 auto; 
            display: flex;
            align-items: center;
            gap: 40px;
            position: relative; 
            z-index: 1;
        }

        .image-column {
            flex: 1 1 45%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .image-column img {
            max-width: 100%;
            height: auto;
            border-radius: 8px;
        }

        .text-content-column {
            flex: 1 1 55%; 
        }

        .pre-heading {
            font-size: 16px;
            color: #007bff; 
            font-weight: bold;
            margin-bottom: 8px;
        }

        .text-content-column h1 {
            font-size: 36px; 
            color: #212529;
            margin-top: 0;
            margin-bottom: 20px;
            font-weight: bold;
            line-height: 1.2;
        }

        .description {
            font-size: 16px;
            color: #495057;
            margin-bottom: 30px;
            line-height: 1.7;
        }

        .features-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
        }

        .feature-box {
            background-color: #ffffff;
            border: 1px solid #e9ecef;
            border-radius: 8px; 
            padding: 20px;
            display: flex;
            align-items: center;
            gap: 15px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
            transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
        }

        .feature-box:hover {
            transform: translateY(-3px); 
            box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
        }

        .feature-box img.icon { 
            width: 40px; 
            height: 40px; 
            flex-shrink: 0; 
        }

        .feature-box p {
            margin: 0;
            font-size: 15px;
            color: #343a40;
            font-weight: 500;
        }

        /* Diseño Responsivo */
        @media (max-width: 992px) {
            .hybrid-work-section .container {
                flex-direction: column; 
                text-align: center;
            }

            .image-column {
                margin-bottom: 30px;
                order: 1; 
            }
            .text-content-column {
                order: 2; 
            }

            .background-circle {
                width: 600px;
                height: 600px;
                top: -100px;
                left: -200px;
            }
            .text-content-column h1 {
                font-size: 32px;
            }
        }

        @media (max-width: 768px) { 
            .text-content-column h1 {
                font-size: 28px;
            }
            .description {
                font-size: 15px;
            }
            .background-circle {
                width: 500px;
                height: 500px;
                top: -80px;
                left: -150px;
            }
        }

        @media (max-width: 576px) {
            .hybrid-work-section {
                padding: 40px 15px;
            }
            .features-grid {
                grid-template-columns: 1fr; 
                gap: 15px;
            }
            .feature-box {
                padding: 15px;
                gap: 10px;
                text-align: left; 
            }
            .feature-box img.icon {
                width: 35px;
                height: 35px;
            }
            .feature-box p {
                font-size: 14px;
            }
            .text-content-column h1 {
                font-size: 24px;
            }
            .description {
                font-size: 14px;
            }
            .pre-heading {
                font-size: 15px;
            }
            .background-circle {
                width: 400px;
                height: 400px;
                top: -100px;
                left: -180px; 
            }
        }`,
    },
  },

  {
    id: 6,
    titulo: "Heroes Ciberseguridad Ramas",
    categoria: "Heroes",
    descripcion: "Heroes Ciberseguridad Ramas responsive con estilos css",
    imagen: heroes4Image,
    dificultad: "Intermedio",
    codigo: {
      html: `<section class="valor-clientes-arredamiento3">
  <div class="container-arredamiento3">
    <div class="circle-middle-arredamiento3"></div>

    <div class="image-column-arredamiento3">
      <img src="https://server1.3rcore.com/wp-content/uploads/2025/05/Banner2_642x720.png" alt="Soluciones de Ciberseguridad">
    </div>
    <div class="text-column-arredamiento3">
      <p class="pre-heading-arredamiento3">Capital Core IT</p>
      <h1>Protege tu empresa con nuestras Soluciones de Ciberseguridad</h1>
      <ul class="features-list-arredamiento3">
        <li>
          <div class="feature-icon-arredamiento3"></div>
          <div class="feature-content-arredamiento3">
            <h3>Protección Inteligente y Perimetral</h3>
            <p>Defiende tu red con firewalls de nueva generación, sistemas de detección y prevención de intrusos, y una arquitectura diseñada para prevenir ataques antes de que ocurran.</p>
          </div>
        </li>
        <li>
          <div class="feature-icon-arredamiento3"></div>
          <div class="feature-content-arredamiento3">
            <h3>Monitoreo Activo 24/7</h3>
            <p>Supervisión constante de eventos y amenazas con respuesta inmediata para mantener la continuidad operativa y reducir riesgos en tiempo real.</p>
          </div>
        </li>
        <li>
          <div class="feature-icon-arredamiento3"></div>
          <div class="feature-content-arredamiento3">
            <h3>Análisis y Prevención de Vulnerabilidades</h3>
            <p>Detectamos puntos críticos antes de que sean explotados, aplicando medidas proactivas para reforzar tu seguridad digital.</p>
          </div>
        </li>
        <li>
          <div class="feature-icon-arredamiento3"></div>
          <div class="feature-content-arredamiento3">
            <h3>Seguridad que Genera Confianza</h3>
            <p>Asegura la operación de tu empresa con soluciones confiables que te permiten enfocarte en tu crecimiento sin preocuparte por ciberataques.</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</section>
`,
      css: `.valor-clientes-arredamiento3::before,
.valor-clientes-arredamiento3::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    z-index: 0; /* Detrás del contenido */
    opacity: 0.2;
    background: #3498db;
    pointer-events: none;
}

.valor-clientes-arredamiento3::before {
    width: 200px;
    height: 200px;
    top: -50px;
    left: -50px;
}

.valor-clientes-arredamiento3::after {
    width: 250px;
    height: 250px;
    bottom: -60px;
    right: 60px;
}

.circle-middle-arredamiento3 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    height: 300px;
    background: #3498db;
    border-radius: 50%;
    opacity: 0.2;
    z-index: -1;
    pointer-events: none;
}


        .valor-clientes-arredamiento3 .container-arredamiento3 {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            gap: 40px;
        }

        .image-column-arredamiento3 {
            flex: 1 1 45%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .image-column-arredamiento3 img {
            max-width: 100%;
            height: auto;
        }

        .text-column-arredamiento3 {
            flex: 1 1 55%;
        }

        .pre-heading-arredamiento3 {
            font-size: 16px;
            font-weight: bold;
            margin-bottom: 8px;
            color: #000;
        }

        .text-column-arredamiento3 h1 {
            font-size: 38px;
            font-weight: bold;
            margin-top: 0;
          color: black;
            margin-bottom: 35px;
            line-height: 1.3;
        }

        .features-list-arredamiento3 {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .features-list-arredamiento3 li {
            display: flex;
            align-items: flex-start;
            margin-bottom: 25px;
            position: relative;
            padding-left: 35px;
        }

        .feature-icon-arredamiento3 {
            width: 20px;
            height: 20px;
            background-color: transparent;
            border: 3px solid #3498db;
            border-radius: 50%;
            position: absolute;
            left: 0;
            top: 5px;
        }

        .features-list-arredamiento3 li::before {
            content: '';
            position: absolute;
            left: 10px;
            top: 30px;
            bottom: -15px;
            width: 2px;
            background-image: linear-gradient(to bottom, #3498db 40%, transparent 50%);
            background-size: 2px 8px;
            background-repeat: repeat-y;
        }
         .features-list-arredamiento3 li:last-child::before {
            display: none;
         }


        .feature-content-arredamiento3 h3 {
            font-size: 20px;
            font-weight: bold;
            margin-top: 0;
            margin-bottom: 8px;
            color: #000;
        }

        .feature-content-arredamiento3 p {
            font-size: 15px;
            line-height: 1.6;
            margin: 0;
            color: #000;
        }

        @media (max-width: 992px) {
  .valor-clientes-arredamiento3 .container-arredamiento3 {
    flex-direction: column;
    text-align: center;
  }

  .image-column-arredamiento3,
  .text-column-arredamiento3 {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
  }

  .image-column-arredamiento3 {
    margin-bottom: 40px;
  }

  .text-column-arredamiento3 h1 {
    font-size: 32px;
  }

  .features-list-arredamiento3 li {
    padding-left: 0;
    justify-content: center;
    text-align: left;
    max-width: 500px;
    margin: 0 auto 25px auto;
  }

  .features-list-arredamiento3 li::before {
    left: -25px;
  }

  .feature-icon-arredamiento3 {
    left: -35px;
  }
}

@media (max-width: 768px) {
  .text-column-arredamiento3 h1 {
    font-size: 28px;
  }

  .feature-content-arredamiento3 h3 {
    font-size: 18px;
  }

  .feature-content-arredamiento3 p {
    font-size: 14px;
  }

  .features-list-arredamiento3 li::before {
    left: -15px;
  }

  .feature-icon-arredamiento3 {
    left: -25px;
  }
}

@media (max-width: 480px) {
  .valor-clientes-arredamiento3 {
    padding: 40px 15px;
  }

  .text-column-arredamiento3 h1 {
    font-size: 24px;
  }

  .pre-heading-arredamiento3 {
    font-size: 15px;
  }

  .features-list-arredamiento3 li {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding-left: 0;
    margin-left: 0;
  }

  .features-list-arredamiento3 li::before {
    display: none;
  }

  .feature-icon-arredamiento3 {
    position: static;
    margin-bottom: 10px;
  }
}`,
    },
  },
];
