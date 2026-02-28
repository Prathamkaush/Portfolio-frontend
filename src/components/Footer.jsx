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
    <footer className="mt-12 py-8 border-t border-zinc-800/80">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <div className="text-sm text-zinc-500">
            © {year} <span className="font-medium text-zinc-300">Pratham Kaushik</span>
          </div>
          <div className="text-xs text-zinc-600 mt-1">Backend / Full-Stack Engineer</div>
        </div>
        <nav className="flex items-center gap-3">
          {socials.map(({ id, href, label, Icon }) => (
            <a
              key={id}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2 rounded-lg text-zinc-500 hover:text-amber-400 hover:bg-amber-400/10 transition"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
          <a
            href="#home"
            aria-label="Back to top"
            className="p-2 rounded-lg border border-zinc-700 text-zinc-500 hover:border-amber-400/40 hover:text-amber-400 transition"
          >
            <FaChevronUp className="w-4 h-4" />
          </a>
        </nav>
      </div>
    </footer>
  );
}
