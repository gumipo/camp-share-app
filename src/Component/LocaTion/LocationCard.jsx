import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { push } from "connected-react-router";
import ImageSwiper from "./ImageSwiper";
import { Language } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import axios from "axios";
import { fetchWeatherDataAction } from "../../redux/Location/actions";
import { Divider } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { FirebaseTimestamp, db } from "../../Firebase";
import { addFavoriteLocation } from "../../redux/Users/operations";
import { useEffect } from "react";

export default function LocationCard(props) {
  const dispatch = useDispatch();
  const uid = useSelector((state) => state.users.uid);
  const [isFavorite, setIsFavorite] = useState(false);
  const locationsRef = db.collection("locations");

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

  useEffect(() => {
    db.collection("users")
      .doc(uid)
      .collection("favorite")
      .get()
      .then((snapshots) => {
        snapshots.forEach((snapshot) => {
          const data = snapshot.data();
          const favoriteId = data.id;
          if (props.id === favoriteId) {
            setIsFavorite(true);
          }
        });
      });
  }, []);

  const favoriteChange = () => {
    const batch = db.batch();
    const timestamp = FirebaseTimestamp.now();
    if (!isFavorite) {
      dispatch(
        addFavoriteLocation({
          images: props.images,
          name: props.name,
          Url: props.url,
          prefecture: props.prefecture,
          evaluation: props.evaluation,
          address: props.address,
          added_at: timestamp,
          lat: lat,
          lon: lon,
          id: props.id,
        })
      );
      batch.update(locationsRef.doc(props.id), { favoriteUser: uid });
      setIsFavorite(true);
    } else {
      db.collection("users")
        .doc(uid)
        .collection("favorite")
        .doc(props.id)
        .delete();
      batch.delete(locationsRef.doc(props.id));
      setIsFavorite(false);
    }
  };

  return (
    <StyledLocationCard>
      <StyledCardHeader>
        <ImageSwiper images={props.images} />
      </StyledCardHeader>
      <StyledLocationDescriptionArea>
        <StyledLocationName>{props.name}</StyledLocationName>
        <StyledLocationAddress>
          住所:<span>{props.address}</span>
        </StyledLocationAddress>
      </StyledLocationDescriptionArea>
      <Divider />
      <StyledCardFooter>
        <StyledCardFooterNav>
          {/* ツイッターリンク */}
          <a
            target="_brank"
            href={
              "https://twitter.com/search?q=%23" +
              props.name +
              "&src=typed_query&f=live"
            }
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/fr/c/c8/Twitter_Bird.svg"
              alt="twitter_link"
            />
          </a>
          {/* インスタリンク */}
          <a
            target="_brank"
            href={"https://www.instagram.com/explore/tags/" + props.name + "/"}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
              alt="instagram_link"
            />
          </a>

          <a target="_brank" href={props.url}>
            <Language />
          </a>
          <p onClick={() => fetchWeatherPoint()}>天気予報</p>
        </StyledCardFooterNav>
        <Divider />
        <StyledBookingURLArea>
          <a target="_brank" href={props.bookingUrl}>
            {props.bookingUrl ? "予約状況の確認" : "予約不要"}
          </a>
        </StyledBookingURLArea>

        <Divider />

        <StyledFavoriteButtonArea>
          <IconButton onClick={() => favoriteChange()}>
            <FavoriteIcon color={isFavorite ? "secondary" : "disabled"} />
          </IconButton>
        </StyledFavoriteButtonArea>
      </StyledCardFooter>
    </StyledLocationCard>
  );
}

const StyledLocationCard = styled.div`
  width: 400px;
  height: 540px;
  box-shadow: 0px 0px 11px 6px #305f33;
  margin: 25px;
  @media screen and (max-width: 767px) {
    width: 350px;
    margin: 15px;
  }
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
  @media screen and (max-width: 767px) {
    font-size: 20px;
  }
`;

const StyledLocationAddress = styled.p`
  font-size: 15px;
  @media screen and (max-width: 767px) {
    font-size: 13px;
  }
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
    img {
      width: 30px;
      height: 30px;
    }
  }
  P {
    cursor: pointer;
  }
`;

const StyledBookingURLArea = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    text-decoration: none;
    color: gray;
  }
`;

const StyledFavoriteButtonArea = styled.div`
  width: 100%;
  background-color: white;
  display: grid;
  place-items: center;
  margin-top: 5px;
`;
