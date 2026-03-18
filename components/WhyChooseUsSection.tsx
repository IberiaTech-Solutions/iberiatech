'use client'

import { useLanguage } from './LanguageProvider'
import { motion } from 'framer-motion'
import { FiGlobe, FiCode, FiCpu, FiUser, FiHeadphones, FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import { useState, useRef, useEffect } from 'react'

export default function WhyChooseUsSection() {
  const { t, language } = useLanguage()
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const reasons = [
    {
      icon: FiGlobe,
      title: language === 'es' ? 'Bilingue de verdad' : 'Actually bilingual',
      description: language === 'es' ? 'Hablamos los dos idiomas y conocemos los dos mercados. Tu sitio suena natural en ingles y en español.' : 'We speak both languages and know both markets. Your site sounds natural in English and in Spanish.'
    },
    {
      icon: FiCode,
      title: language === 'es' ? 'Tecnologia actual' : 'Modern tech',
      description: language === 'es' ? 'Nada de WordPress ni plantillas. Usamos tecnologia actual para que tu sitio cargue rapido y funcione bien.' : 'No WordPress, no templates. We use modern tech so your site loads fast and works right.'
    },
    {
      icon: FiCpu,
      title: language === 'es' ? 'Funciones inteligentes' : 'Smart features',
      description: language === 'es' ? 'Chatbots que contestan preguntas, formularios que funcionan, y todo lo que necesites para atender a tus clientes online.' : 'Chatbots that answer questions, forms that work, and whatever you need to serve your customers online.'
    },
    {
      icon: FiUser,
      title: language === 'es' ? 'Trato directo' : 'You talk to the founder',
      description: language === 'es' ? 'Hablas directamente con el fundador. Sin intermediarios, sin equipos grandes. Solo atencion real.' : 'You talk directly to the founder. No middlemen, no big teams. Just real attention.'
    },
    {
      icon: FiHeadphones,
      title: language === 'es' ? 'No desaparecemos' : 'We do not disappear',
      description: language === 'es' ? 'Despues del lanzamiento seguimos aqui. Actualizaciones, soporte, lo que necesites.' : 'After launch we are still here. Updates, support, whatever you need.'
    }
  ]

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320 + 24; // Card width + space-x-6 (24px)
      if (direction === 'left') {
        scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      setCanScrollLeft(scrollRef.current.scrollLeft > 0);
      setCanScrollRight(scrollRef.current.scrollLeft + scrollRef.current.clientWidth < scrollRef.current.scrollWidth);
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section
      id="why-choose-us"
      className="section-padding bg-gray-50 dark:bg-gray-800 relative overflow-hidden"
    >
      {/* Soft decorative background blobs */}
      <div className="pointer-events-none absolute -top-32 -right-24 h-72 w-72 rounded-full bg-primary-200/40 blur-3xl dark:bg-primary-700/40" />
      <div className="pointer-events-none absolute -bottom-40 -left-16 h-80 w-80 rounded-full bg-accent-200/40 blur-3xl dark:bg-accent-700/40" />

      <div className="container-max relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {language === 'es' ? '¿Por que nosotros?' : 'Why us?'}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {language === 'es' ? 'Hay muchas opciones. Esto es lo que nos hace diferentes.' : 'There are a lot of options out there. Here is what makes us different.'}
          </p>
        </motion.div>
      </div>

      {/* Full width horizontal scrolling section */}
      <div className="relative">
        {/* Fade effect on the right edge */}
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-gray-50 dark:from-gray-800 to-transparent z-10 pointer-events-none"></div>

        {/* Navigation Buttons */}
        {canScrollLeft && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-16 h-16 bg-gray-800 dark:bg-gray-200 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 ml-4 flex items-center justify-center"
            aria-label="Scroll left"
          >
            <FiArrowLeft className="w-8 h-8 text-white dark:text-gray-800" />
          </button>
        )}
        <button
          onClick={() => scroll('right')}
          disabled={!canScrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-16 h-16 bg-gray-800 dark:bg-gray-200 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed mr-4 flex items-center justify-center"
          aria-label="Scroll right"
        >
          <FiArrowRight className="w-8 h-8 text-white dark:text-gray-800" />
        </button>

        <div className="overflow-x-hidden pb-4" ref={scrollRef} onScroll={handleScroll}>
          <div className="flex space-x-6 min-w-max px-4 ml-[20vw]">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-80 bg-white dark:bg-gray-900 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-primary-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <reason.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}
