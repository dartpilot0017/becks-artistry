import React, { useEffect, useRef } from "react";
import "../GrainEffect.css";
import { Typewriter } from "react-simple-typewriter";
import { useNavigate } from "react-router-dom";
// import GrainEffect from "./BackgroundEffect";

const HeroSection: React.FC = () => {
    const navigate = useNavigate();

    const handleRoute = () => {
      navigate('/portfolio');
    };

    const appRef = useRef(null);
    const toRef = useRef(null);

  useEffect(() => {
    const moveGradient = (event) => {
      const winWidth = window.innerWidth;
      const winHeight = window.innerHeight;

      const mouseX = Math.round((event.pageX / winWidth) * 100);
      const mouseY = Math.round((event.pageY / winHeight) * 100);

      if (appRef) {
        appRef.current.style.setProperty(
          "--mouse-x", mouseX.toString() + "%"
        );
        appRef.current.style.setProperty(
          "--mouse-y", mouseY.toString() + "%"
        );
        appRef.current.style.setProperty(
          "scroll-behaviour", "smooth"
        );
      }
    }


    document.addEventListener("mousemove", moveGradient);
    return function cleanUP() {
      document.removeEventListener("mousemove", moveGradient);
    }
  }, [appRef])
    
  return (
    <div className="grained" ref={appRef}>
        <div className=" text-black h-screen flex flex-col items-center justify-center">
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
      <button onClick={handleRoute} className="mt-6 bg-purple-700 text-white px-6 py-2 rounded-lg hover:bg-purple-500 transition">
        Explore Portfolio
      </button>
    </div>  
    </div>
  );
};

export default HeroSection;
