'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Language = 'en' | 'es'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  mounted: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Contact',
    'hero.title': 'We build modern websites that bring you more customers',
    'hero.promise': 'Helping construction companies, law offices, and small businesses in Charleston, Spain, and beyond grow online with secure, bilingual websites.',
    'hero.subtitle': 'We build fast, modern websites that help small and medium businesses grow. From quick landing pages to full business platforms, we deliver clarity, speed, and results.',
    'hero.cta': 'Get Started',
    'hero.learn': 'Learn More',
    'about.title': 'About IberiaTech Solutions',
    'about.subtitle': 'Your trusted partner in digital transformation',
    'about.description': 'Founded in 2024, IberiaTech Solutions specializes in creating modern, secure, and scalable web applications. We combine cutting-edge technology with business expertise to deliver solutions that drive growth.',
    'about.mission': 'Our Mission',
    'about.mission.text': 'To empower businesses in both the US and Spain by providing tailored digital solutions that drive growth, efficiency, and performance.',
    'about.expertise': 'Our Expertise',
    'about.expertise.text': 'With extensive experience in modern web technologies, we deliver websites that grow with your business.',
    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive web development solutions tailored to your business needs',
    'services.webdev.title': 'Web Development',
    'services.webdev.desc': 'Custom websites and web applications built with modern technologies for optimal performance.',
    'services.mobile.title': 'Mobile-First Design',
    'services.mobile.desc': 'Every website we build is optimized for mobile devices first, ensuring great user experience across all devices.',
    'services.bilingual.title': 'Bilingual Websites',
    'services.bilingual.desc': 'Reach wider audiences with websites available in both English and Spanish, perfect for US and Spanish markets.',
    'services.security.title': 'Security & Authentication',
    'services.security.desc': 'Secure user authentication, data protection, and security best practices to keep your business and users safe.',
    'services.performance.title': 'Performance Optimization',
    'services.performance.desc': 'Fast-loading websites that rank well in search engines and provide excellent user experience.',
    'services.support.title': 'Ongoing Support',
    'services.ai.title': 'AI-Powered Features',
    'services.support.desc': 'Comprehensive care plans including backups, updates, security monitoring, and technical support.',
    'pricing.title': 'Simple, Clear Pricing',
    'pricing.subtitle': 'Choose the package that fits your business needs',
    'pricing.starter.name': 'Starter',
    'pricing.starter.desc': 'Perfect for small businesses getting started online',
    'pricing.business.name': 'Business',
    'pricing.business.desc': 'Ideal for growing businesses with more complex needs',
    'pricing.enterprise.name': 'Enterprise',
    'pricing.enterprise.desc': 'Tailored solutions for large businesses and complex projects',
    'pricing.popular': 'Most Popular',
    'pricing.getstarted': 'Get Started',
    'pricing.cta.starter': 'Launch My Website',
    'pricing.cta.business': 'Grow My Business',
    'pricing.cta.enterprise': 'Scale My Website',
    'pricing.custom': 'Contact us for custom pricing →',
    'pricing.consultation': 'All packages include free consultation and project planning',
    'portfolio.title': 'Our Portfolio',
    'portfolio.subtitle': 'Recent projects showcasing our expertise and client success',
    'contact.title': 'Ready to Get Started?',
    'contact.subtitle': 'Let\'s discuss how we can bring your next project to life',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.company': 'Company',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.phone': 'Phone',
    'contact.location': 'Location',
    'footer.company': 'IberiaTech Solutions',
    'footer.description': 'Empowering businesses with innovative tech solutions for a digital future.',
    'footer.services': 'Services',
    'footer.services.webdev': 'Custom Web Development',
    'footer.services.react': 'Modern Web Design',
    'footer.services.supabase': 'Secure Data Management',
    'footer.services.bilingual': 'Bilingual Websites',
    'footer.services.translation': 'Website Translation',
    'footer.services.seo': 'SEO Optimization',
    'footer.services.mobile': 'Mobile-Friendly Design',
    'hero.subtitle2': 'In English, Spanish, or both',
    'hero.tagline': 'Sitios web modernos y bilingües con inteligencia artificial.',
    'hero.features.ai': 'AI-Powered',
    'hero.features.mobile': 'Mobile-First',
    'hero.features.bilingual': 'Bilingual',
    'hero.cta.start': 'Start Your Project',
    'hero.cta.contact': 'Get in Touch',
    'about.title2': 'About IberiaTech Solutions',
    'about.description2': 'Founded in 2024, IberiaTech Solutions specializes in Charleston bilingual website design and modern web technologies. We help Charleston law firms, construction companies, and small businesses in the Charleston area grow with secure, bilingual websites that convert visitors into customers. By combining modern technology with business expertise, we deliver Charleston web development solutions that drive growth and results.',
    'about.stats.portfolio': 'Growing Portfolio',
    'about.stats.countries': 'Countries Served',
    'about.stats.satisfaction': 'Client Satisfaction',
    'about.founder.title': 'Founder & Lead Developer',
    'about.founder.story.title': 'Meet the Developer Behind IberiaTech',
    'about.founder.story.text': 'With over 5 years of experience in web development and a passion for creating solutions that bridge cultures, I founded IberiaTech Solutions to help Charleston businesses reach both English and Spanish-speaking markets. My background spans modern technologies like React, Next.js, and cloud platforms, combined with deep understanding of both US and Spanish business cultures.',
    'about.founder.experience.us': '5+ years US market experience',
    'about.founder.experience.spain': 'Native Spanish speaker & culture expert',
    'about.testimonials.title': 'Testimonios de Clientes',
    'about.testimonials.quote': 'Luis at IberiaTech does amazing work. He is a skilled developer and really great to work with.',
    'about.testimonials.author': 'Dave Ingram',
    'about.testimonials.company': 'Querri',
    'services.title2': 'Charleston SC & Spain Web Development Services',
    'services.subtitle2': 'Modern Web Development for Small & Medium Businesses',
    'services.subtitle3': 'Professional websites and applications delivered for businesses',
    'portfolio.title2': 'Website Projects & Case Studies',
    'portfolio.subtitle2': 'Web Development & AI-Powered Solutions',
    'portfolio.subtitle3': 'Professional websites and applications delivered for businesses',
    'portfolio.project.title': 'Featured Project: Cursor Rules Hub',
    'portfolio.coming.title': 'Currently Building Websites',
    'portfolio.cta.title': 'Ready to Start Your Project?',
    'portfolio.cta.start': 'Start Your Project',
    'portfolio.cta.contact': 'Get in Touch',
    'contact.title2': 'Start Your Project Today',
    'contact.subtitle2': 'I\'ll respond within 24 hours.',
    'contact.form.name': 'Your full name',
    'contact.form.company': 'Your company name',
    'contact.form.message': 'Tell me about your project...',
    'contact.form.sending': 'Sending...',
    'why.title': 'Why Choose IberiaTech Solutions?',
    'why.subtitle': 'We\'re more than a web development agency - we\'re your strategic technology partner with bilingual expertise, AI solutions, and long-term support.',
    'why.bilingual.title': 'Complete Bilingual Expertise',
    'why.bilingual.desc': 'Deep understanding of US and Spanish markets, ensuring your site speaks both languages naturally.',
    'why.tech.title': 'Modern Technology Stack',
    'why.tech.desc': 'We use modern technologies to create fast, secure websites that grow with your business.',
    'why.ai.title': 'AI-Enabled Solutions',
    'why.ai.desc': 'We automate workflows and improve user experience with artificial intelligence and smart chatbots.',
    'why.personal.title': 'Direct Personal Approach',
    'why.personal.desc': 'Direct communication with the founder - no middlemen or large teams, just personalized attention.',
    'why.support.title': 'Long-term Support',
    'why.support.desc': 'Lasting relationships with continuous support, proactive maintenance, and comprehensive care plans.',
    'trusted.title': 'Trusted by',
    'trusted.coming': 'More clients coming soon...',
    'portfolio.disclaimer': 'Note: IberiaTech Solutions showcases both independent projects and select contract contributions completed in collaboration with partner agencies.',
    'pricing.month': 'project',
    'pricing.cta': 'Get Started',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Acerca de',
    'nav.services': 'Servicios',
    'nav.portfolio': 'Portafolio',
    'nav.contact': 'Contacto',
    'hero.title': 'Construimos sitios web modernos que te traen más clientes',
    'hero.promise': 'Ayudando a empresas de construcción, bufetes de abogados y pequeñas empresas en Charleston, España y más allá a crecer en línea con sitios web seguros y bilingües.',
    'hero.subtitle': 'Construimos sitios web rápidos y modernos que ayudan a las pequeñas y medianas empresas a crecer. Desde páginas de aterrizaje rápidas hasta plataformas comerciales completas, entregamos claridad, velocidad y resultados.',
    'hero.subtitle2': 'En inglés, español, o ambos',
    'hero.tagline': 'Sitios web modernos y bilingües con inteligencia artificial.',
    'hero.features.ai': 'Con IA',
    'hero.features.mobile': 'Mobile-First',
    'hero.features.bilingual': 'Bilingüe',
    'hero.cta.start': 'Comienza Tu Proyecto',
    'hero.cta.contact': 'Ponte en Contacto',
    'hero.cta': 'Comenzar',
    'hero.learn': 'Saber Más',
    'about.title': 'Acerca de IberiaTech Solutions',
    'about.subtitle': 'Su socio de confianza en transformación digital',
    'about.description': 'Fundada en 2024, IberiaTech Solutions se especializa en crear aplicaciones web modernas, seguras y escalables. Combinamos tecnología de vanguardia con experiencia empresarial para entregar soluciones que impulsan el crecimiento.',
    'about.description2': 'Fundada en 2024, IberiaTech Solutions se especializa en diseño de sitios web bilingües de Charleston y tecnologías web modernas. Ayudamos a bufetes de abogados de Charleston, empresas de construcción y pequeñas empresas en el área de Charleston a crecer con sitios web seguros y bilingües que convierten visitantes en clientes. Al combinar tecnología moderna con experiencia empresarial, entregamos soluciones de desarrollo web de Charleston que impulsan el crecimiento y resultados.',
    'about.stats.portfolio': 'Portafolio en Crecimiento',
    'about.stats.countries': 'Países Atendidos',
    'about.stats.satisfaction': 'Satisfacción del Cliente',
    'about.stats.support': 'Soporte Dedicado',
    'about.founder.title': 'Fundador y Desarrollador Principal',
    'about.founder.story.title': 'Conoce al Desarrollador Detrás de IberiaTech',
    'about.founder.story.text': 'Con más de 5 años de experiencia en desarrollo web y una pasión por crear soluciones que conecten culturas, fundé IberiaTech Solutions para ayudar a las empresas de Charleston a llegar tanto a mercados de habla inglesa como española. Mi experiencia abarca tecnologías modernas como React, Next.js y plataformas en la nube, combinada con un profundo entendimiento de las culturas empresariales tanto de Estados Unidos como de España.',
    'about.founder.experience.us': '5+ años de experiencia en el mercado estadounidense',
    'about.founder.experience.spain': 'Hablante nativo de español y experto en cultura',
    'about.mission': 'Nuestra Misión',
    'about.mission.text': 'Empoderar empresas tanto en Estados Unidos como en España proporcionando soluciones digitales personalizadas que impulsen el crecimiento, la eficiencia y el rendimiento.',
    'about.expertise': 'Nuestra Experiencia',
    'about.expertise.text': 'Con amplia experiencia en tecnologías web modernas, entregamos sitios web que crecen con su negocio.',
    'services.title': 'Nuestros Servicios',
    'services.title2': 'Servicios de Desarrollo Web en Charleston SC y España',
    'services.subtitle2': 'Desarrollo Web Moderno para Pequeñas y Medianas Empresas',
    'services.subtitle3': 'Sitios web y aplicaciones profesionales entregadas para empresas',
    'services.webdev.title': 'Desarrollo Web',
    'services.mobile.title': 'Diseño Mobile-First',
    'services.bilingual.title': 'Sitios Web Bilingües',
    'services.security.title': 'Seguridad y Autenticación',
    'services.performance.title': 'SEO y Rendimiento',
    'services.support.title': 'Soporte Continuo',
    'services.ai.title': 'Características con IA',
    'portfolio.title2': 'Proyectos de Sitios Web y Casos de Estudio',
    'portfolio.subtitle2': 'Desarrollo Web y Soluciones con IA',
    'portfolio.subtitle3': 'Sitios web y aplicaciones profesionales entregadas para empresas',
    'portfolio.project.title': 'Proyecto Destacado: Cursor Rules Hub',
    'portfolio.coming.title': 'Actualmente desarrollando proyectos para pequeñas empresas en EE. UU. y España',
    'portfolio.cta.title': '¿Listo para Comenzar Tu Proyecto?',
    'portfolio.cta.start': 'Comenzar Tu Proyecto',
    'portfolio.cta.contact': 'Ponte en Contacto',
    'contact.title2': 'Comienza Tu Proyecto Hoy',
    'contact.subtitle2': 'Te responderé en 24 horas.',
    'contact.form.name': 'Tu nombre completo',
    'contact.form.company': 'Nombre de tu empresa',
    'contact.form.message': 'Cuéntame sobre tu proyecto...',
    'contact.form.sending': 'Enviando...',
    'pricing.title': 'Precios Simples y Claros',
    'pricing.subtitle': 'Elija el paquete que se adapte a las necesidades de su empresa',
    'pricing.starter.name': 'Básico',
    'pricing.starter.desc': 'Perfecto para pequeñas empresas que comienzan en línea',
    'pricing.business.name': 'Empresarial',
    'pricing.business.desc': 'Ideal para empresas en crecimiento con necesidades más complejas',
    'pricing.enterprise.name': 'Profesional',
    'pricing.enterprise.desc': 'Soluciones personalizadas para grandes empresas y proyectos complejos',
    'pricing.popular': 'Más Popular',
    'pricing.getstarted': 'Comenzar',
    'pricing.cta.starter': 'Lanzar Mi Sitio Web',
    'pricing.cta.business': 'Hacer Crecer Mi Negocio',
    'pricing.cta.enterprise': 'Escalar Mi Sitio Web',
    'pricing.custom': 'Contáctenos para precios personalizados →',
    'pricing.consultation': 'Todos los paquetes incluyen consulta gratuita y planificación de proyecto',
    'portfolio.title': 'Nuestro Portafolio',
    'portfolio.subtitle': 'Proyectos recientes que muestran nuestra experiencia y el éxito de nuestros clientes',
    'contact.title': '¿Listo para Comenzar?',
    'contact.subtitle': 'Hablemos sobre cómo podemos dar vida a su próximo proyecto',
    'contact.name': 'Nombre',
    'contact.email': 'Correo Electrónico',
    'contact.company': 'Empresa',
    'contact.message': 'Mensaje',
    'contact.send': 'Enviar Mensaje',
    'contact.phone': 'Teléfono',
    'contact.location': 'Ubicación',
    'footer.company': 'IberiaTech Solutions',
    'footer.description': 'Empoderando empresas con soluciones tecnológicas innovadoras para un futuro digital.',
    'footer.services': 'Servicios',
    'footer.services.webdev': 'Desarrollo Web Personalizado',
    'footer.services.react': 'Diseño Web Moderno',
    'footer.services.supabase': 'Gestión Segura de Datos',
    'footer.services.bilingual': 'Sitios Web Bilingües',
    'footer.services.translation': 'Traducción de Sitios Web',
    'footer.services.seo': 'Optimización SEO',
    'footer.services.mobile': 'Diseño Mobile-Friendly',
    'portfolio.disclaimer': 'Nota: IberiaTech Solutions muestra tanto proyectos independientes como contribuciones contractuales selectas completadas en colaboración con agencias socias.',
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Detect browser language
    const detectBrowserLanguage = (): Language => {
      if (typeof window === 'undefined') return 'en'
      
      // Check localStorage first for user preference
      const savedLanguage = localStorage.getItem('preferred-language') as Language
      if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'es')) {
        return savedLanguage
      }
      
      // Detect browser language
      const browserLang = navigator.language || navigator.languages?.[0] || 'en'
      
      // Check if browser language is Spanish
      if (browserLang.startsWith('es')) {
        return 'es'
      }
      
      // Default to English for all other languages
      return 'en'
    }

    const detectedLanguage = detectBrowserLanguage()
    setLanguage(detectedLanguage)
    setMounted(true)
  }, [])

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage)
    // Persist user's language choice
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferred-language', newLanguage)
    }
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleLanguageChange, t, mounted }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
