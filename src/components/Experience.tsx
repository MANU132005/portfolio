"use client";

import { motion } from "framer-motion";
import { Cpu, Layout, Layers, Cloud } from "lucide-react";

const EVOLUTION = [
  { stage: "EEE Student", desc: "Hardware & Logic Foundation", icon: <Cpu className="w-4 h-4" /> },
  { stage: "Frontend Dev", desc: "UI/UX & Modern Web", icon: <Layout className="w-4 h-4" /> },
  { stage: "Full Stack", desc: "Product Engineering", icon: <Layers className="w-4 h-4" /> },
  { stage: "Cloud & AI", desc: "Scalable Systems", icon: <Cloud className="w-4 h-4" /> }
];

const EXPERIENCES = [
  {
    role: "Full Stack Developer Intern",
    company: "Infosys Springboard",
    period: "2024 - Present",
    description: "Collaborating on enterprise-grade web applications. Focused on component-based UI design, structured development, and modern Git workflows for large-scale production software.",
  },
  {
    role: "B.Tech in Electrical & Electronics Engineering",
    company: "AI/ML Minor",
    period: "2021 - 2025",
    description: "Bridging physical systems with intelligent software. Specializing in the intersection of hardware logic and cloud-native machine learning models.",
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 relative z-10 overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
              Engineering <span className="text-white/30">Evolution</span>
            </h2>
          </div>
        </motion.div>

        {/* Cinematic Timeline */}
        <div className="relative mb-32">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 -translate-y-1/2 hidden md:block" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {EVOLUTION.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#030305] border border-white/10 flex items-center justify-center mb-6 relative z-10 group-hover:border-blue-500/50 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-500">
                  <div className="text-white/40 group-hover:text-blue-400 transition-colors">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-white font-bold tracking-tight mb-2 uppercase text-xs font-mono tracking-widest">{item.stage}</h3>
                <p className="text-white/40 text-[10px] uppercase font-mono">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass-card p-8 md:p-12 rounded-[2.5rem] border border-white/5 hover:border-white/10 transition-all group"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{exp.role}</h3>
                  <div className="text-blue-400 font-medium">{exp.company}</div>
                </div>
                <div className="px-4 py-2 rounded-full bg-white/5 border border-white/5 text-white/40 text-xs font-mono uppercase tracking-widest whitespace-nowrap">
                  {exp.period}
                </div>
              </div>
              <p className="mt-8 text-white/60 leading-relaxed text-lg font-light max-w-3xl">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
