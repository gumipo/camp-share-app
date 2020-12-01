import React from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import styled from "styled-components";
import HomeIcon from "@material-ui/icons/Home";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";

const Footer = () => {
  const dispatch = useDispatch();
  return (
    <StyledFooter>
      <StyledFooterNav>
        <IconButton onClick={() => dispatch(push("/"))}>
          <HomeIcon color="secondary" />
        </IconButton>
      </StyledFooterNav>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  display: none;
  @media screen and (max-width: 767px) {
    display: block;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px;
    background-color: teal;
    box-shadow: -4px 11px 0px black;
    z-index: 2;
  }
`;

const StyledFooterNav = styled.nav`
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
