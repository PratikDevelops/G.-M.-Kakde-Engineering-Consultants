import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectsHero from './components/ProjectsHero';
import ProjectsGrid from './components/ProjectsGrid';

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
