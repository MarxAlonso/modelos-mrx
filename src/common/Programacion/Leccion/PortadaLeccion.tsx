import type { CSSProperties } from "react";
import type { IconType } from "react-icons";
import { Link } from "react-router-dom";
import { Panal } from "../../Nano/Panal";
import { Guion, Ventana, type PasoGuion } from "../../Terminal/Terminal";
import "./leccion.css";

export interface NivelPortada {
  ancla: string;
  nombre: string;
  detalle: string;
}

interface PortadaProps {
  /** La tecnología, tal como va en el titular: «HTML5», «CSS3»… */
  nombre: string;
  Icon: IconType;
  /** El color de la tecnología: tiñe el titular, la celda y el fondo. */
  color: string;
  bajada: string;
  niveles: NivelPortada[];
  /** Carpeta del prompt de la terminal. */
  carpeta: string;
  guion: PasoGuion[];
  /** La ruta a la que pertenece la lección, para las migas. */
  ruta?: { nombre: string; link: string };
}

const FRONTEND = { nombre: "Front-end", link: "/frontend" };

/** Portada de una lección: título, niveles y una terminal que teclea los primeros pasos. */
export const PortadaLeccion = ({ nombre, Icon, color, bajada, niveles, carpeta, guion, ruta = FRONTEND }: PortadaProps) => (
  <section className="mrx-lec-portada mrx-oscura" style={{ "--tinte": color } as CSSProperties}>
    <div className="mrx-lec-portada__fondo" aria-hidden="true" />
    <div className="mrx-lec-portada__trama" aria-hidden="true" />
    <Panal className="mrx-lec-portada__panal" />

    <div className="mrx-lec-portada__marco">
      <div>
        <nav className="mrx-lec-portada__migas mrx-fade" style={{ animationDelay: ".5s" }} aria-label="Ruta">
          <Link to={ruta.link}>{ruta.nombre}</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{nombre}</span>
        </nav>

        <h1 className="mrx-display mrx-lec-portada__titulo">
          <span className="mrx-mask"><span className="mrx-rise">Aprendiendo</span></span>
          <span className="mrx-mask">
            <span className="mrx-rise" style={{ animationDelay: ".1s" }}>
              <span className="mrx-lec-portada__celda"><Icon /></span>
              <span className="mrx-fill" data-word={nombre}>{nombre}</span>
            </span>
          </span>
        </h1>

        <p className="mrx-lec-portada__bajada mrx-fade" style={{ animationDelay: ".8s" }}>{bajada}</p>

        <ol className="mrx-lec-portada__niveles mrx-fade" style={{ animationDelay: "1s" }}>
          {niveles.map((nivel, i) => (
            <li key={nivel.ancla}>
              <a href={nivel.ancla}>
                <span className="mrx-num">0{i + 1}</span>
                <b>{nivel.nombre}</b>
                <small>{nivel.detalle}</small>
              </a>
            </li>
          ))}
        </ol>
      </div>

      <Ventana shell="linux" titulo={`marx@coders: ~/${carpeta}`} className="mrx-lec-portada__terminal">
        <Guion
          prompt={
            <>
              <span className="t-verde">marx@coders</span>
              <span className="t-mute">:</span>
              <span className="t-acento">~/{carpeta}</span>
              <span className="t-mute">$ </span>
            </>
          }
          guion={guion}
        />
      </Ventana>
    </div>
  </section>
);
