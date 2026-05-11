"use client";

import { motion } from "framer-motion";
import { BookOpen, Terminal, Cpu, Cloud, ArrowRight } from "lucide-react";

const INSIGHTS = [
  {
    title: "Optimizing AI Inference for the Browser",
    category: "AI/ML Integration",
    date: "May 2026",
    readTime: "6 min read",
    icon: <Cpu className="w-5 h-5 text-blue-400" />,
    summary: "Deep dive into how I optimized SignConnect's hand-tracking model using WebGL and TensorFlow.js, reducing latency for mobile users.",
    link: "#"
  },
  {
    title: "Architecting Scalable SaaS on Azure",
    category: "Cloud Engineering",
    date: "April 2026",
    readTime: "8 min read",
    icon: <Cloud className="w-5 h-5 text-emerald-400" />,
    summary: "Lessons learned from deploying TaxPal's financial engine on Azure App Services. Handling data precision and secure session management.",
    link: "#"
  },
  {
    title: "The EEE to Software Engineering Bridge",
    category: "Career Journey",
    date: "March 2026",
    readTime: "5 min read",
    icon: <Terminal className="w-5 h-5 text-purple-400" />,
    summary: "How my background in Electrical Engineering shaped my perspective on software systems, scalability, and logical problem-solving.",
    link: "#"
  }
];

export default function Insights() {
  return (
    <section id="insights" className="py-32 relative z-10">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
              Engineering <span className="text-white/30">Insights</span>
            </h2>
            <div className="h-px bg-gradient-to-r from-white/20 to-transparent w-full max-w-[200px]" />
          </div>
          <p className="text-white/50 max-w-2xl text-xl font-light">
            A technical journal documenting my thoughts on system architecture, AI integration, and the philosophy of building great products.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {INSIGHTS.map((insight, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group glass-card p-8 rounded-[2rem] border border-white/5 hover:border-white/10 hover:bg-[#08080a] transition-all duration-500 relative overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    {insight.icon}
                  </div>
                  <div className="text-white/40 text-xs font-mono uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full">
                    {insight.category}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white tracking-tight mb-4 group-hover:text-blue-400 transition-colors">
                  {insight.title}
                </h3>
                <p className="text-white/60 font-light leading-relaxed mb-8">
                  {insight.summary}
                </p>
              </div>

              <div className="relative z-10 flex items-center justify-between mt-auto border-t border-white/5 pt-6">
                <div className="text-white/40 text-xs font-mono uppercase tracking-wider">
                  {insight.readTime}
                </div>
                <a href={insight.link} className="flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium transition-colors group/link">
                  Read Log <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
