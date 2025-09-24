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
    'hero.title': 'Empowering Businesses with Innovative Tech Solutions',
    'hero.subtitle': 'We build fast, modern websites that help small businesses grow. From quick landing pages to full business platforms, we deliver clarity, speed, and results.',
    'hero.cta': 'Get Started',
    'hero.learn': 'Learn More',
    'about.title': 'About IberiaTech Solutions',
    'about.subtitle': 'Your trusted partner in digital transformation',
    'about.description': 'Founded in 2024, IberiaTech Solutions specializes in creating modern, secure, and scalable web applications. We combine cutting-edge technology with business expertise to deliver solutions that drive growth.',
    'about.mission': 'Our Mission',
    'about.mission.text': 'To empower businesses in both the US and Spain by providing tailored digital solutions that drive growth, efficiency, and performance.',
    'about.expertise': 'Our Expertise',
    'about.expertise.text': 'With extensive experience in React, Next.js, Supabase, and AWS, we deliver high-performance applications that scale with your business.',
    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive web development solutions tailored to your business needs',
    'services.webdev.title': 'Web Development',
    'services.webdev.desc': 'Custom websites and web applications built with modern technologies like React, Next.js, and TypeScript.',
    'services.mobile.title': 'Mobile-First Design',
    'services.mobile.desc': 'Every website we build is optimized for mobile devices first, ensuring great user experience across all devices.',
    'services.bilingual.title': 'Bilingual Websites',
    'services.bilingual.desc': 'Reach wider audiences with websites available in both English and Spanish, perfect for US and Spanish markets.',
    'services.security.title': 'Security & Authentication',
    'services.security.desc': 'Secure user authentication, data protection, and security best practices to keep your business and users safe.',
    'services.performance.title': 'Performance Optimization',
    'services.performance.desc': 'Fast-loading websites that rank well in search engines and provide excellent user experience.',
    'services.support.title': 'Ongoing Support',
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
    'footer.services.webdev': 'Web Development',
    'footer.services.react': 'React & Next.js',
    'footer.services.supabase': 'Supabase Integration',
    'footer.services.bilingual': 'Bilingual Websites',
    'footer.services.seo': 'SEO Optimization',
    'footer.services.mobile': 'Mobile-Friendly Design',
    'hero.subtitle2': 'Fast, modern, AI-powered, bilingual websites.',
    'hero.tagline': 'Sitios web modernos y bilingües con inteligencia artificial.',
    'hero.features.ai': 'AI-Powered',
    'hero.features.mobile': 'Mobile-First',
    'hero.features.bilingual': 'Bilingual',
    'about.title2': 'About IberiaTech Solutions',
    'about.description2': 'Founded in 2024, IberiaTech Solutions specializes in React, Next.js, Supabase, AWS, and AI integrations. We help businesses in the US and Spain grow with scalable, secure, bilingual, and AI-enabled digital solutions. By combining cutting-edge technology with business expertise, we deliver modern web applications that drive growth and performance.',
    'about.stats.portfolio': 'Growing Portfolio',
    'about.stats.countries': 'Countries Served',
    'about.stats.satisfaction': 'Client Satisfaction',
    'about.stats.support': 'Ongoing Support',
    'about.testimonials.title': 'What Our Clients Say',
    'about.testimonials.quote': 'Luis at IberiaTech does amazing work. He is a skilled developer and really great to work with.',
    'about.testimonials.author': 'Dave Ingram',
    'about.testimonials.company': 'Querri',
    'services.title2': 'Charleston SC Web Development Services',
    'services.subtitle2': 'Next.js & Supabase Development for Small Businesses',
    'services.subtitle3': 'Professional websites and applications delivered for businesses',
    'why.title': 'Why Choose IberiaTech Solutions?',
    'why.subtitle': 'We\'re more than a web development agency - we\'re your strategic technology partner with bilingual expertise, AI solutions, and long-term support.',
    'why.bilingual.title': 'Complete Bilingual Expertise',
    'why.bilingual.desc': 'Deep understanding of US and Spanish markets, ensuring your site speaks both languages naturally.',
    'why.tech.title': 'Modern Technology Stack',
    'why.tech.desc': 'React, Next.js, Supabase, AWS - the most advanced technologies in the market for scalable and secure applications.',
    'why.ai.title': 'AI-Enabled Solutions',
    'why.ai.desc': 'We automate workflows and improve user experience with artificial intelligence and smart chatbots.',
    'why.personal.title': 'Direct Personal Approach',
    'why.personal.desc': 'Direct communication with the founder - no middlemen or large teams, just personalized attention.',
    'why.support.title': 'Long-term Support',
    'why.support.desc': 'Lasting relationships with continuous support, proactive maintenance, and comprehensive care plans.',
    'trusted.title': 'Trusted by',
    'trusted.coming': 'More clients coming soon...',
    'portfolio.title2': 'Client Work Portfolio',
    'portfolio.subtitle2': 'Web Development & AI-Powered Solutions',
    'portfolio.subtitle3': 'Professional websites and applications delivered for businesses',
    'portfolio.project.title': 'Featured Project: Cursor Rules Hub',
    'portfolio.project.desc': 'A community-driven platform for sharing and discovering Cursor AI rules.',
    'portfolio.project.benefit': 'Boosts developer productivity with AI-powered coding patterns',
    'portfolio.coming.title': 'More Projects Coming Soon',
    'portfolio.coming.desc': 'Currently building business websites and e-commerce platforms for small businesses in the US and Spain.',
    'portfolio.cta.title': 'Ready to Start Your Project?',
    'portfolio.cta.desc': 'Let\'s discuss your business needs and create a website that drives growth.',
    'portfolio.cta.link': 'See more personal projects →',
    'portfolio.cta.start': 'Start Your Project',
    'portfolio.cta.pricing': 'View Pricing',
    'pricing.month': 'project',
    'pricing.cta': 'Get Started',
    'contact.title2': 'Let\'s Talk About Your Project',
    'contact.subtitle2': 'Ready to start your next project? I\'d love to hear from you. Send me a message and I\'ll respond within 24 hours.',
    'contact.success.title': 'Message Sent Successfully!',
    'contact.success.desc': 'Thank you for your message. I\'ll get back to you within 24 hours.',
    'contact.form.name': 'Your full name',
    'contact.form.email': 'your.email@example.com',
    'contact.form.company': 'Your company name',
    'contact.form.message': 'Tell me about your project...',
    'contact.form.sending': 'Sending...',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Acerca de',
    'nav.services': 'Servicios',
    'nav.portfolio': 'Portafolio',
    'nav.contact': 'Contacto',
    'hero.title': 'Empoderando Empresas con Soluciones Tecnológicas Innovadoras',
    'hero.subtitle': 'Construimos sitios web rápidos y modernos que ayudan a las pequeñas empresas a crecer. Desde páginas de aterrizaje rápidas hasta plataformas comerciales completas, entregamos claridad, velocidad y resultados.',
    'hero.cta': 'Comenzar',
    'hero.learn': 'Saber Más',
    'about.title': 'Acerca de IberiaTech Solutions',
    'about.subtitle': 'Su socio de confianza en transformación digital',
    'about.description': 'Fundada en 2024, IberiaTech Solutions se especializa en crear aplicaciones web modernas, seguras y escalables. Combinamos tecnología de vanguardia con experiencia empresarial para entregar soluciones que impulsan el crecimiento.',
    'about.description2': 'Fundada en 2024, IberiaTech Solutions se especializa en React, Next.js, Supabase, AWS e integraciones de IA. Ayudamos a empresas en Estados Unidos y España a crecer con soluciones digitales escalables, seguras, bilingües y habilitadas por IA. Al combinar tecnología de vanguardia con experiencia empresarial, entregamos aplicaciones web modernas que impulsan el crecimiento y el rendimiento.',
    'about.mission': 'Nuestra Misión',
    'about.mission.text': 'Empoderar empresas tanto en Estados Unidos como en España proporcionando soluciones digitales personalizadas que impulsen el crecimiento, la eficiencia y el rendimiento.',
    'about.expertise': 'Nuestra Experiencia',
    'about.expertise.text': 'Con amplia experiencia en React, Next.js, Supabase y AWS, entregamos aplicaciones de alto rendimiento que escalan con su negocio.',
    'services.title': 'Nuestros Servicios',
    'services.subtitle': 'Soluciones integrales de desarrollo web adaptadas a las necesidades de su empresa',
    'services.webdev.title': 'Desarrollo Web',
    'services.webdev.desc': 'Sitios web y aplicaciones web personalizadas construidas con tecnologías modernas como React, Next.js y TypeScript.',
    'services.mobile.title': 'Diseño Mobile-First',
    'services.mobile.desc': 'Cada sitio web que construimos está optimizado para dispositivos móviles primero, asegurando una excelente experiencia de usuario en todos los dispositivos.',
    'services.bilingual.title': 'Sitios Web Bilingües',
    'services.bilingual.desc': 'Alcance audiencias más amplias con sitios web disponibles en inglés y español, perfectos para mercados estadounidenses y españoles.',
    'services.security.title': 'Seguridad y Autenticación',
    'services.security.desc': 'Autenticación segura de usuarios, protección de datos y mejores prácticas de seguridad para mantener su negocio y usuarios seguros.',
    'services.performance.title': 'Optimización de Rendimiento',
    'services.performance.desc': 'Sitios web de carga rápida que se posicionan bien en motores de búsqueda y proporcionan una excelente experiencia de usuario.',
    'services.support.title': 'Soporte Continuo',
    'services.support.desc': 'Planes de cuidado integrales que incluyen respaldos, actualizaciones, monitoreo de seguridad y soporte técnico.',
    'pricing.title': 'Precios Simples y Claros',
    'pricing.subtitle': 'Elija el paquete que se adapte a las necesidades de su empresa',
    'pricing.starter.name': 'Inicial',
    'pricing.starter.desc': 'Perfecto para pequeñas empresas que comienzan en línea',
    'pricing.business.name': 'Empresarial',
    'pricing.business.desc': 'Ideal para empresas en crecimiento con necesidades más complejas',
    'pricing.enterprise.name': 'Empresa',
    'pricing.enterprise.desc': 'Soluciones personalizadas para grandes empresas y proyectos complejos',
    'pricing.popular': 'Más Popular',
    'pricing.getstarted': 'Comenzar',
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
    'footer.services.webdev': 'Desarrollo Web',
    'footer.services.react': 'React & Next.js',
    'footer.services.supabase': 'Integración Supabase',
    'footer.services.bilingual': 'Sitios Web Bilingües',
    'footer.services.seo': 'Optimización SEO',
    'footer.services.mobile': 'Diseño Mobile-Friendly',
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, mounted }}>
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
