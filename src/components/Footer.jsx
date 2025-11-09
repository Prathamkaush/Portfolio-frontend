import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaChevronUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer() {
  const year = new Date().getFullYear();

  const socials = [
    { id: 'github', href: 'https://github.com/prathamkaush', label: 'GitHub', Icon: FaGithub },
    { id: 'linkedin', href: 'https://www.linkedin.com/in/pratham-kaushik-69288b37b/', label: 'LinkedIn', Icon: FaLinkedin },
    { id: 'instagram', href: 'https://www.instagram.com/messyclash', label: 'Instagram', Icon: FaInstagram },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        animate={{ opacity: 1, y: 0 }}      className="mt-12 py-8 bg-transparent"
    >
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <div className="text-sm text-slate-600 dark:text-slate-400">
            © {year} <span className="font-medium">Pratham Kaushik</span>
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-500 mt-1">
            Built with React, Tailwind & a little bit of ❤️
          </div>
        </div>

        <nav className="flex items-center gap-4">
          {socials.map(({ id, href, label, Icon }) => (
            <a
              key={id}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              <Icon className="w-5 h-5 text-slate-700 dark:text-slate-200" />
            </a>
          ))}

          {/* Back to top */}
          <a
            href="#home"
            aria-label="Back to top"
            className="ml-2 inline-flex items-center justify-center p-2 rounded-full border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            title="Back to top"
          >
            <FaChevronUp className="w-4 h-4 text-slate-700 dark:text-slate-200" />
          </a>
        </nav>
      </div>
    </motion.footer>
  );
}
