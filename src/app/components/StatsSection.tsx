'use client';
import React, { useEffect, useRef, useState } from 'react';

interface Stat {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

const stats: Stat[] = [
  { value: 45, suffix: '+', label: 'Years of Excellence', description: 'Established 1978' },
  { value: 500, suffix: '+', label: 'Projects Completed', description: 'Across all domains' },
  { value: 100, suffix: '+', label: 'Government Projects', description: 'Empanelled agencies' },
  { value: 1000, suffix: '+', label: 'Acres Planned', description: 'Urban development' },
  { value: 50, suffix: '+', label: 'Expert Professionals', description: 'Multidisciplinary team' },
];

function AnimatedCounter({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(value / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span className="font-bold text-section-xl text-primary-foreground">
      {count}{suffix}
    </span>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-primary section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center p-6 border border-primary-foreground/10 rounded-sm hover:border-accent/40 transition-all duration-500 group"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="relative">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={inView} />
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent/0 group-hover:bg-accent/60 transition-all duration-500 scale-x-0 group-hover:scale-x-100 origin-left" />
              </div>
              <p className="text-primary-foreground/80 text-sm font-semibold mt-2 tracking-wide">{stat.label}</p>
              <p className="text-accent text-xs mt-1 tracking-widest uppercase">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}