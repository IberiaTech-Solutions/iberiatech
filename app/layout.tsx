import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { LanguageProvider } from '@/components/LanguageProvider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppChat from '@/components/WhatsAppChat'
import AIChatbot from '@/components/AIChatbot'
import HtmlLangUpdater from '@/components/HtmlLangUpdater'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Charleston Web Development | IberiaTech Solutions - Bilingual Websites',
  description: 'Charleston bilingual website design for construction companies, law firms, and small businesses. Professional web development with English and Spanish support.',
  keywords: 'Charleston web development, Charleston bilingual website design, Charleston law firm websites, Charleston construction company web development, bilingual websites, React, Next.js, Supabase, AWS',
  authors: [{ name: 'Luis Lozoya' }],
  creator: 'IberiaTech Solutions',
  publisher: 'IberiaTech Solutions',
  robots: 'index, follow',
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
    url: 'https://iberiatech.com',
    title: 'IberiaTech Solutions - Web Development & Digital Solutions',
    description: 'Empowering businesses with innovative tech solutions for a digital future.',
    siteName: 'IberiaTech Solutions',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IberiaTech Solutions - Web Development & Digital Solutions',
    description: 'Empowering businesses with innovative tech solutions for a digital future.',
    creator: '@iberiatech',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
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
