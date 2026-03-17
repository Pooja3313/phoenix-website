import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ValuesSection from "@/components/ValuesSection";
import PoundAnimation from "@/components/PoundAnimation";
import TestimonialSection from "@/components/TestimonialSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTASection from "@/components/CTASection";
import AboutSection from "@/components/AboutSection";
import StatsCounter from "@/components/StatsCounter";
import DedicatedTeam from "@/components/DedicatedTeam";
import MissionVision from "@/components/MissionVision";
import LogoSlider from "@/components/LogoSlider";


const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ValuesSection />
      <StatsCounter/>
      <DedicatedTeam />
      <PoundAnimation />
      <TestimonialSection />
      <LogoSlider />
      <MissionVision />

      <WhyChooseUs />
      <CTASection />
    </>
  );
};

export default Home;

