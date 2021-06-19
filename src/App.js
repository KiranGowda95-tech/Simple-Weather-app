import React, { useState } from "react";

const api = {
  key: "fa042c182f66bc5381a5eb21836546ca",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
    }
  };

  // const dataBuilder = (d) => {
  //   let months = [
  //     "January",
  //     "Febraury",
  //     "March",
  //     "April",
  //     "May",
  //     "june",
  //     "July",
  //     "August",
  //     "September",
  //     "October",
  //     "Novenber",
  //     "December",
  //   ];
  //   let days = [
  //     "Sunday",
  //     "Monday",
  //     "Tuesday",
  //     "Wednesday",
  //     "Thursday",
  //     "Friday",
  //     "Saturday",
  //   ];

  //   let day = days[d.getDay()];
  //   let date = d.getDate();
  //   let month = months[d.getMonth()];
  //   let year = d.getFullYear();

  //   return `${day} ${date} ${month} ${year}`;
  // };
  //this is been replaced by simple {new Date().toDateString()}

  return (
    <div
      className={
        typeof weather.main !== "undefined"
          ? weather.main.temp > 16
            ? "App warm"
            : "App"
          : "App"
      }
    >
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search the area you  required..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>

        {typeof weather.main != "undefined" ? (
          <div>
            <div className="location-box">
              <div className="location">
                {" "}
                {weather.name},{weather.sys.country}{" "}
              </div>
              {/* <div className="date"> {dataBuilder(new Date())} </div> */}
              <div className="date"> {new Date().toDateString()} </div>
            </div>

            <br />
            <div className="weather-box">
              <div className="temp"> {Math.round(weather.main.temp)}°C </div>
              <br></br>
              <br />
              <div className="weather"> {weather.weather[0].main} </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}

export default App;
