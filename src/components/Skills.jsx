import React from "react";
import { skills } from "../data/skills";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section id="skills" className="py-16 text-center fade-in">
      <h2 className="text-4xl font-semibold mb-8 text-cyan-400 drop-shadow-[0_0_8px_rgba(0,255,255,0.4)]">
        Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
        {skills.map((s) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4, scale: 1.05 }}
            className="px-4 py-2 rounded-lg border border-cyan-400/30 bg-cyan-500/10 text-cyan-100 text-sm shadow-[0_0_10px_rgba(0,255,255,0.1)] hover:shadow-[0_0_15px_rgba(0,255,255,0.4)] transition-all duration-300 backdrop-blur-md glow"
          >
            {s.name}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
