'use client'

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Calendar, Layers, Eye, Globe, Smartphone, Cpu, Palette, Sparkles, ArrowUpRight } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import SectionHeading from "@/components/SectionHeading";
import Footer from "@/components/Footer";

type Category = "All" | "Website" | "Mobile App" | "AI / Hardware" | "Design";

type Project = {
  title: string;
  duration?: string;
  association?: string;
  category: Category;
  description: string;
  skills?: string[];
  tools?: string[];
  github?: string;
  live?: string;
  demoLink?: string;
  featured?: boolean;
  emoji?: string;
  image?: string;
  color?: string;
};

const projects: Project[] = [
  // ================== AI / Hardware & Web Projects ==================
  {
    title: "CSE 332 – MIPS CPU & OS Design",
    duration: "May 2025 – Sep 2025",
    association: "North South University",
    category: "AI / Hardware",
    description: "Developed a custom MIPS-like CPU with full software and hardware stack. Designed custom ISA with MAX, MIN, MEAN, JAL, JR instructions. Built CPU datapath including ALU, Control Unit, Register File, and Memory in Verilog.",
    skills: ["WSL", "Verilog", "MIPS Assembly", "C++"],
    github: "https://github.com/touhidhimuiux/Group-7_ProjectCSE332",
    // featured: true,
    emoji: "🖥️",
  },
  {
    title: "Student Management System",
    duration: "Apr 2024 – Jun 2024",
    association: "North South University",
    category: "Website",
    description: "Efficiently manages student information, course enrollments, and academic performance. Features Student Panel, Enroll Page, Marks Panel, Course search, and Grade Panel.",
    skills: ["Java OOP", "File I/O", "NetBeans", "Abstraction", "Inheritance"],
    // featured: true,
    emoji: "📚",
  },
  {
    title: "Text to Speech Converter",
    category: "Website",
    description: "Interactive Text-to-Speech Converter web app using Web Speech API. Customizable voices, adjustable pitch, speech rate control, and real-time audio output.",
    skills: ["HTML", "CSS", "JavaScript", "Web Speech API"],
    github: "https://github.com/touhidarahimu/Text-to-Speech-Converter",
    // featured: false,
    emoji: "🔊",
  },
  {
    title: "NSU GameWave 2.0 – CODM Section Design",
    duration: "Aug 2025",
    association: "NSU Computer and Engineering Club",
    category: "Design",
    description: "Created all media and promotional designs for the CODM section including event banner, leaflet, A3 poster, fixture design, invitation card, and official rulebook.",
    skills: ["Adobe Illustrator", "Figma", "Canva", "Graphic Design"],
    // featured: true,
    emoji: "🎮",
  },
  // ================== UI / UX Design Projects ==================
  {
    title: 'Premium Car Rental Platform',
    description: 'A seamless, luxury-focused car rental platform with intuitive navigation and smooth interactions.',
    category: 'Design',
    tools: ['Figma', 'Photoshop', 'Illustrator'],
    demoLink: 'https://www.behance.net/gallery/243351849/Premium-Car-Rental-Landing-Page-UIUX-Case-Study',
    image: '/Rental_car.png'
  },
  {
    title: 'Mobile Cryptocurrency Balance Tracker App',
    description: 'Monitor real-time crypto holdings and portfolio performance in one secure, intuitive dashboard.',
    category: 'Design',
    tools: ['Figma', 'Illustrator'],
    demoLink: 'https://www.behance.net/gallery/236767177/-Balance-Tracker',
    image: '/Crypto_tracker.jpeg'
  },
  {
    title: 'Scikit Learn Skill Learning Platform UI/UX',
    description: 'Clean, interactive interface for learning machine learning concepts and practicing algorithms efficiently.',
    category: 'Design',
    tools: ['Figma'],
    demoLink: 'https://www.behance.net/gallery/242519497/Scikit-Learn-Skill-Learning-Platform-UIUX',
    image: '/Scikit_learn.png'
  },
  {
    title: 'Dark Mode Admin Dashboard UI Design',
    description: 'Sleek, modern interface for managing data and analytics efficiently with dark mode theme.',
    category: 'Design',
    tools: ['Figma'],
    demoLink: 'https://www.behance.net/gallery/236373615/Dark-Mode-Admin-Dashboard-UI-Design',
    image: '/Dark_mode_admin_dashboard.png'
  },
  {
    title: 'Foodie Nation Mobile App',
    description: 'Discover, share, and review culinary experiences with engaging visuals and community interactions.',
    category: 'Design',
    tools: ['Figma', 'Adobe XD', 'Illustrator'],
    demoLink: 'https://www.behance.net/gallery/235486485/Foodie-Nation-Mobile-UIUX-App-for-Foodie-Community',
    image: '/Foodie_nation.png'
  },
  {
    title: 'Smart Real Estate for Modern Living Website',
    description: 'Responsive real estate website showcasing properties with interactive maps and smooth browsing.',
    category: 'Design',
    tools: ['Figma', 'Adobe XD', 'Illustrator'],
    demoLink: 'https://www.behance.net/gallery/243540239/Smart-Real-Estate-for-Modern-Living-UIUX-Design',
    image: '/Smart_real_estate.png'
  },
  {
    title: 'Premium Rental Car UI Moodboard',
    description: 'Moodboard showcasing visual identity, color palette, typography, and design elements for luxury cars.',
    category: 'Design',
    tools: ['Figma'],
    demoLink: 'https://www.behance.net/gallery/243381895/Premium-Rental-Car-UI-Moodboard',
    image: '/Premium_rental_car_ui_moodboard.png'
  },
  {
    title: 'Task-Based To-Do Dashboard UI',
    description: 'Interactive dashboard UI for managing tasks efficiently with intuitive task categorization.',
    category: 'Design',
    tools: ['Figma'],
    demoLink: 'https://www.behance.net/gallery/242520465/Task-Based-To-Do-Dashboard-UI',
    image: '/Task_based_to_do_dashboard.png'
  }
];

const filters: { label: Category; icon: React.ElementType }[] = [
  { label: "All", icon: Layers },
  { label: "Website", icon: Globe },
  { label: "Mobile App", icon: Smartphone },
  { label: "AI / Hardware", icon: Cpu },
  { label: "Design", icon: Palette },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const item = { hidden: { opacity: 0, y: 40, scale: 0.95 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } } };

const Projects = () => {
  const [active, setActive] = useState<Category>("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <PageTransition>
      <section className="min-h-screen pt-20 sm:pt-24 pb-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <SectionHeading
            title="Projects"
            subtitle="Real-world and UI/UX design projects demonstrating web, AI, hardware, and creative design skills."
          />

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {filters.map((f) => (
              <motion.button
                key={f.label}
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setActive(f.label)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  active === f.label
                    ? "gradient-btn text-primary-foreground shadow-lg shadow-primary/20"
                    : "bg-card/80 border border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
                }`}
              >
                <f.icon size={15} />
                {f.label}
              </motion.button>
            ))}
          </div>

          {/* Project Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              variants={container}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((p) => (
                <motion.div
                  key={p.title}
                  variants={item}
                  layout
                  className="group relative bg-card/60 backdrop-blur-sm border border-border rounded-2xl overflow-hidden transition-all duration-500 hover:card-glow hover:-translate-y-2 hover:border-primary/40"
                >
                  {/* Image for Design projects */}
                  {p.category === "Design" && p.image && (
                    <div className="w-full h-48 overflow-hidden rounded-t-2xl">
                      <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                  )}

                  <div className="relative z-10 p-6">
                    {p.featured && (
                      <div className="absolute top-5 right-5">
                        <span className="inline-flex items-center gap-1 text-[10px] bg-primary/15 text-primary px-3 py-1 rounded-full font-semibold uppercase tracking-wider">
                          <Sparkles size={10} /> Featured
                        </span>
                      </div>
                    )}

                    <div className="flex items-start gap-4 mb-4">
                      {p.emoji && <div className="text-3xl">{p.emoji}</div>}
                      <div>
                        <h3 className="text-lg font-bold text-foreground leading-snug group-hover:text-primary transition-colors">{p.title}</h3>
                        {p.duration && (
                          <span className="flex items-center gap-1.5 text-xs text-secondary font-medium">
                            <Calendar size={11} />{p.duration}
                          </span>
                        )}
                        {p.association && <p className="text-xs text-muted-foreground mt-1">{p.association}</p>}
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.description}</p>

                    {/* Skills / Tools */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {(p.skills || p.tools || []).map((s, j) => (
                        <span key={j} className="text-[11px] bg-muted/80 text-foreground/80 border border-border/50 px-2.5 py-1 rounded-lg font-medium hover:border-primary/30 hover:text-primary transition-all cursor-default">{s}</span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                      {p.github && (
                        <a href={p.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs bg-muted text-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/10 hover:text-primary transition-all group/btn">
                          <Github size={14} />Source Code <ArrowUpRight size={12} className="opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                        </a>
                      )}
                      {(p.live || p.demoLink) && (
                        <a href={p.live || p.demoLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs gradient-btn text-primary-foreground px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-all">
                          <ExternalLink size={14} />Live Demo
                        </a>
                      )}
                      {!p.github && !p.live && !p.demoLink && (
                        <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                          <Eye size={14} />Private Project
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
      {/* <Footer /> */}
    </PageTransition>
  );
};

export default Projects;