import type { EjemploIA } from "../../sesion";

/** Nivel 1: las piezas de un buen prompt, cada una frente a su versión floja. */
export const ejemplosPrompts: EjemploIA[] = [
  {
    titulo: "Sé específico",
    descripcion: "La IA no lee tu mente: lo que no dices, lo inventa.",
    antes: "haz un botón bonito",
    fallo: "¿Bonito cómo? ¿Dónde va? ¿Qué hace al pulsarlo? La IA elige por ti y casi nunca acierta.",
    modelo: "zen",
    carpeta: "cafe-aroma",
    sesion: [
      {
        tipo: "usuario",
        texto:
          "Crea src/components/BotonPedido.tsx: un botón «Pedir por WhatsApp» que abra wa.me/51922061911 con el texto «Hola, quiero hacer un pedido». Fondo #6b4226, texto crema, bordes redondeados y el icono FaWhatsapp de react-icons a la izquierda.",
      },
      { tipo: "tool", herramienta: "read", objetivo: "package.json" },
      { tipo: "tool", herramienta: "write", objetivo: "src/components/BotonPedido.tsx" },
      {
        tipo: "ia",
        texto: "Listo. Es un `<a>` con `target=\"_blank\"` y `rel=\"noopener noreferrer\"`, y el texto del mensaje va codificado con `encodeURIComponent`.",
      },
    ],
    explicacion: `
      Un prompt específico responde de antemano a las preguntas que la IA tendría que adivinar.
      - Qué: un botón que abre WhatsApp, no «un botón».
      - Dónde: el archivo exacto en el que va.
      - Cómo se ve: colores, forma e icono concretos.
      - Qué hace: la URL y el mensaje.
      Truco: antes de enviar, léelo como si fueras un programador nuevo en el equipo. Si tendrías que preguntar algo, añádelo al prompt.
    `,
  },
  {
    titulo: "Da contexto con @",
    descripcion: "Señala los archivos que importan en vez de esperar que la IA los encuentre.",
    antes: "añade un campo teléfono al formulario",
    fallo: "Hay tres formularios en el proyecto. La IA escoge uno, y valida el teléfono distinto que el resto de campos.",
    modelo: "deepseek",
    carpeta: "cafe-aroma",
    sesion: [
      {
        tipo: "usuario",
        texto:
          "Añade un campo «teléfono» (opcional, 9 dígitos) a @src/components/FormReserva.tsx. Valídalo igual que el email: mira cómo lo hace @src/utils/validar.ts y añade ahí la función nueva.",
      },
      { tipo: "tool", herramienta: "read", objetivo: "src/components/FormReserva.tsx" },
      { tipo: "tool", herramienta: "read", objetivo: "src/utils/validar.ts" },
      { tipo: "diff", archivo: "src/utils/validar.ts", lineas: "  export const esEmail = (s: string) => /^[^\\s@]+@[^\\s@]+$/.test(s);\n+ export const esTelefono = (s: string) => /^\\d{9}$/.test(s);" },
      { tipo: "diff", archivo: "src/components/FormReserva.tsx", lineas: "+ <Campo nombre=\"telefono\" etiqueta=\"Teléfono (opcional)\"\n+   validar={(v) => !v || esTelefono(v)} />" },
      { tipo: "ia", texto: "Campo añadido. Reutilicé el componente `Campo` y seguí el mismo patrón que `esEmail`." },
    ],
    explicacion: `
      El contexto es todo lo que la IA necesita saber y no está en tu frase: qué archivos, qué patrones, para quién.
      - @archivo: mete el archivo entero en la conversación. Es el contexto más barato y más preciso.
      - «Igual que…»: señalar un ejemplo existente hace que el código nuevo se parezca al tuyo y no al de internet.
      - Para quién: «lo leerá un cliente», «es para un junior», «va a producción» cambian mucho la respuesta.
      Más contexto no siempre es mejor: cita 2 o 3 archivos relevantes, no la carpeta entera.
    `,
  },
  {
    titulo: "Pon límites",
    descripcion: "Dile también lo que NO debe hacer: librerías, archivos o estilos prohibidos.",
    antes: "mejora el rendimiento de la página de la carta",
    fallo: "La IA instala tres librerías, reescribe el componente con otro patrón y cambia el diseño. Más rápido, sí… e irreconocible.",
    modelo: "deepseek",
    carpeta: "cafe-aroma",
    sesion: [
      {
        tipo: "usuario",
        texto:
          "La página @src/pages/Carta.tsx tarda en cargar. Mejora su rendimiento con estas reglas:\n- No instales dependencias.\n- No cambies el diseño ni los textos.\n- Toca solo Carta.tsx y sus componentes hijos.\nDime qué cambiaste y por qué.",
      },
      { tipo: "tool", herramienta: "read", objetivo: "src/pages/Carta.tsx" },
      { tipo: "pensar", texto: "Las 40 imágenes se cargan a la vez y el filtro se recalcula en cada render." },
      { tipo: "diff", archivo: "src/components/Producto.tsx", lineas: "- <img src={foto} alt={nombre} />\n+ <img src={foto} alt={nombre} loading=\"lazy\" width={320} height={240} />" },
      { tipo: "diff", archivo: "src/pages/Carta.tsx", lineas: "- const visibles = productos.filter(p => p.categoria === cat);\n+ const visibles = useMemo(\n+   () => productos.filter(p => p.categoria === cat), [cat]);" },
      { tipo: "ia", texto: "- `loading=\"lazy\"` y tamaño fijo: las fotos fuera de pantalla ya no se descargan al entrar.\n- `useMemo`: el filtro solo se recalcula al cambiar de categoría." },
    ],
    explicacion: `
      Los límites son la pieza que más se olvida y la que más disgustos evita.
      - Dependencias: «no instales nada» evita proyectos llenos de librerías que nadie pidió.
      - Alcance: «toca solo estos archivos» mantiene el cambio pequeño y fácil de revisar.
      - Lo intocable: diseño, textos, API pública, esquema de base de datos, tests…
      Escribirlos como lista con guiones ayuda: los modelos siguen mejor las reglas cuando están separadas y visibles.
    `,
  },
  {
    titulo: "Pide un formato de salida",
    descripcion: "Decide tú cómo llega la respuesta: tabla, JSON, archivo, lista de pasos…",
    antes: "¿qué endpoints tiene mi API?",
    fallo: "Recibes tres párrafos de prosa que tienes que releer y pasar a limpio tú mismo.",
    modelo: "zen",
    carpeta: "api-reservas",
    sesion: [
      {
        tipo: "usuario",
        texto:
          "Lista los endpoints de los controladores de src/main/java/. Respóndeme SOLO con una tabla Markdown de columnas: Método | Ruta | Controlador | ¿Requiere login?",
      },
      { tipo: "tool", herramienta: "grep", objetivo: "@(Get|Post|Put|Delete)Mapping", salida: "7 coincidencias en 2 archivos" },
      {
        tipo: "ia",
        texto:
          "`GET    | /api/reservas      | ReservaController | Sí`\n`POST   | /api/reservas      | ReservaController | Sí`\n`DELETE | /api/reservas/{id} | ReservaController | Sí`\n`GET    | /api/carta         | CartaController   | No`\n`POST   | /api/login         | AuthController    | No`",
      },
    ],
    explicacion: `
      El formato convierte la respuesta en algo que puedes usar sin retocar.
      - Tabla: comparar o inventariar (endpoints, dependencias, pros y contras).
      - JSON: cuando otro programa leerá la respuesta. Da el esquema exacto con un ejemplo.
      - Archivo: «guárdalo en docs/api.md» y la IA lo escribe directamente.
      - «SOLO»: evita introducciones y despedidas de relleno.
      Bonus: pedir una tabla obliga a la IA a ser exhaustiva, porque cada fila se puede comprobar.
    `,
  },
  {
    titulo: "Enseña con ejemplos",
    descripcion: "Uno o dos ejemplos valen más que diez reglas (few-shot prompting).",
    antes: "escribe mensajes de commit para mis cambios",
    fallo: "Cada commit sale con un estilo distinto: unos en inglés, otros con emojis, otros de cinco líneas.",
    modelo: "deepseek",
    carpeta: "cafe-aroma",
    sesion: [
      {
        tipo: "usuario",
        texto:
          "Escribe el mensaje de commit para los cambios actuales. Sigue exactamente este estilo:\n\nfeat(carta): añade filtro por categoría\nfix(reserva): valida que la fecha no sea pasada\n\nTipo en inglés, ámbito entre paréntesis, descripción en español y en minúscula, máximo 60 caracteres.",
      },
      { tipo: "tool", herramienta: "bash", objetivo: "git diff --staged --stat", salida: " src/components/Navbar.tsx | 18 ++++++---\n src/hooks/useTema.ts      | 24 ++++++++++" },
      { tipo: "ia", texto: "`feat(tema): añade modo oscuro con botón en la navbar`" },
    ],
    explicacion: `
      Few-shot prompting: das ejemplos de la salida que esperas y el modelo copia el patrón.
      - Los ejemplos fijan el estilo mejor que cualquier descripción: idioma, longitud, mayúsculas, tono.
      - Dos o tres ejemplos variados bastan. Si son todos iguales, la IA los copiará casi literalmente.
      - Combina ejemplo + regla: el ejemplo enseña la forma y la regla («máximo 60 caracteres») marca el límite.
      Si usas este prompt a menudo, conviértelo en un comando /commit (lo verás en la lección de Skills).
    `,
  },
  {
    titulo: "Divide y deja que pregunte",
    descripcion: "Para tareas grandes: primero preguntas, luego plan, luego código.",
    antes: "hazme un sistema de reservas completo",
    fallo: "Un pedido enorme y ambiguo: la IA genera cientos de líneas con decisiones que no compartes y es imposible de revisar.",
    modelo: "deepseek",
    carpeta: "cafe-aroma",
    agente: "plan",
    sesion: [
      {
        tipo: "usuario",
        texto:
          "Quiero un sistema de reservas de mesas para la cafetería. Antes de proponer nada, hazme las preguntas que necesites (máximo 5) para entender bien qué necesito.",
      },
      {
        tipo: "ia",
        texto:
          "- ¿Las reservas son solo web o también por teléfono (el personal las apunta)?\n- ¿Cuántas mesas hay y de cuántas personas?\n- ¿Necesitas confirmar cada reserva o se aceptan solas?\n- ¿Hay que avisar al cliente por correo o WhatsApp?\n- ¿Dónde guardamos los datos: ya tienes base de datos o empezamos con un archivo?",
      },
      { tipo: "usuario", texto: "Solo web, 8 mesas de 4, se aceptan solas, aviso por correo, y aún no hay base de datos. Ahora dame un plan en pasos pequeños." },
      {
        tipo: "ia",
        texto:
          "1. Modelo `Reserva` y datos de prueba.\n2. Formulario con fecha, hora y personas.\n3. Comprobar disponibilidad (8 mesas por franja).\n4. Guardar en SQLite.\n5. Correo de confirmación.\nCada paso se puede probar solo. ¿Empezamos por el 1?",
      },
    ],
    explicacion: `
      Las tareas grandes se rompen en dos sitios: cuando la IA adivina requisitos y cuando entrega demasiado código de golpe.
      - «Hazme preguntas»: invierte la conversación. La IA detecta lo que falta en tu pedido mejor de lo que crees.
      - Plan en pasos: con el agente Plan (Tab), sin tocar archivos.
      - Un paso por prompt: implementas el 1, lo pruebas, haces commit y sigues con el 2.
      Así cada cambio es pequeño, revisable y fácil de deshacer con /undo si algo sale mal.
    `,
  },
];
