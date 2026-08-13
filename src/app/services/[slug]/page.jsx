import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Icon from '@/components/ui/AppIcon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { allServices, getServiceBySlug, getAdjacentServices } from '@/data/services';

export function generateStaticParams() {
  return allServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }) {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};

  return {
    title: `${service.title} - G. M. Kakde Engineering Consultants`,
    description: service.overview,
  };
}

export default function ServicePage({ params }) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const { prev, next } = getAdjacentServices(service.slug);

  return (
    <>
      <Header />

      <main className="min-h-screen bg-background text-foreground antialiased selection:bg-accent selection:text-primary">
        
        {/* HERO SECTION - Restored to exact original design per your request */}
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
            <nav aria-label="Breadcrumb" className="mb-10 animate-fade-in-up" style={{ animationDelay: '0ms' }}>
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

            <div className="grid lg:grid-cols-12 gap-8 items-end animate-fade-in-up" style={{ animationDelay: '100ms' }}>
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
                  {service.overview}
                </p>
              </div>
              <div className="lg:col-span-3 flex flex-col gap-4">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-accent/10 border border-accent/20">
                  <Icon name={service.icon} size={28} className="text-accent" />
                </div>
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-sm bg-accent px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-primary transition-all hover:bg-primary-foreground hover:shadow-lg"
                >
                  Initiate Consultation
                  <Icon name="ArrowRightIcon" size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* MAIN BODY */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 section-padding space-y-24">
          
          {/* 1. OVERVIEW */}
          <section className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="gold-line" />
                <span className="text-accent text-xs font-bold tracking-[0.4em] uppercase">01 / Objective</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Strategic <span className="gold-shimmer">Overview</span>
              </h2>
              <p className="text-xl font-light text-foreground leading-relaxed border-l-2 border-accent pl-4">
                {service.overview}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
              
              {service.industries && service.industries.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-4">
                  {service.industries.map((item) => (
                    <span key={item} className="px-3 py-1.5 rounded-sm bg-muted text-muted-foreground text-xs font-bold uppercase tracking-wider">
                      {item}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <div className="relative aspect-[4/3] rounded-md overflow-hidden border border-border shadow-lg">
              <Image src={service.overviewImage || '/images/placeholder.jpg'} alt={service.title} fill className="object-cover" />
            </div>
          </section>

          {/* 2. CAPABILITIES */}
          <section className="grid md:grid-cols-2 gap-8">
            <div className="p-8 border border-border bg-card rounded-md card-hover space-y-6">
              <div className="w-12 h-12 rounded-sm bg-muted flex items-center justify-center">
                <Icon name="SlidersIcon" size={24} className="text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Parameters & Features</h3>
              <ul className="space-y-3">
                {service.keyFeatures.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 border border-border bg-card rounded-md card-hover space-y-6">
              <div className="w-12 h-12 rounded-sm bg-muted flex items-center justify-center">
                <Icon name="BriefcaseIcon" size={24} className="text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Structural Deliverables</h3>
              <ul className="space-y-3">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted-foreground">
                    <Icon name="CheckBadgeIcon" size={18} className="text-accent shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 3. PROCESS & BENEFITS */}
          <section className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-8">
              <div className="flex items-center gap-3">
                <div className="gold-line" />
                <span className="text-accent text-xs font-bold tracking-[0.4em] uppercase">02 / Execution</span>
              </div>
              <h2 className="text-3xl font-bold">Operational <span className="gold-shimmer">Process</span></h2>
              
              <div className="grid sm:grid-cols-2 gap-8 pt-4">
                {service.process.map((step, i) => (
                  <div key={i} className="p-6 border border-border bg-card rounded-md card-hover relative overflow-hidden">
                    <div className="beam-border-h" />
                    <span className="text-accent text-xs font-bold tracking-widest block mb-2">PHASE 0{i + 1}</span>
                    <h4 className="text-lg font-bold text-foreground mb-3">{step.title}</h4>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 space-y-8">
              <div className="flex items-center gap-3">
                <div className="gold-line" />
                <span className="text-accent text-xs font-bold tracking-[0.4em] uppercase">Advantages</span>
              </div>
              <ul className="space-y-4">
                {service.benefits.map((item, i) => (
                  <li key={i} className="flex items-center gap-4 p-4 border border-border rounded-md bg-muted/50">
                    <Icon name="CheckBadgeIcon" size={20} className="text-accent shrink-0" />
                    <span className="font-semibold text-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 4. FAQ */}
          <section className="max-w-3xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <span className="text-accent text-xs font-bold tracking-[0.4em] uppercase">03 / Inquiry Ledger</span>
              <h2 className="text-3xl font-bold">Frequently Asked <span className="gold-shimmer">Questions</span></h2>
            </div>
            
            <div className="border-t border-border divide-y divide-border">
              {service.faqs.map((faq) => (
                <details key={faq.question} className="group py-5 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between gap-4 cursor-pointer font-bold text-foreground hover:text-accent transition-colors">
                    {faq.question}
                    <Icon name="PlusIcon" size={16} className="text-muted-foreground group-open:rotate-45 transition-transform" />
                  </summary>
                  <p className="pt-4 text-muted-foreground leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          {/* 5. CTA */}
          <section className="bg-primary rounded-md p-12 md:p-16 text-center space-y-8 border border-primary-foreground/10 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 grain-overlay" />
            <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold text-primary-foreground">
                Ready to engineer your next <span className="text-accent">architecture matrix</span>?
              </h3>
              <p className="text-primary-foreground/70">
                Let's set parameters, map vectors, and execute an optimized technical development framework tailored around your infrastructure goals.
              </p>
            </div>
            <Link
              href="/contact"
              className="relative z-10 inline-flex items-center gap-2 rounded-sm bg-accent px-8 py-4 text-xs font-bold uppercase tracking-widest text-primary transition-colors hover:bg-primary-foreground"
            >
              Initiate Deployment
              <Icon name="ArrowRightIcon" size={14} />
            </Link>
          </section>

          {/* PREVIOUS / NEXT */}
          {(prev || next) && (
            <nav className="pt-8 border-t border-border grid sm:grid-cols-2 gap-8">
              {prev ? (
                <Link href={`/services/${prev.slug}`} className="group space-y-2">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold">&larr; Previous System</span>
                  <p className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">{prev.title}</p>
                </Link>
              ) : <div />}

              {next ? (
                <Link href={`/services/${next.slug}`} className="group space-y-2 text-right flex flex-col items-end">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold">Next System &rarr;</span>
                  <p className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">{next.title}</p>
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