import logo from "../../assets/logo_tc.png";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { scaleOutIn, scaleOut, scaleIn } from "../../utilities/animations";
function HomeNav() {
  const subscribeButtonRef = useRef();

  return (
    <>
      <nav className="homeNav">
        <Link className="brand" to="/">
          <h4>Tide Chaser</h4>
        </Link>
        <div className="links">
          <Link to="/about">
            <a href="">About</a>
          </Link>
          <Link to="/sign-in">
            <a href="">Sign-In</a>
          </Link>
          <Link
            ref={subscribeButtonRef}
            onMouseEnter={() => scaleOut(subscribeButtonRef.current)}
            onMouseLeave={() => scaleIn(subscribeButtonRef.current)}
            className="button button-alt-color"
            to="/subscribe"
          >
            <a href="">Subscribe</a>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default HomeNav;
