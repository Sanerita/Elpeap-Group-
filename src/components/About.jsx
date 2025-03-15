import React from "react";

const About = () => {
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6">
            <h2 className="fw-bold mb-4">About Us</h2>
            <p className="lead">
              We are a team of passionate professionals dedicated to helping small
              businesses thrive in the digital world. With expertise in web
              development, e-commerce, and social media marketing, we provide
              tailored solutions to meet your unique needs.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="/about-image.jpg" // Replace with your image
              alt="About Us"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>
    );
  };

  export default About;