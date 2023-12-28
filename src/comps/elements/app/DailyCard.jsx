import { useEffect, useState } from "react";
import waveHeightImg from "../../../assets/wave-height.png";
import cloudImg from "../../../assets/weather/cloud.png";
import rainImg from "../../../assets/weather/rain.png";
import sunImg from "../../../assets/weather/sun.png";

function DailyCard({ data, setSelectedDay, id }) {
  const [clicked, setClicked] = useState(false);
  const [weatherImage, setWeatherImage] = useState(1);

  const selectWeatherImage = (data) => {
    if (data.rain > 0.25) {
      setWeatherImage(1);
    } else if (data.cloud > 60) {
      setWeatherImage(2);
    } else {
      setWeatherImage(3);
    }
  };

  useEffect(() => {
    selectWeatherImage(data);
  });
  return (
    <div
      onClick={() => {
        setClicked(!clicked);
        setSelectedDay(id);
      }}
      className={clicked ? "day clicked" : "day"}
    >
      <h3>{data.day}</h3>
      <div>
        <img className="wave-score" src={waveHeightImg} alt="" />
        <p>{data.waveHeight}m</p>
      </div>
      <img
        src={
          weatherImage === 1 ? rainImg : weatherImage === 2 ? cloudImg : sunImg
        }
        alt=""
      />
      <p>{data.temp}°C</p>
    </div>
  );
}

export default DailyCard;
