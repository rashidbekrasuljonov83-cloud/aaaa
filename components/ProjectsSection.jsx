"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Sparkles, Layers, ArrowUpRight } from "lucide-react";

export default function ProjectsSection() {
  const categories = ["All", "React", "Next.js", "Fullstack", "API"];
  const [activeCategory, setActiveCategory] = useState("All");

  const projects = [
    {
      id: 1,
      title: "AI Studio SaaS Platform",
      description:
        "Generative AI yordamida kontent yaratish va tasvirlarni qayta ishlovchi to'liq avtomatlashtirilgan SaaS platformasi.",
      categories: ["Next.js", "Fullstack", "API"],
      tags: ["Next.js 14", "Tailwind CSS", "OpenAI API", "Prisma", "Stripe"],
      demoUrl: "https://example.com/demo1",
      githubUrl: "https://github.com/example/ai-studio",
      accentGradient: "from-cyan-500/20 via-blue-500/20 to-purple-500/20",
      featuredBadge: "Featured",
    },
    {
      id: 2,
      title: "Nova Glass E-Commerce",
      description:
        "Ultra-zamonaviy interfeysga ega onlayn doʻkon, savatcha boshqaruvi va tezkor toʻlov tizimlari integratsiyasi.",
      categories: ["React", "API"],
      tags: ["React 18", "Redux Toolkit", "Tailwind CSS", "REST API", "Framer Motion"],
      demoUrl: "https://example.com/demo2",
      githubUrl: "https://github.com/example/nova-shop",
      accentGradient: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
    },
    {
      id: 3,
      title: "DevSocial Community Hub",
      description:
        "Dasturchilar uchun real-vaqt rejimida kod almashish, forum va networking yaratuvchi full-stack ijtimoiy platforma.",
      categories: ["Next.js", "Fullstack"],
      tags: ["Next.js 14", "TypeScript", "Supabase", "Tailwind CSS", "WebSockets"],
      demoUrl: "https://example.com/demo3",
      githubUrl: "https://github.com/example/dev-social",
      accentGradient: "from-purple-500/20 via-pink-500/20 to-indigo-500/20",
      featuredBadge: "Popular",
    },
    {
      id: 4,
      title: "CryptoPulse Live Tracker",
      description:
        "Real-vaqt kriptovalyuta narxlarini kuzatuvchi, interaktiv grafiklar va narx signallari bilan boyitilgan dashboard.",
      categories: ["React", "API"],
      tags: ["React", "Chart.js", "CoinGecko API", "Tailwind CSS", "Zustand"],
      demoUrl: "https://example.com/demo4",
      githubUrl: "https://github.com/example/crypto-pulse",
      accentGradient: "from-amber-500/20 via-orange-500/20 to-rose-500/20",
    },
    {
      id: 5,
      title: "CloudVault File Manager",
      description:
        "Fayllarni xavfsiz saqlash, shifrlash va tezkor almashish imkoniyatini beruvchi bulutli saqlash boshqaruv tizimi.",
      categories: ["Next.js", "API"],
      tags: ["Next.js 14", "AWS S3", "REST API", "Tailwind CSS", "Auth.js"],
      demoUrl: "https://example.com/demo5",
      githubUrl: "https://github.com/example/cloud-vault",
      accentGradient: "from-blue-500/20 via-cyan-500/20 to-emerald-500/20",
    },
    {
      id: 6,
      title: "TaskFlow Kanban & Roadmap",
      description:
        "Loyihalarni sprintlarga ajratish, drag-and-drop kanban doskasi va jamoaviy analitika vositasi.",
      categories: ["React"],
      tags: ["React", "Framer Motion", "Zustand", "Tailwind CSS", "dnd-kit"],
      demoUrl: "https://example.com/demo6",
      githubUrl: "https://github.com/example/task-flow",
      accentGradient: "from-violet-500/20 via-purple-500/20 to-cyan-500/20",
    },
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.categories.includes(activeCategory));

  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Background Neon Blur */}
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Header Section */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 mb-3">
          <Layers className="w-3.5 h-3.5" />
          <span>Selected Work</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
          Featured Projects
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          Mening soʻnggi web-ishlanmalarim, startap loyihalarim va texnik tajribalarim.
        </p>
      </div>

      {/* Category Filter Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                isActive
                  ? "text-white shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                  : "text-slate-400 hover:text-white glass-panel-subtle hover:border-white/20"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeFilterGlow"
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          );
        })}
      </div>

      {/* Projects Grid Panel */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.35 }}
              className="group relative flex flex-col justify-between rounded-2xl glass-panel border border-white/[0.08] p-6 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-[0_15px_35px_-5px_rgba(6,182,212,0.25),0_0_25px_rgba(6,182,212,0.15)] transition-all duration-300"
            >
              {/* Card Top Preview Banner with Glass Gradient */}
              <div
                className={`relative w-full h-44 rounded-xl mb-5 overflow-hidden bg-gradient-to-br ${project.accentGradient} border border-white/10 flex items-center justify-center p-4`}
              >
                {/* Background Grid Pattern in Mockup */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

                {/* Center Icon Element */}
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-white/[0.06] backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-8 h-8 text-cyan-300" />
                </div>

                {/* Optional Featured Tag */}
                {project.featuredBadge && (
                  <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 backdrop-blur-sm">
                    {project.featuredBadge}
                  </span>
                )}
              </div>

              {/* Project Content */}
              <div className="flex-1 flex flex-col">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Technology Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-lg bg-white/[0.04] text-cyan-300/90 border border-white/[0.07] group-hover:border-cyan-500/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links (Live Demo & GitHub) */}
              <div className="pt-4 border-t border-white/[0.07] flex items-center justify-between mt-auto">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/30 px-3.5 py-2 rounded-lg transition-all duration-200"
                >
                  <span>Live Preview</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-cyan-300" />
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-white px-3 py-2 rounded-lg hover:bg-white/[0.05] transition-colors duration-200"
                >
                  <Github className="w-4 h-4 text-slate-400" />
                  <span>Code</span>
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
