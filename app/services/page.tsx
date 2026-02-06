'use client'

import { useLanguage } from '@/components/LanguageProvider'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiCode, FiSearch, FiGlobe, FiCpu, FiArrowRight } from 'react-icons/fi'

export default function ServicesPage() {
  const { t, language } = useLanguage()

  const sections = [
    {
      id: 'website-design',
      icon: FiCode,
      titleKey: 'services.webdev.title',
      descKey: 'services.webdev.desc',
      extra: language === 'es'
        ? 'Incluimos plazos claros (1 semana Básico, 2–4 Empresarial), revisiones incluidas y opción de que gestionemos dominio y hosting.'
        : 'We include clear timelines (1 week Starter, 2–4 Business), revisions included, and optional domain + hosting setup.',
    },
    {
      id: 'seo',
      icon: FiSearch,
      titleKey: 'services.performance.title',
      descKey: 'services.performance.desc',
      extra: language === 'es'
        ? 'Entregables concretos: meta títulos y descripciones, mapa del sitio, estructura móvil, URLs limpias y (en Empresarial+) datos estructurados y Google Analytics.'
        : 'Concrete deliverables: meta titles & descriptions, sitemap, mobile-friendly structure, clean URLs, and (Business+) structured data and Google Analytics.',
    },
    {
      id: 'bilingual',
      icon: FiGlobe,
      titleKey: 'services.bilingual.title',
      descKey: 'services.bilingual.desc',
      extra: language === 'es'
        ? 'Traducción profesional y adaptación cultural para que tu mensaje suene natural en inglés y español. Incluido en todos los paquetes.'
        : 'Professional translation and cultural adaptation so your message sounds natural in English and Spanish. Included in every package.',
    },
    {
      id: 'addons',
      icon: FiCpu,
      titleKey: 'services.ai.title',
      descKey: 'services.support.desc',
      extra: language === 'es'
        ? 'Chatbots opcionales, analytics y planes de mantenimiento mensual (Care y Growth) para actualizaciones, copias de seguridad y soporte continuo.'
        : 'Optional chatbots, analytics, and monthly maintenance plans (Care and Growth) for updates, backups, and ongoing support.',
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('services.page.title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('services.page.subtitle')}
          </p>
        </motion.div>

        <div className="space-y-16">
          {sections.map((section, index) => (
            <motion.section
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="scroll-mt-24"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center flex-shrink-0">
                  <section.icon className="w-6 h-6 text-primary-800 dark:text-primary-400" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {t(section.titleKey)}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {t(section.descKey)}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {section.extra}
                  </p>
                </div>
              </div>
            </motion.section>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {language === 'es'
              ? '¿Listo para empezar? Cuéntanos tu proyecto y te respondemos en 24 horas.'
              : 'Ready to get started? Tell us about your project and we\'ll respond within 24 hours.'}
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            {language === 'es' ? 'Contactar' : 'Get in touch'}
            <FiArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
