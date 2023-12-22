import surfHero from "../../assets/surf.png";

function PricingChoice() {
  return (
    <section className="pricingChoice">
      <div className="text">
        <img className="small-img" src={surfHero} alt="" />
        <h2>Select a Subscription Tier </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
          recusandae necessitatibus eos inventore maxime impedit, enim commodi
          obcaecati adipisci, reprehenderit ducimus nesciunt explicabo incidunt
          ipsam, nemo excepturi. Optio, minima quia.
        </p>
      </div>
      <div className="pricingCards">
        <div className="pricingCard">
          <div className="header-text">
            <img className="small-img" src={surfHero} alt="" />
            <h3>Free Tier</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            nesciunt voluptatibus dolorum at quasi ipsa minus voluptas, numquam
            tempore. Quos sed praesentium omnis ut architecto laborum
            exercitationem tempore accusamus nisi?
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            nesciunt voluptatibus dolorum at quasi ipsa minus voluptas, numquam
            tempore. Quos sed praesentium omnis ut architecto laborum
            exercitationem tempore accusamus nisi?
          </p>
          <h4>£2.99 Per Month</h4>
          <button className="button-alt-color">Select</button>
        </div>
      </div>
    </section>
  );
}

export default PricingChoice;
