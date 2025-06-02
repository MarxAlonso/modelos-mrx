import { motion } from "framer-motion";
import { useState } from "react";
import Editor from "@monaco-editor/react";

export const EditorCodigo = () => {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");

  // Combinar HTML y CSS para la vista previa
  const getPreviewContent = () => {
    return `
      <html>
        <head>
          <style>${css}</style>
        </head>
        <body>${html}</body>
      </html>
    `;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="grid grid-cols-2 gap-4 h-screen bg-gray-900 p-4"
    >
      {/* Panel del Editor */}
      <div className="flex flex-col gap-4">
        <div className="bg-gray-800 rounded-lg p-4">
          <h3 className="text-white mb-2">HTML</h3>
          <Editor
            height="200px"
            defaultLanguage="html"
            value={html}
            onChange={(value) => setHtml(value || "")}
            theme="vs-dark"
            options={{
              minimap: { enabled: false },
              fontSize: 14,
            }}
          />
        </div>
        <div className="bg-gray-800 rounded-lg p-4">
          <h3 className="text-white mb-2">CSS</h3>
          <Editor
            height="200px"
            defaultLanguage="css"
            value={css}
            onChange={(value) => setCss(value || "")}
            theme="vs-dark"
            options={{
              minimap: { enabled: false },
              fontSize: 14,
            }}
          />
        </div>
      </div>

      {/* Panel de Vista Previa */}
      <motion.div
        className="bg-white rounded-lg overflow-hidden"
        initial={{ x: 100 }}
        animate={{ x: 0 }}
      >
        <iframe
          srcDoc={getPreviewContent()}
          title="preview"
          className="w-full h-full border-none"
          sandbox="allow-scripts"
        />
      </motion.div>
    </motion.div>
  );
};