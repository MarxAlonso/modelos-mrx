/** Una pieza de un prompt: se enciende y su texto se suma al prompt. */
export interface PiezaPrompt {
  clave: "rol" | "contexto" | "tarea" | "restricciones" | "formato" | "ejemplo" | "terminado";
  nombre: string;
  /** Qué aporta la pieza, en una línea. */
  ayuda: string;
  texto: string;
}

export interface EscenarioPrompt {
  nombre: string;
  /** El pedido tal como sale la primera vez, sin pensarlo. */
  base: string;
  piezas: PiezaPrompt[];
  /** Lo que hará la IA según lo completo que esté el prompt: de flojo a excelente. */
  respuestas: [string, string, string, string];
}

/** Cuánto pesa cada pieza en la calidad del prompt; suman 100. */
export const PESOS: Record<PiezaPrompt["clave"], number> = {
  tarea: 25,
  contexto: 20,
  restricciones: 15,
  formato: 15,
  terminado: 10,
  ejemplo: 10,
  rol: 5,
};

export const COLORES: Record<PiezaPrompt["clave"], string> = {
  rol: "#c4b5fd",
  contexto: "#22d3ee",
  tarea: "#fab283",
  restricciones: "#f472b6",
  formato: "#facc15",
  ejemplo: "#4ade80",
  terminado: "#60a5fa",
};

export const ESCENARIOS: EscenarioPrompt[] = [
  {
    nombre: "Una landing page",
    base: "hazme una página web para una cafetería",
    piezas: [
      {
        clave: "rol",
        nombre: "Rol",
        ayuda: "Desde qué oficio debe pensar la IA.",
        texto: "Actúa como desarrollador front-end que cuida la accesibilidad y el rendimiento.",
      },
      {
        clave: "contexto",
        nombre: "Contexto",
        ayuda: "Para quién es, qué hay ya hecho y con qué tecnología.",
        texto:
          "Es la landing de «Café Aroma», una cafetería de barrio en Lima. El proyecto ya existe: Vite + React + Tailwind (mira @package.json y @src/App.tsx).",
      },
      {
        clave: "tarea",
        nombre: "Tarea concreta",
        ayuda: "Qué se construye exactamente, sección por sección.",
        texto:
          "Crea la página de inicio con 4 secciones: hero con CTA «Ver carta», carta con 6 productos (nombre, precio, foto), horario y ubicación con mapa embebido, y un pie con redes.",
      },
      {
        clave: "restricciones",
        nombre: "Restricciones",
        ayuda: "Lo que NO debe hacer: librerías, estilos, límites.",
        texto:
          "No instales dependencias nuevas. Usa solo Tailwind. Paleta: marrón #6b4226, crema #f5ebe0. Mobile first. Nada de lorem ipsum: textos reales en español.",
      },
      {
        clave: "formato",
        nombre: "Formato de salida",
        ayuda: "Cómo quieres recibir el trabajo.",
        texto:
          "Un componente por sección en src/components/. Los productos en src/data/carta.ts. Al final, un resumen de los archivos creados.",
      },
      {
        clave: "ejemplo",
        nombre: "Ejemplo o referencia",
        ayuda: "Algo que imitar: un archivo, una captura, un estilo.",
        texto: "Sigue el estilo de los componentes de @src/components/Navbar.tsx (nombres, props tipadas, export con nombre).",
      },
      {
        clave: "terminado",
        nombre: "Criterio de terminado",
        ayuda: "Cómo sabéis los dos que está hecho.",
        texto: "Está terminado cuando `pnpm build` pasa sin errores y se ve bien a 375 px y a 1280 px.",
      },
    ],
    respuestas: [
      "La IA tiene que adivinarlo todo: un index.html suelto con Bootstrap por CDN, «Lorem ipsum», colores al azar y un menú que no cabe en el móvil. Tendrás que pedir cambios diez veces.",
      "Ya entiende de qué va, pero aún inventa: elige ella las secciones, instala una librería de iconos que no pediste y mete todo en App.tsx.",
      "Resultado usable: las secciones correctas, tu paleta y tu stack. Quizá tengas que ajustar dónde guarda los archivos o revisar la build tú mismo.",
      "Lo hace a la primera: componentes en su sitio, datos separados, estilo coherente con tu proyecto y comprueba la build antes de decir «listo».",
    ],
  },
  {
    nombre: "Resumir un texto",
    base: "resúmeme esto",
    piezas: [
      {
        clave: "rol",
        nombre: "Rol",
        ayuda: "Desde qué oficio debe pensar la IA.",
        texto: "Actúa como editor técnico que escribe para desarrolladores junior.",
      },
      {
        clave: "contexto",
        nombre: "Contexto",
        ayuda: "Qué es el texto y para qué quieres el resumen.",
        texto:
          "El texto es la documentación de la API de pagos (@docs/pagos.md). Lo leerá un equipo nuevo que empieza mañana a integrarla.",
      },
      {
        clave: "tarea",
        nombre: "Tarea concreta",
        ayuda: "Qué resumen exactamente: extensión y enfoque.",
        texto: "Resume en 5 viñetas lo imprescindible para hacer el primer cobro: autenticación, endpoint, campos obligatorios, errores y límites.",
      },
      {
        clave: "restricciones",
        nombre: "Restricciones",
        ayuda: "Lo que no debe hacer.",
        texto: "No inventes nada que no esté en el texto; si falta un dato, escribe «no lo dice». Máximo 120 palabras.",
      },
      {
        clave: "formato",
        nombre: "Formato de salida",
        ayuda: "Cómo quieres recibirlo.",
        texto: "Markdown: un título, las 5 viñetas y un bloque de código con un `curl` de ejemplo.",
      },
      {
        clave: "ejemplo",
        nombre: "Ejemplo o referencia",
        ayuda: "Un modelo de lo que esperas.",
        texto: "Viñeta de ejemplo: «**Auth** · Header `Authorization: Bearer <key>`; la key sale del panel → Ajustes.»",
      },
      {
        clave: "terminado",
        nombre: "Criterio de terminado",
        ayuda: "Cómo comprobar que sirve.",
        texto: "Guárdalo en docs/resumen-pagos.md y dime qué dudas te quedaron del texto original.",
      },
    ],
    respuestas: [
      "Un párrafo genérico de diez líneas que repite la introducción del documento. No sabes si está completo ni si ha inventado algo.",
      "Entiende para quién es, pero el resumen sale largo y mezcla lo importante con detalles de versiones antiguas.",
      "Cinco viñetas útiles y sin inventos. Falta darle un formato que puedas pegar directamente en la wiki del equipo.",
      "Un resumen listo para la wiki: viñetas con el mismo estilo, un curl que funciona, guardado en su archivo y con las dudas señaladas.",
    ],
  },
  {
    nombre: "Arreglar un bug",
    base: "no funciona el login, arréglalo",
    piezas: [
      {
        clave: "rol",
        nombre: "Rol",
        ayuda: "Desde qué oficio debe pensar la IA.",
        texto: "Actúa como desarrollador backend con experiencia en Spring Security.",
      },
      {
        clave: "contexto",
        nombre: "Contexto",
        ayuda: "Dónde ocurre, desde cuándo y el error exacto.",
        texto:
          "Desde que añadí el registro, POST /api/login devuelve 401 aunque la contraseña es correcta. Error en consola: «Encoded password does not look like BCrypt». Archivos: @src/main/java/auth/AuthService.java y @src/main/java/config/SecurityConfig.java",
      },
      {
        clave: "tarea",
        nombre: "Tarea concreta",
        ayuda: "Qué quieres: diagnóstico, arreglo, o ambos.",
        texto: "Primero explícame la causa en 2-3 frases. Después aplica el arreglo mínimo.",
      },
      {
        clave: "restricciones",
        nombre: "Restricciones",
        ayuda: "Lo que no se toca.",
        texto: "No cambies la API pública ni el esquema de la base de datos. No toques los tests existentes.",
      },
      {
        clave: "formato",
        nombre: "Formato de salida",
        ayuda: "Cómo quieres recibirlo.",
        texto: "Muéstrame el diff de cada archivo que cambies y explica cada cambio en una línea.",
      },
      {
        clave: "ejemplo",
        nombre: "Ejemplo o referencia",
        ayuda: "Cómo reproducirlo.",
        texto: "Para reproducirlo: `curl -X POST localhost:8080/api/login -d '{\"email\":\"ana@mail.com\",\"password\":\"123456\"}'`",
      },
      {
        clave: "terminado",
        nombre: "Criterio de terminado",
        ayuda: "La prueba que demuestra que está arreglado.",
        texto: "Añade un test que registre un usuario y haga login; termina cuando `./mvnw test` pase entero.",
      },
    ],
    respuestas: [
      "La IA no sabe qué falla: reescribe medio sistema de autenticación «por si acaso» y rompe otras cosas. Es el prompt más caro que existe.",
      "Con el error exacto ya encuentra la pista (la contraseña no se cifra al registrar), pero cambia más archivos de los necesarios.",
      "Explica la causa y hace un arreglo pequeño. Aún no hay una prueba que impida que el bug vuelva.",
      "Diagnóstico claro, un cambio de una línea en el registro, un test que lo demuestra y la suite completa en verde.",
    ],
  },
];
