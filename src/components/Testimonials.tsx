"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper, { SectionHeading } from "./SectionWrapper";

const testimonials = [
  { name: "Rajesh Kumar Sharma", city: "Delhi", review: "We visited Pushkar for Pind Daan and received excellent guidance. Everything was performed according to Vedic traditions. The entire family felt deep spiritual peace." },
  { name: "Sunita Devi Agarwal", city: "Mumbai", review: "Pandit Ji conducted our Pitra Dosh Nivaran Puja with great devotion. He explained every step and made us feel comfortable throughout. Positive changes followed." },
  { name: "Vikram Singh Rathore", city: "Jaipur", review: "Our family has been visiting for over 20 years for Asthi Visarjan and Tarpan rituals. Their dedication and authenticity is unmatched." },
  { name: "Amit Patel", city: "London, UK", review: "As an NRI, I was worried about arrangements. Pandit Ji made everything easy through WhatsApp. Excellent service for international devotees." },
  { name: "Kavita Joshi", city: "Pune", review: "The Sukh Shanti Puja brought immense peace to our family. His knowledge of Vedic mantras is remarkable. We felt truly blessed." },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setCurrent((p) => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <SectionWrapper id="testimonials" alt>
      <SectionHeading title="What Devotees Say" subtitle="Trusted by thousands of devotees from India and abroad" />

      <div className="max-w-3xl mx-auto" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
        <div className="relative bg-card-bg border border-card-border rounded-2xl p-8 sm:p-10 min-h-[240px]">
          <div className="absolute top-4 left-6 text-5xl text-saffron/10 font-serif select-none">&ldquo;</div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
              className="text-center relative z-10"
            >
              <div className="flex justify-center gap-0.5 mb-5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#FFB800">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p className="text-foreground/80 text-base leading-relaxed mb-6 italic max-w-xl mx-auto">
                &ldquo;{testimonials[current].review}&rdquo;
              </p>
              <p className="font-bold text-text-heading">{testimonials[current].name}</p>
              <p className="text-sm text-text-muted">{testimonials[current].city}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-300 ${i === current ? "bg-saffron w-6" : "bg-card-border w-2 hover:bg-gold"}`}
              aria-label={`Testimonial ${i + 1}`} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
