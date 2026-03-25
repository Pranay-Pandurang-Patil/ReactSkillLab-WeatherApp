import React, { useState } from "react";
import axios from "axios";
function Weather() {
  const [city, setCity] = useState();
  const [weather,setWeather]=useState();
  const handleCitychange = (event) => {
    setCity(event.target.value);
  };
  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'6c14a2d240bddc9314428e54b8d22973'}`)
        setWeather(response);
      

      console.log(response);
    } catch (error) {
      (console, log("Error fetching in API"));
    }
  };

  const handleClick = () => {
    fetchWeather();
  };
  return (
    <div className="weather-container">
      <input
        type="text"
        placeholder="Enter the city Name "
        value={city}
        onChange={handleCitychange}
      ></input>
      <button onClick={handleClick}> Get Weather</button>
      {weather && (
        <>
          {" "}
          <div className="weather-info" />
          <h3>{weather.data.name}</h3>
          <p>Temperature is {weather.data.main.temp} K</p>
          <p>Weather Description :{weather.data.weather[0].description}</p>
        </>
      )}
    </div>
  );
}

export default Weather;
