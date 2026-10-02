/** Un trozo de código y la clase que lo colorea. */
export type Trozo = [texto: string, clase?: string];

/**
 * Quita la sangría que el código hereda de estar escrito dentro de un
 * template literal: la primera línea va pegada al margen y las demás traen
 * la sangría del archivo de datos.
 */
export function sinSangria(codigo: string): string {
  const [primera, ...resto] = codigo.replace(/\t/g, "  ").split("\n");
  const sangrias = resto.filter((l) => l.trim()).map((l) => l.match(/^ */)![0].length);
  const comun = sangrias.length ? Math.min(...sangrias) : 0;
  return [primera, ...resto.map((l) => l.slice(comun))].join("\n").trim();
}

/** Trocea HTML en etiquetas, atributos, valores y comentarios. */
function trocearHtml(codigo: string): Trozo[] {
  const trozos: Trozo[] = [];
  let enEtiqueta = false;
  let i = 0;

  while (i < codigo.length) {
    const resto = codigo.slice(i);
    let m: RegExpMatchArray | null;

    if (!enEtiqueta) {
      if ((m = resto.match(/^<!--[\s\S]*?(-->|$)/))) {
        trozos.push([m[0], "t-mute"]);
      } else if ((m = resto.match(/^<\/?[\w!-]+/))) {
        trozos.push([m[0], "t-acento"]);
        enEtiqueta = true;
      } else {
        // texto hasta la siguiente etiqueta; un `<` suelto se toma como texto
        m = resto.match(/^[\s\S][^<]*/)!;
        trozos.push([m[0]]);
      }
    } else if ((m = resto.match(/^\/?>/))) {
      trozos.push([m[0], "t-acento"]);
      enEtiqueta = false;
    } else if ((m = resto.match(/^("[^"]*"?|'[^']*'?)/))) {
      trozos.push([m[0], "t-verde"]);
    } else if ((m = resto.match(/^[^\s=>"'/]+/))) {
      trozos.push([m[0], "t-lila"]);
    } else {
      trozos.push([resto[0]]);
    }
    i += m ? m[0].length : 1;
  }
  return trozos;
}

/** Trocea CSS en comentarios, selectores y declaraciones. */
function trocearCss(codigo: string): Trozo[] {
  const trozos: Trozo[] = [];
  // primero se apartan los comentarios; el resto se corta en cada `{`, `}` o `;`
  for (const parte of codigo.split(/(\/\*[\s\S]*?(?:\*\/|$))/)) {
    if (parte.startsWith("/*")) {
      trozos.push([parte, "t-mute"]);
      continue;
    }
    for (const [, texto, corte] of parte.matchAll(/([^{};]*)([{};]?)/g)) {
      if (corte === "{") {
        // lo que precede a una llave es un selector o una regla @
        trozos.push([texto, "t-acento"]);
      } else {
        const declaracion = texto.match(/^(\s*)([\w-]+)(\s*:)([\s\S]*)$/);
        if (declaracion) {
          trozos.push([declaracion[1]], [declaracion[2], "t-lila"], [declaracion[3] + declaracion[4]]);
        } else if (texto) {
          trozos.push([texto]);
        }
      }
      if (corte) trozos.push([corte]);
    }
  }
  return trozos;
}

const PALABRAS_JS =
  "const|let|var|function|return|if|else|for|while|do|switch|case|break|continue|class|extends|new|this|super|static|async|await|try|catch|finally|throw|typeof|instanceof|of|in|import|export|from|default|true|false|null|undefined";

const PALABRAS_JAVA =
  "abstract|boolean|break|byte|case|catch|char|class|continue|default|do|double|else|enum|extends|final|finally|float|for|if|implements|import|instanceof|int|interface|long|new|package|private|protected|public|return|short|static|super|switch|this|throw|throws|try|var|void|while|true|false|null";

/**
 * Trocea un lenguaje de la familia de C con un solo patrón, por orden:
 * comentarios, cadenas, palabras clave (y anotaciones) y números.
 */
function trocearConPatron(codigo: string, patron: RegExp): Trozo[] {
  const trozos: Trozo[] = [];
  let ultimo = 0;
  for (const m of codigo.matchAll(patron)) {
    const inicio = m.index ?? 0;
    if (inicio > ultimo) trozos.push([codigo.slice(ultimo, inicio)]);
    trozos.push([m[0], m[1] ? "t-mute" : m[2] ? "t-verde" : m[3] ? "t-acento" : "t-lila"]);
    ultimo = inicio + m[0].length;
  }
  if (ultimo < codigo.length) trozos.push([codigo.slice(ultimo)]);
  return trozos;
}

const COMENTARIO = /(\/\/[^\n]*|\/\*[\s\S]*?\*\/)/.source;
const NUMERO = /\b(\d+(?:\.\d+)?[fFdDlL]?)\b/.source;

const PATRON_JS = new RegExp(
  [
    COMENTARIO,
    /(`(?:\\[\s\S]|[^`\\])*`|"(?:\\.|[^"\\\n])*"|'(?:\\.|[^'\\\n])*')/.source,
    `\\b(${PALABRAS_JS})\\b`,
    NUMERO,
  ].join("|"),
  "g",
);

// en Java, las anotaciones (`@Entity`) van con el color de los números: el lila
const PATRON_JAVA = new RegExp(
  [
    COMENTARIO,
    /("(?:\\.|[^"\\\n])*"|'(?:\\.|[^'\\\n])*')/.source,
    `\\b(${PALABRAS_JAVA})\\b`,
    `(?:@\\w+|${NUMERO})`,
  ].join("|"),
  "g",
);

/** Trocea un `.properties`: comentarios con `#` y pares clave=valor. */
function trocearProperties(codigo: string): Trozo[] {
  return codigo.split("\n").flatMap((linea, i, todas): Trozo[] => {
    const salto = i < todas.length - 1 ? "\n" : "";
    if (/^\s*[#!]/.test(linea)) return [[linea + salto, "t-mute"]];
    const par = linea.match(/^([^=]*)(=)(.*)$/);
    return par ? [[par[1], "t-lila"], [par[2]], [par[3] + salto, "t-verde"]] : [[linea + salto]];
  });
}

// en JSON las claves van en lila y los valores de texto en verde
const PATRON_JSON = /("(?:\\.|[^"\\\n])*"(?=\s*:))|("(?:\\.|[^"\\\n])*")|\b(true|false|null)\b|(-?\b\d+(?:\.\d+)?\b)/g;

function trocearJson(codigo: string): Trozo[] {
  const trozos: Trozo[] = [];
  let ultimo = 0;
  for (const m of codigo.matchAll(PATRON_JSON)) {
    const inicio = m.index ?? 0;
    if (inicio > ultimo) trozos.push([codigo.slice(ultimo, inicio)]);
    trozos.push([m[0], m[1] ? "t-lila" : m[2] ? "t-verde" : "t-acento"]);
    ultimo = inicio + m[0].length;
  }
  if (ultimo < codigo.length) trozos.push([codigo.slice(ultimo)]);
  return trozos;
}

/** Trocea Markdown: la cabecera YAML, los títulos, las listas y el código en línea. */
function trocearMarkdown(codigo: string): Trozo[] {
  let enCabecera = false;
  return codigo.split("\n").flatMap((linea, i, todas): Trozo[] => {
    const salto = i < todas.length - 1 ? "\n" : "";
    if (linea.trim() === "---" && (i === 0 || enCabecera)) {
      enCabecera = i === 0;
      return [[linea + salto, "t-mute"]];
    }
    if (enCabecera) {
      const par = linea.match(/^(\s*[\w-]+)(:)(.*)$/);
      return par ? [[par[1], "t-lila"], [par[2]], [par[3] + salto, "t-verde"]] : [[linea + salto, "t-verde"]];
    }
    if (/^\s*#/.test(linea)) return [[linea + salto, "t-acento"]];
    if (/^\s*<!--/.test(linea)) return [[linea + salto, "t-mute"]];
    const lista = linea.match(/^(\s*(?:[-*]|\d+\.)\s)(.*)$/);
    const [vineta, resto] = lista ? [lista[1], lista[2]] : ["", linea];
    const trozos: Trozo[] = vineta ? [[vineta, "t-verde"]] : [];
    // el código en línea y las variables como $ARGUMENTS resaltan dentro del texto
    resto.split(/(`[^`]*`|\$ARGUMENTS|\$\d)/).forEach((parte, j) => {
      if (parte) trozos.push(j % 2 ? [parte, "t-lila"] : [parte]);
    });
    trozos.push([salto]);
    return trozos;
  });
}

export type Lenguaje = "html" | "css" | "js" | "java" | "properties" | "json" | "md";

const TROCEADORES: Record<Lenguaje, (codigo: string) => Trozo[]> = {
  html: trocearHtml,
  css: trocearCss,
  js: (codigo) => trocearConPatron(codigo, PATRON_JS),
  java: (codigo) => trocearConPatron(codigo, PATRON_JAVA),
  properties: trocearProperties,
  json: trocearJson,
  md: trocearMarkdown,
};

/** Devuelve el código ya coloreado, partido en líneas. */
export function resaltar(codigo: string, lenguaje: Lenguaje): Trozo[][] {
  const lineas: Trozo[][] = [[]];
  for (const [texto, clase] of TROCEADORES[lenguaje](codigo)) {
    texto.split("\n").forEach((parte, n) => {
      if (n > 0) lineas.push([]);
      if (parte) lineas[lineas.length - 1].push([parte, clase]);
    });
  }
  return lineas;
}
