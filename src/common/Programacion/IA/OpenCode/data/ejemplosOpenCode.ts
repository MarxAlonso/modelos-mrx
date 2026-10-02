import type { EjemploIA } from "../../sesion";

export const ejemplosOpenCode: EjemploIA[] = [
  {
    titulo: "Conectar DeepSeek con /connect",
    descripcion: "Abre OpenCode por primera vez, conecta tu clave de DeepSeek y haz tu primera pregunta.",
    modelo: "deepseek",
    carpeta: "cafe-aroma",
    sesion: [
      {
        tipo: "comando",
        texto: "/connect",
        salida: "? Proveedor › DeepSeek\n? API key › sk-••••••••••••••••\n✓ Credenciales guardadas en ~/.local/share/opencode/auth.json",
      },
      {
        tipo: "comando",
        texto: "/models",
        salida: "DeepSeek\n  ● DeepSeek V4 Pro\nOpenCode Zen\n    Big Pickle            free",
      },
      { tipo: "usuario", texto: "Hola. ¿Qué tipo de proyecto es este y cómo lo arranco?" },
      { tipo: "tool", herramienta: "list", objetivo: "." },
      { tipo: "tool", herramienta: "read", objetivo: "package.json" },
      {
        tipo: "ia",
        texto:
          "Es una web hecha con **Vite + React**. Para arrancarla:\n- `pnpm install` para instalar las dependencias\n- `pnpm dev` para levantarla en `http://localhost:5173`",
      },
    ],
    explicacion: `
      OpenCode es un agente de programación de código abierto que vive en tu terminal. No trae un modelo propio: tú eliges a qué IA conectarlo.
      - /connect: abre el asistente para añadir un proveedor. Eliges DeepSeek y pegas la API key que creas en platform.deepseek.com.
      - /models: lista todos los modelos de los proveedores conectados. El que elijas se queda para las próximas sesiones.
      - auth.json: la clave se guarda en tu equipo, fuera del proyecto: nunca acaba en Git.
      Fíjate en la sesión: antes de responder, el agente usó las herramientas \`List\` y \`Read\` para mirar tu proyecto. Esa es la diferencia con un chat: la IA lee tu código de verdad.
      DeepSeek es de pago, pero muy barato: la cifra de arriba a la derecha es lo que lleva gastado la sesión.
    `,
  },
  {
    titulo: "Modelos gratis con OpenCode Zen",
    descripcion: "Programa sin pagar nada usando los modelos gratuitos que ofrece OpenCode Zen.",
    modelo: "zen",
    carpeta: "cafe-aroma",
    sesion: [
      {
        tipo: "comando",
        texto: "/connect",
        salida: "? Proveedor › OpenCode Zen\n? API key › zen-••••••••••••\n✓ Credenciales guardadas",
      },
      {
        tipo: "comando",
        texto: "/models",
        salida: "OpenCode Zen\n  ● Big Pickle                 free\n    MiMo V2.5                  free\n    Nemotron 3 Ultra           free\n    Qwen3 Coder 480B           $",
      },
      { tipo: "usuario", texto: "Explícame en 3 viñetas qué hace @src/App.tsx" },
      { tipo: "tool", herramienta: "read", objetivo: "src/App.tsx" },
      {
        tipo: "ia",
        texto:
          "- Monta el enrutador con `BrowserRouter` y tres rutas: inicio, carta y contacto.\n- Envuelve todo en `Layout`, que pinta la cabecera y el pie.\n- Carga la carta de forma diferida con `lazy()` para que el inicio abra más rápido.",
      },
    ],
    archivos: [
      {
        nombre: "opencode.json",
        lenguaje: "json",
        codigo: `{
          "$schema": "https://opencode.ai/config.json",
          "model": "opencode/big-pickle"
        }`,
      },
    ],
    explicacion: `
      OpenCode Zen es la lista de modelos que el equipo de OpenCode prueba para que funcionen bien con el agente. Algunos están marcados como \`free\`.
      - Cómo entrar: inicias sesión en opencode.ai/zen, creas una API key y la pegas en /connect eligiendo «OpenCode Zen».
      - opencode.json: si lo pones en la raíz del proyecto, fija el modelo por defecto con el formato \`proveedor/modelo\`.
      - La lista cambia: los modelos gratis son temporales. Míralos siempre con /models.
      - Cuidado con lo que pegas: algunos modelos gratuitos usan las conversaciones para mejorar. No les pases contraseñas ni claves.
      Para aprender y practicar, un modelo gratis basta. Cuando un trabajo pida más precisión, cambias a DeepSeek sin tocar nada más.
    `,
  },
  {
    titulo: "Modelos locales con Ollama",
    descripcion: "Ejecuta la IA en tu propio ordenador: gratis, sin internet y sin enviar tu código a nadie.",
    modelo: "ollama",
    carpeta: "cafe-aroma",
    sesion: [
      {
        tipo: "comando",
        texto: "!ollama list",
        salida: "NAME                 SIZE\nqwen2.5-coder:7b     4.7 GB",
      },
      {
        tipo: "comando",
        texto: "/models",
        salida: "Ollama (local)\n  ● Qwen 2.5 Coder 7B",
      },
      { tipo: "usuario", texto: "Escribe una función JS que valide un correo electrónico y dame 3 casos de prueba" },
      { tipo: "pensar", texto: "Una expresión regular sencilla basta; las de la RFC completa son ilegibles." },
      {
        tipo: "ia",
        texto:
          "`const esCorreo = (s) => /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(s);`\n- `esCorreo(\"ana@mail.com\")` → `true`\n- `esCorreo(\"ana@mail\")` → `false`\n- `esCorreo(\"ana mail.com\")` → `false`",
      },
    ],
    archivos: [
      {
        nombre: "opencode.json",
        lenguaje: "json",
        codigo: `{
          "$schema": "https://opencode.ai/config.json",
          "provider": {
            "ollama": {
              "npm": "@ai-sdk/openai-compatible",
              "name": "Ollama (local)",
              "options": {
                "baseURL": "http://localhost:11434/v1"
              },
              "models": {
                "qwen2.5-coder:7b": {
                  "name": "Qwen 2.5 Coder 7B"
                }
              }
            }
          },
          "model": "ollama/qwen2.5-coder:7b"
        }`,
      },
    ],
    explicacion: `
      Ollama descarga modelos abiertos y los sirve en tu equipo, con una API compatible con la de OpenAI.
      - Instalar: descarga Ollama de ollama.com y ejecuta \`ollama pull qwen2.5-coder:7b\`.
      - provider.ollama: le dice a OpenCode dónde está el servidor (\`localhost:11434\`) y qué modelos ofrece.
      - !comando: con \`!\` delante, OpenCode ejecuta un comando de la terminal sin salir de la sesión.
      La contrapartida: un modelo de 7B que cabe en tu portátil razona bastante menos que DeepSeek. Úsalo para tareas pequeñas y concretas, y con prompts muy claros.
    `,
  },
  {
    titulo: "/init: crear el AGENTS.md",
    descripcion: "Deja que OpenCode estudie tu proyecto y escriba las reglas que leerá en cada sesión.",
    modelo: "deepseek",
    carpeta: "cafe-aroma",
    sesion: [
      { tipo: "comando", texto: "/init" },
      { tipo: "tool", herramienta: "list", objetivo: "." },
      { tipo: "tool", herramienta: "read", objetivo: "package.json" },
      { tipo: "tool", herramienta: "read", objetivo: "tsconfig.json" },
      { tipo: "tool", herramienta: "glob", objetivo: "src/**/*.tsx", salida: "14 archivos" },
      { tipo: "pensar", texto: "Componentes con export con nombre, Tailwind y pnpm. Lo dejo escrito para próximas sesiones." },
      { tipo: "tool", herramienta: "write", objetivo: "AGENTS.md" },
      {
        tipo: "ia",
        texto: "He creado `AGENTS.md` con los comandos del proyecto, la estructura de carpetas y las convenciones de código que he visto. Revísalo y ajusta lo que quieras.",
      },
    ],
    archivos: [
      {
        nombre: "AGENTS.md",
        lenguaje: "md",
        codigo: `# Café Aroma

        Landing page de una cafetería. Vite + React 19 + TypeScript + Tailwind.

        ## Comandos
        - \`pnpm dev\`: servidor de desarrollo en el puerto 5173
        - \`pnpm build\`: compila; debe pasar sin errores antes de terminar una tarea
        - \`pnpm lint\`: ESLint

        ## Estructura
        - \`src/components/\`: un componente por archivo, export con nombre
        - \`src/data/\`: datos estáticos (carta, horarios) en TypeScript

        ## Convenciones
        - Textos de la interfaz en español
        - Solo Tailwind: nada de CSS suelto ni librerías de UI
        - Usa pnpm, nunca npm`,
      },
    ],
    explicacion: `
      Cada sesión de OpenCode empieza «en blanco»: el modelo no recuerda lo que hablasteis ayer. AGENTS.md es su memoria.
      - /init: el agente recorre el proyecto y escribe un AGENTS.md en la raíz.
      - AGENTS.md: OpenCode lo añade al contexto de cada sesión, antes de tu primer prompt.
      - Qué poner: comandos para compilar y probar, carpetas, convenciones y lo que NO se debe hacer.
      Es el prompt que escribes una vez y reutilizas siempre. Súbelo a Git: así todo el equipo (y cualquier otra IA) trabaja con las mismas reglas.
    `,
  },
  {
    titulo: "Plan y Build: pensar antes de tocar",
    descripcion: "Usa el agente Plan para diseñar el cambio y Build para aplicarlo, cambiando con Tab.",
    modelo: "deepseek",
    carpeta: "cafe-aroma",
    agente: "build",
    sesion: [
      { tipo: "modo", modo: "plan" },
      { tipo: "usuario", texto: "Quiero añadir modo oscuro a la web. Propón un plan, no cambies nada todavía." },
      { tipo: "tool", herramienta: "read", objetivo: "tailwind.config.js" },
      { tipo: "tool", herramienta: "grep", objetivo: "bg-white|text-black", salida: "9 coincidencias en 5 archivos" },
      {
        tipo: "ia",
        texto:
          "Plan en 3 pasos:\n- Activar `darkMode: \"class\"` en `tailwind.config.js`.\n- Crear `useTema()` que guarde la preferencia en `localStorage` y ponga la clase `dark` en `<html>`.\n- Añadir variantes `dark:` en los 5 componentes con colores fijos y un botón en `Navbar`.",
      },
      { tipo: "modo", modo: "build" },
      { tipo: "usuario", texto: "Perfecto, aplica el plan" },
      { tipo: "diff", archivo: "tailwind.config.js", lineas: "  export default {\n+   darkMode: \"class\",\n    content: [\"./index.html\", \"./src/**/*.tsx\"]," },
      { tipo: "tool", herramienta: "write", objetivo: "src/hooks/useTema.ts" },
      { tipo: "diff", archivo: "src/components/Hero.tsx", lineas: "- <section className=\"bg-white text-black\">\n+ <section className=\"bg-white text-black dark:bg-stone-900 dark:text-stone-100\">" },
      { tipo: "tool", herramienta: "bash", objetivo: "pnpm build", salida: "✓ built in 1.84s" },
      { tipo: "ia", texto: "Modo oscuro listo: 1 hook nuevo, 6 archivos editados y la build pasa." },
    ],
    explicacion: `
      OpenCode trae dos agentes principales y pasas de uno a otro con la tecla Tab.
      - Plan: solo puede leer. Analiza y propone, pero no edita archivos ni ejecuta comandos que cambien nada.
      - Build: el agente completo. Escribe, edita y ejecuta comandos.
      La regla de oro para tareas medianas o grandes: primero Plan, lees el plan, lo corriges si hace falta y luego Build. Corregir un plan cuesta una frase; corregir veinte archivos editados cuesta una tarde.
      Mira el final de la sesión: el agente ejecutó \`pnpm build\` por su cuenta porque AGENTS.md dice que la build debe pasar antes de terminar.
    `,
  },
  {
    titulo: "@archivos, !comandos y /undo",
    descripcion: "Tres atajos del día a día: citar archivos, ejecutar comandos y deshacer lo que hizo la IA.",
    modelo: "zen",
    carpeta: "cafe-aroma",
    sesion: [
      { tipo: "comando", texto: "!pnpm test", salida: "✗ formatearPrecio › añade el símbolo de soles\n  Expected: \"S/ 12.50\"\n  Received: \"12.5\"" },
      { tipo: "usuario", texto: "El test de arriba falla. Mira @src/utils/precio.ts y arréglalo sin cambiar el test." },
      { tipo: "tool", herramienta: "read", objetivo: "src/utils/precio.ts" },
      {
        tipo: "diff",
        archivo: "src/utils/precio.ts",
        lineas: "  export const formatearPrecio = (n: number) =>\n-   String(n);\n+   `S/ ${n.toFixed(2)}`;",
      },
      { tipo: "tool", herramienta: "bash", objetivo: "pnpm test", salida: "✓ 12 tests pasados" },
      { tipo: "ia", texto: "Faltaba el símbolo y fijar dos decimales con `toFixed(2)`. Los 12 tests pasan." },
      { tipo: "comando", texto: "/undo", salida: "↶ Revertido el último mensaje: 1 archivo restaurado" },
    ],
    explicacion: `
      - @archivo: al escribir @ aparece un buscador de archivos. El archivo citado entra entero en el contexto: la IA no tiene que buscarlo.
      - !comando: ejecuta un comando en tu terminal y su salida queda en la conversación. Ideal para enseñarle a la IA el error exacto.
      - /undo: deshace el último mensaje y los cambios que hizo en los archivos. /redo lo vuelve a aplicar.
      - /new y /sessions: empezar una conversación limpia o volver a una anterior.
      Consejo: cuando cambias de tarea, usa /new. Una conversación larga mezcla temas, gasta más tokens y confunde al modelo.
    `,
  },
];
