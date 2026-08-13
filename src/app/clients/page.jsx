'use client';
import React from 'react';
import ClientsHero from './components/ClientsHero';
import ClientsGrid from './components/ClientsGrid';
import ClientsCTA from './components/ClientsCTA';
import Footer from '@/components/Footer';
import Header from '@/components/Header';



export default function ClientsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <ClientsHero />
      <ClientsGrid />
      <ClientsCTA />
      <Footer /> 
    </main>
  );
}