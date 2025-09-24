'use client'

import { useLanguage } from './LanguageProvider'
import { motion } from 'framer-motion'
import { FiGlobe, FiCode, FiCpu, FiUser, FiHeadphones } from 'react-icons/fi'

export default function WhyChooseUsSection() {
  const { t, language } = useLanguage()

  const reasons = [
    {
      icon: FiGlobe,
      title: language === 'es' ? 'Experiencia Bilingüe Completa' : 'Complete Bilingual Expertise',
      description: language === 'es' ? 'Comprensión profunda de los mercados estadounidense y español, asegurando que su sitio web se comunique naturalmente en ambos idiomas.' : 'Deep understanding of US and Spanish markets, ensuring your site speaks both languages naturally.'
    },
    {
      icon: FiCode,
      title: language === 'es' ? 'Stack Tecnológico Moderno' : 'Modern Technology Stack',
      description: language === 'es' ? 'React, Next.js, Supabase, AWS - las tecnologías más avanzadas del mercado para aplicaciones escalables y seguras.' : 'React, Next.js, Supabase, AWS - the most advanced technologies in the market for scalable and secure applications.'
    },
    {
      icon: FiCpu,
      title: language === 'es' ? 'Soluciones Habilitadas por IA' : 'AI-Enabled Solutions',
      description: language === 'es' ? 'Automatizamos flujos de trabajo y mejoramos la experiencia del usuario con inteligencia artificial y chatbots inteligentes.' : 'We automate workflows and improve user experience with artificial intelligence and smart chatbots.'
    },
    {
      icon: FiUser,
      title: language === 'es' ? 'Enfoque Personal Directo' : 'Direct Personal Approach',
      description: language === 'es' ? 'Comunicación directa con el fundador - sin intermediarios ni equipos grandes, solo atención personalizada.' : 'Direct communication with the founder - no middlemen or large teams, just personalized attention.'
    },
    {
      icon: FiHeadphones,
      title: language === 'es' ? 'Soporte a Largo Plazo' : 'Long-term Support',
      description: language === 'es' ? 'Relaciones duraderas con soporte continuo, mantenimiento proactivo y planes de cuidado integrales.' : 'Lasting relationships with continuous support, proactive maintenance, and comprehensive care plans.'
    }
  ]

  return (
    <section id="why-choose-us" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {language === 'es' ? '¿Por Qué Elegir IberiaTech Solutions?' : 'Why Choose IberiaTech Solutions?'}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {language === 'es' ? 'Somos más que una agencia de desarrollo web - somos su socio tecnológico estratégico con experiencia bilingüe, soluciones de IA y soporte a largo plazo.' : 'We\'re more than a web development agency - we\'re your strategic technology partner with bilingual expertise, AI solutions, and long-term support.'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-brand-800 rounded-full flex items-center justify-center mx-auto mb-4">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-brand-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              {language === 'es' ? '¿Listo para Comenzar?' : 'Ready to Get Started?'}
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              {language === 'es' ? 'Únase a las empresas que ya están creciendo con nuestras soluciones tecnológicas innovadoras.' : 'Join the businesses already growing with our innovative technology solutions.'}
            </p>
            <a
              href="#contact"
              className="bg-white text-brand-800 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center space-x-2"
            >
              <span>{language === 'es' ? 'Comienza Tu Proyecto' : 'Start Your Project'}</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
