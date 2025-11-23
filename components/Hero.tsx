import React from 'react';
import { Button } from './Button';
import { CheckCircle, Trophy, Users, Zap } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-vortex-dark">
      
      {/* Background Elements - Abstract Tech/Data (No Landscapes) */}
      <div className="absolute inset-0 z-0">
         <img 
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop" 
            alt="Technology Circuit Background" 
            className="w-full h-full object-cover opacity-10 mix-blend-overlay"
         />
         {/* Gradient Overlay for Text Readability */}
         <div className="absolute inset-0 bg-gradient-to-r from-vortex-dark via-vortex-dark/95 to-vortex-dark/80" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content - High Conversion Copy */}
          <div className="lg:w-1/2 space-y-8 pt-10 lg:pt-0">
            <div className="inline-flex items-center gap-2 bg-vortex-pink/10 border border-vortex-pink/20 px-4 py-2 rounded-full backdrop-blur-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-vortex-pink opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-vortex-pink"></span>
              </span>
              <span className="text-vortex-pink text-xs font-bold uppercase tracking-wider">Turma 2025 - Vagas Limitadas</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1]">
              Acelere a sua Carreira com <span className="text-transparent bg-clip-text bg-gradient-to-r from-vortex-cyan to-white">Inteligência Artificial.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed font-light">
              Não fique para trás. Domine as ferramentas que estão a redefinir o mercado angolano. Estratégia, Tecnologia e Liderança num único curso.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button text="Reservar vaga agora" className="md:text-lg px-10 py-5" />
              <p className="text-gray-400 text-sm flex items-center gap-2 sm:hidden justify-center">
                <CheckCircle className="w-4 h-4 text-green-500" /> 
                Resposta imediata no WhatsApp
              </p>
            </div>
            
            {/* Social Proof / Authority Indicators */}
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
          </div>

          {/* Visual Content - Aspirational Business Image */}
          <div className="lg:w-1/2 relative hidden md:block group">
             <div className="absolute inset-0 bg-vortex-cyan blur-[100px] opacity-20 rounded-full group-hover:opacity-30 transition-opacity duration-700"></div>
             
             <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 aspect-[4/5] max-w-md mx-auto transform group-hover:-translate-y-2 transition-transform duration-500">
                {/* Specific High-Quality Image: Black Professional / Tech / Confidence */}
                <img 
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1000&auto=format&fit=crop" 
                  alt="Profissional de Sucesso Angolana" 
                  className="w-full h-full object-cover"
                />
                
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
          </div>

        </div>
      </div>
    </section>
  );
};