import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TermsHero from './components/TermsHero';
import TermsContent from './components/TermsContent';

export const metadata = {
  title: 'Terms and Conditions | G. M. Kakde Engineering Consultants',
  description: 'Terms and conditions for using G. M. Kakde Engineering Consultants services. Please read our terms before engaging with our engineering consultancy services.',
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main>
        <TermsHero />
        <TermsContent />
      </main>
      <Footer />
    </>
  );
}
