// import { openWeatherKey } from "./utils/config";
import { mapScript } from "./map.js";
import { setDailies } from "./dom/dailiesDom.js";
import { setHourlies } from "./dom/hourlyDom.js";
import { setSurfData, setWeatherData } from "./dom/breakdownDom.js";
import { dailyAverage, hourlyData } from "./utils/calculations.js";
import { initMenu, popup } from "./dom/menuDom.js";
import { setNotifications } from "./dom/notificationDom.js";

// fetches data from oceanography data api
export const fetchData = async (lng, lat) => {
  try {
    const { data } = await axios.get(
      `https://tider-chaser-server.onrender.com`
    );
    let mode = 0;
    // if it is the first load by user, run map and menu initialisation
    if (mode === 0) {
      mapScript();
      // initMenu();
      mode = 1;
    }
    popup(data.daily, data.hourly);
    dataManager(data.daily, data.hourly);
  } catch (err) {
    toast("Surf data not available, try again later");
  }
};

// cache management function: returns new data if saved data is older than 12 hours, or returns original data if not.
export function cacheManager(cacheItem) {
  const current = new Date().getTime();
  const timeOffset = 43200000; //12 hours in ms
  if (cacheItem.timeStamp + timeOffset < current) {
    console.log("Fetching new data");
    fetchData(cacheItem.lng, cacheItem.lat);
  } else {
    console.log("Populating from cache");
    dataManager(cacheItem.daily, cacheItem.hourly);
  }
}

// popup for data error
function toast(text) {
  Toastify({
    text: text,
    duration: 3000,
    close: true,
    gravity: "top",
    position: "center",
    style: {
      background: "linear-gradient(to right, #df2007, #dc4936)",
    },
  }).showToast();
}

// collected functions for setting DOM elements using clean data
function dataManager(daily, hourly) {
  setDailies(daily, hourly);
  setHourlies(hourly);
  setSurfData(hourly);
  setWeatherData(hourly);
}

export async function getPlace(e) {
  const { data } = await axios.get(
    `https://api.openweathermap.org/geo/1.0/direct?q=${e}&appid=35d2edfe3900c67fdd86eea343199c65`
  );
  setNotifications(data[0].name, data[0].state);
}
