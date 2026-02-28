import React, { useMemo, useState, useEffect } from "react";
import { useScrollProgress } from "../hooks/useScrollProgress";

function DevCharacter({ intensity, isMaxed }) {
  const particles = useMemo(() => 
    Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      angle: (i / 15) * Math.PI * 2,
      distance: 30 + Math.random() * 50,
      size: 1.5 + Math.random() * 2
    })), []);

  const shake = intensity > 0.8 && !isMaxed ? (Math.random() - 0.5) * (intensity * 6) : 0;

  return (
    <svg 
      viewBox="0 0 160 160" 
      className="w-full h-full overflow-visible transition-all duration-500" 
      style={{ 
        transform: `translate(${shake}px, ${shake}px) scale(${isMaxed ? 1.3 : 1})`,
        filter: isMaxed ? 'brightness(1.5) drop-shadow(0 0 15px #fbbf24)' : 'none'
      }}
    >
      <defs>
        <radialGradient id="burstGrad">
          <stop offset="0%" stopColor="#fff" />
          <stop offset="30%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>

      {/* Charging Particles */}
      {!isMaxed && intensity > 0.1 && particles.map((p) => (
        <circle
          key={p.id}
          cx={80 + Math.cos(p.angle) * (p.distance * (1 - intensity))}
          cy={80 + Math.sin(p.angle) * (p.distance * (1 - intensity))}
          r={p.size}
          fill="#fbbf24"
        >
          <animate attributeName="opacity" values="0;1;0" dur="0.8s" repeatCount="indefinite" />
        </circle>
      ))}

      {/* Character Figure */}
      <g transform="translate(65, 60)">
        <circle cx="15" cy="0" r="10" fill="#18181b" stroke="#fbbf24" strokeWidth={isMaxed ? 2 : 1} />
        <circle cx="12" cy="-2" r="1.5" fill={intensity > 0.8 ? "#fff" : "#fbbf24"} />
        <circle cx="18" cy="-2" r="1.5" fill={intensity > 0.8 ? "#fff" : "#fbbf24"} />
        <path d="M0,30 Q15,25 30,30 L25,50 L5,50 Z" fill="#27272a" stroke="#fbbf24" strokeWidth="1" />
      </g>

      {/* Energy Ball - Becomes the "Projectile" */}
      <circle
        cx="80"
        cy={isMaxed ? -200 : 85} 
        r={isMaxed ? 40 : 5 + intensity * 30}
        fill="url(#burstGrad)"
        className="transition-all duration-700 ease-in"
        opacity={isMaxed ? 0 : 0.3 + intensity * 0.7}
      />
    </svg>
  );
}

export default function ScrollPower() {
  const progress = useScrollProgress();
  const [isMaxed, setIsMaxed] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);
  
  const intensity = Math.min(1, progress * 1.05);
  const isAtBottom = progress >= 0.99;

  useEffect(() => {
    if (isAtBottom && !isMaxed) {
      setIsMaxed(true);
      // Wait for the "shoot" animation to finish, then remove from DOM
      const timer = setTimeout(() => setShouldRender(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [isAtBottom, isMaxed]);

  if (!shouldRender) return null;

  return (
    <div 
      className={`fixed bottom-8 left-8 z-[100] flex flex-col items-center pointer-events-none transition-all duration-1000 ${
        isMaxed ? "opacity-100" : "opacity-100"
      }`}
    >
      {/* The Character */}
      <div className={`w-32 h-32 md:w-44 md:h-44 relative transition-all duration-1000 ${isMaxed ? 'opacity-0 translate-y-10' : ''}`}>
        <DevCharacter intensity={intensity} isMaxed={isMaxed} />
      </div>
      
      {/* The Shooting Message */}
      <div className="absolute top-0 flex flex-col items-center text-center mt-25 ml-10">
        <div 
          className={`whitespace-nowrap font-black tracking-tighter uppercase transition-all duration-700 ease-in-out ${
            isMaxed 
              ? "-translate-y-[400px] scale-150 opacity-0 text-white" 
              : "translate-y-20 opacity-0 text-amber-400"
          }`}
          style={{ 
            textShadow: '0 0 20px #fbbf24',
            opacity: isMaxed ? 1 : 0 
          }}
        >
          <span className="text-xl block">BOOM!</span>
          <span className="text-sm">THANKS FOR VISITING!</span>
        </div>
      </div>

      {/* Progress UI - Fades out immediately on max */}
      <div className={`mt-[-15px] flex flex-col items-center text-center transition-opacity duration-300 ${isMaxed ? 'opacity-0' : 'opacity-100'}`}>
        <div className="text-xs font-black text-amber-400">
          CHARGE: {Math.round(intensity * 100)}%
        </div>
        <div className="w-24 h-1 bg-zinc-800/50 rounded-full mt-2 overflow-hidden backdrop-blur-sm">
          <div 
            className="h-full bg-amber-400 transition-all duration-300"
            style={{ width: `${intensity * 100}%` }}
          />
        </div>
      </div>

      {/* Burst Flash */}
      {isMaxed && (
        <div className="fixed inset-0 bg-white/20 pointer-events-none animate-[ping_0.6s_ease-in-out_1]" />
      )}
    </div>
  );
}