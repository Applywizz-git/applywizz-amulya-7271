import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "AML Analyst",
    company: "Capital One",
    location: "Plano, TX",
    period: "Sep 2024 - Present",
    bullets: [
      "Analyzed transaction monitoring alerts in NICE Actimize and Oracle Mantas to uncover structuring, layering, and mule account patterns across wire and ACH activity, leading to escalation of 18% of reviewed cases for advanced investigation.",
      "Conduct Enhanced Due Diligence reviews using KYC files, beneficial ownership data, and adverse media from Refinitiv World-Check and Dow Jones Risk & Compliance, strengthening high-risk customer classification accuracy.",
      "Investigated suspicious transaction activity by linking behavioral deviations with onboarding and historical account data in AML case management systems, reducing false-positive alert closures by 22%.",
      "Prepared regulatory-compliant Suspicious Activity Reports under BSA and FinCEN guidelines, ensuring detailed investigative narratives supporting timely regulatory submissions.",
      "Performed OFAC and global sanctions screening through LexisNexis Bridger Insight, validating true matches and mitigating exposure to sanctioned individuals and entities.",
      "Collaborated with Fraud Operations to examine account takeover incidents and mule account networks, enhancing cross-channel financial crime detection coverage."
    ]
  },
  {
    title: "Risk & Compliance Analyst",
    company: "Wipro",
    location: "Bangalore, India",
    period: "Feb 2022 - Jun 2023",
    bullets: [
      "Executed AML and KYC regulatory control reviews by examining onboarding records and compliance documentation, uncovering policy deviations that drove an 18% improvement in adherence across assessed accounts.",
      "Performed risk classification of customers through CDD and EDD evaluations, leveraging beneficial ownership and adverse media data to enhance high-risk identification accuracy by 21%.",
      "Validated onboarding submissions against Customer Identification and Due Diligence standards, enabling faster compliant account activation while reducing rework volumes by 17%.",
      "Assessed transactional exposure by reviewing wire and ACH payment activity for structuring and jurisdictional risk indicators, escalating suspicious flows into AML case management queues.",
      "Supported financial crime case reviews through analysis of transaction histories and customer risk ratings, strengthening investigative decision quality across regional compliance teams.",
      "Compiled audit evidence including sanctions screening outputs and KYC documentation, contributing to 100% closure of assigned compliance observations within review timelines."
    ]
  }
];


export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding bg-charcoal-light/30" ref={ref}>
      <div className="container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-medium tracking-widest uppercase text-sm">
            Career Journey
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4">
            Professional <span className="text-gradient-gold">Experience</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold via-gold/50 to-transparent transform md:-translate-x-1/2" />

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-gold rounded-full transform -translate-x-1/2 mt-2 z-10 animate-pulse-gold" />

                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? "md:pr-12 md:text-left" : "md:pl-12"} pl-8 md:pl-0`}>
                  <div className="glass-card p-6 md:p-8 hover:gold-glow transition-all duration-300">
                    <div className={`flex items-center gap-3 mb-3 text-gold text-sm ${index % 2 === 0 ? "md:justify-left" : ""}`}>
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>

                    <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-2">
                      {exp.title}
                    </h3>

                    <div className={`flex items-center gap-2 text-muted-foreground mb-4 ${index % 2 === 0 ? "md:justify-left" : ""}`}>
                      <span className="text-gold font-medium">{exp.company}</span>
                      <span>•</span>
                      <MapPin className="w-3 h-3" />
                      <span>{exp.location}</span>
                    </div>

                    <ul className={`space-y-2 text-muted-foreground text-sm ${index % 2 === 0 ? "md:text-left" : ""}`}>
                      {exp.bullets.slice(0, 3).map((bullet, i) => (
                        <li key={i} className="leading-relaxed">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
