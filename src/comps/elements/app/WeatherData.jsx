import tempImg from "../../../assets/temperature.png";
import waterTempImg from "../../../assets/water-temperature.png";
import cloudCoverImg from "../../../assets/cloud-cover.png";
import precipImg from "../../../assets/precipitation.png";
import humidImg from "../../../assets/humidity.png";
import visibilityImg from "../../../assets/visibility.png";

function WeatherData({ data }) {
  return (
    <div className="weather-data">
      <div className="current-weather">
        <div className="temp-data">
          <div>
            <img
              className="air-temp-icon ${airTempIcon}"
              src={tempImg}
              alt=""
            />
            <p className="air-temperature">
              {Math.round(data.airTemperature)}°C
            </p>
          </div>
          <div>
            <img
              className="water-temp-icon ${waterTempIcon}"
              src={waterTempImg}
              alt=""
            />
            <p className="water-temp">{Math.round(data.waterTemperature)}°C</p>
          </div>
          <div>
            <img src={cloudCoverImg} alt="" />
            <p className="cloud-cover">{data.cloudCover}%</p>
          </div>
        </div>
        <div className="other-data">
          <div>
            <img src={precipImg} alt="" />
            <p className="precipitation">{data.precipitation}mm/h</p>
          </div>
          <div>
            <img src={humidImg} alt="" />
            <p className="humidity">{Math.round(data.humidity)}%</p>
          </div>
          <div>
            <img src={visibilityImg} alt="" />
            <p className="visibility">{data.visibility}km</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherData;
