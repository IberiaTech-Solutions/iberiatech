'use client'

import { useState } from 'react'
import { useLanguage } from './LanguageProvider'
import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub, FiTrendingUp, FiClock, FiSmartphone } from 'react-icons/fi'
import Image from 'next/image'

export default function PortfolioSection() {
  const { t, language } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState('All')

  const projects = [
    {
      id: 3,
      title: 'ShopEssentialsHub',
      logo: '/images/logos/logo-SEH.png',
      description: language === 'es'
        ? 'Plataforma de recomendacion de productos de Amazon seleccionados a mano. Productos probados y revisados personalmente, desde cafeteras y tecnologia hasta articulos para el hogar. Cada producto se recomienda porque realmente funciona, con reseñas honestas y sin promociones pagadas.'
        : 'A curated Amazon products recommendation platform. Features personally tested and reviewed products, from coffee makers and tech gadgets to home essentials. Every product is recommended because it actually works, with honest reviews and no paid promotions.',
      image: '/images/portfolio/www.shopessentialshub.com_.jpg',
      category: 'E-commerce',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
      link: 'https://www.shopessentialshub.com/',
      ownership: 'direct',
      role: language === 'es'
        ? 'Producto propio de IberiaTech.'
        : 'IberiaTech in-house product.'
    },
    {
      id: 4,
      title: 'TalentAgent',
      logo: 'https://portfolio-hub-tawny.vercel.app/favicon.svg',
      description: language === 'es'
        ? 'Plataforma de empleo con IA que evalua la compatibilidad real entre candidatos y puestos. Puntuacion de ajuste 0-100, deteccion de ofertas fantasma, preparacion para entrevistas y portafolios inteligentes.'
        : 'AI-powered job-matching platform that evaluates real fit between candidates and roles. Features 0-100 fit scoring, ghost job detection, interview preparation, and smart portfolios.',
      image: '/talentagent.jpg',
      category: 'AI Platform',
      technologies: ['Next.js 15', 'Supabase', 'OpenAI', 'Stripe', 'TypeScript'],
      link: 'https://portfolio-hub-tawny.vercel.app/',
      ownership: 'direct',
      role: language === 'es'
        ? 'Producto propio de IberiaTech.'
        : 'IberiaTech in-house product.'
    }
  ]

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(projects.map(project => project.category)))]

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

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
                {language === 'es' ? 'Nuestros Proyectos' : 'Our Projects'}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {language === 'es'
                  ? 'Productos que hemos construido. Cada uno es un ejemplo en vivo del tipo de trabajo que hacemos.'
                  : 'Products we have built. Each is a live example of the kind of work we do.'}
              </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-primary-800 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/20 hover:text-primary-800 dark:hover:text-primary-400'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* SMB Case Studies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Project Image */}
              <div className="h-64 md:h-72 relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    {project.logo && (
                      <div className="w-8 h-8 relative">
                        <Image
                          src={project.logo}
                          alt={`${project.title} logo`}
                          fill
                          className="object-contain"
                          sizes="32px"
                        />
                      </div>
                    )}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex flex-col items-end space-y-1">
                    <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-400 text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  {project.description}
                </p>
                
                
                {project.role && (
                  <div className="mb-4">
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-2 font-medium">
                      {language === 'es' ? 'ROL:' : 'ROLE:'}
                    </p>
                    <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                      {project.role}
                    </p>
                  </div>
                )}
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-md text-white bg-primary-800 hover:bg-primary-900 dark:bg-primary-600 dark:hover:bg-primary-700 transition-colors duration-200 shadow-sm"
                >
                  {language === 'es' ? 'Ver proyecto' : 'View Project'}
                  <FiExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-2xl p-8 max-w-4xl mx-auto border border-primary-200 dark:border-primary-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {language === 'es' ? '¿Listo para construir algo así?' : 'Ready to build something like this?'}
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              {language === 'es'
                ? 'Cuéntame sobre tu negocio y hablemos de cómo un sitio web puede ayudarte a crecer.'
                : 'Tell me about your business and let\'s talk about how a website can help you grow.'}
            </p>
            <a
              href="https://calendly.com/luis-lozoya-tech/30min" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-800 hover:bg-primary-900 dark:bg-primary-600 dark:hover:bg-primary-700 transition-colors duration-200 shadow-lg"
            >
              <span>{language === 'es' ? 'Hablemos de tu proyecto' : 'Let\'s talk about your project'}</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
