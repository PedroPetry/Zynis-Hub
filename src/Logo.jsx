import React from 'react';

// Opção 1: "The Nexus Z" - Geométrico, forte, representa conexão e solidez.
export const LogoOption1 = ({ className = "w-8 h-8", showText = false }) => (
  <div className="flex items-center gap-3">
    <svg 
      viewBox="0 0 40 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      <rect width="40" height="40" rx="12" fill="url(#paint0_linear)" />
      <path d="M12 12H28L12 28H28" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <defs>
        <linearGradient id="paint0_linear" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2F6BFF"/>
          <stop offset="1" stopColor="#6C5CE7"/>
        </linearGradient>
      </defs>
    </svg>
    {showText && (
      <span className="text-xl font-bold text-white tracking-tight">
        Zynis<span className="text-[#2F6BFF]">Hub</span>
      </span>
    )}
  </div>
);

// Opção 2: "The Tech Circuit" - Minimalista, linhas finas, representa fluxo de dados.
export const LogoOption2 = ({ className = "w-8 h-8", showText = false }) => (
  <div className="flex items-center gap-3">
    <svg 
      viewBox="0 0 40 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      <path d="M10 10L30 10L10 30L30 30" stroke="#2F6BFF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="30" cy="10" r="3" fill="white"/>
      <circle cx="10" cy="30" r="3" fill="white"/>
    </svg>
    {showText && (
      <span className="text-xl font-bold text-white tracking-tight font-mono">
        ZYNIS_HUB
      </span>
    )}
  </div>
);

// Opção 3: "The Abstract Growth" - Futurista, setas, representa escala e velocidade.
export const LogoOption3 = ({ className = "w-8 h-8", showText = false }) => (
  <div className="flex items-center gap-3">
    <svg 
      viewBox="0 0 40 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      <path d="M8 20L20 8L32 20" stroke="url(#grad1)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 32L20 20L32 32" stroke="url(#grad2)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
      <defs>
        <linearGradient id="grad1" x1="8" y1="8" x2="32" y2="20" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2F6BFF"/>
          <stop offset="1" stopColor="#00D2FF"/>
        </linearGradient>
        <linearGradient id="grad2" x1="8" y1="20" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6C5CE7"/>
          <stop offset="1" stopColor="#2F6BFF"/>
        </linearGradient>
      </defs>
    </svg>
    {showText && (
      <span className="text-xl font-bold text-white uppercase tracking-wider">
        Zynis Hub
      </span>
    )}
  </div>
);

// Exportar a opção escolhida como padrão (Mude aqui para trocar o logo do site inteiro)
// LogoOption1 = Fundo Quadrado Gradiente
// LogoOption2 = Linhas Minimalistas
// LogoOption3 = Setas Abstratas
const Logo = LogoOption2; 

export default Logo;