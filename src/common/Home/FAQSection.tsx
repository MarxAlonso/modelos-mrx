import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "¿Puedo usar los diseños en proyectos personales o comerciales?",
    answer: "Sí, puedes utilizar los módulos libremente en tus proyectos personales o comerciales. Agradecemos el reconocimiento si los compartes."
  },
  {
    question: "¿Están optimizados para dispositivos móviles?",
    answer: "Sí, todos los diseños están hechos con enfoque responsive utilizando TailwindCSS."
  },
  {
    question: "¿Necesito conocimientos avanzados en CSS para usarlos?",
    answer: "No necesariamente. Los módulos están pensados para ser reutilizables fácilmente, pero tener conocimientos básicos de HTML y CSS ayuda."
  },
  {
    question: "¿Puedo contribuir con mis propios diseños?",
    answer: "¡Claro! Estamos construyendo una comunidad para que más desarrolladores compartan sus componentes y diseños."
  }
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      {/* Efectos de fondo animados */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[100%] bg-gradient-to-r from-purple-900/20 via-black/5 to-gray-900/20 animate-[gradient_15s_ease_infinite]" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:3rem_3rem]" />
      </div>

      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12 text-white relative"
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