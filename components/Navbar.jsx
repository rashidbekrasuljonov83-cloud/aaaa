"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Menu,
  X,
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/#hero" },
    { name: "Tech Stack", href: "/#tech-stack" },
    { name: "Projects", href: "/#projects" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <header className="sticky top-4 z-50 px-4 sm:px-6 w-full max-w-6xl mx-auto transition-all duration-300">
      <nav
        className={`relative flex items-center justify-between px-5 sm:px-7 py-3.5 rounded-2xl border transition-all duration-300 ${
          scrolled
            ? "bg-[#0d0f17]/85 backdrop-blur-xl border-white/15 shadow-[0_10px_35px_-5px_rgba(0,0,0,0.6),0_0_20px_rgba(6,182,212,0.1)]"
            : "bg-[#0d0f17]/60 backdrop-blur-md border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]"
        }`}
      >
        {/* Brand / Logo */}
        <Link
          href="/#hero"
          className="flex items-center gap-2.5 group cursor-pointer focus:outline-none"
        >
          <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 group-hover:border-cyan-400/60 transition-all duration-300">
            <Code2 className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12 text-cyan-300" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping opacity-75" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-cyan-400" />
          </div>
          <span className="text-lg font-bold tracking-tight text-white flex items-center gap-1">
            Rashidbek<span className="text-cyan-400">.Portfolio</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] rounded-full px-4 py-1.5 backdrop-blur-sm">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative px-4 py-1.5 text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200 group"
            >
              {link.name}
              <span className="absolute inset-x-4 -bottom-0.5 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
            </Link>
          ))}
        </div>

        {/* Right Action Buttons (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          {/* Admin Link Button */}
          <Link
            href="/admin"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-white glass-panel-subtle hover:border-cyan-500/30 transition-colors"
            title="Admin Panel"
          >
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>Admin</span>
          </Link>

          {/* Glowing CTA Button */}
          <Link
            href="/#contact"
            className="relative group inline-flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-semibold text-white overflow-hidden transition-all duration-300"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 opacity-80 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
            <span className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-xl blur-sm opacity-50 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

            <span className="relative z-10 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-cyan-200 animate-pulse" />
              Get in touch
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative p-2 text-slate-300 hover:text-white rounded-xl bg-white/[0.04] border border-white/10 focus:outline-none transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-cyan-400" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Animated Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.97 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="md:hidden mt-2 p-5 rounded-2xl bg-[#0d0f17]/95 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(6,182,212,0.15)] flex flex-col gap-3"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-2.5 rounded-xl text-slate-200 hover:text-white hover:bg-white/[0.05] transition-all font-medium flex items-center justify-between text-base"
              >
                <span>{link.name}</span>
                <span className="text-cyan-400 text-xs">→</span>
              </Link>
            ))}

            <Link
              href="/admin"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2.5 rounded-xl text-cyan-300 hover:text-white hover:bg-cyan-500/10 border border-cyan-500/20 transition-all font-medium flex items-center justify-between text-base"
            >
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                Admin Panel
              </span>
              <span className="text-cyan-400 text-xs">→</span>
            </Link>

            <div className="pt-2 border-t border-white/10 mt-1">
              <Link
                href="/#contact"
                onClick={() => setIsOpen(false)}
                className="w-full relative flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-white font-medium overflow-hidden shadow-[0_0_20px_rgba(6,182,212,0.3)]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600" />
                <span className="relative z-10 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-cyan-200" />
                  Get in touch
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
