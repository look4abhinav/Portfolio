import { GlassCard } from "@/components/ui/GlassCard";

const experiences = [
  {
    company: "EXL Services Limited",
    position: "Legal Data Scientist",
    duration: "08/2024 - Present",
    location: "Gurugram, Haryana",
    responsibilities: [
      "Manage the entire machine learning life cycle using MLOps best practices, deploying, monitoring, and refreshing models via MLflow and Airflow",
      "Develop and implement advanced LLM Agents and GenAI solutions alongside traditional predictive models to address diverse business use cases",
      "Build predictive algorithms to identify customer churn using logistic regression, decision trees, and random forests",
      "Perform extensive data engineering and cleaning using Python (Pandas) to execute feature engineering on high-dimensional datasets",
    ],
    color: "cyan" as const,
  },
  {
    company: "Siemens Technology and Services Limited",
    position: "Instrumentation & Control Monitor & Advisors",
    duration: "07/2022 - Present",
    location: "Gurugram, Haryana",
    responsibilities: [
      "Manage entire life cycle of projects, including planning, development, testing, deployment and maintenance",
      "Develop and implement predictive models to identify customer churn using logistic regression, decision trees and random forests",
      "Perform feature engineering on high dimensional datasets to improve accuracy of predictive models",
      "Develop and manage AWS resources like Lambda, ECS, S3, API Gateways using AWS CloudFormation and eliminate unused resources",
    ],
    color: "cyan" as const,
  },
  {
    company: "Tata Consultancy Services Limited",
    position: "Global Asset Management System",
    duration: "06/2019 - 07/2022",
    location: "Lucknow, Uttar Pradesh",
    responsibilities: [
      "Deploy microservices based architectures using Docker containers, python and pandas on virtual machines",
      "Create scripts and utilize Python to automate deployment of applications across cloud platforms, reducing deployment time by 80%",
      "Collaborate with developers to ensure smooth transition from development to production environment",
    ],
    color: "purple" as const,
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl xl:text-5xl font-bold mb-4">
            <span className="gradient-text">Work Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Professional journey and key achievements
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <GlassCard key={index} className="p-8" glow={exp.color}>
              <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {exp.position}
                  </h3>
                  <p className="text-xl text-primary font-semibold mb-1">
                    {exp.company}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {exp.location}
                  </p>
                </div>
                <div className="glass-effect px-4 py-2 rounded-lg text-sm font-medium text-primary whitespace-nowrap">
                  {exp.duration}
                </div>
              </div>

              <ul className="space-y-3">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-primary mt-1.5 flex-shrink-0">▹</span>
                    <span className="text-foreground/90">{resp}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
