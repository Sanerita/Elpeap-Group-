import React from 'react';
import { Container } from 'react-bootstrap';

const PrivacyPolicy = () => {
  return (
    <Container className="my-5">
      <h1 className="mb-4">Privacy Policy</h1>
      <p className="text-muted">Last Updated: {new Date().toLocaleDateString()}</p>
      
      <section className="mb-4">
        <h2 className="h4 mb-3">1. Information We Collect</h2>
        <p>
          We may collect personal information when you:
        </p>
        <ul>
          <li>Submit contact forms or consultation requests</li>
          <li>Subscribe to our newsletter</li>
          <li>Use our services</li>
          <li>Contact us directly</li>
        </ul>
        <p>
          This may include your <strong>name, email address, phone number, business information</strong>, 
          and other details you provide.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="h4 mb-3">2. How We Use Your Information</h2>
        <p>We use collected information to:</p>
        <ul>
          <li>Provide and improve our services</li>
          <li>Respond to inquiries and offer customer support</li>
          <li>Send periodic emails (you can unsubscribe anytime)</li>
          <li>Analyze website usage to enhance user experience</li>
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="h4 mb-3">3. Data Protection</h2>
        <p>
          We implement security measures including:
        </p>
        <ul>
          <li>SSL encryption for data transmission</li>
          <li>Secure storage protocols</li>
          <li>Limited access to personal information</li>
        </ul>
        <p>
          While we strive to protect your data, no method of electronic transmission 
          or storage is 100% secure.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="h4 mb-3">4. Third-Party Services</h2>
        <p>
          We may use third-party services like:
        </p>
        <ul>
          <li><strong>Google Analytics</strong> for website analytics</li>
          <li><strong>EmailJS</strong> for contact form processing</li>
          <li><strong>Payment processors</strong> for transactions</li>
        </ul>
        <p>
          These services have their own privacy policies governing your data.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="h4 mb-3">5. Cookies</h2>
        <p>
          Our website uses cookies to:
        </p>
        <ul>
          <li>Remember user preferences</li>
          <li>Analyze traffic patterns</li>
          <li>Improve site functionality</li>
        </ul>
        <p>
          You can disable cookies in your browser settings, but some features may not work properly.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="h4 mb-3">6. Your Rights</h2>
        <p>
          Under South Africa's <strong>POPIA (Protection of Personal Information Act)</strong>, you may:
        </p>
        <ul>
          <li>Request access to your personal data</li>
          <li>Request correction or deletion</li>
          <li>Object to processing</li>
          <li>Lodge a complaint with the Information Regulator</li>
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="h4 mb-3">7. Policy Updates</h2>
        <p>
          We may update this policy periodically. Changes will be posted on this page with a revised "Last Updated" date.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="h4 mb-3">8. Contact Us</h2>
        <p>
          For privacy-related inquiries, contact us at:
        </p>
        <address>
          <strong>ELPEAP Group</strong><br />
          Email: <a href="mailto:info@elpeapgroup.co.za">info@elpeapgroup.co.za</a><br />
          Phone: +27 78 140 7749
        </address>
      </section>
    </Container>
  );
};

export default PrivacyPolicy;