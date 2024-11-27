import React from "react";

const ContactPage: React.FC = () => {
  return (
    <main className="bg-black text-white pt-[80px]">
      <section className="text-center py-10">
        <h1 className="text-4xl font-bold">Get in Touch</h1>
        <p className="mt-6 px-6 lg:px-20">
          Have a project in mind? Let's collaborate! Whether you're interested in buying art, booking a workshop,
          or simply want to chat about creativity, we're here for you.
        </p>
      </section>

      <section className="bg-purple-700 py-10">
        <h2 className="text-2xl font-bold text-center text-white">Contact Form</h2>
        <form className="max-w-lg mx-auto mt-6 space-y-4">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-lg border border-gray-300"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded-lg border border-gray-300"
            />
          </div>
          <div>
            <textarea
              placeholder="Your Message"
              className="w-full px-4 py-2 rounded-lg border border-gray-300"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-400 transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
};

export default ContactPage;
