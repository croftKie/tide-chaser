import { useEffect, useState } from "react";

import waveHeightImage from "../../../assets/wave-height.png";
import nightCloudImg from "../../../assets/weather/night-cloud.png";
import nightRainImg from "../../../assets/weather/night-rain.png";
import nightImg from "../../../assets/weather/night.png";
function HourlyCard({ data, setSelectedHour, id }) {
  const [clicked, setClicked] = useState(false);

  return (
    <div
      onClick={() => {
        setClicked(!clicked);
        setSelectedHour(id);
      }}
      className={clicked ? "hour clicked" : "hour"}
    >
      <img className="wave-type" src={waveHeightImage} alt="" />
      <h3>{new Date(data.time).getHours()}</h3>
    </div>
  );
}

export default HourlyCard;
