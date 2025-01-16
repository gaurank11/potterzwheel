import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Contact from "./pages/contact";
import Emi from "./pages/emi";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StampDutyCalculator from "./pages/stamp";
import Krisumi from "./pages/Krisumi";
import Mvn from "./pages/Mvn";
export default function App() {
  
  const location = useLocation();
  // Scroll to the top whenever the route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div>
      <Header /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resources/emi" element={<Emi />} />
        <Route path="/resources/stamp_duty" element = {<StampDutyCalculator />} />
        <Route path="/Krisumi" element={<Krisumi />} />
        <Route path="/mvn" element={<Mvn />} />
      </Routes>
      <Footer /> 
    </div>
  );
}

