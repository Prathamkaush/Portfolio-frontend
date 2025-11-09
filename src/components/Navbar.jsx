import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeSwitcher from "./ThemeSwitcher";
import { useTheme } from "./ThemeContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme } = useTheme();

  const links = [
    { id: "hero", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[1000] backdrop-blur-md border-b transition-all duration-500 ${
        theme === "sci-fi"
          ? "bg-slate-900/60 border-cyan-400/20 text-cyan-100"
          : "bg-white/80 border-pink-400/30 text-black"
      }`}
    >
      {/* === NAV CONTAINER === */}
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
        {/* === LEFT: BURGER ICON (Mobile Only) === */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="burger-icon md:hidden text-2xl rounded transition p-1"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* === CENTER: LOGO / NAME === */}
        <motion.h1
          className="text-xl md:text-2xl font-bold cursor-pointer select-none flex-1 text-center md:text-left"
          whileHover={{ scale: 1.05 }}
        >
          {theme === "sci-fi" ? (
            <span className="text-cyan-400 drop-shadow-[0_0_6px_#00ffff]">
              PRATHAM
            </span>
          ) : (
            <span className="text-pink-600">PRATHAM</span>
          )}
        </motion.h1>

        {/* === RIGHT: DESKTOP BUTTONS (INCLUDING THEME SWITCHER) === */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          {links.map((link) => (
            <motion.button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              whileHover={{ scale: 1.1 }}
              className={`transition ${
                theme === "sci-fi"
                  ? "hover:text-cyan-400"
                  : "hover:text-pink-600"
              }`}
            >
              {link.label}
            </motion.button>
          ))}
          <ThemeSwitcher />
        </div>
      </div>

      {/* === MOBILE MENU === */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden flex flex-col items-center gap-4 py-4 ${
              theme === "sci-fi"
                ? "bg-slate-900/90 text-cyan-100 border-t border-cyan-400/20"
                : "bg-white/95 text-black border-t border-pink-400/20"
            }`}
          >
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`text-lg font-medium ${
                  theme === "sci-fi"
                    ? "hover:text-cyan-400"
                    : "hover:text-pink-600"
                }`}
              >
                {link.label}
              </button>
            ))}

            {/* Theme button visible only in mobile menu */}
            <div className="pt-2">
              <ThemeSwitcher />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
