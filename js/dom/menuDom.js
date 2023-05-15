import { coords } from "../map.js";
import { getFromCache, setToCache} from "../utils/storage.js";
import { cacheManager } from "../fetchData.js";
import { setDataAge } from "./notificationDom.js";
import {hideMenuAnims, showMenuAnims} from "../anims/menuAnim.js";
const menu = document.querySelector(".menu");
const favourites = document.querySelector(".menu>.favourites");
const settingsOpen = document.querySelector(".settings>img");
const settingsClose = document.querySelector(".menu>.close>img");
const container = document.querySelector(".container");
const popupElement = document.querySelector(".favouritePopup");
const addFavourite = document.querySelector(".search-bar>div>img");
const closeFavourite = document.querySelector(".closePopup");
const submitFavourite = document.querySelector(".submitPopup");
const nameOfFavourite = document.querySelector(".favouritePopup>input");


// event listeners for opening and closing sidebar menu and fix menu to scroll position
export function initMenu(){
    settingsOpen.addEventListener("click",()=>{
        menu.classList.remove('hide');
        populateFavourites();
        showMenuAnims();
    });
    settingsClose.addEventListener("click",()=>{
        hideMenuAnims();
    });
    window.addEventListener("scroll", ()=>{
        menu.style.top = `${window.scrollY}px`;
    });
    populateFavourites();
}

// event listeners for opening "add favourite" popup, and submitting values to local storage function
export function popup(daily, hourly){
    addFavourite.addEventListener("click",()=>{
        container.classList.add("blur");
        popupElement.classList.remove("hide");
    });
    closeFavourite.addEventListener("click",()=>{
        container.classList.remove("blur");
        popupElement.classList.add("hide");
    });
    submitFavourite.addEventListener("click",()=>{
        setToCache(
            coords,
            `FAV-${nameOfFavourite.value}`,
            daily,
            hourly,
            new Date().getTime());
        populateFavourites();

        container.classList.remove("blur");
        popupElement.classList.add("hide");
    });
}

// Manages adding new items to favourite list, and loading data from favourite list.
function populateFavourites(){
    favourites.innerHTML = "";

    for(let i = 0; i < localStorage.length; i++){
        if(localStorage.key(i).includes("FAV-")){
            const item = getFromCache(localStorage.key(i));
            const itemName = item.name.split("FAV-")[1];
            const parent = document.createElement("div");
            parent.classList.add("item");
            parent.innerHTML = `
                <div>
                    <p>${itemName}</p>
                </div>
                <div>
                    <button class="loadData" data-key="${item.name}">Get Report</button>
                    <button class="removeData" data-itemName="${item.name}">Remove</button>
                </div>
                `
            favourites.append(parent);
        }
    }
    const removeButtons = document.querySelectorAll(".removeData");
    removeButtons.forEach((button) => {
        button.addEventListener("click", () => {
            console.log("removed");
            localStorage.removeItem(button.attributes[1].value);
            populateFavourites();
        });
    });
    const loadButtons = document.querySelectorAll(".loadData");
    loadButtons.forEach((button) => {
        button.addEventListener("click", () => {
            console.log("loaded");
            const item = getFromCache(button.attributes[1].value);
            setDataAge(item.timestamp, item.lng, item.lat);
            cacheManager(item);
            new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/streets-v12',
                center: [item.lng, item.lat],
                zoom: 9,
            });
        });
    });
}