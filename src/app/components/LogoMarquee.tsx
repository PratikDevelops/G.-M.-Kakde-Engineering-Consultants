"use client";

import React from "react";
import { motion } from "framer-motion";

interface MarqueeLogo {
  name: string;
  abbr: string;
  logo: string;
}

const marqueeLogos: MarqueeLogo[] = [
  { name: "MIDC", abbr: "MIDC", logo: "/assets/images/midc logo.png" },
  { name: "MHADA", abbr: "MHADA", logo: "/assets/images/mhada logo.jpeg" },
  { name: "SPPL", abbr: "SPPL", logo: "/assets/images/sppl logo.jpg" },
  { name: "CIDCO", abbr: "CIDCO", logo: "/assets/images/cidco logo.jpeg" },
  { name: "IAAI", abbr: "IAAI", logo: "/assets/images/iaai logo.png" },
  { name: "MSRDC", abbr: "MSRDC", logo: "/assets/images/msrdc logo.png" },
  {
    name: "Mumbai University",
    abbr: "MU",
    logo: "/assets/images/mumbai university logo.webp",
  },
  {
    name: "Dr. Babasaheb Ambedkar Marathwada University",
    abbr: "Babasaheb Ambedkar Marathwada University",
    logo: "/assets/images/Babasaheb Ambedkar Marathwada University logo.jpeg",
  },
];

function LogoCard({ item }: { item: MarqueeLogo }) {
  const [failed, setFailed] = React.useState(false);

  return (
    <div className="group w-56 shrink-0 px-3">
      <div className="bg-card border border-border rounded-sm overflow-hidden transition-all duration-300 hover:border-accent hover:-translate-y-2 card-hover">
        <div className="h-32 flex items-center justify-center bg-background p-6">
          {!failed ? (
            <img
              src={item.logo}
              alt={item.name}
              loading="lazy"
              onError={() => setFailed(true)}
              className="max-h-16 max-w-full object-contain grayscale opacity-70 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
            />
          ) : (
            <span className="text-2xl font-bold text-primary">
              {item.abbr}
            </span>
          )}
        </div>

        <div className="border-t border-border py-4 px-4">
          <p className="text-center text-sm font-semibold text-foreground truncate">
            {item.name}
          </p>
        </div>
      </div>
    </div>
  );
}

function Marquee({
  items,
  reverse = false,
  duration = 35,
}: {
  items: MarqueeLogo[];
  reverse?: boolean;
  duration?: number;
}) {
  const duplicated = [...items, ...items];

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex w-max"
        animate={{
          x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
        }}
        transition={{
          repeat: Infinity,
          duration,
          ease: "linear",
        }}
      >
        {duplicated.map((item, index) => (
          <LogoCard key={`${item.name}-${index}`} item={item} />
        ))}
      </motion.div>
    </div>
  );
}

export default function LogoMarquee() {
  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="gold-line" />
            <span className="text-accent text-xs font-bold tracking-[0.4em] uppercase">
              Our Network
            </span>
            <div className="gold-line" />
          </div>

          <h2 className="text-section-xl font-bold text-foreground">
            Trusted by{" "}
            <span className="gold-shimmer">
              Government & Institutional Leaders
            </span>
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-muted-foreground leading-7">
            We proudly collaborate with government authorities, educational
            institutions, and leading infrastructure organizations across India.
          </p>
        </div>

        <div className="relative space-y-8">

          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />

          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

          <Marquee items={marqueeLogos} duration={32} />

          <Marquee
            items={[...marqueeLogos].reverse()}
            reverse
            duration={38}
          />

        </div>
      </div>
    </section>
  );
}