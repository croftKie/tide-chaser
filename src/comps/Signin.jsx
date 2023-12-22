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
      <Features />
      <h1 className="faq"></h1>
      <Footer />
    </div>
  );
};

export default Signin;
