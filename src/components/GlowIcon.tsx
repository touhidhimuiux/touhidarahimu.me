import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowIconProps {
  icon: React.ElementType;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "gradient" | "glass" | "outline" | "pulse";
  className?: string;
  delay?: number;
}

const sizeMap = {
  sm: { container: "w-9 h-9", icon: 16, rounded: "rounded-lg" },
  md: { container: "w-12 h-12", icon: 20, rounded: "rounded-xl" },
  lg: { container: "w-14 h-14", icon: 24, rounded: "rounded-2xl" },
  xl: { container: "w-16 h-16", icon: 28, rounded: "rounded-2xl" },
};

const GlowIcon = ({ icon: Icon, size = "md", variant = "gradient", className, delay = 0 }: GlowIconProps) => {
  const s = sizeMap[size];

  const variants = {
    gradient: cn(
      s.container, s.rounded,
      "relative flex items-center justify-center overflow-hidden",
      "shadow-lg shadow-primary/25",
      className
    ),
    glass: cn(
      s.container, s.rounded,
      "relative flex items-center justify-center",
      "bg-card/40 backdrop-blur-xl border border-primary/20",
      "shadow-lg shadow-primary/10",
      className
    ),
    outline: cn(
      s.container, s.rounded,
      "relative flex items-center justify-center",
      "border-2 border-primary/40 bg-transparent",
      className
    ),
    pulse: cn(
      s.container, s.rounded,
      "relative flex items-center justify-center overflow-hidden",
      "shadow-lg shadow-primary/30",
      className
    ),
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.1, rotate: 3 }}
      className={variants[variant]}
    >
      {/* Gradient background for gradient/pulse variants */}
      {(variant === "gradient" || variant === "pulse") && (
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #00d9a3 0%, #00c853 50%, #76ff03 100%)" }} />
      )}

      {/* Shimmer overlay */}
      {variant === "gradient" && (
        <motion.div
          className="absolute inset-0 opacity-0 hover:opacity-100"
          style={{ background: "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.15) 50%, transparent 70%)" }}
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
        />
      )}

      {/* Pulse ring for pulse variant */}
      {variant === "pulse" && (
        <motion.div
          className="absolute inset-0 rounded-inherit"
          style={{ background: "linear-gradient(135deg, #00d9a3, #76ff03)" }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}

      {/* Icon */}
      <Icon
        size={s.icon}
        className={cn(
          "relative z-10",
          variant === "gradient" || variant === "pulse" ? "text-primary-foreground drop-shadow-sm" : "",
          variant === "glass" ? "text-primary" : "",
          variant === "outline" ? "text-primary" : ""
        )}
        strokeWidth={2}
      />
    </motion.div>
  );
};

export default GlowIcon;
