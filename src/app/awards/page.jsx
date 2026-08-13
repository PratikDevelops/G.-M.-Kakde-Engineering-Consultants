import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AwardsHero from './components/AwardsHero';
import AwardsContent from './components/AwardsContent';

export const metadata = {
  title: 'Awards & Certifications | G. M. Kakde Engineering Consultants',
  description: 'View our awards, certifications, and professional memberships. G. M. Kakde Engineering Consultants is recognized for excellence in engineering consultancy and quality assurance.',
};

export default function AwardsPage() {
  return (
    <>
      <Header />
      <main>
        <AwardsHero />
        <AwardsContent />
      </main>
      <Footer />
    </>
  );
}