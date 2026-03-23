import React from "react";
import { motion } from "framer-motion";

const summary = `Backend-focused Full-Stack Engineer with hands-on experience designing, building, and operating production-grade web platforms. Proven ability to own complete backend systems including authentication, payments, logistics, role-based access control, and scalable deployments. Experienced with event-driven architectures using Kafka and Redis, modern ORM-based database design, and production infrastructure. Actively seeking a backend or full-stack role in a product-driven team.`;

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-900/10 blur-[100px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            About <span className="text-gradient">Me</span>
          </h2>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative shrink-0 group perspective-1000">
            <motion.div
              whileHover={{ rotateY: 10, rotateX: -10, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative w-56 h-56 md:w-72 md:h-72 rounded-2xl p-1 bg-gradient-to-br from-purple-500/30 to-emerald-500/30 shadow-[0_0_30px_rgba(147,51,234,0.15)]"
            >
              <div className="w-full h-full rounded-xl overflow-hidden bg-zinc-900">
                <img
                  src="/images/pratham.png"
                  alt="Pratham Kaushik"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  onError={(e) => { 
                    e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect fill='%2318181b' width='400' height='400'/%3E%3Cpath d='M200 100c33.1 0 60 26.9 60 60s-26.9 60-60 60-60-26.9-60-60 26.9-60 60-60zm0 140c66.3 0 120 26.9 120 60v40H80v-40c0-33.1 53.7-60 120-60z' fill='%233f3f46'/%3E%3C/svg%3E";
                  }}
                />
              </div>
            </motion.div>
            
            {/* Decorative dots */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8Y2lyY2xlIGN4PSIyIiBjeT0iMiIgcj0iMiIgZmlsbD0iI2E4NTVmNyIgZmlsbC1vcGFjaXR5PSIwLjQiLz4KPC9zdmc+')] -z-10 rounded-full"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8Y2lyY2xlIGN4PSIyIiBjeT0iMiIgcj0iMiIgZmlsbD0iIzEwYjk4MSIgZmlsbC1vcGFjaXR5PSIwLjQiLz4KPC9zdmc+')] -z-10 rounded-full"></div>
          </div>
          
          <div className="max-w-xl text-left">
            <div className="glass-panel p-8 relative">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 to-emerald-500 rounded-l-xl"></div>
              <p className="text-lg md:text-xl text-zinc-300 leading-relaxed font-light">
                Backend-focused <span className="text-white font-medium">Full-Stack Engineer</span> with hands-on experience designing, building, and operating production-grade web platforms.
              </p>
              <p className="text-zinc-400 mt-4 leading-relaxed">
                Proven ability to own complete backend systems including authentication, payments, logistics, role-based access control, and scalable deployments. Experienced with event-driven architectures using <span className="text-purple-400">Kafka</span> and <span className="text-emerald-400">Redis</span>.
              </p>
              <p className="text-zinc-400 mt-4 leading-relaxed">
                Actively seeking a backend or full-stack role in a product-driven team.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
