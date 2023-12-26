import surfHero from "../../assets/surf.png";

function PricingChoice() {
  return (
    <section className="pricingChoice">
      <div className="text">
        <img className="small-img" src={surfHero} alt="" />
        <h2>Select a Subscription Tier </h2>
        <p>
          Our goal with Tide Chaser is to create a highly accurate wave report,
          and surfing companion that is also accesible and reasonably priced. We
          do maintain our own servers and databases so have some running costs
          that come with the application.
        </p>
      </div>
      <div className="pricingCards">
        <div className="pricingCard">
          <div className="header-text">
            <img className="small-img" src={surfHero} alt="" />
            <h3>Free Tier</h3>
          </div>
          <p>
            You get access to the Tide Chaser application, and can search for up
            to 5 breaks per day to get the daily report for that break. Upgrade
            to the subscription tier to get the 7 day report.
          </p>
          <h4>£0.00 Per Month</h4>
          <button className="button-alt-color">Select</button>
        </div>
        <div className="pricingCard">
          <div className="header-text">
            <img className="small-img" src={surfHero} alt="" />
            <h3>Subscription Tier</h3>
          </div>
          <p>
            You get access to an unlimited number of searches, and get access to
            the complete 7 day forecast and report. You also get access to the
            favourites and board menu, as in the free tier.
          </p>
          <h4>£3.99 Per Month</h4>
          <button className="button-alt-color">Select</button>
        </div>
      </div>
    </section>
  );
}

export default PricingChoice;
