import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SciFiBackground from "./components/SciFiBackground";
import { useTheme } from "./components/ThemeContext";

export default function App() {
  const { theme } = useTheme();

  useEffect(() => {
    if (theme === "sci-fi") {
      document.body.classList.add("sci-fi-active");
      document.body.classList.remove("chaos-active");
    } else {
      document.body.classList.add("chaos-active");
      document.body.classList.remove("sci-fi-active");
    }
  }, [theme]);

  return (
    <div className="relative min-h-screen text-slate-100 overflow-hidden">
      {/* === Background depends on theme === */}
      {theme === "sci-fi" ? (
        <>
          <div className="sci-fi-bg"></div>
          <SciFiBackground key={theme} />
        </>
      ) : (
        <div className="chaos-bg"></div>
      )}

      {/* ✅ Only ONE Navbar (with integrated theme switcher) */}
      <Navbar />

      {/* === Push content below navbar === */}
      <main className="max-w-5xl mx-auto px-6 pt-28 md:pt-32">
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
