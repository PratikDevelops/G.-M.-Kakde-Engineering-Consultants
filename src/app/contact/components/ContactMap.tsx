import React from 'react';

export default function ContactMap() {
  return (
    <section className="bg-muted border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <div className="gold-line" />
          <span className="text-accent text-xs font-bold tracking-[0.4em] uppercase">Our Location</span>
        </div>
        <h2 className="text-2xl font-bold text-foreground tracking-tight mb-6">
          Find Us at Our <span className="gold-shimmer">Head Office</span>
        </h2>

        {/* Map Embed Placeholder */}
        <div className="w-full h-80 bg-card border border-border rounded-sm overflow-hidden flex items-center justify-center relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
          <div className="text-center relative z-10">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <p className="text-foreground font-semibold text-sm mb-1">G. M. Kakde Engineering Consultants Pvt. Ltd.</p>
            <p className="text-muted-foreground text-xs leading-relaxed max-w-xs">
              Maruti Niwas, through BSNL Colony,<br />
              Opp. IIT Main Gate, Powai, Mumbai - 400076
            </p>
            <a
              href="https://www.google.com/maps/place/G.+M.+Kakde+Engineering+Consultants+Pvt.+Ltd./@19.1216261,72.9154307,16z/data=!4m14!1m7!3m6!1s0x3be7c7ee6ca3b693:0xd10a37913bc9cdcb!2sG.+M.+Kakde+Engineering+Consultants+Pvt.+Ltd.!8m2!3d19.1216261!4d72.9154307!16s%2Fg%2F1tz946cm!3m5!1s0x3be7c7ee6ca3b693:0xd10a37913bc9cdcb!8m2!3d19.1216261!4d72.9154307!16s%2Fg%2F1tz946cm?entry=ttu&g_ep=EgoyMDI2MDcxNS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-secondary transition-colors"
            >
              Open in Google Maps
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}