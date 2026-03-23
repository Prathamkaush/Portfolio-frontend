import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      setTimeout(() => {
        const el = document.getElementById(link.id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  const linkClass = "relative font-medium text-sm transition-colors hover:text-white px-2 py-1 group";
  const linkEl = (link) => (
    <Link to={link.to} onClick={() => handleNavClick(link)} className={linkClass}>
      {link.label}
      <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-purple-500 to-emerald-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
    </Link>
  );

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ${
        scrolled 
          ? "py-2 bg-zinc-950/70 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20" 
          : "py-4 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6">
        <Link to="/" className="flex-1 flex justify-start z-50">
          <span className="text-xl font-bold text-white tracking-tight">
            PRATHAM <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-emerald-400">KAUSHIK</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-zinc-300">
          {navLinks.map((link) => (
            <span key={link.id}>{linkEl(link)}</span>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 z-50 rounded-lg text-zinc-300 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 w-full bg-zinc-950/95 backdrop-blur-xl border-b border-white/5"
          >
            <div className="flex flex-col items-center gap-6 py-8">
              {navLinks.map((link) => (
                <span key={link.id} className="text-lg text-zinc-300 hover:text-white transition-colors" onClick={() => setMenuOpen(false)}>
                  <Link to={link.to} onClick={() => handleNavClick(link)}>
                    {link.label}
                  </Link>
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
