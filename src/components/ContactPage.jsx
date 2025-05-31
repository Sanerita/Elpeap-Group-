import React, { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import SEO from "./SEO";

const ContactPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(null);
    setIsLoading(true);

    const formData = new FormData(e.target);
    formData.append('_subject', 'New Contact Form Submission');
    formData.append('_template', 'table');
    formData.append('_autoresponse', 'Thank you for contacting ELPEAP Group! We will respond within 24 hours.');

    try {
      const response = await fetch('https://formsubmit.co/ajax/elpeapgroupsocial@gmail.com', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
       body: JSON.stringify({
        _captcha: 'false', // Disable CAPTCHA for testing
        _template: 'table',
        _subject: 'NEW Website Contact - URGENT',
        name: e.target.name.value,
        email: e.target.email.value,
        phone: e.target.phone?.value || 'Not provided',
        service: e.target.service?.value || 'Not specified',
        message: e.target.message.value,
        _autoresponse: `Hi ${e.target.name.value}, we've received your message!`,
        _replyto: e.target.email.value // Ensure reply-to is set
      })
      });

      if (!response.ok) throw new Error('Submission failed');
      
      setFormSubmitted(true);
      e.target.reset();
    } catch (error) {
      console.error('Submission error:', error);
      setFormError('Failed to send. Please WhatsApp us at +27 78 140 7749');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container className="my-5 d-flex flex-column min-vh-100 justify-content-center">
      <SEO 
        title="Contact ELPEAP Group | Digital Solutions & Business Services"
        description="Get in touch with our team for web development, AI automation, and emergency tech support in South Africa."
        keywords="contact web developer South Africa, tech support contact, AI automation inquiry"
        url="https://www.elpeapgroup.co.za/contact"
        image="https://www.elpeapgroup.co.za/social-preview-contact.jpg"
      />
      
      <div className="text-center mb-5">
        <h1 className="fw-bold display-4 mb-3">Contact Us</h1>
        <div className="mx-auto accent-line"></div>
      </div>
  
      <div className="row justify-content-center align-items-center">
        <div className="col-xl-8 col-lg-10">
          <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
            <div className="row g-0">
              {/* Contact Information Sidebar */}
              <div className="col-lg-5 p-4 p-md-5 contact-sidebar">
                <div className="my-auto">
                  <h2 className="mb-4 fw-bold">Get in Touch</h2>
                  <p className="mb-4 lead">We'd love to hear about your project</p>
                  
                  <div className="contact-info-item">
                    <i className="bi bi-geo-alt"></i>
                    <span>36 Dartford Drive, Parklands, South Africa</span>
                  </div>
                  
                  <div className="contact-info-item">
                    <i className="bi bi-envelope"></i>
                    <span>info@elpeapgroup.co.za</span>
                  </div>
                  
                  <div className="contact-info-item">
                    <i className="bi bi-whatsapp"></i>
                    <span>+27 78 140 7749</span>
                  </div>
                </div>
                
                <div className="mt-auto pt-4">
                  <h5 className="mb-3 fw-bold">Follow Us</h5>
                  <div className="social-links">
                    <a href="https://www.linkedin.com/company/elpeap-group/" target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="https://www.instagram.com/elpeaptech/" target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61574213537105" target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-facebook"></i>
                    </a>
                  </div>
                </div>
              </div>
  
              {/* Contact Form Section */}
              <div className="col-lg-7 bg-white p-4 p-md-5">
                <div className="h-100 d-flex flex-column justify-content-center">
                  {formSubmitted ? (
                    <Alert variant="success" className="text-center mb-0">
                      <i className="bi bi-check-circle-fill fs-1 d-block mb-3"></i>
                      <h3 className="fw-bold">Message Received!</h3>
                      <p>We'll respond within 24 hours. For urgent matters:</p>
                      <Button 
                        href="https://wa.me/27781407749" 
                        variant="success"
                        className="mt-2"
                      >
                        <i className="bi bi-whatsapp me-2"></i>
                        WhatsApp Now
                      </Button>
                    </Alert>
                  ) : (
                    <div className="contact-form">
                      {formError && (
                        <Alert variant="danger">
                          <i className="bi bi-exclamation-triangle-fill me-2"></i>
                          {formError}
                        </Alert>
                      )}
                      
                      <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                          <Form.Label>Full Name *</Form.Label>
                          <Form.Control 
                            type="text" 
                            name="name"
                            placeholder="Your name" 
                            required 
                          />
                        </Form.Group>
  
                        <Form.Group className="mb-3">
                          <Form.Label>Email *</Form.Label>
                          <Form.Control 
                            type="email" 
                            name="email"
                            placeholder="your@email.com" 
                            required 
                          />
                        </Form.Group>

                        <Form.Group className="mb-3">
                          <Form.Label>Phone</Form.Label>
                          <Form.Control 
                            type="tel" 
                            name="phone"
                            placeholder="+27 78 140 7749" 
                          />
                        </Form.Group>
  
                        <Form.Group className="mb-3">
                          <Form.Label>Service Needed</Form.Label>
                          <Form.Select name="service">
                            <option value="">Select service...</option>
                            <option value="Emergency Support">24/7 Emergency Support</option>
                            <option value="AI Automation">AI Workflow Automation</option>
                            <option value="Web Development">Custom Web Development</option>
                            <option value="Other">Other Inquiry</option>
                          </Form.Select>
                        </Form.Group>
  
                        <Form.Group className="mb-3">
                          <Form.Label>Message *</Form.Label>
                          <Form.Control
                            as="textarea"
                            name="message"
                            rows={5}
                            placeholder="Tell us about your project..."
                            required
                          />
                        </Form.Group>
  
                        <div className="text-center mt-4">
                          <Button 
                            variant="primary" 
                            type="submit" 
                            disabled={isLoading}
                            className="submit-btn"
                          >
                            {isLoading ? (
                              <>
                                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                Sending...
                              </>
                            ) : (
                              'Send Message'
                            )}
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

      <style jsx>{`
        .contact-sidebar {
          background: linear-gradient(135deg, #2c3e50, #4ca1af);
          color: white;
          min-height: 500px;
        }
        .accent-line {
          width: 80px;
          height: 4px;
          background: #4ca1af;
        }
        .contact-info-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 1rem;
        }
        .contact-info-item i {
          font-size: 1.25rem;
          margin-right: 1rem;
          margin-top: 0.2rem;
        }
        .social-links a {
          color: white;
          font-size: 1.5rem;
          margin-right: 1rem;
          transition: all 0.3s;
        }
        .social-links a:hover {
          transform: translateY(-3px);
        }
        .submit-btn {
          min-width: 200px;
          padding: 10px 20px;
          font-weight: 600;
        }
      `}</style>
    </Container>
  );
};

export default ContactPage;