import DailyCard from "../elements/app/DailyCard";
import HourlyCard from "../elements/app/HourlyCard";
import SurfData from "../elements/app/SurfData";
import WeatherData from "../elements/app/WeatherData";

function Dashboard() {
  return (
    <section className="dashboard">
      <div className="daily">
        {[1, 2, 3, 4, 5, 6, 7].map((item, i) => {
          return <DailyCard key={i} />;
        })}
      </div>
      <div className="hourly">
        {[1, 2, 3, 4, 5, 6, 7].map((item, i) => {
          return <HourlyCard key={i} />;
        })}
      </div>
      <h4 className="currentCondition">Current Conditions</h4>
      <SurfData />
      <WeatherData />
    </section>
  );
}

export default Dashboard;
