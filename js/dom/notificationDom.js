import { fetchData } from "../fetchData.js";
import { toHours } from "../utils/calculations.js";

const infoDiv = document.querySelector(".info");

export const setNotifications = (place, state) => {
  infoDiv.children[0].textContent = `Surf Report for ${place}, ${state}`;
};
export const setDataAge = (timestamp, lon, lat) => {
  const difference = new Date().getTime() - timestamp;
  console.log(difference);
  const hours = toHours(difference);
  console.log(hours);
  infoDiv.children[1].innerHTML = `Data is ${Math.round(
    hours
  )} hour(s) old <span class="updateReport">Click to Update</span>`;
  infoDiv.children[1].children[0].addEventListener("click", () => {
    fetchData(lon, lat);
  });
};
