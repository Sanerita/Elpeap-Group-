import React from "react";
import SEO from './SEO';

const Testimonials = () => {
    const testimonials = [
      {
        name: "John Doe",
        role: "CEO, Company A",
        quote:
          "My Business helped us build an amazing website that boosted our sales by 30%!",
      },
      {
        name: "Jane Smith",
        role: "Founder, Company B",
        quote:
          "Their social media marketing strategies are top-notch. Highly recommend!",
      },
    ];
  
    return (
<>
<SEO 
        title="ELPEAP Group | Digital Solutions & Business Services"
        description="Professional web development, e-commerce solutions, and digital marketing services in South Africa"
        keywords="web development, South Africa, e-commerce, digital marketing"
        url="https://www.elpeapgroup.co.za"
        image="https://www.elpeapgroup.co.za/social-preview.jpg"
      />

      <div className="container my-5">
        <h2 className="text-center mb-5 display-4 fw-bold">What Our Clients Say</h2>
        <div className="row g-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <p className="card-text fst-italic mb-4">
                    "{testimonial.quote}"
                  </p>
                  <p className="card-text fw-bold mb-1">{testimonial.name}</p>
                  <p className="card-text text-muted">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </>
    );
  };

  export default Testimonials;