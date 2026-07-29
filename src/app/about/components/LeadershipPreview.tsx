'use client';
import React, { useEffect, useRef, useState } from 'react';


const leaders = [
  {
    name: 'Mr. Govindrao M. Kakde',
    designation: 'Founder & Main Pillar',
    bio: 'B.E. (Civil) and M.Tech. (Structural) with a distinguished career beginning self-practice in 1978. Serves on panels for IIT Bombay, MIDC, and the University of Mumbai, personally executing over 200 building rehabilitation works.',
    expertise: ['Structural Design Engineering', 'Licensed Surveyor (MCGM)', 'Material & NDT Testing'],
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_171b8b612-1765822393812.png",
    alt: 'Senior engineering executive in formal attire at a construction site with blueprints',
    initials: 'GK'
  },
  {
    name: 'Mr. Dinesh G. Kakde',
    designation: 'Director / Civil Engineer',
    bio: 'B.E. in Civil Engineering from the University of Southampton, UK, and member of ICE & IStructE. Joined the group in 2007, leading major projects like the 1000-seat Babasaheb Ambedkar Marathwada University Auditorium and large residential developments.',
    expertise: ['Project Construction Management', 'Contracts & Agreements', 'Health & Safety (CSCS)'],
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1268aee4b-1772070309082.png",
    alt: 'Professional engineering director reviewing project documents in a modern office',
    initials: 'DK'
  },
  {
    name: 'Ms. Swati Govindrao Kakde',
    designation: 'Director / Architect & Planner',
    bio: 'B.Arch. and P.G.D.M. graduate who has served as a firm and team leader since 2003. Specializes in extensive master planning, institutional campus design, and critical analyses of SRA housing modules.',
    expertise: ['Architectural Design', 'Master Urban Planning', 'SRA Scheme Design'],
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a9dd09e3-1772142931280.png",
    alt: 'Female architect presenting architectural drawings and 3D models in a design studio',
    initials: 'SK'
  },
  {
    name: 'Mrs. Sheela G. Kakde',
    designation: 'Director & Shareholder',
    bio: 'Core member of the executive structure holding a major 30% stakeholder share pattern within G. M. Kakde Engineering Consultants Pvt. Ltd.',
    expertise: ['Corporate Management', 'Strategic Operations', 'Shareholder Relations'],
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_13aba0c5b-1765528006243.png",
    alt: 'Corporate executive in formal attire within a professional boardroom setting',
    initials: 'SK'
  }
];


function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {if (e.isIntersecting) setInView(true);}, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function LeaderCard({ leader, index }: {leader: typeof leaders[0];index: number;}) {
  const { ref, inView } = useInView(0.1);
  return (
    <div
      ref={ref}
      className={`group bg-white border border-border/50 rounded-sm overflow-hidden card-hover transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${index * 100}ms` }}>
      
      {/* Image area */}
      <div className="relative h-56 bg-primary/5 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 rounded-full bg-primary/10 border-2 border-accent/20 flex items-center justify-center">
            <span className="text-2xl font-bold text-primary/40">{leader.initials}</span>
          </div>
        </div>
        {/* Gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
        {/* Designation badge */}
        <div className="absolute top-4 left-4">
          <span className="px-2.5 py-1 bg-primary/90 text-accent text-[10px] font-bold tracking-widest uppercase rounded-sm">
            {leader.designation}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-primary mb-2">{leader.name}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{leader.bio}</p>

        {/* Expertise tags */}
        <div className="flex flex-wrap gap-1.5">
          {leader.expertise.map((tag) =>
          <span key={tag} className="px-2 py-0.5 bg-muted text-muted-foreground text-[11px] font-medium rounded-sm border border-border/50">
              {tag}
            </span>
          )}
        </div>

        {/* Bottom accent line */}
        <div className="mt-5 pt-4 border-t border-border/50 flex items-center justify-between">
          <span className="text-[11px] text-muted-foreground/60 font-medium tracking-wide">G. M. Kakde Engineering</span>
          <div className="w-6 h-0.5 bg-accent/40 group-hover:w-12 transition-all duration-300 rounded-full" />
        </div>
      </div>
    </div>);

}

export default function LeadershipPreview() {
  const { ref: headRef, inView: headInView } = useInView(0.2);

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-secondary/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headRef}
          className={`flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6 transition-all duration-700 ${headInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="gold-line" />
              <span className="text-accent text-xs font-bold tracking-[0.4em] uppercase">The Team</span>
            </div>
            <h2 className="text-section-xl font-bold text-primary tracking-tight">
              Leadership <span className="gold-shimmer">Team</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-sm max-w-lg leading-relaxed">
              Decades of combined expertise across structural engineering, architecture, urban planning, and project management.
            </p>
          </div>
          <a
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 border border-primary/20 text-primary text-sm font-semibold rounded-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 group">
            
            Work With Us
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {leaders.map((leader, i) =>
          <LeaderCard key={leader.name} leader={leader} index={i} />
          )}
        </div>
      </div>
    </section>);

}