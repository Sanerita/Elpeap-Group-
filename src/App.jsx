import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import GetStarted from "./components/GetStarted";
import Footer from "./components/Footer";
import ContactPage from "./components/ContactPage";
import ScrollToTop from "./components/ScrollToTop";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/terms-of-service";

function App() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Router>
      {/* Add lang attribute for better accessibility */}
      <div className="d-flex flex-column min-vh-100" lang="en">
        {/* Add structured data for organization */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "ELPEAP Group",
              "url": "https://www.elpeapgroup.com",
              "logo": "https://www.elpeapgroup.com/logo.png",
              "sameAs": [
                "https://www.facebook.com/elpeapgroup",
                "https://www.linkedin.com/company/elpeapgroup"
              ]
            }
          `}
        </script>
        
        <Navbar />
        <ScrollToTop /> {/* New component to handle scroll restoration */}
        
        <main className="flex-grow-1"> {/* Semantic main tag */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/get-started" element={<GetStarted />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
          </Routes>
        </main>

        <Footer />

        {/* Enhanced Back to Top Button with ARIA label */}
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
            }}
            aria-label="Scroll to top"
          >
            <i className="bi bi-arrow-up"></i>
          </button>
        )}
      </div>
    </Router>
  );
}

<script type="application/ld+json">
{
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ELPEAP Group",
    "url": "https://www.elpeapgroup.co.za",
    "logo": "https://www.elpeapgroup.co.za/android-chrome-512x512.png",
    "description": "Digital Solutions & Business Services in South Africa",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "36 Dartford Drive",
      "addressLocality": "Cape Town",
      "addressRegion": "Western Cape",
      "postalCode": "7441",
      "addressCountry": "ZA"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+27-78-140-7749",
      "contactType": "customer service"
    },
    "sameAs": [
      "https://www.facebook.com/elpeapgroup",
      "https://www.linkedin.com/company/elpeapgroup"
    ]
  }
}
</script>

export default App;