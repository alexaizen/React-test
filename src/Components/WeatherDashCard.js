import "./WeatherDashCard.css";
import React, { useState } from "react";
import SquareCard from "../UI/SquareCard";

function WeatherDashCard() {
  // let day = null;
  // let weather = null;
  // let temperature = null;
  const [weatherFetched, setWeatherFetched] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  const fetchWeather = async function () {
    const response = await fetch(
      "https://mocki.io/v1/cad7e2b6-1d3e-45ed-a160-d24a710b57f8"
    );
    const data = await response.json();
    setWeatherData({
      day: data.day,
      weather: data.weather,
      temperature: data.temperature,
    });
    setWeatherFetched(true);
  };

  return (
    <SquareCard>
      <h4>Weather</h4>
      {weatherFetched && (
        <React.Fragment>
          <h3>{` ${weatherData.day}`}</h3>
          <p>
            {`${weatherData.weather} - ${weatherData.temperature}`}
            <span>&#8451;</span>
          </p>
        </React.Fragment>
      )}
      {!weatherFetched && (
        <button className="weather-button" type="button" onClick={fetchWeather}>
          Fetch Weather
        </button>
      )}
    </SquareCard>
  );
}

export default WeatherDashCard;
