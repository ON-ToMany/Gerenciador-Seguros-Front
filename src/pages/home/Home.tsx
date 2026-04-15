import HeroSection from "../../components/home/HeroSection"
import About from "../../components/home/About"
import ContactSection from "../../components/home/ContactSection";
import SectionCTA from "../../components/home/SectionCTA";

function Home() {
  return (
    <div>
      <HeroSection />
      <About />
      <ContactSection />
      <SectionCTA />
    </div>
  )
}

export default Home;

