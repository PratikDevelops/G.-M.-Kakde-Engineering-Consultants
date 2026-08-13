"use client";

import { useState } from "react";
import Icon from "@/components/ui/AppIcon";
import Link from "next/link";

const faqs = [
  {
    question: "What engineering consultancy services do you provide?",
    answer:
      "We offer comprehensive engineering consultancy including Project Management Consultancy (PMC), structural engineering, architectural planning, urban planning, infrastructure design, water supply engineering, quantity surveying, and construction supervision.",
  },
  {
    question: "Do you handle residential, commercial, and industrial projects?",
    answer:
      "Yes. Our team has extensive experience delivering residential developments, commercial buildings, industrial facilities, institutional projects, public infrastructure, and government projects with the same commitment to quality and compliance.",
  },
  {
    question: "Can you manage projects from concept to completion?",
    answer:
      "Absolutely. We provide end-to-end consultancy-from feasibility studies, planning, design, approvals, tender documentation, project management, quality control, cost monitoring, and construction supervision through final project handover.",
  },
  {
    question: "How do you ensure quality and safety during construction?",
    answer:
      "Our engineers conduct regular site inspections, monitor construction quality, verify compliance with applicable codes and standards, manage project documentation, and ensure strict adherence to safety protocols throughout execution.",
  },
  {
    question: "Do you provide structural audits and rehabilitation services?",
    answer:
      "Yes. We perform structural assessments, safety audits, condition surveys, rehabilitation planning, retrofitting recommendations, and life-extension solutions for existing structures.",
  },
  {
    question: "Why should clients choose G. M. Kakde Engineering Consultants?",
    answer:
      "With decades of engineering expertise, multidisciplinary professionals, innovative design solutions, transparent project management, and a strong focus on quality, sustainability, and client satisfaction, we consistently deliver reliable engineering solutions.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section-padding bg-muted/30">
      <div className="max-w-5xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="gold-line" />
            <span className="text-accent text-xs font-bold tracking-[0.4em] uppercase">
              FAQs
            </span>
            <div className="gold-line" />
          </div>

          <h2 className="text-section-xl font-bold text-foreground">
            Frequently Asked{" "}
            <span className="gold-shimmer">Questions</span>
          </h2>

          <p className="text-muted-foreground mt-5 max-w-2xl mx-auto leading-7">
            Find answers to the most common questions about our engineering
            consultancy, project management, structural design, and construction
            services.
          </p>
        </div>

        <div className="space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-card border border-border rounded-sm overflow-hidden transition-all duration-300 hover:border-accent/40"
              >
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? -1 : index)
                  }
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <h3 className="font-semibold text-lg text-foreground pr-6">
                    {faq.question}
                  </h3>

                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background shrink-0">
                    <Icon
                      name={isOpen ? "MinusIcon" : "PlusIcon"}
                      size={18}
                      className="text-primary transition-transform duration-300"
                    />
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-500 ease-in-out ${isOpen
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                    }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 border-t border-border">
                      <p className="pt-5 leading-7 text-muted-foreground">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <div className="inline-flex flex-col items-center gap-4 bg-card border border-border px-8 py-8 rounded-sm">
            <Icon
              name="ChatBubbleLeftRightIcon"
              size={34}
              className="text-primary"
            />

            <h3 className="text-2xl font-bold text-foreground">
              Still Have Questions?
            </h3>

            <p className="text-muted-foreground max-w-lg">
              Our engineering experts are ready to discuss your project,
              understand your requirements, and provide the right technical
              guidance.
            </p>

            <Link
              href="/contact"
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
              Contact Our Team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}