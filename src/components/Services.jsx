import React from "react";

const Services = () => {
  const services = [
    {
      icon: "bi-laptop",
      title: "Web Development",
      description: "We create stunning, responsive websites tailored to your business needs.",
    },
    {
      icon: "bi-cart",
      title: "E-commerce Solutions",
      description: "Build and manage your online store with seamless payment and inventory systems.",
    },
    {
      icon: "bi-megaphone",
      title: "Social Media Marketing",
      description: "Grow your brand with targeted campaigns and engaging content strategies.",
    },
    {
      icon: "bi-headset", // Bootstrap Icon for IT support
      title: "Technical Support",
      description: "Reliable IT support for hardware, software, and network troubleshooting.",
    },
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center mb-5 display-4 fw-bold">Our Services</h2>
      <div className="row g-4">
        {services.map((service, index) => (
          <div key={index} className="col-md-6 col-lg-3">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center p-4">
                <i className={`bi ${service.icon} display-4 text-success mb-3`}></i>
                <h3 className="card-title fw-bold mb-3">{service.title}</h3>
                <p className="card-text text-muted">{service.description}</p>
                <a href="#!" className="btn btn-outline-success">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;