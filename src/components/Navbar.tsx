"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Menu, X, Sun, Moon, Phone } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import LanguageSelector from "./LanguageSelector";
import { PHONE_HREF, WHATSAPP_HREF } from "@/lib/constants";
import { useTranslation } from "@/lib/i18n";

const navLinks = [
  { href: "#home", key: "nav.home", label: "Home" },
  { href: "#about", key: "nav.about", label: "About" },
  { href: "#services", key: "nav.services", label: "Services" },
  { href: "#gallery", key: "nav.gallery", label: "Gallery" },
  { href: "#book-puja", key: "nav.bookPuja", label: "Book Puja" },
  { href: "#contact", key: "nav.contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const nav = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-nav-scrolled shadow-md backdrop-blur-md py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => nav("#home")} className="flex items-center gap-2.5">

            <div className="hidden sm:block">
              <span className={`font-bold text-sm leading-tight block transition-colors ${scrolled ? "text-text-heading" : "text-white"}`}>
                Teerth Purohit
              </span>
              <span className={`text-[11px] transition-colors ${scrolled ? "text-gold" : "text-gold-light"}`}>
                Pushkar Sarovar
              </span>
            </div>
          </button>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((l) => (
              <button
                key={l.href}
                onClick={() => nav(l.href)}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors hover:text-saffron ${
                  scrolled ? "text-foreground" : "text-white/90"
                }`}
              >
                {t(l.key, l.label)}
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex">
              <LanguageSelector scrolled={scrolled} />
            </div>
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className={`p-2 rounded-full transition-colors ${scrolled ? "text-foreground hover:bg-gold/10" : "text-white hover:bg-white/10"}`}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}
            <a href={PHONE_HREF} className="hidden md:flex items-center gap-1.5 px-4 py-2 bg-saffron-gradient text-white text-sm font-medium rounded-full hover:shadow-lg transition-all">
              <Phone size={14} /> {t("common.call", "Call")}
            </a>
            <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-1.5 px-4 py-2 bg-[#25D366] text-white text-sm font-medium rounded-full hover:shadow-lg transition-all">
              <WhatsAppIcon size={14} /> {t("common.whatsapp", "WhatsApp")}
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? "text-foreground" : "text-white"}`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu — Full-screen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] lg:hidden bg-background/97 backdrop-blur-xl flex flex-col items-center justify-center"
          >
            {/* Close button */}
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-5 right-5 p-2 text-foreground hover:text-saffron transition-colors"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>

            {/* Decorative divider */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-px bg-gradient-to-r from-transparent to-gold" />
              <span className="text-gold text-xl">&#x0950;</span>
              <div className="w-10 h-px bg-gradient-to-l from-transparent to-gold" />
            </div>

            {/* Language selector (mobile) */}
            <div className="mb-4">
              <LanguageSelector scrolled={true} />
            </div>

            {/* Nav links */}
            <nav className="flex flex-col items-center gap-1">
              {navLinks.map((l, i) => (
                <motion.button
                  key={l.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                  onClick={() => nav(l.href)}
                  className="text-xl font-semibold text-foreground hover:text-saffron transition-colors py-2.5 px-6"
                >
                  {t(l.key, l.label)}
                </motion.button>
              ))}
            </nav>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 flex flex-col gap-3 w-60"
            >
              <a
                href={PHONE_HREF}
                className="flex items-center justify-center gap-2 py-3 bg-saffron-gradient text-white font-medium rounded-full shadow-lg"
              >
                <Phone size={16} /> {t("common.callNow", "Call Now")}
              </a>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 bg-[#25D366] text-white font-medium rounded-full shadow-lg"
              >
                <WhatsAppIcon size={16} /> {t("common.whatsapp", "WhatsApp")}
              </a>
            </motion.div>

            {/* Bottom decorative line */}
            <div className="absolute bottom-8 w-20 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
