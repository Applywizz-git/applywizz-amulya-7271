import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Enterprise AML Transaction Monitoring Optimization",
    description: "Evaluated historical alert volumes and recalibrated monitoring thresholds to increase alert precision and reduce false positives.",
    bullets: [
      "Evaluated historical alert volumes and typology triggers through SQL analysis and NICE Actimize outputs, reducing false positives by 32%.",
      "Refined structuring and rapid-funds-movement detection scenarios within logic aligned to FATF and BSA guidance.",
      "Built compliance performance dashboards in Power BI integrating SAR filings, alert ratios, and timelines for AML leadership."
    ],
    tech: ["SQL", "NICE Actimize", "Power BI", "FATF/BSA Guidelines"],
    color: "from-gold/20 to-gold-dark/10",
    image: "/project1.png"
  },
  {
    title: "KYC & EDD Risk Assessment Automation Framework",
    description: "Engineered automated customer risk classification workflows using SQL and CDD/EDD risk indicators to streamline compliance reviews.",
    bullets: [
      "Engineered automated workflows using geography, industry exposure, and PEP status, reducing manual onboarding review effort by 40%.",
      "Consolidated OFAC, World-Check, and adverse media outputs into unified compliance views, accelerating escalations.",
      "Standardized investigative reporting formats by aligning EDD documentation with FinCEN and BSA expectations."
    ],
    tech: ["SQL", "World-Check", "OFAC Screening", "Beneficial Ownership"],
    color: "from-accent/20 to-gold/10",
    image: "/project2.png"
  },
  {
    title: "Financial Crime Analytics Investigation Platform",
    description: "Developed transaction anomaly detection queries to flag structuring behavior and cross-border fund spikes.",
    bullets: [
      "Developed transaction anomaly detection queries using SQL improving early financial crime signal identification.",
      "Introduced risk-based case prioritization models combining alerts and historical SAR indicators, reducing backlog by 25%.",
      "Implemented data validation and reconciliation checks across transaction monitoring feeds, improving data integrity."
    ],
    tech: ["SQL", "Data Validation", "Anomaly Detection", "Risk Modeling"],
    color: "from-gold-light/20 to-secondary/30",
    image: "/project3.png"
  }
];

export const ProjectsSection = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const project = projects[currentProject];

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-medium tracking-widest uppercase text-sm">
            Featured Work
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4">
            My <span className="text-gradient-gold">Projects</span>
          </h2>
        </motion.div>

        {/* Project Card */}
        <motion.div
          key={currentProject}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="glass-card overflow-hidden"
        >
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left - Visual */}
            <div className="p-8 md:p-12 flex items-center justify-center min-h-[300px] lg:min-h-[500px]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* Right - Content */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                {project.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed mb-6">
                {project.description}
              </p>

              <ul className="space-y-3 mb-8">
                {project.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium bg-gold/20 text-gold rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between pt-6 border-t border-border">
                <div className="flex items-center gap-2">
                  {projects.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentProject(i)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentProject ? "bg-gold w-6" : "bg-muted-foreground/30"
                        }`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <Button
                    variant="glass"
                    size="icon"
                    onClick={prevProject}
                    className="rounded-full"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="glass"
                    size="icon"
                    onClick={nextProject}
                    className="rounded-full"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};