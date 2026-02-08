const services = [
  {
    number: '01',
    title: 'Strategic AI Consulting',
    description: 'Navigate the AI landscape with clarity. We assess your operations, identify high-impact opportunities, and craft a roadmap tailored to your ambitions.',
    features: ['Opportunity Assessment', 'ROI Modeling', 'Implementation Roadmap'],
  },
  {
    number: '02',
    title: 'Custom Model Development',
    description: 'From natural language to computer vision, we design and train AI models purpose-built for your unique challenges and data ecosystems.',
    features: ['LLM Fine-tuning', 'Predictive Analytics', 'Computer Vision'],
  },
  {
    number: '03',
    title: 'Intelligent Automation',
    description: 'Transform workflows with AI-driven automation that learns, adapts, and scales. Eliminate friction. Amplify human potential.',
    features: ['Process Automation', 'Document Intelligence', 'Decision Systems'],
  },
  {
    number: '04',
    title: 'AI Integration & Deployment',
    description: 'Seamlessly embed AI capabilities into your existing infrastructure. Production-grade systems designed for reliability and scale.',
    features: ['API Development', 'Cloud Architecture', 'MLOps Implementation'],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-24">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-[#c9a962]" />
              <span className="text-xs font-outfit tracking-[0.3em] text-[#c9a962] uppercase">
                Our Expertise
              </span>
            </div>
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight">
              Capabilities that
              <br />
              <span className="text-[#c9a962]">redefine possible</span>
            </h2>
          </div>
          <p className="font-outfit text-[#b8a99a] max-w-md text-base md:text-lg">
            Every engagement is crafted with precision, delivering AI solutions
            that create measurable, lasting impact.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#f5f0e8]/10">
          {services.map((service, index) => (
            <div
              key={service.number}
              className="group relative bg-[#0a0a0b] p-8 md:p-12 hover:bg-[#0f0f10] transition-colors duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Number */}
              <span className="absolute top-8 md:top-12 right-8 md:right-12 font-playfair text-6xl md:text-7xl lg:text-8xl text-[#f5f0e8]/5 group-hover:text-[#c9a962]/10 transition-colors duration-500">
                {service.number}
              </span>

              <div className="relative z-10">
                <h3 className="font-playfair text-xl md:text-2xl lg:text-3xl text-[#f5f0e8] mb-4 group-hover:text-[#c9a962] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="font-outfit text-[#b8a99a] text-sm md:text-base leading-relaxed mb-8 max-w-md">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-3">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs font-outfit tracking-wide text-[#f5f0e8]/60 px-3 py-1.5 border border-[#f5f0e8]/10 group-hover:border-[#c9a962]/30 group-hover:text-[#c9a962]/80 transition-all duration-300"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Accent */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#c9a962] group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
