import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import emailjs from '@emailjs/browser';
import SEO from "./SEO";

// Initialize EmailJS (do this once when your app loads)
emailjs.init('t9SZcWmLIrn5oRGUx'); // Replace with your actual key

const GetStarted = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(null);
    
    emailjs.sendForm(
      'service_j6qwb3j',    // Replace with your EmailJS Service ID
      'template_jy6bogd',   // Replace with your EmailJS Template ID
      e.target,
      't9SZcWmLIrn5oRGUx'     // Same as init key
    )
    .then(() => {
      setFormSubmitted(true);
      e.target.reset(); // Clear the form
    }, (error) => {
      console.error('Email failed:', error);
      setFormError('Failed to send. Please email us directly at elpeapgroupsocial@gmail.com');
    });
  };

  return (
    <Container className="my-5">
      <SEO 
        title="Get Started | Free Consultation | ELPEAP Group"
        description="Schedule your free 30-minute consultation to discuss your project needs with our experts."
        keywords="free consultation, web development quote, digital services"
        canonicalUrl="https://www.elpeapgroup.co.za/get-started"
      />
      {/* Header Section */}
      <Row className="mb-5 text-center">
        <Col>
          <h1 className="display-4 fw-bold mb-3">Ready to Grow?</h1>
          <p className="lead text-muted">
            Take the first step with a <span className="text-success">free 30-minute consultation</span>.
            <br /> We'll discuss your goals and match you with the perfect solution.
          </p>
        </Col>
      </Row>

      {/* Two-Column Layout */}
      <Row className="g-4">
        {/* Left Column - Form */}
        <Col md={6}>
          {formSubmitted ? (
            <Alert variant="success" className="text-center">
              <i className="bi bi-check-circle-fill fs-1"></i>
              <h3 className="mt-3">Thank You!</h3>
              <p>We'll contact you within 24 hours to schedule your consultation.</p>
            </Alert>
          ) : (
            <Form onSubmit={handleSubmit} className="shadow-sm p-4 rounded">
              {formError && <Alert variant="danger">{formError}</Alert>}
              <h3 className="mb-4">Tell Us About Your Project</h3>
              
              <Form.Group className="mb-3">
                <Form.Label>Your Name</Form.Label>
                <Form.Control 
                  type="text" 
                  name="from_name"
                  placeholder="Name Surname" 
                  required 
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                  type="email" 
                  name="from_email"
                  placeholder="you@business.com" 
                  required 
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>What services are you interested in?</Form.Label>
                <Form.Select 
                  name="service_type"
                  required
                >
                  <option value="">Select one...</option>
                  <option>Website Development</option>
                  <option>E-commerce Store</option>
                  <option>Social Media Marketing</option>
                  <option>IT Support</option>
                  <option>Multiple Services</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Project Details</Form.Label>
                <Form.Control 
                  as="textarea" 
                  name="message"
                  rows={3} 
                  placeholder="Briefly describe your goals, timeline, and budget (if any)" 
                  required
                />
              </Form.Group>

              <Button variant="success" type="submit" size="lg" className="w-100">
                Get My Free Consultation
              </Button>
            </Form>
          )}
        </Col>

        {/* Right Column - Benefits */}
        <Col md={6}>
          <div className="bg-light p-4 h-100 rounded">
            <h3 className="mb-4">Why Start With Us?</h3>
            
            <div className="d-flex mb-3">
              <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
              <div>
                <h5 className="fw-bold">No-Risk Consultation</h5>
                <p className="text-muted">Free 30-minute strategy session with no obligation</p>
              </div>
            </div>

            <div className="d-flex mb-3">
              <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
              <div>
                <h5 className="fw-bold">Tailored Solutions</h5>
                <p className="text-muted">Custom recommendations based on your business size and goals</p>
              </div>
            </div>

            <div className="d-flex mb-3">
              <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
              <div>
                <h5 className="fw-bold">Transparent Pricing</h5>
                <p className="text-muted">Clear quotes with no hidden fees</p>
              </div>
            </div>

            <div className="d-flex">
              <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
              <div>
                <h5 className="fw-bold">Quick Start</h5>
                <p className="text-muted">Most projects begin within 5 business days</p>
              </div>
            </div>

            <hr className="my-4" />

            <div className="text-center">
              <h5 className="fw-bold mb-3">Prefer to talk now?</h5>
              <Button variant="outline-success" href="tel:+1234567890" className="me-2">
                <i className="bi bi-telephone me-2"></i>Call Us
              </Button>
              <Button variant="outline-success" href="mailto:elpeapgroupsocial@gmail.com">
                <i className="bi bi-envelope me-2"></i>Email Us
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default GetStarted;