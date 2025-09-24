'use client'

import { useLanguage } from './LanguageProvider'
import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import Image from 'next/image'

export default function PortfolioSection() {
  const { t, language } = useLanguage()

  const projects = [
    {
      title: 'Cursor Rules Hub',
      description: language === 'es' ? 'Una plataforma profesional que ayuda a los desarrolladores a trabajar de forma más rápida y eficiente.' : 'A professional platform that helps developers work faster and more efficiently.',
      businessBenefit: language === 'es' ? 'Ayuda a los equipos a ahorrar tiempo y aumentar la productividad con automatización inteligente' : 'Helps teams save time and increase productivity with smart automation',
      image: '/images/portfolio/cursor-rules-hub.svg',
      technologies: language === 'es' ? ['Diseño Web Moderno', 'Carga Rápida', 'Compatible con dispositivos móviles', 'Hosting en la Nube'] : ['Modern Web Design', 'Fast Loading', 'Mobile-Friendly', 'Cloud Hosting'],
      liveUrl: 'https://cursor-rules-virid.vercel.app/',
      githubUrl: 'https://github.com/Javierlozo/cursor_rules',
      featured: true
    }
  ]

  return (
    <section id="portfolio" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {t('portfolio.title2')}
              </h2>
              <h3 className="text-xl md:text-2xl font-semibold text-brand-800 dark:text-brand-400 mb-4">
                {t('portfolio.subtitle2')}
              </h3>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {t('portfolio.subtitle3')}
              </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              {/* Project Image */}
              <div className={`relative ${project.featured ? 'h-64' : 'h-48'} overflow-hidden`}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  onError={(e) => {
                    // Fallback to placeholder if image doesn't exist
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                {/* Fallback placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center" style={{ display: 'none' }}>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-xl">IT</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 font-medium">Project Preview</p>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {t('portfolio.project.title')}
                    </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                {/* Business Benefit */}
                <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-3 mb-4 rounded-r-lg">
                  <p className="text-green-800 dark:text-green-200 text-sm font-medium">
                    <span className="font-semibold">{language === 'es' ? 'Beneficio Empresarial:' : 'Business Benefit:'}</span> {project.businessBenefit}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-4">
                      <a
                        href={project.liveUrl}
                        className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200"
                      >
                        <FiExternalLink className="w-4 h-4" />
                        <span className="text-sm font-medium">{language === 'es' ? 'Demo en Vivo' : 'Live Demo'}</span>
                      </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center space-x-2 text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors duration-200"
                  >
                    <FiGithub className="w-4 h-4" />
                    <span className="text-sm font-medium">{language === 'es' ? 'Código' : 'Code'}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coming Soon Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 max-w-4xl mx-auto">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {t('portfolio.coming.title')}
                </h3>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
