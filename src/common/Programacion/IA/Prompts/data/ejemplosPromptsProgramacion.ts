import type { EjemploIA } from "../../sesion";

/** Nivel 2: los prompts que un programador usa cada día. */
export const ejemplosPromptsProgramacion: EjemploIA[] = [
  {
    titulo: "Entender código ajeno",
    descripcion: "Pide una explicación al nivel que necesitas, no una traducción línea a línea.",
    antes: "explícame este código",
    fallo: "Recibes una paráfrasis de cada línea («aquí se declara una variable…») y sigues sin entender para qué sirve.",
    modelo: "zen",
    carpeta: "api-reservas",
    sesion: [
      {
        tipo: "usuario",
        texto:
          "Soy junior y es mi primera semana en este proyecto. Explícame @src/main/java/config/SecurityConfig.java así:\n1. Para qué sirve, en una frase.\n2. Qué pasa con una petición a /api/reservas, paso a paso.\n3. Las 2 líneas que nunca debería tocar sin preguntar.",
      },
      { tipo: "tool", herramienta: "read", objetivo: "src/main/java/config/SecurityConfig.java" },
      {
        tipo: "ia",
        texto:
          "1. Decide qué rutas son públicas y cuáles piden un token JWT.\n2. La petición pasa por `JwtFilter`, que lee el header `Authorization`; si el token es válido, el usuario queda autenticado y llega al controlador; si no, recibe 401.\n3. `.csrf(c -> c.disable())` (correcto solo porque la API no usa cookies) y `.sessionCreationPolicy(STATELESS)`.",
      },
    ],
    explicacion: `
      Una buena pregunta sobre código dice quién eres y qué quieres sacar en limpio.
      - Tu nivel: «soy junior» o «vengo de Python» cambian el vocabulario de la respuesta.
      - Estructura: pedir los puntos numerados evita el monólogo y te deja ir al grano.
      - Recorrido: «qué pasa con una petición» enseña el flujo, que es lo que de verdad cuesta entender.
      - Riesgos: preguntar qué no tocar es la forma más rápida de aprender las trampas de un proyecto.
    `,
  },
  {
    titulo: "Depurar con el error exacto",
    descripcion: "Pega el error completo, cómo reproducirlo y lo que ya probaste.",
    antes: "me sale un error, ayuda",
    fallo: "Sin el mensaje de error la IA solo puede listar las 10 causas más comunes. Ninguna es la tuya.",
    modelo: "deepseek",
    carpeta: "cafe-aroma",
    sesion: [
      {
        tipo: "usuario",
        texto:
          "Al abrir /carta la página sale en blanco. Consola del navegador:\n\nTypeError: Cannot read properties of undefined (reading 'map')\n    at Carta (Carta.tsx:14:22)\n\nPasa solo la primera vez que se abre; al recargar funciona. Ya comprobé que la API responde bien. Encuentra la causa antes de cambiar nada.",
      },
      { tipo: "tool", herramienta: "read", objetivo: "src/pages/Carta.tsx" },
      { tipo: "pensar", texto: "`productos` es undefined hasta que llega la respuesta: el estado inicial no está definido." },
      {
        tipo: "ia",
        texto: "Causa: `useState()` empieza en `undefined` y el primer render hace `productos.map` antes de que llegue el `fetch`. Al recargar funciona porque la respuesta ya está en caché. ¿Aplico el arreglo?",
      },
      { tipo: "usuario", texto: "Sí" },
      { tipo: "diff", archivo: "src/pages/Carta.tsx", lineas: "- const [productos, setProductos] = useState<Producto[]>();\n+ const [productos, setProductos] = useState<Producto[]>([]);" },
    ],
    explicacion: `
      Para depurar, la IA necesita lo mismo que un compañero sentado a tu lado:
      - El error literal: copiado entero, con la línea y el archivo. Nunca «un error de map».
      - Cómo reproducirlo: cuándo pasa y cuándo no («solo la primera vez») es la pista más valiosa.
      - Qué descartaste: evita que la IA te mande a revisar lo que ya revisaste.
      - «Encuentra la causa antes de cambiar nada»: separa diagnóstico y arreglo, así entiendes el bug y no solo lo tapas.
      Con \`!comando\` puedes ejecutar el programa dentro de OpenCode y el error entra solo en la conversación.
    `,
  },
  {
    titulo: "Refactorizar sin romper",
    descripcion: "Mejora el código con una red de seguridad: los tests deben seguir pasando.",
    antes: "limpia este archivo",
    fallo: "«Limpiar» no significa nada concreto: la IA cambia nombres, formato y lógica a la vez, y algo deja de funcionar.",
    modelo: "deepseek",
    carpeta: "cafe-aroma",
    sesion: [
      {
        tipo: "usuario",
        texto:
          "Refactoriza @src/utils/pedido.ts: la función calcularTotal tiene 80 líneas con if anidados. Extrae funciones pequeñas con nombres claros. El comportamiento debe ser idéntico: ejecuta `pnpm test` antes y después.",
      },
      { tipo: "tool", herramienta: "bash", objetivo: "pnpm test pedido", salida: "✓ 9 tests pasados" },
      { tipo: "tool", herramienta: "read", objetivo: "src/utils/pedido.ts" },
      {
        tipo: "diff",
        archivo: "src/utils/pedido.ts",
        lineas: "+ const subtotal = (items: Item[]) => items.reduce((t, i) => t + i.precio * i.cantidad, 0);\n+ const descuento = (total: number, cupon?: Cupon) => cupon ? total * cupon.porcentaje : 0;\n+ const envio = (total: number) => (total >= 50 ? 0 : 5);\n  export const calcularTotal = (pedido: Pedido) => {\n-   // 80 líneas…\n+   const base = subtotal(pedido.items);\n+   return base - descuento(base, pedido.cupon) + envio(base);",
      },
      { tipo: "tool", herramienta: "bash", objetivo: "pnpm test pedido", salida: "✓ 9 tests pasados" },
      { tipo: "ia", texto: "De 80 a 12 líneas en 3 funciones puras. Mismos 9 tests en verde antes y después." },
    ],
    explicacion: `
      Refactorizar es cambiar la forma sin cambiar lo que hace. El prompt tiene que proteger esa promesa.
      - Objetivo concreto: «extrae funciones pequeñas», no «límpialo».
      - Red de seguridad: tests antes y después. Si no hay tests, pide primero que los escriba (siguiente ejemplo).
      - Un tipo de cambio por prompt: o renombrar, o extraer funciones, o cambiar la lógica. Nunca todo junto.
    `,
  },
  {
    titulo: "Escribir tests",
    descripcion: "Pide casos concretos, incluidos los raros, no «tests para esto».",
    antes: "hazle tests",
    fallo: "Salen tests que solo prueban el caso feliz y pasan siempre, aunque el código esté mal.",
    modelo: "zen",
    carpeta: "cafe-aroma",
    sesion: [
      {
        tipo: "usuario",
        texto:
          "Escribe tests con Vitest para esReservaValida() en @src/utils/reserva.ts. Cubre: caso válido, fecha pasada, más de 4 personas, 0 personas, hora fuera de horario (8:00–20:00) y justo en el límite (20:00). Un `it` por caso, con nombres en español.",
      },
      { tipo: "tool", herramienta: "read", objetivo: "src/utils/reserva.ts" },
      { tipo: "tool", herramienta: "write", objetivo: "src/utils/reserva.test.ts" },
      { tipo: "tool", herramienta: "bash", objetivo: "pnpm vitest run reserva", salida: "✗ acepta una reserva justo a las 20:00\n✓ 5 pasados · 1 fallado" },
      { tipo: "ia", texto: "Un test falla y es un bug real: el código usa `hora < 20` y deja fuera las 20:00. ¿Lo corrijo a `<=` o el horario termina a las 19:59?" },
    ],
    explicacion: `
      Un test vale lo que valen sus casos. Los casos los decides tú, o se los pides explícitamente a la IA.
      - Casos límite: cero, uno, el máximo, justo en el borde. Ahí viven los bugs.
      - Casos inválidos: lo que el código debe rechazar.
      - Framework y estilo: «Vitest, un it por caso, nombres en español».
      Fíjate en el final: el test destapó un bug y la IA pregunta en vez de decidir sola. Una regla en AGENTS.md como «si un test revela un bug, pregunta antes de corregirlo» consigue esto siempre.
    `,
  },
  {
    titulo: "Revisar código",
    descripcion: "Usa la IA como revisor antes de hacer commit, con criterios claros.",
    antes: "¿está bien mi código?",
    fallo: "«¡Se ve genial!» y tres sugerencias cosméticas. Las IAs tienden a dar la razón si no les pides crítica.",
    modelo: "deepseek",
    carpeta: "api-reservas",
    agente: "plan",
    sesion: [
      {
        tipo: "usuario",
        texto:
          "Revisa mis cambios sin editar nada (!git diff). Busca SOLO: bugs, problemas de seguridad y casos no controlados. Ignora estilo y formato. Ordena por gravedad y di en qué línea está cada problema.",
      },
      { tipo: "tool", herramienta: "bash", objetivo: "git diff", salida: "src/main/java/reserva/ReservaController.java | 34 +++++++" },
      {
        tipo: "ia",
        texto:
          "- **Grave** · línea 41: `DELETE /api/reservas/{id}` no comprueba que la reserva sea del usuario. Cualquiera puede borrar reservas ajenas.\n- **Media** · línea 28: si `personas` llega `null`, `personas > 4` lanza `NullPointerException` (500 en vez de 400).\n- **Baja** · línea 19: `findAll()` sin paginación; con muchas reservas será lento.",
      },
    ],
    explicacion: `
      Para que la revisión sirva, pide crítica de forma explícita y acota qué buscar.
      - Sin editar nada: usa el agente Plan. Revisar y arreglar son dos pasos distintos.
      - Criterios: bugs, seguridad y casos no controlados. Si no los das, la IA comenta espacios y nombres.
      - Orden por gravedad y línea exacta: puedes ir directo a lo importante.
      - Dale permiso para ser dura: «no me des la razón por darla» funciona sorprendentemente bien.
    `,
  },
  {
    titulo: "Resumir un texto largo",
    descripcion: "Convierte documentación de 30 páginas en lo que de verdad necesitas.",
    antes: "resume esto",
    fallo: "Un resumen genérico que repite la introducción y omite justo el dato que buscabas.",
    modelo: "zen",
    carpeta: "api-reservas",
    sesion: [
      {
        tipo: "usuario",
        texto:
          "Lee https://docs.ejemplo-pagos.com/v2/cobros y resume SOLO lo necesario para hacer un primer cobro desde Spring Boot: autenticación, endpoint, campos obligatorios y errores típicos. Máximo 6 viñetas. Si algo no lo dice el texto, escribe «no lo dice». Guárdalo en docs/pagos.md.",
      },
      { tipo: "tool", herramienta: "webfetch", objetivo: "https://docs.ejemplo-pagos.com/v2/cobros" },
      { tipo: "tool", herramienta: "write", objetivo: "docs/pagos.md" },
      {
        tipo: "ia",
        texto:
          "- Auth: header `Authorization: Bearer <clave_secreta>`\n- Endpoint: `POST /v2/charges`\n- Obligatorios: `amount` (en céntimos), `currency`, `source_token`\n- Errores: `card_declined` (402), `invalid_amount` (400)\n- Idempotencia: header `Idempotency-Key` recomendado\n- Límite de peticiones: no lo dice",
      },
    ],
    explicacion: `
      Resumir bien es elegir. El prompt le dice a la IA con qué criterio elegir.
      - Para qué: «para hacer un primer cobro» decide qué entra y qué sobra.
      - Extensión: un número concreto de viñetas o de palabras.
      - Honestidad: «si no lo dice, escribe "no lo dice"» reduce mucho las invenciones (alucinaciones).
      - Destino: guardarlo en un archivo lo convierte en documentación del proyecto.
      La herramienta \`WebFetch\` deja que OpenCode lea una URL. Con un archivo local, usa @docs/archivo.md.
    `,
  },
];
