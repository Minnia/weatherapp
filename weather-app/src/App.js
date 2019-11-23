import React, { useState } from "react";
import Titles from "./components/Titles";
import Forms from "./components/Forms";
import Weather from "./components/Weather";

console.log(process.env.REACT_APP_API_KEY);

const API_KEY = process.env.REACT_APP_API_KEY;

const App = () => {
  const [temperature, setTemperature] = useState(null);
  const [city, setCity] = useState(null);
  const [country, setCountry] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [description, setDescription] = useState(null);
  const [error, setError] = useState(null);
  const getWeather = async event => {
    event.preventDefault();
    const city = event.target.elements.city.value;
    const country = event.target.elements.country.value;
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather/?q=${city},${country}&&appid=${API_KEY}&units=metric`
    );
    const data = await api_call.json();
    if (city && country) {
      console.log(data);
      setTemperature(data.main.temp);
      setCity(data.name);
      setCountry(data.sys.country);
      setHumidity(data.main.humidity);
      setDescription(data.weather[0].description);
    } else {
      setTemperature(null);
      setCity(null);
      setCountry(null);
      setHumidity(null);
      setDescription(null);
      setError("Please enter valid input");
    }
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
                  error={error}
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
