import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

const footerLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Awards', href: '/awards' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms', href: '/terms' },
];

export default function Footer() {
  return (
    <footer className="bg-primary border-t border-primary-foreground/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
          <div className="flex flex-col gap-4 max-w-sm">
            <div className="flex items-center gap-3">
              <AppLogo size={36} />
              <div>
                <span className="font-display font-bold text-primary-foreground text-base leading-tight block">
                  G. M. Kakde Engineering
                </span>
                <span className="text-accent text-[10px] font-medium tracking-widest uppercase">
                  Consultants Pvt. Ltd.
                </span>
              </div>
            </div>
            <p className="text-primary-foreground/50 text-sm leading-relaxed">
              Multidisciplinary engineering excellence since 1978. Serving India&apos;s infrastructure needs across civil, structural, urban planning, and PMC domains.
            </p>
            <p className="text-primary-foreground text-xs">
              Maruti Niwas, Opp. IIT Main Gate, Powai, Mumbai - 400076
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {footerLinks?.map((link) => (
              <Link
                key={`${link?.label}-${link?.href}`}
                href={link?.href}
                className="text-primary-foreground/50 hover:text-accent text-sm font-medium transition-colors duration-200 focus:outline-none focus:text-accent"
              >
                {link?.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3 lg:items-end">
            <div className="flex gap-4">
              <a
                href="mailto:admin@gmk.net.in"
                className="text-primary-foreground/40 hover:text-accent transition-colors text-sm font-medium"
                aria-label="Email us"
              >
                admin@gmk.net.in
              </a>
            </div>
            <a
              href="tel:+912225791234"
              className="text-primary-foreground/40 hover:text-accent transition-colors text-sm font-medium"
              aria-label="Call us"
            >
              +91 22 2579 1234
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-primary-foreground/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground text-xs">
            © 2026 G. M. Kakde Engineering Consultants Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-primary-foreground text-xs">
            Engineering Excellence Since 1978
          </p>
        </div>
      </div>
    </footer>
  );
}