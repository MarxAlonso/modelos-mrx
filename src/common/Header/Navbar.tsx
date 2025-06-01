import React, { useState } from "react";
import { FaDumbbell } from "react-icons/fa";
import { MdMenu, MdKeyboardArrowDown } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { ResponsiveMenu } from "./ResponsiveMenu.tsx";
import { NavbarMenu } from "./NavbarData";

export const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const [activeMenu, setActiveMenu] = useState<number | null>(null);

  const handleMouseEnter = (id: number) => setActiveMenu(id);
  const handleMouseLeave = () => setActiveMenu(null);

  return (
    <>
      <nav className="bg-gradient-to-r from-gray-900 via-purple-900 to-black shadow-lg relative z-[1000]">
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
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="flex items-center gap-1">
                    <a
                      href={item.link}
                      className="inline-block py-2 px-4 text-gray-300 hover:text-white hover:bg-purple-800 rounded-lg transition-all duration-300 font-semibold"
                      onClick={item.submenu ? (e) => e.preventDefault() : undefined}
                    >
                      {item.title}
                      {item.submenu && <MdKeyboardArrowDown className="inline ml-1" />}
                    </a>
                  </div>
                  
                  {/* Submenu */}
                  <AnimatePresence>
                    {item.submenu && activeMenu === item.id && (
                      <motion.ul
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-0 mt-2 py-2 bg-gray-900 rounded-lg shadow-lg min-w-[200px] z-[1001]"
                      >
                        {item.submenu.map((subItem, index) => (
                          <motion.li
                            key={index}
                            whileHover={{ x: 5 }}
                          >
                            <a
                              href={subItem.link}
                              className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-purple-800 transition-all duration-300"
                            >
                              {subItem.title}
                            </a>
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
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
              <a 
                href="https://developer-marx.netlify.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-white"
              >
                Contacto
              </a>
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