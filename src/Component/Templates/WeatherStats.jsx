import React, { useEffect } from "react";
import { push } from "connected-react-router";
import { useSelector, useDispatch } from "react-redux";
import { getLocationWeather } from "../../redux/Location/selector";

const WeatherStats = ({ children }) => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const weather = getLocationWeather(selector);

  useEffect(() => {
    if (weather === {}) {
      dispatch(push("/"));
    }
  }, []);

  if (weather === {}) {
    return <></>;
  } else {
    return children;
  }
};
export default WeatherStats;
