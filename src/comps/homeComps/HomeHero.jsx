import surfHero from "../../assets/images/surf-hero.jpg";
import { Link } from "react-router-dom";
function HomeHero() {
  return (
    <section className="hero">
      <div className="col text">
        <p>Want to hit the waves?</p>
        <h2 className="header-text">Find the best breaks with Tide Chaser.</h2>
        <p>
          Make use of our up-to-date, accurate wave reports for every beach and
          break in the world to keep ahead of the weather and catch the next big
          one.
        </p>
        <div className="buttons">
          <Link to="/about">
            <button>Learn More</button>
          </Link>
          <Link to="/subscribe">
            <button>Subscribe</button>
          </Link>
        </div>
      </div>
      <div className="col hero-img">
        <img src={surfHero} alt="" />
        <div className="square"></div>
      </div>
    </section>
  );
}

export default HomeHero;
