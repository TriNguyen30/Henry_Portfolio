import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { StackSection } from "@/components/sections/stack-section";
import { ProjectSection } from "@/components/sections/project-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="min-h-screen text-zinc-900 antialiased selection:bg-zinc-200 selection:text-zinc-900 pb-24">
      <main className="mx-auto max-w-7xl px-4 sm:px-6 pt-6 sm:pt-10 space-y-4 sm:space-y-6">
        {/* Home / Hero Section */}
        <div id="home" className="scroll-mt-6">
          <HeroSection />
        </div>

        {/* About Section (Directly Below Home) */}
        <div id="about" className="scroll-mt-6">
          <AboutSection />
        </div>

        {/* Stack Section */}
        <div id="stack" className="scroll-mt-6">
          <StackSection />
        </div>

        {/* Projects Section */}
        <div id="projects" className="scroll-mt-6">
          <ProjectSection />
        </div>

        {/* Experience Section */}
        <div id="experience" className="scroll-mt-6">
          <ExperienceSection />
        </div>

        {/* Contact Section */}
        <div id="contact" className="scroll-mt-6">
          <ContactSection />
        </div>

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}
