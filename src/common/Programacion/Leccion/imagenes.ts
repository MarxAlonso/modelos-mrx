// Los ejemplos apuntan a imágenes que no existen (`imagen.jpg`) o a servicios
// caídos; en la vista previa se cambian por este dibujo para que se vea algo.
const IMAGEN_DE_MUESTRA =
  "data:image/svg+xml," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="320" height="200" viewBox="0 0 320 200"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#4c1d95"/><stop offset="1" stop-color="#a78bfa"/></linearGradient></defs><rect width="320" height="200" fill="url(#g)"/><circle cx="244" cy="60" r="22" fill="#ede9fe" opacity=".85"/><path d="M0 200 96 96l64 62 46-40 114 82z" fill="#0d0620" opacity=".55"/><text x="18" y="34" font-family="monospace" font-size="15" fill="#fff">imagen de muestra</text></svg>`,
  );

/** Cambia por la imagen de muestra las que el ejemplo no puede cargar. */
export const conImagenes = (html: string) =>
  html.replace(/(<img\b[^>]*?\bsrc=)(["'])(.*?)\2/gi, (todo, antes, comilla, src) =>
    /^(https?:|data:)/i.test(src) && !/via\.placeholder\.com/i.test(src) ? todo : `${antes}${comilla}${IMAGEN_DE_MUESTRA}${comilla}`,
  );
