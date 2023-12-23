function SurfData() {
  return (
    <div className="surf-data">
      <div className="current-surf">
        <div className="surf upper-surf-data" id="surfing">
          <div className="highlight ${highlightColor}"></div>
          <h4>Waves are HEIGHT</h4>
          <div>
            <img
              className="wave-height-icon ${waveHeightIcon}"
              src="./public/assets/wave-height.png"
              alt=""
            />
            <p className="wave-height">HEIGHTm</p>
          </div>
          <div>
            <img src="./public/assets/wave-period.png" alt="" />
            <p className="wave-period">PERIODs</p>
          </div>
          <div>
            <img
              className="wind-direction-icon ${windDirecIcon}"
              src="./public/assets/wind-direction.png"
              alt=""
            />
            <p className="wind-direction">DIREC</p>
          </div>
          <div>
            <img
              className="wind-speed-icon ${windSpeedIcon}"
              src="./public/assets/wind-speed.png"
              alt=""
            />
            <p className="wind-speed">SPEEDm/s</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SurfData;
