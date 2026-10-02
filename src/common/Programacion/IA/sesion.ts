import type { ArchivoEjemplo } from "../Leccion/Leccion";

/** Las herramientas con las que el agente de OpenCode toca el proyecto. */
export type Herramienta = "read" | "write" | "edit" | "bash" | "glob" | "grep" | "list" | "skill" | "webfetch" | "todowrite";

/**
 * Una línea de una sesión grabada de OpenCode:
 * - `usuario`: el prompt; se teclea primero en la caja de entrada;
 * - `comando`: un comando con barra (`/init`, `/connect`) o con `!`; también se teclea;
 * - `modo`: se pulsa Tab y cambia el agente entre Build y Plan;
 * - `pensar`: el razonamiento del modelo, en gris;
 * - `tool`: una herramienta que usa el agente y, si la hay, su salida;
 * - `diff`: un cambio en un archivo; cada línea empieza por `+`, `-` o espacio;
 * - `ia`: la respuesta del modelo.
 */
export type LineaSesion =
  | { tipo: "usuario"; texto: string }
  | { tipo: "comando"; texto: string; salida?: string }
  | { tipo: "modo"; modo: Agente }
  | { tipo: "pensar"; texto: string }
  | { tipo: "tool"; herramienta: Herramienta; objetivo: string; salida?: string }
  | { tipo: "diff"; archivo: string; lineas: string }
  | { tipo: "ia"; texto: string };

export type Agente = "build" | "plan";

/** Con qué modelo se graba la sesión: todos sirven, unos cuestan y otros no. */
export type ModeloId = "deepseek" | "zen" | "openrouter" | "ollama";

export interface Modelo {
  nombre: string;
  proveedor: string;
  /** Precio aproximado por cada mil tokens, en dólares; 0 si es gratis. */
  precio: number;
}

export const MODELOS: Record<ModeloId, Modelo> = {
  deepseek: { nombre: "DeepSeek V4 Pro", proveedor: "DeepSeek", precio: 0.0006 },
  zen: { nombre: "Big Pickle", proveedor: "OpenCode Zen · free", precio: 0 },
  openrouter: { nombre: "qwen3-coder:free", proveedor: "OpenRouter", precio: 0 },
  ollama: { nombre: "qwen2.5-coder:7b", proveedor: "Ollama (local)", precio: 0 },
};

/** Un ejemplo de la ruta de IA: un prompt, lo que hace OpenCode con él y por qué. */
export interface EjemploIA {
  titulo: string;
  descripcion: string;
  /** Un prompt flojo para comparar con el bueno, que es el primer `usuario` de la sesión. */
  antes?: string;
  /** Por qué falla el prompt flojo, en una línea. */
  fallo?: string;
  sesion: LineaSesion[];
  /** Con qué agente arranca la sesión. */
  agente?: Agente;
  modelo?: ModeloId;
  /** Carpeta del proyecto en la barra de estado. */
  carpeta?: string;
  /** Archivos que el alumno crea a mano: opencode.json, AGENTS.md, un SKILL.md… */
  archivos?: ArchivoEjemplo[];
  explicacion: string;
}
