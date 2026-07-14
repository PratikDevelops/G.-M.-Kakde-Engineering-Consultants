import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import AboutPreview from './components/AboutPreview';
import ServicesPreview from './components/ServicesPreview';
import WhyChooseUs from './components/WhyChooseUs';
import ProjectsPreview from './components/ProjectsPreview';
import ClientsSection from './components/ClientsSection';
import CTABanner from './components/CTABanner';
import LogoMarquee from './components/LogoMarquee';
import Testimonials from './components/testimonials';
import FAQSection from './components/FAQSection';
import IndustriesSection from './components/IndustriesSection';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        {/* <StatsSection /> */}
        <AboutPreview />
        <ServicesPreview />
        <WhyChooseUs />
        <ProjectsPreview />
        {/* <ClientsSection /> */}
        <IndustriesSection/>

        <LogoMarquee/>
        <Testimonials/>
        <FAQSection/>
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}