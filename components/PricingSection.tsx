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
        '1 página responsive',
        'Formulario de contacto',
        'SEO básico',
        '1 mes de soporte'
      ] : [
        '1-page responsive site',
        'Contact form',
        'Basic SEO',
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
        '5-7 páginas',
        'Diseño y marca personalizada',
        'Bilingüe (EN/ES)',
        'SEO y analíticas',
        '3 meses de soporte',
        'Características AI opcionales: Agrega un chatbot simple para responder preguntas de clientes 24/7 o una búsqueda inteligente para mejorar la experiencia del usuario',
      ] : [
        '5-7 pages',
        'Custom branding',
        'Bilingual (EN/ES)',
        'SEO & analytics',
        '3 months support',
        'Optional AI features: Add a simple chatbot to answer customer questions 24/7 or a smart search to improve user experience',
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
        'Autenticación de usuarios',
        'E-commerce completo',
        'APIs personalizadas',
        'Características AI avanzadas incluidas: chatbots inteligentes, recomendaciones automatizadas e insights impulsados por IA adaptados a su negocio',
        '6 meses de soporte (extensible a 12 meses)',
      ] : [
        'Unlimited pages',
        'User authentication',
        'Full e-commerce',
        'Custom APIs',
        'Advanced AI features included: intelligent chatbots, automated recommendations, and AI-driven insights tailored to your business',
        '6 months support (extendable to 12 months)',
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
                plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <FiStar className="w-4 h-4" />
                    <span>{t('pricing.popular')}</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {t(plan.nameKey)}
                </h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">
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
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
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
