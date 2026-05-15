"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, Copy, Check, ArrowRight, Briefcase, MessageSquare } from "lucide-react";
import Link from "next/link";
import { Github, Linkedin } from "./BrandIcons";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "manurikkumalla13@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
          
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6 relative z-10">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">collaborate.</span>
          </h2>
          <p className="text-xl text-white/50 mb-12 relative z-10 max-w-2xl mx-auto font-light leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or engineering opportunities in AI and Cloud systems.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 relative z-10 mb-12">
            <a 
              href={`mailto:${email}`}
              className="group/btn relative px-10 py-5 bg-white text-black font-bold rounded-full flex items-center gap-3 overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:scale-105 transition-all active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Contact Me
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-white opacity-0 group-hover/btn:opacity-100 transition-opacity" />
            </a>
            
            <a 
              href="https://www.linkedin.com/in/manu-rikkumalla-289133290/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-5 glass-card text-white/80 font-medium rounded-full hover:bg-white/10 hover:text-white transition-all border border-white/10 hover:border-white/20 active:scale-95"
            >
              <Linkedin className="w-5 h-5 text-blue-400" />
              LinkedIn
            </a>

            <a 
              href="https://github.com/MANU132005"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-5 glass-card text-white/80 font-medium rounded-full hover:bg-white/10 hover:text-white transition-all border border-white/10 hover:border-white/20 active:scale-95"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>

            <a 
              href="tel:+919618510181"
              className="flex items-center gap-2 px-8 py-5 glass-card text-white/80 font-medium rounded-full hover:bg-white/10 hover:text-white transition-all border border-white/10 hover:border-white/20 active:scale-95"
            >
              <Phone className="w-5 h-5 text-emerald-400" />
              Call Me
            </a>
          </div>

          {/* Direct Link Info with Copy Action */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 pt-8 border-t border-white/5 relative z-10">
            <div 
              onClick={copyEmail}
              className="flex items-center gap-4 cursor-pointer group/mail"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover/mail:border-blue-500/50 transition-colors">
                <AnimatePresence mode="wait">
                  {copied ? (
                    <motion.div
                      key="check"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                    >
                      <Check className="w-5 h-5 text-emerald-400" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="copy"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                    >
                      <Copy className="w-5 h-5 text-white/40 group-hover/mail:text-white" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className="text-left">
                <div className="text-white/40 text-[10px] font-mono uppercase tracking-widest mb-1">Email Address</div>
                <div className="text-white font-medium group-hover/mail:text-blue-400 transition-colors">{email}</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-white/40" />
              </div>
              <div className="text-left">
                <div className="text-white/40 text-[10px] font-mono uppercase tracking-widest mb-1">Current Status</div>
                <div className="text-white font-medium">Open for Opportunities</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

