import React from "react";
import HeroSection from "../components/HeroSection";

const HomePage: React.FC = () => {
  return (
    <main>
      {/* Grain Background Effect */}
      

      {/* Hero Section */}
      <HeroSection />

      {/* Featured Portfolio Section */}
      <section className="bg-purple-100 py-10">
        <h2 className="text-3xl font-bold text-center text-black">Featured Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-6">
          {[
            { title: "Abstract Wonder", image: "https://via.placeholder.com/300", id: 1 },
            { title: "Nature's Beauty", image: "https://via.placeholder.com/300", id: 2 },
            { title: "Children's Imagination", image: "https://via.placeholder.com/300", id: 3 },
          ].map((art) => (
            <div
              key={art.id}
              className="p-4 bg-white shadow-lg rounded-lg hover:scale-105 transition"
            >
              <img
                src={art.image}
                alt={art.title}
                className="w-full h-48 object-cover rounded"
              />
              <h3 className="mt-4 text-lg font-bold text-black">{art.title}</h3>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <a
            href="/portfolio"
            className="bg-purple-700 text-white px-6 py-2 rounded-lg hover:bg-purple-500 transition"
          >
            View Full Portfolio
          </a>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="bg-white py-10">
        <h2 className="text-3xl font-bold text-center text-black">About Us</h2>
        <p className="mt-6 text-center px-6 lg:px-20">
          Becks Artistry is dedicated to inspiring creativity in everyone.
          We specialize in fostering artistic talent and creating works of art
          that speak to the soul. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. <a href="/about" className="text-purple-700 underline">Learn more...</a>
        </p>
      </section>

      {/* Contact Teaser Section */}
      <section className="bg-black py-10 text-white text-center">
        <h2 className="text-3xl font-bold">Get in Touch</h2>
        <p className="mt-4">
          We'd love to hear from you! Whether you want to discuss a collaboration
          or ask a question, feel free to reach out.
        </p>
        <a
          href="/contact"
          className="mt-6 inline-block bg-purple-700 text-white px-6 py-2 rounded-lg hover:bg-purple-500 transition"
        >
          Contact Us
        </a>
      </section>
    </main>
  );
};

export default HomePage;
