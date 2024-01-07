import HeaderText from "../elements/HeaderText";
import PricingCard from "../elements/PricingCard";
import freeImg from "../../assets/free.png";
import subImg from "../../assets/subscription.png";
function Pricing() {
  return (
    <section className="pricing">
      <HeaderText
        heading="Pricing"
        text="Our goal with Tide Chaser is to create a highly accurate wave report, and surfing companion that is also accesible and reasonably priced. We do maintain our own servers and databases so have some running costs that come with the application."
      />
      <div className="pricingCards">
        <PricingCard
          headingImg={freeImg}
          headingText="Free Tier"
          cardText="You get access to the Tide Chaser application, and can search for up to 5 breaks per day to get the daily report for that break. Upgrade to the subscription tier to get the 7 day report."
        />
        <PricingCard
          headingImg={subImg}
          headingText="Subscription Tier"
          cardText="You get access to an unlimited number of searches, and get access to the complete 7 day forecast and report. You also get access to the favourites and board menu, as in the free tier."
        />
      </div>
    </section>
  );
}

export default Pricing;
