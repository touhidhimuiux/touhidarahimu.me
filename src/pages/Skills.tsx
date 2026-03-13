import { motion } from "framer-motion";
import { Code2, Palette, Users, Cpu, Globe, Layers, PenTool, Terminal, Smartphone, Cloud } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import SectionHeading from "@/components/SectionHeading";
import Footer from "@/components/Footer";
import GlowIcon from "@/components/GlowIcon";

const skillCategories = [
  { title: "Programming Languages", icon: Code2, skills: ["Java", "C", "C++", "JavaScript", "HTML5", "CSS3", "Python"] },
  { title: "Web Development", icon: Globe, skills: ["React.js", "Vite", "Bootstrap", "Tailwind CSS", "ES6/ECMAScript", "Firebase", "API Integration", "Git", "GitHub"] },
  { title: "UI/UX Design", icon: Palette, skills: ["Figma", "Adobe XD", "Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign",  "Canva", "Wireframing & Prototyping", "User Research", "Interaction Design", "Information Architecture", "User Flow Design", "Usability Testing"] },
  { title: "Mobile Development", icon: Smartphone, skills: ["Android Studio", "Flutter","Mobile Applications", "Mobile Interface Design"] },
  // { title: "Microsoft & Cloud", icon: Layers, skills: ["Microsoft Office", "Microsoft PowerPoint", "Microsoft Teams", "Microsoft Forms", "Azure OpenAI Service"] },
  {
    title: "Microsoft Workspace",
    icon: Layers,
    skills: [
      "Microsoft Office (Word, Excel, PowerPoint)",
      "Microsoft Teams",
      "Microsoft Forms",
    
    ],
  },
  {
    title: "Google Workspace",
    icon: Cloud,
    skills: [
      "Google Docs",
      "Google Sheets",
      "Google Slides",
      "Google Forms",
      "Google Drive",
    ],
  },
 {
  title: "AI & Productivity Tools",
  icon: Cpu,
  skills: [
    "ChatGPT / OpenAI Tools",
    "Notion AI / Copilot",
    "Grammarly AI Writing Assistant",
    "AI-Powered Code Tools (GitHub Copilot)",
    "Gemini AI",
    "Groke AI",
    "Claude AI",
    "Windsurf AI",
    "Lovable AI",
  ],
},
{
  title: "Research & Analytical Skills",
  icon: Layers, // you can change to a research-related icon if you like
  skills: [
    "Academic Research Techniques",
    "Online Literature Search (Google Scholar, ResearchGate)",
    "Data Collection & Analysis",
    "Reference Management (Zotero, Mendeley)",
    "Critical Thinking & Problem Solving",
    "Survey & Form Design",
  ],
},
  // { title: "CS Fundamentals", icon: Cpu, skills: ["DSA", "Digital Logic", "Java OOP", "Abstraction", "Inheritance", "File I/O", "Problem Solving"] },
  { title: "Tools & IDEs", icon: Terminal, skills: ["VS Code", "NetBeans", "WSL", "Version Control Tools", "Code Reviews & Issue Tracking"] },
  { title: "Creative & Content", icon: PenTool, skills: ["Graphic Design", "Graphic Arts", "Banner Designing", "Image Design", "Thumbnail Design", "Content Creation", "Technical Writing"] },
  { title: "Soft Skills & Leadership", icon: Users, skills: ["Event Management", "Event Planning", "Public Speaking", "Team Leadership", "Team Collaboration", "Mentoring", "Community Building", "Freelancing Strategy", "Portfolio Building"] },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 25 }, show: { opacity: 1, y: 0, transition: { duration: 0.45 } } };

const Skills = () => {
  const totalSkills = skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0);

  return (
    <PageTransition>
      <section className="min-h-screen pt-20 sm:pt-24 pb-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <SectionHeading
            title="Skills & Expertise"
            subtitle="A comprehensive overview of my technical and professional skills across multiple domains."
          />

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6 mb-14"
          >
            {[
              { value: skillCategories.length, label: "Categories", icon: Layers },
              { value: `${totalSkills}+`, label: "Skills", icon: Code2 },
              { value: "5+", label: "Design Tools", icon: Palette },
              { value: "6+", label: "Languages", icon: Terminal },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center glass-card rounded-xl px-6 py-4 min-w-[120px]"
              >
                <GlowIcon icon={stat.icon} size="sm" variant="glass" className="mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skillCategories.map((cat, i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ y: -4 }}
                className="group glass-card-hover rounded-2xl p-6 relative overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: "linear-gradient(135deg, hsl(145 65% 42% / 0.03), hsl(170 55% 38% / 0.06))" }} />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-5">
                    <GlowIcon icon={cat.icon} size="md" variant="gradient" delay={i * 0.05} />
                    <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">{cat.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, j) => (
                      <motion.span
                        key={j}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: j * 0.02 }}
                        className="text-xs bg-muted/70 text-foreground/80 px-3 py-1.5 rounded-lg font-medium border border-border/50 transition-all duration-300 hover:border-primary/40 hover:text-primary hover:bg-primary/5 cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* <Footer /> */}
    </PageTransition>
  );
};

export default Skills;

