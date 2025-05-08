// src/App.tsx
import React from "react";

import TrustSection from "./components/TrustSection";
import Hero from "./components/Hero";
import PricingSection from "./components/PricingSection";
import EducationSection from "./components/EducationSection";
import Footer from "./components/Footer";
import Navbar from "./components/Nav";



const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero/>

      <TrustSection />
      <PricingSection />
      <EducationSection />
      <Footer />
      
    </div>
  );
};

export default App;