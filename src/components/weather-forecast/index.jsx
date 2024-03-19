import { useEffect, useState } from "react";
import "./index.css";
import Search from "./search";

export default function Weather() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  async function fetchWeatherData(query) {
    try {
      setLoading(true);
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=de1f70dfa110f1adbf2ef3da40729740`
      );

      const data = await res.json();

      if (data) {
        setLoading(false);
        setError(false);
        setWeatherData(data);
      }
    } catch (e) {
      console.log(e);
      setError(e);
      setLoading(false);
    }
  }

  async function handleSearch() {
    fetchWeatherData(search);
  }

  useEffect(() => {
    fetchWeatherData("Nyeri");
  }, []);

  function getCurrentDate() {
    return new Date().toLocaleDateString("en-uS", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }

  console.log(weatherData);

  return (
    <div className="app">
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div>
          <div className="city-name">
            <h2>
              {weatherData?.name},<span>{weatherData?.sys?.country}</span>{" "}
            </h2>
          </div>
          <div className="date">
            <span>{getCurrentDate()}</span>
          </div>
          <div className="temperature">{weatherData?.main?.temp}</div>
          <p className="description">
            {weatherData && weatherData.weather && weatherData.weather[0]
              ? weatherData.weather[0].description
              : " "}
          </p>
          <div className="weather-info">
            <div className="column">
              <div>
                <p className="wind">{weatherData?.wind?.speed}</p>
                <p className="wind-speed">Wind Speed</p>
              </div>
            </div>
            <div className="column">
              <div>
                <p className="humidity">{weatherData?.main?.humidity}</p>
                <p className="humidity-speed">Humidity</p>
              </div>
            </div>
          </div>
        </div>
      )}
      {error ? <div>Error occured while processing your request </div> : null}
    </div>
  );
}
