import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { CONTACTO_URL, NavbarMenu, REDES } from "./NavbarData";
import "./navbar.css";

type EstadoRail = "visible" | "oculto";

const esExterno = (link: string) => link.startsWith("http");

interface EnlaceProps {
  link: string;
  className?: string;
  activo?: boolean;
  onClick?: () => void;
  children: ReactNode;
}

const Enlace = ({ link, className, activo, onClick, children }: EnlaceProps) =>
  esExterno(link) ? (
    <a href={link} target="_blank" rel="noopener noreferrer" className={className} onClick={onClick}>
      {children}
    </a>
  ) : (
    <Link to={link} className={className} data-activo={activo} onClick={onClick}>
      {children}
    </Link>
  );

const Burger = ({ abierto, onClick }: { abierto: boolean; onClick: () => void }) => (
  <button
    type="button"
    className="mrx-burger"
    data-abierto={abierto}
    aria-expanded={abierto}
    aria-controls="menu-principal"
    onClick={onClick}
  >
    <span className="mrx-solo-lector">{abierto ? "Cerrar menú" : "Abrir menú"}</span>
    <i /><i /><i />
  </button>
);

/**
 * Menú del sitio: un rail fijo a la izquierda en escritorio y una barra
 * superior en móvil; ambos abren el menú a pantalla completa.
 * El rail se ensambla y se desmonta como nanotecnología: un frente de celdas
 * hexagonales lo recorre de arriba abajo.
 */
export const Navbar = () => {
  const { pathname } = useLocation();
  const [abierto, setAbierto] = useState(false);
  // lo que el visitante elige con los botones manda sobre el comportamiento automático
  const [eleccion, setEleccion] = useState<EstadoRail | null>(null);
  // sobre el hero del inicio el rail arranca desmontado para no taparlo
  const [porScroll, setPorScroll] = useState<EstadoRail>(pathname === "/" ? "oculto" : "visible");
  const burgerRail = useRef<HTMLDivElement>(null);

  const estado = eleccion ?? porScroll;

  // el rail se desmonta sobre el hero y se ensambla al bajar
  useEffect(() => {
    const hero = document.getElementById("hero");
    const medir = () =>
      setPorScroll(!hero || window.scrollY > hero.offsetHeight * 0.6 ? "visible" : "oculto");
    medir();
    window.addEventListener("scroll", medir, { passive: true });
    return () => window.removeEventListener("scroll", medir);
  }, [pathname]);

  // el hero lee este atributo para apartar su texto de debajo del rail
  useEffect(() => {
    document.documentElement.dataset.rail = estado;
  }, [estado]);

  useEffect(() => {
    document.body.style.overflow = abierto ? "hidden" : "";
    if (!abierto) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAbierto(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [abierto]);

  const cerrar = useCallback(() => setAbierto(false), []);
  const alternar = () => {
    // el menú se abre pegado al rail: si estaba desmontado, se ensambla
    if (!abierto && estado === "oculto") setEleccion("visible");
    setAbierto(!abierto);
  };

  return (
    <>
      <aside className="mrx-rail mrx-oscura" id="rail" data-estado={estado}>
        <div className="mrx-rail__cuerpo">
          <Link to="/" aria-label="Ir al inicio" className="mrx-rail__marca" onClick={cerrar}>
            <img src="/hacker.png" alt="" width="40" height="40" />
          </Link>

          <div className="mrx-rail__centro" ref={burgerRail}>
            <Burger abierto={abierto} onClick={alternar} />
            <span className="mrx-hud mrx-hud--mute mrx-rail__texto" aria-hidden="true">
              {abierto ? "Cerrar" : "Menú"}
            </span>
            <button
              type="button"
              className="mrx-rail__ocultar"
              aria-label="Ocultar la barra del menú"
              title="Ocultar"
              onClick={() => {
                setAbierto(false);
                setEleccion("oculto");
              }}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m14 6-6 6 6 6" /></svg>
            </button>
          </div>

          <a href={CONTACTO_URL} target="_blank" rel="noopener noreferrer" className="mrx-rail__cta">
            Contacto
          </a>
        </div>
        <span className="mrx-rail__nano" aria-hidden="true" />
        <span className="mrx-rail__haz" aria-hidden="true" />
      </aside>

      {/* Con el rail desmontado queda este botón para volver a ensamblarlo. */}
      <button
        type="button"
        className="mrx-nano-boton mrx-oscura"
        aria-controls="rail"
        aria-label="Mostrar la barra del menú"
        onClick={() => {
          setEleccion("visible");
          burgerRail.current?.querySelector("button")?.focus({ preventScroll: true });
        }}
      >
        <i /><i /><i />
      </button>

      {/* En móvil el rail desaparece y manda esta barra. */}
      <header className="mrx-topbar mrx-oscura">
        <Link to="/" aria-label="Ir al inicio" className="mrx-topbar__marca" onClick={cerrar}>
          <img src="/hacker.png" alt="" width="34" height="34" />
          <span>Coders <em>MRX</em></span>
        </Link>

        <div className="mrx-topbar__acciones">
          <a href={CONTACTO_URL} target="_blank" rel="noopener noreferrer" className="mrx-hud mrx-topbar__contacto">
            Contacto
          </a>
          <Burger abierto={abierto} onClick={alternar} />
        </div>
      </header>

      {/* Menú a pantalla completa; lo abren el rail y la topbar. */}
      <div
        id="menu-principal"
        className="mrx-menu mrx-oscura"
        data-abierto={abierto}
        aria-hidden={!abierto}
        inert={!abierto}
      >
        <span className="mrx-menu__trama" aria-hidden="true" />

        {/* cierre propio del menú: el del rail queda a la izquierda y lejos */}
        <button type="button" className="mrx-menu__cerrar" aria-label="Cerrar menú" onClick={cerrar}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        </button>

        <nav className="mrx-menu__nav" aria-label="Menú principal">
          <ul className="mrx-menu__lista">
            {NavbarMenu.map((item, i) => (
              <li key={item.id} className="mrx-menu__item">
                {item.link ? (
                  <Enlace
                    link={item.link}
                    className="mrx-menu__enlace"
                    activo={pathname === item.link}
                    onClick={cerrar}
                  >
                    <span className="mrx-hud mrx-hud--mute mrx-menu__indice">0{i + 1}</span>
                    <span className="mrx-menu__texto mrx-display">{item.title}</span>
                    {esExterno(item.link) && <span className="mrx-menu__fuera" aria-hidden="true">↗</span>}
                  </Enlace>
                ) : (
                  <div className="mrx-menu__enlace mrx-menu__enlace--grupo">
                    <span className="mrx-hud mrx-hud--mute mrx-menu__indice">0{i + 1}</span>
                    <span className="mrx-menu__texto mrx-display">{item.title}</span>
                  </div>
                )}

                {item.submenu && (
                  <ul className="mrx-menu__sub">
                    {item.submenu.map((sub) => (
                      <li key={sub.title}>
                        {sub.link ? (
                          <Enlace
                            link={sub.link}
                            className="mrx-menu__subenlace"
                            activo={pathname === sub.link}
                            onClick={cerrar}
                          >
                            {sub.title}
                          </Enlace>
                        ) : (
                          <span className="mrx-menu__subenlace mrx-menu__subenlace--pronto">
                            {sub.title} <small>Pronto</small>
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <div className="mrx-menu__lado">
            <div className="mrx-menu__bloque">
              <span className="mrx-hud">Sígueme</span>
              <div className="mrx-menu__redes">
                {REDES.map((r) => (
                  <a key={r.nombre} href={r.url} target="_blank" rel="noopener noreferrer">
                    {r.nombre}
                  </a>
                ))}
              </div>
            </div>

            <a href={CONTACTO_URL} target="_blank" rel="noopener noreferrer" className="mrx-cta mrx-cta--lleno mrx-menu__cta">
              <i />Contacto
            </a>

            <p className="mrx-menu__claim">
              Módulos web listos para usar y rutas para aprender a programar: de HTML, CSS y
              JavaScript a APIs con Spring Boot.
            </p>
          </div>
        </nav>
      </div>
    </>
  );
};
