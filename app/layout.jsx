import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Modern Developer Portfolio | Full-Stack & Creative Engineer",
  description:
    "Ultra-modern dark mode developer portfolio crafted with Next.js 14, Tailwind CSS, Glassmorphism, and Framer Motion.",
  keywords: ["Developer Portfolio", "Next.js 14", "Tailwind CSS", "Glassmorphism", "React", "Frontend", "Full-Stack"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#0d0f17] text-slate-100 min-h-screen relative selection:bg-cyan-500/30 selection:text-cyan-200">
        {/* Ambient Neon Background Lights (Fixed Glow Orbs blur-[120px]) */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[130px] animate-pulse-slow" />
          <div className="absolute top-[30%] right-[-10%] w-[550px] h-[550px] rounded-full bg-purple-600/10 blur-[140px] animate-pulse-slow" />
          <div className="absolute bottom-[10%] left-[20%] w-[600px] h-[600px] rounded-full bg-emerald-500/10 blur-[150px] animate-pulse-slow" />
        </div>

        {/* Sticky Top Navbar */}
        <Navbar />

        {/* Main Content Area */}
        <main className="relative z-10">{children}</main>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
