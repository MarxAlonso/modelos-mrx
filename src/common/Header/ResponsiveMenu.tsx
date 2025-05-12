import { motion, AnimatePresence } from "framer-motion";
import { NavbarMenu } from "./Navbar";

interface ResponsiveMenuProps {
  open: boolean;
}

export const ResponsiveMenu: React.FC<ResponsiveMenuProps> = ({ open }) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="fixed top-20 left-0 w-full h-screen z-50 bg-black bg-opacity-50 backdrop-blur-lg"
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-gradient-to-b from-gray-900 via-purple-900 to-black text-white py-8 px-6 m-4 rounded-2xl shadow-lg shadow-purple-500/20"
          >
            <ul className="flex flex-col justify-center items-center gap-8">
              {NavbarMenu.map((item) => (
                <motion.li
                  key={item.id}
                  whileHover={{ scale: 1.1, x: 10 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full text-center"
                >
                  <a
                    href={item.link}
                    className="inline-block w-full py-3 px-6 text-lg font-semibold hover:bg-purple-800 rounded-xl transition-all duration-300"
                  >
                    {item.title}
                  </a>
                </motion.li>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 px-8 py-3 bg-purple-700 hover:bg-purple-600 rounded-xl font-semibold transition-colors duration-300 shadow-lg shadow-purple-500/20"
              >
                Contacto
              </motion.button>
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};