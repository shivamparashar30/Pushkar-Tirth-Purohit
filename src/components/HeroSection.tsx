"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import PanditAnimation from "./PanditAnimation";
import { WHATSAPP_HREF } from "@/lib/constants";
import { useTranslation } from "@/lib/i18n";

export default function HeroSection() {
  const { t } = useTranslation();
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative h-[60vh] sm:h-[65vh] md:h-[70vh] lg:h-[90vh] flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background images — mobile vs desktop */}
      <div className="absolute inset-0">
        {/* Mobile image */}
        <Image
          src="/images/hero-mobile.png"
          alt="Sacred rituals at Pushkar Sarovar"
          fill
          priority
          className="object-cover md:hidden"
          sizes="100vw"
          quality={90}
        />
        {/* Desktop / iPad image */}
        <Image
          src="/images/hero1.png"
          alt="Pushkar Sarovar at sunrise - Traditional Teerth Purohit performing sacred rituals at the holy lake"
          fill
          priority
          className="object-cover hidden md:block"
          sizes="100vw"
          quality={90}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
      </div>

      <PanditAnimation />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4 sm:mb-5 tracking-tight">
            {t("hero.title1", "Sacred Vedic Rituals")}
            <br />
            <span className="text-shimmer">{t("hero.title2", "at Holy Pushkar Sarovar")}</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            {t("hero.subtitle", "Traditional Teerth Purohit Services for Pind Daan, Asthi Visarjan, Pitra Dosh Nivaran, Sukh Shanti Puja, and Divine Blessings in Pushkar.")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <button
            onClick={() => scrollTo("#book-puja")}
            className="w-full sm:w-auto px-8 py-3.5 bg-saffron-gradient text-white font-semibold rounded-full shadow-lg shadow-saffron/25 hover:shadow-xl hover:scale-[1.03] transition-all duration-300"
          >
            {t("hero.bookPuja", "Book Puja Now")}
          </button>
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 bg-[#25D366] text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all duration-300 flex items-center justify-center gap-2"
          >
            <WhatsAppIcon size={18} /> {t("hero.whatsapp", "WhatsApp Now")}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="hidden sm:flex flex-wrap items-center justify-center gap-4 sm:gap-6"
        >
          {[
            { key: "hero.badge1", fallback: "100+ Years Tradition" },
            { key: "hero.badge2", fallback: "Authentic Vedic Rituals" },
            { key: "hero.badge3", fallback: "Thousands Served" },
          ].map((badge) => (
            <span
              key={badge.key}
              className="flex items-center gap-1.5 glass px-3.5 py-1.5 rounded-full text-white/85 text-sm"
            >
              <span className="text-gold-light">&#9733;</span> {t(badge.key, badge.fallback)}
            </span>
          ))}
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollTo("#about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={24} />
        </motion.div>
      </motion.button>
    </section>
  );
}
