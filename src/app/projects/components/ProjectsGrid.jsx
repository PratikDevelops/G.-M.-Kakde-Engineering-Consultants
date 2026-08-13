'use client';
import React, { useEffect, useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';

const CATEGORIES = ['All', 'Residential', 'Commercial', 'Infrastructure', 'Government', 'Bridges', 'Water'];

const projects = [
  {
    id: 1,
    title: 'Mankhurd Mass Housing Project',
    category: 'Residential',
    location: 'Mankhurd, Mumbai, Maharashtra',
    scope: 'Project Management Consultancy & Layout Design',
    year: '2003',
    client: 'MHADA',
    area: '35 Acres (6,600 Tenements)',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00',
    alt: 'Comprehensive residential redevelopment layout showcasing mass housing blocks and urban infrastructure',
    gallery: [
      { src: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be', alt: 'Mass housing complex alignment showing structural layout' },
      { src: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914', alt: 'Completed affordable residential high-rise blocks under SRA scheme' }
    ]
  },
  {
    id: 2,
    title: 'Om Shiv Shankar CHS Rehabilitation',
    category: 'Residential',
    location: 'Parel, Mumbai, Maharashtra',
    scope: 'Structural Design, PMC & Architecture',
    year: '2014',
    client: 'Om Shivshankar C.H.S.',
    area: '72,494 sq.ft. (108 Tenements)',
    image: '/assets/images/Om Shiv Shankar CHS Rehabilitation.jpeg',
    alt: 'High-rise premium residential tower construction using robust structural framework',
    gallery: [
      { src: '/assets/images/Om Shiv Shankar CHS Rehabilitation 2.jpeg', alt: 'Structural tower construction progress showing multiple upper floors' },
      { src: '/assets/images/Om Shiv Shankar CHS Rehabilitation 3.jpeg', alt: 'Interior layout execution and modular kitchen fittings setup' }
    ]
  },
  {
    id: 3,
    title: 'Dr. Babasaheb Ambedkar Marathwada University University Campus Development',
    category: 'Government',
    location: 'Aurangabad, Maharashtra',
    scope: 'Master Layout Planning & Infrastructure Design',
    year: '2007',
    client: 'Dr. Babasaheb Ambedkar Marathwada University',
    area: '724 Acres',
    image: 'https://images.unsplash.com/photo-1562774053-401386dfdf8f',
    alt: 'Expansive educational institution campus master plan showcasing academic zones and roads',
    gallery: [
      { src: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952', alt: 'History Museum building architecture overview within the campus' },
      { src: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f', alt: 'State-of-the-art digital studio facility structure' }
    ]
  },
  {
    id: 4,
    title: 'Dr. Babasaheb Ambedkar Marathwada University Sports Complex & Ground',
    category: 'Infrastructure',
    location: 'Aurangabad, Maharashtra',
    scope: 'Architectural Planning & Structural Design',
    year: '2007',
    client: 'Dr. Babasaheb Ambedkar Marathwada University',
    area: '45 Acres',
    image: 'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff',
    alt: 'Multi-purpose institutional sports complex showcasing cricket stadium layout and athletic zones',
    gallery: [
      { src: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2', alt: 'Aerial blueprint alignment detailing shooting zones and swimming pools' }
    ]
  },
  {
    id: 5,
    title: 'The Bombay One (Vaibhavi CHS)',
    category: 'Residential',
    location: 'South Mumbai, Maharashtra',
    scope: 'Structural Analysis & Property Development',
    year: '2011',
    client: 'Landmark Developers',
    area: '3,57,000 sq.ft. (4 Acre Development)',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00',
    alt: 'Ultra-modern luxury twin residential high-rise towers featuring skybridge and reflective glass facade',
    gallery: [
      { src: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6', alt: 'Reinforced concrete foundation work and heavy machinery operations on site' },
      { src: 'https://images.unsplash.com/photo-1429497495507-335f98c9ff88', alt: 'Structural tower columns casting progress view' }
    ]
  },
  {
    id: 6,
    title: 'Shivprasad CHS SRA Redevelopment',
    category: 'Residential',
    location: 'Sewree, Mumbai, Maharashtra',
    scope: 'Project Management & Structural Design',
    year: '1999',
    client: 'Shiv Shahi Punarvasan Prakalp Ltd. (SPPL)',
    area: '5 Acres (1,040 Tenements)',
    image: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a',
    alt: 'Symmetrical residential towers highlighting urban slum rehabilitation initiatives',
    gallery: [
      { src: 'https://images.unsplash.com/photo-1590069261209-f8e9b8642343', alt: 'Structural framework detailing and housing alignment execution' }
    ]
  },
  {
    id: 7,
    title: 'Oxford International School Building',
    category: 'Government',
    location: 'Kandivali, Mumbai, Maharashtra',
    scope: 'Structural Design & Architectural Supervision',
    year: '2004',
    client: 'Bal Bhagawan Shikshan Prasarak Mandal',
    area: '64,247 sq.ft. (7-Story Complex)',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b',
    alt: 'Multi-story contemporary institutional structure featuring expansive courtyard assembly zone',
    gallery: [
      { src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1', alt: 'Completed structural wing details showing primary academic building block' }
    ]
  },
  {
    id: 8,
    title: 'Latur Earthquake Village Rehabilitation',
    category: 'Infrastructure',
    location: 'Latur District, Maharashtra',
    scope: 'Layout Planning & Infrastructure Construction',
    year: '1997',
    client: 'Unique Service Trust / Lions Club',
    area: '30 Acres (Enegur, Kasti, Tawashi, Kautha, Killari)',
    image: 'https://images.unsplash.com/photo-1590069261209-f8e9b8642343',
    alt: 'Resilient community housing infrastructure setup designed for post-earthquake rehabilitation zones',
    gallery: [
      { src: 'https://images.unsplash.com/photo-1516156008625-3a9d6067ffd5', alt: 'Executed water supply pipeline deployment network maps' },
      { src: 'https://images.unsplash.com/photo-1584467541268-b040f83be3fd', alt: 'Completed single-tier robust township housing block setup' }
    ]
  },
  {
    id: 9,
    title: 'CIDCO New Aurangabad Master Plan',
    category: 'Government',
    location: 'New Aurangabad, Maharashtra',
    scope: 'Urban Regional Planning Consultation',
    year: '1991',
    client: 'CIDCO',
    area: '50 Sq. Km.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    alt: 'Aerial city panaroma showcasing early stage regional planning framework grid lines',
    gallery: [
      { src: 'https://images.unsplash.com/photo-1524813686514-a57563d77965', alt: 'Comprehensive topographical survey mappings and regional planning road models' }
    ]
  },
  {
    id: 10,
    title: 'Wadala Railway Over Bridge',
    category: 'Bridges',
    location: 'Harbour Line, Mumbai, Maharashtra',
    scope: 'Senior Bridge Design Execution',
    year: '1977',
    client: 'FPCC / Shah Construction Company',
    area: 'Pre-stressed Steel & Concrete Structure',
    image: 'https://images.unsplash.com/photo-1544982503-9f984c14501a',
    alt: 'Heavy engineering pre-stressed concrete railway bridge viaduct active over running tracks',
    gallery: [
      { src: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad', alt: 'Pre-stressed bridge girder design engineering profiles' }
    ]
  },
  {
    id: 11,
    title: 'Santacruz Airport Storm Water Infrastructure',
    category: 'Water',
    location: 'Santacruz Airport, Mumbai, Maharashtra',
    scope: 'Public Health Infrastructure Engineering',
    year: '1990',
    client: 'International Airport Authority of India (IAAI)',
    area: 'Comprehensive Terminal Treatment Network',
    image: 'https://images.unsplash.com/photo-1674578745937-c73f81bdda07',
    alt: 'Large industrial drainage water processing system showing treatment chambers near airport runway',
    gallery: [
      { src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5', alt: 'Excavation and alignment mapping of high capacity concrete storm channels' }
    ]
  },
  {
    id: 12,
    title: 'Jidnyasa CHS Housing Development',
    category: 'Residential',
    location: 'Khidkali & Desai, Thane, Maharashtra',
    scope: 'Architectural Layout Planning & Structural Framework',
    year: '2019',
    client: 'G. M. Group Of Creators',
    area: '13 Acres (Multiple Towers Completed)',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00',
    alt: 'Sprawling township infrastructure consisting of multiple completed towers and open green zones',
    gallery: [
      { src: 'https://images.unsplash.com/photo-1513828583688-c52646db42da', alt: 'Excavators preparing structural base layouts on site grounds' },
      { src: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa', alt: 'Completed modular apartment structures with landscape paths' }
    ]
  }
];

function GalleryModal({ project, onClose }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const allImages = [{ src: project.image, alt: project.alt }, ...project.gallery];
  const panelWidth = 100 / allImages.length;

  const goNext = () => setActiveIdx((i) => (i + 1) % allImages.length);
  const goPrev = () => setActiveIdx((i) => (i - 1 + allImages.length) % allImages.length);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allImages.length, onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] bg-primary/95 nav-blur flex flex-col"
      onClick={onClose}>

      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-primary-foreground/10 flex-shrink-0" onClick={(e) => e.stopPropagation()}>
        <div>
          <span className="inline-block px-2.5 py-0.5 bg-accent/20 text-accent text-[10px] font-bold uppercase tracking-widest rounded-sm mb-1">
            {project.category}
          </span>
          <h3 className="text-primary-foreground font-bold text-base leading-tight">{project.title}</h3>
          <p className="text-primary-foreground/50 text-xs mt-0.5">{project.location} · {project.year}</p>
        </div>
        <button
          onClick={onClose}
          className="w-9 h-9 flex items-center justify-center rounded-sm border border-primary-foreground/20 text-primary-foreground/60 hover:text-accent hover:border-accent transition-colors"
          aria-label="Close gallery">

          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Main image */}
      <div className="flex-1 relative min-h-0 px-6 py-4" onClick={(e) => e.stopPropagation()}>
        <div className="relative w-full h-full rounded-sm overflow-hidden">

          {/* Sliding track: every image is mounted once, side-by-side,
              and the whole strip is translated to reveal the active one.
              This avoids swapping a single <AppImage> src in place, which
              was why images previously appeared "stuck" and never slid. */}
          <div
            className="absolute inset-0 flex h-full transition-transform duration-500 ease-out"
            style={{
              width: `${allImages.length * 100}%`,
              transform: `translateX(-${activeIdx * panelWidth}%)`
            }}>
            {allImages.map((img, idx) => (
              <div
                key={idx}
                className="relative h-full flex-shrink-0"
                style={{ width: `${panelWidth}%` }}>
                <AppImage
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority={idx === activeIdx} />
              </div>
            ))}
          </div>

          {/* Nav arrows */}
          {allImages.length > 1 &&
          <>
              <button
              onClick={goPrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-primary/70 hover:bg-accent/90 text-primary-foreground rounded-sm transition-all duration-200 group z-10"
              aria-label="Previous image">

                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
              onClick={goNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-primary/70 hover:bg-accent/90 text-primary-foreground rounded-sm transition-all duration-200 z-10"
              aria-label="Next image">

                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </>
          }
          {/* Counter */}
          <div className="absolute bottom-3 right-3 px-2.5 py-1 bg-primary/70 text-primary-foreground/80 text-xs font-medium rounded-sm z-10">
            {activeIdx + 1} / {allImages.length}
          </div>
        </div>
      </div>

      {/* Thumbnails */}
      {allImages.length > 1 &&
      <div className="flex gap-2 px-6 pb-5 overflow-x-auto flex-shrink-0" onClick={(e) => e.stopPropagation()}>
          {allImages.map((img, idx) =>
        <button
          key={idx}
          onClick={() => setActiveIdx(idx)}
          className={`relative flex-shrink-0 w-16 h-12 rounded-sm overflow-hidden border-2 transition-all duration-200 ${
          idx === activeIdx ? 'border-accent' : 'border-transparent opacity-50 hover:opacity-80'}`
          }
          aria-label={`View image ${idx + 1}`}>

              <AppImage src={img.src} alt={img.alt} fill className="object-cover" sizes="64px" />
            </button>
        )}
        </div>
      }
    </div>);

}

function ProjectCard({ project, index, visible }) {
  const [galleryOpen, setGalleryOpen] = useState(false);

  return (
    <>
      <div
        className={`group bg-card rounded-sm overflow-hidden border border-border card-hover transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`
        }
        style={{ transitionDelay: `${index % 6 * 80}ms` }}>

        {/* Image */}
        <div className="relative h-52 overflow-hidden">
          <AppImage
            src={project.image}
            alt={project.alt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />

          <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
          {/* Category badge */}
          <div className="absolute top-3 left-3">
            <span className="inline-block px-2.5 py-0.5 bg-accent/90 text-accent-foreground text-[10px] font-bold uppercase tracking-widest rounded-sm">
              {project.category}
            </span>
          </div>
          {/* Gallery count badge */}
          <div className="absolute top-3 right-3">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-primary/70 text-primary-foreground/80 text-[10px] font-medium rounded-sm">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <rect x="1" y="1" width="4" height="4" rx="0.5" stroke="currentColor" strokeWidth="1" />
                <rect x="5" y="5" width="4" height="4" rx="0.5" stroke="currentColor" strokeWidth="1" />
                <rect x="5" y="1" width="4" height="4" rx="0.5" stroke="currentColor" strokeWidth="1" />
              </svg>
              {project.gallery.length + 1}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-foreground font-bold text-base leading-tight mb-3 group-hover:text-secondary transition-colors duration-200">
            {project.title}
          </h3>

          {/* Meta grid */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 mb-4">
            <div>
              <p className="text-muted-foreground text-[10px] uppercase tracking-widest font-semibold mb-0.5">Location</p>
              <p className="text-foreground text-xs font-medium leading-tight">{project.location}</p>
            </div>
            <div>
              <p className="text-muted-foreground text-[10px] uppercase tracking-widest font-semibold mb-0.5">Year</p>
              <p className="text-foreground text-xs font-medium">{project.year}</p>
            </div>
            <div>
              <p className="text-muted-foreground text-[10px] uppercase tracking-widest font-semibold mb-0.5">Scope</p>
              <p className="text-foreground text-xs font-medium leading-tight">{project.scope}</p>
            </div>
            <div>
              <p className="text-muted-foreground text-[10px] uppercase tracking-widest font-semibold mb-0.5">Scale</p>
              <p className="text-foreground text-xs font-medium leading-tight">{project.area}</p>
            </div>
          </div>

          {/* Client */}
          <div className="flex items-center gap-2 pt-3 border-t border-border mb-4">
            <div className="w-1 h-3 bg-accent rounded-full flex-shrink-0" />
            <p className="text-muted-foreground text-xs">{project.client}</p>
          </div>

          {/* Gallery button */}
          <button
            onClick={() => setGalleryOpen(true)}
            className="w-full flex items-center justify-center gap-2 py-2.5 border border-secondary/30 text-secondary text-xs font-semibold rounded-sm hover:bg-secondary hover:text-secondary-foreground transition-all duration-200 group/btn">

            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="group-hover/btn:scale-110 transition-transform duration-200">
              <rect x="1" y="1" width="5" height="5" rx="0.5" stroke="currentColor" strokeWidth="1.2" />
              <rect x="8" y="1" width="5" height="5" rx="0.5" stroke="currentColor" strokeWidth="1.2" />
              <rect x="1" y="8" width="5" height="5" rx="0.5" stroke="currentColor" strokeWidth="1.2" />
              <rect x="8" y="8" width="5" height="5" rx="0.5" stroke="currentColor" strokeWidth="1.2" />
            </svg>
            View Gallery ({project.gallery.length + 1} photos)
          </button>
        </div>
      </div>

      {galleryOpen && <GalleryModal project={project} onClose={() => setGalleryOpen(false)} />}
    </>);

}

export default function ProjectsGrid() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (ref?.current) observer?.observe(ref?.current);
    return () => observer?.disconnect();
  }, []);

  const filtered = activeCategory === 'All' ?
  projects :
  projects.filter((p) => p.category === activeCategory);

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className={`mb-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="gold-line" />
            <span className="text-accent text-xs font-bold tracking-[0.4em] uppercase">Project Portfolio</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="text-section-xl font-bold text-foreground tracking-tight">
              Browse by{' '}
              <span className="gold-shimmer">Category</span>
            </h2>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              Showing {filtered.length} project{filtered.length !== 1 ? 's' : ''} across {activeCategory === 'All' ? 'all categories' : activeCategory.toLowerCase()}.
            </p>
          </div>
        </div>

        {/* Filter tabs */}
        <div
          className={`flex flex-wrap gap-2 mb-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '100ms' }}>

          {CATEGORIES.map((cat) =>
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-sm border transition-all duration-200 ${
            activeCategory === cat ?
            'bg-primary text-primary-foreground border-primary shadow-md' :
            'bg-transparent text-muted-foreground border-border hover:border-secondary hover:text-secondary'}`
            }>

              {cat}
              {cat !== 'All' &&
            <span className={`ml-1.5 text-[10px] ${activeCategory === cat ? 'text-accent' : 'text-muted-foreground/60'}`}>
                  ({projects.filter((p) => p.category === cat).length})
                </span>
            }
            </button>
          )}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) =>
          <ProjectCard key={project.id} project={project} index={i} visible={visible} />
          )}
        </div>

        {/* Empty state */}
        {filtered.length === 0 &&
        <div className="text-center py-20">
            <p className="text-muted-foreground text-sm">No projects found in this category.</p>
          </div>
        }
      </div>
    </section>);

}