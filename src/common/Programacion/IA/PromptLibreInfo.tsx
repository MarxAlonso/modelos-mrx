import { motion } from "framer-motion";
import { RutaPasos, RutaPortada } from "../Ruta/RutaPortada";
import { OpenCode } from "./OpenCode";
import { RUTA_IA } from "./rutaIA";
import type { LineaSesion } from "./sesion";

// la sesión de la portada: un prompt claro y el agente trabajando
const DEMO: LineaSesion[] = [
  { tipo: "usuario", texto: "Añade a @src/App.tsx un botón «Reservar mesa» que abra WhatsApp. Usa la paleta del proyecto." },
  { tipo: "tool", herramienta: "read", objetivo: "src/App.tsx" },
  { tipo: "tool", herramienta: "skill", objetivo: "landing-page" },
  { tipo: "diff", archivo: "src/App.tsx", lineas: "+ <a href={WHATSAPP} className=\"bg-cafe text-crema\">\n+   Reservar mesa\n+ </a>" },
  { tipo: "tool", herramienta: "bash", objetivo: "pnpm build", salida: "✓ built in 1.8s" },
  { tipo: "ia", texto: "Listo: botón añadido y la build pasa." },
];

/** El bucle de un agente: lo que pasa entre que envías el prompt y recibes el resultado. */
const BUCLE = [
  { paso: "Tu prompt", detalle: "Qué quieres, con contexto, límites y formato. Más AGENTS.md y las skills que encajen." },
  { paso: "El modelo piensa", detalle: "DeepSeek, un modelo gratis de Zen o uno local decide qué hacer a continuación." },
  { paso: "Usa herramientas", detalle: "Lee archivos, busca, edita y ejecuta comandos en tu proyecto, de verdad." },
  { paso: "Comprueba", detalle: "Mira el resultado (la build, los tests) y vuelve a pensar si algo falla." },
];

export const PromptLibreInfo = () => (
  <>
    <RutaPortada
      tono="ia"
      claim="Ruta de aprendizaje · OpenCode · Prompts · Skills"
      titulo={["Prompt", "Libre", <>con <em>OpenCode</em></>]}
      bajada="Aprende a programar más rápido con IA sin pagar suscripciones: OpenCode en tu terminal, modelos gratis o la API de DeepSeek, y lo que de verdad marca la diferencia: saber escribir prompts y enseñarle a la IA tus reglas con skills."
      primerPaso={{ texto: "Empezar con OpenCode", ruta: "/aprendiendoopencode" }}
    >
      <OpenCode sesion={DEMO} modelo="zen" carpeta="cafe-aroma" bucle controles={false} className="mrx-oc--baja" />
    </RutaPortada>

    <section className="mrx-fe-ruta mrx-oscura">
      <div className="mrx-fe-marco">
        <span className="mrx-hud">// cómo funciona</span>
        <h2 className="mrx-titulo-seccion">El bucle de un <em>agente</em></h2>
        <p className="mrx-ia-bucle__bajada">
          Un chat responde con texto; un agente actúa. Entender este bucle explica por qué un buen prompt
          ahorra tiempo y dinero: cada vuelta gasta tokens, y un pedido ambiguo provoca vueltas de más.
        </p>
        <ol className="mrx-ia-bucle">
          {BUCLE.map((b, i) => (
            <motion.li
              key={b.paso}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span className="mrx-num">0{i + 1}</span>
              <h3>{b.paso}</h3>
              <p>{b.detalle}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>

    <RutaPasos pasos={RUTA_IA} />
  </>
);
