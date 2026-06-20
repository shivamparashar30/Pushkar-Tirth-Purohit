"use client";

import { motion } from "framer-motion";
import SectionWrapper, { SectionHeading } from "./SectionWrapper";

const timelineEvents = [
  { year: "1900s", title: "Foundation", desc: "Our ancestors began serving devotees at the sacred ghats of Pushkar Sarovar, establishing a tradition of authentic Vedic rituals." },
  { year: "1940s", title: "Growing Legacy", desc: "Second generation of priests continued the sacred service, earning trust of pilgrims from across India." },
  { year: "1970s", title: "Expanding Reach", desc: "Third generation expanded services to include complete ancestral ceremonies and guided temple darshan for devotees." },
  { year: "2000s", title: "Modern Era", desc: "Embracing modern communication while preserving ancient traditions, making our services accessible to international devotees." },
  { year: "Present", title: "Continuing Tradition", desc: "Today, we continue our 100+ year family tradition, serving thousands of devotees with the same devotion and authenticity." },
];

const highlights = [
  "100+ Years Tradition",
  "Generational Priest Family",
  "Authentic Rituals",
  "Spiritual Guidance",
  "Trusted by Pilgrims Worldwide",
];

export default function HeritageSection() {
  return (
    <SectionWrapper id="heritage">
      <SectionHeading
        title="Serving Devotees for More Than 100 Years"
        subtitle="Our Teerth Purohit family has preserved sacred Vedic traditions for generations and continues to guide devotees through authentic rituals at Holy Pushkar Sarovar."
      />

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto mb-16">
        {/* Timeline Line */}
        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-saffron via-gold to-saffron sm:-translate-x-0.5" />

        {timelineEvents.map((event, i) => (
          <motion.div
            key={event.year}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className={`relative flex items-start gap-6 sm:gap-0 mb-12 last:mb-0 ${
              i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
            }`}
          >
            {/* Dot */}
            <div className="absolute left-4 sm:left-1/2 w-4 h-4 bg-saffron rounded-full border-4 border-background shadow-lg shadow-saffron/30 -translate-x-1/2 z-10 mt-1" />

            {/* Card */}
            <div className={`ml-12 sm:ml-0 sm:w-[calc(50%-2rem)] ${i % 2 === 0 ? "sm:pr-8 sm:text-right" : "sm:pl-8"}`}>
              <div className="bg-card-bg border border-card-border rounded-2xl p-6 hover:shadow-xl hover:shadow-saffron/5 transition-all duration-300">
                <span className="inline-block px-3 py-1 bg-saffron/10 text-saffron font-bold text-sm rounded-full mb-3">
                  {event.year}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-text-heading mb-2">
                  {event.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {event.desc}
                </p>
              </div>
            </div>

            {/* Spacer for other side */}
            <div className="hidden sm:block sm:w-[calc(50%-2rem)]" />
          </motion.div>
        ))}
      </div>

      {/* Highlights */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="bg-card-bg border border-card-border rounded-3xl p-8 sm:p-12 text-center"
      >
        <h3 className="text-xl sm:text-2xl font-bold text-text-heading mb-8">
          Our Heritage at a Glance
        </h3>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-center gap-2 px-5 py-3 bg-saffron/5 border border-saffron/20 rounded-full hover:bg-saffron/10 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-saffron flex-shrink-0">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="text-sm sm:text-base font-medium text-foreground">{item}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
