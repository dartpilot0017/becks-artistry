import React from "react";

const PortfolioShowcase: React.FC = () => {
  const artworks = [
    { title: "Abstract Wonder", description: "A journey through color and form.",
        src: "https://images.unsplash.com/photo-1686276476863-687665119815?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     },
    { title: "Children's Imagination", description: "Capturing the magic of young minds.",
        src: "https://images.unsplash.com/photo-1686276476863-687665119815?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     },
    { title: "Nature's Beauty", description: "An artistic homage to the natural world.",
        src: "https://images.unsplash.com/photo-1686276476863-687665119815?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     },
    { title: "Portrait Perfection", description: "Timeless expressions through art.",
        src: "https://images.unsplash.com/photo-1686276476863-687665119815?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     },
    { title: "Modern Vibes", description: "Art for contemporary spaces.",
        src: "https://images.unsplash.com/photo-1686276476863-687665119815?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     },
    { title: "Dreamlike Visions", description: "Surreal compositions that captivate.",
        src: "https://images.unsplash.com/photo-1686276476863-687665119815?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
     },
  ];

  return (
    <section id="portfolio" className="p-10 pb-[120px] pt-[120px] bg-white text-white">
      <h2 className="text-3xl font-bold text-center text-black">Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {artworks.map((art, index) => (
          <div
            key={index}
            className="bg-black shadow-md rounded-lg hover:scale-105 transition"
          >
            <img
              src={`${art.src}`}
              alt={art.title}
              className="w-full h-48 object-cover rounded"
            />
            <div className="p-4 pt-0">
            <h3 className="mt-4 text-lg font-bold">{art.title}</h3>
            <p className="text-sm text-white-700">{art.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioShowcase;
