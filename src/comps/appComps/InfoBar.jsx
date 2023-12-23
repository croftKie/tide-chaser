import { selectInfoBarData } from "../../redux/surfDataSlice";
import { useSelector } from "react-redux";

function InfoBar() {
  const infoBarSelector = useSelector(selectInfoBarData);

  return (
    <section className="info">
      <h4>
        Report for break near {infoBarSelector.state}, {infoBarSelector.country}
      </h4>
      <p>
        Data is 0 hour(s) old.
        <span> Click to update</span>
      </p>
    </section>
  );
}

export default InfoBar;
