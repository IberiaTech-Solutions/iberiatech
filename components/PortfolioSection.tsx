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
    // IberiaTech Solutions projects
    {
      id: 1,
      title: 'NEVA Estudio',
      logo: 'https://neva-estudio.vercel.app/neva-logo.svg',
      description: language === 'es'
        ? 'Sitio web para un estudio de arquitectura en Gijón, Asturias, con más de una década de experiencia en arquitectura cercana y humanista. Presenta sus servicios de obra residencial, comercial, urbanismo, eficiencia energética, diseño de interiores y gestión integral de proyectos llave en mano.'
        : 'Website for an architecture firm in Gijón, Asturias, with over a decade of experience in close, humanistic architecture. Showcases their residential, commercial, urban planning, energy efficiency, interior design, and full turnkey project management services.',
      image: '/neva.jpg',
      category: 'Architecture',
      technologies: ['Bilingual Site', 'Portfolio Showcase', 'Services Platform'],
      impact: language === 'es'
        ? 'Presencia digital profesional para atraer nuevos clientes'
        : 'Professional digital presence to attract new clients',
      link: 'https://neva-estudio.vercel.app/es',
      ownership: 'direct',
      role: language === 'es'
        ? 'Proyecto de IberiaTech Solutions.'
        : 'IberiaTech Solutions project.'
    },
    {
      id: 2,
      title: 'Coastal Millwork & Supply',
      logo: 'https://coastal-millwork.vercel.app/favicon.png',
      description: language === 'es'
        ? 'Sitio web para un contratista de interiores arquitectónicos comerciales galardonado en Summerville, SC. Destaca sus servicios de diseño, fabricación e instalación de productos de madera y especialidades interiores premium, con certificación AWI-QCP y más de 800 proyectos completados.'
        : 'Website for an award-winning commercial interior architectural contractor in Summerville, SC. Highlights their design, fabrication, and installation services for premium architectural wood and interior specialty products, with AWI-QCP certification and 800+ completed projects.',
      image: '/coastal.jpg',
      category: 'Construction',
      technologies: ['Project Showcase', 'Services Platform', 'Client Portal'],
      impact: language === 'es'
        ? 'Mayor credibilidad profesional y generación de leads'
        : 'Enhanced professional credibility and lead generation',
      link: 'https://coastal-millwork.vercel.app/',
      ownership: 'direct',
      role: language === 'es'
        ? 'Proyecto de IberiaTech Solutions.'
        : 'IberiaTech Solutions project.'
    },
    {
      id: 3,
      title: 'ShopEssentialsHub',
      logo: '/images/logos/logo-SEH.png',
      description: language === 'es'
        ? 'Plataforma de recomendacion de productos de Amazon seleccionados a mano. Productos probados y revisados personalmente, desde cafeteras y tecnologia hasta articulos para el hogar. Cada producto se recomienda porque realmente funciona, con reseñas honestas y sin promociones pagadas.'
        : 'A curated Amazon products recommendation platform. Features personally tested and reviewed products, from coffee makers and tech gadgets to home essentials. Every product is recommended because it actually works, with honest reviews and no paid promotions.',
      image: '/images/portfolio/www.shopessentialshub.com_.jpg',
      category: 'E-commerce',
      technologies: ['Product Curation', 'E-commerce', 'Content Platform'],
      impact: language === 'es'
        ? 'Plataforma para descubrir productos de calidad que realmente funcionan'
        : 'Platform for discovering quality products that actually work',
      link: 'https://www.shopessentialshub.com/',
      ownership: 'direct',
      role: language === 'es'
        ? 'Proyecto de IberiaTech Solutions.'
        : 'IberiaTech Solutions project.'
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
      technologies: ['AI Platform', 'Job Matching', 'Chrome Extension'],
      impact: language === 'es'
        ? 'Plataforma inteligente para buscar empleo de forma estrategica'
        : 'Smart platform for strategic job hunting',
      link: 'https://portfolio-hub-tawny.vercel.app/',
      ownership: 'direct',
      role: language === 'es'
        ? 'Proyecto de IberiaTech Solutions.'
        : 'IberiaTech Solutions project.'
    },
    // g/d/n/a collaboration projects
    {
      id: 5,
      title: 'GSeay Construction',
      logo: '/images/logos/image.png',
      description: language === 'es'
        ? 'Un sitio web profesional para una empresa de construcción de Florida especializada en proyectos de hospitalidad, salud, industrial y renovación. El sitio destaca sus servicios, incluye un portafolio de proyectos, testimonios y un mapa de proyectos para demostrar credibilidad y atraer nuevos clientes.'
        : 'A professional website for a Florida construction company specializing in hospitality, healthcare, industrial, and renovation projects. The site highlights their services, includes a project portfolio, testimonials, and a project map to demonstrate credibility and attract new clients.',
      image: '/images/portfolio/gseay.jpg',
      category: 'Construction',
      technologies: ['Project Portfolio', 'Services', 'Client Testimonials'],
      impact: language === 'es'
        ? 'Mayor visibilidad en línea y más consultas de clientes'
        : 'Improved online visibility and more client inquiries',
      link: 'https://www.gseayinc.com/',
      ownership: 'collaboration',
      collaboration: 'g/d/n/a',
      role: language === 'es'
        ? 'Entregado como contratista para g/d/n/a.'
        : 'Delivered as a contractor for g/d/n/a.'
    },
    {
      id: 6,
      title: 'LESS USA',
      logo: '/images/logos/InfinityLogo.png',
      description: language === 'es'
        ? 'Una plataforma digital para una asociación de aplicación de la ley de EE. UU. para gestionar programas de entrenamiento. El sitio soporta documentar el rendimiento de reclutas, dar visibilidad a entrenadores y proporcionar a los miembros acceso a herramientas y recursos clave.'
        : 'A digital platform for a U.S. law enforcement association to manage training programs. The site supports documenting recruit performance, giving trainers visibility, and providing members with access to key tools and resources.',
      image: '/images/portfolio/Less1.jpg',
      category: 'Digital Platform',
      technologies: ['Training Platform', 'Documentation', 'Member Access'],
      impact: language === 'es'
        ? '30% más rendimiento y UX optimizada'
        : '30% performance improvement and optimized UX',
      link: 'https://www.less-usa.com/',
      ownership: 'collaboration',
      collaboration: 'g/d/n/a',
      role: language === 'es'
        ? 'Entregado como contratista para g/d/n/a.'
        : 'Delivered as a contractor for g/d/n/a.'
    },
    // Contractor project
    {
      id: 7,
      title: 'Querri',
      logo: 'https://querri.com/favicon.svg',
      tagline: 'Data analytics & business intelligence',
      description: language === 'es'
        ? 'Un sitio web para una startup de análisis de datos con sede en Charleston que muestra su plataforma de IA y servicios. Destaca características como tableros, limpieza de datos e integraciones de manera clara que ayuda a los clientes potenciales a entender el valor de sus soluciones.'
        : 'A website for a Charleston-based data analytics startup that showcases their AI platform and services. It highlights features like dashboards, data cleansing, and integrations in a clear way that helps potential clients understand the value of their solutions.',
      image: '/images/portfolio/querri1.jpg',
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
                {language === 'es' ? 'Proyectos que Ayudan a Pequeñas y Medianas Empresas a Crecer' : 'Projects That Help Small & Medium Companies Grow'}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {language === 'es'
                  ? 'Sitios web reales para empresas reales. Cada proyecto fue diseñado para atraer clientes y hacer crecer el negocio.'
                  : 'Real websites for real businesses. Every project was designed to attract customers and grow the business.'}
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
                  className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 text-sm font-medium transition-colors duration-200"
                >
                  {language === 'es' ? 'Ver proyecto' : 'View Project'}
                  <FiExternalLink className="ml-1 h-3 w-3" />
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
              {language === 'es' ? '¿Quieres resultados como estos?' : 'Want results like these?'}
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              {language === 'es'
                ? 'Cuéntame sobre tu negocio y te mostraré exactamente cómo un sitio web puede ayudarte a crecer.'
                : 'Tell me about your business and I\'ll show you exactly how a website can help you grow.'}
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
