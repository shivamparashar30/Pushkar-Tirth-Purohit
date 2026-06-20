"use client";

import { motion } from "framer-motion";
import WhatsAppIcon from "./WhatsAppIcon";
import { WHATSAPP_NUMBER } from "@/lib/constants";
import { useTranslation } from "@/lib/i18n";

export default function WhatsAppButton() {
  const { t } = useTranslation();
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Namaste Pandit Ji,\nI would like to book a Puja at Pushkar.\n\nName:\nCity:\nPuja Type:\nPreferred Date:\n\nPlease guide me.")}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-xl shadow-[#25D366]/30 hover:scale-110 transition-transform duration-200 group"
      aria-label="Chat on WhatsApp"
    >
      <span className="absolute w-full h-full rounded-full bg-[#25D366]/30 animate-ping" />
      <span className="relative z-10"><WhatsAppIcon size={26} /></span>
      <span className="absolute right-full mr-3 bg-white dark:bg-gray-800 text-foreground text-sm font-medium px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        {t("common.bookOnWhatsApp", "Book on WhatsApp")}
      </span>
    </motion.a>
  );
}
