import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-vortex-dark/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-vortex-cyan rounded-lg flex items-center justify-center transform rotate-45">
              <Zap className="text-vortex-dark w-6 h-6 -rotate-45" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-xl tracking-wider leading-none">VORTEX</span>
              <span className="text-vortex-gray text-xs tracking-[0.2em] uppercase">Angola</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#mission" className="text-gray-300 hover:text-vortex-cyan transition-colors text-sm font-medium">Missão</a>
            <a href="#about" className="text-gray-300 hover:text-vortex-cyan transition-colors text-sm font-medium">Quem Somos</a>
            <a href="#services" className="text-gray-300 hover:text-vortex-cyan transition-colors text-sm font-medium">Serviços</a>
            <a 
              href={WHATSAPP_LINK} 
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all border border-white/20"
            >
              Fale Conosco
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-vortex-dark absolute top-full w-full border-t border-white/10">
          <div className="flex flex-col p-4 space-y-4">
             <a onClick={() => setIsMobileMenuOpen(false)} href="#mission" className="text-gray-300 hover:text-vortex-cyan">Missão</a>
             <a onClick={() => setIsMobileMenuOpen(false)} href="#about" className="text-gray-300 hover:text-vortex-cyan">Quem Somos</a>
             <a onClick={() => setIsMobileMenuOpen(false)} href="#services" className="text-gray-300 hover:text-vortex-cyan">Serviços</a>
             <a 
               href={WHATSAPP_LINK}
               className="text-vortex-pink font-bold"
            >
              Reservar Vaga
             </a>
          </div>
        </div>
      )}
    </nav>
  );
};