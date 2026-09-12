"use client";

import { Code2, Sparkles } from "lucide-react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0d0f17] overflow-hidden">
      {/* Ambient Neon Blobs */}
      <div className="absolute top-1/3 left-1/3 w-[450px] h-[450px] bg-cyan-500/15 rounded-full blur-[130px] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/3 w-[450px] h-[450px] bg-purple-600/15 rounded-full blur-[140px] animate-pulse-slow pointer-events-none" />

      {/* Glass Card Container */}
      <div className="relative z-10 flex flex-col items-center p-10 rounded-3xl glass-panel border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_35px_rgba(6,182,212,0.2)] max-w-sm w-full mx-4 text-center">
        {/* Animated Glowing Spinner with Center Icon */}
        <div className="relative flex items-center justify-center w-24 h-24 mb-6">
          {/* Outer spinning gradient ring */}
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-cyan-400 border-r-purple-500 animate-spin" />
          {/* Inner reverse spinning ring */}
          <div className="absolute inset-2 rounded-full border-2 border-transparent border-b-emerald-400 border-l-cyan-300 animate-spin [animation-duration:1.5s] [animation-direction:reverse]" />

          {/* Center Glass Sphere */}
          <div className="w-14 h-14 rounded-2xl bg-white/[0.05] backdrop-blur-md border border-white/15 flex items-center justify-center shadow-inner">
            <Code2 className="w-7 h-7 text-cyan-400 animate-pulse" />
          </div>
        </div>

        {/* Brand & Loading Label */}
        <h3 className="text-xl font-bold text-white tracking-tight mb-2 flex items-center gap-1.5">
          Rashidbek<span className="text-cyan-400">.Portfolio</span>
          <Sparkles className="w-4 h-4 text-cyan-300 animate-bounce" />
        </h3>

        <p className="text-xs text-slate-400 font-medium tracking-wide mb-6">
          Interfeys yuklanmoqda, iltimos kuting...
        </p>

        {/* Dynamic Progress Bar */}
        <div className="w-full bg-white/[0.06] rounded-full h-1.5 overflow-hidden border border-white/10">
          <div className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full animate-pulse w-3/4 shadow-[0_0_12px_rgba(6,182,212,0.8)]" />
        </div>
      </div>
    </div>
  );
}
