import { FaRocket, FaServer, FaToolbox } from "react-icons/fa";
import { Ventana, type PasoGuion } from "../../../Terminal/Terminal";
import { Leccion } from "../../Leccion/Leccion";
import { PortadaLeccion } from "../../Leccion/PortadaLeccion";
import { ejemplosSpringBootBasico } from "./data/ejemplosSpringBootBasico";

const NIVELES = [
  { ancla: "#que-es", nombre: "¿Qué es?", detalle: "Y qué necesitas" },
  { ancla: "#primeros-pasos", nombre: "Primeros pasos", detalle: `${ejemplosSpringBootBasico.length} proyectos` },
];

const GUION: PasoGuion[] = [
  { tipo: "cmd", texto: "./mvnw spring-boot:run" },
  { tipo: "out", texto: "Tomcat started on port 8080", clase: "t-mute" },
  { tipo: "cmd", texto: "curl localhost:8080/usuarios" },
  { tipo: "out", texto: "➜ [] · tu API ya responde", clase: "t-verde" },
];

const VENTAJAS = [
  "Despliegue rápido y sencillo",
  "Evita configuración repetitiva",
  "Ideal para microservicios",
  "Compatible con JPA, REST, seguridad, etc.",
];

const HERRAMIENTAS = [
  "Java 17+ (JDK)",
  "Maven o Gradle",
  "IDE (IntelliJ, VS Code, Eclipse)",
  "Spring Initializr (https://start.spring.io)",
  "MySQL o cualquier base de datos compatible",
];

export const SpringBootPortada = () => (
  <PortadaLeccion
    nombre="Spring Boot"
    Icon={FaServer}
    color="#facc15"
    bajada="Primeros pasos con Spring Boot: proyectos completos, archivo por archivo, de una API REST a formularios con validación y MySQL."
    niveles={NIVELES}
    carpeta="api"
    guion={GUION}
    ruta={{ nombre: "Spring Boot", link: "/springbootinfo" }}
  />
);

export const SpringBootPrimerosPasos = () => {
  return (
    <>
      {/* Banner explicativo */}
      <section id="que-es" className="mrx-intro mrx-oscura">
        <div className="mrx-intro__marco">
          <span className="mrx-hud">// antes de empezar</span>
          <h2 className="mrx-titulo-seccion">¿Qué es <em>Spring Boot</em>?</h2>
          <p>
            Spring Boot es un framework que simplifica el desarrollo de aplicaciones Java modernas.
            Elimina la necesidad de configurar manualmente archivos XML y proporciona un entorno listo
            para producción con embebido Tomcat, integración con bases de datos, seguridad y más.
          </p>

          <div className="mrx-intro__rejilla">
            <Ventana shell="linux" titulo="por-que.sh" className="mrx-intro__ventana">
              <p><span className="t-verde">$ </span>spring --ventajas</p>
              <h3><FaRocket /> ¿Por qué usarlo?</h3>
              <ul>
                {VENTAJAS.map((v) => <li key={v}>{v}</li>)}
              </ul>
            </Ventana>

            <Ventana shell="powershell" titulo="Windows PowerShell" className="mrx-intro__ventana">
              <p><span className="t-lila">PS&gt; </span>Get-Requisitos</p>
              <h3><FaToolbox /> Herramientas necesarias</h3>
              <ul>
                {HERRAMIENTAS.map((h) => <li key={h}>{h}</li>)}
              </ul>
            </Ventana>
          </div>
        </div>
      </section>

      <Leccion
        id="primeros-pasos"
        nivel={1}
        etiqueta="primeros pasos"
        tipo="proyecto"
        titulo={<>Proyectos <em>paso a paso</em></>}
        bajada="Cada proyecto se reparte en sus archivos reales: cambia de pestaña para ver la entidad, el repositorio, el controlador y la configuración."
        ejemplos={ejemplosSpringBootBasico}
      />
    </>
  );
};
