'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';


const defaultImages = [
  {
    src: '/assets/images/HeroSection-1.png',
    alt: 'HeroSection slide 1',
    eyebrow: 'STRUCTURAL & CIVIL ENGINEERING',
    title: 'Engineering Excellence, Built to Last',
    subtitle:
      'Structural design and consultancy for projects that stand the test of time.',
  },
  {
    src: '/assets/images/HeroSection-2.png',
    alt: 'HeroSection slide 2',
    eyebrow: 'DESIGN & DOCUMENTATION',
    title: 'From Blueprint to Reality, With Precision',
    subtitle:
      'Detailed structural drawings backed by decades of consulting experience.',
  },
  {
    src: '/assets/images/HeroSection-3.png',
    alt: 'HeroSection slide 3',
    eyebrow: 'PROVEN TRACK RECORD',
    title: 'Trusted Expertise, Proven Results',
    subtitle:
      'Empanelled structural consultants for commercial and residential developments.',
  },
];

export default function HeroSection({
  images = defaultImages,
  autoPlay = true,
  interval = 5000,
  className = '',
}) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false); // only true during an active swipe
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const sectionRef = useRef(null);

  const goTo = useCallback(
    (index) => {
      if (images.length === 0) return;
      setCurrent((index + images.length) % images.length);
    },
    [images.length]
  );

  const goNext = useCallback(() => goTo(current + 1), [current, goTo]);
  const goPrev = useCallback(() => goTo(current - 1), [current, goTo]);

  // Auto-slide — runs continuously, only pauses during an active swipe gesture
  useEffect(() => {
    if (!autoPlay || isPaused || images.length <= 1) return;
    const id = setInterval(goNext, interval);
    return () => clearInterval(id);
  }, [autoPlay, isPaused, interval, goNext, images.length]);

  // Keyboard navigation when the hero is focused
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const onKeyDown = (e) => {
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    node.addEventListener('keydown', onKeyDown);
    return () => node.removeEventListener('keydown', onKeyDown);
  }, [goNext, goPrev]);

  const onTouchStart = (e) => {
    setIsPaused(true);
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const onTouchEnd = () => {
    const delta = touchStartX.current - touchEndX.current;
    if (Math.abs(delta) > 50) {
      delta > 0 ? goNext() : goPrev();
    }
    setIsPaused(false);
  };

  if (images.length === 0) return null;

  return (
    <section
      ref={sectionRef}
      tabIndex={0}
      aria-roledescription="carousel"
      aria-label="Hero image carousel"
      className={`relative w-full h-[60svh] min-h-[380px] sm:h-[75svh] sm:min-h-[480px] lg:h-[100svh] lg:min-h-[600px] overflow-hidden select-none outline-none ${className}`}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Slides */}
      <div
        className="flex h-full transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, i) => (
          <div
            key={i}
            className="relative h-full w-full flex-shrink-0"
            aria-hidden={i !== current}
          >
            <Image
              src={img.src}
              alt={img.alt || `Slide ${i + 1}`}
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Gradient overlay — stronger where text sits, works on any image */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent pointer-events-none" />

      {/* Text content — stacked responsively, one block per slide, cross-faded */}
      <div className="absolute inset-0 z-10 flex items-center">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="relative">
            {images.map((img, i) => (
              <div
                key={i}
                className={`transition-all duration-700 ease-out ${
                  i === current
                    ? 'relative opacity-100 translate-y-0'
                    : 'pointer-events-none absolute inset-0 opacity-0 translate-y-3'
                }`}
                aria-hidden={i !== current}
              >
                {img.eyebrow && (
                  <span className="mb-3 inline-flex items-center gap-2  text-[11px] sm:text-xs lg:text-sm tracking-[0.2em] text-amber-400">
                    <span className="h-px w-6 sm:w-8 bg-amber-400" />
                    {img.eyebrow}
                  </span>
                )}
                {img.title && (
                  <h1 className="max-w-xl sm:max-w-2xl lg:max-w-4xl text-3xl font-semibold leading-[1.1] text-white sm:text-5xl md:text-6xl lg:text-7xl">
                    {img.title}
                  </h1>
                )}
                {img.subtitle && (
                  <p className="mt-3 sm:mt-4 max-w-md sm:max-w-xl lg:max-w-2xl text-sm text-white/80 sm:text-base md:text-lg lg:text-xl">
                    {img.subtitle}
                  </p>
                )}
                <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4">
                  <a
                    href="/contact"
                    className="rounded-md bg-amber-400 px-5 py-2.5 sm:px-6 sm:py-3 lg:px-8 lg:py-4  text-xs sm:text-sm lg:text-base font-medium tracking-wide text-black transition hover:bg-amber-300"
                  >
                    GET IN TOUCH
                  </a>
                  <a
                    href="/services"
                    className="rounded-md border border-white/40 px-5 py-2.5 sm:px-6 sm:py-3 lg:px-8 lg:py-4  text-xs sm:text-sm lg:text-base font-medium tracking-wide text-white transition hover:border-white hover:bg-white/10"
                  >
                    OUR SERVICES
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Prev / Next — hidden on very small screens to avoid crowding the text */}
      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous slide"
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 hidden h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition hover:bg-black/60 sm:flex"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next slide"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 hidden h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition hover:bg-black/60 sm:flex"
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}

      {/* Dots + autoplay progress bar */}
      {images.length > 1 && (
        <div className="absolute bottom-5 sm:bottom-7 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === current}
              className={`relative h-1.5 overflow-hidden rounded-full transition-all duration-300 ${
                i === current ? 'w-8 sm:w-10 bg-white/30' : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
            >
              {i === current && autoPlay && !isPaused && (
                <span
                  key={interval}
                  className="absolute inset-y-0 left-0 block bg-amber-400"
                  style={{
                    animation: `hero-progress ${interval}ms linear forwards`,
                  }}
                />
              )}
            </button>
          ))}
        </div>
      )}

      <style jsx>{`
        @keyframes hero-progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}