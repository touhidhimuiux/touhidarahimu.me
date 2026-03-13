import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2, Download, MessageCircle } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Education", path: "/education" },
  { label: "Skills", path: "/skills" },
  { label: "Projects", path: "/projects" },
  { label: "Services", path: "/services" },
  { label: "Activities", path: "/activities" },
  { label: "Events", path: "/events" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "border-b border-primary/10 shadow-lg shadow-background/50" : "border-b border-transparent"
      }`}
      style={{
        background: scrolled
          ? "linear-gradient(135deg, hsl(120 33% 5% / 0.97), hsl(140 25% 8% / 0.97))"
          : "linear-gradient(135deg, hsl(120 33% 5% / 0.8), hsl(140 25% 8% / 0.8))",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
      }}
    >
      {/* Top accent line */}
      <div className="h-[2px] w-full" style={{ background: "linear-gradient(90deg, transparent, #00d9a3, #00c853, #76ff03, transparent)" }} />

      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <motion.div
              animate={{
                y: [0, -4, 0, -2, 0],
                rotate: [0, -8, 8, -4, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "easeInOut",
              }}
              className="relative"
            >
              <div className="w-9 h-9 rounded-lg gradient-btn flex items-center justify-center shadow-lg shadow-primary/30">
                <Code2 size={20} className="text-primary-foreground" strokeWidth={2.5} />
              </div>
            </motion.div>
            <span className="font-display text-xl font-bold gradient-text tracking-tight">
              Himu
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item, i) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
              >
                <Link
                  to={item.path}
                  className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    location.pathname === item.path
                      ? "text-primary bg-primary/15 shadow-sm shadow-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-primary/5"
                  }`}
                >
                  {item.label}
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-[9px] left-1/2 -translate-x-1/2 w-6 h-[2px] rounded-full"
                      style={{ background: "linear-gradient(90deg, #00d9a3, #76ff03)" }}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <motion.a
  initial={{ opacity: 0, x: 20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ delay: 0.6 }}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  href="https://drive.google.com/file/d/1kKSGmFPTd_lwPlb8ho7KN6crWPrhhizB/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
>
  <Download size={15} />
  Resume
</motion.a>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold gradient-btn text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105 transition-all duration-300"
              >
                <MessageCircle size={15} />
                Get in Touch
              </Link>
            </motion.div>
          </div>

          {/* Mobile toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground rounded-lg hover:bg-primary/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden border-t border-primary/10"
            style={{
              background: "linear-gradient(180deg, hsl(120 33% 5% / 0.99), hsl(140 25% 8% / 0.99))",
            }}
          >
            <div className="px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
              {[...navItems, { label: "Contact", path: "/contact" }].map((item, i) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                      location.pathname === item.path
                        ? "text-primary bg-primary/15"
                        : "text-muted-foreground hover:text-foreground hover:bg-primary/5"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-4 flex gap-3"
              >
                <a
                  href="#"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-medium border border-primary/30 text-primary"
                >
                  <Download size={15} />
                  Resume
                </a>
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold gradient-btn text-primary-foreground"
                >
                  <MessageCircle size={15} />
                  Contact
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
