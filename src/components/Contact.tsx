import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', company: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 top-1/2 -translate-y-1/2 w-1/2 h-[800px] bg-gradient-to-r from-[#c9a962]/5 to-transparent blur-3xl rotate-12" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-[#c9a962]" />
              <span className="text-xs font-outfit tracking-[0.3em] text-[#c9a962] uppercase">
                Start a Conversation
              </span>
            </div>

            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight mb-8">
              Let&apos;s shape the
              <br />
              <span className="text-[#c9a962]">future together</span>
            </h2>

            <p className="font-outfit text-[#b8a99a] text-base md:text-lg leading-relaxed mb-12 max-w-md">
              Whether you&apos;re exploring AI for the first time or seeking to
              elevate existing capabilities, we&apos;re here to guide your journey.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-[#f5f0e8]/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#c9a962]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-outfit text-xs text-[#b8a99a] uppercase tracking-wide mb-1">Email</div>
                  <div className="font-outfit text-[#f5f0e8]">hello@novamind.ai</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-[#f5f0e8]/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#c9a962]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-outfit text-xs text-[#b8a99a] uppercase tracking-wide mb-1">Location</div>
                  <div className="font-outfit text-[#f5f0e8]">San Francisco & London</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="relative">
            <div className="absolute inset-0 border border-[#f5f0e8]/10 -m-4 lg:-m-8" />

            <form onSubmit={handleSubmit} className="relative bg-[#0a0a0b]/80 p-6 md:p-8 lg:p-12">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center h-full min-h-[400px]">
                  <div className="w-16 h-16 rounded-full border-2 border-[#c9a962] flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-[#c9a962]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-playfair text-2xl text-[#f5f0e8] mb-2">Message Received</h3>
                  <p className="font-outfit text-[#b8a99a] text-center">We&apos;ll be in touch within 24 hours.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div>
                    <label className="block font-outfit text-xs tracking-wide text-[#b8a99a] uppercase mb-3">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-transparent border-b border-[#f5f0e8]/20 py-3 font-outfit text-[#f5f0e8] placeholder-[#f5f0e8]/30 focus:border-[#c9a962] focus:outline-none transition-colors"
                      placeholder="John Smith"
                      required
                    />
                  </div>

                  <div>
                    <label className="block font-outfit text-xs tracking-wide text-[#b8a99a] uppercase mb-3">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-transparent border-b border-[#f5f0e8]/20 py-3 font-outfit text-[#f5f0e8] placeholder-[#f5f0e8]/30 focus:border-[#c9a962] focus:outline-none transition-colors"
                      placeholder="john@company.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block font-outfit text-xs tracking-wide text-[#b8a99a] uppercase mb-3">
                      Company
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-transparent border-b border-[#f5f0e8]/20 py-3 font-outfit text-[#f5f0e8] placeholder-[#f5f0e8]/30 focus:border-[#c9a962] focus:outline-none transition-colors"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label className="block font-outfit text-xs tracking-wide text-[#b8a99a] uppercase mb-3">
                      How can we help?
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full bg-transparent border-b border-[#f5f0e8]/20 py-3 font-outfit text-[#f5f0e8] placeholder-[#f5f0e8]/30 focus:border-[#c9a962] focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your project..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-4 py-4 bg-[#c9a962] text-[#0a0a0b] font-outfit text-sm tracking-wide hover:bg-[#f5f0e8] transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    Send Message
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
