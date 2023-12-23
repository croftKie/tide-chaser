import axios from "axios";

export const fetchData = async (lng, lat) => {
  try {
    const { data } = await axios.get(
      `https://tider-chaser-server.onrender.com`
    );
    return data;
    // let mode = 0;
    // // if it is the first load by user, run map and menu initialisation
    // if (mode === 0) {
    //   mapScript();
    //   // initMenu();
    //   mode = 1;
    // }
    // popup(data.daily, data.hourly);
    // dataManager(data.daily, data.hourly);
  } catch (err) {
    // toast("Surf data not available, try again later");
  }
};

export const coordsFromPlaceName = async (value) => {
  const { data } = await axios.get(
    `https://api.openweathermap.org/geo/1.0/direct?q=${value}&appid=35d2edfe3900c67fdd86eea343199c65`
  );
  return data;
};
