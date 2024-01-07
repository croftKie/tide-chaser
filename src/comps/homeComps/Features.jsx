import Card from "../elements/Card";
import surfImg from "../../assets/features-img.png";
import HeaderText from "../elements/HeaderText";
import favouritesImg from "../../assets/rating.png";
import boardImg from "../../assets/surfboard.png";
import weatherImg from "../../assets/weather-forecast.png";

function Features() {
  return (
    <section className="features">
      <div className="cols">
        <div className="cards">
          <Card
            title={"Find Global Surf Data"}
            content={[
              "We collate wave and oceanography data from 7 different sources to provide a high quality surf report.",
            ]}
            image={weatherImg}
          />
          <Card
            title={"Add Favourites Breaks"}
            content={[
              "In our app you can save your favourite spots and get up-to-date reports with a single click.",
            ]}
            image={favouritesImg}
          />
          <Card
            title={"Reports for your Board"}
            content={[
              "A feature unique to Tide Chaser, if you tell us the size of board you ride...",
            ]}
            image={boardImg}
          />
        </div>
        <div className="surf-img">
          <img src={surfImg} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Features;
