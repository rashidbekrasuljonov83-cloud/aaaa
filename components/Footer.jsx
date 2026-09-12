"use client";

import Link from "next/link";
import { ArrowUp, Code2, Heart, ShieldCheck } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#0d0f17]/80 backdrop-blur-xl mt-24 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Tagline */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
            <Code2 className="w-4 h-4" />
          </div>
          <div>
            <span className="font-bold text-white tracking-tight">
              Rashidbek<span className="text-cyan-400">.Portfolio</span>
            </span>
            <span className="text-xs text-slate-400 ml-2 hidden sm:inline">
              Ultra-modern Glassmorphism Portfolio
            </span>
          </div>
        </div>

        {/* Made with passion & Admin link */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline mx-0.5" />
            <span>using Next.js 14, Tailwind CSS & Framer Motion</span>
          </div>
          <span className="hidden sm:inline text-slate-600">•</span>
          <Link
            href="/admin"
            className="text-slate-400 hover:text-cyan-400 transition-colors inline-flex items-center gap-1"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Admin Panel</span>
          </Link>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 text-xs font-medium text-slate-300 hover:text-white px-3.5 py-2 rounded-xl glass-panel-subtle hover:border-cyan-500/40 transition-colors"
          aria-label="Back to top"
        >
          <span>Tepaga</span>
          <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
        </button>
      </div>
    </footer>
  );
}
