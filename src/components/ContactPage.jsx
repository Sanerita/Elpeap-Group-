import React, { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import emailjs from '@emailjs/browser';

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
    <Container className="my-5">
      <h1 className="text-center mb-4">Contact Us</h1>
      
      {formSubmitted ? (
        <Alert variant="success" className="text-center">
          <h3>Thank You!</h3>
          <p>We've received your message and will respond soon.</p>
        </Alert>
      ) : (
        <div className="contact-form">
          {formError && <Alert variant="danger">{formError}</Alert>}
          
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control 
                type="text" 
                name="from_name"  // Must match template variable
                placeholder="Enter your name" 
                required 
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control 
                type="email" 
                name="from_email"  // Must match template variable
                placeholder="Enter your email" 
                required 
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                name="message"  // Must match template variable
                rows={3}
                placeholder="Your message"
                required
              />
            </Form.Group>

            <div className="text-center">
              <Button variant="success" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </div>
      )}
    </Container>
  );
};

export default ContactPage;