import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-primary p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-secondary text-2xl font-bold">
          My Business
        </Link>
        <div className="space-x-4">
          <Link to="/" className="text-secondary hover:text-gray-300">
            Home
          </Link>
          <Link to="/services" className="text-secondary hover:text-gray-300">
            Services
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;