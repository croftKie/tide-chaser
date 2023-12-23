function WeatherData() {
  return (
    <div className="weather-data">
      <div className="current-weather">
        <div className="temp-data">
          <div>
            <img
              className="air-temp-icon ${airTempIcon}"
              src="./public/assets/temperature.png"
              alt=""
            />
            <p className="air-temperature">TEMP°C</p>
          </div>
          <div>
            <img
              className="water-temp-icon ${waterTempIcon}"
              src="./public/assets/water-temperature.png"
              alt=""
            />
            <p className="water-temp">WATER TEMP°C</p>
          </div>
          <div>
            <img src="./public/assets/cloud-cover.png" alt="" />
            <p className="cloud-cover">CLOUD%</p>
          </div>
        </div>
        <div className="other-data">
          <div>
            <img src="./public/assets/precipitation.png" alt="" />
            <p className="precipitation">PRECIPmm/h</p>
          </div>
          <div>
            <img src="./public/assets/humidity.png" alt="" />
            <p className="humidity">HUMIDITY%</p>
          </div>
          <div>
            <img src="./public/assets/visibility.png" alt="" />
            <p className="visibility">VISIB km</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherData;
