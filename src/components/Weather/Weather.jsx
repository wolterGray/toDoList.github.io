import React from "react";
import cl from "./weather.module.scss";

function Weather() {
  //wXCu5UKAiYdrLraDKwV9HKM2E4P96X
  const WEATHER_API = "https://api.brightsky.dev/weather?lat=52&lon=7.6&date=2020-04-21";
  fetch(WEATHER_API).then((res) => res.json()).then(data => console.log(data))
  return (
    <div className={cl.weather}>
      <img className={cl.weather_icn} src="/weather.svg" alt="wether icon" />/{" "}
      <p className={cl.degrees}>22˚</p>
    </div>
  );
}

export default Weather;
