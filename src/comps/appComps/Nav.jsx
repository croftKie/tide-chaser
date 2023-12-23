import heart from "../../assets/heart.png";
import surf from "../../assets/surf.png";

function Nav() {
  return (
    <nav className="upper">
      <div className="logo">
        <img src={surf} alt="" />
        <h1>TC</h1>
      </div>
      <div className="links">
        <img className="open-menu" src={heart} alt="" />
      </div>
    </nav>
  );
}

export default Nav;
