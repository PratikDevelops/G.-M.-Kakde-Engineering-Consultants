'use client';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function ClientsCTA() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref?.current) observer?.observe(ref?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={ref} className="section-padding bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col md:flex-row items-center justify-between gap-8 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="gold-line" />
              <span className="text-accent text-xs font-bold tracking-[0.4em] uppercase">Join Our Network</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground tracking-tight">
              Become Our Next <span className="gold-shimmer">Success Story</span>
            </h2>
            <p className="text-primary-foreground/50 mt-3 max-w-xl">
              Partner with G. M. Kakde Engineering Consultants and benefit from 45+ years of engineering expertise trusted by India's top organizations.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link
              href="/contact"
              className="px-8 py-4 bg-accent text-accent-foreground font-bold rounded-sm tracking-wide hover:bg-accent/90 transition-all duration-200 shadow-lg hover:shadow-accent/30 text-center"
            >
              Get Consultation
            </Link>
            <Link
              href="/projects"
              className="px-8 py-4 border border-primary-foreground/20 text-primary-foreground font-bold rounded-sm tracking-wide hover:border-accent/50 hover:text-accent transition-all duration-200 text-center"
            >
              View Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}