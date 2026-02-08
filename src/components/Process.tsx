const steps = [
  {
    phase: 'Phase I',
    title: 'Discovery',
    description: 'Deep-dive into your business landscape, data ecosystem, and strategic objectives. We identify where AI creates the highest leverage.',
    duration: '2-4 weeks',
  },
  {
    phase: 'Phase II',
    title: 'Design',
    description: 'Architect the optimal solution, balancing innovation with pragmatism. Every decision is made with scale and sustainability in mind.',
    duration: '3-6 weeks',
  },
  {
    phase: 'Phase III',
    title: 'Develop',
    description: 'Build, test, iterate. Our agile approach ensures continuous feedback integration and rapid refinement toward your vision.',
    duration: '8-16 weeks',
  },
  {
    phase: 'Phase IV',
    title: 'Deploy',
    description: 'Launch with confidence. We ensure seamless integration, comprehensive documentation, and thorough knowledge transfer.',
    duration: '2-4 weeks',
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20">
      {/* Background Accent */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-[#c9a962]/3 to-transparent" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-[#c9a962]" />
            <span className="text-xs font-outfit tracking-[0.3em] text-[#c9a962] uppercase">
              Our Methodology
            </span>
            <div className="w-12 h-px bg-[#c9a962]" />
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight">
            A process refined
            <br />
            <span className="text-[#c9a962]">through excellence</span>
          </h2>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a962]/30 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div
                key={step.phase}
                className="group relative"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Phase Badge */}
                <div className="relative inline-flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full border border-[#c9a962]/40 flex items-center justify-center group-hover:bg-[#c9a962] group-hover:border-[#c9a962] transition-all duration-300">
                    <span className="font-outfit text-sm text-[#c9a962] group-hover:text-[#0a0a0b] transition-colors duration-300">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <span className="font-outfit text-xs tracking-[0.2em] text-[#b8a99a] uppercase">
                    {step.phase}
                  </span>
                </div>

                {/* Content */}
                <div className="pl-0 lg:pl-0">
                  <h3 className="font-playfair text-2xl md:text-3xl text-[#f5f0e8] mb-4 group-hover:text-[#c9a962] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="font-outfit text-[#b8a99a] text-sm md:text-base leading-relaxed mb-6">
                    {step.description}
                  </p>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#c9a962]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-outfit text-xs tracking-wide text-[#c9a962]">
                      {step.duration}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
