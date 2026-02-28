import React from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const education = [
  { degree: "Master of Computer Applications (MCA)", institution: "IGNOU, Delhi", period: "2024 – Present" },
  { degree: "Bachelor of Computer Applications (BCA)", institution: "IGNOU, Delhi", period: "2020 – 2023" },
];

export default function Education() {
  return (
    <section id="education" className="py-16">
      <motion.h2
        className="section-heading text-center text-2xl md:text-3xl mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4 }}
      >
        Education
      </motion.h2>
      <div className="max-w-2xl mx-auto space-y-4">
        {education.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
            className="card p-5"
          >
            <h3 className="text-base font-semibold text-amber-400">{item.degree}</h3>
            <p className="text-zinc-300 mt-1">{item.institution}</p>
            <p className="text-zinc-500 text-sm mt-2 inline-flex items-center gap-1.5">
              <Calendar size={14} /> {item.period}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
