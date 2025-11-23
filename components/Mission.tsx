import React from 'react';
import { Target, Globe, Zap } from 'lucide-react';
import { CONTENT } from '../constants';
import { RevealOnScroll } from './RevealOnScroll';

export const Mission: React.FC = () => {
  return (
    <section id="mission" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          <div className="md:w-1/3 relative">
             <RevealOnScroll direction="right">
               <div className="aspect-square rounded-full bg-vortex-dark/5 flex items-center justify-center p-12 relative">
                 <div className="absolute inset-0 border border-dashed border-vortex-dark/20 rounded-full animate-spin-slow"></div>
                 <Target className="w-24 h-24 text-vortex-dark" strokeWidth={1} />
               </div>
             </RevealOnScroll>
          </div>

          <div className="md:w-2/3">
            <RevealOnScroll>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-12 bg-vortex-pink"></span>
                <span className="text-vortex-pink font-bold uppercase tracking-widest text-sm">Nossa Missão</span>
              </div>
            </RevealOnScroll>
            
            <RevealOnScroll delay={200}>
              <h2 className="text-3xl md:text-4xl font-bold text-vortex-dark mb-8 leading-snug">
                Impulsionar o futuro digital de Angola.
              </h2>
            </RevealOnScroll>
            
            <RevealOnScroll delay={400}>
              <p className="text-lg text-gray-600 leading-relaxed border-l-4 border-vortex-cyan pl-6">
                {CONTENT.mission}
              </p>
            </RevealOnScroll>
          </div>

        </div>
      </div>
    </section>
  );
};