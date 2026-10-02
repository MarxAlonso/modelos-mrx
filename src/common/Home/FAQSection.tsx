import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { driver } from "driver.js";
import { Ventana } from "../Terminal/Terminal";
import {faqs} from "./faqs"
import "driver.js/dist/driver.css";
import "./faq.css";

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const startFAQTour = () => {
    const driverObj = driver({
      showProgress: true,
      animate: true,
      overlayColor: '#07040f',
      overlayOpacity: 0.75,
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
          element: '.mrx-faq__item:first-child',
          popover: {
            title: 'Preguntas Interactivas',
            description: 'Haz clic en cualquier pregunta para ver su respuesta. Cada pregunta se expande suavemente con una animación fluida.'
          }
        },
        {
          element: '.mrx-faq__item:first-child .mrx-faq__flecha',
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
    <section className="mrx-faq mrx-oscura">
      <span className="mrx-faq__trama" aria-hidden="true" />

      <div className="mrx-faq__marco">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mrx-faq__cabecera"
        >
          <span className="mrx-hud">// soporte</span>
          <h2 className="mrx-titulo-seccion faq-title">
            Preguntas <em>frecuentes</em>
          </h2>
          <p className="mrx-faq__bajada">
            Las dudas más comunes sobre los módulos y cómo usarlos en tus proyectos.
          </p>
          {/* Botón para iniciar el tour */}
          <button type="button" onClick={startFAQTour} className="mrx-cta mrx-cta--linea mrx-faq__tour">
            <i />Ver tour
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <Ventana shell="linux" titulo="marx@coders: ~/faq" className="mrx-faq__ventana">
            {faqs.map((faq, index) => {
              const abierta = openIndex === index;
              return (
                <div key={index} className="mrx-faq__item" data-abierta={abierta || undefined}>
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    className="mrx-faq__pregunta"
                    aria-expanded={abierta}
                  >
                    <span className="mrx-num mrx-faq__indice">0{index + 1}</span>
                    <span className="mrx-faq__texto">{faq.question}</span>
                    <motion.span
                      className="mrx-faq__flecha"
                      animate={{ rotate: abierta ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {abierta && (
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
                        className="mrx-faq__respuesta"
                      >
                        <div>
                          <span className="t-verde" aria-hidden="true">➜</span>
                          <span>{faq.answer}</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </Ventana>
        </motion.div>
      </div>
    </section>
  );
};
