import HeroSection from "@/sections/home/HeroSection";
import AboutSection from "@/sections/home/AboutSection";
import ExpertiseSection from "@/sections/home/ExpertiseSection";
import WorkSection from "@/sections/home/WorkSection";
import ContactSection from "@/sections/home/ContactSection";


export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
      <WorkSection />
      <ContactSection />
    </div>
  );
}
