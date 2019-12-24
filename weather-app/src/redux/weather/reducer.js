import { GET_WEATHER, GET_WEATHER_SUCCESS, GET_WEATHER_FAILURE } from "./types";
const INITIAL_STATE = {
  temperature: null,
  city: null,
  country: null,
  humidity: null,
  description: null,
  error: null,
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_WEATHER:
      return { ...state, loading: true };

    case GET_WEATHER_SUCCESS:
      console.log("l18", action.payload);
      return {
        ...state,
        temperature: action.payload.main.temp,
        city: action.payload.name,
        country: action.payload.sys.country,
        humidity: action.payload.main.humidity,
        description: action.payload.weather[0].description,
        error: null,
        loading: false
      };

    case GET_WEATHER_FAILURE:
      return {
        ...INITIAL_STATE,
        error: action.error,
        loading: false
      };
    default:
      return state;
  }
};
