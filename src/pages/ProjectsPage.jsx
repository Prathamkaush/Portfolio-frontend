import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projectDetails } from "../data/projectDetails";
import { ArrowLeft, ExternalLink } from "lucide-react";

const PLACEHOLDER_IMAGE =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='240' viewBox='0 0 400 240'%3E%3Crect fill='%23272a2a' width='400' height='240'/%3E%3Ctext fill='%2371717a' font-family='sans-serif' font-size='14' x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle'%3EScreenshot%3C/text%3E%3C/svg%3E";

function ScreenshotSection({ title, images }) {
  const list = Array.isArray(images) ? images : [];
  if (list.length === 0) {
    return (
      <div className="mt-6">
        <h4 className="text-xs font-semibold text-amber-400/90 uppercase tracking-wider mb-3">{title}</h4>
        <div className="rounded-lg overflow-hidden bg-zinc-800/50 border border-zinc-700/50 aspect-video flex items-center justify-center">
          <img src={PLACEHOLDER_IMAGE} alt="Placeholder" className="w-full h-full object-cover" />
        </div>
        <p className="text-zinc-600 text-xs mt-2">Add screenshots in projectDetails.js</p>
      </div>
    );
  }
  return (
    <div className="mt-6">
      <h4 className="text-xs font-semibold text-amber-400/90 uppercase tracking-wider mb-3">{title}</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {list.map((src, i) => (
          <a
            key={i}
            href={src}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg overflow-hidden border border-zinc-700/50 hover:border-amber-400/30 transition block aspect-video"
          >
            <img
              src={src}
              alt={`${title} ${i + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              onError={(e) => { e.target.src = PLACEHOLDER_IMAGE; }}
            />
          </a>
        ))}
      </div>
    </div>
  );
}

function ProjectDetailBlock({ project, index }) {
  const hasAnyScreenshots =
    (project.images && project.images.length > 0) ||
    (project.screenshots && Object.values(project.screenshots).some((imgs) => Array.isArray(imgs) && imgs.length > 0));

  return (
    <motion.article
      id={project.id}
      className="card overflow-hidden mb-12 last:mb-0"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
    >
      <div className="p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-amber-400">{project.title}</h2>
        {project.tagline && <p className="text-zinc-500 mt-1">{project.tagline}</p>}
        <p className="text-zinc-400 mt-4 leading-relaxed">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>

        {project.links && project.links.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-3">
            {project.links.map(({ label, url }) => (
              <a
                key={url}
                href={url}
                target="_blank"
                rel="noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                <ExternalLink size={16} /> {label}
              </a>
            ))}
          </div>
        )}

        {project.images && project.images.length > 0 && (
          <div className="mt-6">
            <h4 className="text-xs font-semibold text-amber-400/90 uppercase tracking-wider mb-3">Screenshots</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {project.images.map((src, i) => (
                <a
                  key={i}
                  href={src}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg overflow-hidden border border-zinc-700/50 hover:border-amber-400/30 transition block aspect-video"
                >
                  <img
                    src={src}
                    alt={`${project.title} ${i + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    onError={(e) => { e.target.src = PLACEHOLDER_IMAGE; }}
                  />
                </a>
              ))}
            </div>
          </div>
        )}

        {project.screenshots &&
          Object.entries(project.screenshots)
            .filter(([, imgs]) => Array.isArray(imgs) && imgs.length > 0)
            .map(([key, imgs]) => (
              <ScreenshotSection key={key} title={key.replace(/_/g, " ")} images={imgs} />
            ))}

        {!hasAnyScreenshots && <ScreenshotSection title="Screenshots" images={[]} />}
      </div>
    </motion.article>
  );
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <main className="max-w-4xl mx-auto px-6 pt-28 md:pt-32 pb-20">
        <motion.div className="mb-8" initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
          <Link to="/" className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition">
            <ArrowLeft size={20} /> Back to home
          </Link>
        </motion.div>
        <motion.h1 className="text-3xl md:text-4xl font-bold text-amber-400 mb-2" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}>
          Projects
        </motion.h1>
        <motion.p className="text-zinc-500 mb-10" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }}>
          Details, tech stack, and screenshots.
        </motion.p>
        {projectDetails.map((project, index) => (
          <ProjectDetailBlock key={project.id} project={project} index={index} />
        ))}
      </main>
    </div>
  );
}
