import React, { useEffect, useRef, useState } from 'react';
import Hero3D from './components/Hero3D';
import About from './components/About';
import CaseStudies from './components/CaseStudies';
import Contact from './components/Contact';

// Custom Cursor (electric red dot that grows on interactive elements)
const useCustomCursor = () => {
  const cursorRef = useRef(null);
  const [interactive, setInteractive] = useState(false);

  useEffect(() => {
    const onMove = (e) => {
      const el = cursorRef.current;
      if (!el) return;
      const x = e.clientX;
      const y = e.clientY;
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    const add = () => setInteractive(true);
    const remove = () => setInteractive(false);

    window.addEventListener('mousemove', onMove, { passive: true });
    const selectors = 'a, button, [role="button"], input, textarea, video';
    const enterTargets = () => document.querySelectorAll(selectors).forEach(el => {
      el.addEventListener('mouseenter', add);
      el.addEventListener('mouseleave', remove);
    });
    enterTargets();

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.querySelectorAll(selectors).forEach(el => {
        el.removeEventListener('mouseenter', add);
        el.removeEventListener('mouseleave', remove);
      });
    };
  }, []);

  return { cursorRef, interactive };
};

const App = () => {
  const { cursorRef, interactive } = useCustomCursor();

  return (
    <div className="bg-[#0D0D0D] text-white antialiased">
      {/* Custom cursor */}
      <div
        ref={cursorRef}
        className={`pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2 transition-all duration-150 ease-out ${interactive ? 'scale-150' : 'scale-100'}`}
        style={{ mixBlendMode: 'normal' }}
      >
        <div className={`h-3 w-3 rounded-full ${interactive ? 'ring-2 ring-[#FF003B]/60' : ''}`} style={{ backgroundColor: '#FF003B' }} />
      </div>

      {/* Navigation */}
      <header className="fixed inset-x-0 top-0 z-40 backdrop-blur-md border-b border-white/5 bg-black/20">
        <nav className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight">DEV/<span className="text-[#FF003B]">LAB</span></a>
          <div className="hidden md:flex items-center gap-6 text-sm text-[#eaeaea]">
            <a href="#about" className="hover:text-[#FF003B] transition-colors">About</a>
            <a href="#work" className="hover:text-[#FF003B] transition-colors">Work</a>
            <a href="#contact" className="hover:text-[#FF003B] transition-colors">Contact</a>
          </div>
        </nav>
      </header>

      {/* Sections */}
      <main className="relative">
        <Hero3D />
        <About />
        <CaseStudies />
        <Contact />

        {/* Faint grid background for scrollytelling depth */}
        <div className="pointer-events-none fixed inset-0 -z-0 [background-image:radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:24px_24px] opacity-30" />
      </main>

      <footer className="border-t border-white/5 bg-[#0C0C0C] text-[#888888] text-xs py-6 text-center">
        © {new Date().getFullYear()} Your Name — Built with care.
      </footer>
    </div>
  );
};

export default App;
