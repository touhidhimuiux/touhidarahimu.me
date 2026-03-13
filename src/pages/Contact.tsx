import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Linkedin, MapPin, Phone, Github, MessageCircle, CheckCircle, Loader2, ArrowUpRight } from "lucide-react";
import emailjs from "@emailjs/browser";
import PageTransition from "@/components/PageTransition";
import SectionHeading from "@/components/SectionHeading";
import Footer from "@/components/Footer";
import { FaBehance } from "react-icons/fa";

const EMAILJS_SERVICE_ID = "service_w45urjz";
const EMAILJS_TEMPLATE_ID = "template_yxh19mq";
const EMAILJS_PUBLIC_KEY = "gfepOAF8TxV8iWA_x";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_name: "Himu",
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
      );
      window.location.href = `mailto:your.email@example.com?subject=${subject}&body=${body}`;
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent("Hi! I found your portfolio and would like to connect.");
    window.open(`https://wa.me/8801XXXXXXXXX?text=${text}`, "_blank");
  };

  return (
    <PageTransition>
      <section className="min-h-screen pt-20 sm:pt-24 pb-16 px-4 sm:px-6 overflow-x-hidden">
        <div className="container mx-auto max-w-5xl">
          <SectionHeading
            title="Get in Touch"
            subtitle="Have a question, project idea, or collaboration opportunity? I'd love to hear from you."
          />

          {/* Quick Contact Methods */}
         <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-12 sm:mb-16"
>
  {[
    {
      icon: Mail,
      label: "Email",
      value: "Send Email",
      href: "mailto:touhidarahimuiux@gmail.com",
    },
    {
      icon: FaBehance,
      label: "Behance",
      value: "View Work",
      href: "https://behance.net/touhidhimuiux",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect",
      href: "https://linkedin.com/in/touhidhimuiux",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Follow",
      href: "https://github.com/touhidhimuiux",
    },
  ].map((method, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.08 }}
    >
      {method.href ? (
        <a
          href={method.href}
          target="_blank"
          rel="noopener noreferrer"
          className="block glass-card-hover rounded-2xl p-4 sm:p-6 text-center"
        >
          <div className="flex items-center justify-center mb-3 text-primary text-2xl sm:text-3xl">
            <method.icon />
          </div>
          <p className="text-[10px] sm:text-xs text-muted-foreground">{method.label}</p>
          <p className="text-xs sm:text-sm font-bold text-foreground">{method.value}</p>
        </a>
      ) : (
        <button
          onClick={method.onClick}
          className="w-full glass-card-hover rounded-2xl p-4 sm:p-6 text-center"
        >
          <div className="flex items-center justify-center mb-3 text-primary text-2xl sm:text-3xl">
            <method.icon />
          </div>
          <p className="text-[10px] sm:text-xs text-muted-foreground">{method.label}</p>
          <p className="text-xs sm:text-sm font-bold text-foreground">{method.value}</p>
        </button>
      )}
    </motion.div>
  ))}
</motion.div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
  {/* Form */}
  <motion.form
    ref={formRef}
    onSubmit={handleSubmit}
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="space-y-5"
  >
    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1">Send me a message</h3>
    <p className="text-xs sm:text-sm text-muted-foreground mb-4">Fill out the form and I'll get back to you within 24 hours.</p>

    {[
      { label: "Name", key: "name" as const, type: "text", placeholder: "Your full name" },
      { label: "Email", key: "email" as const, type: "email", placeholder: "your@email.com" },
    ].map((field) => (
      <div key={field.key}>
        <label className="block text-sm font-semibold text-foreground mb-2">{field.label}</label>
        <input
          type={field.type}
          required
          value={form[field.key]}
          onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
          className="w-full bg-card/50 border border-border/50 rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all backdrop-blur-sm"
          placeholder={field.placeholder}
        />
      </div>
    ))}

    <div>
      <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
      <textarea
        required
        rows={5}
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className="w-full bg-card/50 border border-border/50 rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all resize-none backdrop-blur-sm"
        placeholder="Tell me about your project or idea..."
      />
    </div>

    <button
      type="submit"
      disabled={status === "sending"}
      className="inline-flex items-center gap-2 gradient-btn text-primary-foreground px-6 py-3.5 rounded-sm font-semibold transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/25 w-full justify-center disabled:opacity-70 disabled:hover:scale-100"
    >
      {status === "sending" ? (
        <><Loader2 size={18} className="animate-spin" />Sending...</>
      ) : status === "sent" ? (
        <><CheckCircle size={18} />Message Sent!</>
      ) : (
        <><Send size={18} />Send Message</>
      )}
    </button>
    {status === "sent" && (
      <motion.p initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }}
        className="text-sm text-primary text-center font-medium">
        ✅ Your message has been sent! I'll get back to you soon.
      </motion.p>
    )}
    {status === "error" && (
      <motion.p initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }}
        className="text-sm text-yellow-400 text-center">
        Opening your email client as fallback...
      </motion.p>
    )}
  </motion.form>

  {/* Contact Info */}
  <motion.div
    initial={{ opacity: 0, x: 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="space-y-5 sm:space-y-6"
  >
    {/* Info Cards */}
    {[
      { icon: Mail, label: "Email", value: "touhidarahimuiux@gmail.com", href: "mailto:touhidarahimuiux@gmail.com" },
      { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/touhidarahimuiux", href: "https://linkedin.com/in/touhidhimuiux" },
      { icon: MapPin, label: "Location", value: "Dhaka, Bangladesh", href: null },
    ].map((info, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.08 }}
      >
        <div className="flex items-center gap-4 border border-border/50 bg-card/80 p-4 rounded-sm hover:border-primary transition">
          <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-muted/50 border border-border/50">
            <info.icon size={18} className="text-primary" />
          </div>
          <div className="min-w-0">
            <p className="text-[10px] sm:text-xs text-muted-foreground">{info.label}</p>
            {info.href ? (
              <a href={info.href} target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm font-medium text-foreground truncate hover:text-primary transition">
                {info.value}
              </a>
            ) : (
              <p className="text-xs sm:text-sm font-medium text-foreground truncate">{info.value}</p>
            )}
          </div>
        </div>
      </motion.div>
    ))}

    {/* WhatsApp CTA */}
    <button
      onClick={handleWhatsApp}
      className="flex items-center gap-4 border border-border/50 bg-card/80 p-4 rounded-sm hover:border-primary transition w-full"
    >
      <MessageCircle size={24} className="text-primary flex-shrink-0" />
      <div>
        <p className="text-sm font-bold text-foreground">Chat on WhatsApp</p>
        <p className="text-xs text-muted-foreground">Quick response • Usually replies within hours</p>
      </div>
      <ArrowUpRight size={16} className="text-muted-foreground ml-auto flex-shrink-0" />
    </button>

    {/* Availability */}
    <div className="border border-border/50 bg-card/80 p-4 rounded-sm">
      <div className="flex items-center gap-2 mb-2">
        <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
        <span className="text-sm font-bold text-foreground">Currently Available</span>
      </div>
      <p className="text-xs text-muted-foreground leading-relaxed">
        Open to internship opportunities, freelance projects, and research collaborations.
      </p>
    </div>
  </motion.div>
</div>
        </div>
      </section>
      <Footer />
    </PageTransition>
  );
};

export default Contact;
