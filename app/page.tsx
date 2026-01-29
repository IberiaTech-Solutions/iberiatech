'use client'

import { useLanguage } from '@/components/LanguageProvider'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import ProblemsSection from '@/components/ProblemsSection'
import PricingSection from '@/components/PricingSection'
import PortfolioSection from '@/components/PortfolioSection'
import ContactSection from '@/components/ContactSection'
import WhyChooseUsSection from '@/components/WhyChooseUsSection'
import TrustedBySection from '@/components/TrustedBySection'
import TestimonialsSection from '@/components/TestimonialsSection'

export default function HomePage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen" suppressHydrationWarning>
      <HeroSection />
      <TrustedBySection />
      <ServicesSection />
      <ProblemsSection />
      <PricingSection />
      <TestimonialsSection />
      <PortfolioSection />
      <ContactSection />
    </div>
  )
}
