"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  Layers, 
  Cpu, 
  Palette, 
  Server, 
  Database, 
  GitBranch, 
  Zap, 
  Workflow, 
  Flame, 
  Globe, 
  Boxes 
} from "lucide-react";

export default function TechStack() {
  const technologies = [
    {
      name: "React",
      category: "Frontend Library",
      description: "Component-driven architecture, hooks, suspense & concurrent mode",
      icon: Code2,
      color: "from-sky-400 to-blue-500",
      glowColor: "rgba(56, 189, 248, 0.25)",
      badge: "Expert",
    },
    {
      name: "Next.js 14+",
      category: "Fullstack Framework",
      description: "App router, SSR, Server Actions, route handlers, metadata API",
      icon: Zap,
      color: "from-slate-100 to-slate-400",
      glowColor: "rgba(255, 255, 255, 0.2)",
      badge: "Expert",
    },
    {
      name: "TypeScript & JS",
      category: "Languages",
      description: "Strict typing, ESNext features, asynchronous programming",
      icon: Cpu,
      color: "from-blue-400 to-indigo-500",
      glowColor: "rgba(96, 165, 250, 0.25)",
      badge: "Advanced",
    },
    {
      name: "Tailwind CSS",
      category: "Styling & UI",
      description: "Utility-first design, custom glassmorphism, responsive systems",
      icon: Palette,
      color: "from-cyan-400 to-teal-500",
      glowColor: "rgba(6, 182, 212, 0.25)",
      badge: "Expert",
    },
    {
      name: "Redux Toolkit",
      category: "State Management",
      description: "RTK Query, slices, async thunks, scalable global state",
      icon: Layers,
      color: "from-purple-400 to-violet-600",
      glowColor: "rgba(168, 85, 247, 0.25)",
      badge: "Advanced",
    },
    {
      name: "Framer Motion",
      category: "Interactive Animation",
      description: "Fluid micro-interactions, layout animations & scroll physics",
      icon: Flame,
      color: "from-pink-400 to-rose-500",
      glowColor: "rgba(244, 63, 94, 0.25)",
      badge: "Advanced",
    },
    {
      name: "Node.js & Express",
      category: "Backend Engine",
      description: "RESTful architecture, middleware, JWT authentication",
      icon: Server,
      color: "from-emerald-400 to-green-600",
      glowColor: "rgba(16, 185, 129, 0.25)",
      badge: "Intermediate",
    },
    {
      name: "REST & GraphQL API",
      category: "API & Data Fetching",
      description: "API design, endpoints integration, caching & Axios/Fetch",
      icon: Globe,
      color: "from-amber-400 to-orange-500",
      glowColor: "rgba(245, 158, 11, 0.25)",
      badge: "Advanced",
    },
    {
      name: "PostgreSQL & Prisma",
      category: "Database & ORM",
      description: "Relational modeling, migrations, performant SQL queries",
      icon: Database,
      color: "from-sky-500 to-indigo-600",
      glowColor: "rgba(14, 165, 233, 0.25)",
      badge: "Intermediate",
    },
    {
      name: "Git & GitHub",
      category: "Version Control",
      description: "CI/CD pipelines, Gitflow, pull requests, semantic versioning",
      icon: GitBranch,
      color: "from-orange-400 to-rose-500",
      glowColor: "rgba(249, 115, 22, 0.25)",
      badge: "Expert",
    },
    {
      name: "Zustand",
      category: "State Management",
      description: "Lightweight reactive stores, middleware, zero boilerplate",
      icon: Boxes,
      color: "from-amber-300 to-yellow-500",
      glowColor: "rgba(252, 211, 77, 0.25)",
      badge: "Advanced",
    },
    {
      name: "CI/CD & Deployment",
      category: "DevOps & Cloud",
      description: "Vercel, Docker basics, automated deployments and tests",
      icon: Workflow,
      color: "from-cyan-400 to-blue-600",
      glowColor: "rgba(6, 182, 212, 0.25)",
      badge: "Advanced",
    },
  ];

  // Framer Motion Stagger Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35, scale: 0.94 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  };

  return (
    <section id="tech-stack" className="relative py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Background Accent Light */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Header Section */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 mb-3">
          <Cpu className="w-3.5 h-3.5" />
          <span>Core Capabilities</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
          Tech Stack & Expertise
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          Loyihalarimda ishlatiladigan zamonaviy vositalar, dasturlash tillari va eng samarali arxitekturalar toʻplami.
        </p>
      </div>

      {/* Staggered Animated Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {technologies.map((tech) => {
          const IconComp = tech.icon;
          return (
            <motion.div
              key={tech.name}
              variants={cardVariants}
              whileHover={{
                y: -6,
                scale: 1.02,
                transition: { duration: 0.25, ease: "easeInOut" },
              }}
              className="group relative p-6 rounded-2xl glass-panel border border-white/[0.08] hover:border-cyan-500/40 hover:bg-white/[0.045] transition-all duration-300"
              style={{
                boxShadow: "0 4px 20px -2px rgba(0, 0, 0, 0.4)",
              }}
            >
              {/* Dynamic Neon Glow on Hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10 blur-xl"
                style={{
                  background: `radial-gradient(circle at center, ${tech.glowColor} 0%, transparent 70%)`,
                }}
              />

              <div className="flex items-start justify-between mb-4">
                {/* Icon Container with gradient */}
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tech.color} p-[1px] shadow-md group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className="w-full h-full rounded-xl bg-[#0d0f17]/90 flex items-center justify-center text-white">
                    <IconComp className="w-6 h-6 text-cyan-300 group-hover:text-white transition-colors" />
                  </div>
                </div>

                {/* Proficiency Badge */}
                <span className="text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/10 text-slate-300 group-hover:border-cyan-500/30 group-hover:text-cyan-300 transition-colors">
                  {tech.badge}
                </span>
              </div>

              {/* Title & Info */}
              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                {tech.name}
              </h3>
              <p className="text-xs text-cyan-400/80 font-medium mb-2.5">
                {tech.category}
              </p>
              <p className="text-xs text-slate-400 leading-relaxed">
                {tech.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
