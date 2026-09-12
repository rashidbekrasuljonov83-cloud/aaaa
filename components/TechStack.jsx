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
        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3"
          style={{
            color: "var(--accent-color)",
            background: `rgba(var(--accent-rgb), 0.1)`,
            border: `1px solid rgba(var(--accent-rgb), 0.25)`,
          }}
        >
          <Cpu className="w-3.5 h-3.5" />
          <span>Core Capabilities</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4" style={{ color: "var(--text-main)" }}>
          Tech Stack & Expertise
        </h2>
        <p className="text-sm sm:text-base" style={{ color: "var(--text-sub)" }}>
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
              className="group relative p-6 rounded-2xl glass-panel transition-all duration-300"
              style={{ boxShadow: "0 4px 20px -2px rgba(0,0,0,0.2)" }}
            >
              {/* Dynamic Neon Glow on Hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10 blur-xl"
                style={{ background: `radial-gradient(circle at center, rgba(var(--accent-rgb),0.25) 0%, transparent 70%)` }}
              />

              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tech.color} p-[1px] shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-full h-full rounded-xl flex items-center justify-center" style={{ background: "var(--bg-color)" }}>
                    <IconComp className="w-6 h-6" style={{ color: "var(--accent-color)" }} />
                  </div>
                </div>

                <span
                  className="text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full transition-colors"
                  style={{ background: "var(--glass-bg)", border: "1px solid var(--glass-border)", color: "var(--text-sub)" }}
                >
                  {tech.badge}
                </span>
              </div>

              <h3 className="text-lg font-bold mb-1" style={{ color: "var(--text-main)" }}>
                {tech.name}
              </h3>
              <p className="text-xs font-medium mb-2.5" style={{ color: "var(--accent-color)" }}>
                {tech.category}
              </p>
              <p className="text-xs leading-relaxed" style={{ color: "var(--text-sub)" }}>
                {tech.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
