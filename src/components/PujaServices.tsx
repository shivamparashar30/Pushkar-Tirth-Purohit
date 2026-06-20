"use client";

import { motion } from "framer-motion";
import SectionWrapper, { SectionHeading } from "./SectionWrapper";
import { useTranslation } from "@/lib/i18n";

const servicesData = [
  { titleKey: "service.sukhShanti", descKey: "service.sukhShanti.desc", title: "Sukh Shanti Puja", desc: "Sacred rituals for peace, prosperity, and family harmony.", icon: "🙏" },
  { titleKey: "service.pitraDosh", descKey: "service.pitraDosh.desc", title: "Pitra Dosh Nivaran Puja", desc: "Removal of ancestral karmic obstacles affecting life progress.", icon: "🔱" },
  { titleKey: "service.pindDaan", descKey: "service.pindDaan.desc", title: "Pind Daan", desc: "Sacred offering for departed souls ensuring salvation (Moksha).", icon: "🙏" },
  { titleKey: "service.asthiVisarjan", descKey: "service.asthiVisarjan.desc", title: "Asthi Visarjan", desc: "Holy immersion of ashes in the sacred waters of Pushkar.", icon: "🕉" },
  { titleKey: "service.snanSankalp", descKey: "service.snanSankalp.desc", title: "Pushkar Snan Sankalp", desc: "Special ritual before holy bath enhancing spiritual merit.", icon: "💧" },
  { titleKey: "service.brahmaDarshan", descKey: "service.brahmaDarshan.desc", title: "Brahma Temple Darshan", desc: "Guided worship at the world-famous Brahma Temple.", icon: "🛕" },
  { titleKey: "service.grahShanti", descKey: "service.grahShanti.desc", title: "Grah Shanti Puja", desc: "Planetary peace rituals to neutralize negative influences.", icon: "✨" },
  { titleKey: "service.bhogPuja", descKey: "service.bhogPuja.desc", title: "Bhog Puja", desc: "Special food offerings to deities with Vedic mantras.", icon: "🍚" },
  { titleKey: "service.narayanBali", descKey: "service.narayanBali.desc", title: "Narayan Bali Puja", desc: "Ancestral ritual to pacify souls and remove family curses.", icon: "🔥" },
  { titleKey: "service.tarpan", descKey: "service.tarpan.desc", title: "Tarpan Rituals", desc: "Sacred water offerings for ancestors with Vedic mantras.", icon: "💧" },
  { titleKey: "service.amavasya", descKey: "service.amavasya.desc", title: "Amavasya Puja", desc: "New Moon rituals for ancestral blessings and spiritual power.", icon: "🌑" },
  { titleKey: "service.purnima", descKey: "service.purnima.desc", title: "Purnima Puja", desc: "Full Moon ceremonies with amplified spiritual merit.", icon: "🌕" },
];

export default function PujaServices() {
  const { t } = useTranslation();

  const scrollToBooking = () => {
    document.querySelector("#book-puja")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <SectionWrapper id="services">
      <SectionHeading
        title={t("services.title", "Our Sacred Puja Services")}
        subtitle={t("services.subtitle", "Authentic Vedic rituals performed with devotion and strict adherence to ancient traditions")}
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {servicesData.map((s, i) => (
          <motion.div
            key={s.titleKey}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
            className="group bg-card-bg border border-card-border rounded-xl p-5 hover:shadow-lg hover:border-saffron/20 hover:-translate-y-1 transition-all duration-300"
          >
            <span className="text-3xl mb-3 block group-hover:scale-110 transition-transform duration-200">{s.icon}</span>
            <h3 className="text-base font-bold text-text-heading mb-1.5">{t(s.titleKey, s.title)}</h3>
            <p className="text-sm text-text-muted leading-relaxed mb-3">{t(s.descKey, s.desc)}</p>
            <button
              onClick={scrollToBooking}
              className="text-sm text-saffron font-medium hover:underline transition-colors"
            >
              {t("services.bookNow", "Book Now")} &rarr;
            </button>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
