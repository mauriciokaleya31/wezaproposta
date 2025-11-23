import React from 'react';
import { Brain, TrendingUp, ShieldCheck } from 'lucide-react';
import { CONTENT } from '../constants';
import { Button } from './Button';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-vortex-dark">
            Nossos Pilares de <span className="text-vortex-pink">Serviço</span>
          </h2>
          <p className="mt-4 text-gray-600">Excelência técnica e estratégica para o seu negócio.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Featured Pillar - AI */}
          <div className="md:col-span-3 lg:col-span-2 bg-vortex-dark rounded-2xl p-8 md:p-12 shadow-xl text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 bg-vortex-pink w-24 h-24 rounded-bl-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-vortex-cyan/20 rounded-xl flex items-center justify-center mb-6 text-vortex-cyan">
                <Brain className="w-8 h-8" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">{CONTENT.pillarTitle}</h3>
              <p className="text-vortex-gray mb-8 text-lg leading-relaxed">
                {CONTENT.pillarText}
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {['SEO', 'Ads', 'Automação', 'Machine Learning', 'Data Analytics'].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-vortex-cyan border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
              <Button text="Quero garantir minha vaga" />
            </div>
          </div>

          {/* Secondary Pillars */}
          <div className="space-y-8 lg:col-span-1">
            
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 h-full flex flex-col justify-center">
              <div className="w-12 h-12 bg-pink-50 rounded-lg flex items-center justify-center mb-4 text-vortex-pink">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-vortex-dark mb-2">Gestão Estratégica</h4>
              <p className="text-gray-500 text-sm">
                Otimização de processos e liderança voltada para resultados mensuráveis.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 h-full flex flex-col justify-center">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-vortex-dark mb-2">Segurança & Legal</h4>
              <p className="text-gray-500 text-sm">
                Conformidade jurídica e proteção de dados no ambiente digital.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};