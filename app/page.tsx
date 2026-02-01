'use client'

import { useLanguage } from '@/components/LanguageProvider'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import ProblemsSection from '@/components/ProblemsSection'
import PricingSection from '@/components/PricingSection'
import FaqSection from '@/components/FaqSection'
import PortfolioSection from '@/components/PortfolioSection'
import ContactSection from '@/components/ContactSection'
import TrustedBySection from '@/components/TrustedBySection'
import ScreenshotStrip from '@/components/ScreenshotStrip'
import TestimonialsSection from '@/components/TestimonialsSection'
import ResultsStrip from '@/components/ResultsStrip'
import GuaranteesStrip from '@/components/GuaranteesStrip'

export default function HomePage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen" suppressHydrationWarning>
      <HeroSection />
      <TrustedBySection />
      <ScreenshotStrip />
      <ServicesSection />
      <ProblemsSection />
      <PricingSection />
      <GuaranteesStrip />
      <FaqSection />
      <TestimonialsSection />
      <ResultsStrip />
      <PortfolioSection />
      <ContactSection />
    </div>
  )
}
