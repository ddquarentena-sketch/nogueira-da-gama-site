import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import PracticeAreas from "@/components/PracticeAreas";
import CriminalDuty from "@/components/CriminalDuty";
import Insights from "@/components/Insights";
import CTABanner from "@/components/CTABanner";
import Team from "@/components/Team";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <PracticeAreas />
      <CriminalDuty />
      <Insights />
      <CTABanner />
      <Team />
      <Location />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
