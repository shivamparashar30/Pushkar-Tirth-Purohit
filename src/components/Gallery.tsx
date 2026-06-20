"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import SectionWrapper, { SectionHeading } from "./SectionWrapper";

const images = [
  { src: "/images/1.png", alt: "Pushkar Sarovar sunrise with priests performing rituals" },
  { src: "/images/2.png", alt: "Panoramic view of Pushkar ghats and Aravalli hills" },
  { src: "/images/3.png", alt: "Brahma Temple exterior with blue pillars" },
  { src: "/images/4.jpg", alt: "Brahma Temple entrance gate" },
  { src: "/images/5.png", alt: "Lord Brahma deity with silver ornaments" },
  { src: "/images/6.png", alt: "Lord Brahma idol with golden ornaments" },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <SectionWrapper id="gallery">
      <SectionHeading
        title="Pushkar Gallery"
        subtitle="Sacred moments from Pushkar Sarovar and Brahma Temple"
      />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
        {images.map((img, i) => (
          <motion.button
            key={img.src}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            onClick={() => setLightbox(i)}
            className="relative rounded-xl overflow-hidden group aspect-[4/3] cursor-pointer"
          >
            <Image src={img.src} alt={img.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 50vw, 33vw" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          </motion.button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button onClick={() => setLightbox(null)} className="absolute top-4 right-4 text-white/70 hover:text-white p-2 z-10" aria-label="Close">
              <X size={24} />
            </button>
            <button onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + images.length) % images.length); }}
              className="absolute left-3 text-white/70 hover:text-white p-2 z-10" aria-label="Previous">
              <ChevronLeft size={32} />
            </button>
            <motion.div key={lightbox} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
              onClick={(e) => e.stopPropagation()} className="relative max-w-4xl w-full max-h-[85vh]">
              <Image src={images[lightbox].src} alt={images[lightbox].alt} width={1200} height={800}
                className="w-full h-auto max-h-[85vh] object-contain rounded-lg" />
            </motion.div>
            <button onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % images.length); }}
              className="absolute right-3 text-white/70 hover:text-white p-2 z-10" aria-label="Next">
              <ChevronRight size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
