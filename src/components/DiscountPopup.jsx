import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const DiscountPopup = () => {
  const [show, setShow] = useState(false);
  const [remainingDays, setRemainingDays] = useState(5);

  // Show popup when component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
        setShow(true); // Force show without localStorage check
        
      const hasSeenPopup = localStorage.getItem("hasSeenDiscountPopup");
      if (!hasSeenPopup) {
        setShow(true);
        localStorage.setItem("hasSeenDiscountPopup", "true");
        
        // Calculate remaining days
        const expiryDate = new Date();
        expiryDate.setDate(expiryDate.getDate() + 5);
        localStorage.setItem("discountExpiry", expiryDate.toISOString());
      }
    }, 2000); // Show after 2 seconds

    // Check expiry date for countdown
    const expiry = localStorage.getItem("discountExpiry");
    if (expiry) {
      const diffDays = Math.ceil((new Date(expiry) - new Date()) / (1000 * 60 * 60 * 24));
      setRemainingDays(diffDays > 0 ? diffDays : 0);
    }

    return () => clearTimeout(timer);
  }, []);

  return (
    <Modal 
      show={show} 
      onHide={() => setShow(false)}
      centered
      size="lg"
      backdrop="static"
      className="discount-popup"
    >
      <Modal.Body className="p-0 position-relative">
        <div className="row g-0">
          {/* Left Side - Visual */}
          <div className="col-md-6 discount-visual">
            <div className="h-100 d-flex flex-column justify-content-center align-items-center p-4 text-white">
              <div className="discount-badge mb-3">
                <span>50% OFF</span>
              </div>
              <h2 className="display-4 fw-bold mb-3">LIMITED TIME!</h2>
              <div className="countdown-box mb-4">
                <div className="countdown-text">OFFER EXPIRES IN:</div>
                <div className="countdown-timer">{remainingDays} DAYS</div>
              </div>
              <i className="bi bi-gift-fill display-1"></i>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="col-md-6 p-5">
            <button 
              type="button" 
              className="btn-close position-absolute top-0 end-0 m-3" 
              onClick={() => setShow(false)}
            ></button>
            
            <h3 className="fw-bold mb-4 text-success">SPECIAL BUSINESS WEBSITE OFFER!</h3>
            <p className="lead mb-4">
              Get <span className="text-danger fw-bold">50% OFF</span> on all business website packages for the next {remainingDays} days!
            </p>
            
            <ul className="list-unstyled mb-4">
              <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i> Professional design</li>
              <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i> Mobile responsive</li>
              <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i> SEO optimized</li>
              <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i> 1 year free hosting</li>
            </ul>

            <Button 
              variant="success" 
              size="lg" 
              className="w-100 fw-bold py-3 discount-btn"
              // Update button onClick:
onClick={() => {
    setShow(false);
    window.open("https://wa.me/27781407749?text=I%20want%20to%20claim%20the%2050%25%20discount%20for%20my%20business%20website");
  }}
              
            >
              CLAIM YOUR DISCOUNT NOW
              <i className="bi bi-arrow-right ms-2"></i>
            </Button>
            
            <p className="small text-muted mt-3 mb-0">
              *Offer valid for new clients only. Ends in {remainingDays} days.
            </p>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default DiscountPopup;