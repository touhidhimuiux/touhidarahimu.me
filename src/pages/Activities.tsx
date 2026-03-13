import { motion } from "framer-motion";
import { Briefcase, Calendar, Sparkles, Users, Globe, Code2, PenTool, Megaphone, Heart } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import SectionHeading from "@/components/SectionHeading";
import Footer from "@/components/Footer";
import GlowIcon from "@/components/GlowIcon";

const experiences = [
  { title: "UI/UX Design Intern", company: "BuildSign | Digital Product Agency", type: "Internship · Remote", duration: "Oct 2025 – Present", description: "Working on creating engaging mobile and web designs, learning how digital products are shaped from concept to launch.", skills: ["Figma", "Wireframing & Prototyping", "User Research", "Interaction Design"], active: true, icon: PenTool },
  { title: "UI/UX Freelancing Trainee (Batch 02)", company: "Grameenphone Ltd", type: "Training", duration: "Jun 2025 – Present", description: "Selected participant in the UI/UX Freelancing Course. Learning user experience design, freelancing skills, and project-based design tasks under industry mentorship.", skills: ["Figma", "Adobe XD", "User Experience Design", "Freelancing Strategy", "Portfolio Building"], active: true, icon: Sparkles },
  { title: "Co-Founder", company: "TeksFusion", type: "Self-employed", duration: "Jul 2023 – Present", description: "Co-Founded TeksFusion, a technology insights and innovation platform. Focused on sharing trends in AI, Computer Vision, UI/UX, AR/VR, Data Science, and digital transformation.", skills: ["Tech Trend Analysis", "Content Creation", "Community Building"], active: true, icon: Globe },
  { title: "Medium Vlog Writer", company: "Medium", type: "Part-time", duration: "Jun 2024 – Aug 2024", description: "Developed insightful content on technology, programming tutorials, engineering principles, and emerging technologies for a broad technical audience.", skills: ["Programming Languages", "Technical Writing", "SEO Optimization"], active: false, icon: Code2 },
  { title: "Content Creator", company: "YouTube · Himu Talk's TeksFusion", type: "Self-employed", duration: "May 2024 – Aug 2024", description: "Created engaging tech content, researched trends, and collaborated with experts to inspire the tech community.", skills: ["Tech Trend Analysis", "Programming Knowledge", "Content Creation", "Community Engagement"], active: false, icon: Megaphone },
  { title: "Student – Web Development", company: "Creative IT Institute", type: "Part-time", duration: "May 2023 – Aug 2024", description: "Completed comprehensive web development training covering modern front-end technologies and tools.", skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Bootstrap", "Git", "GitHub"], active: false, icon: Code2 },
];

const clubRoles = [
  { title: "Sub-Executive", org: "NSU Computer and Engineering Club", duration: "Jun 2025 – Present", description: "Promoted to Sub-Executive Board (Sub-EB) 2025. Responsible for strategic planning, event coordination, and community engagement.", icon: Users },
  { title: "Event Organizer & Graphic Designer – NSU GameWave 2.0", org: "NSU Computer and Engineering Club", duration: "Aug 2025 – Present", description: "Designed complete assets for CODM Section including Banner, Leaflet, A3 Poster, Fixture Design, Rulebook, and Invitation Card.", icon: PenTool },
  { title: "Incharge of Media and Promotion Team", org: "NSU Computer and Engineering Club", duration: "Oct 2024 – Present", description: "Leading the Media & Promotion team, overseeing creative branding and audience engagement.", icon: Megaphone },
  { title: "Junior Graphic Designer – Media & Promotion Team", org: "NSU Computer and Engineering Club", duration: "Mar 2024 – Aug 2024", description: "Created promotional materials including banners, templates, and thumbnails for club events.", icon: PenTool },
];

const ambassadorRoles = [
  { title: "Host – Mastering Git and GitHub Workshop", org: "Microsoft Learn Student Ambassadors", duration: "Aug 2024 – Present", description: "Led comprehensive workshops on Git and GitHub, providing hands-on demonstrations and real-world examples.", icon: Code2 },
  { title: "Beta Microsoft Learn Student Ambassador", org: "Microsoft", duration: "Aug 2024 – Nov 2024", description: "Organized workshops and seminars, built community, and developed technical skills in Microsoft platforms.", icon: Globe },
  { title: "Alpha Microsoft Learn Student Ambassador", org: "Microsoft", duration: "Jul 2024 – Aug 2024", description: "Started the Microsoft Student Ambassador journey, promoting Microsoft technologies among peers.", icon: Sparkles },
  { title: "Open Source Contributor", org: "GirlScript Summer of Code", duration: "Oct 2024 – Present", description: "Contributing to open source projects with version control, code reviews, issue tracking, and technical documentation.", icon: Code2 },
];

const volunteering = [
  { title: "Community Volunteer – Web Development Seminar", org: "NSU Computer & Engineering Club", duration: "Jul 2024", description: "Volunteered at the 'Career in Web Development' seminar led by Anisul Islam.", icon: Heart },
  { title: "Microsoft Student Ambassador – Volunteer", org: "Microsoft", duration: "Jul 2024 – Present", description: "Facilitating learning, building community, and connecting with industry experts worldwide.", icon: Globe },
  { title: "Community Volunteer & Graphic Designer", org: "NSU Computer & Engineering Club", duration: "Oct 2024 – Present", description: "Volunteered at NSU CSE Gamewave Tournament and part of the Design and Promotion Team.", icon: Users },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 25 }, show: { opacity: 1, y: 0, transition: { duration: 0.45 } } };

const Activities = () => {
  return (
    <PageTransition>
      <section className="min-h-screen pt-20 sm:pt-24 pb-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">

          <SectionHeading title="Professional Experience" subtitle="Building real-world skills through internships, training, and entrepreneurship." />
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-2 gap-6 mb-24">
            {experiences.map((exp, i) => (
              <motion.div key={i} variants={item} whileHover={{ y: -4 }} className="group glass-card-hover rounded-2xl p-7 relative overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: "linear-gradient(135deg, hsl(145 65% 42% / 0.03), hsl(170 55% 38% / 0.06))" }} />
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <GlowIcon icon={exp.icon} size="md" variant={exp.active ? "gradient" : "glass"} delay={i * 0.05} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">{exp.title}</h3>
                        {exp.active && (
                          <span className="inline-flex items-center gap-1 text-[10px] bg-primary/15 text-primary px-2 py-0.5 rounded-full font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" /> Active
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{exp.company} · {exp.type}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-secondary font-medium mb-3">
                    <Calendar size={12} />{exp.duration}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.skills.map((s, j) => (
                      <span key={j} className="text-[11px] bg-primary/10 text-primary px-2.5 py-1 rounded-lg font-medium">{s}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <SectionHeading title="Club & Organization Roles" subtitle="Leading teams, organizing events, and shaping student communities." />
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-2 gap-5 mb-24">
            {clubRoles.map((role, i) => (
              <motion.div key={i} variants={item} whileHover={{ y: -4 }} className="group glass-card-hover rounded-2xl p-6">
                <div className="flex items-start gap-3 mb-3">
                  <GlowIcon icon={role.icon} size="sm" variant="glass" delay={i * 0.05} />
                  <div>
                    <span className="text-xs text-secondary font-medium">{role.duration}</span>
                    <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors mt-0.5">{role.title}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">{role.org}</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed pl-12">{role.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <SectionHeading title="Ambassador & Open Source" subtitle="Empowering communities and contributing to the global open source ecosystem." />
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-2 gap-5 mb-24">
            {ambassadorRoles.map((role, i) => (
              <motion.div key={i} variants={item} whileHover={{ y: -4 }} className="group glass-card-hover rounded-2xl p-6">
                <div className="flex items-start gap-3 mb-3">
                  <GlowIcon icon={role.icon} size="sm" variant="glass" delay={i * 0.05} />
                  <div>
                    <span className="text-xs text-secondary font-medium">{role.duration}</span>
                    <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors mt-0.5">{role.title}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">{role.org}</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed pl-12">{role.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <SectionHeading title="Volunteering" subtitle="Giving back to the community through service and support." />
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-3 gap-5">
            {volunteering.map((vol, i) => (
              <motion.div key={i} variants={item} whileHover={{ y: -4 }} className="group glass-card-hover rounded-2xl p-6">
                <GlowIcon icon={vol.icon} size="md" variant="gradient" className="mb-4" delay={i * 0.05} />
                <div className="flex items-center gap-1.5 mb-2">
                  <Calendar size={12} className="text-secondary" />
                  <span className="text-xs text-secondary font-medium">{vol.duration}</span>
                </div>
                <h3 className="text-sm font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{vol.title}</h3>
                <p className="text-xs text-muted-foreground mb-2">{vol.org}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{vol.description}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>
      <Footer />
    </PageTransition>
  );
};

export default Activities;
