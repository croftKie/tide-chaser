import { setSurfData, setWeatherData } from "./breakdownDom.js";
import { gradientManager, waveHeightIcon } from "../utils/dynamicIcons.js";
import {breakdownAnimHide, hideAnims, showAnims} from "../anims/mainAnims.js";

const hourly = document.querySelector(".hourly");
const currentDay = new Date();

// create and populate DOM elements for the hourly report section.
export const setHourlies = (data, day = currentDay.getDay())=>{
    document.querySelector("body").classList.add(gradientManager(currentDay.getHours()));
    hourly.innerHTML = "";
    const filtered = data.filter((eachDay)=>{
        return eachDay.dayValue === day;
    });
    const singleDay = filtered[0].data;
    singleDay.forEach((e, i)=>{
        const hourTime = new Date(e.time).getHours().toString().padStart(2,'0');
        const hour = document.createElement('div');
        hour.classList.add("hour");
        hour.innerHTML = dayHTML(
            `${hourTime}:00`, 
            e.waveHeight.noaa,
            e.airTemperature.noaa,
            waveHeightIcon(e.waveHeight.noaa));
        // event listener on each hour, populates "breakdown" sections for given hour.
        hour.addEventListener('click',(e)=>{
            for(let i = 0; i < hourly.children.length; i++){
                hourly.children[i].classList.remove("clicked");
            }
            hour.classList.add("clicked");

            breakdownAnimHide();
            setTimeout(()=>{
                setSurfData(data, filtered[0].dayValue, i); // sets DOM data for "surf breakdown"
                setWeatherData(data, filtered[0].dayValue, i); // sets DOM data for "weather breakdown"
            },1000);
        });
        hourly.append(hour);
        showAnims(".hour", 0);
    });
}

// provides the HTML template for the hourly data
function dayHTML(day, waveHeight, temp, imgClass){
    return `
    <img class="${imgClass}" src="/assets/wave-height.png" alt="">
    <h3>${day}</h3>
`; 
}