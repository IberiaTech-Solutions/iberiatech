'use client'

import { useLanguage } from './LanguageProvider'
import { motion } from 'framer-motion'
import { FiCode, FiGlobe, FiCpu, FiSearch, FiZap, FiClock, FiServer, FiFileText, FiLayers, FiShoppingCart, FiMessageCircle, FiTrendingUp } from 'react-icons/fi'

export default function ServicesSection() {
  const { t, language } = useLanguage()

  const services = [
    {
      icon: FiCode,
      title: language === 'es' ? 'Diseño de Sitios Web' : 'Website Design',
      description: language === 'es' ? 'Obtén un sitio profesional que gane clientes.' : 'Get a professional site that wins customers.',
      features: [
        { text: language === 'es' ? 'Starter - Sitio simple de 3-4 páginas' : 'Starter - Simple 3-4 page website', icon: FiFileText },
        { text: language === 'es' ? 'Business - Sitio personalizado de 5-7 páginas' : 'Business - Custom 5-7 page website', icon: FiLayers },
        { text: language === 'es' ? 'Custom - Soluciones especiales con comercio electrónico' : 'Custom - Special solutions with e-commerce', icon: FiShoppingCart },
      ],
    },
    {
      icon: FiGlobe,
      title: language === 'es' ? 'Sitios Web Bilingües' : 'Bilingual Websites',
      description: language === 'es' ? 'Inglés + Español con adaptación cultural.' : 'English + Spanish with cultural adaptation.',
      features: [
        { text: language === 'es' ? 'Traducción profesional por equipo bilingüe' : 'Professional translation by bilingual team', icon: FiGlobe },
        { text: language === 'es' ? 'SEO optimizado para ambos mercados' : 'SEO optimized for both markets', icon: FiSearch },
        { text: language === 'es' ? 'Adaptación cultural para comunicación auténtica' : 'Cultural adaptation for authentic communication', icon: FiMessageCircle },
      ],
    },
    {
      icon: FiCpu,
      title: language === 'es' ? 'Servicios Adicionales' : 'Add-Ons',
      description: language === 'es' ? 'Chatbots, analytics y soporte continuo.' : 'Chatbots, analytics, and ongoing support.',
      features: [
        { text: language === 'es' ? 'Chatbots que responden a visitantes' : 'Chatbots that answer visitor questions', icon: FiMessageCircle },
        { text: language === 'es' ? 'Actualizaciones y mantenimiento' : 'Updates and maintenance', icon: FiCpu },
        { text: language === 'es' ? 'Insights de rendimiento y analytics' : 'Performance insights and analytics', icon: FiTrendingUp },
      ],
    },
  ]

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

              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3 text-sm text-support-medium dark:text-gray-400">
                    <div className="w-8 h-8 rounded-lg bg-accent-100 dark:bg-accent-900/30 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-4 h-4 text-accent-600 dark:text-accent-400" />
                    </div>
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* What's included: specifics (SEO, AI, timeline, hosting) */}
      <div className="container-max mt-16">
        <h3 className="text-2xl font-bold text-support-dark dark:text-white mb-8 text-center">
          {t('services.detail.title')}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                <FiSearch className="w-5 h-5 text-primary-800 dark:text-primary-400" />
              </div>
              <h4 className="text-lg font-semibold text-support-dark dark:text-white">{t('services.detail.seo.title')}</h4>
            </div>
            <p className="text-sm text-support-medium dark:text-gray-400 mb-3">{t('services.detail.seo.desc')}</p>
            <ul className="space-y-2 text-sm text-support-medium dark:text-gray-400">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-accent-500 rounded-full flex-shrink-0" />{t('services.detail.seo.1')}</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-accent-500 rounded-full flex-shrink-0" />{t('services.detail.seo.2')}</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-accent-500 rounded-full flex-shrink-0" />{t('services.detail.seo.3')}</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-accent-500 rounded-full flex-shrink-0" />{t('services.detail.seo.4')}</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                <FiZap className="w-5 h-5 text-primary-800 dark:text-primary-400" />
              </div>
              <h4 className="text-lg font-semibold text-support-dark dark:text-white">{t('services.detail.ai.title')}</h4>
            </div>
            <p className="text-sm text-support-medium dark:text-gray-400">{t('services.detail.ai.desc')}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                <FiClock className="w-5 h-5 text-primary-800 dark:text-primary-400" />
              </div>
              <h4 className="text-lg font-semibold text-support-dark dark:text-white">{t('services.detail.timeline.title')}</h4>
            </div>
            <p className="text-sm text-support-medium dark:text-gray-400">{t('services.detail.timeline.desc')}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                <FiServer className="w-5 h-5 text-primary-800 dark:text-primary-400" />
              </div>
              <h4 className="text-lg font-semibold text-support-dark dark:text-white">{t('services.detail.hosting.title')}</h4>
            </div>
            <p className="text-sm text-support-medium dark:text-gray-400">{t('services.detail.hosting.desc')}</p>
          </motion.div>
        </div>
      </div>

    </section>
  )
}