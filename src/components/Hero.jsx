import React from "react";

const Hero = () => {
  return (
    <div className="bg-primary text-secondary py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to My Business</h1>
        <p className="text-xl mb-8">
          We provide top-notch web development, e-commerce solutions, and social
          media marketing for small businesses.
        </p>
        <button className="bg-secondary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;