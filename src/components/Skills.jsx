import React from "react";
import { skillCategories } from "../data/skills";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <motion.h2
        className="section-heading text-center text-2xl md:text-3xl mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4 }}
      >
        Technical Skills
      </motion.h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: catIndex * 0.03 }}
            className="card p-5"
          >
            <h3 className="text-xs font-semibold text-amber-400/90 uppercase tracking-wider mb-3">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map((name) => (
                <span key={name} className="tag">
                  {name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
