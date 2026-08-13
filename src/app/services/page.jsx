import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicesHero from './components/ServicesHero';
import ServicesIntro from './components/ServicesIntro';
import ServicesGrid from './components/ServicesGrid';
import ServicesCTA from './components/ServicesCTA';
import Link from 'next/link';
import { allServices } from '@/data/services';

export const metadata = {
  title: 'Services | G. M. Kakde Engineering Consultants',
  description:
    'Explore the comprehensive range of engineering consultancy services offered by G. M. Kakde Engineering Consultants, including structural design, project management, and technical expertise.',
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <ServicesHero />
        <ServicesIntro />
        
        <ServicesGrid />
        <ServicesCTA />
      </main>
      <Footer />
    </>
  );
}