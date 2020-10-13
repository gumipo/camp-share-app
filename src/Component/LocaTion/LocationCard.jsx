import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import ImageSwiper from "./ImageSwiper";
import { Language } from "@material-ui/icons";

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

export default function ImgMediaCard(props) {
  const classes = useStyles();

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
        　　
      </CardActions>
    </Card>
  );
}
