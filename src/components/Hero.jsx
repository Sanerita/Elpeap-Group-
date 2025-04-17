import React from "react";
import { useNavigate } from "react-router-dom";
import SEO from './SEO';

const Hero = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/get-started");
  };

  return (
    <>
      <SEO 
        title="ELPEAP Group | Digital Solutions & Business Services"
        description="Professional web development, e-commerce solutions, and digital marketing services in South Africa"
        keywords="web development, South Africa, e-commerce, digital marketing"
        url="https://www.elpeapgroup.co.za"
        image="https://www.elpeapgroup.co.za/social-preview.jpg"
      />

      <header className="bg-success text-white py-5">
        <div className="container text-center">
          <h1 className="display-4 fw-bold mb-4">Welcome to ELPEAP Technologies</h1>
          <p className="lead mb-4">
            Helping small businesses thrive online with complete tech solutions: 
            <br className="d-none d-md-block" />
            We handle your <strong>website development</strong>, <strong>e-commerce stores</strong>, 
            <strong> social media marketing</strong>, <strong>IT support</strong>, and <strong>AI automation</strong> - 
            so you can focus on your business
          </p>
          <button 
            className="btn btn-light btn-lg" 
            onClick={handleGetStarted}
            aria-label="Get started with ELPEAP Group services"
          >
            Get Started
          </button>
        </div>
      </header>
    </>
  );
};

export default Hero;