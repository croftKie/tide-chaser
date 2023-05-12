import { setHourlies } from "./hourlyDom.js";
import { setSurfData, setWeatherData } from "./breakdownDom.js";
import { waveHeightIcon, weatherIcon } from "../utils/dynamicIcons.js";
import {breakdownAnimHide, hideAnims, showAnims} from "../anims/mainAnims.js";


const daily = document.querySelector(".daily");
const searchContent = document.querySelector(".search");
const downArrow = document.querySelector(".down-arrow");


// creates and sets DOM element for daily data
export const setDailies = (data, hourly)=>{
    daily.innerHTML = "";
    data.forEach((e)=>{
        const day = document.createElement('div');
        day.classList.add("day");
        day.innerHTML = dayHTML(
            e.day, 
            e.waveHeight,
            e.temp,
            weatherIcon(e.cloud, e.rain),
            waveHeightIcon(e.waveHeight));

        // repopulates screen when a day is clicked
        day.addEventListener('click',(j)=>{
            for (let i = 0; i<daily.children.length; i++){
                daily.children[i].classList.remove("clicked");
            }
            day.classList.add("clicked");
            breakdownAnimHide();
            hideAnims(".hour",400);
            setTimeout(()=>{
                setHourlies(hourly, e.dayValue); // sets hourly data for the given day
                setSurfData(hourly, e.dayValue); // sets surf breakdown data
                setWeatherData(hourly, e.dayValue); // sets weather breakdown data
            },1000)


            searchContent.style.gridTemplateRows = "1fr 0fr";
            downArrow.style.transform = 'rotateZ(0deg)';
        });

        daily.append(day);
        showAnims(".day", 0);
    });
}

// HTML template for daily data section
function dayHTML(day, waveHeight, temp, image, score){
    return `
    <h3>${day}</h3>
    <div>
    <img class="${score}" src="/assets/wave-height.png" alt="">
    <p>${waveHeight}m</p>
    </div>
    <img src="/assets/weather/${image}" alt="">
    <p>${temp}°C</p>
`; 
}