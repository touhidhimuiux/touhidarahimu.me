import { motion } from "framer-motion";
import { FileText, ExternalLink, BookOpen, PenTool, ArrowUpRight } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import SectionHeading from "@/components/SectionHeading";
import Footer from "@/components/Footer";

const publications = [
  {
    title: "Medium Blog – Technology & Programming",
    journal: "Medium",
    year: "2024",
    description: "Published insightful articles on technology, programming tutorials, engineering principles, and emerging technologies for a broad technical audience.",
    link: "https://medium.com/@touhidarahimu",
    emoji: "✍️",
  },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const item = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const Publications = () => {
  return (
    <PageTransition>
      <section className="min-h-screen pt-20 sm:pt-24 pb-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <SectionHeading
            title="Publications & Writing"
            subtitle="Sharing knowledge through articles, blogs, and technical content across platforms."
          />

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
          >
            {publications.map((pub, i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ y: -6 }}
                className="group glass-card-hover rounded-2xl p-7 sm:p-8 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "linear-gradient(90deg, #00d9a3, #00c853, #76ff03)" }} />
                
                <div className="relative z-10">
                  <div className="text-3xl sm:text-4xl mb-4">{pub.emoji}</div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground leading-tight mb-2 group-hover:text-primary transition-colors">{pub.title}</h3>
                  <p className="text-xs sm:text-sm text-secondary font-medium mb-3">{pub.journal} • {pub.year}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{pub.description}</p>
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm gradient-btn text-primary-foreground px-5 py-2.5 rounded-xl font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
                  >
                    Read Articles <ArrowUpRight size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Writing Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-16"
          >
            {[
              { emoji: "📝", value: "10+", label: "Articles Written" },
              { emoji: "👁️", value: "500+", label: "Total Views" },
              { emoji: "💻", value: "5+", label: "Tech Topics" },
            ].map((stat, i) => (
              <div key={i} className="text-center bg-card/40 border border-border/50 rounded-xl px-5 sm:px-6 py-3 sm:py-4 min-w-[100px]">
                <div className="text-lg sm:text-xl mb-1">{stat.emoji}</div>
                <div className="text-xl sm:text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-[10px] sm:text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl sm:rounded-3xl"
          >
            <div className="absolute inset-0 opacity-20" style={{ background: "linear-gradient(135deg, #00d9a3, #00c853, #76ff03)" }} />
            <div className="relative bg-card/80 backdrop-blur-sm border border-primary/20 rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center">
              <div className="text-4xl sm:text-5xl mb-4">📖</div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">More Coming Soon</h3>
              <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                Currently working on research papers and technical articles in AI, web development, and UI/UX design. Stay tuned!
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </PageTransition>
  );
};

export default Publications;
