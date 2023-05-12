import { openWeatherKey, mapGLKey} from "../config.js";
import { setNotifications } from "./dom/notificationDom.js";
import { fetchSurfData } from "./fetchData.js";

const searchBar = document.getElementById("search-place");
const downArrow = document.querySelector(".down-arrow");
const searchContent = document.querySelector(".search");

// default coordinates
export const coords = {
    lng : -13.558,
    lat : 29.117
};

// API key
mapboxgl.accessToken = mapGLKey;
let mode = 0;

// event listeners to open map tray in DOM and fire map generation functino
export const mapScript = ()=>{
    searchBar.addEventListener("keypress",(e)=>{
        if(e.key === "Enter"){
            searchContent.style.gridTemplateRows = "1fr 4fr";
            downArrow.style.transform = 'rotateZ(180deg)';
            mode = 1;
            setTimeout(()=>{place(e)},1000);
        }
    });
    downArrow.addEventListener("click",()=>{
        if (mode === 1) {
            searchContent.style.gridTemplateRows = "1fr 0fr";
            downArrow.style.transform = 'rotateZ(0deg)';
            mode = 0;
        } else {
            searchContent.style.gridTemplateRows = "1fr 4fr";
            downArrow.style.transform = 'rotateZ(180deg)';
            mode = 1;
        }
    });
}

// map generation function
async function place(e){
    const {data} = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${e.target.value}&appid=${openWeatherKey}`);
    
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
        console.log(data);
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [data[0].lon, data[0].lat],
            zoom: 9,
        });
        map.on('click', (e) => {
            console.log(data);
            setNotifications(data[0].name, data[0].state, data[0].lon, data[0].lat);
            const { lng, lat } = e.lngLat;
            coords.lng = lng;
            coords.lat = lat;
            console.log(coords.lng, coords.lat);
            fetchSurfData(coords.lng, coords.lat);
            let marker1 = new mapboxgl.Marker()
                .setLngLat([coords.lng, coords.lat])
                .addTo(map);
        });
    };
}