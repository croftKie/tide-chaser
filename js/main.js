import { splashScreen } from "./dom/splashDom.js";
import { fetchData } from "./fetchData.js";
import { splashAnims } from "./anims/splashAnim.js";
import { coords } from "./map.js";

window.addEventListener("load", () => {
  // initialise data, menu and popup scripts
  fetchData(coords.lng, coords.lat);
  splashScreen();
  splashAnims();
});

document.querySelector(".main-tutorial").addEventListener("click", () => {
  Toastify({
    text: "Search for a city  1 / 4",
    duration: 5000,
    close: true,
    gravity: "top",
    position: "right",
    stopOnFocus: true,
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function () {
      Toastify({
        text: "Find your spot on the map. 2 / 4",
        duration: 10000,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: () => {
          Toastify({
            text: "Search for the day and hour you'd like.  3 / 4",
            duration: 10000,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: () => {
              Toastify({
                text: "Check out the surf data. 4/ 4",
                duration: 10000,
                close: true,
                gravity: "top",
                position: "right",
                stopOnFocus: true,
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
              }).showToast();
            },
          }).showToast();
        },
      }).showToast();
    },
  }).showToast();
});
