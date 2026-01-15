import { GlassCard } from "@/components/ui/GlassCard";

const education = [
  {
    degree: "B.Tech - C.S.E (Cloud Computing)",
    institution: "Graphic Era University, Dehradun",
    duration: "07/2015 - 05/2019",
    grade: "CGPA: 8.69",
    color: "purple" as const,
  },
  {
    degree: "Senior Secondary School",
    institution: "Fatima Senior Secondary School, Gonda",
    duration: "2014 - 2015",
    grade: "Percentage: 85.8%",
    color: "cyan" as const,
  },
];

export function Education() {
  return (
    <section id="education" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl xl:text-5xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Academic background and qualifications
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <GlassCard key={index} className="p-8" glow={edu.color}>
              <div className="space-y-4">
                <div className="glass-effect px-4 py-2 rounded-lg inline-block">
                  <span className="text-sm font-medium text-primary">
                    {edu.duration}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-foreground">
                  {edu.degree}
                </h3>
                
                <p className="text-lg text-foreground/80">
                  {edu.institution}
                </p>
                
                <div className="pt-2">
                  <span className="text-xl font-semibold text-primary">
                    {edu.grade}
                  </span>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
