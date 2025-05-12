import React from "react";
import { FaDumbbell } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { motion } from "framer-motion";
import { ResponsiveMenu } from "./ResponsiveMenu.tsx";
export const NavbarMenu = [
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
      <nav className="bg-gradient-to-r from-gray-900 via-purple-900 to-black shadow-lg">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="container mx-auto flex justify-between items-center py-6 px-4"
        >
          {/* Logo section */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-2xl flex items-center gap-2 font-bold uppercase text-white"
          >
            <FaDumbbell className="text-purple-400" />
            <p>Coders</p>
            <p className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">MRX</p>
          </motion.div>

          {/* Menu section */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6">
              {NavbarMenu.map((item) => (
                <motion.li 
                  key={item.id}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href={item.link}
                    className="inline-block py-2 px-4 text-gray-300 hover:text-white hover:bg-purple-800 rounded-lg transition-all duration-300 font-semibold"
                  >
                    {item.title}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Icons section */}
          <div className="flex items-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="hover:bg-purple-700 text-white rounded-full p-3 duration-300 border border-purple-500 hover:border-purple-400"
            >
              Contacto
            </motion.button>

            {/* Mobile hamburger Menu section */}
            <motion.div 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="md:hidden cursor-pointer text-white" 
              onClick={() => setOpen(!open)}
            >
              <MdMenu className="text-4xl hover:text-purple-400 transition-colors" />
            </motion.div>
          </div>
        </motion.div>
      </nav>

      {/* Mobile Sidebar section */}
      <ResponsiveMenu open={open} />
    </>
  );
};