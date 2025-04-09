import React from "react";


const Footer = () => {
  return (
    <footer className="bg-success text-white py-5">
      <div className="container">
        <div className="row">
          {/* Contact Information */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3">Contact Us</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <i className="bi bi-geo-alt me-2"></i>36 Dartford Drive, Parklands,
                South Africa
              </li>
              <li className="mb-2">
                <i className="bi bi-telephone me-2"></i>+27781407749 
              </li>
              <li className="mb-2">
                <i className="bi bi-envelope me-2"></i>info@elpeapgroup.co.za
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/" className="text-white text-decoration-none">
                  Home
                  </a>
              </li>
              <li className="mb-2">
                <a href="/services" className="text-white text-decoration-none">
                  Services
                  </a>
              </li>
              <li className="mb-2">
              <a href="/get-started"
                  className="text-white text-decoration-none"
                >
                  Get Started
                  </a>
              </li>
              <li className="mb-2">
              <a href="/contact" className="nav-link">
                Contact Us
              </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3">Follow Us</h5>
            <div className="d-flex gap-3">
              <a
                href="https://www.linkedin.com/company/elpeap-group/?"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-decoration-none"
              >
                <i className="bi bi-linkedin fs-4"></i>
              </a>
              <a
                href="https://www.instagram.com/elpeaptech/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-decoration-none"
              >
                <i className="bi bi-instagram fs-4"></i>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61574213537105"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-decoration-none"
              >
                <i className="bi bi-facebook fs-4"></i>
              </a>
              <a
                href="https://x.com/elpeapgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-decoration-none"
              >
                <i className="bi bi-twitter fs-4"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-4">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} ELPEAP GROUP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;