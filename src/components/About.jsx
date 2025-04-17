import React from "react";
import elpeapgroup from "../assets/elpeapgroup.png"; // Import the logo
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
              src={elpeapgroup} // Use the imported logo
              alt="My Business Logo"
              className="img-fluid"
              style={{
                width: 'auto', // Maintain aspect ratio
                height: '400px', // Set appropriate height
                objectFit: 'contain', // Prevent distortion
                imageRendering: '-webkit-optimize-contrast' // Sharper rendering
              }}
              loading="lazy" // Better page performance
            
            />
        </div>
        <div className="col-md-6">
          <h2 className="display-4 fw-bold mb-4">About Us</h2>
          <p className="lead">
            At <span className="text-success fw-bold">Elpeap Group</span>, we are a team of passionate professionals 
            dedicated to helping small businesses thrive in the digital world. With expertise in 
            web development, e-commerce solutions, social media marketing, and 
            <span className="text-success"> IT support</span>, we provide tailored solutions to meet your unique needs.
          </p>
        </div>
      </div>

      {/* Services Showcase - New 4-column layout */}
      <div className="row mb-5">
        <div className="col-12 text-center mb-4">
          <h2 className="display-5 fw-bold">Our Services</h2>
        </div>
        
        {[
          { icon: "bi-laptop", title: "Web Development", desc: "Stunning, responsive websites" },
          { icon: "bi-cart", title: "E-commerce", desc: "Online stores that convert" },
          { icon: "bi-megaphone", title: "Social Media", desc: "Targeted growth strategies" },
          { icon: "bi-headset", title: "IT Support", desc: "Reliable tech assistance" }
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

      {/* Mission/Vision - Original content with new cards */}
      <div className="row mb-5">
        <div className="col-md-6 mb-4">
          <div className="card h-100 border-success border-2">
            <div className="card-body p-4">
              <h3 className="card-title fw-bold">
                <i className="bi bi-bullseye text-success me-2"></i>Our Mission
              </h3>
              <p>
                To empower small businesses by providing innovative and affordable 
                digital solutions that drive growth, enhance online presence, 
                and maximize profitability.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card h-100 border-success border-2">
            <div className="card-body p-4">
              <h3 className="card-title fw-bold">
                <i className="bi bi-eye text-success me-2"></i>Our Vision
              </h3>
              <p>
                To become the leading digital solutions provider for small businesses, 
                helping them succeed in an increasingly competitive and digital-first world.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values - Original values with new presentation */}
      <div className="row">
        <div className="col-12 text-center mb-4">
          <h2 className="display-5 fw-bold">Our Core Values</h2>
        </div>
        
        {[
          { icon: "bi-people", value: "Customer Focus", 
            desc: "We prioritize client needs and exceed expectations" },
          { icon: "bi-lightbulb", value: "Innovation", 
            desc: "We embrace creativity and cutting-edge technology" },
          { icon: "bi-shield-check", value: "Integrity", 
            desc: "We conduct business with honesty and transparency" },
          { icon: "bi-graph-up", value: "Growth", 
            desc: "We help businesses scale sustainably" }
        ].map((item, index) => (
          <div key={index} className="col-md-6 col-lg-3 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center p-4">
                <i className={`bi ${item.icon} display-4 text-success mb-3`}></i>
                <h3 className="h5 fw-bold">{item.value}</h3>
                <p className="text-muted">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default About;