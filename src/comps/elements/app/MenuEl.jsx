function MenuEl() {
  return (
    <div className="menu-container">
      <h2>Hi, First Name</h2>
      <div className="favourites">
        <div className="add">
          <div className="add-input">
            <input placeholder="Save Current Report" type="text" />
            <button className="button-alt-color">Save</button>
          </div>
        </div>
        <div className="items">
          {[1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 2, 5].map((i) => {
            return (
              <div className="fav">
                <p>BREAK NAME</p>
                <p>DATE ADDED</p>
                <div className="row">
                  <p>D</p>
                  <p>O</p>
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
            <select name="" id="">
              <option value="">5</option>
              <option value="">6</option>
              <option value="">7</option>
              <option value="">8</option>
              <option value="">9</option>
            </select>
            <button className="button-alt-color">Save</button>
          </div>
        </div>
        <div className="col view">
          <h4>Your Board is 10ft</h4>
          <h1>IMG</h1>
        </div>
      </div>
    </div>
  );
}

export default MenuEl;
