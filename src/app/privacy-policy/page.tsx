import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PrivacyPolicyHero from './components/PrivacyPolicyHero';
import PrivacyPolicyContent from './components/PrivacyPolicyContent';

export const metadata = {
  title: 'Privacy Policy | G. M. Kakde Engineering Consultants',
  description: 'Privacy policy for G. M. Kakde Engineering Consultants. Learn how we collect, use, and protect your personal information when you engage with our engineering consultancy services.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main>
        <PrivacyPolicyHero />
        <PrivacyPolicyContent />
      </main>
      <Footer />
    </>
  );
}
