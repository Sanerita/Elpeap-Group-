import React from "react";
import Hero from "./Hero";
import About from "./About";
import CTA from "./CTA";
import SEO from "./SEO";

const Home = () => {
  return (
    <div>
      <SEO 
        title="ELPEAP Group | Digital Solutions for Your Business"
        description="Professional web development, e-commerce solutions, social media marketing, and IT support services in South Africa."
        keywords="web development, e-commerce, social media marketing, IT support, South Africa"
        canonicalUrl="https://www.elpeapgroup.co.za/"
      />
      <Hero />
      <About />
      <CTA />
    </div>
  );
};

export default Home;