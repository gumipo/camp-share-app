import React from "react";

const WeatherListItem = ({ timeweather }) => {
  console.log(timeweather);
  return (
    <div>
      <p>{timeweather.dt_txt}</p>
    </div>
  );
};

export default WeatherListItem;
