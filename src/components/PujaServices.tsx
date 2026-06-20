"use client";

import { motion } from "framer-motion";
import SectionWrapper, { SectionHeading } from "./SectionWrapper";

const services = [
  { title: "Sukh Shanti Puja", desc: "Sacred rituals for peace, prosperity, and family harmony.", icon: "🙏" },
  { title: "Pitra Dosh Nivaran Puja", desc: "Removal of ancestral karmic obstacles affecting life progress.", icon: "🔱" },
  { title: "Pind Daan", desc: "Sacred offering for departed souls ensuring salvation (Moksha).", icon: "🙏" },
  { title: "Asthi Visarjan", desc: "Holy immersion of ashes in the sacred waters of Pushkar.", icon: "🕉" },
  { title: "Pushkar Snan Sankalp", desc: "Special ritual before holy bath enhancing spiritual merit.", icon: "💧" },
  { title: "Brahma Temple Darshan", desc: "Guided worship at the world-famous Brahma Temple.", icon: "🛕" },
  { title: "Grah Shanti Puja", desc: "Planetary peace rituals to neutralize negative influences.", icon: "✨" },
  { title: "Bhog Puja", desc: "Special food offerings to deities with Vedic mantras.", icon: "🍚" },
  { title: "Narayan Bali Puja", desc: "Ancestral ritual to pacify souls and remove family curses.", icon: "🔥" },
  { title: "Tarpan Rituals", desc: "Sacred water offerings for ancestors with Vedic mantras.", icon: "💧" },
  { title: "Amavasya Puja", desc: "New Moon rituals for ancestral blessings and spiritual power.", icon: "🌑" },
  { title: "Purnima Puja", desc: "Full Moon ceremonies with amplified spiritual merit.", icon: "🌕" },
];

export default function PujaServices() {
  const scrollToBooking = () => {
    document.querySelector("#book-puja")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <SectionWrapper id="services">
      <SectionHeading
        title="Our Sacred Puja Services"
        subtitle="Authentic Vedic rituals performed with devotion and strict adherence to ancient traditions"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
            className="group bg-card-bg border border-card-border rounded-xl p-5 hover:shadow-lg hover:border-saffron/20 hover:-translate-y-1 transition-all duration-300"
          >
            <span className="text-3xl mb-3 block group-hover:scale-110 transition-transform duration-200">{s.icon}</span>
            <h3 className="text-base font-bold text-text-heading mb-1.5">{s.title}</h3>
            <p className="text-sm text-text-muted leading-relaxed mb-3">{s.desc}</p>
            <button
              onClick={scrollToBooking}
              className="text-sm text-saffron font-medium hover:underline transition-colors"
            >
              Book Now &rarr;
            </button>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
