import List from "../elements/List";
import surfImg from "../../assets/surf.png";
import HeaderText from "../elements/HeaderText";

const elements = [1, 2, 3];

function Uses() {
  return (
    <section className="uses">
      <HeaderText
        heading={"Use Cases"}
        text={`Anyone can use Tide Chaser, if you need reports about the sea, we are here for you. Though if you're into surfing, wind sports or open water swimming, you'll need Tide Chaser.`}
      />
      <List elements={elements} img={surfImg} />
    </section>
  );
}

export default Uses;
