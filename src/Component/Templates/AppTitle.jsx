import React from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import logo from "../../assets/image/rampe.svg";
import logo2 from "../../assets/image/fire.svg";
import styled from "styled-components";

const AppTitle = () => {
  const dispatch = useDispatch();
  return (
    <>
      <StyledAppTitle onClick={() => dispatch(push("/"))}>
        <AppTitleLogo src={logo} />
        go Camp
        <AppTitleLogo src={logo2} />
      </StyledAppTitle>
    </>
  );
};

export default AppTitle;

const StyledAppTitle = styled.div`
  cursor: pointer;
  width: 300px;
  margin-left: 30px;
  font-family: "Permanent Marker", cursive;
  font-size: 40px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const AppTitleLogo = styled.img`
  width: 30px;
  height: 30px;
`;
