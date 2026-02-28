import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const navLinks = [
    { id: "home", label: "Home", to: "/" },
    { id: "projects", label: "Projects", to: "/projects" },
    { id: "skills", label: "Skills", to: "/#skills" },
    { id: "experience", label: "Experience", to: "/#experience" },
    { id: "education", label: "Education", to: "/#education" },
    { id: "about", label: "About", to: "/#about" },
    { id: "contact", label: "Contact", to: "/#contact" },
  ];

  const handleNavClick = (link) => {
    setMenuOpen(false);
    if (link.id !== "projects" && link.id !== "home" && isHome) {
      const el = document.getElementById(link.id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const linkClass = "transition hover:text-amber-400";
  const linkEl = (link) => (
    <Link to={link.to} onClick={() => handleNavClick(link)} className={linkClass}>
      {link.label}
    </Link>
  );

  return (
    <nav className="fixed top-0 left-0 w-full z-[1000] backdrop-blur-md border-b border-zinc-800/80 bg-zinc-900/70 text-zinc-200">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-zinc-800 transition"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <Link to="/" className="flex-1 flex justify-center md:justify-start">
          <span className="text-lg md:text-xl font-bold text-amber-400 hover:text-amber-300 transition">
            PRATHAM KAUSHIK
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <span key={link.id}>{linkEl(link)}</span>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden flex flex-col items-center gap-4 py-4 border-t border-zinc-800 bg-zinc-900/95"
          >
            {navLinks.map((link) => (
              <span key={link.id} onClick={() => setMenuOpen(false)}>
                {linkEl(link)}
              </span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
