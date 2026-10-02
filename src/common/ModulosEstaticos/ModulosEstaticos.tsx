import { Biblioteca } from "../Modulos/Biblioteca";
import { disenos } from "./data/disenos";
import { categorias } from "./data/categorias"

const DEMO = { comando: "mrx copy hero-arrendamiento", salida: "➜ HTML + CSS copiados al portapapeles" };

export const ModulosEstaticos = () => (
  <Biblioteca
    modulos={disenos}
    categorias={categorias}
    tono="estaticos"
    hud="// biblioteca · ¡bienvenido programador!"
    tipo="Estáticos"
    bajada="Explora nuestra colección de diseños HTML y CSS listos para usar. Encuentra inspiración y mejora tus proyectos web con componentes modernos y atractivos."
    lenguajes="HTML · CSS · JS"
    demo={DEMO}
  />
);
