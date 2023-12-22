import React from "react";
import HomeNav from "./homeComps/HomeNav";
import HomeHero from "./homeComps/HomeHero";
import Features from "./homeComps/Features";
import Uses from "./homeComps/Uses";
import Pricing from "./homeComps/Pricing";
import Footer from "./homeComps/Footer";
import "../css/home.css";

const Home = () => {
  return (
    <div className="home bg">
      <HomeNav />
      <HomeHero />
      <Features />
      <Uses />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Home;
