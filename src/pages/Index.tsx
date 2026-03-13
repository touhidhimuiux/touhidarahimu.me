import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { ArrowRight, Sparkles, Code2, Brain, Globe, BookOpen, Smartphone,Trophy, Users, Cpu, Database, Palette, Terminal, Wifi, Zap, Github, Linkedin, Twitter, Facebook, Mail, Layers, Award, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import profilePhoto from "@/assets/profile-photo.png";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import GlowIcon from "@/components/GlowIcon";
import { FaBehance } from "react-icons/fa";
import Skills from "./Skills";
import Projects from "./Projects";
// Typing animation hook
const useTypingEffect = (words: string[], typingSpeed = 100, deletingSpeed = 60, pauseTime = 2000) => {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentWord.slice(0, displayText.length + 1));
        if (displayText === currentWord) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        setDisplayText(currentWord.slice(0, displayText.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return displayText;
};

// Animated counter component
const AnimatedCounter = ({ target, label, icon: Icon, suffix = "" }: { target: number; label: string; icon: React.ElementType; suffix?: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => setDisplay(v));
    return unsubscribe;
  }, [rounded]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onViewportEnter={() => animate(count, target, { duration: 2 })}
      className="text-center group"
    >
      <GlowIcon icon={Icon} size="lg" variant="gradient" className="mx-auto mb-4" />
      <div className="text-3xl md:text-4xl font-bold text-foreground">
        {display}{suffix}
      </div>
      <p className="text-sm text-muted-foreground mt-1">{label}</p>
    </motion.div>
  );
};

// Floating icon component
const FloatingIcon = ({ icon: Icon, x, y, delay, duration, size = 20 }: { icon: React.ElementType; x: string; y: string; delay: number; duration: number; size?: number }) => (
  <motion.div
    className="absolute pointer-events-none"
    style={{ left: x, top: y }}
    animate={{
      y: [0, -20, 0, 20, 0],
      x: [0, 10, -10, 5, 0],
      rotate: [0, 15, -15, 5, 0],
      scale: [1, 1.15, 0.9, 1.05, 1],
    }}
    transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
  >
    <div className="relative">
      <Icon size={size} className="text-primary/25" strokeWidth={1.5} />
      <div className="absolute inset-0 blur-sm">
        <Icon size={size} className="text-primary/10" strokeWidth={1.5} />
      </div>
    </div>
  </motion.div>
);

const featuredSkills = [
  { icon: Code2, title: "Web Development", desc: "React.js, JavaScript, HTML5, CSS3, Bootstrap, Tailwind" },
  { icon: Palette, title: "UI/UX Design", desc: "Figma, Adobe XD, Wireframing, Prototyping, User Research" },
  { icon: Cpu, title: "Software Engineering", desc: "Java OOP, Verilog, MIPS, Android Studio, Git" },
];

const quickHighlights = [
  { icon: Award, title: "14+ Certifications", desc: "Udemy, Microsoft, Grameenphone & more", link: "/education" },
  { icon: Trophy, title: "3+ Awards", desc: "TechFest, Design Competition, Math Olympiad", link: "/education" },
  { icon: Users, title: "8+ Events", desc: "Workshops, hackathons & tech festivals", link: "/events" },
];

const marqueeItems = [
  "React.js", "JavaScript", "Java", "Figma", "Adobe XD", "Verilog",
  "UI/UX Design", "Git & GitHub", "Android Studio", "Tailwind CSS", "Bootstrap", "Adobe Illustrator"
];

const Index = () => {
  const typingText = useTypingEffect([
    "AI Researcher & HCI Enthusiast",
  "UI/UX Designer & Innovator",
  "Frontend Web Developer",
  // "Open Source Contributor",
  ]);
  

  return (
    <PageTransition>
      {/* ===== HERO SECTION ===== */}
      <section className="min-h-screen flex items-center justify-center pt-16 px-4 relative overflow-hidden">
        {/* Decorative blurs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/6 rounded-full blur-3xl pointer-events-none" />

        {/* Floating animated icons */}
        <FloatingIcon icon={Code2} x="5%" y="15%" delay={0} duration={6} size={30} />
        <FloatingIcon icon={Brain} x="90%" y="20%" delay={1} duration={7} size={26} />
        <FloatingIcon icon={Cpu} x="15%" y="70%" delay={0.5} duration={8} size={24} />
        <FloatingIcon icon={Database} x="85%" y="65%" delay={1.5} duration={6.5} size={28} />
        <FloatingIcon icon={Terminal} x="8%" y="45%" delay={2} duration={7.5} size={22} />
        <FloatingIcon icon={Wifi} x="92%" y="42%" delay={0.8} duration={6} size={24} />
        <FloatingIcon icon={Palette} x="50%" y="8%" delay={1.2} duration={8} size={26} />
        <FloatingIcon icon={Zap} x="70%" y="80%" delay={0.3} duration={7} size={22} />
        <FloatingIcon icon={Globe} x="30%" y="85%" delay={1.8} duration={6.5} size={24} />
        <FloatingIcon icon={Layers} x="75%" y="12%" delay={2.2} duration={7.5} size={20} />

        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-medium text-primary">Available for opportunities</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 leading-tight"
            >
              Hi, I'm{" "}
              <span className="gradient-text text-glow"> Touhid Ara Himu</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-2xl text-foreground mb-2 h-9"
            >
              BSc in CSE | <span className="text-secondary">{typingText}</span>
              <span className="animate-pulse text-primary">|</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed text-base"
            >
             I am a UI/UX designer and AI/HCI researcher passionate about creating innovative digital experiences. I combine human-centered design, cutting-edge AI, and modern web technologies to build solutions that make a real impact. Dedicated to academic excellence, research, and open-source collaboration, I thrive on transforming ideas into intuitive, engaging, and meaningful products.
            </motion.p>

            {/* Social icons - premium glass style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-3 justify-center lg:justify-start"
            >
              {[
                { icon: Github, href: "https://github.com/touhidhimuiux", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/touhidhimuiux", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/touhidhimuiux", label: "Twitter" },
  // { icon: Facebook, href: "https://facebook.com/touhidhimuiux", label: "Facebook" },
  { icon: FaBehance, href: "https://behance.net/touhidhimuiux", label: "Behance" },
  { icon: Mail, href: "mailto:touhidarahimuiux@gmail.com", label: "Email" },
              ].map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + i * 0.1 }}
                  whileHover={{ scale: 1.15, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="relative w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow duration-300"
                >
                  <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #00d9a3 0%, #00c853 50%, #76ff03 100%)" }} />
                  <motion.div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%)" }}
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "200%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <social.icon size={20} className="relative z-10 text-primary-foreground" strokeWidth={2} />
                </motion.a>
              ))}
            </motion.div>

            {/* Social proof */}
            {/* <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="mt-10 flex items-center gap-6 justify-center lg:justify-start"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-muted border-2 border-background" />
                ))}
              </div>
              <p className="text-xs text-muted-foreground">
                Collaborated with <span className="text-foreground font-semibold">50+</span> researchers & developers
              </p>
            </motion.div> */}
          </div>

          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex-shrink-0 z-10"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-full border border-dashed border-primary/30"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-8 rounded-full border border-dashed border-secondary/20"
              />

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full shadow-lg shadow-primary/50" style={{ background: "linear-gradient(135deg, #00d9a3, #76ff03)" }} />
              </motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-8"
              >
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-secondary shadow-lg shadow-secondary/50" />
              </motion.div>

              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden card-shadow ring-4 ring-primary/20 relative" style={{ background: "hsl(120 33% 5%)" }}>
                <img
                  src={profilePhoto}
                  alt="Himu - Profile Photo"
                  className="w-full h-full object-cover object-[center_15%] scale-125"
                />
              </div>

              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -right-4 top-8 bg-card/80 backdrop-blur-xl border border-border/50 rounded-xl px-3 py-2 card-shadow"
              >
                <span className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-md flex items-center justify-center" style={{ background: "linear-gradient(135deg, #00d9a3, #76ff03)" }}>
                    <Sparkles size={10} className="text-primary-foreground" />
                  </span>
                  CSE Student
                </span>
              </motion.div>
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="absolute -left-4 bottom-12 bg-card/80 backdrop-blur-xl border border-border/50 rounded-xl px-3 py-2 card-shadow"
              >
                <span className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-md flex items-center justify-center" style={{ background: "linear-gradient(135deg, #00d9a3, #76ff03)" }}>
                    <Trophy size={10} className="text-primary-foreground" />
                  </span>
                  AI & HCI Researcher
                </span>
              </motion.div>

              <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20 -z-10 blur-2xl" />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
          >
            <div className="w-1 h-2 rounded-full bg-primary" />
          </motion.div>
        </motion.div>
      </section>

      {/* ===== TECH MARQUEE ===== */}
      <section className="py-8 border-y border-border overflow-hidden">
        <div className="flex animate-marquee">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="flex-shrink-0 mx-6 text-sm font-medium text-muted-foreground/50 whitespace-nowrap"
            >
              {item} <span className="text-primary/30 mx-4">◆</span>
            </span>
          ))}
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      {/* <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedCounter target={4} label="Publications" icon={BookOpen} suffix="+" />
            <AnimatedCounter target={15} label="Awards" icon={Trophy} suffix="+" />
            <AnimatedCounter target={10} label="Int'l Events" icon={Globe} suffix="+" />
            <AnimatedCounter target={500} label="GitHub Contributions" icon={Code2} suffix="+" />
          </div>
        </div>
      </section> */}
     

      {/* ===== WHAT I DO ===== */}
<section className="py-20 px-4">
  <div className="container mx-auto max-w-6xl">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-14"
    >
      <div className="inline-flex items-center gap-3 mb-4">
        <div className="h-[2px] w-8 rounded-full" style={{ background: "linear-gradient(90deg, transparent, #00c853)" }} />
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Expertise</span>
        <div className="h-[2px] w-8 rounded-full" style={{ background: "linear-gradient(90deg, #00c853, transparent)" }} />
      </div>
      <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-4">What I Do</h2>
      <p className="text-muted-foreground max-w-lg mx-auto text-base">
        Bridging the gap between academic research and real-world applications.
      </p>
    </motion.div>

    <div className="grid md:grid-cols-4 gap-6">
      {[
        {
          icon: Code2,
          title: "Web Development",
          desc: "React.js, JavaScript, HTML5, CSS3, Bootstrap, Tailwind",
        },
        {
          icon: Palette,
          title: "UI/UX Design",
          desc: "Figma, Adobe XD, Wireframing, Prototyping, User Research",
        },
        {
          icon: Smartphone,
          title: "Mobile App Design",
          desc: "iOS & Android UI, Figma Prototypes, Responsive Design, User-Centered Apps",
        },
        {
          icon: Brain,
          title: "AI & HCI Research",
          desc: "Human-Computer Interaction, AI Modeling, Usability Studies, Research Papers, Prototyping",
        },
      ].map((skill, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15 }}
          whileHover={{ y: -8 }}
          className="group relative bg-card/60 backdrop-blur-sm border border-border rounded-2xl p-8 transition-all duration-500 hover:border-primary/40 overflow-hidden"
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: "linear-gradient(135deg, hsl(145 65% 42% / 0.05), hsl(170 55% 38% / 0.08))" }} />
          <div className="relative z-10">
            <GlowIcon icon={skill.icon} size="lg" variant="gradient" className="mb-5" delay={i * 0.1} />
            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{skill.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{skill.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>
<Skills></Skills>
      {/* ===== QUICK HIGHLIGHTS ===== */}
      {/* <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-[2px] w-8 rounded-full" style={{ background: "linear-gradient(90deg, transparent, #00c853)" }} />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Achievements</span>
              <div className="h-[2px] w-8 rounded-full" style={{ background: "linear-gradient(90deg, #00c853, transparent)" }} />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-4">Highlights</h2>
            <p className="text-muted-foreground text-base">Key achievements at a glance.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {quickHighlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={item.link}
                  className="block group bg-card/60 backdrop-blur-sm border border-border rounded-2xl p-8 transition-all duration-500 hover:card-glow hover:-translate-y-2 hover:border-primary/40 relative overflow-hidden"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: "linear-gradient(135deg, hsl(145 65% 42% / 0.04), hsl(170 55% 38% / 0.06))" }} />
                  <div className="relative z-10">
                    <GlowIcon icon={item.icon} size="lg" variant="glass" className="mb-5 group-hover:border-primary/40 transition-colors" delay={i * 0.1} />
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{item.desc}</p>
                    <span className="inline-flex items-center gap-1.5 text-sm text-primary font-medium group-hover:gap-2.5 transition-all">
                      Explore <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
<Projects></Projects>
      {/* ===== CTA SECTION ===== */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl"
          >
            <div className="absolute inset-0 opacity-25" style={{ background: "linear-gradient(135deg, #00d9a3, #00c853, #76ff03)" }} />
            <div className="relative bg-card/80 backdrop-blur-sm border border-primary/20 rounded-3xl p-12 md:p-16 text-center">
              <GlowIcon icon={Rocket} size="xl" variant="pulse" className="mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Let's Build Something Amazing</h2>
              <p className="text-muted-foreground max-w-lg mx-auto mb-8 text-base leading-relaxed">
                I'm always open to new opportunities, collaborations, and exciting projects. Let's connect!
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 gradient-btn text-primary-foreground px-8 py-3.5 rounded-xl font-semibold text-base transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/30"
                >
                  <Mail size={18} />
                  Get in Touch
                </Link>
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 border border-border bg-card/50 text-foreground px-8 py-3.5 rounded-xl font-semibold text-base transition-all hover:bg-muted hover:scale-105 hover:border-primary/30"
                >
                  View Projects <ArrowRight size={16} />
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

export default Index;
