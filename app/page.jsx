import HeroSection from "@/components/HeroSection";
import TechStack from "@/components/TechStack";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 sm:gap-20">
      {/* 1. Hero Section: User status, headline, dynamic CTA buttons, stats */}
      <HeroSection />

      {/* 2. Tech Stack: Framer Motion staggered grid with icons and glass cards */}
      <TechStack />

      {/* 3. Projects Section: Interactive category filter with glowing glass cards */}
      <ProjectsSection />

      {/* 4. Contact & Socials: Freelance badge, socials & glassmorphic form */}
      <ContactSection />
    </div>
  );
}
