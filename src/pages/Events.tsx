import { motion } from "framer-motion";
import { Globe, Calendar, MapPin, Trophy, Wrench, Mic, Code2, Palette, Gamepad2, BookOpen } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import SectionHeading from "@/components/SectionHeading";
import Footer from "@/components/Footer";
import GlowIcon from "@/components/GlowIcon";

const events = [
  { title: "NSU TechFest 2025", date: "Feb 2025", type: "Tech Festival", location: "North South University, Dhaka", role: "Event Organizer", description: "Key organizer contributing to event coordination, promotion, and team management.", icon: Trophy },
  { title: "NSUCEC GAMEWAVE Tournament", date: "Nov 2024", type: "E-Sports", location: "North South University, Dhaka", role: "Volunteer & Graphic Designer", description: "Part of Design and Promotion Team, created promotional materials and supported event outreach.", icon: Gamepad2 },
  { title: "NSU GameWave 2.0", date: "Aug 2025", type: "E-Sports", location: "North South University, Dhaka", role: "Organizer & CODM Section Designer", description: "Designed complete assets for CODM Section including banner, leaflet, A3 poster, fixture, invitation card, and rulebook.", icon: Palette },
  { title: "Career in Web Development Seminar", date: "Jul 2024", type: "Seminar", location: "North South University, Dhaka", role: "Volunteer", description: "Seminar led by Anisul Islam. Volunteered with organizing materials, guiding attendees, and facilitating registration.", icon: BookOpen },
  { title: "Mastering Git and GitHub Workshop", date: "Aug 2024", type: "Workshop", location: "Microsoft Learn Student Ambassadors", role: "Host & Speaker", description: "Led comprehensive workshops on Git and GitHub, providing hands-on demonstrations and real-world examples.", icon: Mic },
  { title: "Android App Development Workshop", date: "Mar 2025", type: "Workshop", location: "NSU CEC & bdapps", role: "Participant", description: "Three-day workshop exploring mobile app development, best practices, and real-world applications.", icon: Wrench },
  { title: "Independence Day Graphic Design Competition", date: "Mar 2024", type: "Competition", location: "NSU Computer & Engineering Club", role: "3rd Place Winner", description: "Won 3rd place in the Independence Day Graphic Design Competition.", icon: Trophy },
  { title: "GirlScript Summer of Code", date: "Oct 2024", type: "Open Source", location: "Remote", role: "Open Source Contributor", description: "Contributing to open source projects with version control, code reviews, and technical documentation.", icon: Code2 },
];

const typeColors: Record<string, string> = {
  "Tech Festival": "bg-primary/15 text-primary",
  "E-Sports": "bg-secondary/15 text-secondary",
  "Seminar": "bg-accent/15 text-accent-foreground",
  "Workshop": "bg-primary/10 text-primary",
  "Competition": "bg-destructive/10 text-destructive",
  "Open Source": "bg-secondary/15 text-secondary",
};

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 25 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const Events = () => {
  return (
    <PageTransition>
      <section className="min-h-screen pt-20 sm:pt-24 pb-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <SectionHeading
            title="Events & Engagements"
            subtitle="Conferences, workshops, competitions, and community events that shaped my journey."
          />

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6 mb-14"
          >
            {[
              { value: `${events.length}+`, label: "Events", icon: Globe },
              { value: "3+", label: "Roles", icon: Mic },
              { value: "2+", label: "Awards", icon: Trophy },
            ].map((stat, i) => (
              <div key={i} className="text-center glass-card rounded-xl px-6 py-4 min-w-[110px]">
                <GlowIcon icon={stat.icon} size="sm" variant="glass" className="mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Events Grid */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {events.map((e, i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ y: -4 }}
                className="group glass-card-hover rounded-2xl p-7 relative overflow-hidden"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: "linear-gradient(135deg, hsl(145 65% 42% / 0.03), hsl(170 55% 38% / 0.06))" }}
                />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <span
                      className={`text-xs px-3 py-1 rounded-full font-semibold ${
                        typeColors[e.type] || "bg-muted text-muted-foreground"
                      }`}
                    >
                      {e.type}
                    </span>
                    <span className="text-xs bg-muted text-foreground/80 px-3 py-1 rounded-full font-medium">
                      {e.role}
                    </span>
                  </div>

                  <div className="flex items-start gap-4">
                    {/* Icon Box */}
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-tr from-primary/20 to-secondary/20 shadow-md group-hover:scale-110 transition-transform duration-300">
                      <GlowIcon icon={e.icon} size="md" variant="gradient" delay={i * 0.05} />
                    </div>

                    {/* Event Content */}
                    <div className="flex-1">
                      <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {e.title}
                      </h3>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={12} className="text-secondary" />
                          {e.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin size={12} className="text-secondary" />
                          {e.location}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{e.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <Footer />
    </PageTransition>
  );
};

export default Events;