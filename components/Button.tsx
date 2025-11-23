import React from 'react';
import { ArrowRight } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

interface ButtonProps {
  text: string;
  variant?: 'primary' | 'outline';
  className?: string;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  text, 
  variant = 'primary', 
  className = '', 
  fullWidth = false 
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-vortex-pink text-white hover:bg-pink-600 hover:shadow-lg hover:shadow-pink-500/30 ring-vortex-pink",
    outline: "border-2 border-vortex-cyan text-vortex-cyan hover:bg-vortex-cyan hover:text-vortex-dark ring-vortex-cyan"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <a 
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
    >
      {text}
      <ArrowRight className="w-5 h-5" />
    </a>
  );
};