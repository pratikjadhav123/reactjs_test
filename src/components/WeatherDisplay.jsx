import React from 'react';
import { useLocation } from 'react-router-dom';

function WeatherDisplay() {
  const location = useLocation();
  const { weatherData } = location.state || {};

  return (
    <div>
      <h2>Weather Information</h2>
      {weatherData ? (
        <div>
          <p>City: {weatherData.location.name}, {weatherData.location.country}</p>
          <p>Temperature: {weatherData.current.temp_c} °C / {weatherData.current.temp_f} °F</p>
          <p>Condition: {weatherData.current.condition.text}</p>
          <img
            src={`http:${weatherData.current.condition.icon}`}
            alt={weatherData.current.condition.text}
          />
          <p>Wind: {weatherData.current.wind_kph} kph, {weatherData.current.wind_dir}</p>
          <p>Pressure: {weatherData.current.pressure_mb} mb</p>
          <p>Precipitation: {weatherData.current.precip_mm} mm</p>
          <p>Humidity: {weatherData.current.humidity}%</p>
          <p>Feels Like: {weatherData.current.feelslike_c} °C</p>
          <p>Visibility: {weatherData.current.vis_km} km</p>
          <p>UV Index: {weatherData.current.uv}</p>
          <p>Gust: {weatherData.current.gust_kph} kph</p>
        </div>
      ) : (
        <p>No weather data available</p>
      )}
    </div>
  );
}

export default WeatherDisplay;
