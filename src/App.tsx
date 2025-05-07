// src/App.tsx
import React from "react";
import Nav from "/home/intern-01/Desktop/aaa/AAA/src/assets/components/Nav.tsx";
import TrustSection from "./components/TrustSection";
import Hero from "./components/Hero";
import PricingSection from "./components/PricingSection";
import EducationSection from "./components/EducationSection";
import Footer from "./components/Footer";



const App: React.FC = () => {
  return (
    <div>
      <Nav />
      <Hero/>

      <TrustSection />
      <PricingSection />
      <EducationSection />
      <Footer />
      
    </div>
  );
};

export default App;