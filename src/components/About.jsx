import React from "react";
import { motion } from "framer-motion";

const summary = `Backend-focused Full-Stack Engineer with hands-on experience designing, building, and operating production-grade web platforms. Proven ability to own complete backend systems including authentication, payments, logistics, role-based access control, and scalable deployments. Experienced with event-driven architectures using Kafka and Redis, modern ORM-based database design, and production infrastructure. Actively seeking a backend or full-stack role in a product-driven team.`;

export default function About() {
  return (
    <section id="about" className="py-20">
      <motion.h2
        className="section-heading text-center text-2xl md:text-3xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4 }}
      >
        About Me
      </motion.h2>
      <motion.div
        className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4 }}
      >
        <div className="relative shrink-0 group">
          <img
            src="/images/pratham.png"
            alt="Pratham Kaushik"
            className="w-48 h-48 md:w-56 md:h-56 rounded-2xl object-cover border border-zinc-700/50 shadow-xl transition-transform duration-300 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 rounded-2xl border border-amber-400/20 pointer-events-none transition-opacity group-hover:opacity-100 opacity-0" />
        </div>
        <div className="max-w-lg text-zinc-300 text-left leading-relaxed px-2">
          <p className="text-base md:text-lg">{summary}</p>
        </div>
      </motion.div>
    </section>
  );
}
