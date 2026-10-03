export default function StructuredData() {
  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'IberiaTech Solutions',
    // The trading name stays in `name`, which is what a person reads in a
    // search result. `legalName` is the registered one, filed with the South
    // Carolina Secretary of State on 24 September 2025, and it is the field
    // verification tools and directories look at. Keeping both means the
    // listing does not have to choose between reading naturally and matching
    // the paperwork.
    legalName: 'IberiaTech Solutions LLC',
    description:
      'IberiaTech Solutions reviews the security of apps built with AI. Each review has a fixed scope and a fixed price and takes one week: an automated scan with llm-audit, a human code review, written findings with fix prompts, and a walkthrough call. The firm also builds websites, online stores, bilingual sites, and custom business applications in English and Spanish.',
    url: 'https://iberiatechsolutions.com',
    image: 'https://iberiatechsolutions.com/opengraph-image',
    logo: 'https://iberiatechsolutions.com/images/logos/light.png',
    founder: {
      '@type': 'Person',
      name: 'Luis Javier Lozoya',
      url: 'https://www.luislozoya.com',
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Charleston',
        containedInPlace: {
          '@type': 'State',
          name: 'South Carolina',
        },
      },
      {
        '@type': 'Country',
        name: 'United States',
      },
      {
        '@type': 'Country',
        name: 'Spain',
      },
    ],
    serviceType: [
      'AI App Security Reviews',
      'Application Security Audits',
      'AI Integrations',
      'Web Development',
      'Ecommerce Development',
      'Bilingual Website Design',
      'Custom Business Applications',
    ],
    keywords: [
      'AI app security review',
      'security review for apps built with AI',
      'application security',
      'OWASP LLM Top 10',
      'llm-audit',
      'web development',
      'ecommerce development',
      'bilingual websites',
      'custom business applications',
      'Charleston SC',
    ].join(', '),
    knowsLanguage: ['English', 'Spanish', 'German'],
    sameAs: ['https://www.linkedin.com/company/iberiatechsolutions/'],
  }

  const websiteData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'IberiaTech Solutions',
    url: 'https://iberiatechsolutions.com',
    inLanguage: ['en', 'es'],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
    </>
  )
}
