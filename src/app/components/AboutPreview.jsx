'use client';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

const milestones = [
  { year: '1978', text: 'Founded as G. M. Kakde & Associates in Mumbai' },
  { year: '1994', text: 'Incorporated as Pvt. Ltd., expanded to Pune & Aurangabad' },
  { year: '2005', text: 'Crossed 100 government projects milestone' },
  { year: '2015', text: 'Urban planning division established, 1000+ acres planned' },
  { year: '2024', text: '500+ projects completed, 50+ expert professionals' }];


export default function AboutPreview() {
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
    <section ref={ref} className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Image with floating card */}
          <div
            className={`lg:col-span-5 relative transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>

            <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-2xl">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_1625f3d5b-1773417563579.png"
                alt="Engineering team reviewing structural blueprints in modern office, bright natural lighting, professional environment"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw" />

              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-sm shadow-xl max-w-[180px]">
              <span className="block text-3xl font-bold leading-none">45+</span>
              <span className="text-accent-foreground/80 text-xs font-semibold mt-1 block uppercase tracking-widest">Years Experience</span>
            </div>

            {/* Decorative border */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-accent/30 rounded-sm pointer-events-none" />
          </div>

          {/* Right: Content */}
          <div
            className={`lg:col-span-7 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>

            <div className="flex items-center gap-3 mb-4">
              <div className="gold-line" />
              <span className="text-accent text-xs font-bold tracking-[0.4em] uppercase">About Us</span>
            </div>

            <h2 className="text-section-xl font-bold text-foreground tracking-tight mb-6">
              Building India's{' '}
              <span className="gold-shimmer">Infrastructure</span>{' '}
              for Generations
            </h2>

            <p className="text-muted-foreground  leading-relaxed mb-6 font-light">
              G. M. Kakde Engineering Consultants Pvt. Ltd. is a Mumbai-based multidisciplinary engineering firm specializing in integrated infrastructure solutions. Our team of civil engineers, architects, urban planners, and project managers works collaboratively to deliver efficient, sustainable, and high-quality projects.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8 font-light">
              Our government empanelments with MMRDA, CIDCO, MHADA, NMMC, and multiple municipal corporations reflect our credibility in public infrastructure. From structural engineering of high-rises to urban master planning of entire townships, we make impossible possible.
            </p>

            {/* Timeline */}
            <div className="space-y-3 mb-8">
              {milestones?.map((m, i) =>
                <div
                  key={m?.year}
                  className="flex items-start gap-4"
                  style={{ transitionDelay: `${i * 100 + 300}ms` }}>

                  <span className="text-accent font-bold text-sm w-12 shrink-0 pt-0.5">{m?.year}</span>
                  <div className="flex-1 flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <p className="text-muted-foreground text-sm leading-relaxed">{m?.text}</p>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/about"
              className="
            inline-flex items-center gap-3
            px-6 py-4
            bg-primary
            text-primary-foreground
            font-bold
            text-sm
            uppercase
            tracking-widest
            rounded-sm
            hover:bg-accent
            hover:text-accent-foreground
            transition-all duration-300">

              Learn More
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>);

}