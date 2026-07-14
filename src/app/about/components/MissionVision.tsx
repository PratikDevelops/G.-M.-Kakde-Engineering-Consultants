'use client';
import React, { useEffect, useRef, useState } from 'react';

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref?.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    obs?.observe(el);
    return () => obs?.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function MissionVision() {
  const { ref, inView } = useInView(0.15);

  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-secondary/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-accent/5 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 grain-overlay opacity-[0.03] pointer-events-none" />
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="flex items-center gap-3 mb-12">
          <div className="gold-line" />
          <span className="text-accent text-xs font-bold tracking-[0.4em] uppercase">Purpose & Direction</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/5 rounded-sm overflow-hidden">
          {/* Mission */}
          <div className="bg-primary p-10 lg:p-14 relative group">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-accent/60 via-accent to-accent/20" />
            <div className="mb-6">
              <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-accent">Mission</span>
              <h2 className="mt-2 text-3xl lg:text-4xl font-bold text-primary-foreground leading-tight">
                What We <span className="gold-shimmer">Do</span>
              </h2>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed text-base mb-6">
              To deliver technically superior, cost-effective, and sustainable engineering consultancy services that transform infrastructure visions into enduring built realities - on time, within budget, and beyond expectation.
            </p>
            <ul className="space-y-3">
              {['Technical excellence in every deliverable', 'Client-centric project management', 'Sustainable and future-ready design', 'Transparent and accountable processes']?.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-primary-foreground/60">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Vision */}
          <div className="bg-secondary/20 p-10 lg:p-14 relative group">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-accent/30 via-accent/60 to-accent/10" />
            <div className="mb-6">
              <span className="text-[10px] font-bold tracking-[0.5em]  uppercase text-accent">Vision</span>
              <h2 className="mt-2 text-3xl lg:text-4xl font-bold text-primary-foreground leading-tight">
                Where We&apos;re <span className="gold-shimmer">Headed</span>
              </h2>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed text-base mb-6">
              To be India&apos;s most trusted multidisciplinary engineering consultancy - recognised for technical innovation, institutional integrity, and a legacy of infrastructure that serves communities for generations.
            </p>
            <ul className="space-y-3">
              {['Pan-India presence across all infrastructure sectors', 'Pioneer in smart city and green infrastructure', 'Benchmark for government consultancy standards', 'Nurturing the next generation of engineers']?.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-primary-foreground/60">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
