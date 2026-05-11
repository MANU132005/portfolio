"use client";

import { motion } from "framer-motion";
import { Terminal, Cpu, Workflow, Zap, Box, Activity } from "lucide-react";

export default function CurrentlyBuilding() {
  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card p-1 rounded-[3rem] border border-white/5 relative overflow-hidden group shadow-[0_0_50px_rgba(0,0,0,0.5)]"
        >
          {/* Animated Glow Border Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-indigo-500/30 to-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-2xl z-0" />
          
          <div className="bg-[#030305]/90 backdrop-blur-3xl rounded-[2.9rem] p-8 md:p-14 relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]"></span>
                  </div>
                  <h2 className="text-xs font-mono text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">System Live</h2>
                </div>
                <h3 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
                  Currently <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Building</span>
                </h3>
              </div>
              <div className="flex items-center gap-2 text-white/40 font-mono text-sm bg-white/5 px-4 py-2 rounded-xl border border-white/5">
                <Activity className="w-4 h-4" />
                <span className="animate-pulse">Active Session</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Terminal View */}
              <div className="bg-[#010101] rounded-[2rem] border border-white/5 p-8 font-mono text-sm shadow-inner relative overflow-hidden group/term">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-50" />
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover/term:opacity-100 transition-opacity" />
                <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4 relative z-10">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <div className="text-xs text-white/30">bash - 80x24</div>
                </div>
                <div className="space-y-4 relative z-10">
                  <div className="flex items-center gap-3">
                    <span className="text-blue-400">➜</span>
                    <span className="text-white/50">~</span>
                    <span className="text-white font-medium">python train_model.py --epochs 50 --gesture-v4</span>
                  </div>
                  <div className="text-emerald-400/80 pl-6 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Model accuracy reached 98.4% (Checkpoint saved)
                  </div>
                  <div className="flex items-center gap-3 mt-4">
                    <span className="text-indigo-400">➜</span>
                    <span className="text-white/50">~</span>
                    <span className="text-white font-medium">az webapp deploy --name signconnect-v3</span>
                  </div>
                  <div className="text-white/40 pl-6 space-y-1 text-xs">
                    <div>Deploying to Azure App Service...</div>
                    <div>Syncing static assets to Edge Network...</div>
                    <div>Health check: [OK] Service active at central-us-1</div>
                  </div>
                  <div className="flex items-center gap-3 mt-4">
                    <span className="text-blue-400">➜</span>
                    <span className="text-white/50">~</span>
                    <span className="w-2 h-4 bg-white/80 animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Status Modules */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#050508] p-6 rounded-[2rem] border border-white/5 hover:bg-white/[0.02] transition-colors relative group/card">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity rounded-[2rem]" />
                  <Cpu className="w-6 h-6 text-blue-400 mb-4" />
                  <div className="text-white font-bold mb-1 tracking-tight">Cloud Ecosystems</div>
                  <div className="text-sm text-white/50 font-light">Azure App Services & Edge Runtime</div>
                </div>
                <div className="bg-[#050508] p-6 rounded-[2rem] border border-white/5 hover:bg-white/[0.02] transition-colors relative group/card">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity rounded-[2rem]" />
                  <Workflow className="w-6 h-6 text-indigo-400 mb-4" />
                  <div className="text-white font-bold mb-1 tracking-tight">CI/CD Pipelines</div>
                  <div className="text-sm text-white/50 font-light">Automated Azure Deployments</div>
                </div>
                <div className="bg-[#050508] p-6 rounded-[2rem] border border-white/5 hover:bg-white/[0.02] transition-colors relative group/card">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity rounded-[2rem]" />
                  <Zap className="w-6 h-6 text-yellow-400 mb-4" />
                  <div className="text-white font-bold mb-1 tracking-tight">AI Experiments</div>
                  <div className="text-sm text-white/50 font-light">Mediapipe & LSTM refinement</div>
                </div>
                <div className="bg-[#050508] p-6 rounded-[2rem] border border-white/5 hover:bg-white/[0.02] transition-colors relative group/card">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity rounded-[2rem]" />
                  <Box className="w-6 h-6 text-purple-400 mb-4" />
                  <div className="text-white font-bold mb-1 tracking-tight">New Tech Stack</div>
                  <div className="text-sm text-white/50 font-light">Exploring Rust for Wasm ML</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
