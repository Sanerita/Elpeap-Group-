import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/get-started"); // Redirect to the Get Started page
  };

  return (
    <div className="bg-success text-white py-5">
      <div className="container text-center">
        <h1 className="display-4 fw-bold mb-4">Welcome to ELPEAP Technologies</h1>
        <p className="lead mb-4">
          We provide top-notch web development, e-commerce solutions, and social
          media marketing for small businesses.
        </p>
        <button className="btn btn-light btn-lg" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  );
};
export default Hero;