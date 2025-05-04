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
    <section className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 ">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
        Preguntas Frecuentes
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md transition hover:shadow-lg"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full px-6 py-4 flex justify-between items-center text-left"
            >
              <span className="font-medium text-gray-800 dark:text-white">{faq.question}</span>
              <ChevronDown
                className={`w-5 h-5 transform transition-transform duration-200 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-6 pb-4 text-gray-700 dark:text-gray-300">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};
