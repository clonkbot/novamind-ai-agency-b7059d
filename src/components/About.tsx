const stats = [
  { value: '47+', label: 'Enterprise Clients' },
  { value: '120M', label: 'Data Points Processed' },
  { value: '98%', label: 'Client Retention' },
  { value: '3.2x', label: 'Average ROI' },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Background Element */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-[600px] bg-gradient-to-r from-[#c9a962]/5 to-transparent blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column - Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-square max-w-lg mx-auto lg:mx-0">
              {/* Decorative Frame */}
              <div className="absolute inset-0 border border-[#c9a962]/20" />
              <div className="absolute inset-4 border border-[#f5f0e8]/10" />

              {/* Abstract Pattern */}
              <div className="absolute inset-8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#c9a962]/20 via-[#0a0a0b] to-[#b8a99a]/10" />
                <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 200 200">
                  <defs>
                    <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#c9a962" />
                      <stop offset="100%" stopColor="#b8a99a" />
                    </linearGradient>
                  </defs>
                  {[...Array(20)].map((_, i) => (
                    <line
                      key={i}
                      x1={i * 10}
                      y1="0"
                      x2={i * 10 + 100}
                      y2="200"
                      stroke="url(#lineGrad)"
                      strokeWidth="0.5"
                      opacity={0.3 + (i * 0.03)}
                    />
                  ))}
                  {[...Array(20)].map((_, i) => (
                    <line
                      key={`h-${i}`}
                      x1="0"
                      y1={i * 10}
                      x2="200"
                      y2={i * 10 + 50}
                      stroke="url(#lineGrad)"
                      strokeWidth="0.5"
                      opacity={0.2 + (i * 0.02)}
                    />
                  ))}
                </svg>
              </div>

              {/* Central Element */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border border-[#c9a962]/40 flex items-center justify-center">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-[#c9a962]/30 to-transparent backdrop-blur-sm flex items-center justify-center">
                    <span className="font-playfair text-3xl md:text-4xl text-[#c9a962]">N</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-[#c9a962]" />
              <span className="text-xs font-outfit tracking-[0.3em] text-[#c9a962] uppercase">
                About Novamind
              </span>
            </div>

            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl tracking-tight mb-8">
              Where vision meets
              <br />
              <span className="text-[#c9a962]">precision</span>
            </h2>

            <div className="space-y-6 mb-12">
              <p className="font-outfit text-[#b8a99a] text-base md:text-lg leading-relaxed">
                Founded at the intersection of deep technical expertise and strategic
                business acumen, Novamind partners with forward-thinking organizations
                to unlock the full potential of artificial intelligence.
              </p>
              <p className="font-outfit text-[#b8a99a] text-base md:text-lg leading-relaxed">
                Our team of researchers, engineers, and strategists brings decades
                of combined experience from leading AI labs, Fortune 500 companies,
                and successful startups.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="border-l border-[#c9a962]/30 pl-6"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="font-playfair text-3xl md:text-4xl text-[#f5f0e8] mb-1">
                    {stat.value}
                  </div>
                  <div className="font-outfit text-xs md:text-sm tracking-wide text-[#b8a99a] uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
