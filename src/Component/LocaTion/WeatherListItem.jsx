import React from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const WeatherListItem = ({ timeweather }) => {
  const dispatch = useDispatch();
  const icon = timeweather.weather[0].icon;

  return (
    <StyledWeatherItem>
      <div>
        <p>{timeweather.dt_txt}</p>
      </div>
      <p>{timeweather.weather[0].description}</p>
      <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
      <button onClick={() => dispatch(push("/"))}>戻る</button>
    </StyledWeatherItem>
  );
};

export default WeatherListItem;

const StyledWeatherItem = styled.div`
  display: flex;
  align-items: center;
`;
