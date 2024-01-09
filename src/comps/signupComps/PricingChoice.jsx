import surfHero from "../../assets/surf.png";
import freeImg from "../../assets/free.png";
import subImg from "../../assets/subscription.png";
import { moveCardOutLeft } from "../../utilities/animations";
import { useRef, useState } from "react";
function PricingChoice({ setStep, setSubscriptionMode, handleSignUp }) {
  const sectionRef = useRef();
  const [freeCard, setFreeCard] = useState(false);
  const [subCard, setSubCard] = useState(true);
  return (
    <section ref={sectionRef} className="pricingChoice">
      <div className="text">
        {/* <img className="small-img" src={surfHero} alt="" /> */}
        <h3>Select A Subscription Type:</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, quia
          veniam beatae at delectus aspernatur tempore dolor. Reiciendis quos
          voluptatibus quasi enim error incidunt officiis perferendis
          exercitationem omnis, et neque.
        </p>
        <div style={{ display: "flex", gap: "30px" }}>
          <button
            onClick={(e) => {
              e.preventDefault();
              moveCardOutLeft(sectionRef.current, () => setStep(1));
            }}
          >
            <h6>Go Back</h6>
          </button>
          <button
            onClick={() => {
              handleSignUp();
            }}
          >
            <h6>Complete Subscription</h6>
          </button>
        </div>
      </div>
      <div className="card-container">
        <div className="pricingCards">
          <div className={freeCard ? "pricingCard" : "pricingCard selected"}>
            <div className="header-text">
              <img className="small-img" src={freeImg} alt="" />
              <h3>Free Tier</h3>
            </div>
            <p>
              You get access to the Tide Chaser application, and can search for
              up to 5 breaks per day to get the daily report for that break.
              Upgrade to the subscription tier to get the 7 day report.
            </p>
            <h4>£0.00 Per Month</h4>
            <button
              onClick={() => {
                setFreeCard(false);
                setSubCard(true);
              }}
              className="button-alt-color"
            >
              Select
            </button>
          </div>
          <div className={subCard ? "pricingCard" : "pricingCard selected"}>
            <div className="header-text">
              <img className="small-img" src={subImg} alt="" />
              <h3>Subscription Tier</h3>
            </div>
            <p>
              You get access to an unlimited number of searches, and get access
              to the complete 7 day forecast and report. You also get access to
              the favourites and board menu, as in the free tier.
            </p>
            <h4>£3.99 Per Month</h4>
            <button
              onClick={() => {
                setSubCard(false);
                setFreeCard(true);
              }}
              className="button-alt-color"
            >
              Select
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingChoice;
