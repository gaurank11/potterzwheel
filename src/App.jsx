import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route ,useLocation } from "react-router-dom";
import Contact from "./pages/contact";
import Emi from "./pages/emi";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StampDutyCalculator from "./pages/stamp";
import Krisumi from "./pages/Krisumi";
import Mvn from "./pages/Mvn";
import WhatsAppFloatingIcon from "./components/WhatsAppFloatingIcon";
import Trevoc from "./pages/Trevoc";
import PrivacyPolicy from "./pages/Privacy";
import Disclaimer from "./pages/Disclaimer";
import TermsAndConditions from "./pages/Terms";
import TopProperties from "./components/All_Properties";
import ResidentialProperties from "./components/Residential";
import CommercialProperties from "./components/Commercial";
import AboutUsPage from "./pages/Aboutus_Page";
export default function App() {
  
  const location = useLocation();
  // Scroll to the top whenever the route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const businessPhoneNumber = "+919811092501"; 

  return (
    <div>
      <Router>
      <Header /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/resources/emi" element={<Emi />} />
        <Route path="/resources/stamp_duty" element = {<StampDutyCalculator />} />
        <Route path="/Krisumi" element={<Krisumi />} />
        <Route path="/mvn" element={<Mvn />} />
        <Route path="/trevoc" element={<Trevoc/>} />
        <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
        <Route path="/Disclaimer" element={<Disclaimer/>} />
        <Route path="/termsandconditions" element={<TermsAndConditions/>} />
        <Route path="/properties" element={<TopProperties/>} />
        <Route path="/properties/residential" element={<ResidentialProperties/>} />
        <Route path="/properties/commercial" element={<CommercialProperties/>} />

      </Routes>
      <WhatsAppFloatingIcon phoneNumber={businessPhoneNumber} />
      <Footer />
      </Router> 
    </div>
  );
}

