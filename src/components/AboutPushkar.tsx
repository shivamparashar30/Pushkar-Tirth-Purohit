"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper, { SectionHeading } from "./SectionWrapper";
import { useTranslation } from "@/lib/i18n";

export default function AboutPushkar() {
  const { t } = useTranslation();

  const stats = [
    { number: "52", label: t("about.stat.ghats", "Sacred Ghats") },
    { number: "400+", label: t("about.stat.temples", "Temples") },
    { number: "100+", label: t("about.stat.service", "Years of Service") },
    { number: "5000+", label: t("about.stat.pilgrimage", "Years of Pilgrimage") },
  ];

  return (
    <SectionWrapper id="about" alt>
      <SectionHeading
        title={t("about.title", "About Holy Pushkar")}
        subtitle={t("about.subtitle", "One of India's most sacred pilgrimage destinations, blessed by Lord Brahma")}
      />

      <div className="grid lg:grid-cols-2 gap-10 items-center mb-14">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden shadow-xl"
        >
          <Image
            src="/images/2.png"
            alt="Panoramic view of Pushkar Sarovar with white ghats and Aravalli hills"
            width={800}
            height={500}
            className="w-full h-[280px] sm:h-[380px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <p className="absolute bottom-3 left-4 text-white/90 text-sm font-medium">{t("about.imageCaption", "Holy Pushkar Sarovar - Lake of Divine Blessings")}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="space-y-4 text-foreground/80 leading-relaxed"
        >
          <h3 className="text-2xl font-bold text-text-heading">{t("about.heading", "The Sacred City of Lord Brahma")}</h3>
          <p>
            {t("about.p1", "Pushkar is one of the oldest and most sacred cities in India, nestled in the Aravalli hills of Rajasthan. According to ancient scriptures, Lord Brahma performed a yagna here, making it the only place in the world with a temple dedicated to Lord Brahma.")}
          </p>
          <p>
            {t("about.p2", "Pushkar Sarovar is believed to have been created when a lotus petal fell from Lord Brahma's hands. A holy dip cleanses all sins and brings Moksha. The lake is surrounded by 52 sacred ghats.")}
          </p>
          <p>
            {t("about.p3", "Performing Pind Daan, Asthi Visarjan, Tarpan, and Pushkar Snan Sankalp here carries immense spiritual merit. Our family has guided devotees through these sacred rituals for over 100 years.")}
          </p>
        </motion.div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="bg-card-bg border border-card-border rounded-xl p-5 text-center hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">{s.number}</div>
            <div className="text-sm text-text-muted">{s.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Heritage Highlights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-14 bg-card-bg border border-card-border rounded-2xl p-6 sm:p-8"
      >
        <h3 className="text-xl sm:text-2xl font-bold text-text-heading mb-3 text-center">{t("about.heritage.title", "Our 100+ Year Heritage")}</h3>
        <p className="text-text-muted text-center max-w-2xl mx-auto mb-6 text-sm sm:text-base">
          {t("about.heritage.subtitle", "Our Teerth Purohit family has preserved sacred Vedic traditions for generations, guiding devotees with devotion, authenticity, and transparency.")}
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { key: "about.heritage.item1", fallback: "Generational Priest Family" },
            { key: "about.heritage.item2", fallback: "Authentic Vedic Rituals" },
            { key: "about.heritage.item3", fallback: "Personalized Guidance" },
            { key: "about.heritage.item4", fallback: "Transparent Process" },
            { key: "about.heritage.item5", fallback: "WhatsApp Support" },
            { key: "about.heritage.item6", fallback: "English & Hindi" },
            { key: "about.heritage.item7", fallback: "International Assistance" },
          ].map((item) => (
            <span key={item.key} className="flex items-center gap-1.5 px-4 py-2 bg-saffron/5 border border-saffron/15 rounded-full text-sm text-foreground">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-saffron flex-shrink-0">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {t(item.key, item.fallback)}
            </span>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
