import { useState } from "react";
import waveHeightImg from "../../../assets/wave-height.png";

function DailyCard({ data }) {
  const [clicked, setClicked] = useState(false);
  return (
    <div
      onClick={() => {
        setClicked(!clicked);
      }}
      className={clicked ? "day clicked" : "day"}
    >
      <h3>{data.day}</h3>
      <div>
        <img className="wave-score" src={waveHeightImg} alt="" />
        <p>{data.waveHeight}m</p>
      </div>
      <img src="./public/assets/weather/${image}content" alt="" />
      <p>{data.temp}°C</p>
    </div>
  );
}

export default DailyCard;
