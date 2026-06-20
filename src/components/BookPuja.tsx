"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { WHATSAPP_NUMBER, PHONE_HREF } from "@/lib/constants";
import SectionWrapper, { SectionHeading } from "./SectionWrapper";
import { useTranslation } from "@/lib/i18n";

const pujaTypes = [
  "Sukh Shanti Puja", "Pitra Dosh Puja", "Pind Daan", "Asthi Visarjan",
  "Brahma Temple Puja", "Grah Shanti Puja", "Bhog Puja", "Narayan Bali Puja",
  "Tarpan", "Amavasya Puja", "Purnima Puja", "Pushkar Snan Sankalp", "Other",
];

export default function BookPuja() {
  const { t } = useTranslation();
  const [form, setForm] = useState({
    fullName: "", mobile: "", whatsapp: "", email: "",
    city: "", state: "", country: "India",
    dateOfVisit: "", familyMembers: "", pujaType: "", message: "",
  });
  const [sent, setSent] = useState(false);

  const update = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Namaste Pandit Ji,\n\nI would like to book a Puja at Pushkar.\n\nName: ${form.fullName}\nMobile: ${form.mobile}\nCity: ${form.city}, ${form.state}, ${form.country}\nDate: ${form.dateOfVisit}\nFamily Members: ${form.familyMembers}\nPuja: ${form.pujaType}\nMessage: ${form.message}\n\nPlease guide me.`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <SectionWrapper id="book-puja">
      <SectionHeading
        title={t("book.title", "Book Your Puja")}
        subtitle={t("book.subtitle", "Fill in details below and we will connect with you on WhatsApp")}
      />

      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="bg-card-bg border border-card-border rounded-2xl p-6 sm:p-8 shadow-lg"
        >
          {sent ? (
            <div className="text-center py-12">
              <div className="text-4xl mb-3">🙏</div>
              <h3 className="text-xl font-bold text-text-heading mb-1">{t("book.thankYou", "Thank You!")}</h3>
              <p className="text-text-muted">{t("book.thankYouMsg", "Your request has been sent via WhatsApp.")}</p>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">{t("book.fullName", "Full Name *")}</label>
                  <input type="text" name="fullName" value={form.fullName} onChange={update} required placeholder={t("book.namePlaceholder", "Your full name")} className="form-input" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">{t("book.mobile", "Mobile Number *")}</label>
                  <input type="tel" name="mobile" value={form.mobile} onChange={update} required placeholder="+91 8112270790" className="form-input" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">{t("book.whatsappNumber", "WhatsApp Number")}</label>
                  <input type="tel" name="whatsapp" value={form.whatsapp} onChange={update} placeholder={t("book.whatsappPlaceholder", "If different from mobile")} className="form-input" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">{t("book.email", "Email")}</label>
                  <input type="email" name="email" value={form.email} onChange={update} placeholder="your@email.com" className="form-input" />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">{t("book.city", "City *")}</label>
                  <input type="text" name="city" value={form.city} onChange={update} required placeholder={t("book.city", "City")} className="form-input" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">{t("book.state", "State")}</label>
                  <input type="text" name="state" value={form.state} onChange={update} placeholder={t("book.state", "State")} className="form-input" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">{t("book.country", "Country *")}</label>
                  <input type="text" name="country" value={form.country} onChange={update} required className="form-input" />
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">{t("book.date", "Date of Visit *")}</label>
                  <input type="date" name="dateOfVisit" value={form.dateOfVisit} onChange={update} required className="form-input" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">{t("book.familyMembers", "Family Members")}</label>
                  <input type="number" name="familyMembers" value={form.familyMembers} onChange={update} placeholder={t("book.countPlaceholder", "Count")} min="1" className="form-input" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">{t("book.pujaType", "Puja Type *")}</label>
                  <select name="pujaType" value={form.pujaType} onChange={update} required className="form-input">
                    <option value="">{t("book.selectPuja", "Select Puja")}</option>
                    {pujaTypes.map((p) => <option key={p} value={p}>{p}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">{t("book.message", "Message")}</label>
                <textarea name="message" value={form.message} onChange={update} placeholder={t("book.messagePlaceholder", "Any special requirements...")} rows={3} className="form-input resize-none" />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <button type="submit"
                  className="flex-1 py-3.5 bg-saffron-gradient text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all">
                  {t("book.bookWhatsApp", "Book via WhatsApp")}
                </button>
                <a href={PHONE_HREF}
                  className="flex-1 py-3.5 border-2 border-saffron text-saffron font-semibold rounded-full hover:bg-saffron hover:text-white transition-all text-center">
                  {t("book.callToBook", "Call to Book")}
                </a>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
