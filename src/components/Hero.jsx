import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="py-20" id="home">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold"
        >
          Hi, I'm Pratham Kaushik
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-xl"
        >
          Full Stack Developer — MERN • Node • React
        </motion.p>

        <motion.div
          className="mt-6 flex justify-center gap-4 flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-slate-900 rounded-lg hover:bg-slate-900 hover:text-white transition"
          >
            Contact
          </a>
        </motion.div>
      </div>
    </section>
  )
}
