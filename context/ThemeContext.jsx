"use client";

import { createContext, useContext, useState, useEffect } from "react";

export const themes = [
  {
    id: "cyber-dark",
    name: "Cyber Dark",
    mode: "dark",
    color: "#06b6d4",
    accent: "from-cyan-400 to-blue-500",
    bgPreview: "#0d0f17",
    description: "Deep Navy & Neon Cyan",
  },
  {
    id: "midnight-nebula",
    name: "Midnight Nebula",
    mode: "dark",
    color: "#a855f7",
    accent: "from-purple-400 to-pink-500",
    bgPreview: "#090514",
    description: "Cosmic Obsidian & Violet",
  },
  {
    id: "emerald-matrix",
    name: "Emerald Matrix",
    mode: "dark",
    color: "#10b981",
    accent: "from-emerald-400 to-teal-500",
    bgPreview: "#06130d",
    description: "Deep Matrix & Mint Glow",
  },
  {
    id: "crimson-ember",
    name: "Crimson Ember",
    mode: "dark",
    color: "#f43f5e",
    accent: "from-rose-500 to-amber-500",
    bgPreview: "#14090b",
    description: "Volcanic Charcoal & Flame",
  },
  {
    id: "clean-frost",
    name: "Clean Frost",
    mode: "light",
    color: "#2563eb",
    accent: "from-blue-600 to-cyan-500",
    bgPreview: "#f8fafc",
    description: "Crisp White & Royal Blue",
  },
  {
    id: "sunset-pearl",
    name: "Sunset Pearl",
    mode: "light",
    color: "#e11d48",
    accent: "from-rose-600 to-orange-500",
    bgPreview: "#faf7f5",
    description: "Warm Pearl & Golden Coral",
  },
];

export const wallpapers = [
  {
    id: "neon-glow",
    name: "Ambient Neon",
    description: "Sekin aylanuvchi va porlovchi neon orblar",
    icon: "✨",
  },
  {
    id: "cyber-grid",
    name: "Cyber Grid",
    description: "Dasturchilar uchun zamonaviy 3D to'r",
    icon: "🌐",
  },
  {
    id: "starfield",
    name: "Cosmic Stars",
    description: "Yulduzli samoviy fazo teksturasi",
    icon: "🌌",
  },
  {
    id: "mesh-waves",
    name: "Mesh Waves",
    description: "Oqib turuvchi gradient to'lqinlar",
    icon: "🌊",
  },
  {
    id: "hex-circuit",
    name: "Hex Circuit",
    description: "Kelajak mikrosxemasi va oltiburchaklar",
    icon: "⬡",
  },
  {
    id: "aurora",
    name: "Minimal Aurora",
    description: "Mayin shimol yog'dusi chiziqlari",
    icon: "🌈",
  },
];

const ThemeContext = createContext({
  theme: themes[0],
  setTheme: () => {},
  wallpaper: wallpapers[0],
  setWallpaper: () => {},
  isLightMode: false,
});

export function ThemeProvider({ children }) {
  const [currentTheme, setCurrentTheme] = useState(themes[0]);
  const [currentWallpaper, setCurrentWallpaper] = useState(wallpapers[0]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Read saved theme from localStorage
    const savedThemeId = localStorage.getItem("portfolio_theme");
    const savedWallpaperId = localStorage.getItem("portfolio_wallpaper");

    if (savedThemeId) {
      const foundTheme = themes.find((t) => t.id === savedThemeId);
      if (foundTheme) setCurrentTheme(foundTheme);
    }

    if (savedWallpaperId) {
      const foundWallpaper = wallpapers.find((w) => w.id === savedWallpaperId);
      if (foundWallpaper) setCurrentWallpaper(foundWallpaper);
    }

    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Apply classes to root element
    const root = document.documentElement;

    // Remove all previous theme classes
    themes.forEach((t) => {
      root.classList.remove(`theme-${t.id}`);
    });
    root.classList.remove("light", "dark");

    // Add current theme class
    root.classList.add(`theme-${currentTheme.id}`);
    root.classList.add(currentTheme.mode);

    // Save to localStorage
    localStorage.setItem("portfolio_theme", currentTheme.id);
  }, [currentTheme, mounted]);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem("portfolio_wallpaper", currentWallpaper.id);
  }, [currentWallpaper, mounted]);

  const handleSetTheme = (themeId) => {
    const found = themes.find((t) => t.id === themeId);
    if (found) setCurrentTheme(found);
  };

  const handleSetWallpaper = (wallpaperId) => {
    const found = wallpapers.find((w) => w.id === wallpaperId);
    if (found) setCurrentWallpaper(found);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: currentTheme,
        setTheme: handleSetTheme,
        wallpaper: currentWallpaper,
        setWallpaper: handleSetWallpaper,
        isLightMode: currentTheme.mode === "light",
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
