import HeaderText from "../elements/HeaderText";
import PricingCard from "../elements/PricingCard";

function Pricing() {
  return (
    <section className="pricing">
      <HeaderText
        heading="Pricing"
        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum enim
          quo repellat fuga cupiditate illum provident quae ab dicta saepe.
          Nobis minus quam aspernatur earum voluptatum ea maxime unde saepe."
        buttonText="Join Today"
        buttonColor="button-alt-color"
      />
      <div className="pricingCards">
        <PricingCard
          headingImg=""
          headingText="Free Tier"
          cardText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              nesciunt voluptatibus dolorum at quasi ipsa minus voluptas,
              numquam tempore. Quos sed praesentium omnis ut architecto laborum
              exercitationem tempore accusamus nisi?"
        />
        <PricingCard
          headingImg=""
          headingText="Subscription Tier"
          cardText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              nesciunt voluptatibus dolorum at quasi ipsa minus voluptas,
              numquam tempore. Quos sed praesentium omnis ut architecto laborum
              exercitationem tempore accusamus nisi?"
        />
      </div>
    </section>
  );
}

export default Pricing;
