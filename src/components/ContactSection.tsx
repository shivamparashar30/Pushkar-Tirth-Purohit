"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { PHONE, PHONE_HREF, WHATSAPP_HREF, EMAIL, EMAIL_HREF, LOCATION, MAP_HREF } from "@/lib/constants";
import SectionWrapper, { SectionHeading } from "./SectionWrapper";
import { useTranslation } from "@/lib/i18n";

export default function ContactSection() {
  const { t } = useTranslation();

  return (
    <SectionWrapper id="contact" alt>
      <SectionHeading title={t("contact.title", "Contact Us")} subtitle={t("contact.subtitle", "Reach out for puja bookings, queries, or spiritual guidance")} />

      <div className="grid lg:grid-cols-5 gap-8 items-start">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 space-y-4"
        >
          <a href={PHONE_HREF} className="flex items-center gap-4 bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-md hover:-translate-y-0.5 transition-all">
            <div className="w-10 h-10 rounded-lg bg-saffron/10 text-saffron flex items-center justify-center"><Phone size={20} /></div>
            <div>
              <p className="text-xs text-text-muted">{t("contact.phone", "Phone")}</p>
              <p className="font-medium text-foreground">{PHONE}</p>
            </div>
          </a>

          <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-md hover:-translate-y-0.5 transition-all">
            <div className="w-10 h-10 rounded-lg bg-[#25D366]/10 text-[#25D366] flex items-center justify-center"><WhatsAppIcon size={20} /></div>
            <div>
              <p className="text-xs text-text-muted">{t("contact.whatsapp", "WhatsApp")}</p>
              <p className="font-medium text-foreground">{PHONE}</p>
            </div>
          </a>

          <a href={EMAIL_HREF} className="flex items-center gap-4 bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-md hover:-translate-y-0.5 transition-all">
            <div className="w-10 h-10 rounded-lg bg-red-500/10 text-red-500 flex items-center justify-center"><Mail size={20} /></div>
            <div>
              <p className="text-xs text-text-muted">{t("contact.email", "Email")}</p>
              <p className="font-medium text-foreground">{EMAIL}</p>
            </div>
          </a>

          <a href={MAP_HREF} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-md hover:-translate-y-0.5 transition-all">
            <div className="w-10 h-10 rounded-lg bg-purple-500/10 text-purple-500 flex items-center justify-center"><MapPin size={20} /></div>
            <div>
              <p className="text-xs text-text-muted">{t("contact.location", "Location")}</p>
              <p className="font-medium text-foreground">{LOCATION}</p>
            </div>
          </a>

          {/* Quick Actions */}
          <div className="flex gap-2.5 pt-2">
            <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#25D366] text-white font-medium rounded-full text-sm hover:shadow-lg transition-all">
              <WhatsAppIcon size={16} /> WhatsApp
            </a>
            <a href={PHONE_HREF}
              className="flex-1 flex items-center justify-center gap-2 py-3 bg-saffron-gradient text-white font-medium rounded-full text-sm hover:shadow-lg transition-all">
              <Phone size={16} /> Call
            </a>
          </div>
        </motion.div>

        {/* Google Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-3"
        >
          <div className="bg-card-bg border border-card-border rounded-2xl overflow-hidden">
            <div className="p-5">
              <h3 className="text-lg font-bold text-text-heading mb-1">{t("contact.visitLocation", "Visit Our Location")}</h3>
              <p className="text-sm text-text-muted">{LOCATION}</p>
            </div>
            <div className="relative h-[320px] sm:h-[380px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14310.851752082677!2d74.54937535!3d26.4897285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396be70644a8f02d%3A0x9e3c0e15ac939dca!2sPushkar%20Lake!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" title="Pushkar Location" className="absolute inset-0"
              />
            </div>
          </div>
          <div className="flex gap-3 mt-3">
            <a href={MAP_HREF} target="_blank" rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-card-bg border border-card-border rounded-xl hover:border-saffron hover:text-saffron transition-all text-sm font-medium">
              <MapPin size={15} /> {t("contact.openMaps", "Open Maps")}
            </a>
            <a href={MAP_HREF} target="_blank" rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-saffron/10 text-saffron border border-saffron/15 rounded-xl hover:bg-saffron hover:text-white transition-all text-sm font-medium">
              {t("contact.getDirections", "Get Directions")}
            </a>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
