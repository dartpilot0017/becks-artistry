import React from "react";

const ContactSection: React.FC = () => {
  return (
    <section className="p-10 bg-black text-white">
      <h2 className="text-3xl font-bold text-center">Get in Touch</h2>
      <p className="mt-4 text-center">
        We'd love to hear from you! Whether you have questions or want to
        discuss a potential collaboration, feel free to reach out.
      </p>
      <form className="mt-6 max-w-lg mx-auto">
        <div className="mb-4">
          <label className="block font-semibold" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="w-full p-2 border border-purple-700 rounded"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border border-purple-700 rounded"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold" htmlFor="message">Message</label>
          <textarea
            id="message"
            className="w-full p-2 border border-purple-700 rounded"
            placeholder="Your Message"
          ></textarea>
        </div>
        <button className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-500 transition">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactSection;
