import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import NaturePeopleIcon from "@material-ui/icons/NaturePeople";

const Hooter = () => {
  return (
    <StyledFooter>
      <StyledFooterNav>
        <StyledHooterList>
          <li>
            <SearchIcon />
            <p>キャンプ場の検索</p>
          </li>
          <li>
            <NaturePeopleIcon />
            <p>みんなの投稿</p>
          </li>
          <li>
            <h2>自分も投稿</h2>
          </li>

          <li>
            <h2>プロフィール</h2>
          </li>
        </StyledHooterList>
      </StyledFooterNav>
    </StyledFooter>
  );
};

export default Hooter;

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
