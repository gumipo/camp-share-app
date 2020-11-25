import React, { useEffect } from "react";
import { push } from "connected-react-router";
import { useSelector, useDispatch } from "react-redux";
import { getLocationWeather } from "../../redux/Location/selector";
import WeatherListItem from "../LocaTion/WeatherListItem";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Divider } from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const LocationWeather = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const weather = getLocationWeather(selector);
  const timeWeatherList = weather.list;

  console.log(weather);
  return (
    <StyledLocationWeather>
      <StyledTitle>{weather.city.name}の天気予報</StyledTitle>
      <Divider />
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>日時</TableCell>
              <TableCell align="center">天気</TableCell>
              <TableCell align="center">最高気温</TableCell>
              <TableCell align="center">最低気温</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {timeWeatherList.length > 0 &&
              timeWeatherList.map((timeweather) => (
                <TableRow key={timeweather.dt_txt}>
                  <TableCell component="th" scope="row">
                    <p>{timeweather.dt_txt}</p>
                  </TableCell>
                  <TableCell align="center">
                    {timeweather.weather[0].description}
                    <img
                      src={`http://openweathermap.org/img/wn/${timeweather.weather[0].icon}@2x.png`}
                    />
                  </TableCell>
                  <TableCell align="center">
                    {(timeweather.main.temp_max - 273.15).toFixed(1) + "度"}
                  </TableCell>
                  <TableCell align="center">
                    {(timeweather.main.temp_min - 273.15).toFixed(1) + "度"}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </StyledLocationWeather>
  );
};

export default LocationWeather;

const StyledLocationWeather = styled.section`
  width: 800px;
  margin: 100px auto;
`;

const StyledTitle = styled.h2`
  font-size: 20px;
`;
