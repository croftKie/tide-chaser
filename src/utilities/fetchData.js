import axios from "axios";

export const fetchData = async (lng, lat) => {
  try {
    const { data } = await axios.get(
      `https://tider-chaser-server.onrender.com?lng=${lng}&lat=${lat}`
    );
    return data;
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

export const getFavourites = async () => {
  const user_id = localStorage.getItem("user_id");

  const { data } = await axios.get(
    `https://tider-chaser-server.onrender.com/favourites?user_id=${user_id}`
  );
  return data;
};

export const getBoards = async () => {
  const { data } = await axios.get(
    `https://tider-chaser-server.onrender.com/board`
  );
  return data;
};

export const postMyBoard = async (board_id) => {
  const user_id = localStorage.getItem("user_id");

  const { data } = await axios.post(
    `https://tider-chaser-server.onrender.com/board`,
    { user_id: user_id, board_id: board_id }
  );
  return data;
};

export const postMyFavourite = async (coords, name) => {
  const user_id = localStorage.getItem("user_id");

  const { data } = await axios.post(
    `https://tider-chaser-server.onrender.com/favourites`,
    { user_id: user_id, coords: coords, name: name }
  );
  return data;
};

export const postSignIn = async (values) => {
  const { data } = await axios.post(
    `https://tider-chaser-server.onrender.com/users/login`,
    { email: values[0], password: values[1] }
  );
  return data;
};

export const postSignUp = async (values) => {
  const { data } = await axios.post(
    `https://tider-chaser-server.onrender.com/users/signup`,
    {
      first_name: values.first_name,
      last_name: values.last_name,
      email: values.email,
      password: values.password,
    }
  );
  return data;
};
