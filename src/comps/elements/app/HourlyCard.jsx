import waveHeightImage from "../../../assets/wave-height.png";

function HourlyCard() {
  return (
    <div className="hour">
      <img className="wave-type" src={waveHeightImage} alt="" />
      <h3>day</h3>
    </div>
  );
}

export default HourlyCard;