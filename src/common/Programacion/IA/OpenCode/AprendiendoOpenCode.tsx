import { FaDownload, FaKey, FaTerminal } from "react-icons/fa";
import { Guion, Ventana, type PasoGuion } from "../../../Terminal/Terminal";
import { PortadaLeccion } from "../../Leccion/PortadaLeccion";
import { LeccionIA } from "../LeccionIA";
import { RUTA_IA_PORTADA } from "../rutaIA";
import { ejemplosOpenCode } from "./data/ejemplosOpenCode";

const NIVELES = [
  { ancla: "#que-es", nombre: "¿Qué es?", detalle: "E instalarlo" },
  { ancla: "#primeros-pasos", nombre: "Primeros pasos", detalle: `${ejemplosOpenCode.length} sesiones` },
];

const GUION: PasoGuion[] = [
  { tipo: "cmd", texto: "npm i -g opencode-ai" },
  { tipo: "out", texto: "added 1 package in 4s", clase: "t-mute" },
  { tipo: "cmd", texto: "cd cafe-aroma && opencode" },
  { tipo: "out", texto: "➜ /connect · /models · /init", clase: "t-verde" },
];

const INSTALAR: PasoGuion[] = [
  { tipo: "cmd", texto: "npm install -g opencode-ai" },
  { tipo: "out", texto: "added 1 package in 4s", clase: "t-mute" },
  { tipo: "cmd", texto: "opencode --version" },
  { tipo: "out", texto: "➜ instalado", clase: "t-verde" },
];

const PROVEEDORES = [
  "OpenCode Zen: modelos marcados como free (cambian con el tiempo)",
  "DeepSeek: de pago, céntimos por sesión (platform.deepseek.com)",
  "OpenRouter: modelos con sufijo :free y muchos de pago",
  "Ollama: modelos en tu propio equipo, sin internet",
];

export const OpenCodePortada = () => (
  <PortadaLeccion
    nombre="OpenCode"
    Icon={FaTerminal}
    color="#fab283"
    bajada="Instala el agente de IA de código abierto en tu terminal, conéctalo a modelos gratis o a la API de DeepSeek y aprende sus atajos: /init, Plan y Build, @archivos y /undo."
    niveles={NIVELES}
    carpeta="cafe-aroma"
    guion={GUION}
    ruta={RUTA_IA_PORTADA}
  />
);

export const AprendiendoOpenCode = () => (
  <>
    <section id="que-es" className="mrx-intro mrx-oscura">
      <div className="mrx-intro__marco">
        <span className="mrx-hud">// antes de empezar</span>
        <h2 className="mrx-titulo-seccion">¿Qué es <em>OpenCode</em>?</h2>
        <p>
          OpenCode es un agente de programación de código abierto. A diferencia de un chat, vive dentro de tu proyecto:
          lee tus archivos, los edita, ejecuta comandos y comprueba que lo que hizo funciona. Lo mejor para aprender es
          que no te ata a ninguna empresa: lo conectas al modelo que quieras, incluidos modelos gratis.
        </p>

        <div className="mrx-intro__rejilla">
          <Ventana shell="powershell" titulo="Windows PowerShell" className="mrx-intro__ventana">
            <h3><FaDownload /> Instalarlo</h3>
            <Guion prompt={<span className="t-lila">PS&gt; </span>} guion={INSTALAR} />
            <ul>
              <li>Necesitas Node.js 20 o superior</li>
              <li>macOS y Linux: curl -fsSL https://opencode.ai/install | bash</li>
              <li>Windows: npm, Scoop o Chocolatey; mejor aún dentro de WSL</li>
              <li>Ábrelo con opencode desde la carpeta de tu proyecto</li>
            </ul>
          </Ventana>

          <Ventana shell="linux" titulo="proveedores.sh" className="mrx-intro__ventana">
            <p><span className="t-verde">$ </span>opencode /connect</p>
            <h3><FaKey /> ¿Qué modelo uso?</h3>
            <ul>
              {PROVEEDORES.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </Ventana>
        </div>
      </div>
    </section>

    <LeccionIA
      id="primeros-pasos"
      nivel={1}
      etiqueta="primeros pasos"
      titulo={<>Tus primeras <em>sesiones</em></>}
      bajada="Cada ejemplo es una sesión grabada de OpenCode: mira cómo se teclea el prompt, qué herramientas usa el agente y qué cambia en los archivos. Usa «repetir» para verla otra vez."
      ejemplos={ejemplosOpenCode}
    />
  </>
);
