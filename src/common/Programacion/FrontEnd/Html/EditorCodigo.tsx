import { Loader } from "../../../Loader/Loader";
import { useState } from "react";
import Editor from "@monaco-editor/react";
import { Navegador } from "../../Leccion/Leccion";
import { definirTema } from "../../Leccion/temaEditor";
import { Ventana } from "../../../Terminal/Terminal";
import "../../Leccion/leccion.css";

type Archivo = "html" | "css";

const ARCHIVOS: { id: Archivo; nombre: string }[] = [
  { id: "html", nombre: "index.html" },
  { id: "css", nombre: "estilos.css" },
];

const HTML_INICIAL = `<h1>¡Hola Mundo!</h1>
<p>Edita este código y mira el resultado al instante.</p>
<button>Un botón</button>
`;

const CSS_INICIAL = `body {
  font-family: system-ui, sans-serif;
  padding: 16px;
}

h1 {
  color: #7c3aed;
}
`;

// el mismo punto de partida, hecho con clases de Bootstrap
const HTML_BOOTSTRAP = `<div class="container py-4">
  <h1 class="display-6">¡Hola Bootstrap!</h1>
  <p class="lead">Edita las clases y mira el resultado al instante.</p>

  <div class="alert alert-primary" role="alert">
    Una alerta hecha solo con clases.
  </div>

  <button class="btn btn-primary">Primario</button>
  <button class="btn btn-outline-secondary">Secundario</button>
</div>
`;

const CSS_BOOTSTRAP = `/* Tus estilos van después de los de Bootstrap */
.btn-primary {
  border-radius: 999px;
}
`;

const BOOTSTRAP_CDN = `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" defer></script>`;

interface EditorProps {
  /** Carga Bootstrap 5 en la vista previa y parte de un ejemplo hecho con sus clases. */
  bootstrap?: boolean;
}

export const EditorCodigo = ({ bootstrap = false }: EditorProps) => {
  const htmlInicial = bootstrap ? HTML_BOOTSTRAP : HTML_INICIAL;
  const cssInicial = bootstrap ? CSS_BOOTSTRAP : CSS_INICIAL;
  const [html, setHtml] = useState(htmlInicial);
  const [css, setCss] = useState(cssInicial);
  const [archivo, setArchivo] = useState<Archivo>("html");

  // Combinar HTML y CSS para la vista previa
  const getPreviewContent = () => {
    return `
      <html>
        <head>
          ${bootstrap ? BOOTSTRAP_CDN : ""}
          <style>${css}</style>
        </head>
        <body>${html}</body>
      </html>
    `;
  };

  return (
    <section id="editor" className="mrx-ed mrx-oscura">
      <span className="mrx-ed__trama" aria-hidden="true" />
      <div className="mrx-ed__marco">
        <header className="mrx-lec__cabecera">
          <span className="mrx-hud">// practica</span>
          <h2 className="mrx-titulo-seccion">Editor <em>en vivo</em></h2>
          <p>
            {bootstrap
              ? "Escribe HTML con clases de Bootstrap a la izquierda; el navegador de la derecha ya lo trae cargado y se actualiza solo."
              : "Escribe HTML y CSS a la izquierda; el navegador de la derecha se actualiza solo."}
          </p>
        </header>

        <div className="mrx-ed__paneles">
          {/* Panel del Editor */}
          <Ventana shell="linux" titulo="~/practica" className="mrx-ed__editor">
            <div className="mrx-ed__pestanas" role="tablist" aria-label="Archivos">
              {ARCHIVOS.map((a) => (
                <button
                  key={a.id}
                  type="button"
                  role="tab"
                  aria-selected={a.id === archivo}
                  onClick={() => setArchivo(a.id)}
                >
                  {a.nombre}
                </button>
              ))}
              <button
                type="button"
                className="mrx-ed__reiniciar"
                onClick={() => {
                  setHtml(htmlInicial);
                  setCss(cssInicial);
                }}
              >
                Reiniciar
              </button>
            </div>
            <div className="mrx-ed__monaco">
              {/* un modelo por archivo: cada pestaña conserva su texto y su historial */}
              <Editor
                height="100%"
                path={archivo === "html" ? "index.html" : "estilos.css"}
                language={archivo}
                value={archivo === "html" ? html : css}
                onChange={(value) => (archivo === "html" ? setHtml : setCss)(value || "")}
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

          {/* Panel de Vista Previa */}
          <Navegador url="localhost:5173/practica" className="mrx-ed__vista">
            <iframe
              srcDoc={getPreviewContent()}
              title="preview"
              sandbox="allow-scripts allow-forms allow-modals"
            />
          </Navegador>
        </div>
      </div>
    </section>
  );
};
