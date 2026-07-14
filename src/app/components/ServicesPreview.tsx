'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface Service {
  slug: string;
  icon: string;
  title: string;
  desc: string;
  colSpan: string;
  accent?: boolean;
}

const services: Service[] = [
  {
    slug: 'project-management-consultancy',
    icon: 'BuildingOffice2Icon',
    title: 'Project Management Consultancy',
    desc: 'End-to-end PMC services for residential, commercial, and government infrastructure projects - from concept to commissioning.',
    colSpan: 'lg:col-span-2',
    accent: true,
  },
  {
    slug: 'structural-engineering',
    icon: 'CubeIcon',
    title: 'Structural Engineering',
    desc: 'Analysis, design, and detailing of RCC, steel, and composite structures for all building typologies.',
    colSpan: 'lg:col-span-1',
  },
  {
    slug: 'architecture',
    icon: 'HomeIcon',
    title: 'Architecture',
    desc: 'Functional and aesthetic architectural design for residential complexes, commercial spaces, and public buildings.',
    colSpan: 'lg:col-span-1',
  },
  {
    slug: 'urban-planning',
    icon: 'MapIcon',
    title: 'Urban Planning',
    desc: 'Master planning, development plans, and township layouts for sustainable urban growth.',
    colSpan: 'lg:col-span-1',
  },
  {
    slug: 'roads-and-bridges',
    icon: 'TruckIcon',
    title: 'Roads & Bridges',
    desc: 'Highway design, bridge engineering, and traffic systems for state and national infrastructure.',
    colSpan: 'lg:col-span-1',
  },
  {
    slug: 'water-supply-engineering',
    icon: 'BeakerIcon',
    title: 'Water Supply Engineering',
    desc: 'Water distribution networks, treatment plants, and supply schemes for urban and rural areas.',
    colSpan: 'lg:col-span-2',
  },
];

export default function ServicesPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div
          className={`flex flex-col md:flex-row justify-between items-end gap-6 mb-12 transition-all duration-700 ${
            visible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="gold-line" />
              <span className="text-accent text-xs font-bold tracking-[0.4em] uppercase">
                Our Services
              </span>
            </div>

            <h2 className="text-section-xl font-bold text-foreground tracking-tight">
              Comprehensive{' '}
              <span className="gold-shimmer">
                Engineering
              </span>
              <br />
              Solutions
            </h2>
          </div>

          <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
            12 specialized service verticals covering infrastructure engineering and consultancy.
          </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {services.map((svc, i) => (

            <Link
              key={svc.slug}
              href={`/services/${svc.slug}`}
              className={`${svc.colSpan}
                p-8 rounded-sm border border-border 
                ${svc.accent ? 'bg-primary border-primary' : 'bg-card'}
                card-hover group cursor-pointer
                transition-all duration-500
                ${
                  visible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
              style={{
                transitionDelay: `${i * 100}ms`,
              }}
            >

              <div
                className={`w-12 h-12 rounded-sm flex items-center justify-center mb-6 transition-colors
                ${
                  svc.accent
                    ? 'bg-accent/20 group-hover:bg-accent/30'
                    : 'bg-primary/5 group-hover:bg-primary/10'
                }`}
              >
                <Icon
                  name={svc.icon as Parameters<typeof Icon>[0]['name']}
                  size={24}
                  className={
                    svc.accent
                      ? 'text-accent'
                      : 'text-primary'
                  }
                />
              </div>


              <h3
                className={`text-lg font-bold mb-3 leading-tight ${
                  svc.accent
                    ? 'text-primary-foreground'
                    : 'text-foreground'
                }`}
              >
                {svc.title}
              </h3>


              <p
                className={`text-sm leading-relaxed ${
                  svc.accent
                    ? 'text-primary-foreground/70'
                    : 'text-muted-foreground'
                }`}
              >
                {svc.desc}
              </p>


              <div
                className={`mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest ${
                  svc.accent
                    ? 'text-accent'
                    : 'text-primary'
                }`}
              >
                Explore Service

                <svg
                  className="w-3 h-3 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>

              </div>

            </Link>

          ))}

        </div>


        <div className="mt-12 flex justify-center">

          <Link
            href="/services"
            className="
            inline-flex items-center gap-3
            px-8 py-4
            bg-primary
            text-primary-foreground
            font-bold
            text-sm
            uppercase
            tracking-widest
            rounded-sm
            hover:bg-accent
            hover:text-accent-foreground
            transition-all duration-300"
          >
            View All 12 Services

            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>

          </Link>

        </div>

      </div>
    </section>
  );
}