"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download, Sparkles, FolderGit2, CheckCircle2, Award, Terminal } from "lucide-react";

export default function HeroSection() {
  const stats = [
    { label: "Years Experience", value: "3+", icon: Award },
    { label: "Completed Projects", value: "25+", icon: FolderGit2 },
    { label: "Code Quality", value: "100%", icon: CheckCircle2 },
  ];

  return (
    <section id="hero" className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 overflow-hidden">
      {/* Background Neon Glow Light Blobs (blur-[120px]) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-cyan-500/15 via-blue-500/10 to-purple-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Availability Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-panel-subtle border border-emerald-500/20 mb-8 shadow-[0_0_15px_rgba(16,185,129,0.1)]"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-xs sm:text-sm font-medium text-emerald-300">
            Available for new opportunities & freelance projects
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.15] mb-6"
        >
          Building Modern & Fluid Web Experiences with{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(6,182,212,0.3)]">
            Next.js & Glass UI
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-2xl mx-auto text-base sm:text-lg text-slate-400 leading-relaxed mb-10"
        >
          Assalomu alaykum! Men zamonaviy web ilovalar, yuqori unumdorlikka ega frontend arxitekturasi va interaktiv interfeyslar yaratuvchi Full-Stack dasturchiman.
        </motion.p>

        {/* Dynamic Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 mb-16"
        >
          {/* Primary View Projects Button */}
          <Link
            href="#projects"
            className="group relative inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-xl font-semibold text-white overflow-hidden shadow-[0_0_30px_rgba(6,182,212,0.35)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] transition-all duration-300"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600" />
            <span className="relative z-10 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-200" />
              View Projects
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>

          {/* Contact Me Button */}
          <Link
            href="#contact"
            className="glass-card-interactive px-6 sm:px-8 py-3.5 rounded-xl font-medium text-slate-200 hover:text-white flex items-center gap-2"
          >
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span>Contact Me</span>
          </Link>

          {/* Download CV / Resume Button */}
          <a
            href="#contact"
            download
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-slate-300 hover:text-white bg-white/[0.02] border border-white/10 hover:border-white/20 transition-colors duration-200 text-sm font-medium"
          >
            <Download className="w-4 h-4 text-slate-400" />
            <span>Download CV</span>
          </a>
        </motion.div>

        {/* Stats Grid Bar in Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="glass-panel p-5 rounded-2xl border border-white/[0.08] hover:border-cyan-500/30 transition-all duration-300 flex items-center justify-center gap-4 text-left group"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white tracking-tight">{stat.value}</div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
