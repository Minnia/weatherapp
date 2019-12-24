import { GET_WEATHER, GET_WEATHER_SUCCESS, GET_WEATHER_FAILURE } from "./types";
import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;

export const getWeather = (city, country) => async dispatch => {
  try {
    console.log("Getting weather...");
    dispatch({ type: GET_WEATHER });
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather/?q=${city},${country}&&appid=${API_KEY}&units=metric`
    );
    dispatch({ type: GET_WEATHER_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: GET_WEATHER_FAILURE, error: err.message });
  }
};
