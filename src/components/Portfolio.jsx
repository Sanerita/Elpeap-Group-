import React from "react";

const Portfolio = () => {
    const projects = [
      {
        image: "/project1.jpg", // Replace with your image
        title: "E-commerce Website",
        description: "A fully functional online store for a retail business.",
      },
      {
        image: "/project2.jpg", // Replace with your image
        title: "Social Media Campaign",
        description: "A successful campaign that increased engagement by 50%.",
      },
    ];
  
    return (
      <div className="container my-5">
        <h2 className="text-center mb-5 display-4 fw-bold">Our Work</h2>
        <div className="row g-4">
          {projects.map((project, index) => (
            <div key={index} className="col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <img
                  src={project.image}
                  alt={project.title}
                  className="card-img-top"
                />
                <div className="card-body p-4">
                  <h3 className="card-title fw-bold mb-3">{project.title}</h3>
                  <p className="card-text text-muted">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default Portfolio;
    ;