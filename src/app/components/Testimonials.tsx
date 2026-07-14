"use client";

import { useEffect, useState } from "react";
import Icon from "@/components/ui/AppIcon";

const testimonials = [
  {
    name: "Rajesh Shah",
    role: "Project Director",
    company: "Shah Infrastructure Pvt. Ltd.",
    review:
      "The PMC team demonstrated exceptional planning, execution monitoring and quality assurance throughout our commercial development.",
  },
  {
    name: "Priya Mehta",
    role: "Lead Architect",
    company: "Urban Spaces Studio",
    review:
      "Outstanding coordination between architecture and structural engineering. Their expertise greatly improved project efficiency.",
  },
  {
    name: "Amit Kulkarni",
    role: "Construction Head",
    company: "SK Builders",
    review:
      "Professional engineering consultancy with excellent structural solutions that optimized costs without compromising safety.",
  },
  {
    name: "Sneha Patil",
    role: "Town Planning Officer",
    company: "Municipal Development Authority",
    review:
      "Their urban planning strategy perfectly balanced infrastructure, sustainability and future development.",
  },
  {
    name: "Vikram Deshmukh",
    role: "Infrastructure Manager",
    company: "National Highway Contractor",
    review:
      "Highly experienced team delivering reliable road and bridge engineering solutions.",
  },
  {
    name: "Neha Agarwal",
    role: "Plant Operations Head",
    company: "Aqua Utilities Ltd.",
    review:
      "Their water supply engineering expertise helped improve efficiency while ensuring long-term reliability.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) =>
        prev >= testimonials.length - visibleCards ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [visibleCards]);

  const nextSlide = () => {
    setCurrent((prev) =>
      prev >= testimonials.length - visibleCards ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - visibleCards : prev - 1
    );
  };

  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="gold-line" />
            <span className="text-accent text-xs font-bold tracking-[0.4em] uppercase">
              Testimonials
            </span>
            <div className="gold-line" />
          </div>

          <h2 className="text-section-xl font-bold text-foreground">
            Trusted by <span className="gold-shimmer">Industry Leaders</span>
          </h2>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${
                  current * (100 / visibleCards)
                }%)`,
              }}
            >
              {testimonials.map((item) => (
                <div
                  key={item.name}
                  className="basis-full md:basis-1/2 lg:basis-1/3 shrink-0 px-3"
                >
                  <div className="bg-card border border-border rounded-sm p-8 h-full card-hover">
                    <div className="flex justify-between items-center mb-6">
                      <Icon
                        name="ChatBubbleLeftRightIcon"
                        size={32}
                        className="text-primary"
                      />

                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Icon
                            key={star}
                            name="StarIcon"
                            size={16}
                            className="text-accent"
                          />
                        ))}
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-7 italic mb-8">
                      "{item.review}"
                    </p>

                    <div className="border-t border-border pt-5">
                      <h3 className="font-bold text-foreground">
                        {item.name}
                      </h3>

                      <p className="text-primary text-sm">{item.role}</p>

                      <p className="text-muted-foreground text-sm">
                        {item.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 bg-card border border-border w-11 h-11 rounded-full flex items-center justify-center shadow hover:border-accent transition z-10"
          >
            <Icon
              name="ChevronLeftIcon"
              size={20}
              className="text-primary"
            />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 translate-x-5 -translate-y-1/2 bg-card border border-border w-11 h-11 rounded-full flex items-center justify-center shadow hover:border-accent transition z-10"
          >
            <Icon
              name="ChevronRightIcon"
              size={20}
              className="text-primary"
            />
          </button>
        </div>
      </div>
    </section>
  );
}