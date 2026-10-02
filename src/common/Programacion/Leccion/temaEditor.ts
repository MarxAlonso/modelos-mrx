import type { BeforeMount } from "@monaco-editor/react";

// el tema del editor: el oscuro de VS Code sobre el fondo de las terminales
export const definirTema: BeforeMount = (monaco) => {
  monaco.editor.defineTheme("mrx", {
    base: "vs-dark",
    inherit: true,
    rules: [],
    colors: {
      "editor.background": "#0a0614",
      "editor.lineHighlightBackground": "#150d26",
      "editorLineNumber.foreground": "#5b5470",
      "editorLineNumber.activeForeground": "#a78bfa",
      "editorCursor.foreground": "#a78bfa",
      "editor.selectionBackground": "#4c1d9580",
    },
  });
};
