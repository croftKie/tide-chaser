import React, { useState } from "react";
import HomeNav from "./homeComps/HomeNav";
import Footer from "./homeComps/Footer";
import SignUpHero from "./signupComps/signupHero";
import PricingChoice from "./signupComps/PricingChoice";
import { postSignUp } from "../utilities/fetchData";
const Signin = () => {
  const [step, setStep] = useState(1);
  const [subscriptionMode, setSubscriptionMode] = useState(null);
  const [formData, setFormData] = useState(null);

  const handleSignUp = async () => {
    const values = { ...formData, subscription: subscriptionMode };
    const data = await postSignUp(values);
    console.log(data);
  };

  return (
    <div className="signin bg">
      <HomeNav />
      {step ? (
        <SignUpHero setStep={setStep} setFormData={setFormData} />
      ) : (
        <PricingChoice
          setStep={setStep}
          setSubscriptionMode={setSubscriptionMode}
          handleSignUp={handleSignUp}
        />
      )}
      <h1 className="faq"></h1>
      {/* <Footer /> */}
    </div>
  );
};

export default Signin;
