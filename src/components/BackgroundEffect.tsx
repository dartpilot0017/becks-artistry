import React, { useEffect } from 'react';
import '../GrainEffect.css';

const GrainEffect: React.FC = () => {
  useEffect(() => {
    const handleMouseMove = () => {
      const grains = document.querySelectorAll('.grain');
      grains.forEach((grain) => {
        const x = (Math.random() - 0.5) * 100;
        const y = (Math.random() - 0.5) * 100;
        
        // Cast grain to HTMLElement to access 'style'
        const grainElement = grain as HTMLElement;
        grainElement.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="grain-container">
      <h1>Interactive Grain Effect</h1>
      <div className="grains">
        {/* Multiple grain divs that will be animated */}
        {[...Array(30)].map((_, index) => (
          <div key={index} className="grain"></div>
        ))}
      </div>
    </div>
  );
};

export default GrainEffect;
