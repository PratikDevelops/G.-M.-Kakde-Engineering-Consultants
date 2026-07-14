'use client';
import React, { useEffect, useRef, useState } from 'react';

const milestones = [
  {
    year: '1978',
    title: 'Inception of Self-Practice',
    description: 'Mr. G. M. Kakde gives up previous engineering services to start his independent self-practice as a structural design engineer and licensed surveyor.',
    tag: 'Origin',
  },
  {
    year: '1990',
    title: 'Early Landmark Projects',
    description: 'Successfully completes key early rehabilitation and structural consulting works, including Hostel No. 7 at IIT Bombay and projects for the International Airport Authority of India (IAAI).',
    tag: 'Milestone',
  },
  {
    year: '1991',
    title: 'Regional Master Planning',
    description: 'Expands into major urban infrastructure mapping by preparing the 50 Sq. Km. Master Plan for New Aurangabad on behalf of CIDCO.',
    tag: 'Expansion',
  },
  {
    year: '1995',
    title: 'Private Limited Incorporation',
    description: 'Formally incorporated as G. M. Kakde Engineering Consultants Pvt. Ltd. under the Companies Act, 1956 on January 3rd, bringing together a multidisciplinary corporate structure.',
    tag: 'Corporate',
  },
  {
    year: '1999',
    title: 'Large-Scale Infrastructure & Housing',
    description: 'Delivers vast public-sector projects, including the 35-acre Mankhurd housing complex for MHADA and regional planning blueprints for Nagpur International Airport.',
    tag: 'Growth',
  },
  {
    year: '2007',
    title: 'Institutional Campus Architecture',
    description: 'Completes major educational infrastructure designs, delivering the 724-acre master plan and sports complex blueprints for Dr. Babasaheb Ambedkar Marathwada University (BAMU).',
    tag: 'Achievement',
  },
  {
    year: '2014',
    title: 'SRA Redevelopment Milestone',
    description: 'Successfully completes the major structural engineering and rehabilitation project for Om Shivshankar C.H.S. in Parel, Mumbai.',
    tag: 'Recognition',
  },
  {
    year: '2019',
    title: 'Smart City & Public Infrastructure',
    description: 'Secures and executes comprehensive structural consultancy and project management roles for municipal smart city initiatives, drainage systems, and transport infrastructure across Maharashtra.',
    tag: 'Innovation',
  },
  {
    year: '2024',
    title: '500+ Projects & Legacy Portfolio',
    description: 'Surpasses a historic milestone of over 500 completed projects across residential, commercial, institutional, and government infrastructure sectors.',
    tag: 'Present',
  }
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function TimelineCard({ milestone, align }: { milestone: typeof milestones[0]; align: 'left' | 'right' }) {
  return (
    <div className={align === 'left' ? 'text-right' : 'text-left'}>
      <span className="inline-block px-2.5 py-0.5 bg-accent/10 text-accent text-[10px] font-bold tracking-widest uppercase rounded-sm mb-2">
        {milestone.tag}
      </span>
      <h3 className="text-base sm:text-lg font-bold text-primary mb-1 break-words">{milestone.title}</h3>
      <p className={`text-sm text-muted-foreground leading-relaxed break-words ${align === 'left' ? 'ml-auto' : ''} max-w-xs sm:max-w-sm`}>
        {milestone.description}
      </p>
    </div>
  );
}

function TimelineItem({ milestone, index }: { milestone: typeof milestones[0]; index: number }) {
  const { ref, inView } = useInView(0.1);
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative grid grid-cols-[2.5rem_1fr] sm:grid-cols-[3.5rem_1fr] md:grid-cols-[1fr_4rem_1fr] items-start gap-x-3 sm:gap-x-4 md:gap-x-8 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      {/* Left content - desktop only */}
      <div className="hidden md:flex flex-col items-end justify-self-end w-full">
        {isLeft && <TimelineCard milestone={milestone} align="left" />}
      </div>

      {/* Spine node - spans mobile col 1 and desktop col 2 */}
      <div className="col-start-1 md:col-start-2 row-start-1 flex justify-center shrink-0">
        <div className="flex flex-col items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-primary border-2 border-accent/40 shadow-lg shadow-primary/20 relative z-10">
          <span className="text-accent font-bold text-[9px] sm:text-[10px] md:text-xs leading-tight text-center">
            {milestone.year}
          </span>
        </div>
      </div>

      {/* Right content - desktop only */}
      <div className="hidden md:flex flex-col justify-self-start w-full">
        {!isLeft && <TimelineCard milestone={milestone} align="right" />}
      </div>

      {/* Mobile & tablet content - single column right of spine */}
      <div className="col-start-2 row-start-1 md:hidden flex flex-col pt-1">
        <span className="inline-block px-2.5 py-0.5 bg-accent/10 text-accent text-[10px] font-bold tracking-widest uppercase rounded-sm mb-2 w-fit">
          {milestone.tag}
        </span>
        <h3 className="text-base font-bold text-primary mb-1 break-words">{milestone.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed break-words">{milestone.description}</p>
      </div>
    </div>
  );
}

export default function CompanyTimeline() {
  const { ref: headRef, inView: headInView } = useInView(0.2);

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{ backgroundImage: 'radial-gradient(circle, #0B1F3A 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headRef}
          className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${headInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="gold-line" />
            <span className="text-accent text-xs font-bold tracking-[0.3em] sm:tracking-[0.4em] uppercase">Since 1978</span>
            <div className="gold-line" />
          </div>
          <h2 className="text-section-xl font-bold text-primary tracking-tight">
            Our <span className="gold-shimmer">Journey</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-sm max-w-xl mx-auto leading-relaxed px-2">
            Nearly five decades of continuous growth, from a single practitioner to a nationally recognised multidisciplinary consultancy.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical spine line: aligns with node center at every breakpoint */}
          <div className="absolute left-5 sm:left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/20 to-transparent md:-translate-x-px" />

          <div className="flex flex-col gap-8 sm:gap-10 md:gap-12">
            {milestones.map((m, i) => (
              <TimelineItem key={m.year} milestone={m} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}