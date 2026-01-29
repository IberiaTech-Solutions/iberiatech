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
      id: 1,
      title: 'ShopEssentialsHub',
      logo: '/images/logos/logo-SEH.png',
      description: language === 'es' 
        ? 'Una plataforma de recomendación de productos de Amazon cuidadosamente seleccionados por Luis Lozoya. Presenta productos probados y revisados personalmente, desde máquinas de café y tecnología hasta artículos para el hogar. Cada producto es recomendado porque realmente funciona, con reseñas honestas y sin promociones pagadas.' 
        : 'A curated Amazon products recommendation platform hand-picked by Luis Lozoya. Features personally tested and reviewed products, from coffee makers and tech gadgets to home essentials. Every product is recommended because it actually works, with honest reviews and no paid promotions.',
      image: '/images/portfolio/www.shopessentialshub.com_.png',
      category: 'Personal Project',
      technologies: ['Product Curation', 'E-commerce', 'Content Platform'],
      impact: language === 'es' 
        ? 'Plataforma para descubrir productos de calidad que realmente funcionan' 
        : 'Platform for discovering quality products that actually work',
      link: 'https://www.shopessentialshub.com/',
      ownership: 'personal',
      role: language === 'es'
        ? 'Proyecto personal desarrollado por Luis Lozoya.'
        : 'Personal project developed by Luis Lozoya.'
    },
    {
      id: 2,
      title: 'PortfolioHub',
      logo: '/images/logos/Logo Icon.png',
      description: language === 'es' 
        ? 'Una plataforma personal para conectar con profesionales talentosos y explorar sus portafolios existentes. Permite a los usuarios navegar por el trabajo de otros profesionales, descubrir talento y facilitar colaboraciones. Diseñado para ayudar a encontrar y conectar con los mejores profesionales en sus campos.' 
        : 'A personal platform for connecting with talented professionals and exploring their existing portfolios. Allows users to browse other professionals\' work, discover talent, and facilitate collaborations. Designed to help find and connect with the best professionals in their fields.',
      image: '/images/portfolio/portfoliohub.png',
      category: 'Personal Project',
      technologies: ['Portfolio Platform', 'Professional Networking', 'Collaboration Tools'],
      impact: language === 'es' 
        ? 'Plataforma para conectar profesionales y mostrar talento' 
        : 'Platform for connecting professionals and showcasing talent',
      link: 'https://portfolio-hub-tawny.vercel.app/',
      ownership: 'personal',
      role: language === 'es'
        ? 'Proyecto personal desarrollado por Luis Lozoya.'
        : 'Personal project developed by Luis Lozoya.'
    },
    {
      id: 3,
      title: 'Querri',
      logo: 'https://querri.com/favicon.svg',
      tagline: 'Data analytics & business intelligence',
      description: language === 'es' 
        ? 'Un sitio web para una startup de análisis de datos con sede en Charleston que muestra su plataforma de IA y servicios. Destaca características como tableros, limpieza de datos e integraciones de manera clara que ayuda a los clientes potenciales a entender el valor de sus soluciones.' 
        : 'A website for a Charleston-based data analytics startup that showcases their AI platform and services. It highlights features like dashboards, data cleansing, and integrations in a clear way that helps potential clients understand the value of their solutions.',
      image: '/images/portfolio/querri1.png',
      category: 'Business Services',
      technologies: ['Custom CMS', 'Client Access', 'Data Visualization'],
      impact: language === 'es' 
        ? 'Gestión de clientes más ágil y mejor rendimiento' 
        : 'Streamlined client management and improved performance',
      link: 'https://querri.com/',
      ownership: 'direct',
      role: language === 'es'
        ? 'Entregado como contratista para Querri.'
        : 'Delivered as a contractor for Querri.'
    },
    {
      id: 4,
      title: 'GSeay Construction',
      logo: '/images/logos/image.png',
      description: language === 'es' 
        ? 'Un sitio web profesional para una empresa de construcción de Florida especializada en proyectos de hospitalidad, salud, industrial y renovación. El sitio destaca sus servicios, incluye un portafolio de proyectos, testimonios y un mapa de proyectos para demostrar credibilidad y atraer nuevos clientes.' 
        : 'A professional website for a Florida construction company specializing in hospitality, healthcare, industrial, and renovation projects. The site highlights their services, includes a project portfolio, testimonials, and a project map to demonstrate credibility and attract new clients.',
      image: '/images/portfolio/gseay.png',
      category: 'Construction',
      technologies: ['Project Portfolio', 'Services', 'Client Testimonials'],
      impact: language === 'es' 
        ? 'Mayor visibilidad en línea y más consultas de clientes' 
        : 'Improved online visibility and more client inquiries',
      link: 'https://www.gseayinc.com/',
      ownership: 'collaboration',
      collaboration: 'GDNA',
      role: language === 'es' 
        ? 'Entregado como contratista para GDNA.' 
        : 'Delivered as a contractor for GDNA.'
    },
    {
      id: 5,
      title: 'LESS USA',
      logo: '/images/logos/InfinityLogo.png',
      description: language === 'es' 
        ? 'Una plataforma digital para una asociación de aplicación de la ley de EE. UU. para gestionar programas de entrenamiento. El sitio soporta documentar el rendimiento de reclutas, dar visibilidad a entrenadores y proporcionar a los miembros acceso a herramientas y recursos clave.' 
        : 'A digital platform for a U.S. law enforcement association to manage training programs. The site supports documenting recruit performance, giving trainers visibility, and providing members with access to key tools and resources.',
      image: '/images/portfolio/Less1.png',
      category: 'Digital Platform',
      technologies: ['Training Platform', 'Documentation', 'Member Access'],
      impact: language === 'es' 
        ? '30% más rendimiento y UX optimizada' 
        : '30% performance improvement and optimized UX',
      link: 'https://www.less-usa.com/',
      ownership: 'collaboration',
      collaboration: 'GDNA',
      role: language === 'es' 
        ? 'Entregado como contratista para GDNA.' 
        : 'Delivered as a contractor for GDNA.'
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
                {language === 'es' ? 'Proyectos que Ayudan a las Pequeñas Empresas a Crecer' : 'Projects That Help Small Businesses Grow'}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {language === 'es' 
                  ? 'Estos incluyen tanto proyectos de IberiaTech Solutions como trabajo profesional que Luis Lozoya entregó como contratista para agencias socias.' 
                  : 'These include both IberiaTech Solutions projects and professional work Luis Lozoya delivered as a contractor for partner agencies.'}
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
                      <div className={`w-8 h-8 relative ${project.title === 'PortfolioHub' ? 'bg-blue-600 rounded-full p-1' : ''}`}>
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
                  className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 text-sm font-medium transition-colors duration-200"
                >
                  {language === 'es' ? 'Ver proyecto' : 'View Project'}
                  <FiExternalLink className="ml-1 h-3 w-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Coming Soon Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-2xl p-8 max-w-4xl mx-auto border border-primary-200 dark:border-primary-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {language === 'es' ? 'Mi Experiencia' : 'My Experience'}
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              {language === 'es' 
                ? 'Soy Luis Lozoya, fundador de IberiaTech Solutions. Ayudo a pequeñas empresas en Charleston y España a crecer en línea con sitios web modernos y bilingües que convierten visitas en clientes.' 
                : 'I\'m Luis Lozoya, founder of IberiaTech Solutions. I help small businesses in Charleston and Spain grow online with modern, bilingual websites that turn visitors into customers.'}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <div className="flex items-center space-x-2 text-primary-800 dark:text-primary-400">
                <div className="w-2 h-2 bg-accent-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">{language === 'es' ? 'En Desarrollo' : 'In Development'}</span>
              </div>
              <div className="flex items-center space-x-2 text-primary-800 dark:text-primary-400">
                <div className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <span className="text-sm font-medium">{language === 'es' ? 'Próximamente' : 'Coming Soon'}</span>
              </div>
            </div>
            <a
              href="https://luislozoya.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-800 hover:bg-primary-900 dark:bg-primary-600 dark:hover:bg-primary-700 transition-colors duration-200 shadow-lg"
            >
              <span>{language === 'es' ? 'Ver más de mi trabajo' : 'See more of my work'}</span>
              <FiExternalLink className="ml-2 h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
