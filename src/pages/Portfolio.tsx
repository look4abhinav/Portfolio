import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Education } from "@/components/sections/Education";
import { Achievements } from "@/components/sections/Achievements";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";

export default function Portfolio() {
  return (
    <div className="min-h-screen scroll-smooth">
      <AnimatedBackground />
      <Navigation />
      
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Achievements />
        <Skills />
        <Contact />
      </main>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 Abhinav Srivastava. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
