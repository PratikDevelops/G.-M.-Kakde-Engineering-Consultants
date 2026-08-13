

'use client';
import React, { useState, useEffect, useRef } from 'react';

const categories = ['All', 'Government/Public', 'Education', 'Housing Societies', 'Private/Trusts', 'Infrastructure'];

const categoryBadgeColors = {
  'Government/Public': 'bg-blue-500/10 text-blue-300 border-blue-400/20',
  'Education': 'bg-purple-500/10 text-purple-300 border-purple-400/20',
  'Housing Societies': 'bg-teal-500/10 text-teal-300 border-teal-400/20',
  'Private/Trusts': 'bg-emerald-500/10 text-emerald-300 border-emerald-400/20',
  'Infrastructure': 'bg-orange-500/10 text-orange-300 border-orange-400/20',
};

const clients = [
  // Government / Public
  { name: 'MIDC', abbr: 'MIDC', category: 'Government/Public', logo: '/assets/images/midc logo.png' },
  { name: 'MHADA', abbr: 'MHADA', category: 'Government/Public', logo: '/assets/images/mhada logo.jpeg' },
  { name: 'SPPL', abbr: 'SPPL', category: 'Government/Public', logo: '/assets/images/sppl logo.jpg' },
  { name: 'CIDCO', abbr: 'CIDCO', category: 'Government/Public', logo: '/assets/images/cidco logo.jpeg' },
  { name: 'IAAI', abbr: 'IAAI', category: 'Government/Public', logo: '/assets/images/iaai logo.avif' },
  { name: 'MSRDC', abbr: 'MSRDC', category: 'Government/Public', logo: '/assets/images/msrdc logo.png' },
  { name: 'Mumbai University', abbr: 'MU', category: 'Government/Public', logo: '/assets/images/mumbai university logo.jpeg' },
  { name: 'Dr. Babasaheb Ambedkar Marathwada University', abbr: 'Babasaheb Ambedkar Marathwada University', category: 'Government/Public', logo: '/assets/images/bamu logo.jpeg' },

  // Education
  { name: 'Oxford International School', abbr: 'OIS', category: 'Education', logo: '/assets/images/Oxford International School Logo.png' },
  { name: 'JNIETR', abbr: 'JNIETR', category: 'Education', logo: '/assets/images/no_image.png' },
  { name: 'Indira Gandhi College of Engineering', abbr: 'IGCE', category: 'Education', logo: '/assets/images/Indira Gandhi College of Engineering Logo.png' },

  // Housing Societies
  { name: 'Om Shiv Shankar CHS', abbr: 'OSS', category: 'Housing Societies', logo: '/assets/images/no_image.png' },
  { name: 'Shivprasad CHS', abbr: 'SP', category: 'Housing Societies', logo: '/assets/images/no_image.png' },
  { name: 'Vaibhavi CHS', abbr: 'VB', category: 'Housing Societies', logo: '/assets/images/no_image.png' },
  { name: 'Jidnyasa CHS', abbr: 'JC', category: 'Housing Societies', logo: '/assets/images/no_image.png' },

  // Private / Trusts
  { name: 'Aar Aar Developers', abbr: 'AAR', category: 'Private/Trusts', logo: '/assets/images/no_image.png' },
  { name: 'Kalasha Builders', abbr: 'KB', category: 'Private/Trusts', logo: '/assets/images/no_image.png' },
  { name: 'ANS Charitable Trust', abbr: 'ANS', category: 'Private/Trusts', logo: '/assets/images/ANS Charitable Trust Logo.jpeg' },
  { name: 'Unique Service Trust', abbr: 'UST', category: 'Private/Trusts', logo: '/assets/images/Unique Service Trust Logo.jpeg' },
  { name: 'Mayaka Developer', abbr: 'MAYAKA', category: 'Private/Trusts', logo: '/assets/images/no_image.png' },

  // Infrastructure
  { name: 'Encee Rail Linkers', abbr: 'ERL', category: 'Infrastructure', logo: '/assets/images/no_image.png' },
  { name: 'MSCFC', abbr: 'MSCFC', category: 'Infrastructure', logo: '/assets/images/no_image.png' },
  { name: 'Lions Club', abbr: 'LC', category: 'Infrastructure', logo: '/assets/images/Lions Club.svg' },
];

export default function ClientsGrid() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredClient, setHoveredClient] = useState(null);
  const [visible, setVisible] = useState(false);
  const [failedLogos, setFailedLogos] = useState({});
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref?.current) observer?.observe(ref?.current);
    return () => observer?.disconnect();
  }, []);

  const filtered = activeFilter === 'All'
    ? clients
    : clients.filter(c => c.category === activeFilter);

  const counts = categories.reduce((acc, cat) => {
    acc[cat] = cat === 'All' ? clients.length : clients.filter(c => c.category === cat).length;
    return acc;
  }, {});

  const getLogoSrc = (client) => client.logo;

  return (
    <section ref={ref} className="section-padding bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section heading */}
        <div className={`text-center mb-12 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="gold-line" />
            <span className="text-accent text-xs font-bold tracking-[0.4em] uppercase">Our Network</span>
            <div className="gold-line" />
          </div>
          <h2 className="text-section-xl font-bold text-primary tracking-tight">
            {filtered.length} <span className="gold-shimmer">
              {activeFilter === 'All' ? 'Client Organizations' : activeFilter + ' Clients'}
            </span>
          </h2>
        </div>

        {/* Filter tabs */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2.5 rounded-sm text-sm font-bold tracking-wide border transition-all duration-300 flex items-center gap-2 ${
                activeFilter === cat
                  ? 'bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20'
                  : 'bg-white text-primary/60 border-primary/15 hover:border-primary/40 hover:text-primary hover:bg-primary/5'
              }`}
            >
              {cat}
              <span className={`text-xs px-1.5 py-0.5 rounded-full font-bold ${
                activeFilter === cat ? 'bg-accent text-accent-foreground' : 'bg-primary/10 text-primary/50'
              }`}>
                {counts[cat]}
              </span>
            </button>
          ))}
        </div>

        {/* Logo grid */}
        <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 transition-all duration-500 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          {filtered.map((client, i) => {
            const logoFailed = failedLogos[client.name];
            return (
              <div
                key={client.name}
                onMouseEnter={() => setHoveredClient(client.name)}
                onMouseLeave={() => setHoveredClient(null)}
                className={`
                  group cursor-default rounded-md border border-primary/10 bg-white transition-all duration-300
                  ${hoveredClient === client.name ? 'scale-[1.03] shadow-xl border-primary/20 z-10' : 'scale-100'}
                  ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                `}
                style={{ transitionDelay: `${Math.min(i * 30, 600)}ms` }}
              >
                <div className="p-6 flex flex-col items-center justify-center gap-4 h-full min-h-[180px]">
                  {/* Logo image, with initials fallback if the file is missing */}
                  {!logoFailed ? (
                    <img
                      src={getLogoSrc(client)}
                      alt={`${client.name} logo`}
                      className="h-20 max-w-full object-contain transition-all duration-300 grayscale group-hover:grayscale-0"
                      loading="lazy"
                      onError={() => setFailedLogos(prev => ({ ...prev, [client.name]: true }))}
                    />
                  ) : (
                    <span className="h-20 flex items-center justify-center font-bold tracking-wider text-2xl text-primary/60">
                      {client.abbr}
                    </span>
                  )}

                  {/* Client name */}
                  <p className={`text-sm font-semibold text-center leading-tight transition-colors duration-300 ${
                    hoveredClient === client.name ? 'text-primary' : 'text-primary/60'
                  }`}>
                    {client.name}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className={`mt-10 flex flex-wrap justify-center gap-6 transition-all duration-700 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {['Government/Public', 'Education', 'Housing Societies', 'Private/Trusts', 'Infrastructure'].map((cat) => (
            <div key={cat} className="flex items-center gap-2">
              <span className={`text-xs px-2 py-0.5 rounded-full border font-bold ${categoryBadgeColors[cat]}`}>
                {cat}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}