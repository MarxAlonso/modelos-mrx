import banner1Image from "../../../assets/images/banner1.png";

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
  }
  // Puedes agregar más proyectos aquí...
];