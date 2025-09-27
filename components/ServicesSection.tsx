'use client'

import { useLanguage } from './LanguageProvider'
import { motion } from 'framer-motion'
import { FiCode, FiSmartphone, FiGlobe, FiShield, FiZap, FiUsers, FiCpu, FiArrowLeft, FiArrowRight, FiMessageCircle } from 'react-icons/fi'
import { useState, useRef, useEffect } from 'react'

export default function ServicesSection() {
  const { t, language } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const services = [
    {
      icon: FiMessageCircle,
      title: language === 'es' ? 'Expande tu Negocio a Nuevos Mercados' : 'Expand Your Business to New Markets',
      description: language === 'es' ? '¿Ya tienes un sitio web? Lo traducimos y optimizamos para audiencias en inglés y español, ayudándote a llegar a más clientes y mejorar tu posicionamiento en motores de búsqueda.' : 'Already have a website? We translate and optimize it for English and Spanish audiences, helping you reach more customers and improve your search engine rankings.',
      features: language === 'es' ? ['Traducción profesional por un equipo bilingüe', 'SEO optimizado para ambos idiomas', 'Adaptación cultural para comunicación auténtica'] : ['Professional translation by a bilingual team', 'SEO optimized for both languages', 'Cultural adaptation for authentic communication']
    },
    {
      icon: FiCode,
      title: language === 'es' ? 'Sitios Web que Te Traen Más Clientes' : 'Websites that Bring You More Customers',
      description: language === 'es' ? 'Sitios web personalizados que crecen con tu negocio y convierten visitantes en clientes.' : 'Custom websites that grow with your business and convert visitors into customers.',
      features: language === 'es' ? ['Sitios Web Personalizados - Diseñados para su negocio', 'Conversión de Visitantes - Más clientes potenciales', 'Crecimiento Automático - Se adapta a su empresa', 'Carga Rápida - Visitantes satisfechos'] : ['Custom Websites - Designed for your business', 'Visitor Conversion - More leads and customers', 'Automatic Growth - Adapts to your business', 'Fast Loading - Happy visitors']
    },
        {
          icon: FiSmartphone,
          title: language === 'es' ? 'Tu sitio se verá perfecto en cualquier dispositivo' : 'Your Site Will Look Perfect on Any Phone or Tablet',
          description: language === 'es' ? 'Sitios web optimizados para móviles que funcionan perfectamente en teléfonos, tabletas y computadoras.' : 'Mobile-optimized websites that work perfectly on phones, tablets, and desktops.',
          features: language === 'es' ? ['Perfecto en cualquier dispositivo y carga ultrarrápida'] : ['Perfect on any device and lightning fast']
        },
    {
      icon: FiGlobe,
      title: language === 'es' ? 'Alcanza Mercados de EE.UU. y España con Un Solo Sitio' : 'Reach Both US and Spanish Markets with One Website',
      description: 'Bilingual websites that reach audiences in both US and Spanish markets.',
      features: language === 'es' ? ['Inglés y español con adaptación cultural'] : ['English and Spanish with cultural adaptation']
    },
    {
      icon: FiShield,
      title: language === 'es' ? 'Tu Negocio y Datos Siempre Protegidos' : 'Your Business and Data Always Protected',
      description: 'Secure websites that protect your business data and build customer trust.',
      features: language === 'es' ? ['Datos seguros y confianza del cliente'] : ['Secure data and customer trust']
    },
    {
      icon: FiZap,
      title: language === 'es' ? 'Aparece Primero en Google y Carga Instantáneamente' : 'Appear First in Google and Load Instantly',
      description: 'Fast-loading websites that rank higher in Google and keep visitors engaged.',
      features: language === 'es' ? ['Mejor posicionamiento en Google y carga ultrarrápida'] : ['Better Google rankings and lightning-fast loading']
    },
        {
          icon: FiUsers,
          title: language === 'es' ? 'Soporte continuo para tu tranquilidad' : 'No Worries with Ongoing Support',
          description: 'Peace of mind with ongoing maintenance, updates, and support for your website.',
          features: language === 'es' ? ['Mantenimiento continuo y soporte personalizado'] : ['Ongoing maintenance and personalized support']
        },
    {
      icon: FiCpu,
      title: language === 'es' ? 'Chatbots que Responden Preguntas 24/7' : 'Chatbots that Answer Questions 24/7',
      description: language === 'es' ? 'Características inteligentes de sitios web que responden preguntas de clientes automáticamente y mejoran la experiencia del usuario.' : 'Smart website features that answer customer questions automatically and improve user experience.',
      features: language === 'es' ? ['Chatbots inteligentes y recomendaciones personalizadas'] : ['Smart chatbots and personalized recommendations']
    }
  ]

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320 + 24; // Card width + space-x-6 (24px)
      if (direction === 'left') {
        scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      setCanScrollLeft(scrollContainerRef.current.scrollLeft > 0);
      setCanScrollRight(scrollContainerRef.current.scrollLeft + scrollContainerRef.current.clientWidth < scrollContainerRef.current.scrollWidth);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section id="services" className="section-padding bg-secondary-white dark:bg-gray-900">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-support-dark dark:text-white mb-4">
            {t('services.title2')}
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-primary-800 dark:text-primary-400 mb-2">
            {t('services.subtitle2')}
          </h3>
          <h3 className="text-lg md:text-xl font-semibold text-support-medium dark:text-gray-300 mb-2">
            {language === 'es' ? 'Servicios de Traducción de Sitios Web Bilingües' : 'Bilingual Website Translation Services'}
          </h3>
          <h3 className="text-lg md:text-xl font-semibold text-support-medium dark:text-gray-300 mb-4">
            {language === 'es' ? 'Diseño de Sitios Web para Pequeñas Empresas y SEO' : 'Small Business Website Design & SEO'}
          </h3>
          <p className="text-xl text-support-medium dark:text-gray-300 max-w-3xl mx-auto">
            {t('services.subtitle3')}
          </p>
        </motion.div>
      </div>

      {/* Full width horizontal scrolling section with navigation buttons */}
      <div className="relative">
        {/* Fade effect on the right edge */}
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-secondary-white dark:from-gray-900 to-transparent z-10 pointer-events-none"></div>

        {/* Navigation Buttons */}
        {canScrollLeft && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-16 h-16 bg-gray-800/30 dark:bg-gray-200/30 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 ml-4 flex items-center justify-center"
            aria-label="Scroll left"
          >
            <FiArrowLeft className="w-8 h-8 text-white dark:text-gray-800" />
          </button>
        )}
        <button
          onClick={() => scroll('right')}
          disabled={!canScrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-16 h-16 bg-gray-800/30 dark:bg-gray-200/30 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed mr-4 flex items-center justify-center"
          aria-label="Scroll right"
        >
          <FiArrowRight className="w-8 h-8 text-white dark:text-gray-800" />
        </button>

        <div className="overflow-x-hidden pb-4" ref={scrollContainerRef} onScroll={handleScroll}>
          <div className="flex space-x-6 min-w-max px-4 md:ml-[20vw] justify-center md:justify-start">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-80 bg-secondary-light dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl hover:border-accent-500 hover:border-2 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-primary-800" />
                  </div>
                  <h3 className="text-xl font-semibold text-support-dark dark:text-white">
                    {service.title}
                  </h3>
                </div>

                <p className="text-support-medium dark:text-gray-300 mb-4">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-support-medium dark:text-gray-400">
                      <div className="w-1.5 h-1.5 bg-accent-500 rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}