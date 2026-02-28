import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ExternalLink, Github } from "lucide-react";

export default function Hero() {
  return (
    <section className="py-16 md:py-24" id="home">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-amber-400 font-medium text-sm uppercase tracking-wider mb-2"
        >
          Backend / Full-Stack Engineer
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.08 }}
          className="text-4xl md:text-5xl font-bold text-zinc-100"
        >
          PRATHAM KAUSHIK
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-3 text-lg text-zinc-400 max-w-2xl mx-auto"
        >
          NestJS · Next.js · Distributed Systems
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-zinc-500"
        >
          <a href="mailto:prathamkaushik2002@gmail.com" className="inline-flex items-center gap-2 hover:text-amber-400 transition">
            <Mail size={16} /> prathamkaushik2002@gmail.com
          </a>
          <a href="tel:+917669512750" className="inline-flex items-center gap-2 hover:text-amber-400 transition">
            <Phone size={16} /> +91 76695 12750
          </a>
          <span className="inline-flex items-center gap-2">
            <MapPin size={16} /> India · Open to Remote
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 flex justify-center gap-3 flex-wrap"
        >
          <a href="#projects" className="btn-primary inline-flex items-center gap-2">
            Projects
          </a>
          <a href="#contact" className="btn-secondary inline-flex items-center gap-2">
            Contact
          </a>
          <a
            href="https://github.com/Prathamkaush"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            <Github size={18} /> Personal GitHub
          </a>
          <a
            href="https://github.com/prathamcodecody-code"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            <Github size={18} /> Work GitHub
          </a>
          <a
            href="https://pratham-kaushik.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            <ExternalLink size={16} /> Portfolio
          </a>
        </motion.div>
      </div>
    </section>
  );
}
