import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Becks Artistry. All rights reserved.
        </p>
        <p className="mt-2 text-xs text-gray-400">
          Designed with ❤️ by Dartpilot017.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
