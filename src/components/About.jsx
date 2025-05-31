import React from "react";
import elpeapgroup from "../assets/elpeapgroup.png";
import SEO from './SEO'; 

const About = () => {
  return (
    <>
      <SEO 
        title="ELPEAP Group | Website Emergency Specialists & AI Automation"
        description="South Africa's rapid-response tech team. We fix critical website issues in 24 hours and automate workflows with AI. Pay only when we solve your problem."
        keywords="website emergency, South Africa tech support, AI automation, 24-hour fix, web developer"
        url="https://www.elpeapgroup.co.za/about"
        image="https://www.elpeapgroup.co.za/social-preview.jpg"
      />
      
      <div className="container my-5">
        <div className="row align-items-center mb-5">
          <div className="col-md-6 order-md-2">
            <img
              src={elpeapgroup}
              alt="ELPEAP Group Logo - Website Emergency Specialists"
              className="img-fluid"
              style={{
                width: 'auto',
                height: '400px',
                objectFit: 'contain',
              }}
              loading="lazy"
            />
          </div>
          <div className="col-md-6 order-md-1">
            <h2 className="display-4 fw-bold mb-4">
              We're Your <span className="text-success">Tech First Responders</span>
            </h2>
            <p className="lead">
              At <strong>ELPEAP Group</strong>, we specialize in <span className="text-success">emergency website rescues</span> and <span className="text-success">AI-powered automation</span>. Unlike typical agencies, we:
            </p>
            <ul className="list-unstyled lead">
              <li className="mb-2">✅ <strong>Fix critical issues within 24 hours</strong> (guaranteed)</li>
              <li className="mb-2">✅ <strong>Charge only when we solve your problem</strong></li>
              <li className="mb-2">✅ <strong>Automate workflows</strong> to save you 10+ hours/week</li>
            </ul>
          </div>
        </div>

        {/* Emergency Services Highlight */}
        <div className="row mb-5 bg-light rounded-3 p-4 border border-success">
          <div className="col-12 text-center mb-3">
            <h2 className="display-5 fw-bold">
              <i className="bi bi-ambulance text-danger me-2"></i>
              How We Handle Emergencies
            </h2>
          </div>
          
          {[
            { icon: "bi-alarm", title: "1. Immediate Triage", 
              desc: "We diagnose your issue within 30 minutes of contact" },
            { icon: "bi-cash-coin", title: "2. Transparent Pricing", 
              desc: "Flat-rate quote before we start (no surprises)" },
            { icon: "bi-patch-check", title: "3. Guaranteed Fix", 
              desc: "Pay only when your site is fully functional" },
            { icon: "bi-shield-check", title: "4. Prevent Future Issues", 
              desc: "Optional monthly care plans to keep you safe" }
          ].map((service, index) => (
            <div key={index} className="col-md-6 col-lg-3 mb-4">
              <div className="card h-100 border-0 bg-white shadow-sm">
                <div className="card-body text-center p-4">
                  <i className={`bi ${service.icon} display-4 text-success mb-3`}></i>
                  <h3 className="h5 fw-bold">{service.title}</h3>
                  <p className="text-muted small">{service.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Founder's Note */}
        <div className="row mb-5">
          <div className="col-lg-10 mx-auto">
            <div className="card border-success border-2">
              <div className="card-body p-4 p-md-5">
                <div className="d-flex align-items-center mb-4">
                  <div className="bg-success bg-opacity-10 p-3 rounded-circle me-3">
                    <i className="bi bi-person-gear text-success fs-2"></i>
                  </div>
                  <div>
                    <h3 className="h4 mb-0">A Note From Our Founder</h3>
                    <p className="text-muted mb-0">Why we do things differently</p>
                  </div>
                </div>
                <blockquote className="blockquote mb-0">
                  <p>
                    "After seeing too many businesses lose money from website downtime, 
                    we built ELPEAP to be the <strong>emergency room for online businesses</strong>. 
                    No bureaucracy—just fast, effective solutions when you need them most."
                  </p>
                  <footer className="blockquote-footer mt-3">
                    ELPEAP Group Team
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values - Updated for Urgency */}
        <div className="row mb-5">
          <div className="col-12 text-center mb-4">
            <h2 className="display-5 fw-bold">Why Businesses Trust Us</h2>
          </div>
          
          {[
            { icon: "bi-speedometer2", value: "Rapid Response", 
              desc: "Average 4-hour response time for emergencies" },
            { icon: "bi-currency-exchange", value: "Risk-Free", 
              desc: "No upfront payments for emergency fixes" },
            { icon: "bi-robot", value: "AI-Powered", 
              desc: "We automate the boring stuff so you don't have to" },
            { icon: "bi-telephone-inbound", value: "Direct Access", 
              desc: "WhatsApp our developers directly—no call centers" }
          ].map((item, index) => (
            <div key={index} className="col-md-6 col-lg-3 mb-4">
              <div className="card h-100 border-0 shadow-sm hover-effect">
                <div className="card-body text-center p-4">
                  <i className={`bi ${item.icon} display-4 text-success mb-3`}></i>
                  <h3 className="h5 fw-bold">{item.value}</h3>
                  <p className="text-muted small">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Emergency CTA */}
        <div className="text-center py-4 bg-danger bg-opacity-10 rounded-3">
          <h3 className="h4 fw-bold mb-3">Need immediate help?</h3>
          <a 
            href="/emergency-help" 
            className="btn btn-danger btn-lg px-4"
          >
            <i className="bi bi-telephone-outbound me-2"></i>
            Request Emergency Support
          </a>
        </div>
      </div>
    </>
  );
};

export default About;