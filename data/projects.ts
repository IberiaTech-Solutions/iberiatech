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
  wide?: boolean
}

export const PROJECTS: Project[] = [
  {
    slug: 'little-bolleria',
    title: 'Little Bolleria Bäckerei',
    category: { en: 'Ecommerce', es: 'Ecommerce' },
    summary: {
      en: 'A trilingual ecommerce site (EN/ES/DE) for a cottage bakery in Charleston, SC. Currently in development.',
      es: 'Una web de ecommerce trilingüe (EN/ES/DE) para una panadería casera en Charleston, SC. Actualmente en desarrollo.',
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
    technologies: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS', 'Stripe', 'Supabase'],
    image: '/images/portfolio/little-bolleria.jpg',
    featured: true,
    comingSoon: true,
    wide: true,
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
    image: '/images/portfolio/axis.png',
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
    image: '/images/portfolio/cuidamascotas.png',
    featured: true,
    comingSoon: true,
  },
  {
    slug: 'tinta-gallery',
    title: 'Tinta Gallery',
    category: { en: 'Online Gallery', es: 'Galería Online' },
    summary: {
      en: 'A bilingual online gallery for two Spanish watercolorists, bringing their work to US buyers.',
      es: 'Una galería online bilingüe para dos acuarelistas españoles, llevando su obra al mercado estadounidense.',
    },
    problem: {
      en: 'Two painters from Gijón with strong followings at home and no presence in the US. The site had to speak to American buyers without flattening the Spanish voice.',
      es: 'Dos pintores de Gijón con buen recorrido en España y nada de presencia en EE. UU. La web tenía que hablar al comprador americano sin limar lo español.',
    },
    solution: {
      en: 'Custom i18n with /en and /es routes and locale detection in middleware (cookie, IP geo, Accept-Language). Dimensions shown in inches for English and centimeters for Spanish. Inquiry form routed through Gmail SMTP. Paintings shown one at a time.',
      es: 'i18n a medida con rutas /en y /es y detección de idioma en middleware (cookie, IP geo, Accept-Language). Dimensiones en pulgadas en inglés y en centímetros en español. Formulario de contacto enrutado por Gmail SMTP. Cuadros mostrados de uno en uno.',
    },
    role: {
      en: 'End-to-end design and development.',
      es: 'Diseño y desarrollo de principio a fin.',
    },
    technologies: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    link: 'https://tinta.gallery',
    image: '/images/portfolio/tinta.png',
    featured: true,
    wide: true,
  },
  {
    slug: 'neva-estudio',
    title: 'NEVA Estudio',
    category: { en: 'Studio Website', es: 'Web de Estudio' },
    summary: {
      en: 'A bilingual portfolio for an architecture studio in Asturias. 14 projects, full-screen galleries, and a site that loads in one frame over 3G.',
      es: 'Portafolio bilingüe para un estudio de arquitectura en Asturias. 14 proyectos, galerías a pantalla completa y una web que carga en un frame con 3G.',
    },
    problem: {
      en: 'A respected studio with more than a decade of work behind it. The site had to be as considered as the buildings — and load fast on the phones architects actually use.',
      es: 'Un estudio con más de una década de proyectos a la espalda. La web tenía que estar tan cuidada como los edificios — y cargar rápido en los móviles donde los arquitectos realmente la ven.',
    },
    solution: {
      en: 'A custom build with full English/Spanish i18n and a 14-project gallery (keyboard navigation, image carousels). WCAG AA throughout, structured data for SEO, and the Spanish legal pages required by law — privacy, cookies, accessibility, legal notice.',
      es: 'Un build a medida con i18n completo inglés/español y una galería de 14 proyectos (teclado, carruseles). WCAG AA en toda la web, datos estructurados para SEO y las páginas legales obligatorias — privacidad, cookies, accesibilidad, aviso legal.',
    },
    role: {
      en: 'End-to-end design and development.',
      es: 'Diseño y desarrollo de principio a fin.',
    },
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'next-intl'],
    link: 'https://neva-estudio.vercel.app/es',
    image: '/images/portfolio/neva2.png',
    wide: true,
  },
  {
    slug: 'coastal-millwork',
    title: 'Coastal Millwork & Supply',
    category: { en: 'Contractor Website', es: 'Web de Contratista' },
    summary: {
      en: 'A website for an award-winning commercial millwork contractor in South Carolina. The work speaks for itself — the site had to get out of its way.',
      es: 'Web para un contratista premiado de carpintería comercial en Carolina del Sur. El trabajo habla solo — la web solo tenía que dejarlo hablar.',
    },
    problem: {
      en: 'AWI-QCP certified, 800+ projects shipped. Their old site didn\'t show any of that. Architects were landing on it and bouncing.',
      es: 'Certificados AWI-QCP, más de 800 proyectos entregados. Su web antigua no enseñaba nada de eso. Los arquitectos aterrizaban y se iban.',
    },
    solution: {
      en: 'A new site with a proper project showcase, team bios, services catalog, and an interactive service-area map. Built around their photography — which turned out to be the whole pitch.',
      es: 'Un sitio nuevo con muestra de proyectos como se debe, bios del equipo, catálogo de servicios y un mapa interactivo del área de cobertura. Construido alrededor de su fotografía — que al final era el argumento entero.',
    },
    role: {
      en: 'End-to-end design and development.',
      es: 'Diseño y desarrollo de principio a fin.',
    },
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'react-simple-maps'],
    link: 'https://coastal-millwork.vercel.app/',
    image: '/images/portfolio/coastal-millwork.png',
  },
  {
    slug: 'shop-essentials-hub',
    title: 'ShopEssentialsHub',
    category: { en: 'Curation Platform', es: 'Plataforma Editorial' },
    summary: {
      en: 'An affiliate platform for products vetted by actual YouTube and TikTok reviewers. One place, no scrolling through hours of video to find what\'s good.',
      es: 'Una plataforma de afiliados con productos revisados por YouTubers y TikTokers reales. Un solo sitio, sin tener que tragarse horas de vídeo para encontrar lo bueno.',
    },
    problem: {
      en: 'Product reviews live scattered across hundreds of creators. No buyer watches 40 videos before picking a kettle.',
      es: 'Las reseñas viven dispersas entre cientos de creadores. Nadie se ve 40 vídeos antes de comprar una tetera.',
    },
    solution: {
      en: 'A content site built around the products, not around the layout. Category browsing, image-first cards, and affiliate tracking that doesn\'t get in the reader\'s face.',
      es: 'Un sitio construido alrededor del producto, no del layout. Navegación por categoría, tarjetas con la imagen primero, y tracking de afiliación que no da la lata al lector.',
    },
    role: {
      en: 'Concept, design, and full-stack development.',
      es: 'Concepto, diseño y desarrollo full-stack.',
    },
    technologies: ['Next.js 14', 'TypeScript', 'Tailwind CSS'],
    link: 'https://www.shopessentialshub.com/',
    image: '/images/portfolio/shop-essentials-hub.png',
  },
]

export const FEATURED_PROJECTS = PROJECTS.filter((p) => p.featured)

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug)
}
