import React from 'react';

export default function ServicesIntro() {
  return (
    <section className="py-16 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-bold text-foreground tracking-tight mb-4">
              End-to-End Engineering Solutions for{' '}
              <span className="gold-shimmer">Every Scale</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed font-light">
              From a single structural assessment to a 10,000-acre master plan, G. M. Kakde Engineering Consultants brings 45 years of multidisciplinary expertise to every engagement. Our integrated approach means you get coordinated civil, structural, architectural, and planning inputs under one roof.
            </p>
          </div>
          <div className="lg:col-span-5 grid grid-cols-3 gap-4">
            {[
              { n: '12', l: 'Service Verticals' },
              { n: '500+', l: 'Projects Delivered' },
              { n: '4', l: 'Office Locations' },
            ]?.map((s) => (
              <div key={s?.l} className="p-5 bg-muted rounded-sm text-center border border-border">
                <span className="block text-2xl font-bold text-primary mb-1">{s?.n}</span>
                <span className="text-muted-foreground text-xs font-semibold uppercase tracking-wide">{s?.l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}