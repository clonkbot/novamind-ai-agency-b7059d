import { useEffect, useState } from 'react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 pt-24 pb-16 overflow-hidden">
      {/* Animated Orb */}
      <div
        className="absolute right-[5%] md:right-[10%] lg:right-[15%] top-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]"
        style={{
          transform: `translate(${mousePosition.x}px, calc(-50% + ${mousePosition.y}px))`,
          transition: 'transform 0.5s ease-out',
        }}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#c9a962]/40 via-[#b8a99a]/20 to-transparent blur-3xl animate-pulse" />
        <div className="absolute inset-10 rounded-full bg-gradient-to-tl from-[#c9a962]/30 via-transparent to-[#b8a99a]/10 blur-2xl animate-[pulse_4s_ease-in-out_infinite]" />
        <div className="absolute inset-20 rounded-full bg-gradient-to-r from-[#c9a962]/20 to-[#b8a99a]/20 blur-xl animate-[pulse_3s_ease-in-out_infinite_reverse]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8 animate-[fadeSlideUp_0.8s_ease-out]">
            <div className="w-12 h-px bg-[#c9a962]" />
            <span className="text-xs md:text-sm font-outfit tracking-[0.3em] text-[#c9a962] uppercase">
              AI Solutions Studio
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] tracking-tight mb-8 animate-[fadeSlideUp_0.8s_ease-out_0.1s_both]">
            Intelligence
            <br />
            <span className="text-[#c9a962]">Reimagined</span>
            <span className="text-[#b8a99a]">.</span>
          </h1>

          {/* Subheadline */}
          <p className="font-outfit text-base md:text-lg lg:text-xl text-[#b8a99a] leading-relaxed max-w-xl mb-12 animate-[fadeSlideUp_0.8s_ease-out_0.2s_both]">
            We architect bespoke AI solutions that transform how visionary
            companies operate, compete, and define their industries.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-[fadeSlideUp_0.8s_ease-out_0.3s_both]">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#c9a962] text-[#0a0a0b] font-outfit text-sm tracking-wide hover:bg-[#f5f0e8] transition-all duration-300"
            >
              Begin Your Transformation
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-[#f5f0e8]/20 text-[#f5f0e8] font-outfit text-sm tracking-wide hover:border-[#f5f0e8]/60 transition-all duration-300"
            >
              Explore Capabilities
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3 animate-[fadeSlideUp_0.8s_ease-out_0.5s_both]">
          <span className="text-xs font-outfit tracking-widest text-[#b8a99a] uppercase">Scroll</span>
          <div className="w-px h-16 bg-gradient-to-b from-[#c9a962] to-transparent" />
        </div>
      </div>
    </section>
  );
}
