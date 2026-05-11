"use client";

import { motion } from "framer-motion";
import { ArrowRight, Activity, Cpu, Sparkles, Terminal, ShieldCheck, Database } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-[#030305]">
      {/* Premium Atmospheric Background Identity: "MANU" Refinement */}
      <div className="absolute top-[40%] left-0 w-full flex items-center justify-start pointer-events-none select-none z-0 overflow-hidden px-[5%] md:px-[10%]">
        <motion.div
          initial={{ opacity: 0, x: -50, filter: "blur(30px)" }}
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
                Product Engineering
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
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter text-white leading-[1.1] md:leading-[1.05]">
                Engineering <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 text-glow">
                  scalable AI-powered
                </span>
                <br className="hidden sm:block" /> systems.
              </h1>

              <p className="text-base md:text-xl text-white/60 max-w-lg leading-relaxed font-light">
                Bridging an EEE background with AI/ML to architect intelligent, product-focused cloud applications and scalable digital ecosystems.
              </p>

              {/* System Log Snippet */}
              <div className="hidden sm:block glass-card border border-white/5 bg-[#050508]/40 rounded-2xl p-4 font-mono text-[10px] text-white/30 space-y-1 w-fit">
                <div className="flex items-center gap-2">
                  <span className="text-blue-500/50">root@manu:~$</span>
                  <span className="text-white/50">sysctl -w net.core.rmem_max=26214400</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-500/50">[OK]</span>
                  <span>Kernel optimized for high-throughput AI inference</span>
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
                  <span className="text-white text-sm font-medium tracking-tight">System Status</span>
                  <span className="text-white/50 text-[10px] font-mono tracking-wider">Node: azure-central-us-1</span>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-4 bg-white text-black font-bold rounded-full flex items-center justify-center gap-3 overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.2)] transition-all"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Initialize System
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 glass-card text-white font-medium rounded-full hover:bg-white/10 hover:border-white/20 transition-all shadow-[0_0_30px_rgba(59,130,246,0.1)] flex items-center justify-center gap-2 border border-white/5"
              >
                <Terminal className="w-4 h-4 text-white/60" />
                <span>Access Logs</span>
              </motion.button>
            </div>

            <div className="flex items-center gap-6 text-white/40">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
              <a href="mailto:hello@example.com" className="hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(20px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:h-[700px] flex items-center justify-center perspective-[1500px] mt-12 lg:mt-0"
          >
            {/* Atmospheric Background Glow behind portrait */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-violet-600/10 via-blue-500/5 to-transparent rounded-full blur-[100px] pointer-events-none" />

            {/* Core Portrait Wrapper */}
            <motion.div
              animate={{
                rotateY: [0, 1.5, 0, -1.5, 0],
                rotateX: [0, -1.5, 0, 1.5, 0],
                y: [0, -8, 0]
              }}
              transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
              className="relative w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[460px] aspect-[4/5] rounded-[2rem] p-[1px] z-10 group"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Subtle border glow wrapper */}
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-white/10 via-white/5 to-transparent pointer-events-none" />

              {/* Glassmorphism Container */}
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-[#050508]/80 backdrop-blur-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8),0_0_40px_rgba(139,92,246,0.1)] border border-white/5">

                {/* Image Setup - Overflowing, Asymmetrical */}
                <div className="absolute inset-x-0 bottom-0 h-[110%] w-[110%] -left-[5%] origin-bottom transition-transform duration-700 ease-out group-hover:scale-[1.02]">
                  <Image
                    src="/avatar.png"
                    alt="Elite Developer Portrait"
                    fill
                    priority
                    className="object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity duration-700"
                    sizes="(max-width: 768px) 100vw, 460px"
                  />
                </div>

                {/* Layered Shadow & Lighting over image */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020203] via-[#020203]/20 to-transparent opacity-90 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-transparent mix-blend-overlay pointer-events-none" />
              </div>


              {/* Floating Element 1: Cloud Telemetry - Moved away from head */}
              <motion.div
                animate={{ y: [0, -10, 0], translateZ: [0, 40, 0] }}
                transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                className="hidden md:block absolute -right-12 lg:-right-20 -top-8 glass-card p-4 rounded-3xl border border-blue-500/20 shadow-[0_20px_40px_rgba(59,130,246,0.1)] backdrop-blur-2xl z-20 w-48 lg:w-52 group/card hover:border-blue-500/40 transition-all"
                style={{ transformStyle: "preserve-3d" }}
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

              {/* Floating Element 2: Tech Stack Card - Moved down to clear face */}
              <motion.div
                animate={{ y: [0, 10, 0], translateZ: [0, 20, 0] }}
                transition={{ repeat: Infinity, duration: 7, delay: 1.2, ease: "easeInOut" }}
                className="absolute -left-8 lg:-left-16 bottom-[10%] lg:bottom-[15%] glass-card p-3 md:p-4 rounded-2xl md:rounded-3xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.5)] backdrop-blur-2xl z-20 w-36 md:w-48 group/card hover:border-white/20 transition-colors"
                style={{ transformStyle: "preserve-3d" }}
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

              {/* Floating Element 3: AI Inference Status - Moved lower */}
              <motion.div
                animate={{ y: [0, -15, 0], translateZ: [0, 60, 0] }}
                transition={{ repeat: Infinity, duration: 9, delay: 0.5, ease: "easeInOut" }}
                className="hidden md:block absolute -right-8 bottom-0 glass-card p-4 rounded-3xl border border-purple-500/20 shadow-[0_20px_40px_rgba(139,92,246,0.1)] backdrop-blur-2xl z-20 w-56 group/card hover:border-purple-500/40 transition-all"
                style={{ transformStyle: "preserve-3d" }}
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

            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
