import Card from "../elements/Card";
import surfImg from "../../assets/surf.png";
import HeaderText from "../elements/HeaderText";

function Features() {
  return (
    <section className="features">
      <HeaderText
        heading={"Features of Tide Chaser"}
        text="Tide Chaser can be used by Surfers, Wind Surfers, Paddle Boarders,
          Kayaking and swimming. If you're on the water, you can check the waves
          with us."
      />
      <div className="cards">
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
}

export default Features;
