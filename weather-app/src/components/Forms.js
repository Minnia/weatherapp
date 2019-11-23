import React from "react";

const Forms = ({ getWeather }) => {
  return (
    <form onSubmit={getWeather}>
      <input type="text" name="city" placeholder="Enter a city"></input>
      <input type="text" name="country" placeholder="Enter a country"></input>
      <button>Get weather</button>
    </form>
  );
};
export default Forms;
