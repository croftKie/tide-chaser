import { useRef } from "react";
import surfHero from "../../assets/hero-board.png";
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
        <h4>Want to hit the waves?</h4>
        <h1 className="header-text">Find the best breaks with Tide Chaser</h1>
        <h4>Reports - Forecast - Maps - Favourites</h4>
      </div>
    </section>
  );
}

export default HomeHero;
