import { fetchSurfData } from "../fetchData.js";
import { toHours } from "../utils/calculations.js";

const infoDiv = document.querySelector(".info");

export const setNotifications = (place, state, )=>{
    infoDiv.children[0].textContent = `Surf Report for ${place}, ${state}`;
}
export const setDataAge = (timestamp, lon, lat)=>{
    const difference = new Date().getTime() - timestamp;
    const hours = toHours(difference);
    infoDiv.children[1].innerHTML = `Data is ${Math.round(hours)} hours old <span class="updateReport">Click to Update</span>`;
    infoDiv.children[1].children[0].addEventListener('click',()=>{
        fetchSurfData(lon, lat);
    });
}