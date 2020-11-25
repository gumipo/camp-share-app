import React, { useEffect } from "react";
import { push } from "connected-react-router";
import { useSelector, useDispatch } from "react-redux";
import { getLocations } from "../../redux/Location/selector";

const WeatherStats = ({ children }) => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const location = getLocations(selector);

  useEffect(() => {
    if (location.length === 0) {
      dispatch(push("/"));
    }
  }, []);

  if (location.length === 0) {
    return <></>;
  } else {
    return children;
  }
};
export default WeatherStats;
