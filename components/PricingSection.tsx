'use client'

import { useLanguage } from './LanguageProvider'
import { motion } from 'framer-motion'
import { FiCheck, FiStar, FiArrowRight } from 'react-icons/fi'

export default function PricingSection() {
  const { t, language } = useLanguage()

  const pricingPlans = [
    {
      nameKey: 'pricing.starter.name',
      price: language === 'es' ? '€950' : '$950',
      descriptionKey: 'pricing.starter.desc',
      ctaKey: 'pricing.cta.starter',
      features: language === 'es' ? [
        'Sitio profesional de 1 página (Inicio, Acerca de, Contacto todo en uno)',
        'Soporte bilingüe completo (Inglés + Español) sin costo adicional.',
        'Formulario de contacto',
        'SEO básico para ambos idiomas',
        '1 mes de soporte'
      ] : [
        '1-page professional site (Home, About, Contact all in one)',
        'Full bilingual support (English + Spanish) at no extra cost.',
        'Contact form',
        'Basic SEO for both languages',
        '1 month support'
      ],
      popular: false
    },
    {
      nameKey: 'pricing.business.name',
      price: language === 'es' ? '€2,400' : '$2,400',
      descriptionKey: 'pricing.business.desc',
      ctaKey: 'pricing.cta.business',
      features: language === 'es' ? [
        '5-7 páginas personalizadas (Inicio, Acerca de, Servicios, Portafolio, Contacto, etc.)',
        'Marca personalizada (colores, tipografía, integración de logo)',
        'Inglés + Español con adaptación cultural',
        'SEO + configuración de Google Analytics',
        '3 meses de soporte',
        'Opcional: chatbot o búsqueda inteligente'
      ] : [
        '5-7 custom pages (Home, About, Services, Portfolio, Contact, etc.)',
        'Custom branding (colors, typography, logo integration)',
        'English + Spanish with cultural adaptation',
        'SEO + Google Analytics setup',
        '3 months support',
        'Optional chatbot or smart search'
      ],
      popular: true
    },
    {
      nameKey: 'pricing.enterprise.name',
      price: language === 'es' ? '€4,800+' : '$4,800+',
      descriptionKey: 'pricing.enterprise.desc',
      ctaKey: 'pricing.cta.enterprise',
      features: language === 'es' ? [
        'Páginas ilimitadas',
        'Comercio electrónico completo (tienda, pagos, productos)',
        'APIs personalizadas (integraciones con CRMs, sistemas de reservas, etc.)',
        'Chatbots de IA y recomendaciones',
        '6-12 meses de soporte'
      ] : [
        'Unlimited pages',
        'Full e-commerce (shop, payments, products)',
        'Custom APIs (integrations with CRMs, booking systems, etc.)',
        'AI chatbots & recommendations',
        '6-12 months support'
      ],
      popular: false
    }
  ]

  return (
    <section id="pricing" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('pricing.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('pricing.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={`pricing-plan-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg ${
                plan.popular ? 'ring-2 ring-primary-800 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary-800 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <FiStar className="w-4 h-4" />
                    <span>{t('pricing.popular')}</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {t(plan.nameKey)}
                </h3>
                <div className="text-4xl font-bold text-primary-800 mb-2">
                  {plan.price}
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {t(plan.descriptionKey)}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <FiCheck className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-colors duration-200 flex items-center justify-center space-x-2 ${
                  plan.popular
                    ? 'bg-accent-500 hover:bg-accent-600 text-white'
                    : 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100'
                }`}
              >
                <span>{t(plan.ctaKey)}</span>
                <FiArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {t('pricing.consultation')}
          </p>
          <a
            href="#contact"
            className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-semibold"
          >
            {t('pricing.custom')}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
