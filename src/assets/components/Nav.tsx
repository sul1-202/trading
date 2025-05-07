// src/components/Navbar.tsx
import React from "react";
import Logo from "./Logo";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center px-10 py-4 border-b">
      <div className="flex items-center">
        <Logo />
      </div>
      <div className="flex items-center gap-6 text-sm text-gray-700">
        <a href="#" className="hover:text-blue-600">
          Signup
        </a>
        <a href="#" className="hover:text-blue-600">
          About
        </a>
        <a href="#" className="hover:text-blue-600">
          Products
        </a>
        <a href="#" className="hover:text-blue-600">
          Pricing
        </a>
        <a href="#" className="hover:text-blue-600">
          Support
        </a>
        <div className="text-xl cursor-pointer">&#9776;</div>
      </div>
    </nav>
  );
};

export default Navbar;
