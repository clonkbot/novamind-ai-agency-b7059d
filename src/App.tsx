import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen bg-[#0a0a0b] text-[#f5f0e8] transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[80vw] h-[80vh] opacity-30">
          <div className="absolute inset-0 bg-gradient-to-bl from-[#c9a962]/20 via-transparent to-transparent blur-3xl" />
        </div>
        <div className="absolute bottom-0 left-0 w-[60vw] h-[60vh] opacity-20">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#b8a99a]/20 via-transparent to-transparent blur-3xl" />
        </div>
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10">
        <Navigation />
        <Hero />
        <Services />
        <About />
        <Process />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
