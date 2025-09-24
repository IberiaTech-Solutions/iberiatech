'use client'

import { useLanguage } from './LanguageProvider'
import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import Image from 'next/image'

export default function PortfolioSection() {
  const { t } = useLanguage()

  const projects = [
    {
      title: 'Cursor Rules Hub',
      description: 'A community-driven platform for sharing and discovering Cursor AI rules.',
      businessBenefit: 'Boosts developer productivity with AI-powered coding patterns',
      image: '/images/portfolio/cursor-rules-hub.svg',
      technologies: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
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
              Client Work Portfolio
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold text-brand-800 dark:text-brand-400 mb-4">
              Web Development & AI-Powered Solutions
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Professional websites and applications delivered for businesses
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
                  Featured Project: Cursor Rules Hub
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                {/* Business Benefit */}
                <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-3 mb-4 rounded-r-lg">
                  <p className="text-green-800 dark:text-green-200 text-sm font-medium">
                    <span className="font-semibold">Business Benefit:</span> {project.businessBenefit}
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
                    <span className="text-sm font-medium">Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center space-x-2 text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors duration-200"
                  >
                    <FiGithub className="w-4 h-4" />
                    <span className="text-sm font-medium">Code</span>
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
              More Projects Coming Soon
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Currently developing business websites and e-commerce platforms for small businesses in the US and Spain.
            </p>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's discuss your business needs and create a website that drives growth. 
              <a href="https://luislozoya.com" target="_blank" rel="noopener noreferrer" className="text-brand-800 hover:text-brand-900 dark:text-brand-400 dark:hover:text-brand-300 font-medium">
                See more personal projects →
              </a>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="#contact"
                    className="btn-primary inline-flex items-center space-x-2"
                  >
                    <span>Start Your Project</span>
                    <FiExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href="#contact"
                    className="btn-secondary inline-flex items-center space-x-2"
                  >
                    <span>Get in Touch</span>
                    <FiExternalLink className="w-4 h-4" />
                  </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
