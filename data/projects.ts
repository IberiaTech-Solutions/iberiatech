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
    category: { en: 'SaaS Platform', es: 'Plataforma SaaS' },
    summary: {
      en: 'A subscription platform for exit-planning advisors and their business-owner clients. Built end to end under contract for the platform owner, and live in production.',
      es: 'Una plataforma de suscripci\u00f3n para asesores de planificaci\u00f3n de salida y sus clientes propietarios de negocios. Construida de principio a fin bajo contrato para el propietario de la plataforma, y en producci\u00f3n.',
    },
    problem: {
      en: 'Exit planning conversations tend to start late, once a sale is already forcing the issue. The advisor needs a credible way to open the discussion early, and the owner needs a starting point that makes the stakes concrete.',
      es: 'Las conversaciones sobre la salida del negocio suelen empezar tarde, cuando una venta ya obliga a afrontarlas. El asesor necesita una forma cre\u00edble de abrir la conversaci\u00f3n pronto, y el propietario necesita un punto de partida que haga tangible lo que est\u00e1 en juego.',
    },
    solution: {
      en: 'An advisor shares a personalized link, the business owner completes a readiness assessment, and the advisor reviews the results and leads the next conversation. Around that flow: subscription billing and access control, an advisor dashboard and client roster, an admin console, transactional email on a verified domain, and generated PDF reports. Error tracking, rate limiting, and row-level security throughout.',
      es: 'El asesor comparte un enlace personalizado, el propietario completa una evaluaci\u00f3n de preparaci\u00f3n, y el asesor revisa los resultados y dirige la siguiente conversaci\u00f3n. Alrededor de ese flujo: facturaci\u00f3n por suscripci\u00f3n y control de acceso, panel del asesor y cartera de clientes, consola de administraci\u00f3n, email transaccional sobre dominio verificado e informes PDF generados. Seguimiento de errores, l\u00edmites de tasa y seguridad a nivel de fila en todo el sistema.',
    },
    role: {
      en: 'Sole developer. Architecture, full-stack build, production deployment, and ongoing maintenance, under contract to the platform owner. The product concept, branding, and business direction are theirs.',
      es: '\u00danico desarrollador. Arquitectura, desarrollo full-stack, despliegue en producci\u00f3n y mantenimiento continuo, bajo contrato con el propietario de la plataforma. El concepto de producto, la marca y la direcci\u00f3n de negocio son suyos.',
    },
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    link: 'https://axis.southernexits.com',
    image: '/images/portfolio/axis.png',
    featured: true,
    wide: true,
  },
  {
    slug: 'llm-audit',
    title: 'llm-audit',
    category: { en: 'Security Tooling', es: 'Herramienta de Seguridad' },
    summary: {
      en: 'An open-source static analysis tool for LLM application code. Twelve rules mapped to the OWASP LLM Top 10, run at commit time. Published on npm.',
      es: 'Una herramienta open source de an\u00e1lisis est\u00e1tico para c\u00f3digo de aplicaciones LLM. Doce reglas mapeadas al OWASP LLM Top 10, ejecutadas en cada commit. Publicada en npm.',
    },
    problem: {
      en: 'Wiring up an LLM introduces a specific class of security bug \u2014 hardcoded provider keys, model output parsed without a schema, untrusted input reaching a tool call. AI assistants write most of them, and no linter was looking.',
      es: 'Integrar un LLM introduce una clase concreta de fallo de seguridad \u2014 claves de proveedor incrustadas en el c\u00f3digo, salida del modelo parseada sin esquema, entrada no confiable que llega a una llamada de herramienta. Los asistentes de IA escriben la mayor\u00eda, y ning\u00fan linter los estaba mirando.',
    },
    solution: {
      en: 'A Semgrep rule pack and CLI that catches them before the commit lands. Every finding carries its OWASP mapping, the risk, and the fix. Output as human-readable text, JSON, SARIF 2.1.0, or a standalone HTML report you can hand to someone else. Each rule ships with a vulnerable and a safe fixture, all green in CI.',
      es: 'Un paquete de reglas Semgrep y una CLI que los detectan antes de que el commit entre. Cada hallazgo lleva su mapeo OWASP, el riesgo y la soluci\u00f3n. Salida en texto legible, JSON, SARIF 2.1.0 o un informe HTML independiente que puedes entregar a otra persona. Cada regla incluye un fixture vulnerable y uno seguro, todos en verde en CI.',
    },
    role: {
      en: 'Sole author. Rule design, CLI, test harness, and documentation. MIT licensed.',
      es: 'Autor \u00fanico. Dise\u00f1o de reglas, CLI, arn\u00e9s de tests y documentaci\u00f3n. Licencia MIT.',
    },
    technologies: ['Semgrep', 'Node.js', 'TypeScript', 'SARIF'],
    link: 'https://github.com/Javierlozo/llm-audit',
    image: '/images/portfolio/llm-audit.png',
    featured: true,
    wide: true,
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
    technologies: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS'],
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
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
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
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
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
