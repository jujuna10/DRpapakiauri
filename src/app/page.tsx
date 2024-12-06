import Appointment from "@/components/Appointment";
import Experience from "@/components/Experience";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="flex flex-col gap-24 bg-[rgb(255,250,250)] overflow-x-hidden">
      <div className="bg-[url(/background.png)] bg-cover pb-12 pr-12 sm:pr-0 w-[120%] overflow-x-hidden">
        <Navbar />
        <HeroSection />
      </div>
      <Services />
      <Experience />
      <Faq />
      <Appointment />
      <Footer />
    </div>
  );
}
