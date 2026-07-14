import React from 'react';
import Link from 'next/link';

export default function ServicesCTA() {
  return (
    <section className="py-20 bg-muted border-t border-border">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-3 mb-5">
          <div className="gold-line" />
          <span className="text-accent text-xs font-bold tracking-[0.4em] uppercase">Get Started</span>
          <div className="gold-line" />
        </div>
        <h2 className="text-3xl font-bold text-foreground tracking-tight mb-4">
          Need a Specific <span className="gold-shimmer">Engineering Service?</span>
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-8 font-light">
          Our team of 50+ experts is ready to assess your project requirements and provide a tailored consultancy proposal - typically within 48 hours.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="px-8 py-4 bg-primary text-primary-foreground font-bold text-sm uppercase tracking-widest rounded-sm hover:bg-secondary transition-all duration-300 shadow-md hover:-translate-y-0.5"
          >
            Request a Proposal
          </Link>
          <a
            href="tel:+912225791234"
            className="px-8 py-4 border border-border text-foreground font-bold text-sm uppercase tracking-widest rounded-sm hover:border-accent hover:text-accent transition-all duration-300"
          >
            Call Us: +91 22 2579 1234
          </a>
        </div>
      </div>
    </section>
  );
}