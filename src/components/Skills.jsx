import React from "react";
import { skillCategories } from "../data/skills";
import { motion } from "framer-motion";

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-900/10 blur-[100px] rounded-full pointer-events-none z-0"></div>
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            A comprehensive overview of my technical expertise and the tools I use to build scalable systems.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="card p-6 md:p-8"
            >
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500/20 to-emerald-500/20 flex items-center justify-center border border-white/10 shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                </span>
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {category.items.map((name, index) => (
                  <motion.span 
                    key={name} 
                    className="tag inline-flex items-center gap-2 group cursor-default transition-all duration-300 hover:scale-105 hover:bg-purple-900/40 hover:border-purple-500/40 hover:text-white"
                    whileHover={{ y: -2 }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: (catIndex * 0.1) + (index * 0.05) }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 group-hover:bg-emerald-400 transition-colors"></span>
                    {name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
