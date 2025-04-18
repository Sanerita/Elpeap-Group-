import React, { useState } from "react";
import SEO from "./SEO";

const Services = () => {
  const [expandedService, setExpandedService] = useState(null);

  const services = [
    {
      icon: "bi-laptop",
      title: "Web Development",
      shortDescription: "We create stunning, responsive websites tailored to your business needs.",
      fullDescription: "Our custom web development services help establish your digital presence with mobile-friendly, fast-loading websites that convert visitors into customers.",
      benefits: [
        "Boost credibility with a professional online presence",
        "Increase customer engagement 24/7",
        "Improve search engine rankings",
        "Mobile-optimized for all devices"
      ],
      packages: [
        {
          name: "Starter Website",
          price: "R5,000",
          features: ["5-page website", "Mobile responsive", "Basic SEO setup", "1-month support"]
        },
        {
          name: "Business Website",
          price: "R10,000",
          features: ["10-page website", "Custom design", "Advanced SEO", "Contact forms", "3-month support"]
        }
      ]
    },
    {
      icon: "bi-cart",
      title: "E-commerce Solutions",
      shortDescription: "Build and manage your online store with seamless payment and inventory systems.",
      fullDescription: "Transform your business with a complete e-commerce solution that handles products, payments, and shipping effortlessly.",
      benefits: [
        "Sell products 24/7 worldwide",
        "Integrated payment gateways (PayFast, Ozow)",
        "Inventory management system",
        "Secure checkout process"
      ],
      packages: [
        {
          name: "Basic Online Store",
          price: "R15,000",
          features: ["50 products", "PayFast integration", "Basic design", "Inventory system"]
        },
        {
          name: "Premium E-commerce",
          price: "R25,000",
          features: ["Unlimited products", "Multi-payment options", "Custom design", "Advanced analytics"]
        }
      ]
    },
    {
      icon: "bi-megaphone",
      title: "Social Media Marketing",
      shortDescription: "Grow your brand with targeted campaigns and engaging content strategies.",
      fullDescription: "We develop data-driven social media strategies that increase your brand awareness and customer engagement.",
      benefits: [
        "Increase brand visibility",
        "Target your ideal customers",
        "Generate quality leads",
        "Build customer relationships"
      ],
      packages: [
        {
          name: "Starter Package",
          price: "R2,500/month",
          features: ["2 platforms (FB & IG)", "8 posts/month", "Basic analytics", "Community management"]
        },
        {
          name: "Growth Package",
          price: "R5,000/month",
          features: ["4 platforms", "16 posts/month", "Ad management", "Detailed reporting"]
        }
      ]
    },
    {
      icon: "bi-headset",
      title: "Technical Support",
      shortDescription: "Reliable IT support for hardware, software, and network troubleshooting.",
      fullDescription: "Our expert technical support keeps your business running smoothly with prompt problem resolution.",
      benefits: [
        "Minimize downtime",
        "Secure your systems",
        "Regular maintenance",
        "Expert troubleshooting"
      ],
      packages: [
        {
          name: "Basic Support",
          price: "R2,500/month",
          features: [
            "Remote support (unlimited)",
            "5-hour response time (business hours)",
            "Weekly system health checks",
            "Email/chat support",
            "Max 5 critical issues/month"  
          ],
          bestFor: "Small businesses with <5 employees"
        },
        {
          name: "Business Support",
          price: "R4,500/month",
          features: [
            "24/5 support (Mon-Fri)",
            "2-hour response",
            "2 on-site visits/month",
            "Priority ticket handling"
          ]
        }
      ]
    },
    {
      icon: "bi-robot",
      title: "AI Automation",
      shortDescription: "Custom AI solutions to automate repetitive tasks and boost efficiency.",
      fullDescription: "We build intelligent automation systems that handle repetitive tasks, process data, and make smart decisions - saving you time and money.",
      benefits: [
        "Eliminate manual data entry errors",
        "Process documents 10x faster with AI",
        "24/7 automated customer support",
        "Smart decision-making with data analysis",
        "Seamless integration with your existing tools"
      ],
      packages: [
        {
          name: "Basic Automation",
          price: "R8,000",
          features: [
            "1 workflow automation",
            "Basic AI data processing",
            "Zapier/Make.com integration",
            "1-month support"
          ],
          bestFor: "Simple task automation"
        },
        {
          name: "Enterprise AI",
          price: "R25,000+",
          features: [
            "Custom AI model development",
            "Multiple workflow automations",
            "Document processing with AI",
            "Chatbot integration",
            "3-month support"
          ],
          bestFor: "Businesses needing advanced AI"
        }
      ]
    }
  ];

  const toggleService = (index) => {
    setExpandedService(expandedService === index ? null : index);
  };

  return (
    <div className="container my-5" id="services">
      <SEO 
        title="ELPEAP Group | Digital Solutions & Business Services"
        description="Professional web development, e-commerce solutions, and digital marketing services in South Africa"
        keywords="web development, South Africa, e-commerce, digital marketing"
        url="https://www.elpeapgroup.co.za"
        image="https://www.elpeapgroup.co.za/social-preview.jpg"
      />
      {/* Replace the current h2 with this */}
      <div className="text-center mb-5">
    <h2 className="fw-bold mb-3" style={{ fontSize: '2.75rem' }}>Our Services</h2>
    
  </div>
      <div className="row g-4">
        {services.map((service, index) => (
          <div key={index} className="col-md-6 col-lg-3">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center p-4">
                <i className={`bi ${service.icon} display-4 text-success mb-3`}></i>
                <h3 className="card-title fw-bold mb-3 text-center">{service.title}</h3>
                <p className="card-text text-muted">{service.shortDescription}</p>
                <button 
                  onClick={() => toggleService(index)}
                  className="btn btn-outline-success"
                >
                  {expandedService === index ? "Show Less" : "Learn More"}
                </button>
                
                {expandedService === index && (
                  <div className="mt-3 text-start">
                    <h5 className="fw-bold">Benefits:</h5>
                    <ul className="ps-3">
                      {service.benefits.map((benefit, i) => (
                        <li key={i}>{benefit}</li>
                      ))}
                    </ul>
                    
                    <h5 className="fw-bold mt-3">Packages:</h5>
                    <div className="row">
                      {service.packages.map((pkg, i) => (
                        <div key={i} className="col-12 mb-3">
                          <div className="card border-success">
                            <div className="card-body">
                              <h6 className="card-title fw-bold">{pkg.name} - {pkg.price}</h6>
                              <ul className="small ps-3">
                                {pkg.features.map((feature, j) => (
                                  <li key={j}>{feature}</li>
                                ))}
                              </ul>
                              {pkg.bestFor && <p className="small text-muted mb-0">Best for: {pkg.bestFor}</p>}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;