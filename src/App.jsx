import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import GetStarted from "./components/GetStarted";
import Footer from "./components/Footer";
import ContactPage from "./components/ContactPage";

function App() {
  const [showButton, setShowButton] = useState(false);

  // Show the button when the user scrolls down 100px
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/get-started" element={<GetStarted />} />
            <Route path="/contact" element={<ContactPage />} /> {/* Add this route */}
          </Routes>
        </div>
        <Footer />

        {/* Back to Top Button */}
        {showButton && (
          <button
            onClick={scrollToTop}
            className="btn btn-success btn-lg rounded-circle shadow"
            style={{
              position: "fixed",
              bottom: "20px",
              right: "20px",
              zIndex: 1000,
              width: "50px",
              height: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <i className="bi bi-arrow-up"></i>
          </button>
        )}
      </div>
    </Router>
  );
}

export default App;