import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import CryptoTicker from '@/components/CryptoTicker';
import FeaturesSection from '@/components/FeaturesSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import SupportedCryptoSection from '@/components/SupportedCryptoSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import WhatsAppWidget from '@/components/WhatsAppWidget';

const Index = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Set dark mode by default
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <CryptoTicker />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <WhyChooseUsSection />
      <SupportedCryptoSection />
      <CTASection />
      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default Index;
