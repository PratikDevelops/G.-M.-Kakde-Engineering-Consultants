// components/services/ServiceDossier.tsx
'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import type { Service } from '@/data/services';

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'deliverables', label: 'Deliverables' },
  { id: 'process', label: 'Process' },
  { id: 'benefits', label: 'Benefits' },
] as const;

function HatchDivider() {
  return (
    <div className="relative my-14 h-3">
      <div className="absolute inset-y-0 left-0 w-2 border-x border-border" />
      <div
        className="absolute inset-y-0 left-2 right-2 border-y border-border/70"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, var(--border) 0, var(--border) 1px, transparent 1px, transparent 9px)',
          opacity: 0.6,
        }}
      />
      <div className="absolute inset-y-0 right-0 w-2 border-x border-border" />
    </div>
  );
}

interface ServiceDossierProps {
  service: Service;
  index: number;
  total: number;
  prev: Service | null;
  next: Service | null;
}

export default function ServiceDossier({
  service,
  index,
  total,
  prev,
  next,
}: ServiceDossierProps) {
  const [activeSection, setActiveSection] = useState<string>('overview');
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-20% 0px -65% 0px', threshold: 0 }
    );

    sections.forEach(({ id }) => {
      const el = sectionRefs.current[id];
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [service.slug]);

  const sheetNo = String(index + 1).padStart(2, '0');
  const memberTag = `C-${sheetNo}`;
  const overviewFirstChar = service.overview.charAt(0);
  const overviewRest = service.overview.slice(1);

  return (
    <main className="relative bg-background">
      {/* Hero - structural cross-hatch backdrop, editorial title */}
      <div className="relative border-b border-border overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, var(--border) 0, var(--border) 1px, transparent 1px, transparent 14px)',
            maskImage: 'linear-gradient(to bottom, black, transparent 90%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black, transparent 90%)',
          }}
        />
        <div className="relative max-w-6xl mx-auto px-6 pt-10 pb-14">
          <nav className="flex items-center gap-2 text-xs text-muted-foreground mb-10">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-accent transition-colors">Services</Link>
            <span>/</span>
            <span className="text-foreground font-medium">{service.title}</span>
          </nav>

          <div className=" text-[11px] uppercase tracking-[0.35em] text-accent mb-4">
            Service Dossier - Sheet {sheetNo} of {String(total).padStart(2, '0')}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground max-w-3xl leading-[1.05]">
            {service.title}
          </h1>
        </div>
      </div>

      {/* Body: sticky rail + content */}
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-12">
        {/* Sticky sidebar */}
        <aside className="hidden lg:block">
          <div className="sticky top-28 space-y-10">
            {/* Structural member tag - hex badge, as used on real structural drawings */}
            <div className="flex flex-col items-start gap-3">
              <svg viewBox="0 0 100 88" className="w-16 h-14">
                <polygon
                  points="50,2 95,25 95,63 50,86 5,63 5,25"
                  fill="var(--card)"
                  stroke="currentColor"
                  className="text-accent"
                  strokeWidth="2.5"
                />
                <text
                  x="50"
                  y="50"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="fill-foreground  font-bold"
                  style={{ fontSize: '20px' }}
                >
                  {memberTag}
                </text>
              </svg>
              <div>
                <div className="text-[10px]  uppercase tracking-widest text-muted-foreground">
                  Member Tag
                </div>
                <div className="text-[10px]  uppercase tracking-widest text-muted-foreground/70">
                  Typ. this sheet
                </div>
              </div>
            </div>

            {/* Scroll-spy nav */}
            <nav className="space-y-1 border-l border-border pl-4">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className={`block relative py-1.5 text-sm transition-colors ${
                    activeSection === s.id
                      ? 'text-accent font-semibold'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {activeSection === s.id && (
                    <span className="absolute -left-[18px] top-0 bottom-0 w-[2px] bg-accent" />
                  )}
                  {s.label}
                </a>
              ))}
            </nav>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-foreground hover:text-accent transition-colors"
            >
              Request Consultation
              <Icon name="ArrowRightIcon" size={14} />
            </Link>
          </div>
        </aside>

        {/* Main content column */}
        <div className="min-w-0 max-w-2xl">
          {/* Overview */}
          <section
            id="overview"
            ref={(el) => { sectionRefs.current.overview = el; }}
            className="scroll-mt-28"
          >
            <span className="float-left font-bold text-accent leading-[0.8] mr-3 mt-1 text-6xl">
              {overviewFirstChar}
            </span>
            <p className="text-lg text-foreground leading-relaxed">{overviewRest}</p>
            <div className="clear-both" />

            <Link
              href="/contact"
              className="lg:hidden mt-6 inline-flex items-center gap-2 rounded-lg bg-primary text-primary-foreground px-6 py-3 text-sm font-bold hover:bg-accent transition-colors"
            >
              Request a Consultation
              <Icon name="ArrowRightIcon" size={16} />
            </Link>
          </section>

          <HatchDivider />

          {/* Deliverables - connected to a running load-path rule */}
          <section
            id="deliverables"
            ref={(el) => { sectionRefs.current.deliverables = el; }}
            className="scroll-mt-28"
          >
            <h2 className=" text-xs font-bold uppercase tracking-widest text-accent mb-6">
              Key Deliverables
            </h2>
            <ul className="border-l-2 border-accent/30 pl-6 space-y-4">
              {service.deliverables.map((item, i) => (
                <li key={item} className="relative">
                  <span className="absolute -left-[27px] top-1.5 w-2.5 h-2.5 rounded-full bg-background border-2 border-accent" />
                  <span className=" text-[10px] text-muted-foreground uppercase tracking-widest mr-2">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-base text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <HatchDivider />

          {/* Process - same load-path rule, heavier joints */}
          <section
            id="process"
            ref={(el) => { sectionRefs.current.process = el; }}
            className="scroll-mt-28"
          >
            <h2 className=" text-xs font-bold uppercase tracking-widest text-accent mb-6">
              Our Process
            </h2>
            <ol className="border-l-2 border-primary/30 pl-6 space-y-7">
              {service.process.map((step, i) => (
                <li key={step} className="relative">
                  <span className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-primary text-primary-foreground text-[9px] font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <div className=" text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                    Step {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="text-base font-semibold text-foreground">{step}</div>
                </li>
              ))}
            </ol>
          </section>

          <HatchDivider />

          {/* Benefits */}
          <section
            id="benefits"
            ref={(el) => { sectionRefs.current.benefits = el; }}
            className="scroll-mt-28"
          >
            <h2 className=" text-xs font-bold uppercase tracking-widest text-accent mb-6">
              Client Benefits
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {service.benefits.map((item) => (
                <span
                  key={item}
                  className="border border-border px-3 py-1.5 text-xs  uppercase tracking-wide text-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </section>

          {/* Closing CTA */}
          <div className="mt-16 border border-border p-8">
            <div className=" text-[10px] uppercase tracking-widest text-accent mb-2">
              Next Step
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">
              Discuss your {service.title.toLowerCase()} requirements
            </h3>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary text-primary-foreground px-6 py-3 text-sm font-bold hover:bg-accent transition-colors"
            >
              Get in Touch
              <Icon name="ArrowRightIcon" size={16} />
            </Link>
          </div>

          {/* Prev / Next */}
          <div className="mt-10 pt-8 border-t border-border flex items-center justify-between gap-4 text-sm">
            {prev ? (
              <Link
                href={`/services/${prev.slug}`}
                className="group flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
              >
                <Icon name="ArrowLeftIcon" size={14} />
                <span className="truncate">{prev.title}</span>
              </Link>
            ) : (
              <span />
            )}
            {next && (
              <Link
                href={`/services/${next.slug}`}
                className="group flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors text-right"
              >
                <span className="truncate">{next.title}</span>
                <Icon name="ArrowRightIcon" size={14} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}