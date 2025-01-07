import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "./pages/contact";
import Emi from "./pages/emi";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StampDutyCalculator from "./pages/stamp";
import Krisumi from "./pages/Krisumi";
export default function App() {
  return (
    <div>
      <Header /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resources/emi" element={<Emi />} />
        <Route path="/resources/stamp_duty" element = {<StampDutyCalculator />} />
        <Route path="/Krisumi" element={<Krisumi />} />
      </Routes>
      <Footer /> 
    </div>
  );
}
