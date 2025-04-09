import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
const DiscountPopup = () => {
  const [show, setShow] = useState(true);
  const [daysUntilLaunch, setDaysUntilLaunch] = useState(14);
  useEffect(() => {
    // Check launch date for countdown
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 14);
    const diffDays = Math.ceil((launchDate - new Date()) / (1000 * 60 * 60 * 24));
    setDaysUntilLaunch(diffDays > 0,2 ? diffDays : 0);
  }, []);




  return (
    <Modal
      show={show}
      centered
      size="lg"
      backdrop="static"
      className="new-product-popup"
    >
      <Modal.Body className="p-0 position-relative">
        <div className="row g-0">
          {/* Left Side - Visual */}
          <div className="col-md-6 product-visual bg-primary">
            <div className="h-100 d-flex flex-column justify-content-center align-items-center p-4 text-white">
              <div className="badge mb-3 bg-warning text-dark">
                <span>COMING SOON</span>
              </div>
              <h2 className="display-4 fw-bold mb-3">NEW PRODUCT!</h2>
              <div className="countdown-box mb-4">
                <div className="countdown-text">LAUNCHING IN:</div>
                <div className="countdown-timer">{daysUntilLaunch} DAYS</div>
              </div>
              <i className="bi bi-megaphone-fill display-1"></i>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="col-md-6 p-5">
            <button
              type="button"
              className="btn-close position-absolute top-0 end-0 m-3"
              onClick={() => setShow(false)}
            ></button>
            <h3 className="fw-bold mb-4 text-primary">EXCITING NEW PRODUCT ANNOUNCEMENT!</h3>
            <p className="lead mb-4">
              We're launching our <span className="text-danger fw-bold">revolutionary new product</span> in just {daysUntilLaunch} days!
            </p>

            <div className="mb-4 p-3 bg-light rounded">
              <h5 className="fw-bold">Be the first to know when it launches!</h5>
              <p className="small">Get exclusive early access and special pricing for our newsletter subscribers.</p>
            </div>

            <ul className="list-unstyled mb-4">
              <li className="mb-2"><i className="bi bi-star-fill text-warning me-2"></i> Cutting-edge technology</li>
              <li className="mb-2"><i className="bi bi-star-fill text-warning me-2"></i> Exclusive pre-launch pricing</li>
              <li className="mb-2"><i className="bi bi-star-fill text-warning me-2"></i> Priority support</li>
              <li className="mb-2"><i className="bi bi-star-fill text-warning me-2"></i> Money-back guarantee</li>
            </ul>

            <Button
              variant="primary"
              size="lg"
              className="w-100 fw-bold py-3"
              onClick={() => {
                setShow(false);
                window.open("https://wa.me/27781407749?text=I%20want%20to%20be%20notified%20about%20your%20new%20product%20launch", "_blank");
              }}
            >

              NOTIFY ME ON LAUNCH DAY
              <i className="bi bi-envelope-arrow-up ms-2"></i>
            </Button>

            <p className="small text-muted mt-3 mb-0">
              *We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};
export default DiscountPopup;