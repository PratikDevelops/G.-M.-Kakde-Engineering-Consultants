'use client';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function CTABanner() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref?.current) observer?.observe(ref?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-24 bg-primary overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="grain-overlay absolute inset-0 opacity-[0.02] pointer-events-none" />

      <div className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="gold-line" />
          <span className="text-accent text-xs font-bold tracking-[0.4em] uppercase">Start Your Project</span>
          <div className="gold-line" />
        </div>

        <h2 className="text-section-xl font-bold text-primary-foreground tracking-tight mb-6">
          Ready to Build{' '}
          <span className="gold-shimmer">Something Great?</span>
        </h2>

        <p className="text-primary-foreground/60 text-lg leading-relaxed max-w-2xl mx-auto mb-10 font-light">
          Whether it's a government infrastructure project, a residential township, or a complex structural challenge - our team is ready to deliver with precision and excellence.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="px-10 py-4 bg-accent text-accent-foreground font-bold text-sm uppercase tracking-widest rounded-sm hover:bg-accent/90 transition-all duration-300 shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5"
          >
            Get Free Consultation
          </Link>
          <Link
            href="/services"
            className="px-10 py-4 border border-primary-foreground/30 text-primary-foreground font-bold text-sm uppercase tracking-widest rounded-sm hover:border-accent hover:text-accent transition-all duration-300"
          >
            Browse Services
          </Link>
        </div>

        <p className="mt-8 text-primary-foreground text-xs font-medium tracking-widest uppercase">
          45+ Years · 500+ Projects · Government Empanelled
        </p>
      </div>
    </section>
  );
}