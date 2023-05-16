import { mapScript } from "./map.js";
import { setDailies } from "./dom/dailiesDom.js";
import { setHourlies } from "./dom/hourlyDom.js";
import { setSurfData, setWeatherData } from "./dom/breakdownDom.js";
import { dailyAverage, hourlyData } from "./utils/calculations.js";
import { initMenu, popup } from "./dom/menuDom.js";

// fetches data from oceanography data api
export const fetchData = async (lng, lat) => {
    // provided parameters for data.
    const params = 'airTemperature,humidity,cloudCover,visibility,precipitation,waveHeight,wavePeriod,windDirection,windSpeed,waterTemperature';
    try {
        const base64Encoded = btoa(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`);
        const {data} = await axios.get(`https://surf-proxy.vercel.app?query=${base64Encoded}`);
        data.hours.length = 24 * 7;
        // functions to separate daily average data and per hour data.
        const daily = dailyAverage(data.hours);
        const hourly = hourlyData(data.hours);
        let mode = 0;
        // if it is the first load by user, run map and menu initialisation
        if (mode === 0) {
            mapScript();
            initMenu();
            mode = 1;
        } else {
        popup(daily, hourly);
        dataManager(daily, hourly);
    } catch (err) {
        toast("Surf data not available, try again later");
    }
}

// Time Management for Cache
export function cacheManager(cacheItem){
    const current = new Date().getTime();
    const timeOffset = 43200000 //12 hours in ms
    if (cacheItem.timeStamp + timeOffset < current) {
        console.log("Fetching new data");
        fetchData(cacheItem.lng, cacheItem.lat);
    } else {
        console.log("Populating from cache");
        setDailies(cacheItem.daily, cacheItem.hourly);
        setHourlies(cacheItem.hourly);
        setSurfData(cacheItem.hourly);
        setWeatherData(cacheItem.hourly);
    }
}

function toast(text){
    Toastify({
        text: text,
        duration: 3000,
        close: true,
        gravity: "top",
        position: "center",
        style: {
            background: "linear-gradient(to right, #df2007, #dc4936)",
        }
    }).showToast();
}

function dataManager(daily, hourly){
    setDailies(daily, hourly);
    setHourlies(hourly);
    setSurfData(hourly)
    setWeatherData(hourly);
}