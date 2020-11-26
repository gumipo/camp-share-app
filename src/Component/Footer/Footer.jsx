import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterNav></StyledFooterNav>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  @media screen and (max-width: 767px) {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px;
    background-color: teal;
    box-shadow: -4px 11px 0px black;
    z-index: 2;
  }
`;

const StyledHooterList = styled.ul`
  @media screen and (max-width: 767px) {
    display: flex;
    li {
      font-size: 2px;
    }
  }
`;

const StyledFooterNav = styled.nav`
  color: white;
  display: flex;
  text-align: center;
  p {
    flex: 1;
  }
`;
