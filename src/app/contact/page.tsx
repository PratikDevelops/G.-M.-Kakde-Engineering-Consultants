import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactHero from './components/ContactHero';
import ContactOffices from './components/ContactOffices';
import ContactFormSection from './components/ContactFormSection';
import ContactMap from './components/ContactMap';

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactHero />
        <ContactOffices />
        <ContactFormSection />
        <ContactMap />
      </main>
      <Footer />
    </>
  );
}