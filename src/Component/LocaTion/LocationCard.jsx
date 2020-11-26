import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import ImageSwiper from "./ImageSwiper";
import { Language } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import axios from "axios";
import { fetchWeatherDataAction } from "../../redux/Location/actions";
import { Divider } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";

export default function LocationCard(props) {
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(false);

  console.log(props);

  const API_KEY = "ead32199cb2793af95adbfb3cfe6474d";
  const lat = props.lat;
  const lon = props.lon;

  const fetchWeatherPoint = async () => {
    let url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&lang=ja&appid=${API_KEY}`;
    await axios
      .get(url)
      .then((response) => {
        dispatch(fetchWeatherDataAction(response.data));
      })
      .then(() => {
        dispatch(push("/location/weather"));
      });
  };

  return (
    <StyledLocationCard>
      <StyledCardHeader>
        <ImageSwiper images={props.images} />
      </StyledCardHeader>
      <StyledLocationDescriptionArea>
        <StyledLocationName>{props.name}</StyledLocationName>
        <StyledLocationAddress>
          住所 : <span>{props.address}</span>
        </StyledLocationAddress>
      </StyledLocationDescriptionArea>
      <Divider />
      <StyledCardFooter>
        <StyledCardFooterNav>
          <a
            target="_brank"
            href={
              "https://twitter.com/search?q=%23" +
              props.name +
              "&src=typed_query&f=live"
            }
          >
            {"#" + props.name}
          </a>
          <a target="_brank" href={props.url}>
            <Language />
          </a>
          <p onClick={() => fetchWeatherPoint()}>天気予報</p>
        </StyledCardFooterNav>
        <Divider />
        <StyledFavoriteButtonArea>
          <IconButton onClick={() => setIsFavorite(!isFavorite)}>
            <FavoriteIcon color={isFavorite ? "secondary" : "disabled"} />
          </IconButton>
        </StyledFavoriteButtonArea>
      </StyledCardFooter>
    </StyledLocationCard>
  );
}

const StyledLocationCard = styled.div`
  width: 400px;
  height: 500px;
  box-shadow: 0px 0px 11px 2px black;
  margin: 20px;
`;

const StyledCardHeader = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

const StyledLocationDescriptionArea = styled.div`
  margin-left: 15px;
`;

const StyledLocationName = styled.h2`
  font-size: 25px;
  margin-top: 10px;
`;

const StyledLocationAddress = styled.p`
  font-size: 15px;
`;

const StyledCardFooter = styled.div`
  margin-top: 20px;
`;

const StyledCardFooterNav = styled.nav`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  a {
    color: blue;
    display: grid;
    place-items: center;
  }
  P {
    cursor: pointer;
  }
`;

const StyledFavoriteButtonArea = styled.div`
  width: 100%;
  background-color: white;
  display: grid;
  place-items: center;
  margin-top: 5px;
`;
