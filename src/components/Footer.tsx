import { Link, useLocation } from "react-router-dom";
import { Mail, Linkedin, Github, Twitter, Facebook, MapPin, Heart, ArrowUpRight,Instagram } from "lucide-react";

const footerGradients: Record<string, string> = {
  "/": "linear-gradient(135deg, hsl(140 30% 6%), hsl(160 25% 8%))",
  "/about": "linear-gradient(135deg, hsl(150 25% 7%), hsl(170 20% 9%))",
  "/education": "linear-gradient(135deg, hsl(130 28% 6%), hsl(145 22% 9%))",
  "/skills": "linear-gradient(135deg, hsl(155 30% 7%), hsl(175 25% 8%))",
  "/projects": "linear-gradient(135deg, hsl(120 25% 7%), hsl(140 30% 9%))",
  "/activities": "linear-gradient(135deg, hsl(165 28% 6%), hsl(145 20% 9%))",
  "/events": "linear-gradient(135deg, hsl(135 30% 7%), hsl(155 25% 9%))",
  "/publications": "linear-gradient(135deg, hsl(148 25% 6%), hsl(168 22% 8%))",
  "/contact": "linear-gradient(135deg, hsl(160 30% 7%), hsl(140 28% 9%))",
};

const socialLinks = [
  { icon: Github, href: "https://github.com/touhidhimuiux", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/touhidhimuiux/", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/touhidhimuiux", label: "Twitter" },
  // { icon: Facebook, href: "https://facebook.com/himu", label: "Facebook" },
   { icon: Instagram, href: "https://www.instagram.com/touhidhimuiux/", label: "Instagram" },
  { icon: Mail, href: "mailto:touhidarahimuiux@gmail.com", label: "Email" },
];

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Education", path: "/education" },
  { label: "Projects", path: "/projects" },
  { label: "Skills", path: "/skills" },
  { label: "Contact", path: "/contact" },
];

const Footer = () => {
  const location = useLocation();
  const bg = footerGradients[location.pathname] || footerGradients["/"];

  return (
    <footer className="relative border-t border-border/50 overflow-hidden" style={{ background: bg }}>
      {/* Subtle overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20" style={{ background: "linear-gradient(180deg, transparent 0%, hsl(120 33% 3%) 100%)" }} />

      <div className="relative container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block font-display text-2xl font-bold gradient-text mb-4">
              Touhid Ara Himu
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mb-6">
CSE Undergraduate at North South University | UI/UX Designer & Frontend Developer| Researcher in AI & Human–Computer Interaction            </p>
            <div className="flex items-center gap-2.5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-muted/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary-foreground hover:gradient-btn hover:border-transparent transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-5 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors group">
                    {link.label}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-5 text-sm uppercase tracking-wider">Get in Touch</h4>
            <div className="space-y-4 mb-6">
              <a href="mailto:touhidarahimu@gmail.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group">
                <div className="w-9 h-9 rounded-lg bg-muted/50 border border-border/50 flex items-center justify-center flex-shrink-0 group-hover:border-primary/30 transition-colors">
                  <Mail size={14} />
                </div>
                touhidarahimuiux@gmail.com
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="w-9 h-9 rounded-lg bg-muted/50 border border-border/50 flex items-center justify-center flex-shrink-0">
                  <MapPin size={14} />
                </div>
                Dhaka, Bangladesh
              </div>
            </div>
            <a
              href="mailto:touhidarahimu@gmail.com?subject=Portfolio%20Inquiry"
              className="inline-flex items-center gap-2 gradient-btn text-primary-foreground px-5 py-2.5 rounded-xl text-sm font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
            >
              <Mail size={14} />
              Send Email Now
            </a>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground/60">
            © {new Date().getFullYear()} Touhid Ara Himu. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/60 flex items-center gap-1.5">
            Crafted with <Heart size={12} className="text-primary" /> and dedication
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
