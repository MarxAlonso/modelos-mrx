export interface NavbarSubItem {
  title: string;
  /** Sin enlace: la sección todavía no existe. */
  link?: string;
}

export interface NavbarItem {
  id: number;
  title: string;
  link?: string;
  submenu?: NavbarSubItem[];
}

export const NavbarMenu: NavbarItem[] = [
    {
      id: 1,
      title: "Inicio",
      link: "/",
    },
    {
      id: 2,
      title: "Módulos",
      submenu: [
        { title: "Módulos Estáticos", link: "/modulosestaticos" },
        { title: "Módulos Dinámicos", link: "/modulosdinamicos" },
        { title: "Módulos Animados" }
      ]
    },
    {
      id: 3,
      title: "Aprende a Programar",
      submenu: [
        { title: "Front-end", link: "/frontend" },
        { title: "Spring Boot", link: "/springbootinfo" },
        { title: "Prompt Libre · IA", link: "/promptlibre" }
      ]
    },
    {
      id: 4,
      title: "Blogs",
      link: "https://blogmarxingsoftware.blogspot.com/",
    },
  ];

export const CONTACTO_URL = "https://developer-marx.netlify.app/";

export const REDES = [
  { nombre: "LinkedIn", url: "https://www.linkedin.com/in/marx-alonso-chipana" },
  { nombre: "GitHub", url: "https://github.com/MarxAlonso" },
  { nombre: "Blog", url: "https://blogmarxingsoftware.blogspot.com/" },
];
