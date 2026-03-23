import React from "react";
import { Link } from "react-router-dom";
import { projectDetails } from "../data/projectDetails";
import { motion } from "framer-motion";
import { ExternalLink, ChevronRight } from "lucide-react";

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-purple-900/10 blur-[120px] rounded-full point-events-none z-0"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            A selection of my recent work in building scalable backends and beautiful frontend experiences.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectDetails.slice(0, 3).map((project) => (
            <motion.div key={project.id} variants={itemVariants} className="card p-1 group flex flex-col h-full cursor-pointer">
              <div className="bg-zinc-900/80 rounded-[calc(1rem-1px)] p-6 h-full flex flex-col pointer-events-auto">
                {/* Simulated Image area - could be replaced with actual images if available */}
                {project.images?.[0] ? (
                  <div className="w-full h-48 rounded-lg overflow-hidden mb-6 relative">
                    <img 
                      src={project.images[0]} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-60"></div>
                  </div>
                ) : (
                  <div className="w-full h-48 rounded-lg mb-6 bg-gradient-to-br from-purple-900/20 to-emerald-900/20 border border-white/5 flex items-center justify-center overflow-hidden relative">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-20 group-hover:scale-110 transition-transform duration-700"></div>
                    <span className="text-zinc-500 font-medium tracking-widest uppercase text-sm z-10">{project.title}</span>
                  </div>
                )}
                
                <h3 className="font-bold text-xl text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                {project.tagline && <p className="text-emerald-400 text-sm mb-3 font-medium">{project.tagline}</p>}
                
                <p className="text-zinc-400 text-sm mb-6 flex-grow line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span key={tech} className="tag text-xs">{tech}</span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="tag text-xs bg-zinc-800/50 border-zinc-700/50 text-zinc-400">+{project.tech.length - 4}</span>
                  )}
                </div>
                
                <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                  {project.links?.[0] ? (
                    <a href={project.links[0].url} target="_blank" rel="noreferrer" className="text-sm text-zinc-300 hover:text-white flex items-center gap-2 transition-colors">
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  ) : <div></div>}
                  
                  <Link to={`/projects`} className="text-sm font-medium text-emerald-400 hover:text-purple-400 flex items-center gap-1 transition-colors">
                    Details <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link to="/projects" className="btn-secondary inline-flex items-center gap-2 group">
            View All Projects 
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform text-purple-400" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
