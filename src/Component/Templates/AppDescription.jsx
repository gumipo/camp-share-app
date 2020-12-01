import { Divider } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const AppDescripntion = () => {
  return (
    <StyledAppDescription>
      <StyledTitle>使用技術</StyledTitle>
      <p>React</p>
      <p>firebase</p>
      <Divider />
      <StyledSubTitle>ライブラリ</StyledSubTitle>
      <p>Redux</p>
      <p>React-router</p>
      <p>MaterialUI</p>
      <p>Swiper</p>
      <Divider />
      <StyledSubTitle>API</StyledSubTitle>
      <p>open weather API</p>
    </StyledAppDescription>
  );
};

export default AppDescripntion;

const StyledAppDescription = styled.section`
  width: 500px;
  margin: 100px auto;
  text-align: center;
  @media screen and (max-width: 767px) {
    width: 370px;
  }
`;

const StyledTitle = styled.h1`
  font-size: 25px;
`;
const StyledSubTitle = styled.h2`
  font-size: 20px;
`;
