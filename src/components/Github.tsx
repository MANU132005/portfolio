"use client";

import { motion } from "framer-motion";
import { GitPullRequest, Activity, Server, Database, Lock, Code2 } from "lucide-react";

export default function Github() {
  return (
    <section className="py-32 relative z-10">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono tracking-wider uppercase mb-6">
            <Activity className="w-3 h-3 animate-pulse" /> Live Telemetry
          </div>
          <div className="flex items-center gap-4">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
              System <span className="text-white/30">Activity</span>
            </h2>
            <div className="h-px bg-gradient-to-r from-white/20 to-transparent w-full max-w-[200px]" />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Heatmap Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 glass-card p-10 rounded-[2.5rem] border border-white/5 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-blue-500/10 transition-colors duration-1000" />
            
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 relative z-10 gap-4">
              <div>
                <h3 className="text-4xl font-bold text-white tracking-tighter mb-2">1,240 <span className="text-white/40 text-2xl">Commits</span></h3>
                <p className="text-blue-400 font-mono text-sm uppercase tracking-widest">Last 365 Days</p>
              </div>
              <div className="hidden sm:flex items-center gap-4 text-xs font-mono text-white/40 bg-white/5 px-4 py-2 rounded-xl border border-white/5">
                <span className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-sm bg-white/5 border border-white/10" /> Min</span>
                <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-sm bg-blue-500/20" /></span>
                <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-sm bg-blue-500/50" /></span>
                <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-sm bg-blue-500/80" /></span>
                <span className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-sm bg-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.8)]" /> Max</span>
              </div>
            </div>
            
            {/* High-End Heatmap Grid */}
            <div className="grid grid-cols-12 sm:grid-cols-[repeat(24,1fr)] gap-2 relative z-10 perspective-[500px]">
              {Array.from({ length: 168 }).map((_, i) => {
                const rand = Math.random();
                const isActive = rand > 0.4;
                const isHigh = rand > 0.8;
                const isMed = rand > 0.6;
                return (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, scale: 0, translateZ: -50 }}
                    whileInView={{ opacity: 1, scale: 1, translateZ: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (i % 24) * 0.015, duration: 0.5, ease: "easeOut" }}
                    whileHover={{ scale: 1.5, zIndex: 10, translateZ: 20 }}
                    className={`w-full aspect-square rounded-[4px] border border-white/5 transition-all ${
                      isHigh ? 'bg-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.6)]' :
                      isMed ? 'bg-blue-500/60' :
                      isActive ? 'bg-blue-500/30' :
                      'bg-white/[0.02]'
                    }`}
                  />
                );
              })}
            </div>
          </motion.div>

          {/* Stats Column */}
          <div className="flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card p-8 rounded-[2.5rem] border border-white/5 flex-1 relative overflow-hidden group hover:bg-[#08080a] transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6">
                <Server className="w-6 h-6 text-emerald-400" />
              </div>
              <div className="text-4xl font-bold text-white tracking-tighter mb-2">99.9<span className="text-2xl text-white/50">%</span></div>
              <div className="text-sm text-white/50 font-light">Global Uptime</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card p-8 rounded-[2.5rem] border border-white/5 flex-1 relative overflow-hidden group hover:bg-[#08080a] transition-colors"
            >
               <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
               <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6">
                <GitPullRequest className="w-6 h-6 text-purple-400" />
              </div>
              <div className="text-4xl font-bold text-white tracking-tighter mb-2">112</div>
              <div className="text-sm text-white/50 font-light">Pull Requests Merged</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
