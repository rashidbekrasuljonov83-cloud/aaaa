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
      {/* Center accent blob */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] rounded-full blur-[120px] pointer-events-none -z-10 opacity-40"
        style={{ background: "radial-gradient(ellipse, rgba(var(--accent-rgb),0.3), transparent 70%)" }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Availability Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-panel-subtle mb-8"
          style={{ border: "1px solid rgba(16,185,129,0.25)", boxShadow: "0 0 15px rgba(16,185,129,0.12)" }}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-xs sm:text-sm font-medium text-emerald-400">
            Available for new opportunities & freelance projects
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.15] mb-6"
          style={{ color: "var(--text-main)" }}
        >
          Building Modern & Fluid Web Experiences with{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(135deg, var(--accent-color), rgba(var(--accent-rgb),0.6), #c084fc)" }}
          >
            Next.js & Glass UI
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mb-10"
          style={{ color: "var(--text-sub)" }}
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
            href="/#projects"
            className="group relative inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105"
            style={{ boxShadow: `0 0 30px rgba(var(--accent-rgb), 0.4)` }}
          >
            <span
              className="absolute inset-0"
              style={{ background: `linear-gradient(135deg, var(--accent-color), rgba(var(--accent-rgb),0.6))` }}
            />
            <span className="relative z-10 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              View Projects
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>

          {/* Contact Me Button */}
          <Link
            href="/#contact"
            className="glass-card-interactive px-6 sm:px-8 py-3.5 rounded-xl font-medium flex items-center gap-2 transition-all"
            style={{ color: "var(--text-main)" }}
          >
            <Terminal className="w-4 h-4" style={{ color: "var(--accent-color)" }} />
            <span>Contact Me</span>
          </Link>

          {/* Download CV Button */}
          <a
            href="#contact"
            download
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-medium transition-colors duration-200 glass-panel"
            style={{ color: "var(--text-sub)" }}
          >
            <Download className="w-4 h-4" />
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
                className="glass-card-interactive p-5 rounded-2xl flex items-center justify-center gap-4 text-left group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  style={{ background: `rgba(var(--accent-rgb), 0.12)`, border: `1px solid rgba(var(--accent-rgb), 0.2)` }}
                >
                  <IconComponent className="w-6 h-6" style={{ color: "var(--accent-color)" }} />
                </div>
                <div>
                  <div className="text-2xl font-bold tracking-tight" style={{ color: "var(--text-main)" }}>
                    {stat.value}
                  </div>
                  <div className="text-xs uppercase tracking-wider" style={{ color: "var(--text-sub)" }}>
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
