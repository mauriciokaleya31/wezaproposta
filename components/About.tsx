import React from 'react';
import { CONTENT } from '../constants';
import { CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-vortex-dark text-white relative overflow-hidden">
       {/* Geometric background accents */}
       <div className="absolute top-0 right-0 w-1/3 h-full bg-[#2f4556]/50 skew-x-12 transform origin-top-right hidden lg:block border-l border-white/5"></div>
       <div className="absolute bottom-0 left-0 w-64 h-64 bg-vortex-cyan/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Grid - Strictly Business/Tech Context */}
          <div className="order-2 lg:order-1 relative">
             <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 mt-8">
                   {/* Collaborative Meeting */}
                   <div className="relative group">
                     <div className="absolute inset-0 bg-vortex-pink/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
                     <img 
                        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop" 
                        className="rounded-lg w-full h-48 object-cover border border-white/10 shadow-lg" 
                        alt="Reunião Estratégica" 
                     />
                   </div>
                   {/* Tech/Laptop Close up */}
                   <div className="relative group">
                     <div className="absolute inset-0 bg-vortex-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
                     <img 
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" 
                        className="rounded-lg w-full h-64 object-cover border border-white/10 shadow-lg" 
                        alt="Análise de Dados" 
                     />
                   </div>
                </div>
                <div className="space-y-4">
                   {/* Presentation / Leadership */}
                   <div className="relative group">
                     <div className="absolute inset-0 bg-vortex-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
                     <img 
                        src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop" 
                        className="rounded-lg w-full h-64 object-cover border border-white/10 shadow-lg" 
                        alt="Liderança Corporativa" 
                     />
                   </div>
                   {/* Modern Office Environment */}
                   <div className="relative group">
                     <div className="absolute inset-0 bg-vortex-pink/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
                     <img 
                        src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=format&fit=crop" 
                        className="rounded-lg w-full h-48 object-cover border border-white/10 shadow-lg" 
                        alt="Escritório Moderno" 
                     />
                   </div>
                </div>
             </div>
          </div>

          {/* Text Content */}
          <div className="order-1 lg:order-2">
             <div className="inline-block px-3 py-1 bg-white/5 rounded-full border border-white/10 mb-6">
                <span className="text-vortex-cyan text-sm font-semibold tracking-wider uppercase">Excelência Corporativa</span>
             </div>
             
             <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
               A Vortex Angola é o seu <span className="text-vortex-cyan">Parceiro Estratégico.</span>
             </h2>
             
             <p className="text-lg text-gray-400 leading-relaxed mb-8">
               Combinamos o poder da <strong>Inteligência Artificial</strong>, conhecimento prático de gestão e rigor legal para garantir a sustentabilidade do seu negócio. Não formamos apenas alunos, formamos líderes de mercado.
             </p>
             
             <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <CheckCircle2 className="w-6 h-6 text-vortex-pink" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">Inteligência Artificial Aplicada</h4>
                    <p className="text-sm text-gray-500">Ferramentas práticas para automação e otimização imediata.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <CheckCircle2 className="w-6 h-6 text-vortex-pink" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">Gestão e Legalidade</h4>
                    <p className="text-sm text-gray-500">Conformidade jurídica e estratégias de crescimento sólido.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <CheckCircle2 className="w-6 h-6 text-vortex-pink" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">Networking de Alto Nível</h4>
                    <p className="text-sm text-gray-500">Conecte-se com outros empreendedores visionários em Angola.</p>
                  </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};