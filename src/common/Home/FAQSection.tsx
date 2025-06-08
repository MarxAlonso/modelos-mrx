import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { driver } from "driver.js";
import {faqs} from "./faqs"
import "driver.js/dist/driver.css";

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const startFAQTour = () => {
    const driverObj = driver({
      showProgress: true,
      animate: true,
      overlayColor: '#1a1a1a',
      overlayOpacity: 0.7,
      popoverClass: 'custom-popover',
      steps: [
        {
          element: '.faq-title',
          popover: {
            title: 'Preguntas Frecuentes',
            description: 'Aquí encontrarás respuestas a las dudas más comunes sobre nuestros módulos y servicios.'
          }
        },
        {
          element: '.space-y-6 > div:first-child',
          popover: {
            title: 'Preguntas Interactivas',
            description: 'Haz clic en cualquier pregunta para ver su respuesta. Cada pregunta se expande suavemente con una animación fluida.'
          }
        },
        {
          element: '.ChevronDown',
          popover: {
            title: 'Indicador de Expansión',
            description: 'Este ícono gira para indicar si una pregunta está abierta o cerrada.'
          }
        }
      ]
    });

    driverObj.drive();
  };

  return (
    <section className="relative max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      {/* Botón para iniciar el tour */}
      <motion.button
        onClick={startFAQTour}
        className="absolute top-4 right-4 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full shadow-lg z-50 flex items-center gap-2 text-sm"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        Ver Tour
      </motion.button>
      {/* Efectos de fondo animados */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[100%] bg-gradient-to-r from-purple-900/20 via-black/5 to-gray-900/20 animate-[gradient_15s_ease_infinite]" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:3rem_3rem]" />
      </div>

      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12 text-white relative faq-title"
      >
        Preguntas Frecuentes
      </motion.h2>

      <div className="space-y-6 relative">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="backdrop-blur-sm bg-gray-800/40 border border-gray-700/50 rounded-2xl shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full px-8 py-5 flex justify-between items-center text-left group"
            >
              <span className="font-medium text-white group-hover:text-purple-400 transition-colors">
                {faq.question}
              </span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-6 h-6 text-purple-400" />
              </motion.div>
            </button>
            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: "auto", 
                    opacity: 1,
                    transition: {
                      height: { duration: 0.4 },
                      opacity: { duration: 0.3, delay: 0.1 }
                    }
                  }}
                  exit={{ 
                    height: 0, 
                    opacity: 0,
                    transition: {
                      height: { duration: 0.3 },
                      opacity: { duration: 0.2 }
                    }
                  }}
                >
                  <div className="px-8 pb-6 text-gray-300 leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};