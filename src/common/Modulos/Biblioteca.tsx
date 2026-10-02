import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaCheck, FaCode, FaExpand, FaPlay, FaRegCopy, FaSearch, FaTimes } from "react-icons/fa";
import { Panal } from "../Nano/Panal";
import { conImagenes } from "../Programacion/Leccion/imagenes";
import { Navegador } from "../Programacion/Leccion/Leccion";
import { resaltar, type Lenguaje } from "../Programacion/Leccion/resaltar";
import { Guion, Ventana, type PasoGuion } from "../Terminal/Terminal";
import "./modulos.css";

/** Un módulo de la biblioteca: su ficha y el código que se copia. */
export interface Modulo {
  id: number;
  titulo: string;
  categoria: string;
  descripcion: string;
  imagen: string;
  dificultad: string;
  codigo: {
    html: string;
    css: string;
    js: string;
  };
}

/** Cuántos puntos de tres enciende cada dificultad. */
const NIVELES: Record<string, { nombre: string; puntos: number }> = {
  Facil: { nombre: "Fácil", puntos: 1 },
  "Básico": { nombre: "Básico", puntos: 1 },
  Intermedio: { nombre: "Intermedio", puntos: 2 },
  Avanzado: { nombre: "Avanzado", puntos: 3 },
  Dificil: { nombre: "Difícil", puntos: 3 },
};

const Dificultad = ({ valor }: { valor: string }) => {
  const nivel = NIVELES[valor] ?? { nombre: valor, puntos: 2 };
  return (
    <span className="mrx-mod__nivel" title={`Dificultad: ${nivel.nombre}`}>
      <span className="mrx-mod__puntos" aria-hidden="true">
        {[1, 2, 3].map((n) => <i key={n} data-on={n <= nivel.puntos || undefined} />)}
      </span>
      {nivel.nombre}
    </span>
  );
};

const sinTildes = (texto: string) => texto.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

/**
 * El documento de la vista previa: el HTML del módulo con su CSS y su JS.
 * Los `<script src="script.js">` y `<link href="styles.css">` del ejemplo
 * apuntan a archivos que aquí van incrustados, así que se retiran; las
 * imágenes que no existen (`imagen1.jpg`) se cambian por una de muestra.
 */
function documento({ html, css, js }: Modulo["codigo"]): string {
  const limpio = conImagenes(html)
    .replace(/<script\b[^>]*\bsrc=["'](?!https?:)[^"']*["'][^>]*>\s*<\/script>/gi, "")
    .replace(/<link\b[^>]*\bhref=["'](?!https?:)[^"']*\.css["'][^>]*>/gi, "");
  const estilos = `<base target="_blank"><style>${css}</style>`;
  const guion = js.trim() ? `<script>${js.replace(/<\/script/gi, "<\\/script")}</script>` : "";

  if (/<html[\s>]/i.test(limpio)) {
    const conEstilos = /<\/head>/i.test(limpio) ? limpio.replace(/<\/head>/i, estilos + "</head>") : estilos + limpio;
    return /<\/body>/i.test(conEstilos) ? conEstilos.replace(/<\/body>/i, guion + "</body>") : conEstilos + guion;
  }
  return `<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1">${estilos}<style>body{margin:0;font-family:system-ui,sans-serif}</style></head><body>${limpio}${guion}</body></html>`;
}

type Pestana = "vista" | "html" | "css" | "js";

const ARCHIVOS: { id: Exclude<Pestana, "vista">; nombre: string; lenguaje: Lenguaje }[] = [
  { id: "html", nombre: "index.html", lenguaje: "html" },
  { id: "css", nombre: "estilos.css", lenguaje: "css" },
  { id: "js", nombre: "script.js", lenguaje: "js" },
];

// Componente Modal para mostrar el código
const ModalCodigo = ({
  diseno,
  inicial,
  onClose,
}: {
  diseno: Modulo;
  inicial: Pestana;
  onClose: () => void;
}) => {
  const [tabActiva, setTabActiva] = useState<Pestana>(inicial);
  const [copiado, setCopiado] = useState(false);

  // solo los archivos que el módulo trae de verdad
  const archivos = ARCHIVOS.filter((a) => diseno.codigo[a.id].trim());
  const archivo = archivos.find((a) => a.id === tabActiva);
  const codigo = archivo ? diseno.codigo[archivo.id].trim() : "";
  const lineas = useMemo(
    () => (archivo ? resaltar(codigo, archivo.lenguaje) : []),
    [archivo, codigo],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(codigo);
      setCopiado(true);
      window.setTimeout(() => setCopiado(false), 1800);
    } catch {
      // sin permiso de portapapeles: el código sigue seleccionable a mano
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="mrx-mod-modal mrx-oscura"
    >
      <div className="mrx-mod-modal__velo" onClick={onClose} />
      <motion.div
        initial={{ y: 30, scale: 0.97 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: 30, scale: 0.97 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="mrx-mod-modal__caja"
        role="dialog"
        aria-modal="true"
        aria-label={diseno.titulo}
      >
        <Ventana shell="linux" titulo={`~/modulos/${diseno.titulo}`}>
          <div className="mrx-mod-modal__barra">
            <div className="mrx-mod-modal__pestanas" role="tablist">
              <button type="button" role="tab" aria-selected={tabActiva === "vista"} onClick={() => setTabActiva("vista")}>
                <FaPlay /> Vista previa
              </button>
              {archivos.map((a) => (
                <button
                  key={a.id}
                  type="button"
                  role="tab"
                  aria-selected={tabActiva === a.id}
                  onClick={() => {
                    setTabActiva(a.id);
                    setCopiado(false);
                  }}
                >
                  {a.nombre}
                </button>
              ))}
            </div>
            <button type="button" className="mrx-mod-modal__cerrar" onClick={onClose} aria-label="Cerrar">
              <FaTimes />
            </button>
          </div>

          {archivo ? (
            <>
              <pre className="mrx-mod-modal__codigo">
                <code>
                  {lineas.map((linea, i) => (
                    <span key={i} className="mrx-lec__linea">
                      <span className="mrx-lec__num" aria-hidden="true">{i + 1}</span>
                      <span>
                        {linea.map(([texto, clase], j) => (
                          <span key={j} className={clase}>{texto}</span>
                        ))}
                        {"\n"}
                      </span>
                    </span>
                  ))}
                </code>
              </pre>
              <div className="mrx-mod-modal__pie">
                <span>{archivo.lenguaje} · {lineas.length} líneas</span>
                <button type="button" className="mrx-cta mrx-cta--lleno" onClick={copiar}>
                  {copiado ? <FaCheck /> : <FaRegCopy />}
                  {copiado ? "Copiado" : "Copiar código"}
                </button>
              </div>
            </>
          ) : (
            <div className="mrx-mod-modal__vista">
              {/* el módulo de verdad, con su HTML, CSS y JS, aislado de la página */}
              <Navegador url={`localhost:5173/modulos/${diseno.id}`}>
                <iframe
                  title={`Vista previa: ${diseno.titulo}`}
                  srcDoc={documento(diseno.codigo)}
                  sandbox="allow-scripts allow-forms allow-modals"
                />
              </Navegador>
            </div>
          )}
        </Ventana>
      </motion.div>
    </motion.div>
  );
};

interface BibliotecaProps {
  modulos: Modulo[];
  /** Todas las categorías posibles; solo se muestran las que tienen módulos. */
  categorias: string[];
  /** Tiñe el titular de la portada. */
  tono: "estaticos" | "dinamicos";
  hud: string;
  /** La segunda palabra del titular, la que va en contorno: «Estáticos», «Dinámicos». */
  tipo: string;
  bajada: string;
  /** Qué trae cada módulo, para las lecturas de la portada. */
  lenguajes: string;
  /** El segundo comando que teclea la terminal de la portada y lo que responde. */
  demo: { comando: string; salida: string };
}

/**
 * Biblioteca de módulos: portada, filtros por categoría y búsqueda, tarjetas
 * y el visor que enseña el código de cada módulo o lo ejecuta.
 */
export const Biblioteca = ({ modulos: disenos, categorias, tono, hud, tipo, bajada, lenguajes, demo }: BibliotecaProps) => {
  // solo las categorías que tienen algún módulo, con su cuenta
  const CATEGORIAS = useMemo(
    () =>
      categorias
        .map((nombre) => ({
          nombre,
          cuenta: nombre === "Todos" ? disenos.length : disenos.filter((d) => d.categoria === nombre).length,
        }))
        .filter((c) => c.cuenta > 0),
    [categorias, disenos],
  );
  const carpeta = sinTildes(tipo);
  const guion = useMemo<PasoGuion[]>(
    () => [
      { tipo: "cmd", texto: `mrx ls modulos/ --${carpeta}` },
      { tipo: "out", texto: `${disenos.length} módulos · ${CATEGORIAS.length - 1} categorías`, clase: "t-mute" },
      { tipo: "cmd", texto: demo.comando },
      { tipo: "out", texto: demo.salida, clase: "t-verde" },
    ],
    [carpeta, disenos.length, CATEGORIAS.length, demo],
  );

  const [categoriaActiva, setCategoriaActiva] = useState("Todos");
  const [busqueda, setBusqueda] = useState("");
  const [imagenVista, setImagenVista] = useState<Modulo | null>(null);
  // Estado para el modal de código
  const [seleccion, setSeleccion] = useState<{ diseno: Modulo; pestana: Pestana } | null>(null);

  const visibles = useMemo(() => {
    const aguja = sinTildes(busqueda.trim());
    return disenos.filter(
      (diseno) =>
        (categoriaActiva === "Todos" || diseno.categoria === categoriaActiva) &&
        (!aguja || sinTildes(`${diseno.titulo} ${diseno.descripcion} ${diseno.categoria}`).includes(aguja)),
    );
  }, [disenos, categoriaActiva, busqueda]);

  useEffect(() => {
    if (!imagenVista) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setImagenVista(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [imagenVista]);

  return (
    <div className="mrx-oscura">
      {/* Header de bienvenida */}
      <section className="mrx-mod-portada" data-tono={tono}>
        <div className="mrx-mod-portada__fondo" aria-hidden="true" />
        <div className="mrx-mod-portada__trama" aria-hidden="true" />
        <Panal className="mrx-mod-portada__panal" />

        <div className="mrx-mod-portada__marco">
          <div>
            <span className="mrx-hud mrx-fade" style={{ animationDelay: ".5s" }}>
              {hud}
            </span>
            <h1 className="mrx-display mrx-mod-portada__titulo">
              <span className="mrx-mask"><span className="mrx-rise">Módulos</span></span>
              <span className="mrx-mask">
                <span className="mrx-rise" style={{ animationDelay: ".1s" }}>
                  <span className="mrx-fill" data-word={tipo}>{tipo}</span>
                </span>
              </span>
            </h1>
            <p className="mrx-mod-portada__bajada mrx-fade" style={{ animationDelay: ".8s" }}>
              {bajada}
            </p>
            <div className="mrx-mod-portada__lecturas mrx-fade" style={{ animationDelay: "1s" }}>
              <span><b className="mrx-num">{String(disenos.length).padStart(2, "0")}</b> módulos</span>
              <span><b className="mrx-num">{String(CATEGORIAS.length - 1).padStart(2, "0")}</b> categorías</span>
              <span><b>{lenguajes}</b> para copiar</span>
            </div>
          </div>

          <Ventana shell="linux" titulo="marx@coders: ~/modulos" className="mrx-mod-portada__terminal">
            <Guion
              prompt={
                <>
                  <span className="t-verde">marx@coders</span>
                  <span className="t-mute">:</span>
                  <span className="t-acento">~/modulos</span>
                  <span className="t-mute">$ </span>
                </>
              }
              guion={guion}
            />
          </Ventana>
        </div>
      </section>

      <section className="mrx-mod">
        <div className="mrx-mod__marco">
          {/* Filtro de categorías */}
          <div className="mrx-mod__filtros">
            <div className="mrx-mod__categorias" role="group" aria-label="Categorías">
              {CATEGORIAS.map((categoria) => (
                <button
                  key={categoria.nombre}
                  type="button"
                  aria-pressed={categoriaActiva === categoria.nombre}
                  onClick={() => setCategoriaActiva(categoria.nombre)}
                >
                  {categoria.nombre}
                  <span className="mrx-num">{String(categoria.cuenta).padStart(2, "0")}</span>
                </button>
              ))}
            </div>

            <label className="mrx-mod__buscar">
              <FaSearch aria-hidden="true" />
              <span className="mrx-solo-lector">Buscar módulos</span>
              <input
                type="search"
                placeholder="grep módulo…"
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
              />
            </label>
          </div>

          <p className="mrx-mod__cuenta" aria-live="polite">
            <span className="t-verde">$</span> ls {categoriaActiva === "Todos" ? "modulos/" : `modulos/${sinTildes(categoriaActiva).replace(/\s+/g, "")}/`}
            <span> → {visibles.length} {visibles.length === 1 ? "resultado" : "resultados"}</span>
          </p>

          {/* Grid de diseños */}
          <div className="mrx-mod__rejilla">
            <AnimatePresence mode="popLayout">
              {visibles.map((diseno, index) => (
                <motion.article
                  key={diseno.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, delay: Math.min(index, 8) * 0.04 }}
                  className="mrx-mod__tarjeta"
                >
                  <div className="mrx-mod__ventana">
                    <div className="mrx-mod__barra" aria-hidden="true">
                      <i /><i /><i />
                      <span>{sinTildes(diseno.categoria).replace(/[^a-z]+/g, "-")}/{String(diseno.id).padStart(2, "0")}</span>
                    </div>
                    <button
                      type="button"
                      className="mrx-mod__imagen"
                      onClick={() => setImagenVista(diseno)}
                      aria-label={`Ampliar la imagen de ${diseno.titulo}`}
                    >
                      <img src={diseno.imagen} alt="" loading="lazy" />
                      <span className="mrx-mod__ampliar"><FaExpand /> Ampliar</span>
                    </button>
                  </div>

                  <div className="mrx-mod__cuerpo">
                    <div className="mrx-mod__meta">
                      <span className="mrx-hud">{diseno.categoria}</span>
                      <Dificultad valor={diseno.dificultad} />
                    </div>
                    <h3>{diseno.titulo}</h3>
                    <p>{diseno.descripcion}</p>
                    <div className="mrx-mod__acciones">
                      <button
                        type="button"
                        className="mrx-cta mrx-cta--lleno"
                        onClick={() => setSeleccion({ diseno, pestana: "html" })}
                      >
                        <FaCode /> Ver código
                      </button>
                      <button
                        type="button"
                        className="mrx-cta mrx-cta--linea"
                        onClick={() => setSeleccion({ diseno, pestana: "vista" })}
                      >
                        <FaPlay /> Probar
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>

          {visibles.length === 0 && (
            <div className="mrx-mod__vacio">
              <p><span className="t-verde">$</span> grep "{busqueda}" modulos/</p>
              <p className="t-mute">Sin resultados. Prueba con otra palabra o cambia de categoría.</p>
              <button
                type="button"
                className="mrx-cta mrx-cta--linea"
                onClick={() => {
                  setBusqueda("");
                  setCategoriaActiva("Todos");
                }}
              >
                Ver todos
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {seleccion && (
          <ModalCodigo
            key={seleccion.diseno.id}
            diseno={seleccion.diseno}
            inicial={seleccion.pestana}
            onClose={() => setSeleccion(null)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {imagenVista && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mrx-mod-lupa"
            onClick={() => setImagenVista(null)} // Cierre al hacer clic fuera
          >
            <div
              className="mrx-mod-lupa__caja"
              onClick={(e) => e.stopPropagation()} // Evita cierre al hacer clic sobre la imagen
            >
              <div className="mrx-mod-lupa__barra">
                <span>{imagenVista.titulo}</span>
                <button type="button" onClick={() => setImagenVista(null)} aria-label="Cerrar">
                  <FaTimes />
                </button>
              </div>
              <img src={imagenVista.imagen} alt={`Vista ampliada de ${imagenVista.titulo}`} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
