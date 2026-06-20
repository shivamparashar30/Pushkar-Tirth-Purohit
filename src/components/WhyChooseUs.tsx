"use client";

import { motion } from "framer-motion";
import SectionWrapper, { SectionHeading } from "./SectionWrapper";

const reasons = [
  {
    icon: "🏛",
    title: "100+ Years Family Heritage",
    desc: "Our family has been serving devotees at Pushkar Sarovar for over a century, carrying forward the sacred traditions with utmost devotion.",
  },
  {
    icon: "👨‍👦‍👦",
    title: "Traditional Teerth Purohit Family",
    desc: "We are a recognized Teerth Purohit family of Pushkar, known for conducting authentic rituals as per Vedic scriptures.",
  },
  {
    icon: "📿",
    title: "Authentic Vedic Rituals",
    desc: "Every ritual is performed strictly according to ancient Vedic traditions and scriptures, ensuring complete spiritual efficacy.",
  },
  {
    icon: "🙏",
    title: "Personalized Guidance",
    desc: "We provide one-on-one spiritual guidance to every devotee, explaining the significance and process of each ritual in detail.",
  },
  {
    icon: "✅",
    title: "Transparent Process",
    desc: "Complete transparency in rituals and offerings. We explain every step of the puja process so devotees feel connected and assured.",
  },
  {
    icon: "💬",
    title: "WhatsApp Support",
    desc: "Easy and instant communication through WhatsApp for booking, queries, and guidance before and after your visit to Pushkar.",
  },
  {
    icon: "🌐",
    title: "English & Hindi Support",
    desc: "Multilingual support for both Indian and international devotees. We communicate fluently in Hindi and English.",
  },
  {
    icon: "✈",
    title: "International Devotee Assistance",
    desc: "Special assistance for NRI and international devotees including travel guidance, accommodation suggestions, and complete puja arrangements.",
  },
];

export default function WhyChooseUs() {
  return (
    <SectionWrapper id="why-us">
      <SectionHeading
        title="Why Choose Us"
        subtitle="Trusted by thousands of devotees from India and abroad for authentic Vedic rituals at Holy Pushkar"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reasons.map((reason, i) => (
          <motion.div
            key={reason.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.1 }}
            className="group bg-card-bg border border-card-border rounded-2xl p-6 text-center hover:shadow-xl hover:shadow-saffron/10 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden"
          >
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-saffron/5 to-transparent rounded-bl-full" />

            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 animate-breeze-vertical" style={{ animationDelay: `${i * 0.3}s` }}>
              {reason.icon}
            </div>
            <h3 className="text-base sm:text-lg font-bold text-text-heading mb-3 leading-snug">
              {reason.title}
            </h3>
            <p className="text-sm text-text-muted leading-relaxed">
              {reason.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
