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
    'nav.problems': 'Problems We Solve',
    'nav.services': 'Services',
    'nav.pricing': 'Pricing',
    'nav.portfolio': 'About Us',
    'nav.contact': 'Contact',
    'hero.title': 'Websites for Small Businesses — Affordable, Bilingual, Professional.',
    'hero.promise': 'Affordable websites for small businesses in Charleston, SC and Spain — bilingual, professional, and built to grow your business.',
    'hero.subtitle': 'We take care of the tech, you focus on your business.',
    'hero.cta': 'Get Started',
    'hero.learn': 'Learn More',
    'about.title': 'About IberiaTech Solutions',
    'about.subtitle': 'Your local web development team',
    'about.description': 'Founded in 2024, IberiaTech Solutions specializes in creating affordable, professional websites for small businesses. We handle all the technical details so you can focus on running your business.',
    'about.mission': 'Our Mission',
    'about.mission.text': 'To help small businesses in Charleston and Spain get online with professional websites that bring in more customers.',
    'about.expertise': 'Our Expertise',
    'about.expertise.text': 'We build websites that work. Simple, professional, and designed to help your business grow.',
    'services.title': 'Our Services',
    'services.subtitle': 'Simple, affordable website solutions for your business',
    'services.webdev.title': 'Web Development',
    'services.webdev.desc': 'Professional websites that look great and work perfectly on all devices.',
    'services.mobile.title': 'Mobile-First Design',
    'services.mobile.desc': 'Your website will look perfect on phones, tablets, and computers.',
    'services.bilingual.title': 'Bilingual Websites',
    'services.bilingual.desc': 'Reach more customers with websites in both English and Spanish.',
    'services.security.title': 'Security & Authentication',
    'services.security.desc': 'Your website and customer data stay safe and secure.',
    'services.performance.title': 'Performance Optimization',
    'services.performance.desc': 'Fast websites that show up first on Google and keep customers happy.',
    'services.support.title': 'Ongoing Support',
    'services.ai.title': 'Smart Features',
    'services.support.desc': 'We keep your website running smoothly so you can focus on your business.',
    'pricing.title': 'Affordable, One-Time Pricing',
    'pricing.subtitle': 'Designed for small and medium businesses - no hidden fees or subscriptions',
    'pricing.starter.name': 'Starter',
    'pricing.starter.desc': 'Need a simple upgrade? Starter gives you a professional, affordable site that works.',
    'pricing.business.name': 'Business',
    'pricing.business.desc': 'Growing and need more? Choose Business - more pages, branding, analytics',
    'pricing.custom.name': 'First Website? Start Here',
    'pricing.custom.desc': 'No website or not sure where to start? We\'ll review your case, guide you step by step, and build the right solution for your budget. Even if you\'ve never had a website before, we\'ll handle everything for you — from setup to launch.',
    'pricing.popular': 'Most Popular',
    'pricing.getstarted': 'Get Started',
    'pricing.cta.starter': 'Launch My Website',
    'pricing.cta.business': 'Grow My Business',
    'pricing.cta.custom': 'Get a Quote',
    'pricing.custom': 'Ready to get started? Let\'s talk about your project →',
    'pricing.consultation': 'All packages include free consultation and project planning',
    'problems.title': 'The Problems We Solve',
    'problems.subtitle': 'In Charleston, SC, many local shops still rely only on word-of-mouth. In Spain, many family businesses haven\'t yet gone online. Both risk losing new customers every day.',
    'problems.without.title': 'Without a Website (or with a poor one), businesses often face:',
    'problems.with.title': 'With IberiaTech Solutions, you get:',
    'problems.cta.title': 'Ready to stop losing customers online?',
    'problems.cta.subtitle': '👉 Construyamos tu sitio web hoy.',
    'problems.cta.button': 'Get Started Today',
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
    'footer.description': 'Helping small businesses grow online with affordable, bilingual websites.',
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
    'about.description2': 'Founded in 2024, IberiaTech Solutions specializes in bilingual website design for small and medium businesses in Charleston, Spain, and similar communities. We help construction companies, law offices, real estate agencies, restaurants, and local shops grow with secure, bilingual websites that convert visitors into customers. By combining modern technology with business expertise, we deliver web development solutions that drive growth and results.',
    'about.stats.portfolio': 'Growing Portfolio',
    'about.stats.countries': 'Countries Served',
    'about.stats.satisfaction': 'Client Satisfaction',
    'about.founder.title': 'Founder & Lead Developer',
    'about.founder.story.title': 'Meet the Developer Behind IberiaTech',
    'about.founder.story.text': 'With over 5 years of experience in web development and a passion for creating solutions that bridge cultures, I founded IberiaTech Solutions to help small and medium businesses in Charleston, Spain, and similar communities reach both English and Spanish-speaking markets. My background spans modern technologies like React, Next.js, and cloud platforms, combined with deep understanding of both US and Spanish business cultures.',
    'about.founder.experience.us': '5+ years US market experience',
    'about.founder.experience.spain': 'Native Spanish speaker & culture expert',
    'about.testimonials.title': 'Testimonios de Clientes',
    'about.testimonials.quote': 'Luis at IberiaTech does amazing work. He is a skilled developer and really great to work with.',
    'about.testimonials.author': 'Dave Ingram',
    'about.testimonials.company': 'Querri',
    'services.title2': 'Web Development for Charleston & Spain Businesses',
    'services.subtitle2': 'Professional websites that work for your business',
    'services.subtitle3': 'Professional websites and applications delivered for businesses',
    'portfolio.title2': 'About Luis Lozoya',
    'portfolio.subtitle2': 'Founder of IberiaTech Solutions',
    'portfolio.subtitle3': 'I help small businesses in Charleston and Spain grow online with modern, bilingual websites',
    'portfolio.project.title': 'Featured Project: Cursor Rules Hub',
    'portfolio.coming.title': 'My Experience',
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
    'portfolio.disclaimer': 'Note: Projects shown include both IberiaTech Solutions\' independent clients and professional work Luis Lozoya completed as a contractor for partner agencies.',
    'pricing.month': 'project',
    'pricing.cta': 'Get Started',
  },
  es: {
    'nav.problems': 'Problemas que Resolvemos',
    'nav.services': 'Servicios',
    'nav.pricing': 'Precios',
    'nav.portfolio': 'Acerca de Nosotros',
    'nav.contact': 'Contacto',
    'hero.title': 'Sitios Web para Pequeñas Empresas — Accesibles, Bilingües, Profesionales.',
    'hero.promise': 'Sitios web accesibles para pequeñas empresas en Charleston, SC y España — bilingües, profesionales y diseñados para hacer crecer tu negocio.',
    'hero.subtitle': 'Nosotros nos encargamos de la tecnología, tú te enfocas en tu negocio.',
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
    'about.subtitle': 'Su equipo local de desarrollo web',
    'about.description': 'Fundada en 2024, IberiaTech Solutions se especializa en crear sitios web accesibles y profesionales para pequeñas empresas. Nos encargamos de todos los detalles técnicos para que usted se enfoque en dirigir su negocio.',
    'about.description2': 'Fundada en 2024, IberiaTech Solutions se especializa en diseño de sitios web bilingües para pequeñas y medianas empresas en Charleston, España y comunidades similares. Ayudamos a empresas de construcción, bufetes de abogados, inmobiliarias, restaurantes y tiendas locales a crecer con sitios web seguros y bilingües que convierten visitantes en clientes. Al combinar tecnología moderna con experiencia empresarial, entregamos soluciones de desarrollo web que impulsan el crecimiento y resultados.',
    'about.stats.portfolio': 'Portafolio en Crecimiento',
    'about.stats.countries': 'Países Atendidos',
    'about.stats.satisfaction': 'Satisfacción del Cliente',
    'about.stats.support': 'Soporte Dedicado',
    'about.founder.title': 'Fundador y Desarrollador Principal',
    'about.founder.story.title': 'Conoce al Desarrollador Detrás de IberiaTech',
    'about.founder.story.text': 'Con más de 5 años de experiencia en desarrollo web y una pasión por crear soluciones que conecten culturas, fundé IberiaTech Solutions para ayudar a pequeñas y medianas empresas en Charleston, España y comunidades similares a llegar tanto a mercados de habla inglesa como española. Mi experiencia abarca tecnologías modernas como React, Next.js y plataformas en la nube, combinada con un profundo entendimiento de las culturas empresariales tanto de Estados Unidos como de España.',
    'about.founder.experience.us': '5+ años de experiencia en el mercado estadounidense',
    'about.founder.experience.spain': 'Hablante nativo de español y experto en cultura',
    'about.mission': 'Nuestra Misión',
    'about.mission.text': 'Ayudar a pequeñas empresas en Charleston y España a estar en línea con sitios web profesionales que atraigan más clientes.',
    'about.expertise': 'Nuestra Experiencia',
    'about.expertise.text': 'Construimos sitios web que funcionan. Simples, profesionales y diseñados para ayudar a su negocio a crecer.',
    'services.title': 'Nuestros Servicios',
    'services.subtitle': 'Soluciones simples y accesibles de sitios web para su negocio',
    'services.title2': 'Desarrollo Web para Empresas de Charleston y España',
    'services.subtitle2': 'Sitios web profesionales que funcionan para su negocio',
    'services.subtitle3': 'Proyectos reales de clientes y casos de estudio',
    'services.webdev.title': 'Desarrollo Web',
    'services.mobile.title': 'Diseño Mobile-First',
    'services.bilingual.title': 'Sitios Web Bilingües',
    'services.security.title': 'Seguridad y Autenticación',
    'services.performance.title': 'SEO y Rendimiento',
    'services.support.title': 'Soporte Continuo',
    'services.ai.title': 'Características con IA',
    'portfolio.title2': 'Acerca de Luis Lozoya',
    'portfolio.subtitle2': 'Fundador de IberiaTech Solutions',
    'portfolio.subtitle3': 'Ayudo a pequeñas empresas en Charleston y España a crecer en línea con sitios web modernos y bilingües',
    'portfolio.project.title': 'Proyecto Destacado: Cursor Rules Hub',
    'portfolio.coming.title': 'Mi Experiencia',
    'portfolio.cta.title': '¿Listo para Comenzar Tu Proyecto?',
    'portfolio.cta.start': 'Comenzar Tu Proyecto',
    'portfolio.cta.contact': 'Ponte en Contacto',
    'contact.title2': 'Comienza Tu Proyecto Hoy',
    'contact.subtitle2': 'Te responderé en 24 horas.',
    'contact.form.name': 'Tu nombre completo',
    'contact.form.company': 'Nombre de tu empresa',
    'contact.form.message': 'Cuéntame sobre tu proyecto...',
    'contact.form.sending': 'Enviando...',
    'pricing.title': 'Precios Accesibles, Pago Único',
    'pricing.subtitle': 'Diseñado para pequeñas y medianas empresas - sin tarifas ocultas ni suscripciones',
    'pricing.starter.name': 'Básico',
    'pricing.starter.desc': '¿Necesitas una actualización simple? Básico te da un sitio profesional y accesible que funciona.',
    'pricing.business.name': 'Empresarial',
    'pricing.business.desc': '¿Creciendo y necesitas más? Elige Empresarial - más páginas, marca, analytics',
    'pricing.custom.name': '¿Primer Sitio Web? Comienza Aquí',
    'pricing.custom.desc': '¿Sin sitio web o no sabes por dónde empezar? Revisaremos tu caso, te guiaremos paso a paso, y construiremos la solución correcta para tu presupuesto. Incluso si nunca has tenido un sitio web antes, nos encargaremos de todo por ti — desde la configuración hasta el lanzamiento.',
    'pricing.popular': 'Más Popular',
    'pricing.getstarted': 'Comenzar',
    'pricing.cta.starter': 'Lanzar Mi Sitio Web',
    'pricing.cta.business': 'Hacer Crecer Mi Negocio',
    'pricing.cta.custom': 'Solicitar Cotización',
    'pricing.custom': '¿Listo para comenzar? Hablemos sobre tu proyecto →',
    'pricing.consultation': 'Todos los paquetes incluyen consulta gratuita y planificación de proyecto',
    'problems.title': 'Los Problemas que Resolvemos',
    'problems.subtitle': 'En Charleston, SC, muchas tiendas locales aún dependen solo del boca a boca. En España, muchas empresas familiares aún no han entrado en línea. Ambas corren el riesgo de perder nuevos clientes todos los días.',
    'problems.without.title': 'Sin un Sitio Web (o con uno deficiente), las empresas a menudo enfrentan:',
    'problems.with.title': 'Con IberiaTech Solutions, obtienes:',
    'problems.cta.title': '¿Listo para dejar de perder clientes en línea?',
    'problems.cta.subtitle': '👉 Construyamos tu sitio web hoy.',
    'problems.cta.button': 'Comenzar Hoy',
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
    'footer.description': 'Ayudando a pequeñas empresas a crecer en línea con sitios web accesibles y bilingües.',
    'footer.services': 'Servicios',
    'footer.services.webdev': 'Desarrollo Web Personalizado',
    'footer.services.react': 'Diseño Web Moderno',
    'footer.services.supabase': 'Gestión Segura de Datos',
    'footer.services.bilingual': 'Sitios Web Bilingües',
    'footer.services.translation': 'Traducción de Sitios Web',
    'footer.services.seo': 'Optimización SEO',
    'footer.services.mobile': 'Diseño Mobile-Friendly',
    'portfolio.disclaimer': 'Nota: Los proyectos mostrados incluyen tanto clientes independientes de IberiaTech Solutions como trabajo profesional que Luis Lozoya completó como contratista para agencias socias.',
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
