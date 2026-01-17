import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/badge";

const achievements = [
  {
    title: "Spot Award - Regional Production Environment",
    date: "07/2023",
    description: "Recognized for taking ownership and developing regional production environment",
    icon: "🏆",
  },
  {
    title: "Spot Award - Training Initiative",
    date: "04/2023",
    description: "Acknowledged for driving initiative to train team members in Python and Machine Learning",
    icon: "🎓",
  },
  {
    title: "TCS Digital Capability Assessment",
    date: "05/2021",
    description: "Cleared TCS Digital Capability Assessment and promoted to Digital cadre",
    icon: "⚡",
  },
  {
    title: "Best Team Award",
    date: "09/2020",
    description: "Received Best Team Award for outstanding contribution to the team",
    icon: "🌟",
  },
];

const certifications = [
  {
    title: "AWS Certified Developer - Associate",
    issuer: "Amazon Web Services",
    date: "09/2023 - 09/2026",
    status: "Active",
  },
  {
    title: "Microsoft Technology Associate: Introduction to Programming Using Python",
    issuer: "Microsoft",
    date: "01/2022",
    status: "Completed",
  },
  {
    title: "Machine Learning A-Z: Hands-on Python",
    issuer: "Udemy",
    date: "07/2021",
    status: "Completed",
  },
  {
    title: "Python A-Z: Python for Data Science",
    issuer: "Udemy",
    date: "04/2020",
    status: "Completed",
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl xl:text-5xl font-bold mb-4">
            <span className="gradient-text">Achievements & Certifications</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Recognition and professional development
          </p>
        </div>

        <div className="space-y-12">
          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">Achievements</h3>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <GlassCard key={index} className="p-6" glow="cyan">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{achievement.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h4 className="text-lg font-semibold text-foreground">
                          {achievement.title}
                        </h4>
                        <span className="text-xs text-primary font-medium whitespace-nowrap">
                          {achievement.date}
                        </span>
                      </div>
                      <p className="text-sm text-foreground/80">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">Certifications</h3>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <GlassCard key={index} className="p-6" glow="purple">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <h4 className="text-lg font-semibold text-foreground">
                        {cert.title}
                      </h4>
                      <Badge
                        variant="outline"
                        className={
                          cert.status === "Active"
                            ? "border-primary text-primary"
                            : "border-muted-foreground text-muted-foreground"
                        }
                      >
                        {cert.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-foreground/80">{cert.issuer}</p>
                    <p className="text-xs text-muted-foreground">{cert.date}</p>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
