import React from "react";

const AboutPage: React.FC = () => {
  return (
    <main className="bg-purple-700 text-white pt-[80px]">
      <section className="text-center py-10">
        <h1 className="text-4xl font-bold">About Becks Artistry</h1>
        <p className="mt-6 px-6 lg:px-20">
          Becks Artistry is a creative hub, where art comes to life. We specialize in capturing moments,
          emotions, and imaginations through various forms of visual art. Our mission is to foster creativity,
          inspire young artists, and spread joy through the power of art.
        </p>
      </section>

      <section className="bg-black text-white py-10">
        <h2 className="text-3xl font-bold text-center text-purple-500">Our Mission</h2>
        <p className="mt-4 text-center px-6 lg:px-20">
          At Becks Artistry, our goal is to encourage everyone to tap into their creative potential. Through workshops,
          exhibitions, and collaborations, we aim to make art accessible and inspiring for people of all ages.
        </p>
      </section>

      <section className="bg-white text-black py-10">
        <h2 className="text-3xl font-bold text-center">Our Vision</h2>
        <p className="mt-4 text-center px-6 lg:px-20">
          Our vision is to build a community of passionate artists who can make a global impact through their work.
          We envision a world where art helps bridge cultural gaps, promotes mental health awareness, and empowers individuals.
        </p>
      </section>
    </main>
  );
};

export default AboutPage;
