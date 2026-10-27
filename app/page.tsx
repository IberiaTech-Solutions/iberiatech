import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import PortfolioSection from '@/components/PortfolioSection'
import AboutSection from '@/components/AboutSection'
import ReviewBand from '@/components/ReviewBand'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ReviewBand />
      <ServicesSection />
      <PortfolioSection
        featuredOnly
        showCta
        layout="grid"
        className="bg-primary-100 dark:bg-primary-950"
      />
      <AboutSection />
    </div>
  )
}
