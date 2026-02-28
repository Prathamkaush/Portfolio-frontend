import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const PLACEHOLDER_IMAGE = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='220' viewBox='0 0 400 220'%3E%3Crect fill='%231e293b' width='400' height='220'/%3E%3Ctext fill='%2394a3b8' font-family='sans-serif' font-size='14' x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle'%3EProject screenshot%3C/text%3E%3C/svg%3E";

export default function ProjectCard({ p }) {
  const imgSrc =
    p.image && !p.image.startsWith("data:")
      ? p.image
      : p.images?.[0] || PLACEHOLDER_IMAGE;

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -6 }}
      transition={{ duration: 0.3 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      className="glass p-5 rounded-2xl border border-cyan-400/20 shadow-[0_0_25px_rgba(0,255,255,0.08)] hover:shadow-[0_0_30px_rgba(0,255,255,0.2)] transition-all duration-300 backdrop-blur-md text-left"
    >
      <div className="overflow-hidden rounded-lg mb-4 bg-slate-800/50">
        <img
          src={imgSrc}
          alt={p.title}
          className="w-full h-44 object-cover rounded-lg transition-transform duration-500 hover:scale-105"
          onError={(e) => {
            e.target.src = PLACEHOLDER_IMAGE;
          }}
        />
      </div>

      <h3 className="font-semibold text-xl text-cyan-400 drop-shadow-[0_0_8px_rgba(0,255,255,0.3)]">
        {p.title}
      </h3>
      {p.tagline && (
        <p className="text-cyan-300/80 text-sm mt-1">{p.tagline}</p>
      )}
      <p className="text-slate-300 text-sm mt-3 leading-relaxed">
        {p.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {p.tech.map((t) => (
          <span
            key={t}
            className="text-xs px-3 py-1 rounded-lg bg-cyan-400/10 border border-cyan-400/20 text-cyan-100"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-5 flex gap-4 text-sm">
        <a
          href={p.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-400 transition"
        >
          <Github size={16} /> GitHub
        </a>
        {p.demo && (
          <a
            href={p.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-400 transition"
          >
            <ExternalLink size={16} /> Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
}
