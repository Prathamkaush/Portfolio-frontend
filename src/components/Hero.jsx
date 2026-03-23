import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ExternalLink, Github, ChevronDown } from "lucide-react";
import ThreeScene from "./ThreeScene";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden" id="home">
      {/* 3D Background */}
      <ThreeScene />

      {/* Content Overlay */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <motion.div variants={itemVariants} className="mb-4 inline-block">
            <span className="tag shadow-[0_0_15px_rgba(147,51,234,0.3)]">
              Backend / Full-Stack Engineer
            </span>
          </motion.div>

          <motion.h1 
            variants={itemVariants} 
            className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl"
          >
            Hi, I'm <span className="text-gradient">Pratham</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants} 
            className="text-xl md:text-2xl text-zinc-300 max-w-2xl mx-auto font-light leading-relaxed mb-8"
          >
            Crafting scalable systems with <span className="text-white font-medium">NestJS</span>, <span className="text-white font-medium">Next.js</span>, and robust distributed architectures.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="glass-panel py-4 px-6 mb-10 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm md:text-base text-zinc-300 mx-auto"
          >
            <a href="mailto:prathamkaushik2002@gmail.com" className="inline-flex items-center gap-2 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all">
              <Mail size={18} className="text-emerald-400" /> prathamkaushik2002@gmail.com
            </a>
            <a href="tel:+917669512750" className="inline-flex items-center gap-2 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all">
              <Phone size={18} className="text-emerald-400" /> +91 76695 12750
            </a>
            <span className="inline-flex items-center gap-2 text-zinc-400">
              <MapPin size={18} className="text-purple-400" /> India · Open to Remote
            </span>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
            <a href="#projects" className="btn-primary inline-flex items-center gap-2 group">
              View Projects
            </a>
            <a href="#contact" className="btn-secondary inline-flex items-center gap-2">
              Contact Me
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12 flex justify-center gap-6">
            <a href="https://github.com/Prathamkaush" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white hover:scale-110 transition-transform" aria-label="Personal GitHub">
              <Github size={24} />
            </a>
            <a href="https://github.com/prathamcodecody-code" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white hover:scale-110 transition-transform" aria-label="Work GitHub">
              <Github size={24} />
            </a>
            <a href="https://pratham-kaushik.vercel.app" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white hover:scale-110 transition-transform" aria-label="Portfolio">
              <ExternalLink size={24} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-zinc-500"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}
