import waveHeightImage from "../../../assets/wave-height.png";

function HourlyCard({ data }) {
  return (
    <div className="hour">
      <img className="wave-type" src={waveHeightImage} alt="" />
      <h3>{new Date(data.time).getHours()}</h3>
    </div>
  );
}

export default HourlyCard;
