import React from "react";
import Hero from "./Hero";
import About from "./About";
import CTA from "./CTA";
import SEO from "./SEO";
import ErrorBoundary from './ErrorBoundary'; 

const Home = () => {
  return (
    <ErrorBoundary>
    <div>
      <SEO 
        title="ELPEAP Group | Digital Solutions & Business Services"
        description="Professional web development, e-commerce solutions, and digital marketing services in South Africa"
        keywords="web development, South Africa, e-commerce, digital marketing"
        url="https://www.elpeapgroup.co.za"
        image="https://www.elpeapgroup.co.za/social-preview.jpg"
      />
      <Hero />
     
      <About />
   
      <CTA />
    </div>
    </ErrorBoundary>
  );
};

export default Home;