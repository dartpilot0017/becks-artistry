import React from "react";
import logo from '../assets/logo.jpg';

const Header: React.FC = () => {
  return (
    <header className="bg-black text-white fixed top-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img
            src = {logo} // Replace with the path to your logo
            alt="Becks Artistry Logo"
            className="h-10 w-10 object-contain"
          />
          <span className="text-xl font-bold text-purple-500">Becks Artistry</span>
        </div>

        {/* Navigation Links */}
        <nav className="space-x-6">
          <a
            href="/"
            className="hover:text-purple-400 transition"
          >
            Home
          </a>
          <a
            href="#portfolio"
            className="hover:text-purple-400 transition"
          >
            Portfolio
          </a>
          <a
            href="#about"
            className="hover:text-purple-400 transition"
          >
            About
          </a>
          <a
            href="#contact"
            className="hover:text-purple-400 transition"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
