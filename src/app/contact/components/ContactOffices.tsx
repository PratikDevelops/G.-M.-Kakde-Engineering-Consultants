'use client';

import React, { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

const office = {
  city: 'Mumbai',
  type: 'Head Office',
  address:
    'Maruti Niwas, through BSNL Colony, Opp. IIT Main Gate, Powai, Mumbai – 400076',
  phone: '+91 –22–2579 6100',
  email: 'admin@gmk.net.in',
};

export default function ContactOffices() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="section-padding bg-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`mb-12 transition-all duration-700 ${
            visible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="gold-line" />
            <span className="text-accent text-xs font-bold tracking-[0.4em] uppercase">
              Our Office
            </span>
          </div>

          <h2 className="text-section-xl font-bold tracking-tight text-foreground">
            Visit Our <span className="gold-shimmer">Head Office</span>
          </h2>

          <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            Our Mumbai headquarters serves as the central hub for engineering,
            project management, client consultations, inspections and technical
            support across Maharashtra.
          </p>
        </div>

        {/* Main Office Card */}
        <div
          className={`overflow-hidden rounded-md border border-accent/20 bg-card shadow-xl transition-all duration-700 ${
            visible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid lg:grid-cols-2">
            {/* Left Side */}
            <div className="bg-primary p-8 lg:p-10 text-primary-foreground">
              <span className="inline-flex items-center rounded-full bg-accent/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-accent">
                {office.type}
              </span>

              <h3 className="mt-6 text-4xl font-bold">{office.city}</h3>

              <p className="mt-6 max-w-lg text-primary-foreground/80 leading-8">
                {office.address}
              </p>

              <div className="mt-10 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/15">
                  <Icon
                    name="MapPinIcon"
                    size={24}
                    className="text-accent"
                  />
                </div>

                <div>
                  <p className="text-sm text-primary-foreground/60">
                    Corporate Headquarters
                  </p>
                  <p className="text-lg font-semibold">
                    Mumbai, Maharashtra
                  </p>
                </div>
              </div>
            </div>


            <div className="p-8 lg:p-10">
              <h3 className="text-2xl font-bold text-foreground mb-8">
                Contact Information
              </h3>

              <div className="space-y-5">

                <a
                  href={`tel:${office.phone.replace(/\s/g, '')}`}
                  className="flex items-start gap-4 rounded-md border border-border p-5 transition-all hover:border-accent hover:bg-muted"
                >
                  <div className="rounded-full bg-secondary/10 p-3">
                    <Icon
                      name="PhoneIcon"
                      size={18}
                      className="text-secondary"
                    />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">
                      Phone
                    </p>

                    <p className="mt-1 font-semibold text-foreground">
                      {office.phone}
                    </p>
                  </div>
                </a>

                <a
                  href={`mailto:${office.email}`}
                  className="flex items-start gap-4 rounded-md border border-border p-5 transition-all hover:border-accent hover:bg-muted"
                >
                  <div className="rounded-full bg-secondary/10 p-3">
                    <Icon
                      name="EnvelopeIcon"
                      size={18}
                      className="text-secondary"
                    />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">
                      Email
                    </p>

                    <p className="mt-1 font-semibold text-foreground">
                      {office.email}
                    </p>
                  </div>
                </a>


                <div className="flex items-start gap-4 rounded-md border border-border p-5">
                  <div className="rounded-full bg-secondary/10 p-3">
                    <Icon
                      name="ClockIcon"
                      size={18}
                      className="text-secondary"
                    />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">
                      Business Hours
                    </p>

                    <p className="mt-1 font-semibold text-foreground">
                      Monday – Saturday
                    </p>

                    <p className="text-sm text-muted-foreground">
                      9:00 AM – 6:30 PM IST
                    </p>
                  </div>
                </div>


                <div className="flex items-start gap-4 rounded-md border border-border p-5">
                  <div className="rounded-full bg-secondary/10 p-3">
                    <Icon
                      name="ShieldCheckIcon"
                      size={18}
                      className="text-secondary"
                    />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">
                      Emergency Contact
                    </p>

                    <p className="mt-1 font-semibold text-foreground">
                      +91 98200 12345
                    </p>

                    <p className="text-sm text-muted-foreground">
                      For urgent site inspections
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div
          className={`mt-10 rounded-md border border-border bg-card p-6 transition-all duration-700 delay-300 ${
            visible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-accent mb-2">
                Quick Response
              </h4>

              <p className="text-muted-foreground">
                We respond to all enquiries within 24 business hours.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-accent mb-2">
                Site Visits
              </h4>

              <p className="text-muted-foreground">
                Inspection appointments are available throughout Maharashtra.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-accent mb-2">
                Consultation
              </h4>

              <p className="text-muted-foreground">
                Schedule a meeting with our engineers for project discussions
                and technical guidance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}