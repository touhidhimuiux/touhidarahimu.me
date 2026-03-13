import { motion } from "framer-motion";
import { User, Briefcase, Code2, Globe, Palette, GraduationCap, Heart, Target, Lightbulb, ArrowRight, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import SectionHeading from "@/components/SectionHeading";
import Footer from "@/components/Footer";
import GlowIcon from "@/components/GlowIcon";

const aboutHighlights = [
  { icon: GraduationCap, label: "BSc CSE", detail: "North South University" },
  { icon: Briefcase, label: "UI/UX Intern", detail: "BuildSign Digital Agency" },
  { icon: Code2, label: "Co-Founder", detail: "TeksFusion" },
  { icon: Globe, label: "MLSA Beta", detail: "Microsoft Ambassador" },
  { icon: Palette, label: "Graphic Designer", detail: "NSU CEC" },
  { icon: User, label: "Sub-Executive", detail: "NSU CEC Board" },
];

const values = [
  { icon: Target, title: "Goal-Oriented", desc: "Focused on delivering impactful results through structured planning and execution in every project." },
  { icon: Lightbulb, title: "Continuous Learner", desc: "Always expanding my knowledge — from design systems to CPU architecture, I embrace diverse challenges." },
  { icon: Heart, title: "Community Builder", desc: "Passionate about mentoring peers, organizing events, and building inclusive tech communities." },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.4 } } };

const About = () => {
  return (
    <PageTransition>
      <section className="min-h-screen pt-20 sm:pt-24 pb-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <SectionHeading title="About Me" subtitle="Who I am, what I do, and what drives me forward every day." />

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 relative"
          >
            <div className="glass-card rounded-2xl p-8 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl" style={{ background: "linear-gradient(90deg, #00d9a3, #00c853, #76ff03)" }} />
              
              <div className="flex items-center gap-4 mb-5">
                <GlowIcon icon={User} size="lg" variant="gradient" />
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Touhid Ara Himu</h2>
                  <p className="text-sm text-secondary font-medium">BSc in Computer Science & Engineering · North South University</p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed text-base">
                  I'm a Computer Science & Engineering student passionate about building innovative solutions through UI/UX design, web development, and software engineering. As a Microsoft Learn Student Ambassador (Beta), Co-Founder of TeksFusion, and an active leader at the NSU Computer & Engineering Club, I'm committed to academic excellence, community building, and making a meaningful impact through technology.
                </p>
                <p className="text-muted-foreground leading-relaxed text-base">
Currently interning as a UI/UX Designer at BuildSign Digital Product Agency and enhancing advanced freelancing skills through Grameenphone's UI/UX Freelancing Program (Batch 02).  Additionally, I am a front-end developer and actively conduct research in AI and Human-Computer Interaction (HCI), combining technical expertise with creative design to deliver impactful digital experiences.                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-border/50 flex items-start gap-3">
                <Quote size={20} className="text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm italic text-foreground/80">
                  "Technology is best when it brings people together." I believe in building tech that creates real impact.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Role Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-24">
            {aboutHighlights.map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -6, scale: 1.03 }}
                className="text-center glass-card-hover rounded-2xl p-5 cursor-default"
              >
                <GlowIcon icon={h.icon} size="sm" variant="glass" className="mx-auto mb-3" delay={i * 0.05} />
                <p className="text-xs font-bold text-foreground">{h.label}</p>
                <p className="text-[10px] text-muted-foreground mt-0.5">{h.detail}</p>
              </motion.div>
            ))}
          </div>

          {/* Values */}
          <SectionHeading title="What Drives Me" subtitle="Core values that guide my work and growth." />
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 mb-20"
          >
            {values.map((v, i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ y: -6 }}
                className="group glass-card-hover rounded-2xl p-7 relative overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: "linear-gradient(135deg, hsl(145 65% 42% / 0.04), hsl(170 55% 38% / 0.06))" }} />
                <div className="relative z-10">
                  <GlowIcon icon={v.icon} size="lg" variant="gradient" className="mb-5" delay={i * 0.1} />
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center relative overflow-hidden rounded-2xl"
          >
            <div className="absolute inset-0 opacity-20" style={{ background: "linear-gradient(135deg, #00d9a3, #00c853, #76ff03)" }} />
            <div className="relative bg-card/80 backdrop-blur-sm border border-primary/20 rounded-2xl p-12">
              <GlowIcon icon={Code2} size="xl" variant="pulse" className="mx-auto mb-5" />
              <h3 className="text-2xl font-bold text-foreground mb-3">Explore My Work</h3>
              <p className="text-sm text-muted-foreground max-w-md mx-auto mb-8">
                Check out my projects, certifications, and professional experience.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/projects" className="inline-flex items-center gap-2 gradient-btn text-primary-foreground px-7 py-3 rounded-xl font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25">
                  View Projects <ArrowRight size={16} />
                </Link>
                <Link to="/education" className="inline-flex items-center gap-2 border border-border bg-card/50 text-foreground px-7 py-3 rounded-xl font-semibold transition-all hover:bg-muted hover:scale-105 hover:border-primary/30">
                  Education & Certs <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </PageTransition>
  );
};

export default About;
