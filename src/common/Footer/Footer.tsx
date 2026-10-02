import { FaGithub, FaGlobe, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./footer.css";

interface EnlacePie {
  texto: string;
  /** Sin enlace: la sección todavía no existe. */
  link?: string;
}

const COLUMNAS: { titulo: string; enlaces: EnlacePie[] }[] = [
  {
    titulo: "Enlaces",
    enlaces: [
      { texto: "Inicio", link: "/" },
      { texto: "Front-end", link: "/frontend" },
      { texto: "Módulos Estáticos", link: "/modulosestaticos" },
    ],
  },
  {
    titulo: "Módulos",
    enlaces: [
      { texto: "Módulos Estáticos", link: "/modulosestaticos" },
      { texto: "Módulos Dinámicos", link: "/modulosdinamicos" },
      { texto: "Módulos Animados" },
    ],
  },
  {
    titulo: "Programación",
    enlaces: [
      { texto: "Front-end", link: "/frontend" },
      { texto: "Spring Boot", link: "/springbootinfo" },
      { texto: "Prompt Libre · IA", link: "/promptlibre" },
    ],
  },
];

const REDES = [
  { nombre: "GitHub", url: "https://github.com/MarxAlonso", Icon: FaGithub },
  { nombre: "Portafolio", url: "https://developer-marx.netlify.app/", Icon: FaGlobe },
  { nombre: "WhatsApp", url: "https://wa.me/922061911", Icon: FaWhatsapp },
];

export const Footer = () => {
  return (
    <footer className="mrx-pie mrx-oscura">
      <span className="mrx-pie__trama" aria-hidden="true" />
      {/* el haz que cierra la página, como el que suelda el rail */}
      <span className="mrx-pie__haz" aria-hidden="true" />

      <div className="mrx-pie__marco">
        <div className="mrx-pie__rejilla">
          {/* Logo y descripción */}
          <div className="mrx-pie__marca">
            <Link to="/" className="mrx-pie__logo">
              <img src="/hacker.png" alt="" width="44" height="44" />
              <span>Coders <em>MRX</em></span>
            </Link>
            <p>
              Explora nuestra colección de diseños HTML y CSS listos para usar.
              Encuentra inspiración y mejora tus proyectos web.
            </p>
            <div className="mrx-pie__redes">
              {REDES.map(({ nombre, url, Icon }) => (
                <a key={nombre} href={url} target="_blank" rel="noopener noreferrer" aria-label={nombre} title={nombre}>
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {COLUMNAS.map((columna, i) => (
            <nav key={columna.titulo} aria-label={columna.titulo}>
              <h2 className="mrx-hud">
                <span className="mrx-num">0{i + 1}</span> {columna.titulo}
              </h2>
              <ul>
                {columna.enlaces.map((enlace) => (
                  <li key={enlace.texto}>
                    {enlace.link ? (
                      <Link to={enlace.link}>{enlace.texto}</Link>
                    ) : (
                      <span className="mrx-pie__pronto">
                        {enlace.texto} <small>Pronto</small>
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <p className="mrx-display mrx-pie__letrero" aria-hidden="true">
          Coders MRX
        </p>

        {/* Copyright Section */}
        <div className="mrx-pie__base">
          <span>© {new Date().getFullYear()} Marx Chipana. Todos los derechos reservados.</span>
          <span className="mrx-pie__prompt" aria-hidden="true">
            <b>marx@coders</b>:<i>~</i>$ exit<span className="mrx-term__cursor" />
          </span>
        </div>
      </div>
    </footer>
  );
};
