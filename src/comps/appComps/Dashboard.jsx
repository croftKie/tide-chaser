import DailyCard from "../elements/app/DailyCard";
import HourlyCard from "../elements/app/HourlyCard";
import SurfData from "../elements/app/SurfData";
import WeatherData from "../elements/app/WeatherData";
import { selectData, setData } from "../../redux/surfDataSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchData } from "../../utilities/fetchData";
import info from "../../assets/info.png";
import DetailedForecast from "../elements/app/DetailedForecast";

function Dashboard() {
  const dataSelector = useSelector(selectData);
  const dispatch = useDispatch();
  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedHour, setSelectedHour] = useState(0);

  const handleGetDataOnLoad = async () => {
    const data = await fetchData();
    dispatch(setData(data));
  };
  useEffect(() => {
    handleGetDataOnLoad();
  }, []);
  // console.log(dataSelector);
  return (
    <section className="dashboard">
      <div className="daily">
        {dataSelector.daily &&
          dataSelector.daily.map((item, i) => {
            return <DailyCard key={i} data={item} />;
          })}
      </div>
      <div className="hourly-container">
        <img src={info} alt="" />
        <div className="hourly">
          {dataSelector.hourly &&
            dataSelector.hourly[selectedDay].data.map((item, i) => {
              return <HourlyCard key={i} data={item} />;
            })}
        </div>
        <img src={info} alt="" />
      </div>
      <h4 className="currentCondition">Current Conditions</h4>
      <SurfData
        data={
          dataSelector.hourly &&
          dataSelector.hourly[selectedDay].data[selectedHour]
        }
      />
      <WeatherData
        data={
          dataSelector.hourly &&
          dataSelector.hourly[selectedDay].data[selectedHour]
        }
      />
      <h4 className="currentCondition">Detailed Forecast</h4>
      <DetailedForecast />
    </section>
  );
}

export default Dashboard;
