import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaChevronUp } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();
  const socials = [
    { id: "github", href: "https://github.com/Prathamkaush", label: "GitHub", Icon: FaGithub },
    { id: "linkedin", href: "https://www.linkedin.com/in/pratham-kaushik-69288b37b/", label: "LinkedIn", Icon: FaLinkedin },
    { id: "instagram", href: "https://www.instagram.com/messyclash", label: "Instagram", Icon: FaInstagram },
  ];

  return (
    <footer className="mt-24 py-10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        <div className="text-center md:text-left">
          <div className="text-sm text-zinc-500">
            © {year} <span className="font-bold text-white tracking-wide">PRATHAM</span> <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-emerald-400">KAUSHIK</span>
          </div>
          <div className="text-sm font-medium text-zinc-600 mt-2">Backend / Full-Stack Engineer</div>
        </div>
        
        <nav className="flex items-center gap-4">
          {socials.map(({ id, href, label, Icon }) => (
            <a
              key={id}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-3 rounded-xl bg-zinc-900/50 border border-white/5 text-zinc-400 hover:text-white hover:border-purple-500/30 hover:shadow-[0_0_15px_rgba(147,51,234,0.2)] transition-all group"
            >
              <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
          ))}
          <a
            href="#home"
            aria-label="Back to top"
            className="p-3 rounded-xl bg-zinc-900/50 border border-white/5 text-emerald-400 hover:text-white hover:border-emerald-500/30 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all group ml-4"
          >
            <FaChevronUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </a>
        </nav>
      </div>
    </footer>
  );
}
