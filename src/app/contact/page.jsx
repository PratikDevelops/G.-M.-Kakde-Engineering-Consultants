import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactHero from './components/ContactHero';
import ContactOffices from './components/ContactOffices';
import ContactFormSection from './components/ContactFormSection';
import ContactMap from './components/ContactMap';

export const metadata = {
  title: 'Contact Us | G. M. Kakde Engineering Consultants',
  description:
    'Get in touch with G. M. Kakde Engineering Consultants for engineering consultancy, structural design, project management, and technical expertise. Contact our team for inquiries, consultations, and project discussions.',
};

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