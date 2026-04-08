export default function StructuredData() {
  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'IberiaTech Solutions',
    description:
      'Charleston bilingual web development for small and medium businesses. Professional websites with English and Spanish support for construction, law firms, and local businesses.',
    url: 'https://iberiatech.com',
    image: 'https://iberiatech.com/opengraph-image',
    logo: 'https://iberiatech.com/images/logos/IberiaTechLogo5.png',
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
    ],
    serviceType: [
      'Web Development',
      'Bilingual Website Design',
      'SEO Optimization',
      'AI Integration',
    ],
    knowsLanguage: ['English', 'Spanish'],
    priceRange: '$$',
    sameAs: [
      'https://github.com/Javierlozo',
      'https://www.linkedin.com/in/luisjlozoya',
    ],
  }

  const websiteData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'IberiaTech Solutions',
    url: 'https://iberiatech.com',
    inLanguage: ['en', 'es'],
  }

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(organizationData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteData)}
      </script>
    </>
  )
}
