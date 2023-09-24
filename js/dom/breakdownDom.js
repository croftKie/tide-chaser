import {
  waveHeightIcon,
  tempIcon,
  windSpeedIcon,
  highlight,
  waveHeightStatement,
} from "../utils/dynamicIcons.js";
import { cardinalDirection } from "../utils/calculations.js";
import { breakdownAnimShow } from "../anims/mainAnims.js";

const surfDataContainer = document.querySelector(".surf-data");
const weatherDataContainer = document.querySelector(".weather-data");
const currentDay = new Date().getDay();

export const setSurfData = (
  data,
  daySelected = currentDay,
  hourSelected = 0
) => {
  // resets the DOM element to blank
  surfDataContainer.innerHTML = "";

  //filters the appropriate day of data and returns that filtered data to main function
  const surfData = filterSurfData(data, daySelected, hourSelected);

  // creates DOM element, adds  class and populates innerHTML.
  const currentSurf = document.createElement("div");
  currentSurf.classList.add("current-surf");
  currentSurf.innerHTML = surfHTML(
    waveHeightIcon(surfData.waveHeight.noaa),
    surfData.waveHeight.noaa,
    surfData.wavePeriod.noaa,
    "wind-direction.png",
    cardinalDirection(surfData.windDirection.noaa),
    windSpeedIcon(surfData.windSpeed.noaa),
    surfData.windSpeed.noaa,
    highlight(surfData.waveHeight.noaa),
    waveHeightStatement(surfData.waveHeight.noaa)
  );
  surfDataContainer.append(currentSurf);
  document.querySelector(
    ".wind-direction-icon"
  ).style.transform = `rotateZ(${surfData.windDirection.noaa}deg)`;
};

export const setWeatherData = (data, daySelected = 4, hourSelected = 0) => {
  weatherDataContainer.innerHTML = "";

  // Isolates required data for weather content
  const weatherData = data[daySelected].data[hourSelected];

  // populates DOM elements
  const currentWeather = document.createElement("div");
  currentWeather.classList.add("current-weather");
  currentWeather.innerHTML = weatherHTML(
    tempIcon(weatherData.airTemperature.noaa),
    weatherData.airTemperature.noaa,
    weatherData.cloudCover.noaa,
    weatherData.precipitation.noaa,
    weatherData.humidity.noaa,
    weatherData.visibility.noaa,
    tempIcon(weatherData.waterTemperature.noaa),
    weatherData.waterTemperature.noaa
  );
  weatherDataContainer.append(currentWeather);
  breakdownAnimShow();
};

function surfHTML(
  waveHeightIcon,
  waveHeight,
  wavePeriod,
  windDirecIcon,
  windDirec,
  windSpeedIcon,
  windSpeed,
  highlightColor,
  waveHeightStatement
) {
  return `
    <div class="surf upper-surf-data" id="surfing">
        <div class="highlight ${highlightColor}"></div>
        <h4>Waves are ${waveHeightStatement}</h4>
        <div>
            <img class="wave-height-icon ${waveHeightIcon}" src="./assets/wave-height.png" alt="">
            <p class="wave-height">${waveHeight}m</p>
        </div>
        <div>
            <img src="./assets/wave-period.png" alt="">
            <p class="wave-period">${wavePeriod}s</p>
        </div>
        <div>
            <img class="wind-direction-icon ${windDirecIcon}" src="./assets/wind-direction.png" alt="">
            <p class="wind-direction">${windDirec}</p>
        </div>
        <div>
            <img class="wind-speed-icon ${windSpeedIcon}" src="./assets/wind-speed.png" alt="">
            <p class="wind-speed">${windSpeed}m/s</p>
        </div>
    </div>
    `;
}

function weatherHTML(
  airTempIcon,
  temp,
  cloudCover,
  precip,
  humidity,
  vis,
  waterTempIcon,
  waterTemp
) {
  return `
    <div class="temp-data">
        <div>
            <img class="air-temp-icon ${airTempIcon}" src="./assets/temperature.png" alt="">
            <p class="air-temperature">${temp}°C</p>
        </div>  
        <div>
            <img class="water-temp-icon ${waterTempIcon}" src="./assets/water-temperature.png" alt="">
            <p class="water-temp">${waterTemp}°C</p>
        </div>    
        <div>
            <img src="./assets/cloud-cover.png" alt="">
            <p class="cloud-cover">${cloudCover}%</p>
        </div> 
    </div>
    <div class="other-data">
        <div>
            <img src="./assets/precipitation.png" alt="">
            <p class="precipitation">${precip}mm/h</p>
        </div>
        <div>
            <img src="./assets/humidity.png" alt="">
            <p class="humidity">${humidity}%</p>
        </div>
        <div>
            <img src="./assets/visibility.png" alt="">
            <p class="visibility">${vis}km</p>
        </div>   
    </div>
    `;
}

function filterSurfData(data, daySelected, hourSelected) {
  const filtered = data.filter((day) => {
    return day.dayValue === daySelected;
  });
  return filtered[0].data[hourSelected];
}
