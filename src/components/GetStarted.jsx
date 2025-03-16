import React from "react";
import { Form, Button } from "react-bootstrap";

const GetStarted = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Quotation form submitted!");
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Request a Quotation</h1>

      {/* <div className="mb-5">
        <h2>Our Services</h2>
        <ul className="list-unstyled">
          <li className="mb-3">
            <strong>Web Development:</strong> We create stunning, responsive
            websites for your business.
          </li>
          <li className="mb-3">
            <strong>E-commerce Solutions:</strong> Build and manage your online
            store with ease.
          </li>
          <li className="mb-3">
            <strong>Social Media Marketing:</strong> Grow your brand with
            targeted social media campaigns.
          </li>
        </ul>
      </div> */}

      <hr />

      {/* <h2 className="mb-4">Request a Quotation</h2> */}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Enter your phone number"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Service Interested In</Form.Label>
          <Form.Select required>
            <option value="">Select a service</option>
            <option value="web-development">Web Development</option>
            <option value="e-commerce">E-commerce Solutions</option>
            <option value="social-media">Social Media Marketing</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Additional Information</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Tell us more about your project"
          />
        </Form.Group>
        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default GetStarted;