import React, { useState, useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { TextInput } from "../UIkit/index";
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

  const [keyword, setKeyword] = useState("");

  const inputKeyword = useCallback(
    (event) => {
      setKeyword(event.target.value);
    },
    [setKeyword]
  );

  const selectMenu = (event, path) => {
    dispatch(push(path));
    props.onClose(event);
  };

  const menus = [
    {
      func: selectMenu,
      label: "お気に入り",
      icon: <FavoriteIcon />,
      id: "favorite",
      value: "/user/mypage",
    },
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
            <TextInput
              fullWidth={false}
              label={"キーワードの入力"}
              multiline={false}
              required={false}
              rows={1}
              value={keyword}
              onChange={inputKeyword}
            />
            <IconButton>
              <SearchIcon />
            </IconButton>
          </div>
          <Divider />

          <List>
            {menus.map((menu) => (
              <ListItem
                button
                key={menu.id}
                onClick={(event) => menu.func(event, menu.value)}
              >
                <ListItemIcon>{menu.icon}</ListItemIcon>
                <ListItemText primary={menu.label} />
              </ListItem>
            ))}

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
              <ListItemText primary={"Campshareとは??"} />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </nav>
  );
};
export default ClosableDrawer;
