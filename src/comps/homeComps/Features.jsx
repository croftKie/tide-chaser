import Card from "../elements/Card";
import surfImg from "../../assets/surf.png";
import HeaderText from "../elements/HeaderText";

function Features() {
  return (
    <section className="features">
      <HeaderText
        heading={"Features of Tide Chaser"}
        text="Using Tide Chaser you can research wave and oceanography data for any coastline around the world. You can also create favourites and let us know what surfboard you ride to get custom wave reports."
      />
      <div className="cards">
        <Card
          title={"Find Surf Data"}
          content={
            "Using our in-house algorithm we collate wave and oceanography data from 7 different sources to provide as high a quality report as we can. Our reports are available for any beach and coastline around the world."
          }
        />
        <Card
          title={"Add Favourites"}
          content={
            "In our app you can save your favourite spots and get up-to-date reports with a single click. Even if your favourite spot is off the beaten track, we can get the wave data. "
          }
        />
        <Card
          title={"Custom Reports"}
          content={
            "A feature unique to Tide Chaser, if you tell us the size of board you ride, we can adjust the wave data on the fly to give you a report that matches the size of waves that your board suits."
          }
        />
      </div>
    </section>
  );
}

export default Features;
