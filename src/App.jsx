import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Footer from "./components/Footer";
import GetStarted from "./components/GetStarted"; // Import the new page
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <div className="flex-grow-1">
          <Routes>
          <Route path="/" element={<Home />} /> {/* Home page */}
         
            <Route path="/services" element={<Services />} />
            <Route path="/get-started" element={<GetStarted />} /> {/* Add this route */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;