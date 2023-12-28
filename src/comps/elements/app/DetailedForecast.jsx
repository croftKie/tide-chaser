function DetailedForecast({ data }) {
  return (
    <div className="detailedForecast">
      <div className="tableContainer">
        <div className="row">
          <div className="item"></div>
          <div className="item">
            <h4>Wave Height</h4>
          </div>
          <div className="item">
            <h4>Temp.</h4>
          </div>
          <div className="item">
            <h4>Rain</h4>
          </div>
          <div className="item">
            <h4>Cloud</h4>
          </div>
          {/* <div className="item">
            <h4>DATA ITEM</h4>
          </div>
          <div className="item">
            <h4>DATA ITEM</h4>
          </div>
          <div className="item">
            <h4>DATA ITEM</h4>
          </div>
          <div className="item">
            <h4>DATA ITEM</h4>
          </div>
          <div className="item">
            <h4>DATA ITEM</h4>
          </div> */}
        </div>
        {data &&
          data.map((day) => {
            return (
              <div className="row">
                <div className="day">
                  <h4>{day.day}</h4>
                </div>
                <div className="item">
                  <h4>{day.waveHeight}m</h4>
                </div>
                <div className="item">
                  <h4>{day.temp}°C</h4>
                </div>
                <div className="item">
                  <h4>{day.rain}mm</h4>
                </div>
                <div className="item">
                  <h4>{day.cloud}%</h4>
                </div>
                {/* <div className="item">
                  <h4>DATA ITEM</h4>
                </div>
                <div className="item">
                  <h4>DATA ITEM</h4>
                </div>
                <div className="item">
                  <h4>DATA ITEM</h4>
                </div>
                <div className="item">
                  <h4>DATA ITEM</h4>
                </div>
                <div className="item">
                  <h4>DATA ITEM</h4>
                </div> */}
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default DetailedForecast;
