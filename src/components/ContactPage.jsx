import React, { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import emailjs from '@emailjs/browser';
import SEO from "./SEO";

// Initialize EmailJS (use the same key as in GetStarted)
emailjs.init('t9SZcWmLIrn5oRGUx');

const ContactPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(null);
    
    // Add current time to form data
    const formData = new FormData(e.target);
    formData.append('time', new Date().toLocaleString());
    
    emailjs.send(
      'service_j6qwb3j',    // Same service ID as GetStarted
      'template_jy6bogd',   // Same template ID as GetStarted
      Object.fromEntries(formData),
      't9SZcWmLIrn5oRGUx'   // Same public key
    )
    .then(() => {
      setFormSubmitted(true);
      e.target.reset();
    }, (error) => {
      console.error('Email failed:', error);
      setFormError('Failed to send. Please email us directly at elpeapgroupsocial@gmail.com');
    });
  };

  return (
    <Container className="my-5 d-flex flex-column min-vh-100 justify-content-center">
      <SEO 
        title="ELPEAP Group | Digital Solutions & Business Services"
        description="Professional web development, e-commerce solutions, and digital marketing services in South Africa"
        keywords="web development, South Africa, e-commerce, digital marketing"
        url="https://www.elpeapgroup.co.za"
        image="https://www.elpeapgroup.co.za/social-preview.jpg"
      />
      
      {/* Move the title outside the card and center it */}
      <div className="text-center mb-5">
        <h1 className="fw-bold display-4 mb-3">Contact Us</h1>
        <div className="mx-auto" style={{ width: '80px', height: '4px', background: 'var(--color-accent)' }}></div>
      </div>
  
      <div className="row justify-content-center align-items-center">
        <div className="col-xl-8 col-lg-10">
          <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
            <div className="row g-0">
              

{/* Contact Information Sidebar - Updated Section */}
<div className="col-lg-5 p-4 p-md-5 d-flex flex-column" 
                 style={{
                   background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-light))',
                   color: 'white',
                   minHeight: '500px' 
                 }}>
  <div className="my-auto">
    <h2 className="mb-4 fw-bold">Get in Touch</h2>
    <p className="mb-4 lead">We'd love to hear from you</p>
    <div className="d-flex align-items-start mb-3">
      <i className="bi bi-geo-alt fs-4 mt-1 me-3"></i>
      <span>36 Dartford Drive, Parklands, South Africa</span>
    </div>
    {/* <div className="d-flex align-items-center mb-3">
      <i className="bi bi-telephone fs-4 me-3"></i>
      <span>+27781407749</span>
    </div> */}
    <div className="d-flex align-items-center mb-3">
      <i className="bi bi-envelope fs-4 me-3"></i>
      <span>info@elpeapgroup.co.za</span>
    </div>
  </div>
  <div className="mt-auto pt-4">
    <h5 className="mb-3 fw-bold">Follow Us</h5>
    <div className="d-flex gap-3">
                    <a href="https://www.linkedin.com/company/elpeap-group/" className="text-white">
                      <i className="bi bi-linkedin fs-4"></i>
                    </a>
                    <a href="https://www.instagram.com/elpeaptech/" className="text-white">
                      <i className="bi bi-instagram fs-4"></i>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61574213537105" className="text-white">
                      <i className="bi bi-facebook fs-4"></i>
                    </a>
                    <a href="https://twitter.com/elpeapgroup" className="text-white">
                      <i className="bi bi-twitter fs-4"></i>
                    </a>
                  </div>
                </div>
              </div>
  
              {/* Contact Form Section */}
              <div className="col-lg-7 bg-white p-4 p-md-5">
              <div className="h-100 d-flex flex-column justify-content-center">
                  {formSubmitted ? (
                    <Alert variant="success" className="text-center mb-0">
                      <h3 className="fw-bold">Thank You!</h3>
                      <p className="mb-0">We've received your message and will respond soon.</p>
                    </Alert>
                  ) : (
                    <div className="contact-form">
                      {formError && <Alert variant="danger">{formError}</Alert>}
                      
                      <Form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '500px' }}>
                        <Form.Group className="mb-3">
                          <Form.Label className="fw-semibold">Name</Form.Label>
                          <Form.Control 
                            type="text" 
                            name="from_name"
                            placeholder="Enter your name" 
                            required 
                            className="py-2 px-3"
                          />
                        </Form.Group>
  
                        <Form.Group className="mb-3">
                          <Form.Label className="fw-semibold">Email</Form.Label>
                          <Form.Control 
                            type="email" 
                            name="from_email"
                            placeholder="Enter your email" 
                            required 
                            className="py-2 px-3"
                          />
                        </Form.Group>
  
                        <Form.Group className="mb-3">
                          <Form.Label className="fw-semibold">Message</Form.Label>
                          <Form.Control
                            as="textarea"
                            name="message"
                            rows={5}
                            placeholder="Your message"
                            required
                            className="py-2 px-3"
                          />
                        </Form.Group>
  
                        <div className="text-center mt-4">
                          <Button 
                            variant="primary" 
                            type="submit" 
                            className="px-5 py-2 fw-bold"
                            style={{ minWidth: '200px' }}
                          >
                            Submit Message
                          </Button>
                        </div>
                      </Form>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ContactPage;