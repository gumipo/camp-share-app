import React from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

const WeatherListItem = ({ timeweather }) => {
  const dispatch = useDispatch();
  console.log(timeweather);
  const icon = timeweather.weather[0].icon;

  return (
    <div>
      <p>{timeweather.dt_txt}</p>
      <p>{timeweather.weather[0].description}</p>
      <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
      <button onClick={() => dispatch(push("/"))}>戻る</button>
    </div>
  );
};

export default WeatherListItem;
