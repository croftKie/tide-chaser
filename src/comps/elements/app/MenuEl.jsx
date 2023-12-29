import { useEffect, useRef, useState } from "react";
import {
  getFavourites,
  getBoards,
  postMyBoard,
  postMyFavourite,
} from "../../../utilities/fetchData";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentCoords, selectData } from "../../../redux/surfDataSlice";

function MenuEl() {
  const [favourites, setFavourites] = useState([]);
  const [boards, setBoards] = useState([]);
  const [myBoard, setMyBoard] = useState({
    board_length: "4'0",
    board_type: "mini mini",
  });
  const currentCoords = useSelector(selectCurrentCoords);
  const inputRef = useRef();

  const handleGetFavourites = async () => {
    const data = await getFavourites();
    setFavourites(data.content);
  };
  const handleGetBoards = async () => {
    const data = await getBoards();
    setBoards(data.content);
  };
  const setBoard = async (board) => {
    const id = board._id;
    setMyBoard({ board_length: board["length"], board_type: board["type"] });
    await postMyBoard(id);
  };
  const setFavourite = async (name, currentCoords) => {
    await postMyFavourite(currentCoords, name);
  };

  useEffect(() => {
    handleGetFavourites();
    handleGetBoards();
  }, []);
  return (
    <div className="menu-container">
      <h2>Hi, First Name</h2>
      <div className="favourites">
        <div className="add">
          <div className="add-input">
            <input
              ref={inputRef}
              placeholder="Save Current Report"
              type="text"
            />
            <button
              onClick={() =>
                setFavourite(inputRef.current.value, currentCoords)
              }
              className="button-alt-color"
            >
              Save
            </button>
          </div>
        </div>
        <div className="items">
          {favourites.map((i) => {
            return (
              <div className="fav">
                <p>{i.name}</p>
                <p>Added: {new Date(i.updated).toLocaleString()}</p>
                <div className="row">
                  <p>lat: {i.coords && i.coords[0]}</p>
                  <p>Lon: {i.coords && i.coords[1]}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="board-selector">
        <div className="col select">
          <h3>Select a board size</h3>
          <p>
            Saving a board size with affect how large a wave you need to achieve
            a "green" score in the wave report.
          </p>
          <div className="selector">
            <select
              onChange={(e) => {
                setBoard(boards[e.target.selectedIndex]);
              }}
              name=""
              id=""
            >
              {boards.map((i) => {
                return <option value={i["_id"]}>{i["length"]}</option>;
              })}
            </select>
          </div>
        </div>
        <div className="col view">
          <h2>
            You ride a {myBoard.board_length}, {myBoard.board_type}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default MenuEl;
