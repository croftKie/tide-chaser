import { openWeatherKey, mapGLKey} from "../config.js";
import { setNotifications } from "./dom/notificationDom.js";
import {fetchData } from "./fetchData.js";
import {hideAnims, showAnims, breakdownAnimHide} from "./anims/mainAnims.js";

const searchBar = document.getElementById("search-place");
const makesearchButton = document.querySelector(".make-search");
const downArrow = document.querySelector(".down-arrow");
const searchContent = document.querySelector(".search");
let mode = 0;
// API key
mapboxgl.accessToken = mapGLKey;

// default coordinates
export const coords = {
    lng : -13.558,
    lat : 29.117
};

// event listeners to open map tray in DOM and fire map generation functino
export const mapScript = ()=>{
    searchBar.addEventListener("keypress",(e)=>{
        if(e.key === "Enter"){
            searchContent.classList.add('expanded');
            downArrow.classList.add('rotated-arrow');
            mode = 1;
            setTimeout(()=>{place(e.target)},1000);
        }
    });
    makesearchButton.addEventListener("click", (e) => {
        searchContent.classList.add('expanded');
        downArrow.classList.add('rotated-arrow');
        mode = 1;
        setTimeout(() => {
            place(searchBar)
        }, 1000);
    });
    downArrow.addEventListener("click",()=>{
        if (mode === 1) {
            searchContent.classList.remove('expanded');
            downArrow.classList.remove('rotated-arrow');
            mode = 0;
        } else {
            searchContent.classList.add('expanded');
            downArrow.classList.add('rotated-arrow');
            mode = 1;
        }
    });
}

// map generation function
async function place(e){
    const { data } = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${e.value}&appid=${openWeatherKey}`);
    if(data[0] === undefined){
        Toastify({
            text: "City not found, try again",
            duration: 3000,
            close: true,
            gravity: "top", 
            position: "center",
            style: {
              background: "linear-gradient(to right, #df2007, #dc4936)",
            }
          }).showToast();
    } else {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [data[0].lon, data[0].lat],
            zoom: 9,
        });
        map.on('click', (e) => {
            setNotifications(data[0].name, data[0].state, data[0].lon, data[0].lat);
            const { lng, lat } = e.lngLat;
            coords.lng = lng;
            coords.lat = lat;
            hideAnims('.day', -400);
            hideAnims('.hour', 400);
            breakdownAnimHide();
            fetchData(coords.lng, coords.lat);
            new mapboxgl.Marker()
                .setLngLat([coords.lng, coords.lat])
                .addTo(map);
        });
    };
}