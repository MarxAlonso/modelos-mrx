import banner1Image from "../../../assets/images/banner1.png";
import heores2Image from "../../../assets/images/heroesarqdinamico.png";
import cards1Image from "../../../assets/images/cardsarqdinamicos.png";
export interface ProyectoDinamico {
  id: number;
  titulo: string;
  categoria: string;
  descripcion: string;
  imagen: string;
  dificultad: string;
  codigo: {
    html: string;
    css: string;
    js: string;
  };
}

export const categorias = [
  "Todos",
  "Banners",
  "Cards",
  "Formularios",
  "Sliders",
  "Galerías",
];

export const proyectos: ProyectoDinamico[] = [
  {
    id: 1,
    titulo: "Slider de Imágenes Automático",
    categoria: "Sliders",
    descripcion: "Slider de imágenes con transiciones suaves y controles personalizados",
    imagen: banner1Image,
    dificultad: "Intermedio",
    codigo: {
      html: `<div class="slider-container">
  <div class="slider">
    <div class="slide active">
      <img src="imagen1.jpg" alt="Slide 1">
    </div>
    <div class="slide">
      <img src="imagen2.jpg" alt="Slide 2">
    </div>
    <div class="slide">
      <img src="imagen3.jpg" alt="Slide 3">
    </div>
  </div>
  
  <button class="slider-button prev">&#10094;</button>
  <button class="slider-button next">&#10095;</button>
  
  <div class="dots-container">
    <span class="dot active"></span>
    <span class="dot"></span>
    <span class="dot"></span>
  </div>
</div>`,
      css: `.slider-container {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  overflow: hidden;
}

.slider {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.slide {
  min-width: 100%;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.slide.active {
  opacity: 1;
}

.slide img {
  width: 100%;
  height: auto;
}

.slider-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 1rem;
  border: none;
  cursor: pointer;
  transition: background 0.3s;
}

.slider-button:hover {
  background: rgba(0, 0, 0, 0.8);
}

.prev {
  left: 1rem;
}

.next {
  right: 1rem;
}

.dots-container {
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
}

.dot {
  width: 10px;
  height: 10px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.3s;
}

.dot.active {
  background: white;
}`,
      js: `document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  let currentSlide = 0;
  let interval;

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    slides[index].classList.add('active');
    dots[index].classList.add('active');
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  // Event Listeners
  prevButton.addEventListener('click', () => {
    clearInterval(interval);
    prevSlide();
    startAutoSlide();
  });

  nextButton.addEventListener('click', () => {
    clearInterval(interval);
    nextSlide();
    startAutoSlide();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      clearInterval(interval);
      currentSlide = index;
      showSlide(currentSlide);
      startAutoSlide();
    });
  });

  function startAutoSlide() {
    interval = setInterval(nextSlide, 5000);
  }

  // Iniciar el slider automático
  startAutoSlide();
});`
    }
  },
  {
    id: 2,
    titulo: "Heroes de Arquitectura Tecnologicas",
    categoria: "Sliders",
    descripcion: "Heroes dinamico con buen diseño y animaciones",
    imagen: heores2Image,
    dificultad: "Dificil",
    codigo: {
      html: `<section class="valor-clientes-section">
    <div class="circles-arrendamiento">
  <img src="https://server1.3rcore.com/wp-content/uploads/2025/05/CAPITAL-CORE-IT_VARIACIONES-08-scaled.png" alt="">
  <img src="https://server1.3rcore.com/wp-content/uploads/2025/05/CAPITAL-CORE-IT_VARIACIONES-08-scaled.png" alt="">
  <img src="https://server1.3rcore.com/wp-content/uploads/2025/05/CAPITAL-CORE-IT_VARIACIONES-08-scaled.png" alt="">
  <img src="https://server1.3rcore.com/wp-content/uploads/2025/05/CAPITAL-CORE-IT_VARIACIONES-08-scaled.png" alt="">
  <img src="https://server1.3rcore.com/wp-content/uploads/2025/05/CAPITAL-CORE-IT_VARIACIONES-08-scaled.png" alt="">
  <img src="https://server1.3rcore.com/wp-content/uploads/2025/05/CAPITAL-CORE-IT_VARIACIONES-08-scaled.png" alt="">
  <img src="https://server1.3rcore.com/wp-content/uploads/2025/05/CAPITAL-CORE-IT_VARIACIONES-08-scaled.png" alt="">
  <img src="https://server1.3rcore.com/wp-content/uploads/2025/05/CAPITAL-CORE-IT_VARIACIONES-08-scaled.png" alt="">
  <img src="https://server1.3rcore.com/wp-content/uploads/2025/05/CAPITAL-CORE-IT_VARIACIONES-08-scaled.png" alt="">
  <img src="https://server1.3rcore.com/wp-content/uploads/2025/05/CAPITAL-CORE-IT_VARIACIONES-08-scaled.png" alt="">
</div>

    <div class="container">
      <div class="text-column">
            <p class="highlight-networking">Conócenos</p>
            <h1>Soluciones Arquitectónicas de Alto Nivel</h1>
            <ul class="features-list">
                <li class="feature-item-fade">
                    <div class="feature-icon"></div>
                    <div class="feature-content">
                        <h3>Arquitectura Híbrida</h3>
                        <p>Permite utilizar los recursos de infraestructura del centro de datos del cliente y la plataforma de nube.</p>
                    </div>
                </li>
                <li class="feature-item-fade"> 
                    <div class="feature-icon"></div>
                    <div class="feature-content">
                        <h3>Soluciones de Arquitectura Cloud</h3>
                        <p>- Reduce el costo de inversión<br>
                        - Infraestructura actualizada<br>
                        - Mejor uso de recursos<br>
                        - Mayor rapidez en implementaciones</p>
                    </div>
                </li>
                <li class="feature-item-fade">
                    <div class="feature-icon"></div>
                    <div class="feature-content">
                        <h3>Soluciones de Arquitectura en Microservicios</h3>
                        <p>Permiten la gestión de cientos de contenedores, monitoreo, gestión de logs centralizados y una trazabilidad distribuida de las llamadas a los microservicios que se ejecutan en nuestra arquitectura.</p>
                    </div>
                </li>
                <li class="feature-item-fade">
                    <div class="feature-icon"></div>
                    <div class="feature-content">
                        <h3>Protección de Datos Críticos</h3>
                        <p>Protegen los datos frente a factores que generan la pérdida y corrupción de información crítica, reduciendo el tiempo de inactividad ante fallos del centro de datos.</p>
                    </div>
                </li>
            </ul>
        </div>
        <div class="image-column">
            <img src="https://server1.3rcore.com/wp-content/uploads/2025/05/arqtec2-removebg-preview.png" alt="Arquitectura Tecnológica">
        </div>
    </div>
</section>`,
      css: `.circles-arrendamiento {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}

.circles-arrendamiento img {
  position: absolute;
  display: block;
  width: 60px;
  height: auto;
  opacity: 0.03;
  animation: floatImage 20s linear infinite;
  bottom: -150px;
  pointer-events: none;
}

.circles-arrendamiento img:nth-child(1) {
  left: 5%;
  width: 80px;
  animation-duration: 25s;
}
.circles-arrendamiento img:nth-child(2) {
  left: 15%;
  width: 60px;
  animation-duration: 18s;
}
.circles-arrendamiento img:nth-child(3) {
  left: 25%;
  width: 70px;
  animation-duration: 22s;
}
.circles-arrendamiento img:nth-child(4) {
  left: 35%;
  width: 90px;
  animation-duration: 26s;
}
.circles-arrendamiento img:nth-child(5) {
  left: 45%;
  width: 50px;
  animation-duration: 17s;
}
.circles-arrendamiento img:nth-child(6) {
  left: 55%;
  width: 85px;
  animation-duration: 30s;
}
.circles-arrendamiento img:nth-child(7) {
  left: 65%;
  width: 60px;
  animation-duration: 19s;
}
.circles-arrendamiento img:nth-child(8) {
  left: 75%;
  width: 70px;
  animation-duration: 24s;
}
.circles-arrendamiento img:nth-child(9) {
  left: 85%;
  width: 65px;
  animation-duration: 21s;
}
.circles-arrendamiento img:nth-child(10) {
  left: 95%;
  width: 55px;
  animation-duration: 28s;
}

@keyframes floatImage {
  0% {
    transform: translateY(0) scale(1);
    opacity: 0.5;
  }
  100% {
    transform: translateY(-1200px) scale(0.5);
    opacity: 0;
  }
}
        .valor-clientes-section {
           background: linear-gradient(to right, #000000, #03213f, #00bdff);
            color: #ffffff;
            padding: 60px 20px;
            position: relative;
  z-index: 1;
        }

        .valor-clientes-section .container {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            gap: 40px;
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
  animation: float 3.5s ease-in-out infinite;
}
@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-12px);
  }
  100% {
    transform: translateY(0px);
  }
}
        .text-column {
            flex: 1 1 55%;
        }

        .pre-heading {
            font-size: 16px;
            font-weight: bold;
            margin-bottom: 8px;
            color: #bdc3c7;
        }

        .text-column h1 {
            font-size: 38px;
            font-weight: bold;
            margin-top: 0;
          color: white;
            margin-bottom: 35px;
            line-height: 1.3;
        }

        .features-list {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .features-list li {
            display: flex;
            align-items: flex-start;
            margin-bottom: 25px;
            position: relative;
            padding-left: 35px;
        }

        .feature-icon {
            width: 20px;
            height: 20px;
            background-color: transparent;
            border: 3px solid #3498db;
            border-radius: 50%;
            position: absolute;
            left: 0;
            top: 5px;
        }
/* Animación de fade */
.feature-item-fade {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.feature-item-fade.visible {
    opacity: 1;
    transform: translateY(0);
}

        .features-list li::before {
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
         .features-list li:last-child::before {
            display: none;
         }


        .feature-content h3 {
            font-size: 20px;
            font-weight: bold;
            margin-top: 0;
            margin-bottom: 8px;
            color: #ecf0f1;
        }

        .feature-content p {
            font-size: 15px;
            line-height: 1.6;
            margin: 0;
            color: #bdc3c7;
        }

        @media (max-width: 992px) {
            .valor-clientes-section .container {
                flex-direction: column;
                text-align: center;
            }
            .image-column {
                margin-bottom: 40px;
                max-width: 500px;
            }
            .text-column h1 {
                font-size: 32px;
            }
            .features-list li {
                padding-left: 0;
                justify-content: center;
                text-align: left;
                max-width: 500px;
                margin-left: auto;
                margin-right: auto;
            }
             .features-list li::before{
                left: -25px;
             }
             .feature-icon{
                left: -35px;
             }


        }

        @media (max-width: 768px) {
            .text-column h1 {
                font-size: 28px;
            }
            .feature-content h3 {
                font-size: 18px;
            }
            .feature-content p {
                font-size: 14px;
            }
             .features-list li::before{
                left: -15px;
             }
             .feature-icon{
                left: -25px;
             }
        }

        @media (max-width: 480px) {
    .valor-clientes-section {
        padding: 40px 15px;
    }

    .valor-clientes-section .container {
        flex-direction: column;
        gap: 30px;
    }

    .image-column {
        order: 2; /* Imagen debajo */
        width: 100%;
    }

    .text-column {
        order: 1;
        width: 100%;
    }

    .text-column h1 {
        font-size: 24px;
        text-align: center;
    }

    .pre-heading {
        font-size: 15px;
        text-align: center;
    }

    .features-list {
        position: relative;
        padding-left: 25px;
        margin-top: 30px;
    }

    .features-list li {
        flex-direction: row;
        align-items: flex-start;
        text-align: left;
        margin-left: 0;
        padding-left: 35px;
        max-width: 100%;
    }

    .features-list li::before {
        display: block;
        left: 10px;
        top: 30px;
        bottom: -15px;
    }

    .feature-icon {
        position: absolute;
        left: 0;
        top: 5px;
        margin-bottom: 0;
    }

    .feature-content h3,
    .feature-content p {
        text-align: left;
    }
}`,
      js: `document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".feature-item-fade");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible"); // Esto permite repetir el efecto
          }
        });
      },
      {
        threshold: 0.1
      }
    );

    items.forEach(item => observer.observe(item));
  });`
    }
  },
  {
    id: 3,
    titulo: "Cards de Arquitectura Tecnologicas",
    categoria: "Cards",
    descripcion: "Cards dinamico con buen diseño y animaciones",
    imagen: cards1Image,
    dificultad: "Intermedio",
    codigo: {
      html: `<section class="experience-section-arqui-tec">
    <div class="container-arqui-tec">
        <p class="pre-heading-arqui-tec">Capital Core IT</p>
        <h1>Arquitecturas Tecnológicas de Alto Nivel</h1>
        <div class="features-row-arqui-tec">
            <div class="feature-item-arqui-tec">
                <img src="https://server1.3rcore.com/wp-content/uploads/2025/05/escalabilidad.png" alt="Desarrollo de Apps">
                <p>Apps reutilizables y escalables que reducen riesgos y tiempos de cambio.</p>
            </div>
            <div class="feature-item-arqui-tec">
                <img src="https://server1.3rcore.com/wp-content/uploads/2025/05/soporte.png" alt="Disaster Recovery">
                <p>Soluciones de respaldo que protegen datos críticos y reducen el downtime.</p>
            </div>
            <div class="feature-item-arqui-tec">
                <img src="https://server1.3rcore.com/wp-content/uploads/2025/05/despligue.png" alt="Framework de despliegue">
                <p>Despliegue ágil de microservicios mediante frameworks personalizados.</p>
            </div>
            <div class="feature-item-arqui-tec">
                <img src="https://server1.3rcore.com/wp-content/uploads/2025/05/almacenamiento.png" alt="Arquitectura Híbrida">
                <p>Combinación de nube y recursos locales para mayor eficiencia.</p>
            </div>
        </div>
    </div>
</section>`,
      css: `.experience-section-arqui-tec {
        position: relative;
        padding: 90px 20px;
        text-align: center;
        overflow: hidden;
    }
  /* Animación inicial oculta */
.experience-section-arqui-tec {
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}
.experience-section-arqui-tec.show {
    opacity: 1;
    transform: translateY(0);
}
    .experience-section-arqui-tec::before,
    .experience-section-arqui-tec::after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        width: 100%;
        height: 80px;
        background-color: #ffffff;
        z-index: 0;
    }

    .experience-section-arqui-tec::before {
        top: 0;
        border-bottom-left-radius: 50% 30px;
        border-bottom-right-radius: 50% 30px;
    }

    .experience-section-arqui-tec::after {
        bottom: 0;
        border-top-left-radius: 50% 30px;
        border-top-right-radius: 50% 30px;
    }

    .experience-section-arqui-tec .container-arqui-tec {
        max-width: 1000px;
        margin: 0 auto;
        position: relative;
        z-index: 1;
    }

    .pre-heading-arqui-tec {
        font-size: 18px;
        color: #284b85;
        font-weight: bold;
        margin-bottom: 10px;
    }

    .experience-section-arqui-tec h1 {
        font-size: 42px;
        color: #284b85;
        margin-top: 0;
        margin-bottom: 60px;
        font-weight: bold;
        line-height: 1.2;
    }

    .features-row-arqui-tec {
        display: flex;
        justify-content: space-around;
        align-items: flex-start;
        flex-wrap: wrap;
        gap: 20px;
    }

    .feature-item-arqui-tec {
        flex: 0 1 220px;
        padding: 10px;
    }

    .feature-item-arqui-tec img {
        width: 60px;
        height: 60px;
        margin-bottom: 15px;
    }

    .feature-item-arqui-tec p {
        font-size: 16px;
        color: #343a40;
        line-height: 1.5;
        margin: 0;
    }
    .feature-item-arqui-tec:hover {
        background-color: #1e6f93;
        color: #ffffff;
        border-radius: 10px;
        transition: background-color 0.3s ease, color 0.3s ease;
    }

    .feature-item-arqui-tec:hover p {
        color: #ffffff;
    }

    .feature-item-arqui-tec:hover img {
        filter: brightness(0) invert(1);
    }

    @media (max-width: 992px) {
        .experience-section-arqui-tec h1 {
            font-size: 36px;
        }
    }

    @media (max-width: 768px) {
        .experience-section-arqui-tec {
            padding: 60px 15px;
        }
        .experience-section-arqui-tec::before,
        .experience-section-arqui-tec::after {
            height: 60px;
        }
        .experience-section-arqui-tec::before {
            border-bottom-left-radius: 50% 20px;
            border-bottom-right-radius: 50% 20px;
        }
        .experience-section-arqui-tec::after {
            border-top-left-radius: 50% 20px;
            border-top-right-radius: 50% 20px;
        }
        .experience-section-arqui-tec h1 {
            font-size: 30px;
            margin-bottom: 40px;
        }
        .pre-heading-arqui-tec {
            font-size: 16px;
        }
        .feature-item-arqui-tec img {
            width: 50px;
            height: 50px;
        }
        .feature-item-arqui-tec p {
            font-size: 15px;
        }
    }

    @media (max-width: 576px) {
        .experience-section-arqui-tec h1 {
            font-size: 26px;
        }
        .features-row-arqui-tec {
            flex-direction: column;
            align-items: center;
            gap: 30px;
        }
        .feature-item-arqui-tec {
            flex-basis: auto;
            max-width: 250px;
        }
    }`,
      js: `document.addEventListener("DOMContentLoaded", function () {
    const section = document.querySelector(".experience-section-arqui-tec");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            section.classList.add("show");
            observer.unobserve(section);
          }
        });
      },
      {
        threshold: 0.2 
      }
    );
    observer.observe(section);
  });`
    }
  }
  // Puedes agregar más proyectos aquí...
];