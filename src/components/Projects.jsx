import React from "react";
import { Link } from "react-router-dom";
import { projectDetails } from "../data/projectDetails";
import { motion } from "framer-motion";
import { ExternalLink, ChevronRight } from "lucide-react";

const PLACEHOLDER_IMAGE =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='220' viewBox='0 0 400 220'%3E%3Crect fill='%23272a2a' width='400' height='220'/%3E%3Ctext fill='%2371717a' font-family='sans-serif' font-size='12' x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle'%3EProject%3C/text%3E%3C/svg%3E";

function HomeProjectCard({ project }) {
  const imgSrc = project.images?.[0] || PLACEHOLDER_IMAGE;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35 }}
      className="card p-5 text-left group"
    >
      <div className="overflow-hidden rounded-lg mb-4 bg-zinc-800/50 aspect-video">
        <img
          src={imgSrc}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          onError={(e) => { e.target.src = PLACEHOLDER_IMAGE; }}
        />
      </div>
      <h3 className="font-semibold text-lg text-amber-400">{project.title}</h3>
      {project.tagline && <p className="text-zinc-500 text-sm mt-1">{project.tagline}</p>}
      <p className="text-zinc-400 text-sm mt-2 line-clamp-2">{project.description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.tech.slice(0, 4).map((t) => (
          <span key={t} className="tag text-xs">{t}</span>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
        {project.links?.slice(0, 2).map(({ label, url }) => (
          <a key={url} href={url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-amber-400/90 hover:text-amber-400 transition">
            <ExternalLink size={14} /> {label}
          </a>
        ))}
        <Link to="/projects" className="inline-flex items-center gap-1 font-medium text-amber-400 hover:text-amber-300 transition">
          View details <ChevronRight size={16} />
        </Link>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <motion.h2
        className="section-heading text-center text-2xl md:text-3xl mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4 }}
      >
        Key Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-2">
        {projectDetails.map((p) => (
          <HomeProjectCard key={p.id} project={p} />
        ))}
      </div>
      <div className="text-center mt-8">
        <Link to="/projects" className="btn-primary inline-flex items-center gap-2">
          View all projects & screenshots <ChevronRight size={18} />
        </Link>
      </div>
    </section>
  );
}
