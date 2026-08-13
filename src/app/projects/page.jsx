import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectsHero from './components/ProjectsHero';
import ProjectsGrid from './components/ProjectsGrid';

export const metadata = {
  title: 'Projects | G. M. Kakde Engineering Consultants',
  description:
    'Explore the portfolio of G. M. Kakde Engineering Consultants, featuring industrial, commercial, institutional, and infrastructure projects successfully delivered across India since 1978.',
};

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main>
        <ProjectsHero />
        <ProjectsGrid />
      </main>
      <Footer />
    </>
  );
}