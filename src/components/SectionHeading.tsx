import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="text-center mb-12 sm:mb-16"
  >
    <div className="inline-flex items-center gap-3 mb-4">
      <motion.div 
        className="h-[2px] w-6 sm:w-8 rounded-full"
        style={{ background: "linear-gradient(90deg, transparent, #00c853)" }}
        initial={{ width: 0 }}
        whileInView={{ width: 32 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.4 }}
      />
      <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-primary">
        {title}
      </span>
      <motion.div 
        className="h-[2px] w-6 sm:w-8 rounded-full"
        style={{ background: "linear-gradient(90deg, #00c853, transparent)" }}
        initial={{ width: 0 }}
        whileInView={{ width: 32 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.4 }}
      />
    </div>
    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-3 sm:mb-4 leading-tight">{title}</h2>
    {subtitle && (
      <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed px-4">
        {subtitle}
      </p>
    )}
  </motion.div>
);

export default SectionHeading;
