'use client';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export default function ClientsHero() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      ref={ref}
      className="relative pt-32 pb-20 bg-primary overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(rgba(212,175,55,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* BREADCRUMB */}
        <nav
          aria-label="Breadcrumb"
          className={`mb-8 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <ol className="flex items-center gap-2 text-sm text-primary-foreground/50 overflow-x-auto">
            <li className="flex items-center gap-2">
              <Link href="/" className="hover:text-accent transition-colors">Home</Link>
              <Icon name="ChevronRightIcon" size={11} className="text-primary-foreground/20 shrink-0" />
            </li>
            <li aria-current="page" className="text-accent font-bold">
              Clients
            </li>
          </ol>
        </nav>

        <div className={`max-w-3xl transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-5">
            <div className="gold-line" />
            <span className="text-accent text-xs font-bold tracking-[0.4em] uppercase">Our Clients</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground tracking-tight leading-tight mb-6">
            Trusted by <span className="gold-shimmer">India's Leading</span><br />
            Organizations
          </h1>
          <p className="text-primary-foreground/60 text-lg leading-relaxed max-w-2xl">
            Over four decades of delivering engineering excellence to government bodies, private developers, educational institutions, and infrastructure organizations across India.
          </p>
        </div>

        {/* <div className={`mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {[
            { count: '40+', label: 'Government Bodies' },
            { count: '25+', label: 'Private Developers' },
            { count: '15+', label: 'Educational Institutions' },
            { count: '20+', label: 'Infrastructure Orgs' },
          ]?.map((stat) => (
            <div key={stat?.label} className="border border-primary-foreground/10 rounded-sm px-5 py-4 hover:border-accent/30 transition-colors duration-300">
              <div className="text-2xl font-bold text-accent mb-1">{stat?.count}</div>
              <div className="text-primary-foreground/50 text-xs font-semibold tracking-widest uppercase">{stat?.label}</div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}