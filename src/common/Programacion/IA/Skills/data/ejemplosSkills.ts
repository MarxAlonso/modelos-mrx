import type { EjemploIA } from "../../sesion";

/** Nivel 2: skills, recetas que la IA carga sola cuando la tarea las necesita. */
export const ejemplosSkills: EjemploIA[] = [
  {
    titulo: "Anatomía de un SKILL.md",
    descripcion: "Una skill para crear landing pages: la IA la carga sola cuando se la necesita.",
    modelo: "deepseek",
    carpeta: "cafe-aroma",
    sesion: [
      { tipo: "usuario", texto: "Crea la página «Nosotros» con la historia de la cafetería" },
      { tipo: "pensar", texto: "Es una página de la web: la skill landing-page tiene las reglas para esto." },
      { tipo: "tool", herramienta: "skill", objetivo: "landing-page" },
      { tipo: "tool", herramienta: "read", objetivo: "src/components/Hero.tsx" },
      { tipo: "tool", herramienta: "write", objetivo: "src/data/nosotros.ts" },
      { tipo: "tool", herramienta: "write", objetivo: "src/pages/Nosotros.tsx" },
      { tipo: "tool", herramienta: "bash", objetivo: "pnpm build", salida: "✓ built in 1.92s" },
      {
        tipo: "ia",
        texto: "Página creada siguiendo la skill: hero corto, historia en 3 bloques, foto con `alt`, CTA a la carta y metadatos SEO. Revisada a 375 px y 1280 px.",
      },
    ],
    archivos: [
      {
        nombre: ".opencode/skills/landing-page/SKILL.md",
        lenguaje: "md",
        codigo: `---
        name: landing-page
        description: Crea o modifica páginas y secciones de la web pública. Úsala para cualquier página nueva, hero, sección o rediseño.
        ---

        ## Qué hago
        Construyo páginas de marketing claras, rápidas y accesibles.

        ## Estructura de cada página
        1. Hero: titular de máximo 8 palabras, una frase de apoyo y UN botón principal.
        2. Contenido en bloques cortos (máximo 3 frases por bloque).
        3. Cierre con una llamada a la acción.

        ## Reglas
        - Imágenes con \`alt\` descriptivo, \`loading="lazy"\` y tamaño fijo.
        - Un solo \`h1\` por página; títulos en orden.
        - \`<title>\` y \`<meta name="description">\` en cada página.
        - Contraste AA como mínimo.

        ## Antes de terminar
        - \`pnpm build\` sin errores.
        - Revisa a 375 px y a 1280 px.`,
      },
    ],
    explicacion: `
      Una skill es una carpeta con un SKILL.md: instrucciones para un tipo de tarea que la IA carga solo cuando las necesita.
      - Dónde: \`.opencode/skills/<nombre>/SKILL.md\`. OpenCode también lee \`.claude/skills/\` y \`.agents/skills/\`: la misma skill sirve en varias herramientas.
      - name: en minúsculas y con guiones; igual que el nombre de la carpeta.
      - description: lo más importante. El agente solo ve la descripción de cada skill y, por ella, decide si cargarla.
      - Cuerpo: las instrucciones completas. Solo entran en el contexto cuando el agente llama a la herramienta \`skill\`.
      Mira la sesión: no escribiste «usa la skill». El agente leyó la descripción, vio que encajaba y la cargó él solo.
    `,
  },
  {
    titulo: "Una skill para resumir textos",
    descripcion: "Una receta de resumen con plantilla propia que sirve en cualquier proyecto.",
    modelo: "zen",
    carpeta: "notas",
    sesion: [
      { tipo: "usuario", texto: "Resúmeme @reuniones/2026-09-30.md para mandarlo al equipo" },
      { tipo: "tool", herramienta: "skill", objetivo: "resumir-texto" },
      { tipo: "tool", herramienta: "read", objetivo: "reuniones/2026-09-30.md" },
      {
        tipo: "ia",
        texto:
          "En una frase: se aprueba lanzar las reservas online el 15 de octubre.\nDecisiones:\n- El pago será en el local, no online.\n- Máximo 8 mesas reservables por franja.\nTareas:\n- Marx: formulario de reserva (10/10)\n- Ana: textos del correo de confirmación (08/10)\nPendiente: no se decidió si habrá lista de espera.",
      },
    ],
    archivos: [
      {
        nombre: "~/.config/opencode/skills/resumir-texto/SKILL.md",
        lenguaje: "md",
        codigo: `---
        name: resumir-texto
        description: Resume documentos, actas de reunión, artículos o documentación técnica. Úsala siempre que pidan un resumen, un TL;DR o "lo importante" de un texto.
        ---

        ## Cómo resumo
        1. Leo el texto completo antes de escribir nada.
        2. Identifico el tipo: acta, artículo, documentación o conversación.
        3. Uso la plantilla de ese tipo.

        ## Plantilla para actas
        En una frase: <la decisión o conclusión principal>
        Decisiones:
        - <una por línea>
        Tareas:
        - <persona>: <tarea> (<fecha límite>)
        Pendiente: <lo que quedó sin decidir, o «nada»>

        ## Reglas
        - Nunca añado información que no esté en el texto.
        - Fechas en formato dd/mm.
        - Máximo 120 palabras salvo que pidan otra cosa.`,
      },
    ],
    explicacion: `
      Esta skill está en la carpeta global (\`~/.config/opencode/skills/\`): sirve en todos tus proyectos, no solo en uno.
      - Plantillas por tipo: la skill decide el formato según lo que resume. Un prompt suelto no lo haría igual cada vez.
      - description con sinónimos: «resumen», «TL;DR», «lo importante». Así el agente la reconoce aunque lo pidas de otra forma.
      - Reglas anti-invención: en los resúmenes es la regla más importante.
      Este es el poder de las skills: el prompt fue de una línea, pero el resultado tiene la calidad de un prompt de 20 líneas.
    `,
  },
  {
    titulo: "Skills con archivos de apoyo",
    descripcion: "Una skill puede traer plantillas y checklists que la IA lee solo si los necesita.",
    modelo: "deepseek",
    carpeta: "api-reservas",
    sesion: [
      { tipo: "usuario", texto: "Crea el CRUD de Mesa (número, capacidad, zona)" },
      { tipo: "tool", herramienta: "skill", objetivo: "crud-spring" },
      { tipo: "tool", herramienta: "read", objetivo: ".opencode/skills/crud-spring/plantillas/Controller.java" },
      { tipo: "tool", herramienta: "write", objetivo: "src/main/java/mesa/Mesa.java" },
      { tipo: "tool", herramienta: "write", objetivo: "src/main/java/mesa/MesaRepository.java" },
      { tipo: "tool", herramienta: "write", objetivo: "src/main/java/mesa/MesaService.java" },
      { tipo: "tool", herramienta: "write", objetivo: "src/main/java/mesa/MesaController.java" },
      { tipo: "tool", herramienta: "write", objetivo: "src/test/java/mesa/MesaControllerTest.java" },
      { tipo: "tool", herramienta: "bash", objetivo: "./mvnw test", salida: "Tests run: 23, Failures: 0, Errors: 0" },
      { tipo: "ia", texto: "CRUD de `Mesa` creado con las 4 capas de la plantilla, validaciones `@NotNull` y `@Min(1)`, y 5 tests nuevos. Todo en verde." },
    ],
    archivos: [
      {
        nombre: ".opencode/skills/crud-spring/SKILL.md",
        lenguaje: "md",
        codigo: `---
        name: crud-spring
        description: Crea un CRUD completo (entidad, repositorio, servicio, controlador REST y tests) en este proyecto Spring Boot.
        ---

        ## Pasos
        1. Lee plantillas/Controller.java y plantillas/Service.java
           y copia su estructura exacta.
        2. Crea los archivos en src/main/java/<entidad en minúsculas>/.
        3. Valida la entrada con anotaciones de jakarta.validation.
        4. Escribe un test por endpoint en src/test/java/.
        5. Ejecuta ./mvnw test. No termines con tests en rojo.

        ## Archivos de apoyo
        - plantillas/: el código de referencia del proyecto.
        - checklist.md: revísalo antes de dar la tarea por terminada.`,
      },
      {
        nombre: "checklist.md",
        lenguaje: "md",
        codigo: `# Checklist de un CRUD

        - [ ] Los endpoints devuelven 201 al crear y 404 si no existe
        - [ ] Los errores de validación devuelven 400 con un mensaje claro
        - [ ] Ningún endpoint devuelve la entidad JPA directamente: usa un DTO
        - [ ] DELETE comprueba que el recurso pertenece al usuario
        - [ ] Hay al menos un test por endpoint`,
      },
    ],
    explicacion: `
      La carpeta de una skill puede tener más archivos que el SKILL.md: plantillas, checklists, ejemplos o scripts.
      - Carga progresiva: al principio la IA solo ve el nombre y la descripción. Al usar la skill lee el SKILL.md, y solo si lo necesita, los archivos de apoyo.
      - Plantillas: es la forma más fiable de que el código nuevo sea idéntico en estructura al que ya tienes.
      - Checklist: convierte tu experiencia (los errores que ya cometiste) en algo que la IA revisa cada vez.
      Así puedes tener decenas de skills sin llenar el contexto: cada una solo ocupa espacio cuando se usa.
    `,
  },
  {
    titulo: "¿AGENTS.md, comando o skill?",
    descripcion: "Las tres formas de enseñar a la IA y cuándo usar cada una.",
    modelo: "zen",
    carpeta: "cafe-aroma",
    agente: "plan",
    sesion: [
      {
        tipo: "usuario",
        texto:
          "Quiero que la IA siempre use pnpm, que pueda generar resúmenes de reuniones con mi formato y tener un atajo para crear commits. ¿Dónde pongo cada cosa?",
      },
      {
        tipo: "ia",
        texto:
          "- «Siempre usa pnpm» → `AGENTS.md`. Es una regla para todas las tareas.\n- Resúmenes de reuniones → una skill `resumir-texto`. Es una receta que yo debo reconocer cuando la pides, la digas como la digas.\n- Atajo para commits → un comando `/commit`. Eres tú quien decide cuándo lanzarlo.",
      },
    ],
    explicacion: `
      Las tres herramientas se complementan. La pregunta clave es: ¿quién decide cuándo se usa?
      - AGENTS.md: siempre activo. Reglas cortas que valen para todas las tareas. Si crece mucho, gasta contexto en cada mensaje.
      - Comando (/algo): lo lanzas tú. Prompts que repites con frecuencia, con argumentos.
      - Skill: la elige la IA según la descripción. Recetas largas para un tipo de tarea; solo ocupan contexto cuando se usan.
      Regla práctica: empieza escribiendo prompts a mano. Cuando repitas uno tres veces, conviértelo en comando. Cuando quieras que la IA lo use sin que se lo pidas, conviértelo en skill.
    `,
  },
];
