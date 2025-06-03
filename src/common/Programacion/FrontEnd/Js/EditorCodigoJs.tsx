import { motion } from "framer-motion";
import { useState } from "react";
import Editor from "@monaco-editor/react";

export const EditorCodigoJs = () => {
  const [javascript, setJavascript] = useState(
    "// Escribe tu código JavaScript aquí\nconsole.log('¡Hola Mundo!');\n"
  );
  const [output, setOutput] = useState("");

  // Función para ejecutar el código JavaScript de forma segura
  const executeJavaScript = () => {
    try {
      // Crear un iframe aislado para ejecutar el código de forma segura
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      document.body.appendChild(iframe);

      // Asegurarnos de que el iframe tiene un contentWindow
      const iframeWindow = iframe.contentWindow;
      if (!iframeWindow) {
        throw new Error('No se pudo inicializar el iframe');
        return;
      }

      // Capturar la salida de console.log
      const logs: string[] = [];
      const originalConsole = iframeWindow.console;
      (iframeWindow as any).console = {
        log: (...args: any[]) => {
          originalConsole.log(...args);
          logs.push(args.map(arg => 
            typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
          ).join(' '));
        }
      };

      // Ejecutar el código de forma segura
      const executeCode = new (iframeWindow as any).Function(javascript);
      executeCode();

      // Actualizar la salida
      setOutput(logs.join('\n'));

      // Limpiar
      document.body.removeChild(iframe);
    } catch (error) {
      setOutput(`Error: ${error instanceof Error ? error.message : String(error)}`);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="grid grid-cols-2 gap-4 h-screen bg-gray-900 p-4"
    >
      {/* Panel del Editor */}
      <div className="bg-gray-800 rounded-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-white">JavaScript</h3>
          <button
            onClick={executeJavaScript}
            className="px-4 py-2 bg-yellow-500 text-gray-900 rounded-lg hover:bg-yellow-600 transition-colors"
          >
            Ejecutar
          </button>
        </div>
        <Editor
          height="400px"
          defaultLanguage="javascript"
          value={javascript}
          onChange={(value) => setJavascript(value || "")}
          theme="vs-dark"
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            padding: { top: 10 },
          }}
        />
      </div>

      {/* Panel de Salida */}
      <motion.div
        className="bg-gray-800 rounded-lg p-4"
        initial={{ x: 100 }}
        animate={{ x: 0 }}
      >
        <h3 className="text-white mb-4">Consola</h3>
        <pre className="bg-gray-900 p-4 rounded-lg text-green-400 font-mono text-sm h-[400px] overflow-auto">
          {output || "// La salida de tu código aparecerá aquí"}
        </pre>
      </motion.div>
    </motion.div>
  );
};