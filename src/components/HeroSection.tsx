import React from "react";
import "../GrainEffect.css";
import { Typewriter } from "react-simple-typewriter";
// import GrainEffect from "./BackgroundEffect";

const HeroSection: React.FC = () => {
  return (
    <div>
        <div className="bg-black text-white h-screen flex flex-col items-center justify-center">
      <div className="text-4xl font-bold text-center">
        <Typewriter
          words={["Welcome to Becks Artistry", "Unleashing Your Inner Artist"]}
          loop={0} // Infinite loop
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={2000}
        />
      </div>
      <p className="mt-4 text-lg">Discover your creativity through art.</p>
      <button className="mt-6 bg-purple-700 text-white px-6 py-2 rounded-lg hover:bg-purple-500 transition">
        Explore Portfolio
      </button>
    </div>  
    </div>
  );
};

export default HeroSection;
