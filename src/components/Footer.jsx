import React from "react";

const Footer = () => {
  return (
    <footer className="bg-success text-white py-5">
      <div className="container">
        <div className="row">
          {/* Contact Information with Schema Markup */}
          <div className="col-md-4 mb-4" itemScope itemType="https://schema.org/LocalBusiness">
            <h5 className="fw-bold mb-3">Contact Us</h5>
            <ul className="list-unstyled">
              <li className="mb-2" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <i className="bi bi-geo-alt me-2"></i>
                <span itemProp="streetAddress">36 Dartford Drive</span>,{" "}
                <span itemProp="addressLocality">Parklands</span>,{" "}
                <span itemProp="addressCountry">South Africa</span>
              </li>
              <li className="mb-2" itemProp="telephone">
                <i className="bi bi-telephone me-2"></i>+27781407749
              </li>
              <li className="mb-2" itemProp="email">
                <i className="bi bi-envelope me-2"></i>info@elpeapgroup.co.za
              </li>
            </ul>
          </div>

          {/* Quick Links with ARIA labels */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a 
                  href="/" 
                  className="text-white text-decoration-none"
                  aria-label="Go to homepage"
                >
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a 
                  href="/services" 
                  className="text-white text-decoration-none"
                  aria-label="View our services"
                >
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a 
                  href="/get-started"
                  className="text-white text-decoration-none"
                  aria-label="Get started with our services"
                >
                  Get Started
                </a>
              </li>
              <li className="mb-2">
                <a 
                  href="/contact" 
                  className="text-white text-decoration-none"
                  aria-label="Contact us"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links - Corrected URLs */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3">Follow Us</h5>
            <div className="d-flex gap-3">
              <a
                href="https://www.linkedin.com/company/elpeap-group/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-decoration-none"
                aria-label="Visit our LinkedIn page"
              >
                <i className="bi bi-linkedin fs-4"></i>
              </a>
              <a
                href="https://www.instagram.com/elpeaptech/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-decoration-none"
                aria-label="Visit our Instagram page"
              >
                <i className="bi bi-instagram fs-4"></i>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61574213537105"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-decoration-none"
                aria-label="Visit our Facebook page"
              >
                <i className="bi bi-facebook fs-4"></i>
              </a>
              <a
                href="https://twitter.com/elpeapgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-decoration-none"
                aria-label="Visit our Twitter page"
              >
                <i className="bi bi-twitter fs-4"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-4">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} ELPEAP GROUP. All rights reserved.
          </p>
          {/* Privacy and Terms Links */}
          <div className="mt-2">
            <a 
              href="/privacy-policy" 
              className="text-white text-decoration-none me-3"
              aria-label="View privacy policy"
            >
              Privacy Policy
            </a>
            <a 
              href="/terms-of-service" 
              className="text-white text-decoration-none"
              aria-label="View terms of service"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;