import React from "react";

const PortfolioShowcase: React.FC = () => {
  const artworks = [
    { title: "Abstract Wonder", description: "A journey through color and form." },
    { title: "Children's Imagination", description: "Capturing the magic of young minds." },
    { title: "Nature's Beauty", description: "An artistic homage to the natural world." },
    { title: "Portrait Perfection", description: "Timeless expressions through art." },
    { title: "Modern Vibes", description: "Art for contemporary spaces." },
    { title: "Dreamlike Visions", description: "Surreal compositions that captivate." },
  ];

  return (
    <section className="p-10 bg-white">
      <h2 className="text-3xl font-bold text-center text-black">Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {artworks.map((art, index) => (
          <div
            key={index}
            className="p-4 bg-purple-100 shadow-md hover:scale-105 transition"
          >
            <img
              src={`https://via.placeholder.com/300?text=${art.title}`}
              alt={art.title}
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="mt-4 text-lg font-bold text-black">{art.title}</h3>
            <p className="text-sm text-gray-700">{art.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioShowcase;
