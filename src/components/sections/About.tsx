import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/badge";

const skills = [
  "Python",
  "Machine Learning",
  "Computer Vision",
  "Pandas",
  "Tensorflow",
  "Pytorch",
  "Amazon Web Services",
  "Snowflake",
  "PostgreSQL",
  "Gitlab",
  "Git",
  "Docker",
  "Jenkins",
  "Agile Methodologies",
  "SAFe",
];

export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl xl:text-5xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Passionate about leveraging data science to solve real-world problems
          </p>
        </div>

        <GlassCard className="p-8 xl:p-12" glow="purple">
          <div className="space-y-8">
            <div className="text-lg text-foreground/90 leading-relaxed space-y-4">
              <p>
                I am a Data Scientist with extensive experience in developing and deploying 
                machine learning models, managing cloud infrastructure, and implementing 
                predictive analytics solutions. My expertise spans across the entire data 
                science lifecycle, from data collection and preprocessing to model deployment 
                and monitoring.
              </p>
              <p>
                With a strong foundation in Python, machine learning frameworks, and cloud 
                technologies, I specialize in creating scalable solutions that drive business 
                value. My work involves developing predictive models, implementing computer 
                vision systems, and optimizing cloud infrastructure for data-intensive applications.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Technical Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="glass-effect px-4 py-2 text-sm font-medium border-primary/30 hover:border-primary hover:bg-primary/10 transition-all"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
