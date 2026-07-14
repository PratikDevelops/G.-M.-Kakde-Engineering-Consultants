'use client';
import React, { useEffect, useRef, useState } from 'react';

const values = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Technical Integrity',
    description: 'Every calculation, drawing, and recommendation is backed by rigorous engineering analysis. We never compromise on technical accuracy.',
    span: 'col-span-1 row-span-1',
    accent: false,
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: 'Client Partnership',
    description: 'We treat every client as a long-term partner. Their project goals become our professional commitment from inception to handover.',
    span: 'col-span-1 row-span-1',
    accent: false,
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    title: 'Innovation',
    description: 'We continuously adopt modern engineering tools, BIM workflows, and sustainable design principles to deliver future-ready infrastructure.',
    span: 'col-span-1 md:col-span-2 row-span-1',
    accent: true,
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: 'Sustainability',
    description: 'Environmental responsibility is embedded in our design philosophy. We plan infrastructure that minimises ecological impact and serves future generations.',
    span: 'col-span-1 row-span-1',
    accent: false,
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
    title: 'Accountability',
    description: 'Transparent reporting, honest timelines, and clear cost management. We are accountable to our clients, our profession, and the public who use our infrastructure.',
    span: 'col-span-1 row-span-1',
    accent: false,
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    title: 'Knowledge & Excellence',
    description: 'Continuous professional development, mentorship, and knowledge-sharing define our culture. Excellence is not a target - it is our baseline.',
    span: 'col-span-1 md:col-span-2 row-span-1',
    accent: false,
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref?.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    obs?.observe(el);
    return () => obs?.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function CoreValues() {
  const { ref: headRef, inView: headInView } = useInView(0.2);

  return (
    <section className="section-padding bg-muted relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-accent/5 blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headRef}
          className={`mb-14 transition-all duration-700 ${headInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="gold-line" />
            <span className="text-accent text-xs font-bold tracking-[0.4em] uppercase">What We Stand For</span>
          </div>
          <h2 className="text-section-xl font-bold text-primary tracking-tight max-w-xl">
            Core <span className="gold-shimmer">Values</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-sm max-w-lg leading-relaxed">
            These principles have guided every project, every team, and every client relationship since our founding.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto">
          {values?.map((v, i) => {
            const { ref, inView } = useInView(0.1);
            return (
              <div
                key={v?.title}
                ref={ref}
                className={`
                  ${v?.span}
                  ${v?.accent ? 'bg-primary text-primary-foreground' : 'bg-white text-primary'}
                  rounded-sm p-8 border border-border/50 card-hover group relative overflow-hidden
                  transition-all duration-700
                  ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                `}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {v?.accent && (
                  <div className="absolute inset-0 grain-overlay opacity-[0.03] pointer-events-none" />
                )}
                <div className={`mb-5 w-12 h-12 rounded-sm flex items-center justify-center ${v?.accent ? 'bg-accent/15 text-accent' : 'bg-primary/5 text-secondary'} group-hover:scale-110 transition-transform duration-300`}>
                  {v?.icon}
                </div>
                <h3 className={`text-lg font-bold mb-3 ${v?.accent ? 'text-primary-foreground' : 'text-primary'}`}>
                  {v?.title}
                </h3>
                <p className={`text-sm leading-relaxed ${v?.accent ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                  {v?.description}
                </p>
                {/* Accent line on hover */}
                <div className={`absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 ${v?.accent ? 'bg-accent' : 'bg-secondary'}`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
