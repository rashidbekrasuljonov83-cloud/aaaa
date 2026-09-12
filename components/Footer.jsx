"use client";

import Link from "next/link";
import { ArrowUp, Code2, Heart, ShieldCheck } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="relative mt-24 py-12 px-4 sm:px-6 backdrop-blur-xl"
      style={{
        borderTop: "1px solid var(--glass-border)",
        background: "var(--glass-bg)",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Tagline */}
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{
              background: `rgba(var(--accent-rgb), 0.1)`,
              border: `1px solid rgba(var(--accent-rgb), 0.2)`,
              color: "var(--accent-color)",
            }}
          >
            <Code2 className="w-4 h-4" />
          </div>
          <div>
            <span
              className="font-bold tracking-tight"
              style={{ color: "var(--text-main)" }}
            >
              Rashidbek
              <span style={{ color: "var(--accent-color)" }}>.Portfolio</span>
            </span>
            <span
              className="text-xs ml-2 hidden sm:inline"
              style={{ color: "var(--text-sub)" }}
            >
              Ultra-modern Glassmorphism Portfolio
            </span>
          </div>
        </div>

        {/* Made with passion & Admin link */}
        <div
          className="flex flex-col sm:flex-row items-center gap-3 text-xs"
          style={{ color: "var(--text-sub)" }}
        >
          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline mx-0.5" />
            <span>using Next.js 14, Tailwind CSS & Framer Motion</span>
          </div>
          <span className="hidden sm:inline opacity-40">•</span>
          <Link
            href="/admin"
            className="inline-flex items-center gap-1 transition-colors hover:opacity-80"
            style={{ color: "var(--accent-color)" }}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Admin Panel</span>
          </Link>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 text-xs font-medium px-3.5 py-2 rounded-xl glass-panel hover:opacity-80 transition-opacity"
          style={{ color: "var(--text-sub)" }}
          aria-label="Back to top"
        >
          <span>Tepaga</span>
          <ArrowUp
            className="w-3.5 h-3.5"
            style={{ color: "var(--accent-color)" }}
          />
        </button>
      </div>
    </footer>
  );
}
