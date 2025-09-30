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
      icon: FiCode,
      title: language === 'es' ? 'Diseño de Sitios Web' : 'Website Design',
      description: language === 'es' ? 'Obtén un sitio profesional que gane clientes.' : 'Get a professional site that wins customers.',
      features: language === 'es' ? ['Starter - Sitio simple de 3-4 páginas', 'Business - Sitio personalizado de 5-7 páginas', 'Custom - Soluciones especiales con comercio electrónico'] : ['Starter - Simple 3-4 page website', 'Business - Custom 5-7 page website', 'Custom - Special solutions with e-commerce']
    },
    {
      icon: FiGlobe,
      title: language === 'es' ? 'Sitios Web Bilingües' : 'Bilingual Websites',
      description: language === 'es' ? 'Inglés + Español con adaptación cultural.' : 'English + Spanish with cultural adaptation.',
      features: language === 'es' ? ['Traducción profesional por equipo bilingüe', 'SEO optimizado para ambos mercados', 'Adaptación cultural para comunicación auténtica'] : ['Professional translation by bilingual team', 'SEO optimized for both markets', 'Cultural adaptation for authentic communication']
    },
    {
      icon: FiCpu,
      title: language === 'es' ? 'Servicios Adicionales' : 'Add-Ons',
      description: language === 'es' ? 'Chatbots, analytics y soporte continuo.' : 'Chatbots, analytics, and ongoing support.',
      features: language === 'es' ? ['Chatbots, actualizaciones y insights de rendimiento'] : ['Chatbots, updates, and performance insights']
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

      {/* Services Grid */}
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-secondary-light dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl hover:border-accent-500 hover:border-2 transition-all duration-300"
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

    </section>
  )
}