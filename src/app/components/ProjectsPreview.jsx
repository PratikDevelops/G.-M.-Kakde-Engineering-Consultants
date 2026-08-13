'use client';
import React, { useEffect, useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Link from 'next/link';

const projects = [
  {
    title: 'Oxford International School',
    category: 'Educational Building',
    location: 'Kandivali, Mumbai',
    year: '2004',
    image: "/assets/images/Oxford School.jpg",
    alt: 'Exterior facade of a modern 7-story institutional building complex with vibrant blue and white architectural highlights',
    span: 'lg:col-span-2'
  },
  {
    title: 'Indira Gandhi College of Engineering',
    category: 'Institutional Infrastructure',
    location: 'Aurangabad, MH',
    year: '2007',
    image: "/assets/images/Indira Gandhi College of Engineering.jpeg",
    alt: 'Interior layout of a well-lit museum exhibition hall displaying ancient stone artifacts, sculptures, and glass cabinets',
    span: 'lg:col-span-2'
  },
  {
    title: 'Dr. Babasaheb Ambedkar Marathwada University Auditorium',
    category: 'Institutional Architecture',
    location: 'Aurangabad, MH',
    year: '2007',
    image: "/assets/images/Babasaheb Ambedkar Marathwada University Auditorium.webp",
    alt: 'Large custom-designed institutional auditorium building with a cream stone facade and traditional ornamental domes, tailored for rural theatrical development',
    span: 'lg:col-span-2'
  },
  {
    title: 'Dr. Babasaheb Ambedkar Marathwada University',
    category: 'Institutional Architecture',
    location: 'Aurangabad, MH',
    year: '2007',
    image: "/assets/images/Babasaheb Ambedkar Marathwada University University.jpg",
    alt: 'Large custom-designed institutional auditorium building with a cream stone facade and traditional ornamental domes, tailored for rural theatrical development',
    span: 'lg:col-span-2'
  },
  // {
  //   title: 'Om Shivshankar CHS',
  //   category: 'SRA Redevelopment',
  //   location: 'Parel, Mumbai',
  //   year: '2014',
  //   image: "/assets/images/Ongoing - Kakde Residence - Om Shivshankar CHS.webp",
  //   alt: 'Close-up view of mid-construction concrete framing and brickwork for a modern residential skyscraper development',
  //   span: 'lg:col-span-1'
  // },
  // {
  //   title: 'The Bombay One (Vaibhavi CHS)',
  //   category: 'Residential Development',
  //   location: 'South Mumbai, MH',
  //   year: 'Ongoing',
  //   image: "/assets/images/The Bombay One.webp",
  //   alt: 'Nighttime architectural 3D rendering of premium futuristic twin skyscraper towers connected by an elevated rooftop sky bridge and pool terrace area',
  //   span: 'lg:col-span-1'
  // }
];


export default function ProjectsPreview() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {if (entry.isIntersecting) setVisible(true);},
      { threshold: 0.1 }
    );
    if (ref?.current) observer?.observe(ref?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col md:flex-row justify-between items-end gap-6 mb-12 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="gold-line" />
              <span className="text-accent text-xs font-bold tracking-[0.4em] uppercase">Featured Projects</span>
            </div>
            <h2 className="text-section-xl font-bold text-foreground tracking-tight">
              500+ Projects,{' '}
              <span className="gold-shimmer">One Standard</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-xs text-sm leading-relaxed">
            From metro rail corridors to affordable housing - our portfolio spans every domain of infrastructure.
          </p>
        </div>

        {/*
           BENTO GRID AUDIT:
           Array has 4 cards: Metro, MHADA, PuneRoad, Aurangabad
           Row 1: [col-1,2: Metro cs-2 rs-2] [col-3: MHADA cs-1] [col-4: PuneRoad cs-1]
           Row 2: [col-1,2: Metro (continued)] [col-3,4: Aurangabad cs-2]
           Placed 4/4 ✓
          */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-6" style={{ minHeight: '600px' }}>
          {projects?.map((project, i) =>
          <div
            key={project?.title}
            className={`${project?.span} relative overflow-hidden rounded-sm group cursor-pointer
                transition-all duration-700 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            style={{ transitionDelay: `${i * 120}ms`, minHeight: i === 0 ? '400px' : '180px' }}>
            
              <AppImage
              src={project?.image}
              alt={project?.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw" />
            
              {/* Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                {/* <span className="inline-block px-3 py-1 bg-accent/90 text-accent-foreground text-[10px] font-bold uppercase tracking-widest rounded-sm mb-3">
                  {project?.category}
                </span> */}
                <h3 className="text-primary-foreground font-bold text-base leading-tight mb-1">{project?.title}</h3>
                <div className="flex items-center gap-3 text-primary-foreground/60 text-xs">
                  {/* <span>{project?.location}</span>
                  <span>·</span>
                  <span>{project?.year}</span> */}
                </div>
              </div>
            </div>
          )}
        </div>
        <div
          className={`mt-12 flex justify-center transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '700ms' }}
        >
          <div className="mt-10 text-center">
          <Link
            href="/projects"
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
            View All Projects
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
        </div>
      </div>
    </section>);

}