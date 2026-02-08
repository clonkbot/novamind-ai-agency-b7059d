import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ['Services', 'About', 'Process', 'Contact'];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-20 py-6">
      <div className="flex items-center justify-between">
        <a href="#" className="font-playfair text-xl md:text-2xl tracking-tight">
          <span className="text-[#c9a962]">Nova</span>
          <span className="text-[#f5f0e8]">mind</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-outfit tracking-wide text-[#b8a99a] hover:text-[#f5f0e8] transition-colors duration-300"
            >
              {item}
            </a>
          ))}
          <button className="ml-4 px-6 py-3 text-sm font-outfit tracking-wide border border-[#c9a962]/40 text-[#c9a962] hover:bg-[#c9a962] hover:text-[#0a0a0b] transition-all duration-300">
            Start a Project
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden w-12 h-12 flex flex-col items-center justify-center gap-1.5"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={`w-6 h-0.5 bg-[#f5f0e8] transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-[#f5f0e8] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-[#f5f0e8] transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 top-20 bg-[#0a0a0b]/98 backdrop-blur-xl transition-all duration-500 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navItems.map((item, index) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-playfair text-[#f5f0e8] hover:text-[#c9a962] transition-colors duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item}
            </a>
          ))}
          <button
            className="mt-4 px-8 py-4 text-base font-outfit tracking-wide border border-[#c9a962]/40 text-[#c9a962] hover:bg-[#c9a962] hover:text-[#0a0a0b] transition-all duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Start a Project
          </button>
        </div>
      </div>
    </nav>
  );
}
