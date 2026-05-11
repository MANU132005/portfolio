"use client";

import { motion } from "framer-motion";
import { Zap, Layers, Eye, ShieldCheck, Scale, MousePointerClick, Cpu, Terminal } from "lucide-react";

const PHILOSOPHIES = [
  {
    icon: <Zap className="w-6 h-6 text-yellow-400" />,
    title: "Performance First",
    desc: "Every millisecond is a conversation with the user. I prioritize bundle optimization, efficient state management, and low-latency edge deployments.",
    colSpan: "md:col-span-2 lg:col-span-2"
  },
  {
    icon: <Eye className="w-6 h-6 text-blue-400" />,
    title: "Accessibility Matters",
    desc: "Inclusive design is not a feature; it's a foundation. I build with WCAG standards and ARIA compliance at the core of every component.",
    colSpan: "md:col-span-1 lg:col-span-1"
  },
  {
    icon: <Layers className="w-6 h-6 text-emerald-400" />,
    title: "Product Thinking",
    desc: "I don't just ship features; I solve problems. Every engineering decision is weighed against its impact on the final product experience.",
    colSpan: "md:col-span-1 lg:col-span-1"
  },
  {
    icon: <Scale className="w-6 h-6 text-purple-400" />,
    title: "Scalability",
    desc: "Architecting systems that grow. Modular components, stateless backends, and robust cloud infrastructure designed for immense load.",
    colSpan: "md:col-span-2 lg:col-span-2"
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-red-400" />,
    title: "Real-World Impact",
    desc: "Engineering for humans. I build digital tools that enhance communication, financial clarity, and accessibility in the real world.",
    colSpan: "md:col-span-1 lg:col-span-1"
  },
  {
    icon: <Cpu className="w-6 h-6 text-orange-400" />,
    title: "AI-Augmented Systems",
    desc: "Integrating intelligent models into modern workflows to create predictive, autonomous, and highly personalized user experiences.",
    colSpan: "md:col-span-2 lg:col-span-2"
  },
  {
    icon: <Zap className="w-6 h-6 text-teal-400" />,
    title: "Continuous Learning",
    desc: "The tech landscape is ever-evolving. I maintain a relentless pace of exploration across new languages, frameworks, and architectures.",
    colSpan: "md:col-span-1 lg:col-span-1"
  },
  {
    icon: <Terminal className="w-6 h-6 text-emerald-300" />,
    title: "Clean Architecture",
    desc: "Writing code that other engineers love to read. Robust CI/CD, defensive programming, and SOLID principles for long-term maintainability.",
    colSpan: "md:col-span-2 lg:col-span-2"
  },
  {
    icon: <MousePointerClick className="w-6 h-6 text-indigo-400" />,
    title: "User-Centered Development",
    desc: "The magic is in the details. Cinematic motion, spring physics, and intuitive feedback loops that make software feel alive and responsive.",
    colSpan: "md:col-span-1 lg:col-span-1"
  }
];

export default function Philosophy() {
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
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              How I Think About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Engineering.</span>
            </h2>
            <div className="h-px bg-gradient-to-r from-white/20 to-transparent w-32 hidden md:block" />
          </div>
          <p className="text-white/50 text-xl font-light max-w-2xl">
            I don't just write code to pass tests; I engineer product experiences. My approach bridges the gap between complex systems architecture and fluid human interaction.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {PHILOSOPHIES.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`glass-card p-8 rounded-[2rem] border border-white/5 glass-card-hover group relative overflow-hidden ${item.colSpan}`}
            >
              {/* Dynamic Glow Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute -inset-px bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 rounded-[2rem] z-0 transition-opacity duration-700" style={{ maskImage: 'linear-gradient(black, black) content-box, linear-gradient(black, black)', maskComposite: 'exclude', padding: '1px' }} />

              <div className="relative z-10 h-full flex flex-col justify-between gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-700 ease-out shadow-[inset_0_0_20px_rgba(255,255,255,0.02)]">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{item.title}</h3>
                  <p className="text-white/60 leading-relaxed text-sm font-light">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
