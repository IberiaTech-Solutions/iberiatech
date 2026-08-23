import type { Metadata } from 'next'
import { Bricolage_Grotesque, Sora } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { LanguageProvider } from '@/components/LanguageProvider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingChats from '@/components/FloatingChats'
import HtmlLangUpdater from '@/components/HtmlLangUpdater'
import StructuredData from '@/components/StructuredData'

const display = Bricolage_Grotesque({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-display',
  display: 'swap',
})

const body = Sora({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://iberiatechsolutions.com'),
  title: {
    default: 'IberiaTech Solutions: bilingual web development in Charleston, SC',
    template: '%s | IberiaTech Solutions',
  },
  description:
    'Websites, online stores, and the custom software small businesses end up needing, built in English and Spanish. Charleston, SC, working with clients across the US and Europe. You work directly with the developer who writes the code.',
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
  authors: [{ name: 'Luis Javier Lozoya' }],
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
      { url: '/favicon-light.png', media: '(prefers-color-scheme: light)', type: 'image/png' },
      { url: '/favicon-dark.png', media: '(prefers-color-scheme: dark)', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/favicon-light.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://iberiatechsolutions.com',
    title: 'IberiaTech Solutions: bilingual web development in Charleston, SC',
    description:
      'Websites, online stores, and custom business software, built in English and Spanish. You work directly with the developer who writes the code.',
    siteName: 'IberiaTech Solutions',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IberiaTech Solutions: bilingual web development in Charleston, SC',
    description:
      'Websites, online stores, and custom business software, built in English and Spanish. You work directly with the developer who writes the code.',
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
    <html lang="en" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <noscript>
          <style>{`.reveal { opacity: 1 !important; transform: none !important; }`}</style>
        </noscript>
        <StructuredData />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <LanguageProvider>
            <HtmlLangUpdater />
            <a href="#main" className="skip-link">Skip to content</a>
            <div className="min-h-screen flex flex-col">
              <Header />
              <main id="main" className="flex-1">{children}</main>
              <Footer />
              <FloatingChats />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
