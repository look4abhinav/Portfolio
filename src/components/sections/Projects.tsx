import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "License Plate Detection System",
    duration: "12/2022 - 01/2023",
    description:
      "A machine learning model based on YOLO algorithm which can identify and read license plates of vehicles in real time",
    technologies: ["Python", "YOLO", "Computer Vision", "Machine Learning", "OpenCV"],
    color: "cyan" as const,
  },
  {
    title: "DeClutter - File Organizer",
    duration: "06/2020 - 06/2020",
    description:
      "A Python project which helps to monitor, categorize and organize files automatically",
    technologies: ["Python", "File System", "Automation", "Watchdog"],
    color: "pink" as const,
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl xl:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Innovative solutions and technical implementations
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <GlassCard key={index} className="p-8 flex flex-col" glow={project.color}>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-foreground">
                    {project.title}
                  </h3>
                  <div className="glass-effect px-3 py-1 rounded-lg text-xs font-medium text-primary">
                    {project.duration}
                  </div>
                </div>

                <p className="text-foreground/90 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="glass-effect border-primary/30 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="glass-effect hover:bg-primary/20 text-primary border-primary"
                  asChild
                >
                  <a
                    href="https://github.com/look4abhinav"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code
                  </a>
                </Button>
              </div>
            </GlassCard>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="glass-effect hover:bg-primary/20 text-primary border-primary"
            asChild
          >
            <a
              href="https://github.com/look4abhinav"
              target="_blank"
              rel="noopener noreferrer"
            >
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
