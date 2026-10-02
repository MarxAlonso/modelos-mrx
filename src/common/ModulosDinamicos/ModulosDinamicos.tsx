import { Biblioteca } from "../Modulos/Biblioteca";
import { proyectos } from "./data/disenosDinamicos";
import { categorias } from "./data/categorias"

const DEMO = { comando: "mrx run slider-automatico", salida: "➜ El slider ya avanza solo en tu navegador" };

export const ModulosDinamicos = () => (
  <Biblioteca
    modulos={proyectos}
    categorias={categorias}
    tono="dinamicos"
    hud="// biblioteca · componentes con JavaScript"
    tipo="Dinámicos"
    bajada="Explora nuestra colección de componentes dinámicos con JavaScript. Encuentra inspiración para tus proyectos interactivos."
    lenguajes="HTML · CSS · JS"
    demo={DEMO}
  />
);
