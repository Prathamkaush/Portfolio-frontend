import React from "react";
import { motion } from "framer-motion";

export default function ProjectCard({ p }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -6 }}
      transition={{ duration: 0.3 }}
      initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        animate={{ opacity: 1, y: 0 }}
      className="glass p-5 rounded-2xl border border-cyan-400/20 shadow-[0_0_25px_rgba(0,255,255,0.08)] hover:shadow-[0_0_30px_rgba(0,255,255,0.4)] transition-all duration-300 backdrop-blur-md text-left"
    >
      {/* === Image === */}
      <div className="overflow-hidden rounded-lg mb-4">
        <img
          src={p.image}
          alt={p.title}
          className="w-full h-44 object-cover rounded-lg transform transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* === Project Title === */}
      <h3 className="font-semibold text-xl text-cyan-400 drop-shadow-[0_0_8px_rgba(0,255,255,0.4)]">
        {p.title}
      </h3>

      {/* === Description === */}
      <p className="text-slate-300 text-sm mt-3 leading-relaxed">
        {p.description}
      </p>

      {/* === Tech Tags === */}
      <div className="mt-4 flex flex-wrap gap-2">
        {p.tech.map((t) => (
          <span
            key={t}
            className="text-xs px-3 py-1 rounded-lg bg-cyan-400/10 border border-cyan-400/20 text-cyan-100 hover:bg-cyan-400/20 transition-all"
          >
            {t}
          </span>
        ))}
      </div>

      {/* === Links === */}
      <div className="mt-5 flex gap-4 text-sm">
        <a
          href={p.github}
          target="_blank"
          rel="noreferrer"
          className="text-cyan-300 hover:text-cyan-400 underline underline-offset-2 hover:drop-shadow-[0_0_6px_rgba(0,255,255,0.5)] transition-all"
        >
          GitHub
        </a>
        <a
          href={p.demo}
          target="_blank"
          rel="noreferrer"
          className="text-cyan-300 hover:text-cyan-400 underline underline-offset-2 hover:drop-shadow-[0_0_6px_rgba(0,255,255,0.5)] transition-all"
        >
          Live Demo
        </a>
      </div>
    </motion.div>
  );
}
