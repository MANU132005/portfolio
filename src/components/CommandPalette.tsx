"use client";

import * as React from "react";
import { Command } from "cmdk";
import { Search, Monitor, Terminal, Home, User, Briefcase, Mail, FolderGit2, Cpu, LineChart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export function CommandPalette() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = React.useCallback((command: () => void) => {
    setOpen(false);
    command();
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-32 px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#020202]/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="w-full max-w-2xl relative z-10"
          >
            <Command
              className="w-full rounded-2xl border border-white/10 bg-[#0a0a0c]/90 backdrop-blur-xl shadow-2xl overflow-hidden cmdk-root text-white font-sans"
              label="Global Command Menu"
            >
              <div className="flex items-center border-b border-white/10 px-4 py-4" cmdk-input-wrapper="">
                <Search className="w-5 h-5 text-white/40 mr-3" />
                <Command.Input
                  autoFocus
                  placeholder="Type a command or search..."
                  className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-white/30 text-lg w-full"
                />
                <div className="flex items-center gap-1 text-[10px] text-white/30 font-mono">
                  <kbd className="bg-white/10 px-1.5 py-0.5 rounded border border-white/10">ESC</kbd>
                </div>
              </div>
              <Command.List className="max-h-[300px] overflow-y-auto p-2 overscroll-contain">
                <Command.Empty className="py-6 text-center text-sm text-white/50 font-mono">
                  No results found.
                </Command.Empty>

                <Command.Group heading="Navigation" className="px-2 text-white/40 text-xs font-mono uppercase tracking-wider py-2">
                  <Command.Item onSelect={() => runCommand(() => window.location.href = '#home')} className="cmdk-item">
                    <Home className="w-4 h-4 mr-3 text-white/50" />
                    <span>Home</span>
                  </Command.Item>
                  <Command.Item onSelect={() => runCommand(() => window.location.href = '#about')} className="cmdk-item">
                    <User className="w-4 h-4 mr-3 text-white/50" />
                    <span>About / Engineering Philosophy</span>
                  </Command.Item>
                  <Command.Item onSelect={() => runCommand(() => window.location.href = '#projects')} className="cmdk-item">
                    <Briefcase className="w-4 h-4 mr-3 text-white/50" />
                    <span>Case Studies & Architecture</span>
                  </Command.Item>
                  <Command.Item onSelect={() => runCommand(() => window.location.href = '#contact')} className="cmdk-item">
                    <Mail className="w-4 h-4 mr-3 text-white/50" />
                    <span>Establish Link (Contact)</span>
                  </Command.Item>
                </Command.Group>

                <Command.Group heading="Engineering Integrations" className="px-2 text-white/40 text-xs font-mono uppercase tracking-wider py-2">
                  <Command.Item onSelect={() => runCommand(() => window.open('https://github.com', '_blank'))} className="cmdk-item">
                    <FolderGit2 className="w-4 h-4 mr-3 text-blue-400" />
                    <span>Access GitHub Repository</span>
                  </Command.Item>
                  <Command.Item onSelect={() => runCommand(() => console.log('WakaTime analytics loading...'))} className="cmdk-item">
                    <LineChart className="w-4 h-4 mr-3 text-purple-400" />
                    <span>View Telemetry Analytics</span>
                  </Command.Item>
                  <Command.Item onSelect={() => runCommand(() => console.log('Simulating deploy...'))} className="cmdk-item">
                    <Terminal className="w-4 h-4 mr-3 text-emerald-400" />
                    <span>Run Deployment Pipeline</span>
                  </Command.Item>
                </Command.Group>

                <Command.Group heading="System Preferences" className="px-2 text-white/40 text-xs font-mono uppercase tracking-wider py-2">
                  <Command.Item onSelect={() => runCommand(() => {})} className="cmdk-item">
                    <Monitor className="w-4 h-4 mr-3 text-white/50" />
                    <span>Toggle Theme (System)</span>
                  </Command.Item>
                </Command.Group>
              </Command.List>
            </Command>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
