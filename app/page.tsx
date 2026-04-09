'use client'

import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import ProblemsSection from '@/components/ProblemsSection'
import PricingSection from '@/components/PricingSection'
import FaqSection from '@/components/FaqSection'
import PortfolioSection from '@/components/PortfolioSection'
import ContactSection from '@/components/ContactSection'

export default function HomePage() {
  return (
    <div className="min-h-screen" suppressHydrationWarning>
      <HeroSection />
      <ServicesSection />
      <ProblemsSection />
      <PricingSection />
      <FaqSection />
      <PortfolioSection />
      <ContactSection />
    </div>
  )
}
