import React from "react";
import { Helmet } from 'react-helmet-async';

const EmergencyHelp = () => {
  return (
    <div className="container py-5">
      <Helmet>
        <title>24-Hour Website Emergency Fix | ELPEAP Group</title>
        <meta name="description" content="Get your broken website fixed within 24 hours. Our developer team is standing by to solve critical issues immediately." />
      </Helmet>

      <div className="row justify-content-center">
        <div className="col-lg-8 text-center">
          <h1 className="display-5 fw-bold mb-4">
            <span className="text-danger">🚨 Emergency Support</span> Activated
          </h1>
          <p className="lead mb-4">
            Complete this quick form and our tech team will contact you within <span className="text-success fw-bold">30 minutes</span> with:
          </p>
          
          <ul className="list-unstyled mb-5">
            <li className="mb-2">✅ Immediate diagnosis of your issue</li>
            <li className="mb-2">✅ Fixed-price quote (no surprises)</li>
            <li className="mb-2">✅ 24-hour turnaround guarantee</li>
          </ul>

          <div className="bg-light p-4 rounded-3 shadow-sm">
            <form 
              action="https://formsubmit.co/elpeapgroupsocial@gmail.com" 
              method="POST"
              className="text-start"
            >
              {/* Required FormSubmit fields */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_subject" value="🚨 WEBSITE EMERGENCY - Immediate Attention Required" />
              <input type="hidden" name="_autoresponse" value="We've received your emergency request! Our tech team is reviewing your case now and will contact you within 30 minutes. For urgent follow-ups, WhatsApp +27 78 140 7749." />
              <input type="hidden" name="_next" value="https://elpeapgroup.co.za/thank-you" />
              
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Your Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className="form-control" 
                  required 
                />
              </div>
              
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className="form-control" 
                  required 
                />
              </div>
              
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone (WhatsApp preferred) *</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  className="form-control" 
                  required 
                />
              </div>
              
              <div className="mb-3">
                <label htmlFor="website" className="form-label">Website URL *</label>
                <input 
                  type="url" 
                  id="website" 
                  name="website" 
                  className="form-control" 
                  placeholder="https://" 
                  required 
                />
              </div>
              
              <div className="mb-3">
                <label htmlFor="emergency" className="form-label">Emergency Type *</label>
                <select 
                  id="emergency" 
                  name="emergency_type" 
                  className="form-select" 
                  required
                >
                  <option value="">Select one...</option>
                  <option value="Website Down">Website completely down</option>
                  <option value="Hacked">Hacked website</option>
                  <option value="Payment Issues">Payment system broken</option>
                  <option value="Critical Bug">Critical functionality broken</option>
                  <option value="Other">Other emergency</option>
                </select>
              </div>
              
              <div className="mb-3">
                <label htmlFor="details" className="form-label">Emergency Details *</label>
                <textarea 
                  id="details" 
                  name="emergency_details" 
                  className="form-control" 
                  rows="4" 
                  required
                  placeholder="Describe what's broken, when it started, and any error messages..."
                ></textarea>
              </div>
              
              <div className="d-grid">
                <button 
                  type="submit" 
                  className="btn btn-danger btn-lg"
                >
                  <i className="bi bi-send-fill me-2"></i>
                  Send Emergency Request
                </button>
              </div>
              
              <p className="mt-3 small text-muted">
                <i className="bi bi-shield-lock me-1"></i>
                Your information is secure. We never share your data.
              </p>
            </form>
          </div>

          <div className="mt-5 border-top pt-4">
            <h3 className="h5 mb-3">Prefer direct contact?</h3>
            <a 
              href="https://wa.me/27781407749" 
              className="btn btn-success btn-lg"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-whatsapp me-2"></i>
              WhatsApp Our Tech Team
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyHelp;