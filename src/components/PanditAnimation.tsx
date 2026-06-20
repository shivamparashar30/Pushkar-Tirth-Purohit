"use client";

import { motion } from "framer-motion";

const embers = [
  { x: 10, y: 30, size: 3, duration: 7, delay: 0, drift: 18 },
  { x: 20, y: 20, size: 2.5, duration: 9, delay: 1.2, drift: -14 },
  { x: 30, y: 35, size: 3.5, duration: 8, delay: 0.5, drift: 22 },
  { x: 40, y: 25, size: 2, duration: 10, delay: 2, drift: -18 },
  { x: 50, y: 15, size: 3, duration: 7.5, delay: 0.8, drift: 16 },
  { x: 60, y: 28, size: 2.5, duration: 9, delay: 3, drift: -20 },
  { x: 70, y: 20, size: 3, duration: 8.5, delay: 1.5, drift: 14 },
  { x: 80, y: 32, size: 2, duration: 10, delay: 0.3, drift: -16 },
  { x: 90, y: 18, size: 3.5, duration: 7, delay: 2.5, drift: 20 },
  { x: 25, y: 22, size: 2.5, duration: 8, delay: 3.5, drift: -12 },
  { x: 55, y: 30, size: 3, duration: 9.5, delay: 1, drift: 15 },
  { x: 75, y: 15, size: 2, duration: 8, delay: 4, drift: -18 },
  { x: 45, y: 35, size: 2.5, duration: 7.5, delay: 2.2, drift: 12 },
  { x: 85, y: 25, size: 3, duration: 9, delay: 0.7, drift: -15 },
  { x: 15, y: 18, size: 2, duration: 10, delay: 3.8, drift: 20 },
];

const floatingDiyas = [
  { x: 12, delay: 0, duration: 6, size: "w-10 h-10" },
  { x: 30, delay: 1.5, duration: 7, size: "w-8 h-8" },
  { x: 52, delay: 0.8, duration: 5.5, size: "w-11 h-11" },
  { x: 72, delay: 2.2, duration: 6.5, size: "w-9 h-9" },
  { x: 90, delay: 3, duration: 7, size: "w-8 h-8" },
];

export default function PanditAnimation() {
  return (
    <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden">

      {/* ---- Floating Diyas on water (hidden on mobile) ---- */}
      {floatingDiyas.map((diya, i) => (
        <motion.div
          key={`diya-${i}`}
          className={`absolute bottom-[6%] hidden sm:block ${diya.size}`}
          style={{ left: `${diya.x}%` }}
          animate={{
            y: [0, -8, 2, -6, 0],
            x: [0, 6, -4, 8, 0],
            rotate: [-2, 3, -3, 2, -2],
          }}
          transition={{
            duration: diya.duration,
            delay: diya.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Diya SVG */}
          <svg viewBox="0 0 60 40" className="w-full h-full drop-shadow-lg">
            {/* Water reflection glow */}
            <ellipse cx="30" cy="38" rx="20" ry="4" fill="rgba(255,183,0,0.25)" />

            {/* Diya bowl */}
            <path
              d="M12 28 Q14 20 20 18 Q30 15 40 18 Q46 20 48 28 Q44 32 30 33 Q16 32 12 28Z"
              fill="#CD7F32"
              stroke="#B8860B"
              strokeWidth="0.5"
            />
            {/* Oil surface */}
            <ellipse cx="30" cy="23" rx="13" ry="5" fill="#D4AF37" opacity="0.7" />
            {/* Wick */}
            <line x1="30" y1="21" x2="30" y2="16" stroke="#5D4037" strokeWidth="1.5" strokeLinecap="round" />

            {/* Flame outer */}
            <motion.path
              d="M30 16 Q26 10 30 3 Q34 10 30 16Z"
              fill="url(#flameGrad)"
              animate={{
                d: [
                  "M30 16 Q26 10 30 3 Q34 10 30 16Z",
                  "M30 16 Q25 9 30 2 Q35 9 30 16Z",
                  "M30 16 Q27 11 30 4 Q33 11 30 16Z",
                  "M30 16 Q26 10 30 3 Q34 10 30 16Z",
                ],
              }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Flame inner */}
            <motion.path
              d="M30 16 Q28 12 30 7 Q32 12 30 16Z"
              fill="#FFF8E1"
              opacity="0.8"
              animate={{
                d: [
                  "M30 16 Q28 12 30 7 Q32 12 30 16Z",
                  "M30 16 Q27 11 30 6 Q33 11 30 16Z",
                  "M30 16 Q28 13 30 8 Q32 13 30 16Z",
                  "M30 16 Q28 12 30 7 Q32 12 30 16Z",
                ],
              }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Flame glow */}
            <motion.circle
              cx="30"
              cy="10"
              r="10"
              fill="rgba(255,183,0,0.35)"
              animate={{ r: [10, 14, 10], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />

            <defs>
              <linearGradient id="flameGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#FF6B00" />
                <stop offset="40%" stopColor="#FFB800" />
                <stop offset="100%" stopColor="#FFEB3B" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      ))}

      {/* ---- Rising golden ember sparks ---- */}
      {embers.map((p, i) => (
        <motion.div
          key={`ember-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            bottom: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: "radial-gradient(circle, #FFD54F, #FF9800)",
            boxShadow: `0 0 ${p.size * 5}px rgba(255, 183, 0, 0.6)`,
          }}
          animate={{
            y: [0, -100, -250],
            x: [0, p.drift, p.drift * 0.5],
            opacity: [0, 1, 0],
            scale: [0.3, 1, 0.2],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}

      {/* ---- Warm light bloom — bottom ---- */}
      <motion.div
        className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[90vw] h-[300px] rounded-full"
        style={{
          background: "radial-gradient(ellipse, rgba(255, 140, 0, 0.2), transparent 70%)",
        }}
        animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.05, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ---- Top divine light glow ---- */}
      <motion.div
        className="absolute -top-10 left-1/2 -translate-x-1/2 w-[60vw] h-[250px] rounded-full"
        style={{
          background: "radial-gradient(ellipse, rgba(212, 175, 55, 0.12), transparent 70%)",
        }}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
    </div>
  );
}
