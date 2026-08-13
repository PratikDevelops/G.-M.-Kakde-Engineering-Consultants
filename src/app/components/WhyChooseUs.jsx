'use client';
import React, { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

const reasons = [
  {
    icon: 'TrophyIcon',
    title: '45+ Years Track Record',
    desc: 'Unbroken legacy of engineering excellence from 1978, with repeat mandates from government bodies and private developers.',
  },
  {
    icon: 'BuildingLibraryIcon',
    title: 'Government Empanelments',
    desc: 'Empanelled with MMRDA, CIDCO, MHADA, NMMC, and 20+ municipal corporations across Maharashtra.',
  },
  {
    icon: 'UsersIcon',
    title: 'Multidisciplinary Team',
    desc: '50+ expert professionals across civil, structural, architectural, urban planning, and environmental domains.',
  },
  {
    icon: 'MapPinIcon',
    title: 'Mumbai-Based, Pan-Maharashtra Reach',
    desc: 'Headquartered in Mumbai, with project experience spanning municipal corporations and developers across the state.',
  },
  {
    icon: 'CheckBadgeIcon',
    title: 'ISO Certified Quality',
    desc: 'Rigorous quality management systems ensuring every deliverable meets international standards.',
  },
  {
    icon: 'LightBulbIcon',
    title: 'Innovation-Driven',
    desc: 'Adoption of BIM, GIS, drone surveys, and advanced structural analysis software for precision delivery.',
  },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center max-w-2xl mx-auto mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="gold-line" />
            <span className="text-accent text-xs font-bold tracking-[0.4em] uppercase">Why Choose Us</span>
            <div className="gold-line" />
          </div>
          <h2 className="text-section-xl font-bold text-foreground tracking-tight">
            The <span className="gold-shimmer">Difference</span> We Bring
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <div
              key={reason.title}
              className={`p-8 border border-border rounded-sm group card-hover bg-card
                transition-all duration-600 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-14 h-14 bg-primary/5 group-hover:bg-accent/10 rounded-sm flex items-center justify-center mb-6 transition-colors duration-300">
                <Icon
                  name={reason.icon}
                  size={26}
                  className="text-primary group-hover:text-accent transition-colors duration-300"
                />
              </div>
              <h3 className="text-base font-bold text-foreground mb-3 tracking-tight">{reason.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{reason.desc}</p>
              <div className="mt-5 h-0.5 bg-border group-hover:bg-accent/40 transition-colors duration-500 origin-left scale-x-0 group-hover:scale-x-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}