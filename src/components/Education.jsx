import React from "react";
import { motion } from "framer-motion";
import { Calendar, GraduationCap } from "lucide-react";

const education = [
  { degree: "Master of Computer Applications (MCA)", institution: "IGNOU, Delhi", period: "2024 – Present" },
  { degree: "Bachelor of Computer Applications (BCA)", institution: "IGNOU, Delhi", period: "2020 – 2023" },
];

export default function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Academic <span className="text-gradient">Background</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-emerald-500/20 border border-white/5 flex items-center justify-center shrink-0">
                <GraduationCap size={32} className="text-emerald-400" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">{item.degree}</h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-zinc-400">
                  <span className="font-medium text-purple-400">{item.institution}</span>
                  <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-zinc-700"></span>
                  <span className="inline-flex items-center gap-2 text-sm bg-zinc-800/50 px-3 py-1 rounded-lg border border-white/5 w-fit">
                    <Calendar size={14} className="text-emerald-400" /> {item.period}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
