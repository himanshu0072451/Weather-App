import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import snow from "../../assets/snow.webp";
import clear from "../../assets/clear.webp";
import clouds from "../../assets/clouds.webp";
import drizzle from "../../assets/drizzle.webp";
import rain from "../../assets/rain.webp";
import mist from "../../assets/mist.webp";

const Home = () => {
  const [weatherData, setWeatherData] = useState([]);
  const apiKey = "f1305069907dee3b15877848fc15d567";
  const [inputValue, setInputValue] = useState("NAGPUR"); // Default city

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}&units=metric`
        );

        if (!response.ok) {
          throw new Error("Weather data not available");
        }

        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching weather data:", error.message);
      }
    };
    fetchData();
  }, [apiKey, inputValue]);

  if (!weatherData || !weatherData.main) {
    return <div>Loading...</div>;
  }
  let weatherImageSrc = "";

  const weatherCondition = weatherData.weather[0].main.toLowerCase();
  if (weatherCondition === "clear") {
    weatherImageSrc = clear;
  } else if (weatherCondition === "clouds") {
    weatherImageSrc = clouds;
  } else if (weatherCondition === "snow") {
    weatherImageSrc = snow;
  } else if (
    weatherCondition === "rain" ||
    weatherCondition === "thunderstorm"
  ) {
    weatherImageSrc = rain;
  } else if (
    weatherCondition === "mist" ||
    weatherCondition === "fog" ||
    weatherCondition === "smoke"
  ) {
    weatherImageSrc = mist;
  } else if (weatherCondition === "drizzle" || weatherCondition === "haze") {
    weatherImageSrc = drizzle;
  }
  // console.log(weatherCondition)
  return (
    <>
      <div className="home-main">
        <FaSearch className="icon" />
        <input
          placeholder="Search"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
        <div className="info">
          <h1 className="city">{weatherData.name}</h1>
          <div className="temp-info">
            <img src={weatherImageSrc} alt="Weather Icon" />
            <h1 className="temp">{weatherData.main.temp}&deg;C</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
