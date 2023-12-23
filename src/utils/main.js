import { fetchData } from "./fetchData.js";
import { coords } from "./map.js";
import { initMenu } from "./dom/menuDom.js";

window.addEventListener("load", () => {
  // initialise data, menu and popup scripts
  fetchData(coords.lng, coords.lat);
  initMenu();
});
