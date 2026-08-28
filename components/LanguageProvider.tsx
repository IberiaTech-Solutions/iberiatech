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
      'Websites, online stores, and the occasional piece of software nobody else will sell you off the shelf. Built bilingually in English and Spanish. You work directly with me. Not an account manager, not a rotating team.',
    'hero.cta.work': 'See our work',
    'hero.cta.contact': 'Get in touch',

    // Services overview
    'services.title': 'Problems we solve',
    'services.subtitle':
      'Five things that cost small businesses money. Here’s how we fix them.',
    'services.web.title': 'Web & Ecommerce',
    'services.web.desc':
      'Your site is slow, looks like a template, or loses customers at checkout. Usually all three at once. We rebuild it so pages load fast on a phone and the checkout doesn’t leak buyers.',
    'services.bilingual.title': 'Bilingual & Multilingual Sites',
    'services.bilingual.desc':
      'Half your customers speak Spanish and your site is English-only. That is money walking out the door. We build sites in English, Spanish, and German where each language reads like it was written there, because it was.',
    'services.apps.title': 'Custom Business Applications',
    'services.apps.desc':
      'You run the business on spreadsheets, email, and three SaaS tools that don’t talk to each other. We replace the stack with one piece of software built around how you actually work. A dashboard, a portal, a marketplace, or an internal tool nobody outside the office will ever see.',
    'services.security.title': 'Security Audits & Hardening',
    'services.security.desc':
      'You take payments and store customer data, but nobody has ever looked at the app from an attacker’s point of view. That’s how breaches happen. We run OWASP Top 10 audits, harden authentication and database access, and review how the app handles payments and third-party APIs.',
    'services.ai.title': 'AI Integrations',
    'services.ai.desc':
      'If your staff spends half the day answering the same five questions, or you’re bleeding money to no-shows, automate it. We build bilingual chatbots and WhatsApp flows that take bookings, answer FAQs, capture leads, and chase follow-ups, in whatever language the customer texted in.',
    'services.web.evidence': 'Recently shipped → Coastal Millwork & Supply',
    'services.bilingual.evidence':
      'Recently shipped → Tinta Gallery, NEVA Estudio',
    'services.apps.evidence': 'Live → Axis, a platform for exit-planning advisors',
    'services.security.evidence':
      'GIAC GCIH · GSEC · GFACT certified · 1st place, HackOps 2024 · author of llm-audit',
    'services.ai.evidence':
      'In build → bilingual booking bot + WhatsApp flow',
    'services.cta': 'See all services',

    // Process
    'process.title': 'How we work',
    'process.discovery.title': 'Discovery',
    'process.discovery.desc':
      'A call. What the business does, who buys from it, and what this thing has to accomplish.',
    'process.design.title': 'Design & planning',
    'process.design.desc':
      'Wireframes and architecture, plus a scope and a date. You approve both before I write code.',
    'process.build.title': 'Build',
    'process.build.desc':
      'I build it on a real URL you can open any time. Feedback goes in as we go, not in one pile at the end.',
    'process.launch.title': 'Launch & support',
    'process.launch.desc':
      'Deploy, hand over the keys, walk your team through running it. I stay on for maintenance if you want me on.',

    // Portfolio / Work
    'work.title': 'Selected work',
    'work.subtitle':
      'Recent projects. Some shipped, some still in the oven. Websites, online stores, marketplaces, and the kind of custom software businesses build when the SaaS options stop fitting.',
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
      'You’ll hear back within two business days, from Luis Javier directly.',
    'contact.email.label': 'Email',
    'contact.book.label': 'Book a call',
    'contact.book.desc': 'Schedule a 30-minute call at a time that works for you.',

    // About
    'about.kicker': 'Meet the founder',
    'about.heading': 'I’m Luis Javier. I started IberiaTech because too many small businesses have been left hanging by developers who disappear or agencies that bill for every email.',
    'about.body':
      'Security-focused software engineer based in the Charleston, SC area, originally from Spain. I studied architectural engineering at IE University and spent six years in commercial construction before switching to software in 2020. I work directly with every client, write the code myself, and think about security from day one of the project.',
    'about.security':
      'GIAC GCIH, GSEC and GFACT certified, the GCIH earned through the SANS CyberTalent Academy. 1st place at HackOps 2024, speaker and judge at HarborHack, and SANS Cyber Academy scholarship recipient.',
    'about.photoAlt': 'Luis Javier Lozoya, founder of IberiaTech Solutions',

    // Footer
    'footer.tagline': 'Charleston, SC. Bilingual by design.',
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
      'Webs, tiendas online y, de vez en cuando, algo de software que no vas a encontrar en ninguna plantilla. Construido bilingüe en inglés y español. Hablas directamente conmigo. Ni gestor de cuentas, ni un equipo que va rotando.',
    'hero.cta.work': 'Ver proyectos',
    'hero.cta.contact': 'Contactar',

    // Servicios overview
    'services.title': 'Problemas que resolvemos',
    'services.subtitle':
      'Cinco cosas que le cuestan dinero a las pequeñas empresas. Así las arreglamos.',
    'services.web.title': 'Web y Ecommerce',
    'services.web.desc':
      'Tu web va lenta, parece una plantilla o pierde clientes en el checkout. Normalmente las tres cosas a la vez. La reconstruimos para que cargue rápido en móvil y que el checkout no pierda compradores por el camino.',
    'services.bilingual.title': 'Sitios Bilingües y Multilingües',
    'services.bilingual.desc':
      'La mitad de tus clientes hablan español y tu web es solo en inglés. Eso son ventas que se escapan. Hacemos webs en inglés, español y alemán donde cada idioma suena como si se hubiera escrito ahí, porque se ha escrito ahí.',
    'services.apps.title': 'Aplicaciones de Negocio a Medida',
    'services.apps.desc':
      'Llevas el negocio con hojas de cálculo, email y tres herramientas SaaS que no se hablan entre sí. Lo sustituimos por un software hecho a tu forma de trabajar. Un panel, un portal, un marketplace o una herramienta interna que no va a ver nadie de fuera.',
    'services.security.title': 'Auditorías y Refuerzo de Seguridad',
    'services.security.desc':
      'Procesas pagos y guardas datos de clientes, pero nadie ha mirado la aplicación desde el punto de vista del atacante. Así es como ocurren las brechas. Hacemos auditorías OWASP Top 10, reforzamos la autenticación y el acceso a la base de datos, y revisamos cómo la app maneja pagos e integraciones de terceros.',
    'services.ai.title': 'Integraciones de IA',
    'services.ai.desc':
      'Si tu equipo pasa medio día respondiendo las mismas cinco preguntas, o estás perdiendo dinero por no-shows, se automatiza. Construimos chatbots bilingües y flujos de WhatsApp que cogen reservas, responden FAQs, captan leads y persiguen seguimientos, en el idioma en el que el cliente te escribió.',
    'services.web.evidence': 'Recién entregado → Coastal Millwork & Supply',
    'services.bilingual.evidence':
      'Recién entregado → Tinta Gallery, NEVA Estudio',
    'services.apps.evidence': 'En producción → Axis, plataforma para asesores de salida',
    'services.security.evidence':
      'GIAC GCIH · GSEC · GFACT · 1º puesto HackOps 2024 · autor de llm-audit',
    'services.ai.evidence':
      'En desarrollo → bot de reservas bilingüe + flujo WhatsApp',
    'services.cta': 'Ver todos los servicios',

    // Proceso
    'process.title': 'Cómo trabajamos',
    'process.discovery.title': 'Descubrimiento',
    'process.discovery.desc':
      'Una llamada. Qué hace el negocio, quién le compra y qué tiene que conseguir esto.',
    'process.design.title': 'Diseño y planificación',
    'process.design.desc':
      'Wireframes y arquitectura, más un alcance y una fecha. Apruebas los dos antes de que escriba código.',
    'process.build.title': 'Desarrollo',
    'process.build.desc':
      'Lo construyo en una URL real que puedes abrir cuando quieras. El feedback entra sobre la marcha, no todo junto al final.',
    'process.launch.title': 'Lanzamiento y soporte',
    'process.launch.desc':
      'Despliegue, te entrego las llaves y le enseño a tu equipo a manejarlo. Sigo con el mantenimiento si me quieres ahí.',

    // Portafolio / Proyectos
    'work.title': 'Proyectos seleccionados',
    'work.subtitle':
      'Proyectos recientes. Algunos ya entregados, otros todavía en el horno. Webs, tiendas online, marketplaces y el tipo de software a medida que se construye cuando las opciones SaaS dejan de encajar.',
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
      'Te respondemos en un máximo de dos días laborables. Luis Javier te contesta directamente.',
    'contact.email.label': 'Email',
    'contact.book.label': 'Reservar llamada',
    'contact.book.desc':
      'Agenda una llamada de 30 minutos en el horario que mejor te venga.',

    // Sobre nosotros
    'about.kicker': 'Conoce al fundador',
    'about.heading': 'Soy Luis Javier. Fundé IberiaTech porque demasiadas pequeñas empresas se han quedado colgadas por desarrolladores que desaparecen o agencias que cobran por cada email.',
    'about.body':
      'Ingeniero de software con enfoque en seguridad, basado en el área de Charleston, SC, originario de España. Estudié arquitectura técnica en IE University y trabajé seis años en construcción comercial antes de pasarme al software en 2020. Trabajo directamente con cada cliente, escribo el código yo mismo, y pienso en la seguridad desde el primer día del proyecto.',
    'about.security':
      'Certificado GIAC GCIH, GSEC y GFACT, el GCIH obtenido a través de la SANS CyberTalent Academy. Primer puesto en HackOps 2024, ponente y jurado en HarborHack, y becario de la SANS Cyber Academy.',
    'about.photoAlt': 'Luis Javier Lozoya, fundador de IberiaTech Solutions',

    // Footer
    'footer.tagline': 'Charleston, SC. Bilingüe por diseño.',
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
