import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { LanguageProvider } from '@/components/LanguageProvider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppChat from '@/components/WhatsAppChat'
import AIChatbot from '@/components/AIChatbot'
import HtmlLangUpdater from '@/components/HtmlLangUpdater'
import StructuredData from '@/components/StructuredData'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://iberiatechsolutions.com'),
  title: {
    default: 'IberiaTech Solutions — Modern web & custom applications',
    template: '%s | IberiaTech Solutions',
  },
  description:
    'IberiaTech Solutions builds modern websites, ecommerce, bilingual experiences, and custom business applications. Next.js, React, and modern cloud infrastructure. Based in Charleston, SC — working with clients across the US and Europe.',
  keywords: [
    'web development',
    'Next.js development',
    'React development',
    'custom web applications',
    'bilingual websites',
    'multilingual websites',
    'ecommerce development',
    'SaaS development',
    'application security',
    'OWASP audits',
    'Supabase',
    'Stripe',
    'Charleston SC',
  ],
  authors: [{ name: 'Luis Lozoya' }],
  creator: 'IberiaTech Solutions',
  publisher: 'IberiaTech Solutions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/images/logos/IberiaTechLogo5.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/logos/IberiaTechLogo5.png', sizes: '64x64', type: 'image/png' },
      { url: '/images/logos/IberiaTechLogo5.png', sizes: '128x128', type: 'image/png' },
    ],
    shortcut: '/images/logos/IberiaTechLogo5.png',
    apple: [
      { url: '/images/logos/IberiaTechLogo5.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://iberiatechsolutions.com',
    title: 'IberiaTech Solutions — Modern web & custom applications',
    description:
      'We build websites, ecommerce, bilingual experiences, and custom business software. Next.js, React, and modern cloud infrastructure.',
    siteName: 'IberiaTech Solutions',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IberiaTech Solutions — Modern web & custom applications',
    description:
      'We build websites, ecommerce, bilingual experiences, and custom business software. Next.js, React, and modern cloud infrastructure.',
    creator: '@iberiatech',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '1SYO_u8pe78j-Ye3Sp5M-tRV3lPRimKvrJaTdugusoM',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={plusJakarta.className} suppressHydrationWarning>
        <StructuredData />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <LanguageProvider>
            <HtmlLangUpdater />
            <div className="min-h-screen flex flex-col" suppressHydrationWarning>
              <Header />
              <main className="flex-1">
                {children}
              </main>
              <Footer />
              <WhatsAppChat phoneNumber="18643657897" />
              <AIChatbot />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
