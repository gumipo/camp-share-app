import React from "react";
import { useSelector } from "react-redux";

//import materialUI
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const HeaderMenus = (props) => {
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
