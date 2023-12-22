import React from "react";
import HomeNav from "./homeComps/HomeNav";
import Footer from "./homeComps/Footer";
import AboutHero from "./aboutComps/AboutHero";
import Description from "./aboutComps/Description";

const About = () => {
  return (
    <div className="aboutPage">
      <HomeNav />
      <AboutHero />
      <Description />
      <Footer />
    </div>
  );
};

export default About;
