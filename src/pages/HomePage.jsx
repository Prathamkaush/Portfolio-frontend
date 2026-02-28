import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Education from "../components/Education";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollPower from "../components/ScrollPower";

export default function HomePage() {
  useEffect(() => {
    const hash = window.location.hash?.slice(1);
    if (hash) {
      const el = document.getElementById(hash);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
    }
  }, []);
  return (
    <>
      <ScrollPower />
      <main className="max-w-5xl mx-auto px-6 pt-28 md:pt-32">
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
