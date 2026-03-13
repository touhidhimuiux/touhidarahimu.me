import { motion } from "framer-motion";
import { GraduationCap, Trophy, Award, ExternalLink, Calendar, Star, Sparkles } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import SectionHeading from "@/components/SectionHeading";
import Footer from "@/components/Footer";

const education = [
  {
    degree: "Bachelor's degree, Computer Science & Engineering",
    institution: "North South University",
    duration: "Jan 2023 – Jan 2027",
    gpa: "",
    achievements: ["NSU Computer & Engineering Club"],
    skills: [],
    emoji: "🎓",
  },
  {
    degree: "Higher Secondary, Science",
    institution: "Uttara High School and College",
    duration: "Jun 2019 – Dec 2021",
    gpa: "GPA 5.00 / 5.00",
    achievements: [],
    skills: [],
    emoji: "📚",
  },
  {
    degree: "Secondary School Certificate",
    institution: "Kurmitola High School & College",
    duration: "Jan 2016 – Feb 2019",
    gpa: "GPA 5.00 / 5.00",
    achievements: [],
    skills: [],
    emoji: "🏫",
  },
];

const certifications = [
  {
    title: "Figma Design System Trainee",
    issuer: "Grameenphone Ltd",
    date: "Feb 2026",
    credentialId: "",
    skills: ["Figma", "Design Systems", "Auto Layout", "UI Components"],
    description: "Built structured and scalable Design Systems, created reusable UI Components & Variants, mastered Auto Layout for responsive design.",
  },
  {
    title: "AI Learner | Career with AI Certified",
    issuer: "Grameenphone Ltd",
    date: "Feb 2026",
    credentialId: "",
    skills: ["AI", "Healthcare AI", "Responsible AI"],
    description: "Explored AI career pathways, studied responsible AI principles, and strengthened foundation in AI-driven product thinking.",
  },
  {
    title: "Figma for Beginners – Web & Mobile App Design",
    issuer: "Udemy",
    date: "Oct 2025",
    credentialId: "UC-8d59ba19-1d29-42c3-b729-feafe5b040e9",
    skills: ["Figma", "Wireframing & Prototyping"],
    description: "",
  },
  {
    title: "Figma UI/UX Project",
    issuer: "Udemy",
    date: "Sep 2025",
    credentialId: "UC-21396531-d148-4cfa-837e-847523e0e848",
    skills: ["Figma"],
    description: "",
  },
  {
    title: "UI/UX Design Masterclass with Adobe XD",
    issuer: "Udemy",
    date: "Jul 2025",
    credentialId: "UC-957e0b81-e661-48b2-aec8-2bd9b94f385e",
    skills: ["Adobe XD", "UI/UX Design"],
    description: "",
  },
  {
    title: "Microsoft Office Specialist: PowerPoint Associate",
    issuer: "Certiport - A Pearson VUE Business",
    date: "May 2025",
    credentialId: "",
    skills: ["Microsoft Office", "Microsoft PowerPoint"],
    description: "",
  },
  {
    title: "Android App Development Workshop",
    issuer: "NSU Computer & Engineering Club",
    date: "Mar 2025",
    credentialId: "",
    skills: ["Android Studio", "Java", "Mobile Development"],
    description: "Completed a three-day workshop on Android App Development covering best practices and real-world applications.",
  },
  {
    title: "Event Organizer – TECH FEST 2025 & NSUCEC GAMEWAVE",
    issuer: "NSU Computer and Engineering Club",
    date: "Feb 2025",
    credentialId: "",
    skills: ["Event Management", "Teamwork", "Leadership"],
    description: "Contributed as an Organizer in TECH FEST 2025 and Team Member in NSUCEC GAMEWAVE.",
  },
  {
    title: "Certificate of Appreciation – NSUCEC GAMEWAVE",
    issuer: "NSU Computer and Engineering Club",
    date: "Nov 2024",
    credentialId: "",
    skills: ["Event Management"],
    description: "",
  },
  {
    title: "3rd Place – Independence Day Graphic Design Competition",
    issuer: "NSU Computer & Engineering Club",
    date: "Mar 2024",
    credentialId: "",
    skills: ["Graphic Design", "Graphic Arts"],
    description: "",
  },
  {
    title: "Microsoft Certified: Azure Data Engineer Associate",
    issuer: "Microsoft Student Ambassadors – Imagine Cup",
    date: "",
    credentialId: "https://learn.microsoft.com/en-gb/users/touhidarahimu-4973/",
    skills: ["Azure OpenAI Service"],
    description: "",
  },
  {
    title: "Math Olympiad Participant",
    issuer: "Jahangirnagar University",
    date: "Oct 2019",
    credentialId: "",
    skills: ["Problem Solving"],
    description: "",
  },
  {
    title: "CV Writing & Interview Course",
    issuer: "10 Minute School",
    date: "",
    credentialId: "",
    skills: [],
    description: "",
  },
  {
    title: "Email Writing Course",
    issuer: "10 Minute School",
    date: "",
    credentialId: "",
    skills: ["Email Writing"],
    description: "",
  },
];

const honorsAwards = [
  {
    title: "Event Organizer Award – NSU TechFest 2025",
    issuer: "NSU Computer and Engineering Club",
    date: "Jun 2025",
    description: "Received in recognition of my role as a key organizer in the successful planning and execution of NSU TechFest 2025.",
    emoji: "🏆",
  },
  {
    title: "3rd Place – Independence Day Graphic Design Competition",
    issuer: "NSU Computer & Engineering Club",
    date: "Mar 2024",
    description: "Won 3rd place in the Independence Day Graphic Design Competition organized by NSUCEC.",
    emoji: "🥉",
  },
  {
    title: "Math Olympiad Participant",
    issuer: "Jahangirnagar University",
    date: "Oct 2019",
    description: "Participated in Math Olympiad organized by Jahangirnagar University.",
    emoji: "🧮",
  },
];

const Education = () => {
  return (
    <PageTransition>
      <section className="min-h-screen pt-20 sm:pt-24 pb-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <SectionHeading
            title="Education"
            subtitle="My academic journey, certifications, and achievements that shaped my career."
          />

          {/* Education Cards - Mobile-first, no timeline on small screens */}
          <div className="space-y-6 mb-20 sm:mb-24">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group glass-card-hover rounded-2xl p-6 sm:p-8 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "linear-gradient(90deg, #00d9a3, #00c853, #76ff03)" }} />
                
                <div className="flex items-start gap-4">
                  <div className="text-3xl sm:text-4xl flex-shrink-0">{edu.emoji}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-2">
                      <span className="inline-flex items-center gap-1.5 text-xs text-secondary font-medium">
                        <Calendar size={12} />{edu.duration}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{edu.degree}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{edu.institution}</p>
                    {edu.gpa && (
                      <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-lg mb-3">
                        <Sparkles size={14} />{edu.gpa}
                      </div>
                    )}
                    {edu.achievements.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {edu.achievements.map((a, j) => (
                          <span key={j} className="inline-flex items-center gap-1 text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-lg font-medium">
                            <Trophy size={12} />{a}
                          </span>
                        ))}
                      </div>
                    )}
                    {edu.skills.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {edu.skills.map((s, j) => (
                          <span key={j} className="text-xs bg-muted/70 text-muted-foreground px-2.5 py-1 rounded-lg border border-border/50">{s}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Honors & Awards */}
          <SectionHeading title="Honors & Awards" subtitle="Recognitions that celebrate dedication and hard work." />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 mb-20 sm:mb-24">
            {honorsAwards.map((award, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="group glass-card-hover rounded-2xl p-6 sm:p-7"
              >
                <div className="text-3xl mb-4">{award.emoji}</div>
                <h3 className="text-sm sm:text-base font-bold text-foreground mb-1.5 group-hover:text-primary transition-colors">{award.title}</h3>
                <p className="text-xs text-muted-foreground mb-2">{award.issuer}</p>
                {award.date && (
                  <div className="flex items-center gap-1.5 mb-3">
                    <Calendar size={11} className="text-secondary" />
                    <span className="text-xs text-secondary font-medium">{award.date}</span>
                  </div>
                )}
                <p className="text-xs text-muted-foreground leading-relaxed">{award.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Licenses & Certifications */}
          <SectionHeading title="Licenses & Certifications" subtitle="Professional development and industry-recognized credentials." />
          
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-10 sm:mb-14"
          >
            {[
              { value: `${certifications.length}`, label: "Certifications", emoji: "📜" },
              { value: "5+", label: "Platforms", emoji: "🏛️" },
              { value: "20+", label: "Skills Gained", emoji: "⚡" },
            ].map((stat, i) => (
              <div key={i} className="text-center bg-card/40 border border-border/50 rounded-xl px-5 sm:px-6 py-3 sm:py-4 min-w-[100px]">
                <div className="text-lg sm:text-xl mb-1">{stat.emoji}</div>
                <div className="text-xl sm:text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-[10px] sm:text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 4) * 0.08 }}
                whileHover={{ y: -3 }}
                className="group glass-card-hover rounded-2xl p-5 sm:p-6"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl gradient-btn flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Award size={18} className="text-primary-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-bold text-foreground leading-snug mb-1 group-hover:text-primary transition-colors">{cert.title}</h3>
                    <p className="text-xs text-muted-foreground mb-1.5">{cert.issuer}</p>
                    {cert.date && (
                      <div className="flex items-center gap-1.5 mb-2">
                        <Calendar size={11} className="text-secondary" />
                        <span className="text-xs text-secondary font-medium">Issued {cert.date}</span>
                      </div>
                    )}
                    {cert.description && <p className="text-xs text-muted-foreground leading-relaxed mb-2">{cert.description}</p>}
                    {cert.credentialId && (
                      <a href={cert.credentialId.startsWith("http") ? cert.credentialId : "#"} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-primary hover:underline mb-2">
                        <ExternalLink size={11} />Show credential
                      </a>
                    )}
                    {cert.skills.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-1.5">
                        {cert.skills.map((s, j) => (
                          <span key={j} className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-md font-medium">{s}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </PageTransition>
  );
};

export default Education;
