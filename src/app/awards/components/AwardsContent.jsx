'use client';

import React, { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

const certifications = [
  {
    icon: 'CheckBadgeIcon',
    code: 'ISO 9001:2015',
    title: 'Quality Management Systems',
    desc: 'Maintained across all project phases, from design intake through construction supervision and handover.',
    colSpan: 'lg:col-span-2',
    accent: true,
  },
  {
    icon: 'GlobeAltIcon',
    code: 'ISO 14001:2015',
    title: 'Environmental Management',
    desc: 'Governs site practice, material sourcing, and waste handling on every project.',
    colSpan: 'lg:col-span-1',
  },
  {
    icon: 'ShieldCheckIcon',
    code: 'ISO 45001:2018',
    title: 'Occupational Health & Safety',
    desc: 'Workplace safety management for our team and every site stakeholder.',
    colSpan: 'lg:col-span-1',
  },
  {
    icon: 'BuildingLibraryIcon',
    code: 'CIDC',
    title: 'Construction Industry Development Council',
    desc: 'Registered contributor to national infrastructure development programmes.',
    colSpan: 'lg:col-span-1',
  },
  {
    icon: 'DocumentCheckIcon',
    code: 'EIL',
    title: 'Engineers India Limited - Approved Consultant',
    desc: 'Empanelled for engineering and consultancy assignments across EIL-managed projects.',
    colSpan: 'lg:col-span-1',
  },
  {
    icon: 'ClipboardDocumentCheckIcon',
    code: 'NBCB',
    title: 'National Building Code Board',
    desc: 'Registered for compliance with national building standards and code enforcement.',
    colSpan: 'lg:col-span-2',
  },
];

const awards = [
  {
    icon: 'TrophyIcon',
    year: '2023',
    title: 'Vijayshree Award',
    desc: 'From India International Friendship Society, Delhi, for outstanding contributions to engineering consultancy and project management.',
    colSpan: 'lg:col-span-2',
    accent: true,
  },
  {
    icon: 'StarIcon',
    year: '2022',
    title: 'Bharat Vikas Award',
    desc: 'From India International Friendship Society, Delhi, for excellence in engineering consultancy and project management.',
    colSpan: 'lg:col-span-1',
  },
  {
    icon: 'BuildingOffice2Icon',
    year: '2021',
    title: 'Business Excellence Award',
    desc: 'For significant contributions to urban infrastructure and smart city projects.',
    colSpan: 'lg:col-span-1',
  },
  {
    icon: 'SparklesIcon',
    year: '2020',
    title: 'Pride of Marathwada',
    desc: 'From Marathwada Technologists Association, for outstanding contributions to engineering consultancy and project management.',
    colSpan: 'lg:col-span-1',
  },
  {
    icon: 'SparklesIcon',
    year: '2020',
    title: 'All India Achiever Award',
    desc: 'All India Achievers Society Delhi, for excellence in engineering consultancy and project management.',
    colSpan: 'lg:col-span-1',
  },
];

const memberships = [
  { icon: 'AcademicCapIcon', org: 'Practising Engineers, Architects and Town Planners Association (India)', status: 'Life Member' },
  { icon: 'AcademicCapIcon', org: 'Member of the Institution of Engineers (India)', status: 'Corporate Member' },
  { icon: 'AcademicCapIcon', org: 'Surveyor with MCGM and Consulting Engineer', status: 'Active Member' },
];

export default function AwardsContent() {
  const ref = useRef(null);
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

        {/* Certifications */}
        <div
          className={`flex flex-col md:flex-row justify-between items-start md:items-end gap-4 sm:gap-6 mb-8 sm:mb-12 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="gold-line" />
              <span className="text-accent text-xs font-bold tracking-[0.4em] uppercase">
                Credentials
              </span>
            </div>

            <h2 className="text-section-xl font-bold text-foreground tracking-tight">
              Certified{' '}
              <span className="gold-shimmer">Quality</span>
              <br className="hidden sm:block" />
              {' '}& Compliance
            </h2>
          </div>

          <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
            Six accreditations covering quality, environmental, safety, and regulatory standards.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-24">
          {certifications.map((cert, i) => (
            <div
              key={cert.code}
              className={`${cert.colSpan}
                p-6 sm:p-8 rounded-sm border border-border
                ${cert.accent ? 'bg-primary border-primary' : 'bg-card'}
                card-hover
                transition-all duration-500
                ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div
                className={`w-12 h-12 rounded-sm flex items-center justify-center mb-6 transition-colors
                ${cert.accent ? 'bg-accent/20' : 'bg-primary/5'}`}
              >
                <Icon
                  name={cert.icon}
                  size={24}
                  className={cert.accent ? 'text-accent' : 'text-primary'}
                />
              </div>

              <span
                className={`text-xs font-bold uppercase tracking-widest ${
                  cert.accent ? 'text-accent' : 'text-primary'
                }`}
              >
                {cert.code}
              </span>

              <h3
                className={`text-lg font-bold mt-2 mb-3 leading-tight ${
                  cert.accent ? 'text-primary-foreground' : 'text-foreground'
                }`}
              >
                {cert.title}
              </h3>

              <p
                className={`text-sm leading-relaxed ${
                  cert.accent ? 'text-primary-foreground/70' : 'text-muted-foreground'
                }`}
              >
                {cert.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Awards */}
        <div
          className={`flex flex-col md:flex-row justify-between items-start md:items-end gap-4 sm:gap-6 mb-8 sm:mb-12 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="gold-line" />
              <span className="text-accent text-xs font-bold tracking-[0.4em] uppercase">
                Recognition
              </span>
            </div>

            <h2 className="text-section-xl font-bold text-foreground tracking-tight">
              Awards &{' '}
              <span className="gold-shimmer">Honours</span>
            </h2>
          </div>

          <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
            Four years of consecutive recognition across engineering and project management.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-16 sm:mb-24">
          {awards.map((award, i) => (
            <div
              key={award.year}
              className={`${award.colSpan}
                p-6 sm:p-8 rounded-sm border border-border
                ${award.accent ? 'bg-primary border-primary' : 'bg-card'}
                card-hover
                transition-all duration-500
                ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-12 h-12 rounded-sm flex items-center justify-center shrink-0
                  ${award.accent ? 'bg-accent/20' : 'bg-primary/5'}`}
                >
                  <Icon
                    name={award.icon}
                    size={24}
                    className={award.accent ? 'text-accent' : 'text-primary'}
                  />
                </div>
                <span
                  className={`text-2xl font-bold ${
                    award.accent ? 'text-accent' : 'text-primary'
                  }`}
                >
                  {award.year}
                </span>
              </div>

              <h3
                className={`text-lg font-bold mb-3 leading-tight ${
                  award.accent ? 'text-primary-foreground' : 'text-foreground'
                }`}
              >
                {award.title}
              </h3>

              <p
                className={`text-sm leading-relaxed ${
                  award.accent ? 'text-primary-foreground/70' : 'text-muted-foreground'
                }`}
              >
                {award.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Professional Memberships */}
        <div
          className={`flex flex-col md:flex-row justify-between items-start md:items-end gap-4 sm:gap-6 mb-8 sm:mb-12 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="gold-line" />
              <span className="text-accent text-xs font-bold tracking-[0.4em] uppercase">
                Affiliations
              </span>
            </div>

            <h2 className="text-section-xl font-bold text-foreground tracking-tight">
              Professional{' '}
              <span className="gold-shimmer">Memberships</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {memberships.map((m, i) => (
            <div
              key={m.org}
              className={`p-6 sm:p-8 rounded-sm border border-border bg-card
                card-hover text-center
                transition-all duration-500
                ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-sm bg-primary/5 flex items-center justify-center mb-6 mx-auto">
                <Icon
                  name={m.icon}
                  size={24}
                  className="text-primary"
                />
              </div>

              <h3 className="text-base font-bold text-foreground mb-2 leading-tight">
                {m.org}
              </h3>

              <span className="text-xs font-bold uppercase tracking-widest text-accent">
                {m.status}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}