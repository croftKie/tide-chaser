import DailyCard from "../elements/app/DailyCard";
import HourlyCard from "../elements/app/HourlyCard";
import SurfData from "../elements/app/SurfData";
import WeatherData from "../elements/app/WeatherData";
import { selectData, setData } from "../../redux/surfDataSlice";
import { useDispatch, useSelector } from "react-redux";
import { useLayoutEffect, useState, useRef } from "react";
import { fetchData } from "../../utilities/fetchData";
import info from "../../assets/info.png";
import leftImg from "../../assets/arrow-left.png";
import rightImg from "../../assets/arrow-right.png";

import DetailedForecast from "../elements/app/DetailedForecast";

function Dashboard() {
  const dispatch = useDispatch();
  const dailyContainerRef = useRef();
  const dataSelector = useSelector(selectData);
  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedHour, setSelectedHour] = useState(0);

  const handleGetDataOnLoad = async () => {
    const data = await fetchData();
    dispatch(setData(data));
  };
  const handleDailyClick = (e) => {
    Array.from(dailyContainerRef.current.children).forEach((child) => {
      child.classList.remove("clicked");
    });
    setClicked(e);
  };
  useLayoutEffect(() => {
    handleGetDataOnLoad();
  }, []);
  if (dataSelector.length !== 0) {
    return (
      <section className="dashboard">
        <div ref={dailyContainerRef} className="daily">
          {dataSelector.daily &&
            dataSelector.daily.map((item, index) => {
              return (
                <DailyCard
                  key={index}
                  data={item}
                  handleDailyClick={handleDailyClick}
                  setSelectedDay={setSelectedDay}
                  id={index}
                />
              );
            })}
        </div>
        <div className="hourly-container">
          <img src={leftImg} alt="" />
          <div className="hourly">
            {dataSelector.hourly &&
              dataSelector.hourly[selectedDay].data.map((item, index) => {
                return (
                  <HourlyCard
                    key={index}
                    data={item}
                    setSelectedHour={setSelectedHour}
                    id={index}
                  />
                );
              })}
          </div>
          <img src={rightImg} alt="" />
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
        <DetailedForecast data={dataSelector.daily && dataSelector.daily} />
      </section>
    );
  } else {
    return <div className="loading">Loading data...</div>;
  }
}

export default Dashboard;
