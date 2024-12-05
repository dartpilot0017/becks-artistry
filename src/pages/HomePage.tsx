import React from "react";
import HeroSection from "../components/HeroSection";
import PortfolioShowcase from "../components/PortfolioShowcase";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import GrainEffect from "../components/BackgroundEffect";

const HomePage: React.FC = () => {

    return (
      <div className="relative overflow-hidden">
      {/* Fixed background effect */}
      <GrainEffect />

      {/* Main content */}
      <main className="relative">
        <HeroSection />
        <div className="h-screen w-full"  />
        <PortfolioShowcase />
        <AboutSection />
        <ContactSection />
      </main>
    </div>
    )
};

export default HomePage;
