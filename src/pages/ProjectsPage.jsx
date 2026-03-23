import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { projectDetails } from "../data/projectDetails";
import { ArrowLeft, ExternalLink, Image as ImageIcon } from "lucide-react";

function ScreenshotSection({ title, images }) {
  const list = Array.isArray(images) ? images : [];
  if (list.length === 0) return null;

  return (
    <div className="mt-8">
      <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-4 flex items-center gap-2">
        <ImageIcon size={16} className="text-emerald-400" /> {title.replace(/_/g, " ")}
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {list.map((src, i) => (
          <a
            key={i}
            href={src}
            target="_blank"
            rel="noreferrer"
            className="group block relative rounded-xl overflow-hidden shadow-lg border border-white/5 aspect-video"
          >
            <img
              src={src}
              alt={`${title} ${i + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity"></div>
            <div className="absolute inset-0 ring-1 ring-inset ring-purple-500/0 group-hover:ring-purple-500/50 rounded-xl transition-all"></div>
          </a>
        ))}
      </div>
    </div>
  );
}

function ProjectDetailBlock({ project, index }) {
  return (
    <motion.article
      id={project.id}
      className="card p-8 md:p-10 mb-12 last:mb-0 relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 blur-[80px] rounded-full pointer-events-none"></div>
      
      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{project.title}</h2>
        {project.tagline && <p className="text-emerald-400 font-medium text-lg mb-4">{project.tagline}</p>}
        <p className="text-zinc-300 leading-relaxed text-lg max-w-3xl border-l-2 border-purple-500/30 pl-4 py-1">{project.description}</p>

        <div className="mt-8 mb-8 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="tag text-sm">{t}</span>
          ))}
        </div>

        {project.links && project.links.length > 0 && (
          <div className="flex flex-wrap gap-4 mt-6">
            {project.links.map(({ label, url }) => (
              <a
                key={url}
                href={url}
                target="_blank"
                rel="noreferrer"
                className="btn-primary inline-flex items-center gap-2 group"
              >
                <ExternalLink size={16} className="group-hover:scale-110 transition-transform" /> {label}
              </a>
            ))}
          </div>
        )}

        {project.images && project.images.length > 0 && (
          <ScreenshotSection title="Featured Screenshots" images={project.images} />
        )}

        {project.screenshots &&
          Object.entries(project.screenshots)
            .filter(([, imgs]) => Array.isArray(imgs) && imgs.length > 0)
            .map(([key, imgs]) => (
              <ScreenshotSection key={key} title={key} images={imgs} />
            ))}
      </div>
    </motion.article>
  );
}

export default function ProjectsPage() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen relative bg-zinc-950">
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-purple-900/10 via-emerald-900/5 to-transparent pointer-events-none z-0"></div>
      
      <main className="max-w-5xl mx-auto px-6 pt-32 pb-24 relative z-10">
        <motion.div className="mb-10 block" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
          <Link to="/" className="inline-flex items-center gap-2 pr-4 py-2 text-zinc-400 hover:text-white group transition-colors">
            <div className="w-8 h-8 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center group-hover:border-purple-500/50 transition-colors">
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            </div>
            <span className="font-medium">Back to Home</span>
          </Link>
        </motion.div>
        
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight drop-shadow-lg">
            All <span className="text-gradient">Projects</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl font-light">
            In-depth details, technology stacks, and visual showcases of my notable works.
          </p>
        </motion.div>
        
        <div className="space-y-6">
          {projectDetails.map((project, index) => (
            <ProjectDetailBlock key={project.id} project={project} index={index} />
          ))}
        </div>
      </main>
    </div>
  );
}
