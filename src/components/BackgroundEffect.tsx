import React, { useEffect, useState } from 'react';
import '../GrainEffect.css';
import logo from '../assets/logo.jpg';


const GrainEffect: React.FC = () => {
  const [scale, setScale] = useState(1); // Default scale is 1

  useEffect(() => {
    const target = document.querySelector('.h-screen');

    if (!target) return;

    // const handleScroll = () => {
    //   const rect = target.getBoundingClientRect();
    //   const viewportHeight = window.innerHeight;

    //   if (rect.top <= viewportHeight && rect.bottom >= 0) {
    //     // Calculate the scaling factor based on visibility percentage
    //     const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
    //     const visibilityPercentage = visibleHeight / viewportHeight;

    //     // Scale from 0.5 (50% visible) to 1 (fully visible)
    //     const newScale = 0.3 + visibilityPercentage * 0.8;
    //     setScale(newScale);
    //   }
    // };

    const handleScroll = () => {
      const rect = target.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Calculate visibility factor: -1 (top off-screen) to 1 (bottom off-screen)
      const middlePoint = rect.top + rect.height / 2 - viewportHeight / 2;
      const visibilityFactor = Math.min(1, Math.max(-1, -middlePoint / (viewportHeight / 2)));

      // Scale based on visibilityFactor (-1 to 1 maps to 0.8 to 1.2)
      const newScale = 0.7 + visibilityFactor * 0.5;
      setScale(newScale);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger on mount to ensure correct scale

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (

    // <div
    //   className="bg-no-repeat bg-white bg-contain flex content-center fixed inset-0 -z-10 pointer-events-none"
    // style={{
    //   background: `url(${logo})`,
    //   // backgroundSize: "cover",
    //   backgroundRepeat: "no-repeat",
    //   color: "white",
    //   backgroundPosition: "center",
    //   opacity: 1,
    // }}
    // >
    //   <img
    //     src={logo} // Replace with the path to your logo
    //     alt="Becks Artistry Logo"
    //     className="object-cover flex place-self-center m-auto"
    //   />
    // </div>
    <div
      className="grain-effect bg-no-repeat bg-white bg-contain flex content-center fixed inset-0 -z-10 pointer-events-none"
      
    >
      <img
        src={logo}
        alt="Becks Artistry Logo"
        className="object-cover flex place-self-center m-auto"

        style={{
          transform: `scale(${scale})`,
          transition: 'transform 0.1s linear',
        }}
      />
    </div>
  );
};

export default GrainEffect;
