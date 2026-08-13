'use client';
import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

const serviceOptions = [
  'Project Management Consultancy',
  'Structural Engineering',
  'Architecture',
  'Urban Planning',
  'Roads & Bridges',
  'Water Supply Engineering',
  'Sewerage & STP',
  'Environmental Consultancy',
  'Material Testing',
  'Third Party Audits',
  'Real Estate Consultancy',
  'Infrastructure Planning',
  'Other',
];

const initialForm = {
  name: '',
  company: '',
  email: '',
  phone: '',
  service: '',
  projectType: '',
  message: '',
};

export default function ContactFormSection() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const result = await res.json();

      if (!result.success) {
        throw new Error(result.error || 'Submission failed');
      }

      setSubmitted(true);
    } catch (err) {
      console.error('Submission failed:', err);
      setError('Something went wrong. Please try again or contact us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Info */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="gold-line" />
              <span className="text-accent text-xs font-bold tracking-[0.4em] uppercase">Contact Form</span>
            </div>
            <h2 className="text-3xl font-bold text-foreground tracking-tight mb-5">
              Send Us a <span className="gold-shimmer">Message</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 font-light">
              Share your project requirements and we'll connect you with the right engineering specialist within 24 hours.
            </p>

            <div className="space-y-5">
              {[
                { icon: 'ClockIcon', label: '24hr Response', desc: 'We respond to all enquiries within one business day' },
                { icon: 'UserGroupIcon', label: 'Specialist Match', desc: 'Connected directly with relevant domain expert' },
                { icon: 'ShieldCheckIcon', label: 'Confidential', desc: 'All project information treated with strict confidentiality' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/5 rounded-sm flex items-center justify-center shrink-0">
                    <Icon name={item.icon} size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{item.label}</p>
                    <p className="text-muted-foreground text-xs leading-relaxed mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-8">
            <div className="bg-card border border-border rounded-sm p-8 shadow-sm">
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-5">
                    <Icon name="CheckCircleIcon" size={32} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Message Sent Successfully</h3>
                  <p className="text-muted-foreground leading-relaxed max-w-md mx-auto">
                    Thank you for reaching out to G. M. Kakde Engineering Consultants. Our team will review your requirements and respond within 24 business hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm(initialForm); }}
                    className="mt-6 px-6 py-3 bg-primary text-primary-foreground font-semibold text-sm rounded-sm hover:bg-secondary transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-foreground mb-2">
                        Full Name <span className="text-accent">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Rajesh Kumar"
                        className="w-full px-4 py-3 border border-input bg-background rounded-sm text-foreground text-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors placeholder:text-muted-foreground"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-foreground mb-2">
                        Company / Organisation
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Your company name"
                        className="w-full px-4 py-3 border border-input bg-background rounded-sm text-foreground text-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors placeholder:text-muted-foreground"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-foreground mb-2">
                        Email Address <span className="text-accent">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="rajesh@example.com"
                        className="w-full px-4 py-3 border border-input bg-background rounded-sm text-foreground text-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors placeholder:text-muted-foreground"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-foreground mb-2">
                        Phone Number <span className="text-accent">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 border border-input bg-background rounded-sm text-foreground text-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors placeholder:text-muted-foreground"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-foreground mb-2">
                        Service Required <span className="text-accent">*</span>
                      </label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-input bg-background rounded-sm text-foreground text-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors"
                      >
                        <option value="">Select a service</option>
                        {serviceOptions.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-foreground mb-2">
                        Project Type
                      </label>
                      <select
                        name="projectType"
                        value={form.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-input bg-background rounded-sm text-foreground text-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors"
                      >
                        <option value="">Select project type</option>
                        <option>Government / Public Sector</option>
                        <option>Private Residential</option>
                        <option>Private Commercial</option>
                        <option>Industrial</option>
                        <option>Infrastructure</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-foreground mb-2">
                      Project Description <span className="text-accent">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Briefly describe your project - location, scope, timeline, and any specific requirements..."
                      className="w-full px-4 py-3 border border-input bg-background rounded-sm text-foreground text-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors placeholder:text-muted-foreground resize-none"
                    />
                  </div>

                  {error && (
                    <p className="text-destructive text-sm text-center -mt-2">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-primary text-primary-foreground font-bold text-sm uppercase tracking-widest rounded-sm hover:bg-secondary transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-md hover:-translate-y-0.5"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Enquiry
                        <Icon name="PaperAirplaneIcon" size={16} />
                      </>
                    )}
                  </button>

                  <p className="text-muted-foreground text-xs text-center">
                    By submitting this form, you agree to our privacy policy. Your information will not be shared with third parties.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}