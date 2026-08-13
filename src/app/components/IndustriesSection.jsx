'use client';

import { motion } from 'framer-motion';
import Icon from '@/components/ui/AppIcon';

const industries = [
  {
    title: 'Residential',
    icon: 'HomeModernIcon',
    description:
      'Luxury residences, affordable housing, redevelopment projects, and township planning.',
  },
  {
    title: 'Commercial',
    icon: 'BuildingOffice2Icon',
    description:
      'Corporate offices, business parks, retail developments, and mixed-use buildings.',
  },
  {
    title: 'Educational',
    icon: 'AcademicCapIcon',
    description:
      'Schools, universities, research institutes, auditoriums, and training campuses.',
  },
  {
    title: 'Healthcare',
    icon: 'HeartIcon',
    description:
      'Hospitals, medical colleges, diagnostic centers, and healthcare infrastructure.',
  },
  {
    title: 'Infrastructure',
    icon: 'TruckIcon',
    description:
      'Roads, bridges, highways, transportation corridors, and urban infrastructure.',
  },
  {
    title: 'Industrial',
    icon: 'Cog6ToothIcon',
    description:
      'Factories, manufacturing plants, warehouses, utilities, and industrial facilities.',
  },
  {
    title: 'Government',
    icon: 'BuildingLibraryIcon',
    description:
      'Public buildings, municipal infrastructure, administrative complexes, and civic projects.',
  },
  {
    title: 'Water & Utilities',
    icon: 'BeakerIcon',
    description:
      'Water supply systems, treatment plants, drainage, and utility engineering.',
  },
];

export default function IndustriesSection() {
  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="gold-line" />
            <span className="text-accent text-xs font-bold tracking-[0.4em] uppercase">
              Industries We Serve
            </span>
            <div className="gold-line" />
          </div>

          <h2 className="text-section-xl font-bold text-foreground tracking-tight">
            Engineering Across{' '}
            <span className="gold-shimmer">Every Sector</span>
          </h2>

          <p className="mt-6 text-muted-foreground leading-8">
            From institutional campuses and urban infrastructure to industrial
            facilities and public utilities, we deliver engineering solutions
            tailored to every industry with precision, innovation, and
            long-term value.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className="group bg-card border border-border rounded-sm p-8 card-hover transition-all duration-500 hover:border-accent/40"
            >
              <div className="w-14 h-14 bg-primary/5 group-hover:bg-accent/10 rounded-sm flex items-center justify-center mb-6 transition-colors duration-300">
                <Icon
                  name={industry.icon}
                  size={26}
                  className="text-primary group-hover:text-accent transition-colors duration-300"
                />
              </div>
              <h3 className="text-base font-bold text-foreground mb-3 tracking-tight">
                {industry.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {industry.description}
              </p>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}