import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-3 mt-8">
      <div className="container mx-auto px-4 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} ALX Project 0x07. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
