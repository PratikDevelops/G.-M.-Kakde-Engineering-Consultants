import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Icon from '@/components/ui/AppIcon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { allServices, getServiceBySlug, getAdjacentServices } from '@/data/services';

export function generateStaticParams() {
  return allServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};

  return {
    title: `${service.title} - G. M. Kakde Engineering Consultants`,
    description: service.overview,
  };
}

export default function ServicePage({
  params,
}: {
  params: { slug: string };
}) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const { prev, next } = getAdjacentServices(service.slug);

  return (
    <>
      <Header />

      <main className="min-h-screen bg-background text-foreground antialiased selection:bg-accent/20 selection:text-foreground">

        {/* 1. HERO / BREADCRUMB + TITLE BLOCK */}
        <section className="relative pt-32 pb-20 bg-primary overflow-hidden">
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                'linear-gradient(rgba(212,175,55,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.3) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

            {/* BREADCRUMB */}
            <nav
              aria-label="Breadcrumb"
              className="mb-10 animate-fade-in-up"
              style={{ animationDelay: '0ms' }}
            >
              <ol className="flex items-center gap-2 text-sm text-primary-foreground/50 overflow-x-auto">
                <li className="flex items-center gap-2">
                  <Link href="/" className="hover:text-accent transition-colors">Home</Link>
                  <Icon name="ChevronRightIcon" size={11} className="text-primary-foreground/20 shrink-0" />
                </li>
                <li className="flex items-center gap-2">
                  <Link href="/services" className="hover:text-accent transition-colors">Services</Link>
                  <Icon name="ChevronRightIcon" size={11} className="text-primary-foreground/20 shrink-0" />
                </li>
                <li aria-current="page" className="text-accent font-bold">
                  {service.title}
                </li>
              </ol>
            </nav>

            {/* TITLE BLOCK */}
            <div
              className="grid lg:grid-cols-12 gap-8 items-end animate-fade-in-up"
              style={{ animationDelay: '100ms' }}
            >
              <div className="lg:col-span-9 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="gold-line" />
                  <span className="text-accent text-xs font-bold tracking-[0.4em] uppercase">
                    Our Services
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground tracking-tight leading-[0.95]">
                  {service.title.split(' ').map((word, i) => (
                    <span key={i} className={i % 2 === 1 ? 'gold-shimmer' : ''}>
                      {word}{' '}
                    </span>
                  ))}
                </h1>
                <p className="text-primary-foreground/60 text-lg leading-relaxed max-w-3xl">
                  {service.tagline}
                </p>
              </div>

              <div className="lg:col-span-3 flex lg:flex-col justify-between items-start lg:items-end gap-6">
                <div className="w-14 h-14 rounded-sm border border-primary-foreground/15 bg-primary-foreground/[0.03] flex items-center justify-center">
                  <Icon name={service.icon as Parameters<typeof Icon>[0]['name']} size={24} className="text-accent" />
                </div>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-sm bg-accent px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-primary transition-colors hover:bg-primary-foreground"
                >
                  Initiate Consultation
                  <Icon name="ArrowRightIcon" size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* MAIN BODY WRAPPER */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 section-padding space-y-28">

          {/* 2. OVERVIEW + IMAGE */}
          <section className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-3">
                <div className="gold-line" />
                <span className="text-accent text-xs font-bold tracking-[0.4em] uppercase">Core Objective</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground leading-tight">
                Engineering <span className="gold-shimmer">Overview</span>
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                {service.overview}
              </p>
              <p className="text-base text-muted-foreground/80 leading-relaxed">
                {service.description}
              </p>
              {service.industries && service.industries.length > 0 && (
                <div className="space-y-3 pt-6 border-t border-border">
                  <h4 className="  text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold">
                    Sector Focus
                  </h4>
                  <ul className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-foreground/80">
                    {service.industries.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="lg:col-span-7">
              <div className="relative aspect-[16/10] w-full rounded-sm overflow-hidden border border-border bg-card grayscale hover:grayscale-0 transition-all duration-700">
                <Image
                  src={service.overviewImage || '/images/placeholder.jpg'}
                  alt={`${service.title} Overview Blueprint`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* ASYMMETRICAL SPLIT - TIMELINE & CAPABILITIES */}
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-20">

            {/* 4. PROCESS TIMELINE */}
            <section className="lg:col-span-5 space-y-8 lg:sticky lg:top-24 self-start">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="gold-line" />
                  <span className="text-accent text-xs font-bold tracking-[0.4em] uppercase">01 / Execution</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground">
                  Operational <span className="gold-shimmer">Process</span>
                </h2>
              </div>
              <div className="relative border-l border-border ml-3 space-y-12">
                {service.process.map((step, i) => (
                  <div key={step.title} className="relative pl-8 group">
                    <div className="absolute -left-[4.5px] top-1.5 w-2 h-2 rounded-full bg-border group-hover:bg-accent transition-colors" />
                    <div className="space-y-1">
                      <span className="  text-[10px] text-accent block font-bold">PHASE 0{i + 1}</span>
                      <h4 className="text-base font-bold text-foreground">{step.title}</h4>
                      <p className="text-base text-muted-foreground leading-relaxed max-w-xl">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 5. CAPABILITIES GRID */}
            <section className="lg:col-span-7 space-y-6 self-center">
              <div className="grid md:grid-cols-2 gap-6">

                {/* Parameters Card */}
                <div className="p-8 border border-border bg-card rounded-sm group card-hover">
                  <div className="w-12 h-12 rounded-sm bg-primary/5 group-hover:bg-accent/10 flex items-center justify-center mb-6 transition-colors duration-300">
                    <Icon name="SlidersIcon" size={20} className="text-primary group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <h3 className="  text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold mb-4">
                    02 / Parameters &amp; Key Features
                  </h3>
                  <ul className="space-y-3">
                    {service.keyFeatures.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-base text-muted-foreground leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 h-0.5 bg-border group-hover:bg-accent/40 transition-colors duration-500 origin-left scale-x-0 group-hover:scale-x-100" />
                </div>

                {/* Deliverables Card */}
                <div className="p-8 border border-border bg-card rounded-sm group card-hover">
                  <div className="w-12 h-12 rounded-sm bg-primary/5 group-hover:bg-accent/10 flex items-center justify-center mb-6 transition-colors duration-300">
                    <Icon name="BriefcaseIcon" size={20} className="text-primary group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <h3 className="  text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold mb-4">
                    03 / Structural Deliverables
                  </h3>
                  <ul className="space-y-3">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-base text-muted-foreground leading-relaxed">
                        <span className="text-accent shrink-0 select-none text-xs mt-0.5  ">&rarr;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 h-0.5 bg-border group-hover:bg-accent/40 transition-colors duration-500 origin-left scale-x-0 group-hover:scale-x-100" />
                </div>

              </div>
            </section>
          </div>

          {/* 7. BENEFITS */}
          <section className="space-y-12">
            <div className="max-w-2xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="gold-line" />
                <span className="text-accent text-xs font-bold tracking-[0.4em] uppercase">Performance Advantages</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                Strategic <span className="gold-shimmer">Benefits</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {service.benefits.map((item, i) => (
                <div
                  key={i}
                  className="p-8 border border-border bg-card rounded-sm group card-hover"
                >
                  <div className="w-8 h-8 rounded-sm bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-primary/5 transition-colors duration-300">
                    <Icon name="CheckBadgeIcon" size={20} className="text-accent group-hover:text-primary transition-colors duration-300" />
                  </div>
                  <p className="text-muted-foreground text-base leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {item}
                  </p>
                  <div className="mt-6 h-0.5 bg-border group-hover:bg-accent/40 transition-colors duration-500 origin-left scale-x-0 group-hover:scale-x-100" />
                </div>
              ))}
            </div>
          </section>

          {/* 8. FAQ */}
          <section className="space-y-8">
            <div className="max-w-2xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="gold-line" />
                <span className="text-muted-foreground text-xs font-bold tracking-[0.4em] uppercase">05 / Inquiry Ledger</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                Frequently Asked <span className="gold-shimmer">Questions</span>
              </h2>
            </div>

            <div className="border-t border-border divide-y divide-border">
              {service.faqs.map((faq) => (
                <details key={faq.question} className="group py-6 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between gap-4 cursor-pointer list-none select-none">
                    <span className="text-base font-bold text-foreground group-hover:text-accent transition-colors">
                      {faq.question}
                    </span>
                    <div className="text-muted-foreground group-hover:text-foreground group-open:rotate-45 transition-transform duration-300">
                      <Icon name="PlusIcon" size={16} />
                    </div>
                  </summary>
                  <div className="pt-4 text-base text-muted-foreground leading-relaxed max-w-2xl">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* 9. CTA - TITLE BLOCK STYLE */}
          <section className="relative border border-border bg-card rounded-sm p-12 text-center space-y-6 group">
            <div className="max-w-xl mx-auto space-y-4">
              <div className="flex items-center justify-center gap-3">
                <div className="gold-line" />
                <span className="text-accent text-xs font-bold tracking-[0.4em] uppercase">Deployment Phase</span>
                <div className="gold-line" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                Ready to engineer your next <span className="gold-shimmer">architecture matrix</span>?
              </h3>
              <p className="text-base text-muted-foreground">
                Let&apos;s set parameters, map vectors, and execute an optimized technical development framework tailored around your infrastructure goals.
              </p>
            </div>
            <div>
              <Link
                href="/contact"
                className="group/btn inline-flex items-center gap-2 rounded-sm bg-primary px-8 py-4 text-xs font-bold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-accent"
              >
                Initiate System Architecture Setup
                <Icon name="ArrowRightIcon" size={14} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
              </Link>
            </div>
            <div className="mt-6 h-0.5 bg-border group-hover:bg-accent/30 transition-colors duration-500 origin-left scale-x-0 group-hover:scale-x-100" />
          </section>

          {/* 10. PREVIOUS / NEXT SERVICE */}
          {(prev || next) && (
            <nav className="pt-12 border-t border-border grid sm:grid-cols-2 gap-8 items-center">
              {prev ? (
                <Link
                  href={`/services/${prev.slug}`}
                  className="group flex flex-col space-y-2 transition-opacity hover:opacity-80"
                >
                  <span className="  text-[9px] uppercase tracking-[0.25em] text-muted-foreground font-bold">
                    &larr; Previous System
                  </span>
                  <span className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                    {prev.title}
                  </span>
                </Link>
              ) : <div />}

              {next ? (
                <Link
                  href={`/services/${next.slug}`}
                  className="group flex flex-col items-end text-right space-y-2 transition-opacity hover:opacity-80"
                >
                  <span className="  text-[9px] uppercase tracking-[0.25em] text-muted-foreground font-bold">
                    Next System &rarr;
                  </span>
                  <span className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                    {next.title}
                  </span>
                </Link>
              ) : <div />}
            </nav>
          )}

        </div>
      </main>

      <Footer />
    </>
  );
}