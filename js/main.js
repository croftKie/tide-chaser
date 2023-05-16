import { splashScreen } from "./dom/splashDom.js";
import { fetchData } from "./fetchData.js";
import {splashAnims} from "./anims/splashAnim.js";
import {coords} from "./map.js";

window.addEventListener("load", ()=>{
    // initialise data, menu and popup scripts
    fetchData(coords.lng, coords.lat);
    splashScreen();
    splashAnims();
});
