export interface Project {
  slug: string
  title: string
  category: {
    en: string
    es: string
  }
  summary: {
    en: string
    es: string
  }
  problem: {
    en: string
    es: string
  }
  solution: {
    en: string
    es: string
  }
  role: {
    en: string
    es: string
  }
  technologies: string[]
  link?: string
  image: string
  featured?: boolean
  comingSoon?: boolean
}

export const PROJECTS: Project[] = [
  {
    slug: 'rolls-business',
    title: 'Artisan Rolls Co.',
    category: { en: 'Ecommerce', es: 'Ecommerce' },
    summary: {
      en: 'A multilingual ecommerce experience for an artisan food brand. Currently in development.',
      es: 'Una experiencia de ecommerce multilingüe para una marca artesana. Actualmente en desarrollo.',
    },
    problem: {
      en: 'Details coming soon.',
      es: 'Detalles próximamente.',
    },
    solution: {
      en: 'Details coming soon.',
      es: 'Detalles próximamente.',
    },
    role: {
      en: 'End-to-end design and development.',
      es: 'Diseño y desarrollo de principio a fin.',
    },
    technologies: ['Next.js', 'TypeScript'],
    image: '/images/portfolio/little-bolleria.jpg',
    featured: true,
    comingSoon: true,
  },
  {
    slug: 'axis',
    title: 'Axis',
    category: { en: 'Business Application', es: 'Aplicación de Negocio' },
    summary: {
      en: 'A custom platform for business advisors and their clients. Currently in development.',
      es: 'Una plataforma a medida para asesores de negocios y sus clientes. Actualmente en desarrollo.',
    },
    problem: {
      en: 'Details coming soon.',
      es: 'Detalles próximamente.',
    },
    solution: {
      en: 'Details coming soon.',
      es: 'Detalles próximamente.',
    },
    role: {
      en: 'End-to-end architecture and full-stack development.',
      es: 'Arquitectura de principio a fin y desarrollo full-stack.',
    },
    technologies: ['Next.js', 'TypeScript'],
    image: '/images/portfolio/axis.jpg',
    featured: true,
    comingSoon: true,
  },
  {
    slug: 'cuidamascotas',
    title: 'CuidaMascotas',
    category: { en: 'Marketplace', es: 'Marketplace' },
    summary: {
      en: 'A bilingual marketplace built for the Spanish market. Currently in development.',
      es: 'Un marketplace bilingüe construido para el mercado español. Actualmente en desarrollo.',
    },
    problem: {
      en: 'Details coming soon.',
      es: 'Detalles próximamente.',
    },
    solution: {
      en: 'Details coming soon.',
      es: 'Detalles próximamente.',
    },
    role: {
      en: 'Sole architect, designer, and developer.',
      es: 'Arquitecto, diseñador y desarrollador único.',
    },
    technologies: ['Next.js', 'TypeScript'],
    image: '/images/portfolio/cuidamascotas.jpg',
    featured: true,
    comingSoon: true,
  },
  {
    slug: 'neva-estudio',
    title: 'NEVA Estudio',
    category: { en: 'Studio Website', es: 'Web de Estudio' },
    summary: {
      en: 'A bilingual portfolio website for an architecture studio in Asturias, Spain, showcasing 14 projects with full-screen galleries and accessibility-first design.',
      es: 'Un sitio web bilingüe de portafolio para un estudio de arquitectura en Asturias, con 14 proyectos, galerías a pantalla completa y diseño accesible.',
    },
    problem: {
      en: 'A respected architecture studio with over a decade of work needed a modern web presence that matched the quality of their projects: visual, fast, multilingual, and built to last.',
      es: 'Un estudio de arquitectura con más de una década de trabajo necesitaba una presencia web moderna que estuviera a la altura de la calidad de sus proyectos: visual, rápida, multilingüe y duradera.',
    },
    solution: {
      en: 'A custom Next.js site with full English/Spanish internationalization, a 14-project gallery with keyboard navigation and image carousels, WCAG AA accessibility, structured data for SEO, and required Spanish legal pages (privacy, cookies, accessibility, legal notice).',
      es: 'Un sitio Next.js a medida con internacionalización completa inglés/español, una galería de 14 proyectos con navegación por teclado y carruseles de imágenes, accesibilidad WCAG AA, datos estructurados para SEO y las páginas legales obligatorias en España (privacidad, cookies, accesibilidad, aviso legal).',
    },
    role: {
      en: 'End-to-end design and development.',
      es: 'Diseño y desarrollo de principio a fin.',
    },
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'next-intl'],
    link: 'https://neva-estudio.vercel.app/es',
    image: '/neva.jpg',
  },
  {
    slug: 'coastal-millwork',
    title: 'Coastal Millwork & Supply',
    category: { en: 'Contractor Website', es: 'Web de Contratista' },
    summary: {
      en: 'A professional website for an award-winning commercial millwork contractor in South Carolina. Projects, services, team, and credentials in one polished site.',
      es: 'Un sitio web profesional para un contratista premiado de carpintería comercial en Carolina del Sur. Proyectos, servicios, equipo y credenciales en un solo sitio pulido.',
    },
    problem: {
      en: 'An AWI-QCP certified contractor with 800+ completed projects needed a credible, modern website that conveyed the scale and quality of their work to commercial clients and architects.',
      es: 'Un contratista certificado AWI-QCP con más de 800 proyectos completados necesitaba un sitio web creíble y moderno que comunicara la escala y la calidad de su trabajo a clientes comerciales y arquitectos.',
    },
    solution: {
      en: 'A multi-page Next.js website with services catalog, project showcase, team profiles, FAQs, an interactive service-area map, and a clean contact flow.',
      es: 'Un sitio web multi-página en Next.js con catálogo de servicios, muestra de proyectos, perfiles del equipo, preguntas frecuentes, un mapa interactivo de áreas de servicio y un flujo de contacto claro.',
    },
    role: {
      en: 'End-to-end design and development.',
      es: 'Diseño y desarrollo de principio a fin.',
    },
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'react-simple-maps'],
    link: 'https://coastal-millwork.vercel.app/',
    image: '/images/portfolio/coastal-millwork.jpg',
  },
  {
    slug: 'shop-essentials-hub',
    title: 'ShopEssentialsHub',
    category: { en: 'Curation Platform', es: 'Plataforma Editorial' },
    summary: {
      en: 'A curated affiliate platform showcasing essential products reviewed across YouTube and TikTok, built for fast browsing and clean product discovery.',
      es: 'Una plataforma de afiliados curada que muestra productos esenciales reseñados en YouTube y TikTok, construida para una navegación rápida y un descubrimiento limpio de productos.',
    },
    problem: {
      en: 'Product reviews are scattered across hundreds of videos and creators. Shoppers needed a single curated destination to find genuinely vetted essentials without wading through endless content.',
      es: 'Las reseñas de productos están dispersas en cientos de vídeos y creadores. Los compradores necesitaban un único destino curado para encontrar productos esenciales realmente verificados sin tener que ver contenido sin fin.',
    },
    solution: {
      en: 'A Next.js content platform with category browsing, fast image-driven cards, affiliate-link tracking, and a clean editorial layout that prioritizes the products themselves.',
      es: 'Una plataforma de contenido en Next.js con navegación por categorías, tarjetas rápidas con imágenes, seguimiento de enlaces de afiliación y un diseño editorial limpio que prioriza los productos.',
    },
    role: {
      en: 'Concept, design, and full-stack development.',
      es: 'Concepto, diseño y desarrollo full-stack.',
    },
    technologies: ['Next.js 14', 'TypeScript', 'Tailwind CSS'],
    link: 'https://www.shopessentialshub.com/',
    image: '/images/portfolio/www.shopessentialshub.com_.jpg',
  },
]

export const FEATURED_PROJECTS = PROJECTS.filter((p) => p.featured)

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug)
}
