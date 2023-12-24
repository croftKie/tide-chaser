import heart from "../../assets/heart.png";
import surf from "../../assets/surf.png";
import info from "../../assets/info.png";
import { setMenuState } from "../../redux/uiSlice";
import { setMenuContent } from "../../redux/uiSlice";
import { useDispatch } from "react-redux";

function Nav() {
  const dispatch = useDispatch();
  return (
    <nav className="upper">
      <div className="logo">
        <img src={surf} alt="" />
        <h1>Tide Chaser</h1>
      </div>
      <div className="links">
        <img
          onClick={() => {
            dispatch(setMenuState());
            dispatch(setMenuContent(0));
          }}
          className="open-tutorial"
          src={info}
          alt=""
        />
        <img
          onClick={() => {
            dispatch(setMenuState());
            dispatch(setMenuContent(1));
          }}
          className="open-menu"
          src={heart}
          alt=""
        />
      </div>
    </nav>
  );
}

export default Nav;
