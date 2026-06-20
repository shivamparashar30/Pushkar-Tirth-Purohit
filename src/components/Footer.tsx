"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { PHONE, PHONE_HREF, WHATSAPP_HREF, EMAIL, EMAIL_HREF, MAP_HREF } from "@/lib/constants";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Book Puja", href: "#book-puja" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Pind Daan", "Asthi Visarjan", "Pitra Dosh Nivaran",
  "Brahma Temple Puja", "Sukh Shanti Puja", "Tarpan Rituals",
];

export default function Footer() {
  const nav = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-footer-bg text-footer-text">
      <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-9 h-9 rounded-full bg-saffron-gradient flex items-center justify-center text-white font-bold text-sm shadow-md">Om</div>
              <div>
                <span className="font-bold text-white text-sm block">Teerth Purohit</span>
                <span className="text-[11px] text-gold">Pushkar Sarovar</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-footer-text/70 mb-4">
              Traditional Teerth Purohit family serving devotees at Pushkar for over 100 years.
            </p>
            <div className="flex gap-2.5">
              <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#25D366] transition-colors" aria-label="WhatsApp">
                <WhatsAppIcon size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#1877F2] transition-colors" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] transition-colors" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FF0000] transition-colors" aria-label="YouTube">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-bold text-sm mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.href}><button onClick={() => nav(l.href)} className="text-sm text-footer-text/60 hover:text-gold transition-colors">{l.label}</button></li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-sm mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s}><button onClick={() => nav("#services")} className="text-sm text-footer-text/60 hover:text-gold transition-colors">{s}</button></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-sm mb-4">Contact</h3>
            <div className="space-y-2.5">
              <a href={PHONE_HREF} className="flex items-center gap-2 text-sm text-footer-text/60 hover:text-gold transition-colors"><Phone size={14} /> {PHONE}</a>
              <a href={EMAIL_HREF} className="flex items-center gap-2 text-sm text-footer-text/60 hover:text-gold transition-colors"><Mail size={14} /> {EMAIL}</a>
              <a href={MAP_HREF} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-footer-text/60 hover:text-gold transition-colors"><MapPin size={14} /> Pushkar, Rajasthan</a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-center">
          <p className="text-sm text-footer-text/40">&copy; 2026 Traditional Teerth Purohit Family, Pushkar Rajasthan. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
