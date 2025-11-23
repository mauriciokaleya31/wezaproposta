import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { CheckCircle, Trophy, Users, Zap } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1000&auto=format&fit=crop", // Woman Tech
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop", // Team Collaboration
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop", // Leadership
];

export const Hero: React.FC = () => {
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIdx((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-vortex-dark">
      
      {/* Background Elements - Abstract Tech/Data */}
      <div className="absolute inset-0 z-0">
         <img 
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop" 
            alt="Technology Circuit Background" 
            className="w-full h-full object-cover opacity-10 mix-blend-overlay"
         />
         <div className="absolute inset-0 bg-gradient-to-r from-vortex-dark via-vortex-dark/95 to-vortex-dark/80" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-8 pt-10 lg:pt-0">
            <RevealOnScroll direction="right">
              <div className="inline-flex items-center gap-2 bg-vortex-pink/10 border border-vortex-pink/20 px-4 py-2 rounded-full backdrop-blur-sm">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-vortex-pink opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-vortex-pink"></span>
                </span>
                <span className="text-vortex-pink text-xs font-bold uppercase tracking-wider">Turma 2025 - Vagas Limitadas</span>
              </div>
            </RevealOnScroll>
            
            <RevealOnScroll delay={200}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1]">
                Acelere a sua Carreira com <span className="text-transparent bg-clip-text bg-gradient-to-r from-vortex-cyan to-white">Inteligência Artificial.</span>
              </h1>
            </RevealOnScroll>
            
            <RevealOnScroll delay={400}>
              <p className="text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed font-light">
                Não fique para trás. Domine as ferramentas que estão a redefinir o mercado angolano. Estratégia, Tecnologia e Liderança num único curso.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={600}>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button text="Reservar vaga agora" className="md:text-lg px-10 py-5" />
                <p className="text-gray-400 text-sm flex items-center gap-2 sm:hidden justify-center">
                  <CheckCircle className="w-4 h-4 text-green-500" /> 
                  Resposta imediata no WhatsApp
                </p>
              </div>
            </RevealOnScroll>
            
            {/* Social Proof */}
            <RevealOnScroll delay={800}>
              <div className="grid grid-cols-3 gap-6 border-t border-white/10 pt-8 mt-8">
                 <div className="flex flex-col gap-1">
                   <div className="flex items-center gap-2 text-vortex-cyan">
                      <Users className="w-5 h-5" />
                      <span className="font-bold text-2xl text-white">+500</span>
                   </div>
                   <p className="text-gray-400 text-xs uppercase tracking-wide">Alunos Formados</p>
                 </div>
                 <div className="flex flex-col gap-1">
                   <div className="flex items-center gap-2 text-vortex-cyan">
                      <Zap className="w-5 h-5" />
                      <span className="font-bold text-2xl text-white">100%</span>
                   </div>
                   <p className="text-gray-400 text-xs uppercase tracking-wide">Foco Prático</p>
                 </div>
                 <div className="flex flex-col gap-1">
                   <div className="flex items-center gap-2 text-vortex-cyan">
                      <Trophy className="w-5 h-5" />
                      <span className="font-bold text-2xl text-white">Top</span>
                   </div>
                   <p className="text-gray-400 text-xs uppercase tracking-wide">Mercado Angolano</p>
                 </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Visual Content - Carousel Slider */}
          <div className="lg:w-1/2 relative w-full group">
             <div className="absolute inset-0 bg-vortex-cyan blur-[100px] opacity-20 rounded-full group-hover:opacity-30 transition-opacity duration-700"></div>
             
             <RevealOnScroll direction="left" delay={300} className="w-full">
               <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 aspect-[4/5] max-w-md mx-auto transform transition-transform duration-500 hover:scale-[1.02]">
                  
                  {/* Image Slides */}
                  {HERO_IMAGES.map((img, index) => (
                    <img 
                      key={index}
                      src={img} 
                      alt={`Vortex Angola Slide ${index + 1}`} 
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                        index === currentImageIdx ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
                      }`}
                    />
                  ))}
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-vortex-dark/80 via-transparent to-transparent"></div>

                  {/* Slider Indicators */}
                  <div className="absolute top-4 right-4 flex gap-2 z-20">
                    {HERO_IMAGES.map((_, index) => (
                      <div 
                        key={index} 
                        className={`h-1 rounded-full transition-all duration-300 ${index === currentImageIdx ? 'w-6 bg-vortex-pink' : 'w-2 bg-white/50'}`}
                      />
                    ))}
                  </div>
                  
                  {/* Floating Card Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-vortex-pink flex items-center justify-center">
                        <Zap className="text-white w-5 h-5 fill-current" />
                      </div>
                      <div>
                        <p className="text-white font-bold text-sm">Próxima Turma</p>
                        <p className="text-vortex-cyan text-xs">Inscrições Abertas</p>
                      </div>
                      <div className="ml-auto">
                        <span className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded border border-green-500/30">Disponível</span>
                      </div>
                    </div>
                  </div>
               </div>
             </RevealOnScroll>
          </div>

        </div>
      </div>
    </section>
  );
};