import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <StyledHome>
      <h1>タイトル</h1>
    </StyledHome>
  );
};
export default Home;

const StyledHome = styled.section`
  width: 1000px;
  margin: 100px auto;
`;
