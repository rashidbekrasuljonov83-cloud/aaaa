"use client";

import { useTheme } from "@/context/ThemeContext";

export default function DynamicBackground() {
  const { wallpaper } = useTheme();

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 transition-all duration-500">
      {/* 1. Ambient Dynamic Neon Glowing Blobs */}
      <div
        className="absolute top-[-10%] left-[-10%] w-[550px] h-[550px] rounded-full blur-[140px] animate-pulse-slow transition-all duration-700"
        style={{ backgroundColor: "var(--blob-1)" }}
      />
      <div
        className="absolute top-[35%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[150px] animate-pulse-slow transition-all duration-700"
        style={{ backgroundColor: "var(--blob-2)" }}
      />
      <div
        className="absolute bottom-[5%] left-[20%] w-[650px] h-[650px] rounded-full blur-[160px] animate-pulse-slow transition-all duration-700"
        style={{ backgroundColor: "var(--blob-3)" }}
      />

      {/* 2. Wallpaper Textures / Pattern Layers */}
      {wallpaper.id === "cyber-grid" && (
        <div className="absolute inset-0 pattern-cyber-grid opacity-70 transition-opacity duration-500" />
      )}

      {wallpaper.id === "starfield" && (
        <div className="absolute inset-0 pattern-starfield opacity-80 animate-pulse-slow transition-opacity duration-500" />
      )}

      {wallpaper.id === "mesh-waves" && (
        <div className="absolute inset-0 pattern-mesh-waves opacity-85 transition-opacity duration-500" />
      )}

      {wallpaper.id === "hex-circuit" && (
        <div className="absolute inset-0 pattern-hex-circuit opacity-75 transition-opacity duration-500" />
      )}

      {wallpaper.id === "aurora" && (
        <div className="absolute inset-0 pattern-aurora opacity-90 transition-opacity duration-500" />
      )}

      {/* Subtle vignette border */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-color)] via-transparent to-transparent opacity-60" />
    </div>
  );
}
