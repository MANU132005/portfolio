"use client";

import { motion } from "framer-motion";
import { Activity, Clock, Zap, ShieldCheck, Database, GitMerge, FileCode2, Cpu } from "lucide-react";

const metrics = [
  { label: "Sign Accuracy", value: "98.2", icon: Zap, color: "text-yellow-400", suffix: "%" },
  { label: "Azure Uptime", value: "99.9", icon: ShieldCheck, color: "text-indigo-400", suffix: "%" },
  { label: "Sign Inference", value: "32", icon: Clock, color: "text-emerald-400", suffix: "ms" },
  { label: "Tax Precision", value: "100", icon: Database, color: "text-blue-400", suffix: "%" },
  { label: "Systems Built", value: "12", icon: FileCode2, color: "text-purple-400", suffix: "+" },
  { label: "Contributions", value: "350", icon: GitMerge, color: "text-emerald-400", suffix: "+" },
  { label: "Model Latency", value: "18", icon: Activity, color: "text-rose-400", suffix: "ms" },
  { label: "A11y Score", value: "100", icon: Cpu, color: "text-sky-400", suffix: "" },
];

export default function Metrics() {
  return (
    <section id="metrics" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="mb-16 md:mb-24 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white/60 uppercase tracking-wider mb-6"
          >
            <Activity className="w-3.5 h-3.5 text-blue-400" />
            Live Telemetry
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white mb-6"
          >
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">metrics.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/50 font-light leading-relaxed"
          >
            Quantifiable product engineering. Building experiences that are not only cinematic, but deeply optimized at the compiler level.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 + 0.2, type: "spring", bounce: 0.4 }}
              className="glass-card p-6 rounded-3xl border border-white/5 hover:border-white/10 transition-colors group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex items-center justify-between mb-4 relative z-10">
                <metric.icon className={`w-5 h-5 ${metric.color} opacity-80`} />
                <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-white/40 transition-colors" />
              </div>
              
              <div className="relative z-10">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1 tracking-tight flex items-baseline">
                  {metric.value}
                  <span className="text-lg font-normal text-white/40 ml-1">{metric.suffix}</span>
                </div>
                <div className="text-xs font-mono text-white/50 uppercase tracking-wider">
                  {metric.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
