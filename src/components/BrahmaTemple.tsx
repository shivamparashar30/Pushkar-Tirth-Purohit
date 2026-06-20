"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper, { SectionHeading } from "./SectionWrapper";

export default function BrahmaTemple() {
  const scrollToBooking = () => {
    document.querySelector("#book-puja")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <SectionWrapper id="brahma-temple" alt>
      <SectionHeading
        title="Brahma Temple, Pushkar"
        subtitle="One of the very few temples in the world dedicated to Lord Brahma"
      />

      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="space-y-3"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <Image src="/images/3.png" alt="Brahma Temple Pushkar" width={800} height={500}
              className="w-full h-[260px] sm:h-[320px] object-cover" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src="/images/4.jpg" alt="Brahma Temple entrance" width={400} height={300}
                className="w-full h-[140px] sm:h-[170px] object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src="/images/5.png" alt="Lord Brahma deity idol" width={400} height={300}
                className="w-full h-[140px] sm:h-[170px] object-cover" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <div className="space-y-3 text-foreground/80 leading-relaxed">
            <h3 className="text-2xl font-bold text-text-heading">History & Significance</h3>
            <p>
              The Brahma Temple is approximately 2,000 years old and is one of the very few temples in the world dedicated to Lord Brahma, the Creator among the Holy Trinity (Trimurti).
            </p>
            <p>
              According to the Padma Purana, Lord Brahma killed the demon Vajranabha with a lotus flower. Petals fell at three places creating three lakes, with Pushkar being the most sacred. Lord Brahma then performed a grand yagna here.
            </p>
            <p>
              The temple features a distinctive red spire, marble flooring, and a silver turtle. Devotees worldwide visit for blessings, especially during Kartik Purnima.
            </p>
          </div>

          <div className="bg-saffron/5 border border-saffron/15 rounded-xl p-5">
            <h4 className="font-bold text-text-heading mb-1.5">Guided Darshan Available</h4>
            <p className="text-sm text-text-muted mb-3">Our priest will accompany you for special abhishek and archana according to tradition.</p>
            <button onClick={scrollToBooking}
              className="px-5 py-2.5 bg-saffron-gradient text-white font-medium rounded-full text-sm hover:shadow-lg transition-all">
              Book Darshan
            </button>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
