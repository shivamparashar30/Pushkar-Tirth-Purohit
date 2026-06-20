"use client";

import { useTranslation, languages } from "@/lib/i18n";

export default function LanguageSelector({ scrolled }: { scrolled: boolean }) {
  const { lang, setLang } = useTranslation();

  return (
    <div className="flex items-center gap-1">
      {languages.map((l) => (
        <button
          key={l.code}
          onClick={() => setLang(l.code)}
          className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
            lang === l.code
              ? "bg-saffron text-white shadow-sm"
              : scrolled
                ? "text-foreground/70 hover:bg-gold/10 hover:text-foreground"
                : "text-white/70 hover:bg-white/10 hover:text-white"
          }`}
        >
          {l.flag} {l.code === "hi" ? "हिन्दी" : "EN"}
        </button>
      ))}
    </div>
  );
}
