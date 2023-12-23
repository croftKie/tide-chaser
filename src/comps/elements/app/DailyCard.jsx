import waveHeightImg from "../../../assets/wave-height.png";

function DailyCard() {
  return (
    <div className="day">
      <h3>day</h3>
      <div>
        <img className="wave-score" src={waveHeightImg} alt="" />
        <p>TESTm</p>
      </div>
      <img src="./public/assets/weather/${image}content" alt="" />
      <p>TEST°C</p>
    </div>
  );
}

export default DailyCard;
