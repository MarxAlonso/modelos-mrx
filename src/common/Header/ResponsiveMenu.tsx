import { motion, AnimatePresence } from "framer-motion";

/* Se crea una interfaz ResponsiveMenuProps para definir el tipo de las propiedades que recibe el componente ResponsiveMenu. En este caso, la propiedad open es de tipo boolean. */
interface ResponsiveMenuProps {
  open: boolean;
}

/*Uso de React.FC<ResponsiveMenuProps>: Esto se usa para definir que ResponsiveMenu es un componente funcional de React que recibe las propiedades descritas en ResponsiveMenuProps. */
export const ResponsiveMenu: React.FC<ResponsiveMenuProps> = ({ open }) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute top-20 left-0 w-full h-screen z-20"
        >
          <div className="text-xl font-semibold uppercase bg-primary text-white py-10 m-6 rounded-3xl">
            <ul className="flex flex-col justify-center items-center gap-10">
              <li>Inicio</li>
              <li>Modulos Estaticos</li>
              <li>Modulos Dinamicos</li>
              <li>Modulos Animados</li>
              <li>Blogs</li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};