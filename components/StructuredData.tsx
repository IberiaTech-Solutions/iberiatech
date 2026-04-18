export default function StructuredData() {
  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'IberiaTech Solutions',
    description:
      'IberiaTech Solutions builds modern websites, ecommerce, bilingual experiences, and custom business applications. Next.js, React, and modern cloud infrastructure.',
    url: 'https://iberiatechsolutions.com',
    image: 'https://iberiatechsolutions.com/opengraph-image',
    logo: 'https://iberiatechsolutions.com/images/logos/IberiaTechLogo5.png',
    telephone: '+18643657897',
    founder: {
      '@type': 'Person',
      name: 'Luis Lozoya',
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
