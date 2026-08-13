'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const allServices = [
  { slug: 'project-management-consultancy', title: 'Project Management Consultancy' },
  { slug: 'structural-engineering', title: 'Structural Engineering' },
  { slug: 'architecture', title: 'Architecture' },
  { slug: 'urban-planning', title: 'Urban Planning' },
  { slug: 'roads-and-bridges', title: 'Roads & Bridges' },
  { slug: 'water-supply-engineering', title: 'Water Supply Engineering' },
  { slug: 'sewerage-and-stp', title: 'Sewerage & STP' },
  { slug: 'environmental-consultancy', title: 'Environmental Consultancy' },
  { slug: 'material-testing', title: 'Material Testing' },
  { slug: 'third-party-audits', title: 'Third Party Audits' },
  { slug: 'real-estate-consultancy', title: 'Real Estate Consultancy' },
  { slug: 'infrastructure-planning', title: 'Infrastructure Planning' },
];

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Clients', href: '/clients' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const closeTimer = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // Transparent only at the very top of the page; once scrolled OR a dropdown
  // is open, the bar needs a solid surface so text stays legible over any hero.
  const isSolid = scrolled || servicesOpen;

  const openServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const scheduleCloseServices = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 150);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isSolid
            ? 'bg-primary shadow-lg shadow-primary/20 py-4'
            : 'bg-gradient-to-b from-primary/70 via-primary/30 to-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <AppLogo
              size={40}
              onClick={() => {}}
              className="group-hover:scale-105 transition-transform duration-300"
            />
            <div className="flex flex-col">
              <span className="font-display font-bold text-white text-sm leading-tight tracking-wide">
                GMKakde
              </span>
              <span className="text-accent text-[10px] font-medium tracking-widest uppercase leading-tight">
                Engineering Consultants
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-white hover:text-accent text-sm font-semibold tracking-wide transition-colors duration-200 relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300 rounded-full" />
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-accent text-sm font-semibold tracking-wide transition-colors duration-200 relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300 rounded-full" />
            </Link>

            {/* Services mega-dropdown */}
            <div
              className="relative"
              onMouseEnter={openServices}
              onMouseLeave={scheduleCloseServices}
            >
              <button
                className="flex items-center gap-1 text-white hover:text-accent text-sm font-semibold tracking-wide transition-colors duration-200"
                onClick={() => setServicesOpen((v) => !v)}
                aria-expanded={servicesOpen}
              >
                Services
                <ChevronDownIcon
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    servicesOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[420px]">
                  <div className="rounded-lg border border-white/10 bg-primary shadow-2xl shadow-black/40 p-3 grid grid-cols-2 gap-1">
                    {allServices.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="rounded-md px-3 py-2.5 text-white/85 hover:text-accent hover:bg-white/5 text-sm font-semibold leading-snug transition-colors"
                        onClick={() => setServicesOpen(false)}
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>


                </div>
              )}
            </div>

            <Link
              href="/projects"
              className="text-white hover:text-accent text-sm font-semibold tracking-wide transition-colors duration-200 relative group"
            >
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300 rounded-full" />
            </Link>
            <Link
              href="/clients"
              className="text-white hover:text-accent text-sm font-semibold tracking-wide transition-colors duration-200 relative group"
            >
              Clients
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300 rounded-full" />
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-accent text-sm font-semibold tracking-wide transition-colors duration-200 relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300 rounded-full" />
            </Link>

            <Link
              href="/contact"
              className="px-5 py-2.5 bg-accent text-accent-foreground text-sm font-bold rounded-sm tracking-wide hover:bg-accent/90 transition-all duration-200 shadow-md hover:shadow-accent/30"
            >
              Get Consultation
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus:outline-none"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle mobile menu"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                mobileOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                mobileOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                mobileOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>

        {isSolid && <div className="beam-border-h" />}
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-primary flex flex-col pt-24 px-6 overflow-y-auto"
          onClick={() => setMobileOpen(false)}
        >
          <nav className="flex flex-col gap-6 pb-12" onClick={(e) => e.stopPropagation()}>
            <Link
              href="/"
              className="text-white text-2xl font-bold tracking-tight hover:text-accent transition-colors border-b border-white/10 pb-4"
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-white text-2xl font-bold tracking-tight hover:text-accent transition-colors border-b border-white/10 pb-4"
              onClick={() => setMobileOpen(false)}
            >
              About
            </Link>

            {/* Mobile services accordion */}
            <div className="border-b border-white/10 pb-4">
              <button
                className="flex items-center justify-between w-full text-white text-2xl font-bold tracking-tight hover:text-accent transition-colors"
                onClick={() => setMobileServicesOpen((v) => !v)}
              >
                Services
                <ChevronDownIcon
                  className={`w-5 h-5 transition-transform duration-200 ${
                    mobileServicesOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {mobileServicesOpen && (
                <div className="mt-4 flex flex-col gap-1">
                  {allServices.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="py-2.5 text-white/80 hover:text-accent text-sm font-semibold transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {service.title}
                    </Link>
                  ))}
                  <Link
                    href="/services"
                    className="mt-2 text-accent text-xs font-bold tracking-widest uppercase"
                    onClick={() => setMobileOpen(false)}
                  >
                    View All Services →
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/projects"
              className="text-white text-2xl font-bold tracking-tight hover:text-accent transition-colors border-b border-white/10 pb-4"
              onClick={() => setMobileOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/clients"
              className="text-white text-2xl font-bold tracking-tight hover:text-accent transition-colors border-b border-white/10 pb-4"
              onClick={() => setMobileOpen(false)}
            >
              Clients
            </Link>
            <Link
              href="/contact"
              className="text-white text-2xl font-bold tracking-tight hover:text-accent transition-colors border-b border-white/10 pb-4"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>

            <Link
              href="/contact"
              className="mt-4 px-6 py-4 bg-accent text-accent-foreground font-bold text-lg rounded-sm text-center hover:bg-accent/90 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Get Consultation
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}