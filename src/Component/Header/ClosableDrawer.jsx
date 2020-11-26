import React, { useState, useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import { signOut } from "../../redux/Users/operations";
//import materialUi
import { makeStyles } from "@material-ui/styles";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import IconButton from "@material-ui/core/IconButton";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import SearchIcon from "@material-ui/icons/Search";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import HelpOutline from "@material-ui/icons/HelpOutline";
import SelectBox from "../../Component/UIkit/SelectBox";
import { fetchLocations } from "../../redux/Location/operations";
import { fetchFavoriteLocations } from "../../redux/Location/operations";

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up("sm")]: {
      flexShrink: 0,
      width: 256,
    },
  },

  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: 256,
  },
  searchField: {
    display: "flex",
    alignItems: "center",
    marginLeft: 32,
  },
}));

const ClosableDrawer = (props) => {
  const classes = useStyles();
  const { container } = props;
  const dispatch = useDispatch();

  const [prefecture, setPrefecture] = useState("");

  const prefectures = [
    { id: "all", name: "全て" },
    { id: "aichi", name: "愛知" },
    { id: "gihu", name: "岐阜" },
    { id: "mie", name: "三重" },
    { id: "shizuoka", name: "静岡" },
  ];

  return (
    <nav className={classes.drawer}>
      <Drawer
        container={container}
        variant="temporary" //開いたり閉じたり
        anchor="right" //どっちから出るか
        open={props.open}
        onClose={(e) => props.onClose(e)}
        classes={{ paper: classes.drawerPaper }}
        ModalProps={{ keepMounted: true }} //スマホの時にパフォマンス上がる
      >
        <div
          onClose={(e) => props.onClose(e)}
          onKeyDown={(e) => props.onClose(e)}
        >
          <div className={classes.searchField}>
            <SelectBox
              label={"県"}
              required={true}
              options={prefectures}
              select={setPrefecture}
              value={prefecture}
            />
            <IconButton
              onClick={(e) => {
                dispatch(fetchLocations(prefecture));
                dispatch(push("/"));
                props.onClose(e);
              }}
            >
              <SearchIcon />
            </IconButton>
          </div>
          <Divider />

          <List>
            <ListItem
              button
              onClick={(e) => {
                dispatch(fetchFavoriteLocations());
                dispatch(push("/"));
                props.onClose(e);
              }}
            >
              <ListItemIcon>
                <FavoriteIcon />
              </ListItemIcon>
              <ListItemText primary="お気に入り" />
            </ListItem>

            <ListItem button key="logout" onClick={() => dispatch(signOut())}>
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary={"Logout"} />
            </ListItem>

            <Divider />
            <ListItem
              button
              key="question"
              onClick={() => dispatch(push("/app/description"))}
            >
              <ListItemIcon>
                <HelpOutline />
              </ListItemIcon>
              <ListItemText primary={"使用技術"} />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </nav>
  );
};
export default ClosableDrawer;
