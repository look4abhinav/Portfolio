import { GlassCard } from "@/components/ui/GlassCard";
import { Progress } from "@/components/ui/progress";

const skillCategories = [
  {
    category: "Programming",
    skills: [
      { name: "Python", level: 95 },
    ],
    color: "cyan" as const,
  },
  {
    category: "Machine Learning & AI",
    skills: [
      { name: "Machine Learning", level: 90 },
      { name: "Computer Vision", level: 85 },
      { name: "TensorFlow", level: 85 },
      { name: "PyTorch", level: 80 },
    ],
    color: "purple" as const,
  },
  {
    category: "Data Tools",
    skills: [
      { name: "Pandas", level: 95 },
      { name: "Snowflake", level: 75 },
    ],
    color: "pink" as const,
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { name: "Amazon Web Services", level: 90 },
      { name: "Docker", level: 85 },
      { name: "Jenkins", level: 80 },
    ],
    color: "cyan" as const,
  },
  {
    category: "Databases",
    skills: [
      { name: "PostgreSQL", level: 85 },
    ],
    color: "purple" as const,
  },
  {
    category: "Version Control & Methodologies",
    skills: [
      { name: "Git", level: 90 },
      { name: "GitLab", level: 85 },
      { name: "Agile Methodologies", level: 90 },
      { name: "SAFe", level: 85 },
    ],
    color: "pink" as const,
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl xl:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills & Technologies</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Technical expertise and proficiency levels
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <GlassCard key={index} className="p-8" glow={category.color}>
              <h3 className="text-xl font-bold text-primary mb-6">
                {category.category}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
