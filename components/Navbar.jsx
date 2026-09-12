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
    const handleScroll = () => setScrolled(window.scrollY > 20);
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
            ? "backdrop-blur-xl shadow-[0_10px_35px_-5px_rgba(0,0,0,0.5)]"
            : "backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]"
        }`}
        style={{
          background: "var(--glass-bg)",
          borderColor: scrolled
            ? "rgba(var(--accent-rgb),0.25)"
            : "var(--glass-border)",
        }}
      >
        {/* Brand / Logo */}
        <Link
          href="/#hero"
          className="flex items-center gap-2.5 group cursor-pointer focus:outline-none"
        >
          <div
            className="relative w-9 h-9 rounded-xl border flex items-center justify-center group-hover:scale-105 transition-all duration-300"
            style={{
              background: `rgba(var(--accent-rgb), 0.15)`,
              borderColor: `rgba(var(--accent-rgb), 0.4)`,
            }}
          >
            <Code2
              className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12"
              style={{ color: "var(--accent-color)" }}
            />
            <span
              className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full animate-ping opacity-75"
              style={{ backgroundColor: "var(--accent-color)" }}
            />
            <span
              className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: "var(--accent-color)" }}
            />
          </div>
          <span
            className="text-lg font-bold tracking-tight flex items-center gap-1"
            style={{ color: "var(--text-main)" }}
          >
            Rashidbek
            <span style={{ color: "var(--accent-color)" }}>.Portfolio</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div
          className="hidden md:flex items-center gap-1 rounded-full px-4 py-1.5 backdrop-blur-sm"
          style={{
            background: "var(--glass-bg)",
            border: "1px solid var(--glass-border)",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative px-4 py-1.5 text-sm font-medium transition-colors duration-200 group"
              style={{ color: "var(--text-sub)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--text-main)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-sub)")
              }
            >
              {link.name}
              <span
                className="absolute inset-x-4 -bottom-0.5 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-full"
                style={{
                  background: `linear-gradient(to right, transparent, var(--accent-color), transparent)`,
                }}
              />
            </Link>
          ))}
        </div>

        {/* Right Action Buttons (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          {/* Admin Link Button */}
          <Link
            href="/admin"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium glass-panel-subtle hover:opacity-80 transition-all"
            style={{ color: "var(--text-sub)" }}
            title="Admin Panel"
          >
            <ShieldCheck
              className="w-4 h-4"
              style={{ color: "var(--accent-color)" }}
            />
            <span>Admin</span>
          </Link>

          {/* Glowing CTA Button */}
          <Link
            href="/#contact"
            className="relative group inline-flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105"
            style={{ boxShadow: `0 0 20px rgba(var(--accent-rgb), 0.4)` }}
          >
            <span
              className="absolute inset-0 rounded-xl"
              style={{
                background: `linear-gradient(135deg, var(--accent-color), rgba(var(--accent-rgb),0.6))`,
              }}
            />
            <span className="relative z-10 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 animate-pulse opacity-90" />
              Get in touch
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative p-2 rounded-xl glass-panel focus:outline-none transition-colors"
          style={{ color: "var(--text-sub)" }}
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? (
            <X className="w-6 h-6" style={{ color: "var(--accent-color)" }} />
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
            className="md:hidden mt-2 p-5 rounded-2xl backdrop-blur-2xl flex flex-col gap-3 shadow-2xl"
            style={{
              background: "var(--glass-bg)",
              border: "1px solid var(--glass-border)",
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-2.5 rounded-xl transition-all font-medium flex items-center justify-between text-base"
                style={{ color: "var(--text-sub)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--glass-hover-bg)";
                  e.currentTarget.style.color = "var(--text-main)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "var(--text-sub)";
                }}
              >
                <span>{link.name}</span>
                <span
                  className="text-xs"
                  style={{ color: "var(--accent-color)" }}
                >
                  →
                </span>
              </Link>
            ))}

            <Link
              href="/admin"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2.5 rounded-xl transition-all font-medium flex items-center justify-between text-base glass-panel"
            >
              <span
                className="flex items-center gap-2"
                style={{ color: "var(--accent-color)" }}
              >
                <ShieldCheck className="w-4 h-4" />
                Admin Panel
              </span>
              <span
                className="text-xs"
                style={{ color: "var(--accent-color)" }}
              >
                →
              </span>
            </Link>

            <div
              className="pt-2 mt-1"
              style={{ borderTop: "1px solid var(--glass-border)" }}
            >
              <Link
                href="/#contact"
                onClick={() => setIsOpen(false)}
                className="w-full relative flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-white font-medium overflow-hidden"
                style={{ boxShadow: `0 0 20px rgba(var(--accent-rgb), 0.4)` }}
              >
                <span
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(135deg, var(--accent-color), rgba(var(--accent-rgb),0.6))`,
                  }}
                />
                <span className="relative z-10 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" />
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
