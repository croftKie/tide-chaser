import logo from "../../assets/surf.png";
import { Link } from "react-router-dom";
function HomeNav() {
  return (
    <>
      <nav className="homeNav">
        <Link className="brand" to="/">
          <img src={logo} alt="" />
          <h4>Tide Chaser</h4>
        </Link>
        <div className="links">
          <Link to="/about">
            <a href="">About</a>
          </Link>
          <Link to="/sign-in">
            <a href="">Sign-In</a>
          </Link>
          <Link className="button" to="/subscribe">
            <a href="">Subscribe</a>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default HomeNav;
