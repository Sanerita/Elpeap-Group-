import React from "react";

const About = () => {
  return (
    <div className="container my-5">
      {/* About Us Section */}
      <div className="row align-items-center">
        <div className="col-md-6">
          <img
            src="elpeapgroup.png" // Replace with your image
            alt="About Us"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <h2 className="display-4 fw-bold mb-4">About Us</h2>
          <p className="lead mb-4">
            At <strong>ELPEAP TECHNOLOGIES</strong>, we are a team of passionate
            professionals dedicated to helping small businesses thrive in the
            digital world. With expertise in <strong>web development</strong>,{" "}
            <strong>e-commerce solutions</strong>, and{" "}
            <strong>social media marketing</strong>, we provide tailored
            solutions to meet your unique needs.
          </p>
        </div>
      </div>

      {/* Mission and Vision Section */}
      <div className="row mt-5">
        <div className="col-md-6 mb-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body p-4">
              <h3 className="card-title fw-bold mb-3">
                <i className="bi bi-bullseye text-success me-2"></i>Our Mission
              </h3>
              <p className="card-text text-muted">
                To empower small businesses by providing innovative and
                affordable digital solutions that drive growth, enhance online
                presence, and maximize profitability.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body p-4">
              <h3 className="card-title fw-bold mb-3">
                <i className="bi bi-eye text-success me-2"></i>Our Vision
              </h3>
              <p className="card-text text-muted">
                To become the leading digital solutions provider for small
                businesses, helping them succeed in an increasingly competitive
                and digital world.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="row mt-5">
        <div className="col-12">
          <h2 className="text-center display-4 fw-bold mb-4">Our Core Values</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <i className="bi bi-people display-4 text-success mb-3"></i>
                  <h3 className="card-title fw-bold mb-3">Customer Focus</h3>
                  <p className="card-text text-muted">
                    We prioritize our clients' needs and work tirelessly to
                    deliver solutions that exceed their expectations.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <i className="bi bi-lightbulb display-4 text-success mb-3"></i>
                  <h3 className="card-title fw-bold mb-3">Innovation</h3>
                  <p className="card-text text-muted">
                    We embrace creativity and cutting-edge technology to deliver
                    innovative solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <i className="bi bi-shield-check display-4 text-success mb-3"></i>
                  <h3 className="card-title fw-bold mb-3">Integrity</h3>
                  <p className="card-text text-muted">
                    We conduct our business with honesty, transparency, and
                    respect for our clients and partners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;