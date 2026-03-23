import React from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, Briefcase } from "lucide-react";

const experience = {
  company: "Codecody",
  role: "Backend / Full-Stack Engineer (Internship)",
  period: "2025 – Present",
  location: "India",
  bullets: [
    "Designed and developed a multi-panel commerce platform (Admin, Seller, Employee, User) similar to Meesho, handling real production traffic.",
    "Built secure authentication, authorization, and role-based access systems using NestJS.",
    "Implemented complete order lifecycle including cart, checkout, payments, invoices, and refunds.",
    "Integrated Razorpay and Easebuzz payment gateways with robust failure handling.",
    "Integrated Delhivery and Ekart APIs for shipping label generation and order tracking.",
    "Designed seller payout workflows with eligibility checks and admin approval flows.",
    "Implemented event-driven processing using Kafka and Redis for background jobs and async tasks.",
    "Designed relational schemas using Prisma with MariaDB and analytics pipelines using ClickHouse.",
    "Deployed and maintained production services using PM2, Nginx, SSL, and Linux servers.",
  ],
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-purple-900/5 to-transparent pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Work <span className="text-gradient">Experience</span>
          </h2>
        </motion.div>

        <div className="relative border-l-2 border-purple-500/20 pl-8 ml-4 md:ml-8 py-4">
          {/* Timeline node */}
          <div className="absolute top-4 -left-[11px] w-5 h-5 rounded-full bg-zinc-950 border-2 border-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)] z-20"></div>
          
          <motion.article
            className="card p-8 text-left relative overflow-visible"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Connection line from timeline */}
            <div className="absolute top-6 -left-8 w-8 h-[2px] bg-purple-500/20 hidden md:block"></div>
            
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8 border-b border-white/5 pb-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-emerald-500/20 border border-white/10 flex items-center justify-center shrink-0">
                  <Briefcase size={24} className="text-purple-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors drop-shadow-sm">{experience.role}</h3>
                  <p className="text-emerald-400 font-medium text-lg">{experience.company}</p>
                </div>
              </div>
              
              <div className="flex flex-wrap items-center gap-4 text-sm font-medium">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-800/50 text-zinc-300 border border-white/5 shadow-inner">
                  <Calendar size={16} className="text-purple-400" /> {experience.period}
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-800/50 text-zinc-300 border border-white/5 shadow-inner">
                  <MapPin size={16} className="text-emerald-400" /> {experience.location}
                </span>
              </div>
            </div>
            
            <ul className="space-y-4 text-zinc-300 leading-relaxed text-sm md:text-base">
              {experience.bullets.map((bullet, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (i * 0.05), duration: 0.4 }}
                  className="flex gap-4 group/bullet"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 group-hover/bullet:scale-150 group-hover/bullet:shadow-[0_0_8px_rgba(16,185,129,0.8)] transition-all"></span>
                  <span className="group-hover/bullet:text-white transition-colors">{bullet}</span>
                </motion.li>
              ))}
            </ul>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
