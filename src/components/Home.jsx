import React from "react";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import CTA from "./CTA";
import Testimonials from "./Testimonials";
import Portfolio from "./Portfolio";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <CTA />
      <Testimonials />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default Home;