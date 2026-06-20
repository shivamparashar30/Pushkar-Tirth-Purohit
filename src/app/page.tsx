"use client";

import { LanguageProvider } from "@/lib/i18n";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutPushkar from "@/components/AboutPushkar";
import PujaServices from "@/components/PujaServices";
import BrahmaTemple from "@/components/BrahmaTemple";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import BookPuja from "@/components/BookPuja";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <LanguageProvider>
      <LoadingScreen />
      <Navbar />
      <main>
        <HeroSection />
        <AboutPushkar />
        <PujaServices />
        <BrahmaTemple />
        <Gallery />
        <Testimonials />
        <BookPuja />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </LanguageProvider>
  );
}
