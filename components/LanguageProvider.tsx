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
    // Navigation
    'nav.home': 'Home',
    'nav.work': 'Work',
    'nav.services': 'Services',
    'nav.contact': 'Contact',

    // Hero
    'hero.title': 'We build websites that bring in customers.',
    'hero.subtitle':
      'Sites, stores, and custom software for small businesses. Bilingual in English and Spanish. You work directly with me, not a rotating team.',
    'hero.cta.work': 'See our work',
    'hero.cta.contact': 'Get in touch',

    // Services overview
    'services.title': 'Problems we solve',
    'services.subtitle':
      'Five things that cost small businesses money. Here’s how we fix them.',
    'services.web.title': 'Web & Ecommerce',
    'services.web.desc':
      'Your site is slow, looks like a template, or loses customers at checkout. We fix all three. Fast pages, mobile-first, Stripe checkout that works.',
    'services.bilingual.title': 'Bilingual & Multilingual Sites',
    'services.bilingual.desc':
      'Your site is English-only and half your customers speak Spanish. That costs you business. We build sites in English, Spanish, and German that read naturally and rank in search for each language.',
    'services.apps.title': 'Custom Business Applications',
    'services.apps.desc':
      'You’re running the business on spreadsheets, email, and three SaaS tools that don’t talk to each other. We replace that with one piece of software built around your workflow: dashboards, portals, marketplaces, internal tools.',
    'services.security.title': 'Security Audits & Hardening',
    'services.security.desc':
      'You take payments and store customer data, but no one has audited your app for security. That’s how breaches happen. We run OWASP Top 10 audits, harden authentication and database access, and review how your app handles payments and third-party APIs.',
    'services.ai.title': 'AI Integrations',
    'services.ai.desc':
      'If your staff spends half their day answering the same questions, or you’re losing money to no-shows, we can automate it. We build bilingual chatbots and WhatsApp flows that handle bookings, FAQs, lead capture, and follow-ups.',
    'services.cta': 'See all services',

    // Process
    'process.title': 'How we work',
    'process.discovery.title': 'Discovery',
    'process.discovery.desc':
      'A short call to understand your goals, audience, and scope.',
    'process.design.title': 'Design & planning',
    'process.design.desc': 'Wireframes, architecture, and a clear timeline.',
    'process.build.title': 'Build',
    'process.build.desc':
      'Iterative development with regular updates and transparent progress.',
    'process.launch.title': 'Launch & support',
    'process.launch.desc': 'Deployment, training, and ongoing maintenance.',

    // Portfolio / Work
    'work.title': 'Selected work',
    'work.subtitle':
      'A selection of recent projects across web, ecommerce, marketplaces, and custom business applications.',
    'work.view': 'View project',
    'work.viewLive': 'View live site',
    'work.cta': 'See all work',
    'work.comingSoon': 'Coming soon',
    'work.role': 'Role',
    'work.problem': 'The problem',
    'work.solution': 'The solution',
    'work.tech': 'Technologies',
    'work.back': 'Back to all work',

    // Contact
    'contact.title': 'Tell us about your project.',
    'contact.subtitle':
      'You’ll hear back within two business days, from Luis directly.',
    'contact.email.label': 'Email',
    'contact.book.label': 'Book a call',
    'contact.book.desc': 'Schedule a 30-minute call at a time that works for you.',

    // About
    'about.kicker': 'Meet the founder',
    'about.heading': 'I’m Luis. I started IberiaTech because too many small businesses have been left hanging by developers who disappear or agencies that bill for every email.',
    'about.body':
      'Security-focused software engineer based in the Charleston, SC area, originally from Spain. I studied architectural engineering at IE University and spent six years in commercial construction before switching to software in 2020. I work directly with every client, write the code myself, and think about security from day one of the project.',
    'about.security':
      'GIAC GSEC and GFACT certified, with GCIH in progress through the SANS CyberTalent Academy. 1st place at HackOps 2024, speaker and judge at HarborHack, and SANS Cyber Academy scholarship recipient.',
    'about.photoAlt': 'Luis Lozoya, founder of IberiaTech Solutions',

    // Footer
    'footer.tagline': 'Websites that earn customers.',
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved.',
  },
  es: {
    // Navegación
    'nav.home': 'Inicio',
    'nav.work': 'Proyectos',
    'nav.services': 'Servicios',
    'nav.contact': 'Contacto',

    // Hero
    'hero.title': 'Hacemos webs que te traen clientes.',
    'hero.subtitle':
      'Sitios, tiendas y software a medida para pequeñas empresas. Bilingüe en inglés y español. Trabajas directamente conmigo, no con un equipo rotativo.',
    'hero.cta.work': 'Ver proyectos',
    'hero.cta.contact': 'Contactar',

    // Servicios overview
    'services.title': 'Problemas que resolvemos',
    'services.subtitle':
      'Cinco cosas que le cuestan dinero a las pequeñas empresas. Así las arreglamos.',
    'services.web.title': 'Web y Ecommerce',
    'services.web.desc':
      'Tu web va lenta, parece una plantilla o pierde clientes en el checkout. Lo arreglamos: páginas rápidas, mobile-first y checkout con Stripe que funciona.',
    'services.bilingual.title': 'Sitios Bilingües y Multilingües',
    'services.bilingual.desc':
      'Tu web es solo en inglés y la mitad de tus clientes hablan español. Eso te cuesta ventas. Hacemos webs en inglés, español y alemán que suenan naturales en cada idioma y posicionan en cada uno.',
    'services.apps.title': 'Aplicaciones de Negocio a Medida',
    'services.apps.desc':
      'Llevas el negocio con hojas de cálculo, email y tres herramientas SaaS que no se hablan entre sí. Lo sustituimos por un software hecho a tu forma de trabajar: paneles, portales, marketplaces, herramientas internas.',
    'services.security.title': 'Auditorías y Refuerzo de Seguridad',
    'services.security.desc':
      'Procesas pagos y guardas datos de clientes, pero nadie ha auditado la seguridad de tu aplicación. Así es como ocurren las brechas. Hacemos auditorías OWASP Top 10, reforzamos la autenticación y el acceso a la base de datos, y revisamos el manejo de pagos e integraciones.',
    'services.ai.title': 'Integraciones de IA',
    'services.ai.desc':
      'Si tu equipo pasa medio día respondiendo las mismas preguntas, o pierdes dinero por no-shows, lo podemos automatizar. Construimos chatbots bilingües y flujos de WhatsApp que gestionan reservas, FAQs, captación de leads y seguimientos.',
    'services.cta': 'Ver todos los servicios',

    // Proceso
    'process.title': 'Cómo trabajamos',
    'process.discovery.title': 'Descubrimiento',
    'process.discovery.desc':
      'Una llamada breve para entender tus objetivos, tu audiencia y el alcance del proyecto.',
    'process.design.title': 'Diseño y planificación',
    'process.design.desc':
      'Wireframes, arquitectura y un cronograma claro.',
    'process.build.title': 'Desarrollo',
    'process.build.desc':
      'Desarrollo iterativo con actualizaciones regulares y progreso transparente.',
    'process.launch.title': 'Lanzamiento y soporte',
    'process.launch.desc':
      'Despliegue, formación y mantenimiento continuo.',

    // Portafolio / Proyectos
    'work.title': 'Proyectos seleccionados',
    'work.subtitle':
      'Una selección de proyectos recientes en web, ecommerce, marketplaces y aplicaciones de negocio a medida.',
    'work.view': 'Ver proyecto',
    'work.viewLive': 'Ver sitio en vivo',
    'work.cta': 'Ver todos los proyectos',
    'work.comingSoon': 'Próximamente',
    'work.role': 'Rol',
    'work.problem': 'El problema',
    'work.solution': 'La solución',
    'work.tech': 'Tecnologías',
    'work.back': 'Volver a todos los proyectos',

    // Contacto
    'contact.title': 'Cuéntanos sobre tu proyecto.',
    'contact.subtitle':
      'Te respondemos en un máximo de dos días laborables. Luis te contesta directamente.',
    'contact.email.label': 'Email',
    'contact.book.label': 'Reservar llamada',
    'contact.book.desc':
      'Agenda una llamada de 30 minutos en el horario que mejor te venga.',

    // Sobre nosotros
    'about.kicker': 'Conoce al fundador',
    'about.heading': 'Soy Luis. Fundé IberiaTech porque demasiadas pequeñas empresas se han quedado colgadas por desarrolladores que desaparecen o agencias que cobran por cada email.',
    'about.body':
      'Ingeniero de software con enfoque en seguridad, basado en el área de Charleston, SC, originario de España. Estudié arquitectura técnica en IE University y trabajé seis años en construcción comercial antes de pasarme al software en 2020. Trabajo directamente con cada cliente, escribo el código yo mismo, y pienso en la seguridad desde el primer día del proyecto.',
    'about.security':
      'Certificado GIAC GSEC y GFACT, con GCIH en curso a través de la SANS CyberTalent Academy. Primer puesto en HackOps 2024, ponente y jurado en HarborHack, y becario de la SANS Cyber Academy.',
    'about.photoAlt': 'Luis Lozoya, fundador de IberiaTech Solutions',

    // Footer
    'footer.tagline': 'Webs que te traen clientes.',
    'footer.services': 'Servicios',
    'footer.contact': 'Contacto',
    'footer.rights': 'Todos los derechos reservados.',
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('language') as Language | null
      if (saved === 'en' || saved === 'es') {
        setLanguageState(saved)
      }
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang)
    }
  }

  const t = (key: string): string => {
    const langDict = translations[language] as Record<string, string>
    return langDict[key] ?? key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, mounted }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return ctx
}
