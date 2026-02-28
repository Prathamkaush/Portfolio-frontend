import React from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";

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
    <section id="experience" className="py-16">
      <motion.h2
        className="section-heading text-center text-2xl md:text-3xl mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4 }}
      >
        Experience
      </motion.h2>
      <motion.article
        className="card p-6 md:p-8 max-w-4xl mx-auto text-left"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
          <div>
            <h3 className="text-lg font-semibold text-amber-400">{experience.role}</h3>
            <p className="text-zinc-300 font-medium mt-1">{experience.company}</p>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-500">
            <span className="inline-flex items-center gap-1.5">
              <Calendar size={16} /> {experience.period}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={16} /> {experience.location}
            </span>
          </div>
        </div>
        <ul className="space-y-2.5 text-zinc-400 leading-relaxed text-sm md:text-base">
          {experience.bullets.map((bullet, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-amber-400 mt-1 shrink-0">•</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </motion.article>
    </section>
  );
}
