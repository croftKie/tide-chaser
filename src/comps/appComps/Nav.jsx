import heart from "../../assets/heart.png";
import surf from "../../assets/surf.png";
import info from "../../assets/info.png";

function Nav() {
  return (
    <nav className="upper">
      <div className="logo">
        <img src={surf} alt="" />
        <h1>Tide Chaser</h1>
      </div>
      <div className="links">
        <img className="open-menu" src={info} alt="" />
        <img className="open-menu" src={heart} alt="" />
      </div>
    </nav>
  );
}

export default Nav;
