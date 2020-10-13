import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserId } from "../../redux/Users/selector";
import { push } from "connected-react-router";

//import materialUI
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const HeaderMenus = (props) => {
  const selector = useSelector((state) => state);
  const dispatch = useDispatch();
  const uid = getUserId(selector);

  return (
    <>
      <IconButton
        onClick={(event) => {
          props.handleDrawerToggle(event);
        }}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
};
export default HeaderMenus;
