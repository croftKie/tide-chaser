import React from "react";
import HomeNav from "./homeComps/HomeNav";
import Footer from "./homeComps/Footer";
import SignUpHero from "./signupComps/signupHero";
import PricingChoice from "./signupComps/PricingChoice";
const Signin = () => {
  return (
    <div className="signin bg">
      <HomeNav />
      <SignUpHero />
      <PricingChoice />
      <Footer />
    </div>
  );
};

export default Signin;
