import { useRef } from "react";
import surfHero from "../../assets/images/surf-hero.jpg";
import { Link } from "react-router-dom";
import {
  diagonalMoveAndScaleAway,
  scaleIn,
  scaleOut,
} from "../../utilities/animations";
function HomeHero() {
  const learnMoreButtonRef = useRef();
  const subscribeButtonRef = useRef();
  const imgRef = useRef();
  const sqRef = useRef();
  return (
    <section className="hero">
      <div
        onMouseEnter={() =>
          diagonalMoveAndScaleAway(1, imgRef.current, sqRef.current)
        }
        onMouseLeave={() =>
          diagonalMoveAndScaleAway(0, imgRef.current, sqRef.current)
        }
        className="col hero-img"
      >
        <img ref={imgRef} src={surfHero} alt="" />
      </div>
      <div className="col text">
        <p>Want to hit the waves?</p>
        <h2 className="header-text">Find the best breaks with Tide Chaser.</h2>
        <p>Reports - Forecast - Maps - Favourites</p>
        <div className="buttons">
          <Link
            ref={subscribeButtonRef}
            onMouseEnter={() => scaleOut(subscribeButtonRef.current)}
            onMouseLeave={() => scaleIn(subscribeButtonRef.current)}
            to="/subscribe"
          >
            <button>Subscribe</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
