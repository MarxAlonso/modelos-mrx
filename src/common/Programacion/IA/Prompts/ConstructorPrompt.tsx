import { useState, type CSSProperties } from "react";
import { FaCheck, FaRegCopy } from "react-icons/fa";
import { Ventana } from "../../../Terminal/Terminal";
import { COLORES, ESCENARIOS, PESOS, type PiezaPrompt } from "./data/escenariosPrompt";
import "../ia.css";

const TITULOS = ["Prompt flojo", "Va tomando forma", "Buen prompt", "Prompt excelente"];
const TINTES = ["#f87171", "#facc15", "#a3e635", "#4ade80"];

/** En qué escalón cae una puntuación de 0 a 100. */
const escalon = (puntos: number) => (puntos < 30 ? 0 : puntos < 60 ? 1 : puntos < 85 ? 2 : 3);

/**
 * Simulador para aprender a escribir prompts: se encienden las piezas de un
 * buen prompt, se ve cómo crece y qué haría la IA con él en cada momento.
 */
export const ConstructorPrompt = () => {
  const [escenario, setEscenario] = useState(0);
  const [activas, setActivas] = useState<Set<PiezaPrompt["clave"]>>(new Set());
  const [copiado, setCopiado] = useState(false);

  const datos = ESCENARIOS[escenario];
  const puntos = [...activas].reduce((t, c) => t + PESOS[c], 0);
  const nivel = escalon(puntos);

  // el orden del prompt es siempre el mismo, se enciendan en el orden que se enciendan
  const lineas = datos.piezas
    .filter((p) => activas.has(p.clave))
    .map((p) => ({ clave: p.clave, texto: p.texto }));
  if (!activas.has("tarea")) lineas.splice(activas.has("rol") ? 1 : 0, 0, { clave: "tarea", texto: datos.base });
  const textoPrompt = lineas.map((l) => l.texto).join("\n\n");

  const alternar = (clave: PiezaPrompt["clave"]) => {
    const nuevas = new Set(activas);
    if (nuevas.has(clave)) nuevas.delete(clave);
    else nuevas.add(clave);
    setActivas(nuevas);
    setCopiado(false);
  };

  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(textoPrompt);
      setCopiado(true);
      window.setTimeout(() => setCopiado(false), 1800);
    } catch {
      // sin permiso de portapapeles: el prompt sigue seleccionable a mano
    }
  };

  const faltan = datos.piezas.filter((p) => !activas.has(p.clave));

  return (
    <section id="constructor" className="mrx-cp mrx-oscura">
      <div className="mrx-cp__marco">
        <span className="mrx-hud">// simulador · constructor de prompts</span>
        <h2 className="mrx-titulo-seccion">Arma un prompt <em>pieza a pieza</em></h2>
        <p>
          Un buen prompt no es largo: es completo. Elige un pedido, enciende sus piezas y mira cómo cambia
          lo que haría la IA. Cuando llegues al verde, copia el prompt y pruébalo tú en OpenCode.
        </p>

        <div className="mrx-cp__escenarios" role="group" aria-label="Pedido">
          {ESCENARIOS.map((e, i) => (
            <button
              key={e.nombre}
              type="button"
              aria-pressed={i === escenario}
              onClick={() => {
                setEscenario(i);
                setActivas(new Set());
                setCopiado(false);
              }}
            >
              {e.nombre}
            </button>
          ))}
        </div>

        <div className="mrx-cp__cuerpo">
          <div className="mrx-cp__piezas">
            {datos.piezas.map((p) => (
              <button
                key={p.clave}
                type="button"
                className="mrx-cp__pieza"
                aria-pressed={activas.has(p.clave)}
                onClick={() => alternar(p.clave)}
                style={{ "--tinte": COLORES[p.clave] } as CSSProperties}
              >
                <span className="mrx-cp__caja" aria-hidden="true">{activas.has(p.clave) && <FaCheck />}</span>
                <b>{p.nombre} <span className="mrx-num mrx-cp__peso">+{PESOS[p.clave]}</span></b>
                <small>{p.ayuda}</small>
              </button>
            ))}
          </div>

          <div className="mrx-cp__resultado">
            <Ventana shell="linux" titulo="opencode — tu prompt" className="mrx-cp__prompt">
              <div className="mrx-lec__barra">
                <span className="mrx-lec__dato">{textoPrompt.split(/\s+/).length} palabras</span>
                <button type="button" className="mrx-lec__copiar" onClick={copiar}>
                  {copiado ? <FaCheck /> : <FaRegCopy />}
                  {copiado ? "Copiado" : "Copiar"}
                </button>
              </div>
              {lineas.map((l) => (
                <p key={l.clave} data-tinte style={{ "--tinte": COLORES[l.clave] } as CSSProperties}>
                  {l.texto}
                </p>
              ))}
              <span className="mrx-term__cursor" />
            </Ventana>

            <div className="mrx-cp__medidor">
              <div className="mrx-cp__medidor-cabecera">
                <span>Calidad del prompt</span>
                <b>{puntos}<small>/100</small></b>
              </div>
              <div className="mrx-cp__barra" role="meter" aria-valuemin={0} aria-valuemax={100} aria-valuenow={puntos} aria-label="Calidad del prompt">
                <i style={{ width: `${Math.max(puntos, 3)}%`, background: TINTES[nivel] }} />
              </div>
            </div>

            <div className="mrx-cp__veredicto" aria-live="polite">
              <h3 style={{ color: TINTES[nivel] }}>{TITULOS[nivel]}</h3>
              <p><b>Lo que hará la IA:</b> {datos.respuestas[nivel]}</p>
              {faltan.length > 0 && (
                <ul>
                  {faltan.slice(0, 3).map((p) => (
                    <li key={p.clave} data-falta>Falta {p.nombre.toLowerCase()}: {p.ayuda.toLowerCase()}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
