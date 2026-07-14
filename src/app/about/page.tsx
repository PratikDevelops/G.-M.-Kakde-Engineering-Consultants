import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutHero from './components/AboutHero';
import CompanyTimeline from './components/CompanyTimeline';
import MissionVision from './components/MissionVision';
import CoreValues from './components/CoreValues';
import LeadershipPreview from './components/LeadershipPreview';

export const metadata = {
  title: 'About Us | G. M. Kakde Engineering Consultants',
  description: 'Learn about G. M. Kakde Engineering Consultants - our history since 1978, mission, vision, core values, and the leadership team behind 500+ projects across India.',
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutHero />
        <CompanyTimeline />
        <MissionVision />
        <CoreValues />
        <LeadershipPreview />
      </main>
      <Footer />
    </>
  );
}
