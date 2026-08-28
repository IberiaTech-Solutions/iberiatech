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
      'IberiaTech Solutions builds modern websites, ecommerce, bilingual experiences, and custom business applications. Next.js, React, and modern cloud infrastructure.',
    url: 'https://iberiatechsolutions.com',
    image: 'https://iberiatechsolutions.com/opengraph-image',
    logo: 'https://iberiatechsolutions.com/images/logos/light.png',
    telephone: '+18643657897',
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
      'Web Development',
      'Ecommerce Development',
      'Bilingual Website Design',
      'Custom Business Applications',
      'Application Security Audits',
    ],
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
