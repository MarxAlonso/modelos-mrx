import type { EjemploIA } from "../../sesion";

/** Nivel 1: reglas permanentes (AGENTS.md) y prompts reutilizables (comandos). */
export const ejemplosComandos: EjemploIA[] = [
  {
    titulo: "Reglas que la IA siempre cumple",
    descripcion: "Escribe en AGENTS.md lo que repetías en cada prompt y deja de repetirlo.",
    modelo: "zen",
    carpeta: "cafe-aroma",
    sesion: [
      { tipo: "usuario", texto: "Añade una sección de testimonios a la home" },
      { tipo: "tool", herramienta: "read", objetivo: "src/pages/Home.tsx" },
      { tipo: "tool", herramienta: "write", objetivo: "src/data/testimonios.ts" },
      { tipo: "tool", herramienta: "write", objetivo: "src/components/Testimonios.tsx" },
      { tipo: "diff", archivo: "src/pages/Home.tsx", lineas: "  <Carta />\n+ <Testimonios />\n  <Ubicacion />" },
      { tipo: "tool", herramienta: "bash", objetivo: "pnpm build", salida: "✓ built in 1.71s" },
      { tipo: "ia", texto: "Sección añadida con 3 testimonios en `src/data/testimonios.ts`. Sin dependencias nuevas y la build pasa." },
    ],
    archivos: [
      {
        nombre: "AGENTS.md",
        lenguaje: "md",
        codigo: `# Café Aroma

        ## Reglas
        - Los datos (textos, listas, precios) van en \`src/data/\`, nunca dentro del componente.
        - Un componente por archivo en \`src/components/\`, con export con nombre.
        - No instales dependencias sin preguntar.
        - Antes de decir «listo», ejecuta \`pnpm build\` y confirma que pasa.
        - Si algo del pedido es ambiguo, pregunta antes de escribir código.

        ## Estilo
        - Paleta: marrón #6b4226, crema #f5ebe0, verde #3a5a40.
        - Mobile first; prueba siempre a 375 px.`,
      },
    ],
    explicacion: `
      El prompt fue de una sola línea y aun así el resultado respeta todas las reglas del proyecto. La razón es AGENTS.md.
      - Qué va en AGENTS.md: lo que es cierto en TODAS las tareas. Convenciones, comandos, prohibiciones.
      - Qué no va: instrucciones de una tarea concreta. Eso es el prompt.
      - Global: \`~/.config/opencode/AGENTS.md\` aplica tus reglas personales en todos tus proyectos.
      Cada vez que corrijas a la IA dos veces por lo mismo, convierte esa corrección en una regla de AGENTS.md.
    `,
  },
  {
    titulo: "Tu primer comando: /componente",
    descripcion: "Guarda un prompt que usas a menudo como comando y pásale argumentos.",
    modelo: "deepseek",
    carpeta: "cafe-aroma",
    sesion: [
      { tipo: "comando", texto: "/componente Horario muestra los horarios de lunes a domingo" },
      { tipo: "tool", herramienta: "read", objetivo: "src/components/Navbar.tsx" },
      { tipo: "tool", herramienta: "write", objetivo: "src/data/horario.ts" },
      { tipo: "tool", herramienta: "write", objetivo: "src/components/Horario.tsx" },
      { tipo: "tool", herramienta: "bash", objetivo: "pnpm build", salida: "✓ built in 1.66s" },
      { tipo: "ia", texto: "Creado `Horario.tsx` con sus datos en `src/data/horario.ts`, siguiendo el estilo de `Navbar.tsx`." },
    ],
    archivos: [
      {
        nombre: ".opencode/commands/componente.md",
        lenguaje: "md",
        codigo: `---
        description: Crea un componente React siguiendo el estilo del proyecto
        agent: build
        ---
        Crea el componente $1 en src/components/$1.tsx.

        Qué debe hacer: $ARGUMENTS

        Reglas:
        - Imita el estilo de @src/components/Navbar.tsx (props tipadas, export con nombre).
        - Si muestra datos, guárdalos en src/data/ con un nombre en minúsculas.
        - Solo Tailwind, mobile first.
        - Termina ejecutando pnpm build.`,
      },
    ],
    explicacion: `
      Un comando es un prompt guardado en un archivo Markdown. El nombre del archivo es el nombre del comando.
      - Dónde: \`.opencode/commands/\` en el proyecto, o \`~/.config/opencode/commands/\` para todos tus proyectos.
      - $ARGUMENTS: se sustituye por todo lo que escribes detrás del comando.
      - $1, $2…: cada palabra por separado. Aquí $1 es «Horario».
      - Frontmatter: \`description\` se ve en el menú de comandos; \`agent\` elige si lo ejecuta Build o Plan; también puedes fijar un \`model\`.
      Escribes el prompt bueno una vez y lo usas cien veces con una línea.
    `,
  },
  {
    titulo: "Un comando para resumir: /resumen",
    descripcion: "Un comando que resume cualquier documento con el mismo formato siempre.",
    modelo: "zen",
    carpeta: "api-reservas",
    sesion: [
      { tipo: "comando", texto: "/resumen docs/manual-pasarela.md" },
      { tipo: "tool", herramienta: "read", objetivo: "docs/manual-pasarela.md" },
      {
        tipo: "ia",
        texto:
          "Para qué sirve: cobrar con tarjeta desde el backend.\n- Auth con clave secreta en el header `Authorization`.\n- `POST /v2/charges` con `amount`, `currency` y `source_token`.\n- Los importes van en céntimos.\n- Usa `Idempotency-Key` para no cobrar dos veces.\nDudas: no dice cuál es el límite de peticiones por minuto.",
      },
    ],
    archivos: [
      {
        nombre: ".opencode/commands/resumen.md",
        lenguaje: "md",
        codigo: `---
        description: Resume un documento para el equipo de desarrollo
        agent: plan
        ---
        Lee el archivo $1 y resúmelo para un desarrollador que tiene
        que empezar a usarlo hoy.

        Formato exacto:
        Para qué sirve: <una frase>
        - <entre 3 y 6 viñetas con lo imprescindible para usarlo>
        Dudas: <lo que el texto no aclara, o «ninguna»>

        No inventes nada que no esté en el documento.`,
      },
    ],
    explicacion: `
      El mismo prompt de resumen del nivel anterior, convertido en comando con \`agent: plan\` para que solo lea.
      - Formato fijo: todos los resúmenes del equipo tienen la misma forma y se leen en segundos.
      - «Dudas»: obliga a la IA a señalar lo que falta en lugar de rellenarlo.
      - agent: plan: un resumen no necesita tocar archivos. Es más seguro.
      Prueba a crear tu propia versión: /traducir, /explicar o /documentar siguen exactamente el mismo patrón.
    `,
  },
  {
    titulo: "Comandos con la salida de la terminal",
    descripcion: "Mete la salida de un comando de shell dentro del prompt: aquí, el diff para un commit.",
    modelo: "deepseek",
    carpeta: "cafe-aroma",
    sesion: [
      { tipo: "comando", texto: "/commit" },
      { tipo: "pensar", texto: "Cambios en Horario.tsx y horario.ts: es una funcionalidad nueva en la home." },
      { tipo: "ia", texto: "`feat(home): añade la sección de horarios`\n¿Hago el commit con este mensaje?" },
      { tipo: "usuario", texto: "Sí" },
      { tipo: "tool", herramienta: "bash", objetivo: "git commit -m \"feat(home): añade la sección de horarios\"", salida: "[main 4f2a9c1] feat(home): añade la sección de horarios\n 2 files changed, 41 insertions(+)" },
    ],
    archivos: [
      {
        nombre: ".opencode/commands/commit.md",
        lenguaje: "md",
        codigo: `---
        description: Propone un mensaje de commit y lo hace si lo apruebo
        ---
        Estos son los cambios preparados:

        !\`git diff --staged\`

        Escribe UN mensaje de commit con este estilo:
        feat(carta): añade filtro por categoría
        fix(reserva): valida que la fecha no sea pasada

        Tipo en inglés, ámbito entre paréntesis, descripción en español,
        minúsculas, máximo 60 caracteres.
        Muéstramelo y espera mi confirmación antes de hacer el commit.`,
      },
    ],
    explicacion: `
      Dentro de un comando, !\`comando\` se ejecuta en tu terminal y su salida se pega en el prompt antes de enviarlo.
      - !\`git diff --staged\`: la IA recibe los cambios reales sin tener que pedirlos.
      - Ejemplos dentro del comando: el estilo de los commits queda fijado para siempre (few-shot).
      - «Espera mi confirmación»: la IA propone y tú decides. Para acciones que no se deshacen fácil, pídelo siempre.
      Ya tienes tres piezas: AGENTS.md (reglas de siempre), comandos (prompts que lanzas tú) y, en el siguiente nivel, skills (recetas que la IA elige sola).
    `,
  },
];
