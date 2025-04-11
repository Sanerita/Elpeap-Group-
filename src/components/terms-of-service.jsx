import React from 'react';
import { Container } from 'react-bootstrap';

const TermsOfService = () => {
  return (
    <Container className="my-5 legal-document">
      <h1 className="mb-4">Terms of Service</h1>
      <p className="text-muted">Effective Date: {new Date().toLocaleDateString()}</p>
      
      <section className="mb-4">
        <h2 className="h4 mb-3">1. Acceptance of Terms</h2>
        <p>
          By accessing or using the ELPEAP Group website (<strong>elpeapgroup.co.za</strong>) 
          and services, you agree to comply with and be bound by these Terms. 
          If you disagree with any part, please discontinue use immediately.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="h4 mb-3">2. Services Description</h2>
        <p>
          ELPEAP Group provides:
        </p>
        <ul>
          <li>Web development and design services</li>
          <li>E-commerce solutions</li>
          <li>Social media marketing</li>
          <li>Technical support services</li>
        </ul>
        <p>
          All services are subject to separate service agreements.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="h4 mb-3">3. User Responsibilities</h2>
        <p>You agree to:</p>
        <ul>
          <li>Provide accurate information when contacting us</li>
          <li>Not use our services for illegal activities</li>
          <li>Not attempt to disrupt website functionality</li>
          <li>Not reproduce/content without permission</li>
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="h4 mb-3">4. Intellectual Property</h2>
        <p>
          All website content (logos, text, graphics) is owned by ELPEAP Group and 
          protected by South African copyright laws. Unauthorized use is prohibited.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="h4 mb-3">5. Payments & Refunds</h2>
        <p>
          For paid services:
        </p>
        <ul>
          <li>Prices are in <strong>ZAR (South African Rand)</strong></li>
          <li>50% deposit typically required to commence work</li>
          <li>Refund policy specified in individual service contracts</li>
          <li>Late payments may incur 2% monthly interest</li>
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="h4 mb-3">6. Limitation of Liability</h2>
        <p>
          ELPEAP Group shall not be liable for:
        </p>
        <ul>
          <li>Any indirect, incidental damages</li>
          <li>Service interruptions beyond our control</li>
          <li>Third-party actions affecting your business</li>
        </ul>
        <p>
          Maximum liability limited to fees paid for services.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="h4 mb-3">7. Termination</h2>
        <p>
          We may terminate access if you:
        </p>
        <ul>
          <li>Violate these Terms</li>
          <li>Engage in fraudulent activities</li>
          <li>Fail to make required payments</li>
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="h4 mb-3">8. Governing Law</h2>
        <p>
          These Terms are governed by laws of <strong>South Africa</strong>. 
          Disputes will be resolved in courts of <strong>Cape Town</strong>.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="h4 mb-3">9. Changes to Terms</h2>
        <p>
          We reserve the right to modify these Terms. Continued use after changes 
          constitutes acceptance. Major changes will be notified via email to active clients.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="h4 mb-3">10. Contact Information</h2>
        <address>
          <strong>ELPEAP Group</strong><br />
          36 Dartford Drive, Parklands, South Africa<br />
          Email: <a href="mailto:legal@elpeapgroup.co.za">legal@elpeapgroup.co.za</a><br />
          Phone: +27 78 140 7749
        </address>
      </section>
    </Container>
  );
};

export default TermsOfService;