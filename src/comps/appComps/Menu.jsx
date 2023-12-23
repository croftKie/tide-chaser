function Menu() {
  return (
    <div className="menu fixed top-0 h-full w-4/6 p-2 bg-white border-l-2 border-solid border-black">
      <div className="flex justify-end items-center">
        <img
          className="h-4 cursor-pointer pr-2"
          src="../../public/assets/close.png"
          alt=""
        />
      </div>
      <div className="flex justify-between px-2">
        <input
          onclick="this.select()"
          placeholder="Name your surf spot"
          type="text"
          name="location"
          id=""
        />
        <button className="submitPopup">
          <img className="h-6" src="../../public/assets/check.png" alt="" />
        </button>
      </div>
      <div className="flex flex-col p-4"></div>
      <div className="flex flex-col bg-black rounded-md p-4">
        <img className="h-4 w-4" src="../../public/assets/info.png" alt="" />
        <h3 className="text-white">
          Current board: <span className="currentBoard">6ft</span>
        </h3>
        <div className="text-white">
          <label for="boards">Select Board:</label>
          <select className="text-black" name="boards" id="boards">
            <option value="5">5ft</option>
            <option value="6">6ft</option>
            <option value="7">7ft</option>
            <option value="8">8ft</option>
            <option value="9">9ft</option>
            <option value="10">10ft</option>
          </select>
          <button className="saveBoard">
            <img
              className="h-6"
              src="../../public/assets/diskette.png"
              alt=""
            />
          </button>
        </div>
        <p className="text-sm">
          Select the size of board you ride to adjust the scale for rideable
          waves.
        </p>
        <p className="text-sm">
          The smaller the board, the higher waves need to be to hit "green" on
          the scale.
        </p>
      </div>
    </div>
  );
}

export default Menu;
<div className="menu fixed top-0 h-full w-4/6 p-2 bg-white border-l-2 border-solid border-black">
  <div className="flex justify-end items-center">
    <img
      className="h-4 cursor-pointer pr-2"
      src="../../public/assets/close.png"
      alt=""
    />
  </div>
  <div className="flex justify-between px-2">
    <input
      onclick="this.select()"
      placeholder="Name your surf spot"
      type="text"
      name="location"
      id=""
    />
    <button className="submitPopup">
      <img className="h-6" src="../../public/assets/check.png" alt="" />
    </button>
  </div>
  <div className="flex flex-col p-4"></div>
  <div className="flex flex-col bg-black rounded-md p-4">
    <img className="h-4 w-4" src="../../public/assets/info.png" alt="" />
    <h3 className="text-white">
      Current board: <span className="currentBoard">6ft</span>
    </h3>
    <div className="text-white">
      <label for="boards">Select Board:</label>
      <select className="text-black" name="boards" id="boards">
        <option value="5">5ft</option>
        <option value="6">6ft</option>
        <option value="7">7ft</option>
        <option value="8">8ft</option>
        <option value="9">9ft</option>
        <option value="10">10ft</option>
      </select>
      <button className="saveBoard">
        <img className="h-6" src="../../public/assets/diskette.png" alt="" />
      </button>
    </div>
    <p className="text-sm">
      Select the size of board you ride to adjust the scale for rideable waves.
    </p>
    <p className="text-sm">
      The smaller the board, the higher waves need to be to hit "green" on the
      scale.
    </p>
  </div>
</div>;
