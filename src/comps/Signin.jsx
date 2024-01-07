import React from "react";
import HomeNav from "./homeComps/HomeNav";
import Footer from "./homeComps/Footer";
import SigninHero from "./signinComps/SignInHero";
import Features from "./homeComps/Features";
const Signin = () => {
  return (
    <div className="signin bg">
      <HomeNav />
      <SigninHero />
    </div>
  );
};

export default Signin;
