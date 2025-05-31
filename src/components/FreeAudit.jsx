import React from "react";
import { Helmet } from 'react-helmet-async';

const FreeAudit = () => {
  return (
    <div className="container py-5">
      <Helmet>
        <title>Free Website Health Check | ELPEAP Group</title>
        <meta name="description" content="Get a free professional audit of your website's performance, security, and SEO issues with 23-point analysis." />
        <meta name="keywords" content="free website audit, SEO check, website security scan, performance analysis South Africa" />
      </Helmet>

      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="text-center mb-5">
            <h1 className="display-5 fw-bold mb-3">
              Your <span className="text-success">Free Website Audit</span> Awaits
            </h1>
            <p className="lead">
              Discover exactly what's hurting your online performance with our comprehensive 23-point check
            </p>
          </div>

          <div className="card border-0 shadow-lg">
            <div className="card-body p-4 p-md-5">
              <div className="d-flex align-items-center mb-4">
                <div className="bg-success bg-opacity-10 p-3 rounded-circle me-3">
                  <i className="bi bi-speedometer2 text-success fs-2"></i>
                </div>
                <div>
                  <h2 className="h4 mb-0">What You'll Receive</h2>
                  <p className="text-muted mb-0">Delivered within 48 hours</p>
                </div>
              </div>

              <div className="row g-4 mb-4">
                <div className="col-md-6">
                  <ul className="list-unstyled">
                    <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i> SEO health score</li>
                    <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i> Speed analysis</li>
                    <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i> Mobile compatibility</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="list-unstyled">
                    <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i> Security vulnerabilities</li>
                    <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i> Conversion blockers</li>
                    <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i> Actionable fixes</li>
                  </ul>
                </div>
              </div>

              {/* FormSubmit.co Form */}
              <form 
                action="https://formsubmit.co/elpeapgroupsocial@gmail.com" 
                method="POST"
                className="needs-validation"
                noValidate
              >
                <input type="hidden" name="_subject" value="New Website Audit Request" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_autoresponse" value="Thank you for requesting a website audit! We're analyzing your site and will send your 23-point report within 48 hours. For urgent inquiries, WhatsApp +27 78 140 7749" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://elpeapgroup.co.za/thank-you" />

                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Your Name *</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="name" 
                    name="name" 
                    required 
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email *</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    name="email" 
                    required 
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="website" className="form-label">Website URL *</label>
                  <input 
                    type="url" 
                    className="form-control" 
                    id="website" 
                    name="website_url" 
                    placeholder="https://" 
                    required 
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="concerns" className="form-label">Main Concerns (Optional)</label>
                  <select 
                    className="form-select" 
                    id="concerns" 
                    name="primary_concern"
                  >
                    <option value="">Select if applicable...</option>
                    <option value="Slow Speed">Slow loading speed</option>
                    <option value="Low Traffic">Low website traffic</option>
                    <option value="Poor Conversions">Poor conversion rates</option>
                    <option value="Security Issues">Security concerns</option>
                    <option value="General Audit">General performance check</option>
                  </select>
                </div>

                <div className="d-grid">
                  <button 
                    type="submit" 
                    className="btn btn-success btn-lg"
                  >
                    <i className="bi bi-clipboard2-check me-2"></i>
                    Get My Free Audit
                  </button>
                </div>

                <div className="text-center mt-4">
                  <p className="small text-muted">
                    <i className="bi bi-shield-lock me-1"></i>
                    Your information is secure. We never share your data.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeAudit;