import React from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { push } from "connected-react-router";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import ImageSwiper from "./ImageSwiper";
import { Language } from "@material-ui/icons";
import axios from "axios";
import { fetchWeatherDataAction } from "../../redux/Location/actions";

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    margin: 20,
    boxShadow: "0px 0px 10px 5px",
  },
  image: {
    objectFit: "cover",
    margin: "8px 16px 8px 0",
    height: 400,
    width: 400,
  },
});

export default function LocationCard(props) {
  const dispatch = useDispatch();
  const classes = useStyles();

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
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia>
          <ImageSwiper images={props.images} className={classes.image} />
        </CardMedia>
      </CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {"住所 : " + props.address}
        </Typography>
      </CardContent>
      <CardActions>
        　　
        <a
          href={
            "https://twitter.com/search?q=%23" +
            props.name +
            "&src=typed_query&f=live"
          }
        >
          {"#" + props.name}
        </a>
        <a href={props.url}>
          <Language />
        </a>
        <p onClick={() => fetchWeatherPoint()}>天気予報</p>
      </CardActions>
    </Card>
  );
}
