// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { ArrowDown, Download } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import heroBg from "@/assets/hero-bg.jpg";

// const typewriterWords = ["Power BI", "SQL", "Tableau", "Python", "Excel"];

// export const HeroSection = () => {
//   const [currentWord, setCurrentWord] = useState(0);
//   const [displayText, setDisplayText] = useState("");
//   const [isDeleting, setIsDeleting] = useState(false);

//   useEffect(() => {
//     const word = typewriterWords[currentWord];
//     const timeout = setTimeout(
//       () => {
//         if (!isDeleting) {
//           if (displayText.length < word.length) {
//             setDisplayText(word.slice(0, displayText.length + 1));
//           } else {
//             setTimeout(() => setIsDeleting(true), 1500);
//           }
//         } else {
//           if (displayText.length > 0) {
//             setDisplayText(displayText.slice(0, -1));
//           } else {
//             setIsDeleting(false);
//             setCurrentWord((prev) => (prev + 1) % typewriterWords.length);
//           }
//         }
//       },
//       isDeleting ? 50 : 100
//     );
//     return () => clearTimeout(timeout);
//   }, [displayText, isDeleting, currentWord]);

//   const handleDownloadResume = () => {
//     const resumeUrl = "/RESUME_SAI TEJA ALLENKI_BI 4.pdf";
//     const link = document.createElement("a");
//     link.href = resumeUrl;
//     link.download = "RESUME_SAI TEJA ALLENKI_BI 4.pdf";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       {/* Background */}
//       <div className="absolute inset-0 z-0">
//         <img
//           src={heroBg}
//           alt=""
//           className="w-full h-full object-cover opacity-30"
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
//       </div>

//       {/* Content */}
//       <div className="container-luxury relative z-10 px-6 py-32">
//         <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
//           {/* Left - Text Content */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             <span className="inline-block text-gold font-medium tracking-widest uppercase text-sm mb-4">
//               Business Analytics Professional
//             </span>

//             <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
//               Sai Teja
//               <span className="block text-gradient-gold">Allenki</span>
//             </h1>

//             <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
//               Transforming Data into{" "}
//               <span className="text-gold font-semibold">{displayText}</span>
//               <span className="animate-pulse text-gold">|</span>
//             </p>

//             <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl">
//               Business Analytics Graduate delivering data analysis, reporting, and dashboard 
//               development across engagement, operations, and campaign performance domains. 
//               Skilled in transforming datasets into actionable insights and KPI dashboards.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4">
//               <Button variant="hero" asChild>
//                 <a href="#projects">
//                   View Projects
//                   <ArrowDown className="ml-2 h-5 w-5" />
//                 </a>
//               </Button>
//               <Button variant="hero-outline" onClick={handleDownloadResume}>
//                 <Download className="mr-2 h-5 w-5" />
//                 Download Resume
//               </Button>
//             </div>
//           </motion.div>

//           {/* Right - Profile Image Placeholder */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="relative flex justify-center lg:justify-end"
//           >
//             <div className="relative">
//               {/* Decorative rings */}
//               <div className="absolute inset-0 -m-8 border-2 border-gold/20 rounded-full animate-pulse" />
//               <div className="absolute inset-0 -m-16 border border-gold/10 rounded-full" />

//               {/* Profile container */}
//               <div className="w-64 h-64 md:w-80 md:h-80 rounded-full glass-card flex items-center justify-center gold-glow">
//                 <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-gold/20 to-gold-dark/20 flex items-center justify-center">
//                   <span className="font-display text-6xl md:text-7xl text-gold font-bold">ST</span>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Scroll indicator */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.5 }}
//         className="absolute bottom-8 left-1/2 -translate-x-1/2"
//       >
//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ repeat: Infinity, duration: 2 }}
//           className="w-6 h-10 border-2 border-gold/50 rounded-full flex justify-center pt-2"
//         >
//           <div className="w-1.5 h-3 bg-gold rounded-full" />
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };





































import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const typewriterWords = ["NICE Actimize", "Oracle Mantas", "SQL", "KYC/CDD", "Power BI"];

export const HeroSection = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = typewriterWords[currentWord];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < word.length) {
            setDisplayText(word.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentWord((prev) => (prev + 1) % typewriterWords.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWord]);

  const handleDownloadResume = () => {
    const resumeUrl = "/AWL-7271-25022026-0342-resume_amulya-sri-nenavath_aml.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "AWL-7271-25022026-0342-resume_amulya-sri-nenavath_aml.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      </div>

      {/* Content */}
      <div className="container-luxury relative z-10 px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block text-gold font-medium tracking-widest uppercase text-sm mb-4">
              AML Analyst
            </span>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Amulya Sri
              <span className="block text-gradient-gold">Nenavath</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
              Transforming Data into{" "}
              <span className="text-gold font-semibold">{displayText}</span>
              <span className="animate-pulse text-gold">|</span>
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl">
              AML Analyst with 3 years of experience in Transaction Monitoring, Financial Crime investigations, KYC/CDD/EDD, and
              Sanctions Screening within banking environments. Skilled in safeguarding financial systems through regulatory compliance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" asChild>
                <a href="#projects">
                  View Projects
                  <ArrowDown className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="hero-outline" onClick={handleDownloadResume}>
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>
          </motion.div>

          {/* Right - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute inset-0 -m-8 border-2 border-gold/20 rounded-full animate-pulse" />
              <div className="absolute inset-0 -m-16 border border-gold/10 rounded-full" />

              {/* Profile container with actual image */}
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full glass-card flex items-center justify-center gold-glow overflow-hidden">
                <img
                  src="/profileimage.jpg"
                  alt="Amulya Sri Nenavath"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-gold/50 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-gold rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};
