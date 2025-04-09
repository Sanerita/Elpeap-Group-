import React from "react";
import { useNavigate } from "react-router-dom"; 

const CTA = () => {
  
  const navigate = useNavigate(); // Initialize useNavigate

  const handleCont = () => {
    navigate("/contact"); // Redirect to the contact page
  };

    return (
      <div className="bg-light py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Ready to Grow Your Business?</h2>
          <p className="lead mb-4">
            Let us help you achieve your goals. Contact us today for a free
            consultation!
          </p>
          <button className="btn btn-success btn-lg" onClick={handleCont}>Contact Us</button>
        </div>
      </div>
    );
  };
  export default CTA;