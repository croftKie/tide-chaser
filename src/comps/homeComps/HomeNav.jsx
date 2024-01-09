import camper from "../../assets/camper.png";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { scaleOutIn, scaleOut, scaleIn } from "../../utilities/animations";
function HomeNav() {
  const subscribeButtonRef = useRef();

  return (
    <>
      <nav className="homeNav">
        <Link className="brand" to="/">
          <img src={camper} alt="" />
          <h3>Tide Chaser</h3>
        </Link>
        <div className="links">
          {/* <Link to="/about">
            <a href="">About</a>
          </Link> */}
          <Link to="/sign-in">
            <a href="">
              <h6>Sign-In</h6>
            </a>
          </Link>
          <Link
            ref={subscribeButtonRef}
            onMouseEnter={() => scaleOut(subscribeButtonRef.current)}
            onMouseLeave={() => scaleIn(subscribeButtonRef.current)}
            className="button button-alt-color"
            to="/subscribe"
          >
            <h6>Subscribe</h6>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default HomeNav;
