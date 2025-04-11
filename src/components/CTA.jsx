import React from "react";
import { useNavigate } from "react-router-dom";

const CTA = () => {
  const navigate = useNavigate();

  const handleCont = () => {
    navigate("/contact");
  };

  return (
    <section className="bg-light py-5"> {/* Changed div to semantic section */}
      <div className="container text-center">
        <h2 className="fw-bold mb-4">Ready to Grow Your Business?</h2>
        <p className="lead mb-4">
          Let us help you achieve your goals. Contact us today for a free
          consultation!
        </p>
        <button 
          className="btn btn-success btn-lg" 
          onClick={handleCont}
          aria-label="Contact ELPEAP Group for a free consultation"
        >
          Contact Us
        </button>
      </div>
    </section>
  );
};
export default CTA;