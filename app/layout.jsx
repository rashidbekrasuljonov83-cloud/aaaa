import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DynamicBackground from "@/components/DynamicBackground";
import ThemeCustomizer from "@/components/ThemeCustomizer";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata = {
  title: "Modern Developer Portfolio | Full-Stack & Creative Engineer",
  description:
    "Ultra-modern developer portfolio crafted with Next.js 14, Tailwind CSS, Glassmorphism, 6 Light/Dark Themes and Dynamic Wallpapers.",
  keywords: ["Developer Portfolio", "Next.js 14", "Tailwind CSS", "Glassmorphism", "Theme Customizer", "Light Dark"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen relative text-[var(--text-main)] bg-[var(--bg-color)] transition-colors duration-400">
        <ThemeProvider>
          {/* Dynamic Wallpaper & Ambient Neon Lights */}
          <DynamicBackground />

          {/* Sticky Top Navbar */}
          <Navbar />

          {/* Main Content Area */}
          <main className="relative z-10">{children}</main>

          {/* Global Footer */}
          <Footer />

          {/* Floating Theme & Wallpaper Customizer Panel */}
          <ThemeCustomizer />
        </ThemeProvider>
      </body>
    </html>
  );
}
