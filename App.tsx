import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Mission } from './components/Mission';
import { About } from './components/About';
import { Services } from './components/Services';
import { Footer } from './components/Footer';
import { WHATSAPP_LINK } from './constants';
import { MessageCircle } from 'lucide-react';

function App() {
  return (
    <div className="font-sans bg-white selection:bg-vortex-pink selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <Mission />
        <About />
        <Services />
      </main>

      <Footer />

      {/* Sticky Floating CTA for Mobile/Desktop */}
      <a 
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-2xl transition-transform hover:scale-110 flex items-center justify-center animate-bounce-slow"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </div>
  );
}

export default App;