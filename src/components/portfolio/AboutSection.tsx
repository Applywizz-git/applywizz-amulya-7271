import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, FolderKanban, Award } from "lucide-react";

const stats = [
  { icon: FolderKanban, value: "3+", label: "Projects" },
  { icon: Briefcase, value: "3+", label: "Years Experience" },
  { icon: Award, value: "100%", label: "Commitment" },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-medium tracking-widest uppercase text-sm">
            Get to Know Me
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4">
            About <span className="text-gradient-gold">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card p-8 md:p-10">
              <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                I am an AML Analyst with 3 years of experience in Transaction Monitoring, Financial Crime investigations, KYC/CDD/EDD, and Sanctions Screening within banking environments. Strong knowledge of BSA, FinCEN, OFAC, and FATF regulations with hands-on expertise in SAR preparation and compliance reviews.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Proficient in SQL and Excel for transaction analysis, risk assessment, and regulatory reporting. Skilled in analyzing transaction monitoring alerts to uncover structuring, layering, and mule account patterns, and preparing regulatory-compliant Suspicious Activity Reports to ensure detailed investigative narratives supporting timely regulatory submissions.
              </p>
            </div>
          </motion.div>

          {/* Right - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="glass-card p-6 text-center group hover:gold-glow transition-all duration-300"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <stat.icon className="w-7 h-7 text-gold" />
                </div>
                <div className="font-display text-3xl md:text-4xl font-bold text-gradient-gold mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm uppercase tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
