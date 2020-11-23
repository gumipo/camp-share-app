import React from "react";
import { getLocations } from "../../redux/Location/selector";
import axios from "axios";

const LocationWeather = () => {
  const selector = useSelctor((state) => state);
  const location = getLocations(selector);

  const API_KEY = "ead32199cb2793af95adbfb3cfe6474d";
  const lat = location.lat;
  const lon = location.lon;

  const fetchWetherPoint = () => {
    let url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&lang=ja&appid=${API_KEY}`;
    axios.get(url).then((response) => {
      console.log(response);
    });
  };

  useEffect(() => {
    fetchWetherPoint();
  }, []);

  return <div></div>;
};

export default LocationWeather;
