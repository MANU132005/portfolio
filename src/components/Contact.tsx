"use client";

import { motion } from "framer-motion";
import { Mail, Briefcase, Download, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative z-10">
      <div className="container mx-auto px-6 max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card p-12 md:p-32 rounded-[3rem] border border-white/5 relative overflow-hidden group shadow-[0_0_100px_rgba(0,0,0,0.8)]"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 via-transparent to-transparent pointer-events-none group-hover:opacity-100 transition-opacity duration-1000" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-blue-500/20 blur-[100px] pointer-events-none group-hover:bg-blue-500/30 transition-colors duration-1000" />
          
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6 relative z-10">
            Let's build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">impactful systems.</span>
          </h2>
          <p className="text-xl text-white/50 mb-12 relative z-10 max-w-2xl mx-auto font-light leading-relaxed">
            Open to engineering collaborations and opportunities. Interested in scalable products, AI systems, and modern cloud applications.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 relative z-10">
            <a 
              href="mailto:hello@example.com"
              className="group/btn relative px-10 py-5 bg-white text-black font-bold rounded-full flex items-center gap-3 overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:scale-105 transition-all active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Establish Link
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-white opacity-0 group-hover/btn:opacity-100 transition-opacity" />
            </a>
            
            <a 
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-5 glass-card text-white/80 font-medium rounded-full hover:bg-white/10 hover:text-white transition-all border border-white/10 hover:border-white/20 active:scale-95"
            >
              <Briefcase className="w-5 h-5" />
              LinkedIn
            </a>

            <a 
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-5 glass-card text-white/80 font-medium rounded-full hover:bg-white/10 hover:text-white transition-all border border-white/10 hover:border-white/20 active:scale-95"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              GitHub
            </a>

            <a 
              href="#"
              className="flex items-center gap-2 px-8 py-5 glass-card text-white/80 font-medium rounded-full hover:bg-white/10 hover:text-white transition-all border border-white/10 hover:border-white/20 active:scale-95"
            >
              <Download className="w-5 h-5" />
              Resume Core
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
