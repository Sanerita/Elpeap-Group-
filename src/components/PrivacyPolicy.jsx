import React from 'react';
import { Container } from 'react-bootstrap';
import SEO from './SEO';

const PrivacyPolicy = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <Container className="my-5 legal-document">
      <SEO 
        title={`Emergency Tech Support Privacy Policy | ELPEAP Group | ${currentYear}`}
        description="How we protect your data during 24-hour emergency website fixes, AI automation services, and digital solutions in South Africa. POPIA/GDPR compliant."
        keywords="emergency support privacy policy, website security data protection, AI automation data handling, South Africa POPIA compliance"
        url="https://www.elpeapgroup.co.za/privacy"
        image="https://www.elpeapgroup.co.za/social-preview-privacy.jpg"
      />

      <header className="mb-4 border-bottom pb-3">
        <h1 className="fw-bold">Data Protection & Privacy Policy</h1>
        <p className="text-muted">
          <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-ZA', {year: 'numeric', month: 'long', day: 'numeric'})}<br />
          <strong>Effective:</strong> Immediately upon publication
        </p>
        <div className="alert alert-info mt-3">
          <i className="bi bi-shield-lock me-2"></i>
          <strong>For emergency clients:</strong> See Section 4 for urgent data processing protocols.
        </div>
      </header>

      {/* Emergency Data Handling */}
      <section className="mb-5">
        <h2 className="h4 mb-3 fw-bold">1. Emergency Service Data Collection</h2>
        <p>During 24-hour emergency support, we may collect:</p>
        <ul className="list-unstyled ms-4">
          <li className="mb-2">• <strong>Critical Access Data:</strong> Website credentials (stored encrypted, deleted after 72 hours)</li>
          <li className="mb-2">• <strong>System Logs:</strong> Error reports and diagnostic files</li>
          <li className="mb-2">• <strong>Emergency Contact:</strong> After-hours phone/WhatsApp numbers</li>
          <li>• <strong>Payment Verification:</strong> Limited card details (processed via PCI-compliant gateways)</li>
        </ul>
        <div className="alert alert-warning mt-3">
          <i className="bi bi-exclamation-triangle me-2"></i>
          <strong>Note:</strong> Emergency data collection bypasses standard consent workflows when legally permitted to restore critical services.
        </div>
      </section>

      {/* AI Data Processing */}
      <section className="mb-5">
        <h2 className="h4 mb-3 fw-bold">2. AI Automation Data Handling</h2>
        <p><strong>2.1 Training Data:</strong></p>
        <ul>
          <li className="mb-2">Client-provided datasets are processed in isolated environments</li>
          <li className="mb-2">All training data purged within 30 days of project completion</li>
          <li>No cross-client data blending without explicit consent</li>
        </ul>
        
        <p className="mt-3"><strong>2.2 Model Outputs:</strong></p>
        <ul>
          <li>Clients retain full ownership of generated outputs</li>
          <li>No retention of processed data beyond contract terms</li>
        </ul>
      </section>

      {/* Core Privacy Sections */}
      <section className="mb-5">
        <h2 className="h4 mb-3 fw-bold">3. Standard Data Practices</h2>
        
        <p><strong>3.1 Collection Methods:</strong></p>
        <ul>
          <li className="mb-2">Website forms (Tawk.to chat, emergency requests)</li>
          <li className="mb-2">Service provisioning portals</li>
          <li>Automated monitoring (with consent banners)</li>
        </ul>

        <p className="mt-3"><strong>3.2 Security Protocols:</strong></p>
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Data Type</th>
                <th>Encryption</th>
                <th>Retention Period</th>
                <th>Access Control</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Emergency Credentials</td>
                <td>AES-256</td>
                <td>72 hours</td>
                <td>Senior Techs Only</td>
              </tr>
              <tr>
                <td>Client Documents</td>
                <td>TLS 1.3+</td>
                <td>Project + 1 year</td>
                <td>Assigned Team</td>
              </tr>
              <tr>
                <td>Payment Info</td>
                <td>PCI DSS</td>
                <td>Transaction only</td>
                <td>Finance Team</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Compliance */}
      <section className="mb-5">
        <h2 className="h4 mb-3 fw-bold">4. Legal Compliance</h2>
        
        <p><strong>4.1 POPIA (South Africa):</strong></p>
        <ul>
          <li className="mb-2">Registered Information Officer: Sanelisiwe Sileku </li>
          <li className="mb-2">Manual available upon request per Section 51</li>
          <li>Breach notification within 72 hours</li>
        </ul>

        <p className="mt-3"><strong>4.2 Cross-Border Transfers:</strong></p>
        <ul>
          <li>EU/Swiss data: GDPR-compliant SCCs</li>
          <li>Other regions: Case-by-case impact assessments</li>
        </ul>
      </section>

      {/* User Rights */}
      <section className="mb-5">
        <h2 className="h4 mb-3 fw-bold">5. Your Data Rights</h2>
        
        <div className="row">
          <div className="col-md-6">
            <div className="card h-100 border-primary">
              <div className="card-body">
                <h3 className="h5 card-title text-primary">Standard Requests</h3>
                <ul>
                  <li>Access report (free once annually)</li>
                  <li>Data correction</li>
                  <li>Processing objections</li>
                </ul>
                <p className="small text-muted">Processed within 14 business days</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100 border-danger">
              <div className="card-body">
                <h3 className="h5 card-title text-danger">Emergency Requests</h3>
                <ul>
                  <li>Immediate data freeze</li>
                  <li>Urgent deletion</li>
                  <li>Breach mitigation</li>
                </ul>
                <p className="small text-muted">24-hour response via <a href="mailto:privacy-emergency@elpeapgroup.co.za">privacy-emergency@elpeapgroup.co.za</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="mt-5 pt-4 border-top">
        <h2 className="h4 mb-3 fw-bold">Data Protection Contacts</h2>
        <address>
          <strong>Information Officer:</strong> Sanelisiwe Sileku <br />
          <i className="bi bi-envelope text-primary"></i> <a href="mailto:dpo@elpeapgroup.co.za">dpo@elpeapgroup.co.za</a><br />
          <i className="bi bi-phone text-success"></i> +27 78 140 7749 (ext. 2)<br />
          <i className="bi bi-building"></i> 36 Dartford Drive, Parklands, 7441<br /><br />
          
          <strong>EU Representative:</strong> [If applicable]<br />
          <strong>Registration Number:</strong> 2025/123083/07
        </address>
        
        <div className="alert alert-danger mt-3">
          <i className="bi bi-megaphone-fill me-2"></i>
          <strong>Urgent Data Requests:</strong> WhatsApp +27 78 140 7749 with "PRIVACY URGENT" for immediate assistance.
        </div>
      </section>
    </Container>
  );
};

export default PrivacyPolicy;