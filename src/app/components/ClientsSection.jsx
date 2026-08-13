'use client';
import React, { useEffect, useRef, useState } from 'react';

const govClients = [
  'MMRDA', 'CIDCO', 'MHADA', 'NMMC', 'PMC', 'NMC',
  'MSRDC', 'NHAI', 'SRA Mumbai', 'MCGM', 'MIDC', 'PCMC',
];

const privateClients = [
  'Lodha Group', 'Godrej Properties', 'L&T Realty', 'Kalpataru',
  'Runwal Group', 'Mahindra Lifespace', 'Piramal Realty', 'Oberoi Realty',
];

export default function ClientsSection() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref?.current) observer?.observe(ref?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={ref} className="section-padding bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="gold-line" />
            <span className="text-accent text-xs font-bold tracking-[0.4em] uppercase">Trusted By</span>
            <div className="gold-line" />
          </div>
          <h2 className="text-section-xl font-bold text-primary-foreground tracking-tight">
            Government & <span className="gold-shimmer">Private</span> Clients
          </h2>
        </div>

        <div className="mb-8">
          <p className="text-accent text-xs font-bold tracking-[0.4em] uppercase mb-6 text-center">Government Bodies</p>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
            {govClients?.map((client, i) => (
              <div
                key={client}
                className={`px-4 py-4 border border-primary-foreground/10 rounded-sm text-center hover:border-accent/40 hover:bg-primary-foreground/5 transition-all duration-300 group
                  ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <span className="text-primary-foreground/60 group-hover:text-accent text-xs font-bold uppercase tracking-widest transition-colors duration-300">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-accent text-xs font-bold tracking-[0.4em] uppercase mb-6 text-center">Private Developers</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-3">
            {privateClients?.map((client, i) => (
              <div
                key={client}
                className={`px-4 py-4 border border-primary-foreground/10 rounded-sm text-center hover:border-accent/40 hover:bg-primary-foreground/5 transition-all duration-300 group
                  ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${(i + 12) * 50}ms` }}
              >
                <span className="text-primary-foreground/60 group-hover:text-accent text-sm font-semibold transition-colors duration-300">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}