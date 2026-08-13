'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const allServices = [
  {
    slug: 'project-management-consultancy',
    icon: 'BuildingOffice2Icon',
    title: 'Project Management Consultancy',
    overview:
      'Comprehensive PMC services covering planning, execution monitoring, quality assurance, cost control, and commissioning.',
  },
  {
    slug: 'structural-engineering',
    icon: 'CubeIcon',
    title: 'Structural Engineering',
    overview:
      'Advanced structural analysis, design, and detailing for RCC, steel, composite structures, bridges, and high-rise buildings.',
  },
  {
    slug: 'architecture',
    icon: 'HomeIcon',
    title: 'Architecture',
    overview:
      'Innovative architectural solutions combining functionality, aesthetics, sustainability, and user experience.',
  },
  {
    slug: 'urban-planning',
    icon: 'MapIcon',
    title: 'Urban Planning',
    overview:
      'Master planning, township development, land use studies, and sustainable urban growth strategies.',
  },
  {
    slug: 'roads-and-bridges',
    icon: 'TruckIcon',
    title: 'Roads & Bridges',
    overview:
      'Highway engineering, bridge design, traffic studies, and transportation infrastructure planning.',
  },
  {
    slug: 'water-supply-engineering',
    icon: 'BeakerIcon',
    title: 'Water Supply Engineering',
    overview:
      'Water treatment, distribution networks, pumping systems, and sustainable water solutions.',
  },
  {
    slug: 'sewerage-and-stp',
    icon: 'ArrowPathIcon',
    title: 'Sewerage & STP',
    overview:
      'Complete sewage network planning, STP design, and wastewater management systems.',
  },
  {
    slug: 'environmental-consultancy',
    icon: 'GlobeAltIcon',
    title: 'Environmental Consultancy',
    overview:
      'Environmental assessments, compliance studies, and sustainable development consulting.',
  },
  {
    slug: 'material-testing',
    icon: 'MagnifyingGlassIcon',
    title: 'Material Testing',
    overview:
      'Testing and quality assessment of concrete, soil, steel, aggregates, and construction materials.',
  },
  {
    slug: 'third-party-audits',
    icon: 'ClipboardDocumentCheckIcon',
    title: 'Third Party Audits',
    overview:
      'Independent technical audits for quality, safety, structural integrity, and regulatory compliance verification.',
  },
  {
    slug: 'real-estate-consultancy',
    icon: 'CurrencyRupeeIcon',
    title: 'Real Estate Consultancy',
    overview:
      'Technical due diligence, feasibility studies, and development advisory for investors and developers.',
  },
  {
    slug: 'infrastructure-planning',
    icon: 'BuildingStorefrontIcon',
    title: 'Infrastructure Planning',
    overview:
      'Integrated infrastructure planning for townships, industrial corridors, and mixed-use developments.',
  },
];

export default function ServicesGrid() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-background py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(212,175,55,0.08),transparent_35%)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div
          className={`max-w-3xl mb-16 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="h-[2px] w-12 bg-accent" />
            <span className="text-accent text-xs font-bold uppercase tracking-[0.35em]">
              Our Expertise
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Engineering <span className="gold-shimmer">Excellence</span>
          </h1>

          <p className="mt-5 text-muted-foreground leading-relaxed text-base md:text-lg">
            Delivering integrated engineering solutions across infrastructure,
            construction, environment, and urban development sectors.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
          {allServices.map((service, index) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className={`group relative flex flex-col rounded-xl border border-border bg-card p-7 min-h-[260px]
                transition-all duration-500
                hover:-translate-y-2 hover:border-accent/40 hover:shadow-xl
                ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >


              {/* ICON */}
              <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-primary/5 border border-primary/10 group-hover:bg-accent/10 transition">
                <Icon
                  name={service.icon}
                  size={26}
                  className="text-primary group-hover:text-accent transition"
                />
              </div>

              <h2 className="mt-6 text-xl font-bold text-foreground pr-10">
                {service.title}
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                {service.overview}
              </p>

              {/* CTA - pinned to bottom via mt-auto so it never overlaps content above */}
              <div className="mt-auto pt-6 flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-accent opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                Explore Service
                <span>→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}