// src/App.tsx
import React from "react";
import Nav from "/home/intern-01/Desktop/aaa/AAA/src/assets/components/Nav.tsx";
import Hero from "/home/intern-01/Desktop/aaa/AAA/src/assets/components/Hero.tsx";
import TrustSection from "./assets/components/TrustSection";
import PricingSection from "./assets/components/PricingSection";
import EducationSection from "./assets/components/EducationSection";
import Footer from "./assets/components/Footer";


const App: React.FC = () => {
  return (
    <div>
      <Nav />
      <Hero />

      <TrustSection />
      <PricingSection />
      <EducationSection />
      <Footer />
      
    </div>
  );
};

export default App;