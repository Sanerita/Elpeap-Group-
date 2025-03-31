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
  Helping small businesses thrive online with complete tech solutions: 
  <br className="d-none d-md-block" />
  We handle your website, online store, social media, and IT - so you can focus on your business
</p>
        <button className="btn btn-light btn-lg" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  );
};
export default Hero;