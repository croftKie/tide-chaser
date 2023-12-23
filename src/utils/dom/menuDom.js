import { coords } from "../map.js";
import { getFromCache, setToCache } from "../utils/storage.js";
import { cacheManager, getPlace } from "../fetchData.js";
import { setDataAge } from "./notificationDom.js";
import { hideMenuAnims, showMenuAnims } from "../anims/menuAnim.js";
const menu = document.querySelector(".menu");
const favourites = document.querySelector(".menu>.favourites");
const settingsOpen = document.querySelector(".open-menu");
const settingsClose = document.querySelector(".menu>.close>img");
const container = document.querySelector("body");
const popupElement = document.querySelector(".favouritePopup");
const addFavourite = document.querySelector(".add-fave");
const closeFavourite = document.querySelector(".closePopup");
const submitFavourite = document.querySelector(".submitPopup");
const nameOfFavourite = document.querySelector(
  ".favouritePopup>.spot-input>input"
);
const currentBoard = document.querySelector(".currentBoard");
const boardSelector = document.getElementById("boards");
const saveBoardButton = document.querySelector(".saveBoard");

// event listeners for opening and closing sidebar menu and fix menu to scroll position
export function initMenu() {
  settingsOpen.addEventListener("click", () => {
    menu.classList.remove("hide");
    populateFavourites();
    showMenuAnims();
  });
  settingsClose.addEventListener("click", () => {
    hideMenuAnims();
  });
  populateFavourites();
  saveBoardSize();
}

// event listeners for opening "add favourite" popup, and submitting values to local storage function
export function popup(daily, hourly) {
  addFavourite.addEventListener("click", () => {
    popupElement.classList.remove("hide");
  });
  closeFavourite.addEventListener("click", () => {
    container.classList.remove("blur");
    popupElement.classList.add("hide");
  });
  submitFavourite.addEventListener("click", () => {
    if (nameOfFavourite.value === "") {
      Toastify({
        text: "Add a name for your favourite spot",
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right",
        style: {
          background: "linear-gradient(to right, #df2007, #dc4936)",
        },
      }).showToast();
    } else {
      setToCache(
        coords,
        `FAV-${nameOfFavourite.value}`,
        daily,
        hourly,
        new Date().getTime()
      );
      populateFavourites();

      container.classList.remove("blur");
      popupElement.classList.add("hide");
    }
  });
}

// Manages adding new items to favourite list, and loading data from favourite list.
function populateFavourites() {
  favourites.innerHTML = "";
  for (let i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i).includes("FAV-")) {
      const item = getFromCache(localStorage.key(i));
      const itemName = item.name.split("FAV-")[1];
      const parent = document.createElement("div");
      parent.classList.add("item");
      parent.innerHTML = `
                <div class="location-name">
                    <p>${itemName}</p>
                </div>
                <div class="buttons">
                    <button class="loadData" data-key="${item.name}">Report</button>
                    <button class="removeData" data-itemName="${item.name}">Remove</button>
                </div>
                `;
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
      const item = getFromCache(button.attributes[1].value);
      setDataAge(item.timestamp, item.lng, item.lat);
      getPlace(button.attributes[1].value.split("FAV-")[1]);
      cacheManager(item);
      new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v12",
        center: [item.lng, item.lat],
        zoom: 9,
      });
    });
  });
}

// Manages saving the board size to local storage

function saveBoardSize() {
  currentBoard.innerText =
    boardSelector.value && localStorage.getItem("boardSize")
      ? `${localStorage.getItem("boardSize")}ft`
      : "7ft";
  saveBoardButton.addEventListener("click", () => {
    localStorage.setItem("boardSize", boardSelector.value);
    currentBoard.innerText = `${localStorage.getItem("boardSize")}ft`;
  });
}
