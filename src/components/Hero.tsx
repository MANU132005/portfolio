"use client";

import { motion } from "framer-motion";
import { ArrowRight, Activity, Cpu, Sparkles, Terminal, ShieldCheck, Mail } from "lucide-react";
import { Github, Linkedin } from "./BrandIcons";
import Image from "next/image";
import Link from "next/link";
import AnimatedText from "./AnimatedText";
import TypingAnimation from "./TypingAnimation";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-[#020204]">
      {/* Cinematic Spotlight: Focal Point Anchor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-[-20%] -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none z-0 hidden lg:block" />
      
      {/* Premium Atmospheric Background Identity: "MANU" Refinement */}
      <div className="absolute top-[40%] left-0 w-full flex items-center justify-start pointer-events-none select-none z-0 overflow-hidden px-[5%] md:px-[10%] opacity-40">
        <motion.div
          initial={{ opacity: 0, x: -50, filter: "blur(20px)" }}
          animate={{ opacity: 0.1, x: 0, filter: "blur(8px)" }}
          transition={{ duration: 3, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <motion.div
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-[12rem] sm:text-[16rem] md:text-[22rem] lg:text-[26rem] font-extralight tracking-[0.15em] text-white/40 whitespace-nowrap leading-none uppercase select-none pointer-events-none"
            style={{ 
              maskImage: 'linear-gradient(to bottom right, white 30%, transparent 80%)',
              WebkitMaskImage: 'linear-gradient(to bottom right, white 30%, transparent 80%)'
            }}
          >
            MANU
          </motion.div>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6 md:gap-8"
          >
            {/* Identity Status System */}
            <div className="flex flex-wrap items-center gap-2 md:gap-3">
              <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 rounded-full glass-card border border-blue-500/20 bg-blue-500/5 text-[9px] md:text-[10px] font-mono text-blue-300 tracking-widest uppercase">
                <ShieldCheck className="w-3 md:w-3.5 h-3 md:h-3.5" />
                Azure Certified
              </div>
              <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 rounded-full glass-card border border-white/10 text-[9px] md:text-[10px] font-mono text-white/40 tracking-widest uppercase">
                <Terminal className="w-3 md:w-3.5 h-3 md:h-3.5" />
                Software Engineering
              </div>
              <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 rounded-full glass-card border border-indigo-500/20 bg-indigo-500/5 text-[9px] md:text-[10px] font-mono text-indigo-300 tracking-widest uppercase">
                <Sparkles className="w-3 md:w-3.5 h-3 md:h-3.5" />
                AI/ML Minor
              </div>
              <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 rounded-full glass-card border border-emerald-500/20 bg-emerald-500/5 text-[9px] md:text-[10px] font-mono text-emerald-300 tracking-widest uppercase">
                <Cpu className="w-3 md:w-3.5 h-3 md:h-3.5" />
                Infosys Intern
              </div>
              <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 rounded-full glass-card border border-purple-500/20 bg-purple-500/5 text-[9px] md:text-[10px] font-mono text-purple-300 tracking-widest uppercase">
                <Activity className="w-3 md:w-3.5 h-3 md:h-3.5" />
                IEEE Vice Chair
              </div>
            </div>

            <div className="flex flex-col gap-4 md:gap-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter text-white leading-[1.1] md:leading-[1.05] mb-2">
                <AnimatedText text="Building" delay={0.2} />
                <br className="hidden sm:block" />
                <AnimatedText 
                  text="intelligent software" 
                  delay={0.6} 
                  animateBy="word"
                  itemClassName="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 text-glow"
                />
                <br className="hidden sm:block" />
                <AnimatedText text="systems." delay={1.2} />
              </h1>

              {/* Identity Layer: Premium Typing Animation */}
              <div className="mb-10 min-h-[1.5rem]">
                <TypingAnimation />
              </div>

              <div className="text-base md:text-xl text-white/60 max-w-lg leading-relaxed font-light mb-6">
                <AnimatedText 
                  text="An Electrical Engineering student building scalable applications and exploring the intersection of software and AI." 
                  delay={1.8}
                  stagger={0.01}
                />
              </div>

              {/* System Log Snippet */}
              <div className="hidden sm:block glass-card border border-white/5 bg-[#050508]/40 rounded-2xl p-4 font-mono text-[10px] text-white/30 space-y-1 w-fit">
                <div className="flex items-center gap-2">
                  <span className="text-blue-500/50">root@manu:~$</span>
                  <span className="text-white/50">sysctl -w net.core.rmem_max=26214400</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-500/50">[OK]</span>
                  <span>Development environment initialized</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-500/50">root@manu:~$</span>
                  <span className="text-white/50 animate-pulse">monitoring active nodes...</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 glass-card border border-white/10 rounded-2xl p-3 w-fit pr-6 backdrop-blur-md">
                <div className="w-10 h-10 rounded-xl bg-[#050508] border border-white/5 flex items-center justify-center shadow-inner">
                  <Activity className="w-5 h-5 text-blue-400" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-sm font-medium tracking-tight">Current Focus</span>
                  <span className="text-white/50 text-[10px] font-mono tracking-wider">Learning: Distributed Systems</span>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link href="#projects">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative px-8 py-4 bg-white text-black font-bold rounded-full flex items-center justify-center gap-3 overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.2)] transition-all w-full sm:w-auto"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    View Projects
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.button>
              </Link>

              <Link href="#contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 glass-card text-white font-medium rounded-full hover:bg-white/10 hover:border-white/20 transition-all shadow-[0_0_30px_rgba(59,130,246,0.1)] flex items-center justify-center gap-2 border border-white/5 w-full sm:w-auto"
                >
                  <Mail className="w-4 h-4 text-white/60" />
                  <span>Contact Me</span>
                </motion.button>
              </Link>

              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 glass-card text-white/60 font-medium rounded-full hover:bg-white/5 hover:text-white hover:border-white/10 transition-all flex items-center justify-center gap-2 border border-white/5 w-full sm:w-auto"
                >
                  <Sparkles className="w-4 h-4 text-blue-400/50" />
                  <span>Download Resume</span>
                </motion.button>
              </a>
            </div>

            <div className="flex items-center gap-6 text-white/40">
              <a href="https://github.com/MANU132005" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors hover:scale-110">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/manu-rikkumalla-289133290/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors hover:scale-110">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:manurikkumalla13@gmail.com" className="hover:text-white transition-colors hover:scale-110">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative perspective-2000 flex justify-center lg:justify-end"
          >
            {/* Cinematic Portrait Halo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent rounded-full blur-[100px] opacity-60 animate-pulse pointer-events-none" />

            {/* Portrait Main Container - Breathing Motion */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
              className="relative w-full max-w-[320px] sm:max-w-[420px] lg:max-w-[480px] aspect-[4/5] group"
            >
              {/* Reflective Outer Border */}
              <div className="absolute -inset-[2px] rounded-[2.2rem] bg-gradient-to-br from-white/20 via-white/5 to-blue-500/20 opacity-40 blur-[1px] pointer-events-none" />
              
              {/* Glassmorphism Container - Refined */}
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-[#050508]/40 backdrop-blur-md shadow-[0_40px_80px_-20px_rgba(0,0,0,0.9),0_0_60px_rgba(59,130,246,0.15)] border border-white/10 ring-1 ring-white/5">

                {/* Portrait Image - Enhanced Focus */}
                <div className="absolute inset-0 w-full h-full transition-transform duration-1000 ease-out group-hover:scale-[1.03]">
                  <Image
                    src="/cinematic_engineer_portrait.png"
                    alt="Elite Developer Portrait"
                    fill
                    priority
                    className="object-cover object-center opacity-95 brightness-[1.05] contrast-[1.05] group-hover:opacity-100 transition-all duration-1000"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  />
                </div>

                {/* Internal Cinematic Lighting Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020203]/90 via-transparent to-transparent opacity-60 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-transparent to-transparent mix-blend-overlay pointer-events-none" />
                
                {/* Subtle Lens Flare / Edge Highlight */}
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,rgba(255,255,255,0.08),transparent_40%)] pointer-events-none" />
              </div>

              {/* Atmospheric Environmental Spill */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-20 bg-blue-600/20 blur-[50px] opacity-40 pointer-events-none" />

              {/* Floating Element 1: Cloud Telemetry - Subordinated */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
                className="hidden md:block absolute -right-10 lg:-right-16 -top-10 glass-card p-4 rounded-3xl border border-white/10 bg-[#050508]/60 opacity-60 group-hover:opacity-100 transition-opacity z-20 w-44 lg:w-48 will-change-transform"
              >
                <div className="flex items-center gap-2 mb-3 pb-2 border-b border-white/5">
                  <Activity className="w-4 h-4 text-blue-400" />
                  <span className="text-xs font-mono text-blue-400/70 uppercase tracking-widest">Telemetry</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] text-white/40 uppercase">Latency</span>
                    <span className="text-xs text-white font-mono">24ms</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] text-white/40 uppercase">Azure Node</span>
                    <span className="text-xs text-emerald-400 font-mono">Active</span>
                  </div>
                </div>
              </motion.div>

              {/* Floating Element 2: Tech Stack Card - Subordinated */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 9, delay: 1.2, ease: "easeInOut" }}
                className="absolute -left-10 lg:-left-20 bottom-[10%] lg:bottom-[15%] glass-card p-3 md:p-4 rounded-2xl md:rounded-3xl border border-white/10 bg-[#050508]/60 opacity-60 group-hover:opacity-100 transition-opacity z-20 w-40 md:w-48 will-change-transform"
              >
                <div className="flex items-center gap-2 mb-2 md:mb-3 pb-1 md:pb-2 border-b border-white/5">
                  <Terminal className="w-3 md:w-4 h-3 md:h-4 text-white/70" />
                  <span className="text-[10px] md:text-xs font-mono text-white/70 uppercase tracking-widest">Stack</span>
                </div>
                <div className="flex flex-col gap-1 md:gap-2">
                  {['React / Next.js', 'Azure Cloud', 'TensorFlow', 'Node.js / TS'].map((tech) => (
                    <div key={tech} className="flex items-center gap-2">
                      <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-blue-500/40" />
                      <span className="text-[10px] md:text-xs text-white/90 font-medium">{tech}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Floating Element 3: AI Inference Status - Subordinated */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ repeat: Infinity, duration: 11, delay: 0.5, ease: "easeInOut" }}
                className="hidden md:block absolute -right-6 bottom-0 glass-card p-4 rounded-3xl border border-white/10 bg-[#050508]/60 opacity-60 group-hover:opacity-100 transition-opacity z-20 w-52 lg:w-56 will-change-transform"
              >
                <div className="flex items-center gap-2 mb-2 pb-2 border-b border-white/5">
                  <Cpu className="w-4 h-4 text-purple-400" />
                  <span className="text-xs font-mono text-purple-400/70 uppercase tracking-widest">AI Engine</span>
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] text-white/40 uppercase">Model: sign-language-v3</div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs text-white font-mono tracking-tighter">Inference: 98.4% Acc.</span>
                  </div>
                </div>
              </motion.div>

            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
