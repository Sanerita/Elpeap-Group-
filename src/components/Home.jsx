import React from "react";
import Hero from "./Hero";
import About from "./About";
import CTA from "./CTA";
// import Testimonials from "./Testimonials";
// import Portfolio from "./Portfolio";


const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <CTA />
      {/* <Testimonials />
      <Portfolio /> */}
    </div>
  );
};

export default Home;