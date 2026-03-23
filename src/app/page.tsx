import { HeroSection } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/About";
import { SkillsSection } from "@/components/sections/Skills";
import { ProjectsSection } from "@/components/sections/Projects";
import { ExperienceSection } from "@/components/sections/Experience";
import { ProcessSection } from "@/components/sections/Process";
import { ContactSection } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { Navigation } from "@/components/ui/Navigation";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex-1 w-full overflow-hidden relative pt-16 selection:bg-[#00f0ff]/30 selection:text-white">
        {/* Abstract animated background elements */}
        <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#00f0ff]/10 blur-[120px] rounded-full mix-blend-screen opacity-50 animate-[pulse_10s_ease-in-out_infinite]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#39ff14]/10 blur-[120px] rounded-full mix-blend-screen opacity-30 animate-[pulse_12s_ease-in-out_infinite_reverse]" />
          <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] bg-[#ff00ff]/10 blur-[100px] rounded-full mix-blend-screen opacity-20 animate-[pulse_8s_ease-in-out_infinite]" />
        </div>

        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
