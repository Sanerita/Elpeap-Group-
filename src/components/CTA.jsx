import React from "react";

const CTA = () => {
  
  const handleCont = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Quotation form submitted!");
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