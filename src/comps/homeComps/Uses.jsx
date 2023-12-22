import List from "../elements/List";
import surfImg from "../../assets/surf.png";
import HeaderText from "../elements/HeaderText";

const elements = [1, 2, 3];

function Uses() {
  return (
    <section className="uses">
      <HeaderText
        heading={"Use Cases"}
        text={`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum enim
          quo repellat fuga cupiditate illum provident quae ab dicta saepe.
          Nobis minus quam aspernatur earum voluptatum ea maxime unde saepe.`}
      />
      <List elements={elements} img={surfImg} />
    </section>
  );
}

export default Uses;
