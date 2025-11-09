import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 text-center">
      <motion.h2
        className="text-4xl font-semibold mb-8 text-cyan-400 drop-shadow-[0_0_8px_rgba(0,255,255,0.4)]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        animate={{ opacity: 1, y: 0 }}

      >
        About Me
      </motion.h2>

      <motion.div
        className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {/* ==== Profile Image Section ==== */}
        <div className="relative group md:mr-6"> {/* added margin-right */}
          <img
            src="/images/pratham.png"
            alt="Pratham Kaushik"
            className="w-52 h-52 md:w-64 md:h-64 rounded-full object-cover border-2 border-cyan-300 shadow-[0_0_12px_rgba(0,255,255,0.3)] transition-transform duration-500 group-hover:scale-105"
          />

          {/* softer blue aura */}
          <div className="absolute inset-0 rounded-full bg-cyan-400 blur-3xl opacity-10 group-hover:opacity-25 transition-all duration-500"></div>
        </div>

        {/* ==== About Text ==== */}
        <div className="max-w-md text-slate-200 text-lg leading-relaxed px-3">
          <p>
            Hi, I’m{" "}
            <span className="text-cyan-400 font-medium">
              Pratham Kaushik
            </span>{" "}
            — a passionate Full-Stack Developer who loves crafting interactive,
            animated, and modern web experiences.
          </p>
          <p className="mt-4">
            I specialize in the{" "}
            <span className="text-cyan-400 font-medium">MERN stack</span> and
            enjoy creating futuristic UIs that blend creativity with
            performance. Currently exploring advanced front-end animations and
            3D visualizations for immersive user experiences.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
