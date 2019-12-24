import React from "react";
import { useSelector } from "react-redux";
import Titles from "./components/Titles";
import Forms from "./components/Forms";
import Weather from "./components/Weather";
import actions from "./redux/actions";
import { store } from "./redux/store";

const App = () => {
  const weather = useSelector(state => state.weather);
  const { temperature, city, country, humidity, description, error } = weather;
  const errorMessage =
    error === "Request failed with status code 404" ? "Place not found" : error;
  const getWeather = async event => {
    event.preventDefault();

    const city = event.target.elements.city.value;
    const country = event.target.elements.country.value;

    store.dispatch(actions.weather.getWeather(city, country));
  };
  return (
    <div>
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-xs-5 title-container">
                <Titles />
              </div>
              <div className="col-xs-7 form-container">
                <Forms getWeather={getWeather} />
                <Weather
                  temperature={temperature}
                  city={city}
                  country={country}
                  humidity={humidity}
                  description={description}
                  error={errorMessage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
