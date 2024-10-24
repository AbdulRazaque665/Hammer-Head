import React from "react";
import Header from "./components/header/Header";
import HeroSection from "./components/herosection/HeroSection";
import Footer from "./components/footer/Footer";
import { Routes, Route } from "react-router-dom";
import AboutsUs from "./components/aboutUs/AboutsUs";
import Careers from "./components/careers/Careers";
import WhyUs from "./components/whyUs/WhyUs";
import ContactUs from "./components/contactUs/ContactUs";
import "./App.css"



const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/aboutus" element={<AboutsUs />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/whyus" element={<WhyUs />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
