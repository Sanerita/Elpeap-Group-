import React from 'react';
import { Container } from 'react-bootstrap';
import SEO from "./SEO";

const TermsOfService = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <>
      <SEO 
        title={`Emergency Tech Support Terms | ELPEAP Group | ${currentYear}`}
        description="Legal terms for 24-hour website emergency services, AI automation, and digital solutions in South Africa. Effective as of current date."
        keywords="emergency tech support terms, 24-hour website help agreement, AI automation contract, South Africa IT service terms"
        url="https://www.elpeapgroup.co.za/terms"
        image="https://www.elpeapgroup.co.za/social-preview-legal.jpg"
      />
      
      <Container className="my-5 legal-document">
        <header className="mb-4 border-bottom pb-3">
          <h1 className="fw-bold">Emergency Service Terms Agreement</h1>
          <p className="text-muted">
            <strong>Effective Date:</strong> {new Date().toLocaleDateString('en-ZA', {year: 'numeric', month: 'long', day: 'numeric'})}<br />
            <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-ZA', {year: 'numeric', month: 'long', day: 'numeric'})}
          </p>
          <div className="alert alert-warning mt-3">
            <i className="bi bi-exclamation-triangle-fill me-2"></i>
            <strong>For emergency support requests:</strong> These terms supplement any verbal/written emergency service agreement.
          </div>
        </header>

        {/* Emergency Services Section */}
        <section className="mb-5">
          <h2 className="h4 mb-3 fw-bold">1. Emergency Service Terms</h2>
          <p><strong>1.1 Definitions:</strong></p>
          <ul className="list-unstyled ms-4">
            <li className="mb-2">• <strong>"Emergency Service"</strong> = Critical technical issues requiring resolution within 24 hours</li>
            <li className="mb-2">• <strong>"Response Time"</strong> = Time from request submission to first contact attempt</li>
            <li>• <strong>"Resolution Period"</strong> = Maximum 24 hours unless otherwise agreed</li>
          </ul>

          <p className="mt-3"><strong>1.2 Service Levels:</strong></p>
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Service Tier</th>
                  <th>Response Time</th>
                  <th>Resolution Period</th>
                  <th>Availability</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Critical Emergency</td>
                  <td>≤ 2 hours</td>
                  <td>24 hours</td>
                  <td>24/7/365</td>
                </tr>
                <tr>
                  <td>Standard Emergency</td>
                  <td>≤ 6 hours</td>
                  <td>48 hours</td>
                  <td>Mon-Sun, 8am-10pm</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-3"><strong>1.3 Emergency Fees:</strong></p>
          <ul>
            <li className="mb-2">Diagnostic fee: <strong>R500</strong> (waived if proceeding with repair)</li>
            <li className="mb-2">After-hours premium: <strong>+30%</strong> (10pm-6am)</li>
            <li>Payment due immediately upon resolution</li>
          </ul>
        </section>

        {/* AI Automation Section */}
        <section className="mb-5">
          <h2 className="h4 mb-3 fw-bold">2. AI Automation Services</h2>
          <p><strong>2.1 Service Scope:</strong></p>
          <ul>
            <li className="mb-2">Workflow automation design and implementation</li>
            <li className="mb-2">Custom AI model development</li>
            <li>Integration with existing systems</li>
          </ul>

          <p className="mt-3"><strong>2.2 Data Handling:</strong></p>
          <ul>
            <li className="mb-2">Client retains ownership of all input/output data</li>
            <li className="mb-2">Training data deleted after project completion</li>
            <li>GDPR/POPIA compliance guaranteed</li>
          </ul>
        </section>

        {/* Core Terms */}
        <section className="mb-5">
          <h2 className="h4 mb-3 fw-bold">3. General Terms</h2>
          
          <p><strong>3.1 Payment Terms:</strong></p>
          <ul>
            <li className="mb-2">Emergency services: <strong>100% upfront</strong></li>
            <li className="mb-2">Standard projects: <strong>50% deposit</strong></li>
            <li>Late payments incur <strong>2% weekly</strong> interest</li>
          </ul>

          <p className="mt-3"><strong>3.2 Liability:</strong></p>
          <ul>
            <li className="mb-2">Maximum liability = <strong>1.5x</strong> project fee</li>
            <li className="mb-2">No liability for third-party service failures</li>
            <li>Force majeure exclusions apply</li>
          </ul>
        </section>

        {/* Termination */}
        <section className="mb-5">
          <h2 className="h4 mb-3 fw-bold">4. Termination</h2>
          <p><strong>4.1 Emergency Services:</strong> May terminate mid-resolution with <strong>R2000</strong> cancellation fee.</p>
          <p className="mt-3"><strong>4.2 Standard Projects:</strong> 30-day notice period applies.</p>
        </section>

        {/* Contact */}
        <section className="mt-5 pt-4 border-top">
          <h2 className="h4 mb-3 fw-bold">Emergency Legal Contact</h2>
          <address>
            <strong>ELPEAP Group (Pty) Ltd</strong><br />
            <i className="bi bi-geo-alt-fill text-danger"></i> 36 Dartford Drive, Parklands, 7441<br />
            <i className="bi bi-envelope-fill text-primary"></i> <a href="mailto:legal@elpeapgroup.co.za">legal@elpeapgroup.co.za</a><br />
            <i className="bi bi-phone-fill text-success"></i> +27 78 140 7749 (24/7 Legal Emergencies)<br />
            <i className="bi bi-file-earmark-text"></i> Reg: 2025/123083/07 | VAT: 9073241300
          </address>
          <div className="alert alert-danger mt-3">
            <i className="bi bi-megaphone-fill me-2"></i>
            <strong>Urgent legal notices:</strong> WhatsApp +27 78 140 7749 with "LEGAL URGENT" in message.
          </div>
        </section>
      </Container>
    </>
  );
};

export default TermsOfService;