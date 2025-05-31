import React, { useState } from "react";
import SEO from "./SEO";
 

const Services = () => {
  const [expandedService, setExpandedService] = useState(null);

  const services = [
    {
      icon: "bi-tools",
      title: "24-Hour Emergency Fixes",
      shortDescription: "Critical website issues resolved within 24 hours - guaranteed.",
      fullDescription: "When your website is down, hacked, or malfunctioning, our rapid-response team gets you back online fast.",
      benefits: [
        "Average 6-hour resolution time",
        "Pay only when we fix your issue",
        "No long-term contracts",
        "Priority support for emergency clients"
      ],
      packages: [
        {
          name: "Critical Fix",
          price: "R3,500",
          features: ["Downtime resolution", "Bug fixes", "24h SLA", "1 emergency fix"],
          bestFor: "Broken features or offline sites"
        },
        {
          name: "Security Rescue",
          price: "R6,000",
          features: ["Malware removal", "Firewall setup", "Backup restoration", "Prevention report"]
        }
      ]
    },
    {
      icon: "bi-shield-check",
      title: "Monthly Care Plans",
      shortDescription: "Proactive protection to prevent emergencies.",
      fullDescription: "Our monthly retainers keep your website secure, updated, and performing at its best.",
      benefits: [
        "99.9% uptime guarantee",
        "Weekly security scans",
        "Speed optimization",
        "Emergency support included"
      ],
      packages: [
        {
          name: "Basic Care",
          price: "R2,999/month",
          features: ["Weekly updates", "Daily backups", "Security monitoring", "2h emergency response"]
        },
        {
          name: "Business Care",
          price: "R5,999/month",
          features: ["24/7 monitoring", "Hourly backups", "Performance tweaks", "1h emergency response"]
        }
      ]
    },
    {
      icon: "bi-robot",
      title: "AI Automation",
      shortDescription: "Replace manual work with smart automation.",
      fullDescription: "We build custom AI solutions that handle repetitive tasks and data processing 24/7.",
      benefits: [
        "Reduce human errors by 90%",
        "Process documents 10x faster",
        "24/7 automated customer support",
        "Seamless tool integration"
      ],
      packages: [
        {
          name: "Workflow Automation",
          price: "R8,000",
          features: ["1 process automated", "Zapier integration", "1-month support"]
        },
        {
          name: "Custom AI Solution",
          price: "R25,000+",
          features: ["Tailored AI model", "Multiple automations", "3-month support"]
        }
      ]
    },
    {
      icon: "bi-lightning-charge",
      title: "Website Rescues",
      shortDescription: "Fix underperforming websites that lose sales.",
      fullDescription: "We diagnose and repair slow, confusing, or outdated websites that frustrate visitors.",
      benefits: [
        "Boost conversion rates by 30-200%",
        "Fix mobile usability issues",
        "Optimize checkout flows",
        "Improve SEO rankings"
      ],
      packages: [
        {
          name: "Performance Audit",
          price: "R1,500",
          features: ["23-point health check", "Priority fixes list", "Speed report"]
        },
        {
          name: "Full Revamp",
          price: "R12,000+",
          features: ["Redesign", "Content rewrite", "SEO optimization", "3-month support"]
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
        title="ELPEAP Group | Emergency Website Fixes & AI Automation"
        description="24-hour website emergency repairs and business automation services in South Africa. Pay only when we fix your problem."
        keywords="website emergency, South Africa, AI automation, web developer, tech support"
        url="https://www.elpeapgroup.co.za/services"
        image="https://www.elpeapgroup.co.za/social-preview.jpg"
      />

      <div className="text-center mb-5">
        <h2 className="fw-bold mb-3" style={{ fontSize: '2.75rem' }}>
          <span className="text-danger">Emergency</span> & <span className="text-success">Preventive</span> Solutions
        </h2>
        <p className="lead">
          We fix <strong>urgent website issues today</strong> and help prevent <strong>tomorrow's problems</strong>
        </p>
      </div>

      {/* Emergency Alert Banner */}
      <div className="alert alert-danger d-flex align-items-center mb-5">
        <i className="bi bi-exclamation-triangle-fill fs-3 me-3"></i>
        <div>
          <strong>Need immediate help?</strong> Our emergency team is standing by. 
          <a href="/emergency-help" className="alert-link ms-2">Request 24-hour support →</a>
        </div>
      </div>

      <div className="row g-4">
        {services.map((service, index) => (
          <div key={index} className="col-md-6 col-lg-3">
            <div className={`card h-100 border-0 shadow-sm ${service.title.includes('Emergency') ? 'border-danger border-2' : ''}`}>
              <div className="card-body text-center p-4">
                <i className={`bi ${service.icon} display-4 ${service.title.includes('Emergency') ? 'text-danger' : 'text-success'} mb-3`}></i>
                <h3 className="card-title fw-bold mb-3">{service.title}</h3>
                <p className="card-text text-muted">{service.shortDescription}</p>
                <button 
                  onClick={() => toggleService(index)}
                  className={`btn ${service.title.includes('Emergency') ? 'btn-outline-danger' : 'btn-outline-success'}`}
                >
                  {expandedService === index ? "Show Less" : "See Options"}
                </button>
                
                {expandedService === index && (
                  <div className="mt-3 text-start">
                    <div className="d-flex align-items-center mb-2">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      <h5 className="fw-bold mb-0">Key Benefits</h5>
                    </div>
                    <ul className="ps-3 small">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="mb-1">{benefit}</li>
                      ))}
                    </ul>
                    
                    <div className="d-flex align-items-center mt-3 mb-2">
                      <i className="bi bi-credit-card text-success me-2"></i>
                      <h5 className="fw-bold mb-0">Packages</h5>
                    </div>
                    <div className="row">
                      {service.packages.map((pkg, i) => (
                        <div key={i} className="col-12 mb-3">
                          <div className={`card ${service.title.includes('Emergency') ? 'border-danger' : 'border-success'}`}>
                            <div className="card-body p-3">
                              <h6 className="card-title fw-bold">
                                {pkg.name} <span className="float-end">{pkg.price}</span>
                              </h6>
                              <ul className="small ps-3 mb-2">
                                {pkg.features.map((feature, j) => (
                                  <li key={j}>{feature}</li>
                                ))}
                              </ul>
                              {pkg.bestFor && (
                                <p className="small text-muted mb-0">
                                  <i className="bi bi-info-circle me-1"></i>
                                  {pkg.bestFor}
                                </p>
                              )}
                              {service.title.includes('Emergency') && (
                                <a 
                                  href="/emergency-help" 
                                  className="btn btn-sm btn-danger mt-2 w-100"
                                >
                                  Get Help Now
                                </a>
                              )}
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