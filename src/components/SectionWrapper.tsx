"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

export default function SectionWrapper({ children, id, className = "", alt = false }: {
  children: ReactNode;
  id?: string;
  className?: string;
  alt?: boolean;
}) {
  return (
    <section id={id} className={`relative py-16 sm:py-20 lg:py-24 ${alt ? "bg-section-alt" : "bg-background"} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

export function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="text-center mb-12 sm:mb-14"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-heading mb-3 leading-tight">{title}</h2>
      {subtitle && <p className="text-text-muted text-base max-w-2xl mx-auto leading-relaxed">{subtitle}</p>}
      <div className="section-divider mt-5" />
    </motion.div>
  );
}
