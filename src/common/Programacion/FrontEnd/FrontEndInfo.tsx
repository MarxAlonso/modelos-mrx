import { motion, AnimatePresence } from "framer-motion";
import { FaCode, FaReact, FaLightbulb, FaRocket, FaUsers } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Ventana } from "../../Terminal/Terminal";
import { EditorDemo, RutaPasos, RutaPortada, type ArchivoDemo } from "../Ruta/RutaPortada";
import { RUTA_FRONTEND } from "./rutaFrontEnd";
import "./frontend.css";

// los tres archivos de una página mínima: lo que se aprende en la ruta
const ARCHIVOS: ArchivoDemo[] = [
  {
    nombre: "index.html",
    lineas: [
      [["<section ", "t-acento"], ["class", "t-lila"], ["="], ['"hero"', "t-verde"], [">", "t-acento"]],
      [["  <h1>", "t-acento"], ["Hola, mundo"], ["</h1>", "t-acento"]],
      [["  <button ", "t-acento"], ["id", "t-lila"], ["="], ['"btn"', "t-verde"], [">", "t-acento"], ["Clic"], ["</button>", "t-acento"]],
      [["</section>", "t-acento"]],
    ],
  },
  {
    nombre: "estilos.css",
    lineas: [
      [[".hero", "t-acento"], [" {"]],
      [["  display", "t-lila"], [": grid;"]],
      [["  color", "t-lila"], [": "], ["#a78bfa", "t-verde"], [";"]],
      [["}"]],
    ],
  },
  {
    nombre: "app.js",
    lineas: [
      [["btn", "t-lila"], [".addEventListener("], ["'click'", "t-verde"], [", () => {"]],
      [["  alert", "t-acento"], ["("], ["'¡Aprendiste JS!'", "t-verde"], [");"]],
      [["});"]],
      [["// tu turno", "t-mute"]],
    ],
  },
];

export const FrontEndInfo = () => (
    <>
        <RutaPortada
            tono="frontend"
            claim="Ruta de aprendizaje · HTML · CSS · JavaScript"
            titulo={["Desarrollo", "Front-End", <>desde <em>cero</em></>]}
            bajada="Aprende a crear interfaces web modernas y responsivas utilizando las tecnologías más demandadas en el desarrollo front-end. Domina HTML, CSS, JavaScript y los frameworks más populares."
            primerPaso={{ texto: "Empezar con HTML", ruta: "/aprendiendohtml" }}
        >
            <EditorDemo titulo="~/mi-primera-web" archivos={ARCHIVOS}>
                {/* lo que ese código pinta en el navegador */}
                <div className="mrx-fe-vista" aria-hidden="true">
                    <div className="mrx-fe-vista__barra">
                        <i /><i /><i />
                        <span>localhost:5173</span>
                    </div>
                    <div className="mrx-fe-vista__pagina">
                        <b>Hola, mundo</b>
                        <span>Clic</span>
                    </div>
                </div>
            </EditorDemo>
        </RutaPortada>

        <RutaPasos pasos={RUTA_FRONTEND} />
    </>
);

const SLIDES = [
    {
        icon: FaLightbulb,
        archivo: "por-que.md",
        title: "¿Por qué Front-End?",
        description: "El desarrollo front-end es la puerta de entrada al mundo del desarrollo web. Es donde la creatividad se encuentra con la tecnología, permitiéndote crear experiencias visuales impactantes que los usuarios pueden ver y sentir.",
        color: "text-yellow-400"
    },
    {
        icon: FaUsers,
        archivo: "principiantes.md",
        title: "Para Principiantes",
        description: "Como principiante, el front-end te ofrece resultados visibles desde el primer día. Cada línea de código que escribes se traduce en cambios que puedes ver, lo que hace que el aprendizaje sea más gratificante y motivador.",
        color: "text-blue-400"
    },
    {
        icon: FaRocket,
        archivo: "tu-camino.md",
        title: "Tu Camino al Éxito",
        description: "El desarrollo front-end es una habilidad altamente demandada. Con dedicación y práctica, podrás construir interfaces modernas, sitios web responsivos y aplicaciones interactivas que impresionen a usuarios y empleadores por igual.",
        color: "text-purple-400"
    }
];

const CONSEJOS = [
    {
        shell: "linux" as const,
        ventana: "paso-a-paso.sh",
        comando: "mrx aprender --orden",
        title: "Aprende Paso a Paso",
        description: "Comienza con HTML y CSS, luego avanza hacia JavaScript y frameworks modernos.",
        icon: <FaCode className="text-pink-400" />,
    },
    {
        shell: "powershell" as const,
        ventana: "Windows PowerShell",
        comando: "New-Portfolio -Real",
        title: "Construye tu Portfolio",
        description: "Crea proyectos reales que demuestren tus habilidades a futuros empleadores.",
        icon: <FaReact className="text-cyan-400" />,
    },
    {
        shell: "linux" as const,
        ventana: "comunidad.sh",
        comando: "mrx unirse --comunidad",
        title: "Únete a la Comunidad",
        description: "Conecta con otros desarrolladores, comparte conocimientos y crece juntos.",
        icon: <FaUsers className="text-green-400" />,
    },
];

export const FrontEndDescripcion = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const slide = SLIDES[currentSlide];

    return(
        <section className="mrx-fe-viaje mrx-oscura">
            <span className="mrx-fe-viaje__trama" aria-hidden="true" />
            <div className="mrx-fe-marco">
                <span className="mrx-hud">// tu viaje</span>
                <h2 className="mrx-titulo-seccion">Tu viaje en el <em>desarrollo web</em></h2>
                <p className="mrx-fe-viaje__bajada">Descubre por qué el desarrollo front-end es el punto de partida perfecto</p>

                <Ventana shell="powershell" titulo="Windows PowerShell" className="mrx-fe-viaje__ventana">
                    <div className="mrx-fe-viaje__pestanas">
                        {SLIDES.map((s, index) => (
                            <button
                                key={s.archivo}
                                type="button"
                                aria-pressed={currentSlide === index}
                                onClick={() => setCurrentSlide(index)}
                            >
                                <span className="mrx-num">0{index + 1}</span> {s.archivo}
                            </button>
                        ))}
                    </div>

                    <p className="mrx-fe-viaje__comando">
                        <span className="t-lila">PS C:\coders-mrx&gt;</span> Get-Content <span className="t-mute">{slide.archivo}</span>
                    </p>

                    <div className="mrx-fe-viaje__lamina">
                        <AnimatePresence mode="wait" initial={false}>
                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0, x: 40 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -40 }}
                                transition={{ duration: 0.35 }}
                            >
                                <div className={`mrx-fe-viaje__icono ${slide.color}`}><slide.icon /></div>
                                <h3>{slide.title}</h3>
                                <p>{slide.description}</p>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </Ventana>

                <div className="mrx-fe-consejos">
                    {CONSEJOS.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: index * 0.15 }}
                        >
                            <Ventana shell={item.shell} titulo={item.ventana} className="mrx-fe-consejo">
                                <p>
                                    {item.shell === "linux" ? (
                                        <span className="t-verde">$ </span>
                                    ) : (
                                        <span className="t-lila">PS&gt; </span>
                                    )}
                                    {item.comando}
                                </p>
                                <div className="mrx-fe-consejo__icono">{item.icon}</div>
                                <h4>{item.title}</h4>
                                <p className="mrx-fe-consejo__texto">{item.description}</p>
                            </Ventana>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
