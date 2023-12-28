import waveHeightImg from "../../../assets/wave-height.png";
import wavePeriodImg from "../../../assets/wave-period.png";
import windDirecImg from "../../../assets/wind-direction.png";
import windSpeedImg from "../../../assets/wind-speed.png";

function SurfData({ data }) {
  return (
    <div className="surf-data">
      <div className="current-surf">
        <div className="surf upper-surf-data" id="surfing">
          <div className="highlight green"></div>
          <h4>Waves are {data.waveHeight}m high</h4>
          <div>
            <img
              className="wave-height-icon orange"
              src={waveHeightImg}
              alt=""
            />
            <p className="wave-height">{data.waveHeight}m</p>
          </div>
          <div>
            <img src={wavePeriodImg} alt="" />
            <p className="wave-period">{Math.round(data.wavePeriod)}s</p>
          </div>
          <div>
            <img
              className="wind-direction-icon ${windDirecIcon}"
              src={windDirecImg}
              alt=""
            />
            <p className="wind-direction">
              {Math.round(data.windDirection)}deg
            </p>
          </div>
          <div>
            <img
              className="wind-speed-icon ${windSpeedIcon}"
              src={windSpeedImg}
              alt=""
            />
            <p className="wind-speed">{data.windSpeed}m/s</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SurfData;
