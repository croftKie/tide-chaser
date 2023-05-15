import { coords, mapScript } from "./map.js";
import { setDailies } from "./dom/dailiesDom.js";
import { setHourlies } from "./dom/hourlyDom.js";
import { setSurfData, setWeatherData } from "./dom/breakdownDom.js";
import { dailyAverage, hourlyData } from "./utils/calculations.js";
import { initMenu, popup } from "./dom/menuDom.js";
import {hideAnims, breakdownAnimHide} from "./anims/mainAnims.js";

const params = 'airTemperature,humidity,cloudCover,visibility,precipitation,waveHeight,wavePeriod,windDirection,windSpeed,waterTemperature';

// Initialisation function on load. 
export const init = async () => {
    try{
        const base64Encoded = btoa(`https://api.stormglass.io/v2/weather/point?lat=${coords.lat}&lng=${coords.lng}&params=${params}`);
        // const {data} = await axios.get(`http://localhost:6002?query=${base64Encoded}`);
        console.log(base64Encoded);
        const { data } = await axios.get(`https://surf-proxy.vercel.app?query=${base64Encoded}`);
        console.log(data);
        data.hours.length = 24 * 7;
        const daily = dailyAverage(data.hours);
        const hourly = hourlyData(data.hours);
    
        mapScript();
        setDailies(daily, hourly);
        setHourlies(hourly);
        setSurfData(hourly)
        setWeatherData(hourly);
        initMenu();
        popup(daily, hourly);
    } catch(err){
        Toastify({
            text: "Surf data not available, try again later",
            duration: 3000,
            close: true,
            gravity: "top", 
            position: "center",
            style: {
              background: "linear-gradient(to right, #df2007, #dc4936)",
            }
          }).showToast();
    }
}

// Repeatable fetch function 
export const fetchSurfData = async (lng, lat)=>{
    try {
        hideAnims(".day", -400);
        hideAnims(".hour", 400);
        breakdownAnimHide();
        const { data } = await axios.get(`https://surf-proxy.vercel.app?query=https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`);
        data.hours.length = (24 * 7)-1;
        const daily = dailyAverage(data.hours);
        const hourly = hourlyData(data.hours);
    
        setDailies(daily, hourly);
        setHourlies(hourly);
        setSurfData(hourly)
        setWeatherData(hourly);


    } catch(err){
        Toastify({
            text: "No report available, try closer to the water",
            duration: 3000,
            close: true,
            gravity: "top", 
            position: "center",
            style: {
              background: "linear-gradient(to right, #df2007, #dc4936)",
            }
          }).showToast();
    }
}

// Time Management for Cache
export function cacheManager(cacheItem){
    const current = new Date().getTime();
    const timeOffset = 43200000 //12 hours in ms
    if (cacheItem.timeStamp + timeOffset < current) {
        console.log("Fetching new data");
        fetchSurfData(cacheItem.lng, cacheItem.lat);
    } else {
        console.log("Populating from cache");
        setDailies(cacheItem.daily, cacheItem.hourly);
        setHourlies(cacheItem.hourly);
        setSurfData(cacheItem.hourly);
        setWeatherData(cacheItem.hourly);
    }
}