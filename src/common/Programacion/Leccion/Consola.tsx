import { useCallback, useEffect, useRef, useState } from "react";

export interface LineaConsola {
  nivel: "log" | "warn" | "error";
  texto: string;
}

/**
 * El documento que ejecuta el código. Corre en un iframe aislado (sin acceso
 * a la página) y devuelve por mensajes todo lo que el código escribe en la
 * consola, también lo que llega tarde: temporizadores y promesas.
 */
const documento = (codigo: string, tanda: number) => {
  const arnes = `(() => {
    const enviar = (nivel, texto) => parent.postMessage({ mrxConsola: ${tanda}, nivel, texto }, "*");
    const formato = (valor) => {
      if (typeof valor === "string") return valor;
      if (valor instanceof Error) return valor.name + ": " + valor.message;
      if (typeof valor === "function") return valor.toString();
      try {
        const json = JSON.stringify(valor, null, 1);
        // en una línea, como lo imprime la consola
        return json === undefined ? String(valor) : json.replace(/\\n\\s*/g, " ");
      } catch {
        return String(valor);
      }
    };
    for (const nivel of ["log", "info", "warn", "error", "debug"]) {
      console[nivel] = (...args) =>
        enviar(nivel === "warn" || nivel === "error" ? nivel : "log", args.map(formato).join(" "));
    }
    window.onerror = (mensaje) => { enviar("error", String(mensaje)); return true; };
    window.addEventListener("unhandledrejection", (e) => enviar("error", "Uncaught (in promise) " + formato(e.reason)));
    window.__mrxError = (e) => enviar("error", "Uncaught " + formato(e));
  })();`;
  // un `</script>` dentro del código cerraría la etiqueta antes de tiempo
  const seguro = codigo.replace(/<\/script/gi, "<\\/script");
  // dentro de una función: las variables del código no chocan con las del
  // navegador (`name`, `top`…) y se puede usar `await` en el nivel superior
  return `<!DOCTYPE html><html><body><script>${arnes}</script><script>(async () => {\n${seguro}\n})().catch(__mrxError);</script></body></html>`;
};

/**
 * Ejecuta JavaScript de verdad y devuelve lo que imprime. `ejecutar` lanza
 * una tanda nueva; lo que aún llegue de una tanda anterior se descarta.
 */
export function useConsola() {
  const [lineas, setLineas] = useState<LineaConsola[]>([]);
  const [tanda, setTanda] = useState(0);
  const [codigo, setCodigo] = useState<string | null>(null);
  const marco = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const onMensaje = (e: MessageEvent) => {
      if (e.source !== marco.current?.contentWindow || e.data?.mrxConsola !== tanda) return;
      setLineas((previas) => [...previas, { nivel: e.data.nivel, texto: String(e.data.texto) }]);
    };
    window.addEventListener("message", onMensaje);
    return () => window.removeEventListener("message", onMensaje);
  }, [tanda]);

  const ejecutar = useCallback((nuevo: string) => {
    setLineas([]);
    setCodigo(nuevo);
    setTanda((t) => t + 1);
  }, []);

  const iframe =
    codigo === null ? null : (
      <iframe
        key={tanda}
        ref={marco}
        title="Ejecución del código"
        srcDoc={documento(codigo, tanda)}
        sandbox="allow-scripts"
        hidden
      />
    );

  return { lineas, ejecutar, iframe, ejecutado: codigo !== null };
}

interface SalidaProps {
  lineas: LineaConsola[];
  /** Qué mostrar cuando el código no ha impreso nada. */
  vacio: string;
}

/** La salida de la consola, línea a línea. */
export const SalidaConsola = ({ lineas, vacio }: SalidaProps) =>
  lineas.length ? (
    <>
      {lineas.map((linea, i) => (
        <p key={i} className={`mrx-consola__linea mrx-consola__linea--${linea.nivel}`}>
          {linea.texto}
        </p>
      ))}
    </>
  ) : (
    <p className="t-mute">{vacio}</p>
  );
