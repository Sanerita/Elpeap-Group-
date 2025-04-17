import React from "react";
import elpeapgroup from "../assets/elpeapgroup.png";
import DiscountPopup from "./DiscountPopup";
import SEO from './SEO';

const About = () => {
  return (
    <>
      <SEO 
        title="ELPEAP Group | Digital Solutions & Business Services"
        description="Professional web development, e-commerce solutions, and digital marketing services in South Africa"
        keywords="web development, South Africa, e-commerce, digital marketing"
        url="https://www.elpeapgroup.co.za"
        image="https://www.elpeapgroup.co.za/social-preview.jpg"
      />
      
      <div className="container my-5">
        <DiscountPopup />

        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <img
              src={elpeapgroup}
              alt="My Business Logo"
              className="img-fluid"
              style={{
                width: 'auto',
                height: '400px',
                objectFit: 'contain',
                imageRendering: '-webkit-optimize-contrast'
              }}
              loading="lazy"
            />
          </div>
          <div className="col-md-6">
            <h2 className="display-4 fw-bold mb-4">About Us</h2>
            <p className="lead">
              At <span className="text-success fw-bold">Elpeap Group</span>, we are a team of passionate professionals 
              dedicated to helping small businesses thrive in the digital world. With expertise in 
              web development, e-commerce solutions, social media marketing, 
              <span className="text-success"> IT support</span>, and <span className="text-success">AI automation</span>, 
              we provide tailored solutions to meet your unique needs.
            </p>
          </div>
        </div>

        {/* Services Showcase - Updated with new service */}
        <div className="row mb-5">
          <div className="col-12 text-center mb-4">
            <h2 className="display-5 fw-bold">Our Services</h2>
          </div>
          
          {[
            { icon: "bi-laptop", title: "Web Development", desc: "Stunning, responsive websites" },
            { icon: "bi-cart", title: "E-commerce", desc: "Online stores that convert" },
            { icon: "bi-megaphone", title: "Social Media", desc: "Targeted growth strategies" },
            { icon: "bi-headset", title: "IT Support", desc: "Reliable tech assistance" },
            { icon: "bi-robot", title: "AI Automation", desc: "Smart workflow solutions" }
          ].map((service, index) => (
            <div key={index} className="col-md-6 col-lg-3 mb-4">
              <div className="card h-100 border-0 shadow-sm hover-effect">
                <div className="card-body text-center p-4">
                  <i className={`bi ${service.icon} display-4 text-success mb-3`}></i>
                  <h3 className="h5 fw-bold">{service.title}</h3>
                  <p className="text-muted">{service.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rest of the component remains the same */}
        {/* ... */}
      </div>
    </>
  );
};

export default About;