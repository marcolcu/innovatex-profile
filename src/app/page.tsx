import HeroSection from "@/sections/home/HeroSection";
import AboutSection from "@/sections/home/AboutSection";
import ExpertiseSection from "@/sections/home/ExpertiseSection";
import WorkSection from "@/sections/home/WorkSection";
import ContactSection from "@/sections/home/ContactSection";


export default function Home() {
  return (
    <div>
      <section id="home">
        <HeroSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="expertise">
        <ExpertiseSection />
      </section>
      <section id="work">
        <WorkSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>

    </div>
  );
}
