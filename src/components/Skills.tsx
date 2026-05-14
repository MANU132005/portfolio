"use client";

import { motion } from "framer-motion";
import { Layout, Database, Wrench, Cloud, Code, Cpu } from "lucide-react";

const SKILL_CATEGORIES = [
  {
    title: "Frontend Engineering",
    icon: <Layout className="w-5 h-5 text-blue-400" />,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"],
    glow: "group-hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]",
    bg: "group-hover:bg-blue-500/[0.02]"
  },
  {
    title: "Backend Development",
    icon: <Database className="w-5 h-5 text-indigo-400" />,
    skills: ["Node.js", "Express", "Go", "PostgreSQL", "Prisma", "MongoDB", "Redis"],
    glow: "group-hover:shadow-[0_0_30px_-5px_rgba(99,102,241,0.3)]",
    bg: "group-hover:bg-indigo-500/[0.02]"
  },
  {
    title: "Cloud & Infrastructure",
    icon: <Cloud className="w-5 h-5 text-cyan-400" />,
    skills: ["Azure (AZ-900)", "Docker", "CI/CD", "GitHub Actions", "Vercel", "Edge Computing"],
    glow: "group-hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.3)]",
    bg: "group-hover:bg-cyan-500/[0.02]"
  },
  {
    title: "AI & Machine Learning",
    icon: <Cpu className="w-5 h-5 text-purple-400" />,
    skills: ["TensorFlow", "OpenCV", "MediaPipe", "Python", "LLM Integration", "LSTM Models"],
    glow: "group-hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.3)]",
    bg: "group-hover:bg-purple-500/[0.02]"
  },
  {
    title: "Engineering Tools",
    icon: <Wrench className="w-5 h-5 text-emerald-400" />,
    skills: ["Git / GitHub", "Figma", "Postman", "Linux", "VS Code", "Turborepo"],
    glow: "group-hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.3)]",
    bg: "group-hover:bg-emerald-500/[0.02]"
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 relative z-10">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 text-center max-w-2xl mx-auto flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/5 text-white/50 text-xs font-mono tracking-widest uppercase mb-6 shadow-inner">
             Tech Stack
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Engineering <span className="text-white/30">Arsenal</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SKILL_CATEGORIES.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`glass-card p-8 rounded-[2rem] border border-white/5 transition-all duration-700 group relative overflow-hidden ${category.glow} ${category.bg}`}
            >
              <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay pointer-events-none" />
              
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-[#030305] border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 ease-out shadow-[0_0_15px_rgba(255,255,255,0.02)]">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2 relative z-10">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-xl text-xs font-medium bg-[#030305]/50 text-white/60 border border-white/5 hover:border-white/20 hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
