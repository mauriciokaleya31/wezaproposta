import React from 'react';
import { Zap, Instagram, Linkedin, Phone } from 'lucide-react';
import { WHATSAPP_LINK, WHATSAPP_NUMBER } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1e2b36] text-white pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
               <div className="w-8 h-8 bg-vortex-cyan rounded flex items-center justify-center">
                  <Zap className="text-vortex-dark w-5 h-5" />
               </div>
               <span className="font-bold text-xl">VORTEX ANGOLA</span>
            </div>
            <p className="text-gray-400 max-w-sm mb-6">
              Centro de Aceleração Digital, Estratégica e Tecnológica em Angola. 
              Criando o futuro dos negócios hoje.
            </p>
            <div className="flex gap-4">
               <a href="#" className="text-gray-400 hover:text-vortex-pink transition-colors"><Instagram className="w-5 h-5"/></a>
               <a href="#" className="text-gray-400 hover:text-vortex-pink transition-colors"><Linkedin className="w-5 h-5"/></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-vortex-cyan">Links Rápidos</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#mission" className="hover:text-white transition-colors">Nossa Missão</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Quem Somos</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Cursos & Serviços</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-vortex-cyan">Contato</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href={WHATSAPP_LINK} className="hover:text-white transition-colors">{WHATSAPP_NUMBER}</a>
              </li>
              <li>Luanda, Angola</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Vortex Angola. Todos os direitos reservados.
          </p>
          <p className="text-gray-600 text-xs">
            Desenvolvido com excelência.
          </p>
        </div>
      </div>
    </footer>
  );
};