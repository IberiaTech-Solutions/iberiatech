'use client'

import { useLanguage } from './LanguageProvider'
import { motion } from 'framer-motion'
import { FiCode, FiSmartphone, FiGlobe, FiShield, FiZap, FiUsers, FiCpu } from 'react-icons/fi'

export default function ServicesSection() {
  const { t, language } = useLanguage()

  const services = [
    {
      icon: FiCode,
      title: 'Web Development',
      description: 'Fast, secure, and scalable websites built with modern technologies.',
      features: language === 'es' ? ['React & Next.js - Sitios rápidos y seguros', 'TypeScript - Código confiable', 'Diseño Responsive - Perfecto en todos los dispositivos', 'Arquitectura Escalable - Crecimiento futuro'] : ['React & Next.js - Fast and secure sites', 'TypeScript - Reliable code', 'Responsive Design - Perfect on all devices', 'Scalable Architecture - Future growth']
    },
    {
      icon: FiSmartphone,
      title: 'Mobile-First Design',
      description: 'Great user experience across all devices with touch-friendly interfaces.',
      features: language === 'es' ? ['Optimización Móvil - Experiencia perfecta en móviles', 'Touch-Friendly - Fácil de usar con los dedos', 'Carga Rápida - Velocidad optimizada', 'Soporte Multi-Navegador - Funciona en todos lados'] : ['Mobile Optimization - Perfect mobile experience', 'Touch-Friendly - Easy finger navigation', 'Fast Loading - Optimized speed', 'Cross-Browser Support - Works everywhere']
    },
    {
      icon: FiGlobe,
      title: 'Bilingual Websites',
      description: 'Reach wider audiences in both US and Spanish markets with cultural adaptation.',
      features: language === 'es' ? ['Inglés y Español - Alcance global', 'Adaptación Cultural - Entendimiento local', 'SEO para Ambos Idiomas - Visibilidad completa', 'Cambio Fácil de Idioma - Experiencia fluida'] : ['English & Spanish - Global reach', 'Cultural Adaptation - Local understanding', 'SEO for Both Languages - Complete visibility', 'Easy Language Switching - Seamless experience']
    },
    {
      icon: FiShield,
      title: 'Security & Authentication',
      description: 'Protect your business and users with enterprise-grade security measures.',
      features: language === 'es' ? ['Autenticación de Usuarios - Acceso seguro', 'Encriptación de Datos - Información protegida', 'Auditorías de Seguridad - Verificación continua', 'Cumplimiento GDPR - Regulaciones cumplidas'] : ['User Authentication - Secure access', 'Data Encryption - Protected information', 'Security Audits - Continuous verification', 'GDPR Compliance - Regulations met']
    },
    {
      icon: FiZap,
      title: 'SEO & Performance',
      description: 'Rank higher in search results and load faster for better user experience.',
      features: language === 'es' ? ['Optimización SEO - Mejor posicionamiento', 'Optimización de Velocidad - Carga ultrarrápida', 'Integración de Analíticas - Datos valiosos', 'Monitoreo de Rendimiento - Control continuo'] : ['SEO Optimization - Better rankings', 'Speed Optimization - Lightning-fast loading', 'Analytics Integration - Valuable insights', 'Performance Monitoring - Continuous control']
    },
    {
      icon: FiUsers,
      title: 'Ongoing Support',
      description: 'Long-term peace of mind with proactive maintenance and technical support.',
      features: language === 'es' ? ['Respaldos Regulares - Datos seguros', 'Actualizaciones de Seguridad - Protección actualizada', 'Monitoreo de Rendimiento - Control preventivo', 'Soporte Técnico - Ayuda cuando la necesites'] : ['Regular Backups - Safe data', 'Security Updates - Current protection', 'Performance Monitoring - Preventive control', 'Technical Support - Help when you need it']
    },
    {
      icon: FiCpu,
      title: 'AI-Powered Features',
      description: 'Intelligent automation and AI-driven solutions to enhance user experience and business efficiency.',
      features: language === 'es' ? ['Chatbots & Asistentes Virtuales - Atención 24/7', 'Recomendaciones de Contenido AI - Personalización inteligente', 'Búsqueda Inteligente - Encuentra lo que necesitas', 'Análisis de Datos AI - Insights valiosos'] : ['Chatbots & Virtual Assistants - 24/7 support', 'AI-driven Content Recommendations - Smart personalization', 'Intelligent Search - Find what you need', 'AI Data Insights - Valuable business intelligence']
    }
  ]

  return (
    <section id="services" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Charleston SC Web Development Services
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-brand-800 dark:text-brand-400 mb-4">
            Next.js & Supabase Development for Small Businesses
          </h3>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {service.title}
                </h3>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
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
