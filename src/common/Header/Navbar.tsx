import React from "react";
import { FaDumbbell } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { motion } from "framer-motion";
import { ResponsiveMenu } from "./ResponsiveMenu.tsx";
const NavbarMenu = [
  {
    id: 1,
    title: "Inicio",
    link: "/",
  },
  {
    id: 2,
    title: "Modulos Estaticos",
    link: "/modulosestaticos",
  },
  {
    id: 3,
    title: "Modulos Dinamicos",
    link: "#",
  },
  {
    id: 4,
    title: "Modulos Animados",
    link: "#",
  },
  {
    id: 5,
    title: "Blogs",
    link: "#",
  },
];

export const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <nav>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="container flex justify-between items-center py-8"
        >
          {/* Logo section */}
          <div className="text-2xl flex items-center gap-2 font-bold uppercase">
            <FaDumbbell />
            <p>Coders</p>
            <p className="text-secondary">MRX</p>
          </div>
          {/* Menu section */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-gray-600">
              {NavbarMenu.map((item) => {
                return (
                  <li key={item.id}>
                    <a
                      href={item.link}
                      className="
                    inline-block py-1 px-3 hover:text-primary font-semibold"
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* Icons section */}
          <div className="flex items-center gap-4">
            <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
            </button>
            <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
            </button>
            <button className="hover:bg-primary text-primary font-semibold hover:text-white rounded-md border-2 border-primary px-6 py-2 duration-200 hidden md:block">
              Contacto
            </button>
          </div>
          {/* Mobile hamburger Menu section */}
          <div className="md:hidden" onClick={() => setOpen(!open)}>
            <MdMenu className="text-4xl" />
          </div>
        </motion.div>
      </nav>

      {/* Mobile Sidebar section */}
      <ResponsiveMenu open={open} />
    </>
  );
};