import React from "react";
import OurServices from "../components/OurServices";
import LatestNews from "../components/LatestNews";
import Footer from "../components/Footer";
import FerrariSection from "../components/FerrariSection.js";
import FirstSection from "../components/FirstSection";
import Advantages from "../components/Advantages";
function HomePage() {
  return (
    <>
      <FirstSection />
      <OurServices />
      <FerrariSection />
      <Advantages />
      <LatestNews />
      <Footer />
    </>
  );
}

export default HomePage;
