import surfHero from "../../assets/surf.png";
import freeImg from "../../assets/free.png";
import subImg from "../../assets/subscription.png";
import { moveCardOutLeft } from "../../utilities/animations";
import { useRef, useState } from "react";
function PricingChoice({ setStep, setSubscriptionMode, handleSignUp }) {
  const [subscription, setSubscription] = useState(null);
  const sectionRef = useRef();

  return (
    <section ref={sectionRef} className="pricingChoice">
      <div className="pricingCards">
        <div className="pricingCard">
          <div className="header-text">
            <img className="small-img" src={freeImg} alt="" />
            <h3>Free Tier</h3>
          </div>
          <p>
            You get access to the Tide Chaser application, and can search for up
            to 5 breaks per day to get the daily report for that break. Upgrade
            to the subscription tier to get the 7 day report.
          </p>
          <h4>£0.00 Per Month</h4>
          <button
            onClick={() => setSubscriptionMode(1)}
            className="button-alt-color"
          >
            Select
          </button>
        </div>
        <div className="pricingCard">
          <div className="header-text">
            <img className="small-img" src={subImg} alt="" />
            <h3>Subscription Tier</h3>
          </div>
          <p>
            You get access to an unlimited number of searches, and get access to
            the complete 7 day forecast and report. You also get access to the
            favourites and board menu, as in the free tier.
          </p>
          <h4>£3.99 Per Month</h4>
          <button
            onClick={() => setSubscriptionMode(2)}
            className="button-alt-color"
          >
            Select
          </button>
        </div>
      </div>
      <div style={{ display: "flex", gap: "30px" }}>
        <button
          onClick={(e) => {
            e.preventDefault();
            moveCardOutLeft(sectionRef.current, () => setStep(1));
          }}
        >
          {"<<"} Go Back
        </button>
        <button
          onClick={() => {
            handleSignUp();
          }}
        >
          Complete Subscription
        </button>
      </div>
    </section>
  );
}

export default PricingChoice;
