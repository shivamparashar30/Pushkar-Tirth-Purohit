"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const particles = [
  { x: 8, y: 30, size: 2.5, dur: 7, delay: 0 },
  { x: 20, y: 55, size: 2, dur: 9, delay: 0.5 },
  { x: 35, y: 40, size: 3, dur: 6, delay: 1 },
  { x: 50, y: 65, size: 2, dur: 8, delay: 0.3 },
  { x: 65, y: 35, size: 2.5, dur: 7, delay: 1.5 },
  { x: 78, y: 50, size: 2, dur: 9, delay: 0.8 },
  { x: 88, y: 42, size: 3, dur: 6.5, delay: 2 },
  { x: 42, y: 25, size: 2, dur: 8, delay: 1.2 },
  { x: 72, y: 60, size: 2.5, dur: 7, delay: 0.6 },
  { x: 15, y: 48, size: 2, dur: 9, delay: 1.8 },
];

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "";
    }, 2300);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center"
          style={{
            background:
              "radial-gradient(ellipse at 50% 55%, rgba(160,90,20,0.12) 0%, transparent 55%), linear-gradient(180deg, #050a18 0%, #0d1730 30%, #251810 65%, #120d08 100%)",
          }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Floating golden particles */}
          {particles.map((p, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                width: p.size,
                height: p.size,
                background: "radial-gradient(circle, #FFD54F, #FF9800)",
                boxShadow: `0 0 ${p.size * 4}px rgba(255,183,0,0.4)`,
              }}
              animate={{
                y: [0, -80, -180],
                opacity: [0, 0.7, 0],
                scale: [0.3, 1, 0.3],
              }}
              transition={{
                duration: p.dur,
                delay: p.delay,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
          ))}

          {/* Main scene */}
          <motion.div
            className="relative w-[94vw] max-w-[750px]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <svg
              viewBox="0 0 800 450"
              className="w-full h-auto"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient id="lsSky" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#0a1428" />
                  <stop offset="30%" stopColor="#141840" />
                  <stop offset="55%" stopColor="#3a2015" />
                  <stop offset="75%" stopColor="#b86820" />
                  <stop offset="88%" stopColor="#e09530" />
                  <stop offset="100%" stopColor="#f0c050" />
                </linearGradient>
                <linearGradient id="lsWater" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#1a2040" stopOpacity="0.9" />
                  <stop offset="40%" stopColor="#101828" />
                  <stop offset="100%" stopColor="#080c18" />
                </linearGradient>
                <radialGradient id="lsSun" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FFE082" stopOpacity="0.95" />
                  <stop offset="30%" stopColor="#FFB300" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#FF8F00" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="lsFlame" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#E65100" />
                  <stop offset="40%" stopColor="#FF9800" />
                  <stop offset="100%" stopColor="#FFF176" />
                </linearGradient>
                <filter id="lsGlow">
                  <feGaussianBlur stdDeviation="3" result="b" />
                  <feMerge>
                    <feMergeNode in="b" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id="lsSoft">
                  <feGaussianBlur stdDeviation="6" />
                </filter>
              </defs>

              {/* Sky */}
              <rect width="800" height="240" fill="url(#lsSky)" />

              {/* Stars */}
              <g opacity="0.5">
                <circle cx="100" cy="35" r="1.2" fill="#fff" />
                <circle cx="220" cy="55" r="1" fill="#fff" />
                <circle cx="380" cy="25" r="1.5" fill="#fff" />
                <circle cx="500" cy="45" r="1" fill="#fff" />
                <circle cx="620" cy="30" r="1.3" fill="#fff" />
                <circle cx="720" cy="60" r="1" fill="#fff" />
                <circle cx="160" cy="75" r="0.8" fill="#fff" />
                <circle cx="550" cy="70" r="0.9" fill="#fff" />
              </g>

              {/* Sun glow */}
              <motion.circle
                cx="400"
                cy="230"
                r="70"
                fill="url(#lsSun)"
                filter="url(#lsSoft)"
                initial={{ opacity: 0, r: 40 }}
                animate={{ opacity: 1, r: 70 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              />
              {/* Sun disk */}
              <motion.circle
                cx="400"
                cy="228"
                r="22"
                fill="#FFE082"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.75 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              />

              {/* Left ghats */}
              <motion.path
                d="M0 240 L0 140 L25 140 L25 130 L60 130 L60 120 L95 120 L95 155 L125 155 L125 170 L160 170 L160 182 L195 182 L195 195 L230 195 L230 210 L270 210 L270 225 L310 225 L310 240Z"
                fill="#0d0a06"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 0.95, y: 0 }}
                transition={{ delay: 0.15, duration: 0.6 }}
              />

              {/* Temple — left ghat */}
              <motion.g
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.5 }}
              >
                <rect x="55" y="120" width="42" height="35" fill="#0d0a06" />
                <path d="M60 120 L76 60 L92 120" fill="#0d0a06" />
                <ellipse cx="76" cy="63" rx="7" ry="3" fill="#0d0a06" />
                <circle cx="76" cy="57" r="4" fill="#B8860B" opacity="0.75" />

                {/* Saffron flag — breeze */}
                <line
                  x1="76"
                  y1="57"
                  x2="76"
                  y2="35"
                  stroke="#5D4037"
                  strokeWidth="1.5"
                />
                <motion.path
                  d="M76 37 L96 42 L76 47"
                  fill="#E65100"
                  opacity="0.85"
                  animate={{
                    d: [
                      "M76 37 L96 42 L76 47",
                      "M76 37 L99 40 L76 45",
                      "M76 37 L94 43 L76 48",
                      "M76 37 L98 41 L76 46",
                      "M76 37 L96 42 L76 47",
                    ],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.g>

              {/* Right ghats */}
              <motion.path
                d="M490 240 L490 225 L530 225 L530 210 L570 210 L570 195 L605 195 L605 182 L640 182 L640 170 L675 170 L675 155 L705 155 L705 120 L740 120 L740 130 L775 130 L775 140 L800 140 L800 240Z"
                fill="#0d0a06"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 0.95, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              />

              {/* Temple — right ghat */}
              <motion.g
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <rect x="700" y="120" width="35" height="35" fill="#0d0a06" />
                <path d="M704 120 L717 72 L730 120" fill="#0d0a06" />
                <ellipse cx="717" cy="75" rx="6" ry="2.5" fill="#0d0a06" />
                <circle cx="717" cy="70" r="3.5" fill="#B8860B" opacity="0.65" />
              </motion.g>

              {/* Pandit — seated on left ghat */}
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                {/* Seated lower body */}
                <path
                  d="M240 225 Q238 214 242 206 Q248 198 258 195 Q268 198 272 206 Q276 214 274 225 Q268 228 258 229 Q248 228 240 225Z"
                  fill="#0d0a06"
                />
                {/* Cross legs */}
                <path
                  d="M236 222 Q230 226 226 228 L290 228 Q284 226 278 222"
                  fill="#0d0a06"
                />
                {/* Torso */}
                <path
                  d="M248 207 Q251 192 256 187 Q260 184 258 188 Q264 192 268 207"
                  fill="#0d0a06"
                />
                {/* Head */}
                <circle cx="258" cy="180" r="9.5" fill="#0d0a06" />
                {/* Shikha */}
                <path d="M255 170 Q258 164 261 170" fill="#0d0a06" />
                {/* Raised right arm */}
                <path
                  d="M266 198 Q274 190 280 182"
                  stroke="#0d0a06"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                  fill="none"
                />
                <circle cx="281" cy="180" r="3.5" fill="#0d0a06" />

                {/* Saffron cloth — breeze */}
                <motion.path
                  d="M245 203 Q238 198 230 203 Q224 210 218 218"
                  fill="none"
                  stroke="#CC5500"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  opacity="0.75"
                  animate={{
                    d: [
                      "M245 203 Q238 198 230 203 Q224 210 218 218",
                      "M245 203 Q236 196 226 200 Q218 209 212 220",
                      "M245 203 Q239 199 232 204 Q226 211 220 219",
                      "M245 203 Q238 198 230 203 Q224 210 218 218",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.g>

              {/* Tiny diya lights on ghats */}
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <circle cx="135" cy="168" r="2" fill="#FF9800" opacity="0.6" filter="url(#lsGlow)" />
                <circle cx="205" cy="193" r="1.5" fill="#FFB300" opacity="0.5" filter="url(#lsGlow)" />
                <circle cx="585" cy="193" r="1.5" fill="#FFB300" opacity="0.45" filter="url(#lsGlow)" />
                <circle cx="655" cy="168" r="2" fill="#FF9800" opacity="0.5" filter="url(#lsGlow)" />
              </motion.g>

              {/* Horizon glow */}
              <motion.rect
                x="0"
                y="237"
                width="800"
                height="6"
                fill="#d08830"
                opacity="0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              />

              {/* Water */}
              <rect x="0" y="240" width="800" height="210" fill="url(#lsWater)" />

              {/* Sun reflection on water */}
              <motion.ellipse
                cx="400"
                cy="320"
                rx="30"
                ry="80"
                fill="url(#lsSun)"
                opacity="0.25"
                animate={{
                  opacity: [0.15, 0.3, 0.15],
                  ry: [75, 85, 75],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Water shimmer lines */}
              <motion.line
                x1="120" y1="275" x2="280" y2="275"
                stroke="rgba(255,200,100,0.12)"
                strokeWidth="0.8"
                animate={{ opacity: [0.08, 0.16, 0.08] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.line
                x1="350" y1="300" x2="500" y2="300"
                stroke="rgba(255,200,100,0.1)"
                strokeWidth="0.6"
                animate={{ opacity: [0.06, 0.14, 0.06] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.8 }}
              />
              <motion.line
                x1="200" y1="340" x2="400" y2="340"
                stroke="rgba(255,200,100,0.08)"
                strokeWidth="0.5"
                animate={{ opacity: [0.04, 0.1, 0.04] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 1.2 }}
              />
              <motion.line
                x1="450" y1="370" x2="650" y2="370"
                stroke="rgba(255,200,100,0.06)"
                strokeWidth="0.5"
                animate={{ opacity: [0.03, 0.08, 0.03] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
              />

              {/* Floating diya on water */}
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <motion.g
                  animate={{
                    y: [0, -3, 1, -2, 0],
                    x: [0, 2, -1, 3, 0],
                    rotate: [-1, 1.5, -1.5, 1, -1],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{ transformOrigin: "420px 270px" }}
                >
                  {/* Water glow */}
                  <ellipse
                    cx="420"
                    cy="280"
                    rx="30"
                    ry="10"
                    fill="rgba(255,160,0,0.15)"
                    filter="url(#lsSoft)"
                  />
                  {/* Bowl */}
                  <path
                    d="M408 268 Q410 259 417 256 Q420 254 423 256 Q430 259 432 268 Q428 272 420 273 Q412 272 408 268Z"
                    fill="#CD7F32"
                  />
                  <ellipse
                    cx="420"
                    cy="263"
                    rx="9"
                    ry="3.5"
                    fill="#D4AF37"
                    opacity="0.65"
                  />
                  {/* Wick */}
                  <line
                    x1="420"
                    y1="261"
                    x2="420"
                    y2="254"
                    stroke="#4E342E"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                  {/* Flame */}
                  <motion.path
                    d="M420 254 Q416 246 420 236 Q424 246 420 254Z"
                    fill="url(#lsFlame)"
                    filter="url(#lsGlow)"
                    animate={{
                      d: [
                        "M420 254 Q416 246 420 236 Q424 246 420 254Z",
                        "M420 254 Q415 245 420 234 Q425 245 420 254Z",
                        "M420 254 Q417 247 420 238 Q423 247 420 254Z",
                        "M420 254 Q416 246 420 236 Q424 246 420 254Z",
                      ],
                    }}
                    transition={{
                      duration: 0.9,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  {/* Flame core */}
                  <motion.path
                    d="M420 254 Q418.5 249 420 242 Q421.5 249 420 254Z"
                    fill="#FFF8E1"
                    opacity="0.75"
                    animate={{
                      d: [
                        "M420 254 Q418.5 249 420 242 Q421.5 249 420 254Z",
                        "M420 254 Q418 248 420 240 Q422 248 420 254Z",
                        "M420 254 Q419 250 420 244 Q421 250 420 254Z",
                        "M420 254 Q418.5 249 420 242 Q421.5 249 420 254Z",
                      ],
                    }}
                    transition={{
                      duration: 0.7,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  {/* Flame halo */}
                  <motion.circle
                    cx="420"
                    cy="244"
                    r="15"
                    fill="rgba(255,183,0,0.25)"
                    animate={{
                      r: [14, 19, 14],
                      opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.g>

                {/* Ripples from diya */}
                <motion.ellipse
                  cx="420"
                  cy="275"
                  rx="8"
                  ry="2.5"
                  fill="none"
                  stroke="rgba(255,200,100,0.2)"
                  strokeWidth="0.6"
                  animate={{
                    rx: [8, 35, 65],
                    ry: [2.5, 5, 9],
                    opacity: [0.25, 0.1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
                <motion.ellipse
                  cx="420"
                  cy="275"
                  rx="8"
                  ry="2.5"
                  fill="none"
                  stroke="rgba(255,200,100,0.15)"
                  strokeWidth="0.5"
                  animate={{
                    rx: [8, 35, 65],
                    ry: [2.5, 5, 9],
                    opacity: [0.2, 0.08, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeOut",
                    delay: 1.2,
                  }}
                />
              </motion.g>

              {/* Birds */}
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4, x: [0, 15, 30] }}
                transition={{ delay: 0.6, duration: 3 }}
              >
                <path
                  d="M320 80 Q325 74 330 80 Q335 74 340 80"
                  fill="none"
                  stroke="#2a2040"
                  strokeWidth="1.2"
                />
                <path
                  d="M350 68 Q354 63 358 68 Q362 63 366 68"
                  fill="none"
                  stroke="#2a2040"
                  strokeWidth="1"
                />
                <path
                  d="M308 90 Q311 86 314 90 Q317 86 320 90"
                  fill="none"
                  stroke="#2a2040"
                  strokeWidth="0.8"
                  opacity="0.7"
                />
              </motion.g>
            </svg>
          </motion.div>

          {/* Ornamental divider */}
          <motion.div
            className="flex items-center gap-3 mt-5 sm:mt-7"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent to-[#C5A572]" />
            <span className="text-[#D4AF37] text-lg font-serif">
              &#x0950;
            </span>
            <div className="w-12 sm:w-16 h-px bg-gradient-to-l from-transparent to-[#C5A572]" />
          </motion.div>

          {/* Text */}
          <motion.p
            className="text-[#D4AF37] text-xs sm:text-sm md:text-base font-semibold tracking-[0.15em] mt-4 sm:mt-5 px-4 text-center"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.5 }}
          >
            100+ Years Traditional Teerth Purohit Family
          </motion.p>
          <motion.p
            className="text-white/50 text-[10px] sm:text-xs md:text-sm tracking-[0.25em] mt-1.5 sm:mt-2 uppercase"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.5 }}
          >
            Pushkar Sarovar, Rajasthan
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
