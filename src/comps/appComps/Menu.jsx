import MenuEl from "../elements/app/Menuel";
import Tutorial from "../elements/app/Tutorial";
function Menu({ menuContent }) {
  return <div className="menu">{menuContent ? <MenuEl /> : <Tutorial />}</div>;
}

export default Menu;
