import { Loader } from "../../../Loader/Loader";
import { useState } from "react";
import Editor from "@monaco-editor/react";
import { FaPlay } from "react-icons/fa";
import { Ventana } from "../../../Terminal/Terminal";
import { SalidaConsola, useConsola } from "../../Leccion/Consola";
import { definirTema } from "../../Leccion/temaEditor";
import "../../Leccion/leccion.css";

const JS_INICIAL = `// Escribe tu código JavaScript aquí
const lenguajes = ["HTML", "CSS", "JavaScript"];

for (const lenguaje of lenguajes) {
  console.log("Aprendiendo " + lenguaje);
}

console.log("Total:", lenguajes.length);
`;

export const EditorCodigoJs = () => {
  const [javascript, setJavascript] = useState(JS_INICIAL);
  // el código corre en un iframe aislado que devuelve lo que imprime
  const consola = useConsola();

  return (
    <section id="editor" className="mrx-ed mrx-oscura">
      <span className="mrx-ed__trama" aria-hidden="true" />
      <div className="mrx-ed__marco">
        <header className="mrx-lec__cabecera">
          <span className="mrx-hud">// practica</span>
          <h2 className="mrx-titulo-seccion">Consola <em>en vivo</em></h2>
          <p>Escribe JavaScript a la izquierda y pulsa Ejecutar: la consola de la derecha muestra lo que imprime tu código.</p>
        </header>

        <div className="mrx-ed__paneles">
          {/* Panel del Editor */}
          <Ventana shell="linux" titulo="~/practica" className="mrx-ed__editor">
            <div className="mrx-ed__pestanas">
              <button type="button" aria-selected="true">app.js</button>
              <button type="button" className="mrx-ed__reiniciar" onClick={() => setJavascript(JS_INICIAL)}>
                Reiniciar
              </button>
              <button type="button" className="mrx-ed__ejecutar" onClick={() => consola.ejecutar(javascript)}>
                <FaPlay /> Ejecutar
              </button>
            </div>
            <div className="mrx-ed__monaco">
              <Editor
                height="100%"
                defaultLanguage="javascript"
                value={javascript}
                onChange={(value) => setJavascript(value || "")}
                beforeMount={definirTema}
                theme="mrx"
                loading={<Loader texto="Cargando editor" bloque />}
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                  fontFamily: "'JetBrains Mono Variable', Consolas, monospace",
                  scrollBeyondLastLine: false,
                  wordWrap: "on",
                  padding: { top: 14 },
                  automaticLayout: true,
                }}
              />
            </div>
          </Ventana>

          {/* Panel de Salida */}
          <Ventana shell="linux" titulo="marx@coders: ~/consola" className="mrx-ed__consola mrx-consola">
            <div className="mrx-consola__salida" aria-live="polite">
              <p>
                <span className="t-verde">$ </span>node app.js
              </p>
              {consola.ejecutado ? (
                <SalidaConsola lineas={consola.lineas} vacio="// Tu código no imprimió nada: usa console.log() para ver valores." />
              ) : (
                <p className="t-mute">// La salida de tu código aparecerá aquí</p>
              )}
            </div>
          </Ventana>
          {consola.iframe}
        </div>
      </div>
    </section>
  );
};
