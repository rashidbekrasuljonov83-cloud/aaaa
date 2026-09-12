"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme, themes, wallpapers } from "@/context/ThemeContext";
import { 
  Palette, 
  X, 
  Check, 
  Sparkles, 
  Sun, 
  Moon, 
  RotateCcw,
  Sliders
} from "lucide-react";

export default function ThemeCustomizer() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme, wallpaper, setWallpaper, isLightMode } = useTheme();

  const handleToggleLightDark = () => {
    if (isLightMode) {
      setTheme("cyber-dark");
    } else {
      setTheme("clean-frost");
    }
  };

  const handleReset = () => {
    setTheme("cyber-dark");
    setWallpaper("neon-glow");
  };

  return (
    <>
      {/* Floating Trigger Button (Bottom-Right) */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-3 rounded-2xl glass-panel shadow-[0_10px_35px_rgba(0,0,0,0.5),0_0_20px_rgba(var(--accent-rgb),0.35)] border border-white/20 text-[var(--text-main)] hover:border-[var(--accent-color)] transition-colors group cursor-pointer"
        aria-label="Customize Theme and Wallpaper"
      >
        <div className="relative">
          <Palette className="w-5 h-5 text-[var(--accent-color)] group-hover:rotate-12 transition-transform" />
          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[var(--accent-color)] animate-ping" />
        </div>
        <span className="text-xs font-semibold hidden sm:inline">
          Mavzu & Fon
        </span>
      </motion.button>

      {/* Slide-over / Modal Panel */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm">
            {/* Backdrop click to close */}
            <div
              className="absolute inset-0"
              onClick={() => setIsOpen(false)}
            />

            {/* Customizer Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="relative w-full max-w-md h-full bg-[var(--bg-color)]/95 backdrop-blur-2xl border-l border-white/10 shadow-2xl p-6 overflow-y-auto flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-[var(--glass-bg)] border border-[var(--glass-border)] flex items-center justify-center text-[var(--accent-color)]">
                      <Sliders className="w-4 h-4" />
                    </div>
                    <div>
                      <h2 className="text-base font-bold text-[var(--text-main)]">
                        Mavzu & Fon Sozlamalari
                      </h2>
                      <p className="text-xs text-[var(--text-sub)]">
                        Sayt koʻrinishini oʻzingizga moslang
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-xl text-[var(--text-sub)] hover:text-[var(--text-main)] hover:bg-white/[0.05] transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Quick Light / Dark Mode Toggle */}
                <div className="mb-6 p-4 rounded-2xl glass-panel flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {isLightMode ? (
                      <Sun className="w-5 h-5 text-amber-500" />
                    ) : (
                      <Moon className="w-5 h-5 text-[var(--accent-color)]" />
                    )}
                    <div>
                      <div className="text-xs font-semibold text-[var(--text-main)]">
                        {isLightMode ? "Light Rejimda" : "Dark Rejimda"}
                      </div>
                      <div className="text-[11px] text-[var(--text-sub)]">
                        Tezkor rejim almashtirish
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleToggleLightDark}
                    className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-[var(--accent-color)] text-white shadow-md hover:opacity-90 transition-opacity"
                  >
                    {isLightMode ? "Dark rejimga oʻtish" : "Light rejimga oʻtish"}
                  </button>
                </div>

                {/* SECTION 1: 6 Color Themes */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xs uppercase tracking-wider font-bold text-[var(--text-sub)]">
                      1. Rang Mavzulari (6 ta variant)
                    </h3>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[var(--glass-bg)] border border-[var(--glass-border)] text-[var(--text-sub)]">
                      {theme.name}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    {themes.map((t) => {
                      const isSelected = theme.id === t.id;
                      return (
                        <button
                          key={t.id}
                          onClick={() => setTheme(t.id)}
                          className={`relative p-3 rounded-xl text-left border transition-all flex flex-col justify-between ${
                            isSelected
                              ? "border-[var(--accent-color)] bg-white/[0.07] shadow-[0_0_15px_rgba(var(--accent-rgb),0.3)]"
                              : "border-[var(--glass-border)] bg-[var(--glass-bg)] hover:border-white/20"
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            {/* Color Swatch Dot */}
                            <div className="flex items-center gap-1.5">
                              <span
                                className="w-4 h-4 rounded-full border border-white/20 shadow-sm"
                                style={{ backgroundColor: t.color }}
                              />
                              <span
                                className="w-3 h-3 rounded-full border border-white/20 opacity-60"
                                style={{ backgroundColor: t.bgPreview }}
                              />
                            </div>

                            {/* Mode badge & check */}
                            <div className="flex items-center gap-1">
                              <span className="text-[9px] px-1.5 py-0.5 rounded uppercase font-semibold bg-white/[0.06] text-[var(--text-sub)]">
                                {t.mode}
                              </span>
                              {isSelected && (
                                <Check className="w-3.5 h-3.5 text-[var(--accent-color)]" />
                              )}
                            </div>
                          </div>

                          <div className="text-xs font-bold text-[var(--text-main)] mb-0.5">
                            {t.name}
                          </div>
                          <div className="text-[10px] text-[var(--text-sub)] line-clamp-1">
                            {t.description}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* SECTION 2: 6 Background Wallpapers / Textures */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xs uppercase tracking-wider font-bold text-[var(--text-sub)]">
                      2. Orqa Fon Rasmlari / Teksturalari
                    </h3>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[var(--glass-bg)] border border-[var(--glass-border)] text-[var(--text-sub)]">
                      {wallpaper.name}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    {wallpapers.map((w) => {
                      const isSelected = wallpaper.id === w.id;
                      return (
                        <button
                          key={w.id}
                          onClick={() => setWallpaper(w.id)}
                          className={`relative p-3 rounded-xl text-left border transition-all ${
                            isSelected
                              ? "border-[var(--accent-color)] bg-white/[0.07] shadow-[0_0_15px_rgba(var(--accent-rgb),0.3)]"
                              : "border-[var(--glass-border)] bg-[var(--glass-bg)] hover:border-white/20"
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-lg">{w.icon}</span>
                            {isSelected && (
                              <Check className="w-3.5 h-3.5 text-[var(--accent-color)]" />
                            )}
                          </div>
                          <div className="text-xs font-bold text-[var(--text-main)] mb-0.5">
                            {w.name}
                          </div>
                          <div className="text-[10px] text-[var(--text-sub)] line-clamp-1">
                            {w.description}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 text-xs text-[var(--text-sub)] hover:text-[var(--text-main)] transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Standart holatga qaytarish</span>
                </button>

                <button
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-[var(--accent-color)] text-white hover:opacity-90 transition-opacity"
                >
                  Tayyor
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
