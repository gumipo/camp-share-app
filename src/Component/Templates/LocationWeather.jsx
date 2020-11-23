import React, { useEffect } from "react";
import { push } from "connected-react-router";
import { useSelector, useDispatch } from "react-redux";
import { getLocationWeather } from "../../redux/Location/selector";
import WeatherListItem from "../../Component/Location/WeatherListItem";

const LocationWeather = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const weather = getLocationWeather(selector);
  const timeWeatherList = weather.list;

  return (
    <div>
      <h1>天気予報</h1>
      <div>
        {timeWeatherList.length > 0 &&
          timeWeatherList.map((timeweather) => (
            <WeatherListItem key={timeweather} timeweather={timeweather} />
          ))}
      </div>
    </div>
  );
};

export default LocationWeather;
