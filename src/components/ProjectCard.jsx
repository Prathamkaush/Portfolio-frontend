import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

export default function ProjectCard({ p }) {
  const hasImage = p.image && !p.image.startsWith("data:") || p.images?.[0];
  const imgSrc = p.image && !p.image.startsWith("data:") ? p.image : (p.images?.[0] || "");

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      lazy
      className="card p-1 group flex flex-col h-full"
    >
      <div className="bg-zinc-900/80 rounded-[calc(1rem-1px)] p-6 h-full flex flex-col pointer-events-auto text-left">
        {hasImage ? (
          <div className="w-full h-48 rounded-lg overflow-hidden mb-6 relative">
            <img
              src={imgSrc}
              alt={p.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-60"></div>
          </div>
        ) : (
          <div className="w-full h-48 rounded-lg mb-6 bg-gradient-to-br from-purple-900/20 to-emerald-900/20 border border-white/5 flex items-center justify-center overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-20 group-hover:scale-110 transition-transform duration-700"></div>
            <span className="text-zinc-500 font-medium tracking-widest uppercase text-sm z-10">{p.title}</span>
          </div>
        )}

        <h3 className="font-bold text-xl text-white mb-2 group-hover:text-purple-400 transition-colors">
          {p.title}
        </h3>
        {p.tagline && (
          <p className="text-emerald-400 font-medium text-sm mt-1 mb-3">{p.tagline}</p>
        )}
        <p className="text-zinc-400 text-sm mt-2 mb-6 leading-relaxed flex-grow">
          {p.description}
        </p>

        <div className="mt-auto mb-6 flex flex-wrap gap-2">
          {p.tech.map((t) => (
            <span key={t} className="tag text-xs">{t}</span>
          ))}
        </div>

        <div className="pt-4 border-t border-white/5 flex gap-5 text-sm">
          {p.github && (
            <a
              href={p.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-zinc-300 hover:text-white transition-colors"
            >
              <Github size={16} className="text-purple-400 group-hover:scale-110 transition-transform" /> GitHub
            </a>
          )}
          {p.demo && (
            <a
              href={p.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-zinc-300 hover:text-white transition-colors"
            >
              <ExternalLink size={16} className="text-emerald-400 group-hover:scale-110 transition-transform" /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
