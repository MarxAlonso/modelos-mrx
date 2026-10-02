import type { EjemploIA } from "../../sesion";

/** Proyectos de principio a fin: varios prompts encadenados, como se trabaja de verdad. */
export const ejemplosProyectos: EjemploIA[] = [
  {
    titulo: "Landing page de una cafetería",
    descripcion: "De carpeta vacía a web publicada en Netlify, con un modelo gratis y cinco prompts.",
    modelo: "zen",
    carpeta: "cafe-aroma",
    agente: "plan",
    sesion: [
      {
        tipo: "usuario",
        texto:
          "Voy a crear la landing de «Café Aroma», cafetería de barrio en Lima. Stack: Vite + React + TypeScript + Tailwind, con pnpm. Secciones: hero, carta (6 productos), horario, ubicación y pie. Dame un plan de archivos y no escribas código aún.",
      },
      {
        tipo: "ia",
        texto:
          "- `pnpm create vite` con plantilla react-ts y Tailwind.\n- `src/data/`: `carta.ts`, `horario.ts`.\n- `src/components/`: `Hero`, `Carta`, `Producto`, `Horario`, `Ubicacion`, `Pie`.\n- `src/App.tsx` solo compone las secciones.\n- Paleta en `tailwind.config.js`: `cafe`, `crema`, `hoja`.",
      },
      { tipo: "modo", modo: "build" },
      { tipo: "usuario", texto: "Adelante. Crea el proyecto y luego /init para el AGENTS.md" },
      { tipo: "tool", herramienta: "bash", objetivo: "pnpm create vite@latest . --template react-ts", salida: "Done. Now run: pnpm install" },
      { tipo: "tool", herramienta: "bash", objetivo: "pnpm install && pnpm add -D tailwindcss @tailwindcss/vite", salida: "Done in 6.4s" },
      { tipo: "tool", herramienta: "todowrite", objetivo: "6 tareas: datos · Hero · Carta · Horario · Ubicacion · Pie" },
      { tipo: "tool", herramienta: "write", objetivo: "src/data/carta.ts" },
      { tipo: "tool", herramienta: "write", objetivo: "src/components/Hero.tsx (+5 componentes)" },
      { tipo: "tool", herramienta: "bash", objetivo: "pnpm build", salida: "✓ built in 2.03s" },
      { tipo: "usuario", texto: "En el móvil los productos de la carta se ven muy apretados: 1 columna hasta 640px, 2 hasta 1024px y 3 después. Las fotos deben ser cuadradas." },
      {
        tipo: "diff",
        archivo: "src/components/Carta.tsx",
        lineas: "- <div className=\"grid grid-cols-3 gap-2\">\n+ <div className=\"grid gap-6 sm:grid-cols-2 lg:grid-cols-3\">",
      },
      { tipo: "diff", archivo: "src/components/Producto.tsx", lineas: "- <img className=\"h-40 w-full\"\n+ <img className=\"aspect-square w-full object-cover\"" },
      { tipo: "usuario", texto: "Prepáralo para desplegar en Netlify" },
      { tipo: "tool", herramienta: "write", objetivo: "netlify.toml" },
      { tipo: "ia", texto: "Listo: `netlify.toml` con `pnpm build` y la carpeta `dist`. Sube el repo a GitHub y conéctalo en app.netlify.com." },
    ],
    archivos: [
      {
        nombre: "netlify.toml",
        lenguaje: "properties",
        codigo: `[build]
          command = "pnpm build"
          publish = "dist"

        [[redirects]]
          from = "/*"
          to = "/index.html"
          status = 200`,
      },
    ],
    explicacion: `
      Este es el flujo completo de un proyecto con IA. Fíjate en que ningún prompt pide «toda la web»:
      - Prompt 1 (Plan): stack, secciones y estructura de archivos. Decides tú antes de que exista código.
      - Prompt 2 (Build): aplica el plan. El agente crea una lista de tareas (Todo) y las va tachando.
      - Prompt 3: corrección visual concreta, con medidas. «Se ve mal» no sirve; «1 columna hasta 640px» sí.
      - Prompt 4: despliegue.
      Cada vuelta es pequeña y la puedes revisar en el navegador con \`pnpm dev\`. Si algo no te gusta, /undo y lo pides de otra forma.
    `,
  },
  {
    titulo: "Resumidor de textos con la API de DeepSeek",
    descripcion: "Programa tu propia herramienta que llama a DeepSeek: la IA te ayuda a usar la IA.",
    modelo: "deepseek",
    carpeta: "resumidor",
    agente: "build",
    sesion: [
      {
        tipo: "usuario",
        texto:
          "Crea un script de Node (ESM, sin dependencias, Node 20+) llamado resumir.js que:\n- reciba la ruta de un .txt o .md por argumento,\n- lo envíe a la API de DeepSeek (compatible con OpenAI, POST https://api.deepseek.com/chat/completions),\n- imprima un resumen en 5 viñetas en español.\nLa API key se lee de la variable DEEPSEEK_API_KEY; si falta, muestra un error claro y sal con código 1.",
      },
      { tipo: "tool", herramienta: "write", objetivo: "resumir.js" },
      { tipo: "tool", herramienta: "write", objetivo: ".env.example" },
      { tipo: "diff", archivo: ".gitignore", lineas: "  node_modules\n+ .env" },
      { tipo: "tool", herramienta: "bash", objetivo: "node --env-file=.env resumir.js articulo.md", salida: "- La cafetería abrirá reservas online en octubre.\n- El pago seguirá siendo en el local.\n- Habrá 8 mesas por franja horaria.\n- Las confirmaciones llegarán por correo.\n- Falta decidir la lista de espera." },
      { tipo: "usuario", texto: "Añade una opción --palabras=N para limitar la longitud y muestra cuántos tokens gastó la llamada" },
      {
        tipo: "diff",
        archivo: "resumir.js",
        lineas: "+ const limite = Number(process.argv.find(a => a.startsWith(\"--palabras=\"))?.split(\"=\")[1] ?? 120);\n- content: `Resume en 5 viñetas:\\n\\n${texto}`\n+ content: `Resume en 5 viñetas, máximo ${limite} palabras:\\n\\n${texto}`\n+ console.error(`\\n(${datos.usage.total_tokens} tokens)`);",
      },
      { tipo: "ia", texto: "Hecho. El recuento de tokens va por `stderr` para que puedas redirigir el resumen a un archivo sin mezclarlo: `node resumir.js a.md > resumen.md`." },
    ],
    archivos: [
      {
        nombre: "resumir.js",
        lenguaje: "js",
        codigo: `import { readFile } from "node:fs/promises";

        const clave = process.env.DEEPSEEK_API_KEY;
        if (!clave) {
          console.error("Falta DEEPSEEK_API_KEY. Créala en platform.deepseek.com y ponla en .env");
          process.exit(1);
        }

        const ruta = process.argv[2];
        if (!ruta) {
          console.error("Uso: node resumir.js <archivo.md> [--palabras=120]");
          process.exit(1);
        }

        const limite = Number(process.argv.find((a) => a.startsWith("--palabras="))?.split("=")[1] ?? 120);
        const texto = await readFile(ruta, "utf8");

        const respuesta = await fetch("https://api.deepseek.com/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: \`Bearer \${clave}\`,
          },
          body: JSON.stringify({
            model: "deepseek-chat",
            messages: [
              {
                role: "system",
                content: "Eres un editor que resume con precisión. Nunca inventas datos que no estén en el texto.",
              },
              {
                role: "user",
                content: \`Resume en 5 viñetas en español, máximo \${limite} palabras:\\n\\n\${texto}\`,
              },
            ],
          }),
        });

        if (!respuesta.ok) {
          console.error(\`Error \${respuesta.status}: \${await respuesta.text()}\`);
          process.exit(1);
        }

        const datos = await respuesta.json();
        console.log(datos.choices[0].message.content);
        console.error(\`\\n(\${datos.usage.total_tokens} tokens)\`);`,
      },
      {
        nombre: ".env.example",
        lenguaje: "properties",
        codigo: `# Copia este archivo como .env y pon tu clave. .env NUNCA se sube a Git.
        DEEPSEEK_API_KEY=sk-tu-clave-aqui`,
      },
    ],
    explicacion: `
      Aquí la IA se usa dos veces: OpenCode escribe el programa, y el programa llama a DeepSeek.
      - API compatible con OpenAI: el mismo formato (\`messages\` con \`role\` y \`content\`) sirve para DeepSeek, OpenRouter u Ollama cambiando la URL y el modelo.
      - system: el prompt de sistema fija el papel y las reglas; el mensaje \`user\` lleva la tarea y el texto.
      - La clave: en una variable de entorno, con .env en .gitignore. Fíjate en que el prompt lo pidió explícitamente.
      - node --env-file: Node 20+ lee el .env sin instalar dotenv.
      Ejercicio: cambia el prompt de sistema para que resuma «para un niño de 10 años» y compara resultados.
    `,
  },
  {
    titulo: "API REST con Spring Boot",
    descripcion: "Une la ruta 02 con esta: una API de reservas guiada por skills y tests.",
    modelo: "deepseek",
    carpeta: "api-reservas",
    agente: "plan",
    sesion: [
      {
        tipo: "usuario",
        texto:
          "Proyecto Spring Boot 3 con Java 21, Maven y MySQL (ya creado con start.spring.io: Web, JPA, Validation, MySQL). Quiero una API de reservas: entidades Mesa y Reserva, una reserva pertenece a una mesa. ¿Qué endpoints propones? Solo la tabla, sin código.",
      },
      {
        tipo: "ia",
        texto:
          "`GET    /api/mesas` → lista de mesas\n`POST   /api/mesas` → crear mesa\n`GET    /api/reservas?fecha=` → reservas de un día\n`POST   /api/reservas` → crear (valida capacidad y solapes)\n`DELETE /api/reservas/{id}` → cancelar",
      },
      { tipo: "modo", modo: "build" },
      { tipo: "usuario", texto: "Perfecto. Implementa Mesa primero, con la skill crud-spring" },
      { tipo: "tool", herramienta: "skill", objetivo: "crud-spring" },
      { tipo: "tool", herramienta: "write", objetivo: "src/main/java/mesa/ (4 archivos)" },
      { tipo: "tool", herramienta: "bash", objetivo: "./mvnw test", salida: "Tests run: 6, Failures: 0" },
      { tipo: "usuario", texto: "Ahora Reserva. Regla: no se puede reservar una mesa ya ocupada en esa franja de 2 horas. Escribe primero el test de esa regla, y luego el código." },
      { tipo: "tool", herramienta: "write", objetivo: "src/test/java/reserva/ReservaServiceTest.java" },
      { tipo: "tool", herramienta: "bash", objetivo: "./mvnw test", salida: "✗ noPermiteReservaSolapada — expected ReservaSolapadaException" },
      { tipo: "tool", herramienta: "write", objetivo: "src/main/java/reserva/ (5 archivos)" },
      { tipo: "tool", herramienta: "bash", objetivo: "./mvnw test", salida: "Tests run: 14, Failures: 0" },
      { tipo: "ia", texto: "API completa: 5 endpoints, la regla de solapes cubierta por test (primero en rojo, luego en verde) y 14 tests pasando." },
    ],
    explicacion: `
      Un backend con IA sigue las mismas reglas que sin ella, solo que más rápido:
      - Diseño primero: la tabla de endpoints se discute en Plan. Cambiar una fila cuesta segundos.
      - Por partes: Mesa y luego Reserva. Nunca «toda la API» en un prompt.
      - Skills: la skill \`crud-spring\` del nivel anterior hace que todos los CRUD sean iguales.
      - Test primero (TDD): para la regla de negocio difícil, pide el test antes que el código. Si el test falla primero y pasa después, sabes que de verdad comprueba algo.
      Si aún no conoces Spring Boot, haz antes la ruta 02: la IA multiplica lo que sabes, no lo sustituye.
    `,
  },
];
