import React from "react";
import { useNavigate } from "react-router-dom";
import SEO from './SEO';

const Hero = () => {
  const navigate = useNavigate();

  const handleEmergencyHelp = () => {
    navigate("/emergency-help"); // New route for urgent requests
  };

  return (
    <>
      <SEO 
        title="ELPEAP Group | Website Emergency Fixes & AI Automation"
        description="24-hour website repairs, AI workflow automation, and ongoing tech support for South African businesses. Pay only when we fix your problem."
        keywords="website emergency fix, South Africa, AI automation, web developer, tech support"
        url="https://www.elpeapgroup.co.za"
        image="https://www.elpeapgroup.co.za/social-preview.jpg"
      />

      <header className="bg-success text-white py-5">
        <div className="container text-center">
          <h1 className="display-4 fw-bold mb-4">
            <span className="d-block">🚨 Website Broken?</span>
            We Fix It in <u>24 Hours</u>—Guaranteed
          </h1>
          
          <p className="lead mb-4">
            <strong>Stop losing sales!</strong> Get expert help for:
            <br className="d-none d-md-block" />
            <span className="badge bg-light text-dark mx-1">Critical bug fixes</span>
            <span className="badge bg-light text-dark mx-1">Hack recovery</span>
            <span className="badge bg-light text-dark mx-1">AI automation</span>
            <span className="badge bg-light text-dark mx-1">Monthly care plans</span>
          </p>

          <div className="d-flex gap-3 justify-content-center">
            <button 
              className="btn btn-light btn-lg fw-bold" 
              onClick={handleEmergencyHelp}
              aria-label="Get emergency website help"
            >
              🚀 Get Emergency Help
            </button>
            
            <button 
              className="btn btn-outline-light btn-lg"
              onClick={() => navigate("/free-audit")}
            >
              Free Website Audit
            </button>
          </div>

          <p className="small mt-3 opacity-75">
            <i className="bi bi-shield-check me-1"></i>
            Pay only if we fix your problem
          </p>
        </div>
      </header>
    </>
  );
};

export default Hero;