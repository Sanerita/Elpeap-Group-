import React from "react";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "We create stunning, responsive websites for your business.",
    },
    {
      title: "E-commerce Solutions",
      description: "Build and manage your online store with ease.",
    },
    {
      title: "Social Media Marketing",
      description: "Grow your brand with targeted social media campaigns.",
    },
  ];

  return (
    <div className="container mx-auto py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-secondary p-6 rounded-lg shadow-lg text-center"
          >
            <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;