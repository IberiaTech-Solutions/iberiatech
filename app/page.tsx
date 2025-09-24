'use client'

import { useLanguage } from '@/components/LanguageProvider'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import PricingSection from '@/components/PricingSection'
import PortfolioSection from '@/components/PortfolioSection'
import ContactSection from '@/components/ContactSection'
import AboutSection from '@/components/AboutSection'
import WhyChooseUsSection from '@/components/WhyChooseUsSection'
import TrustedBySection from '@/components/TrustedBySection'

export default function HomePage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen" suppressHydrationWarning>
      <HeroSection />
      <TrustedBySection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <PricingSection />
      <PortfolioSection />
      <ContactSection />
    </div>
  )
}
