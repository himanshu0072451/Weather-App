import React from "react";

const card = ({ title, forecast }) => {
  return (
    <>
      <div className="card">
        <h2>{title}</h2>
        {forecast && (
          <>
          <p>{forecast.dt_txt}</p>
            <p>Temperature: {forecast.main.temp}&deg;C</p>
            <p>Weather: {forecast.weather[0].main}</p>
            <p>Wind Speed: {forecast.wind.speed}mph</p>
            <p>Humidity: {forecast.main.humidity}%</p>
            {/* Add more forecast details as needed */}
          </>
        )}
      </div>
    </>
  );
};

export default card;
