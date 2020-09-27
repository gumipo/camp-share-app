import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import styled from "styled-components";

const Login = () => {
  return (
    <StyledLogin>
      <h1>Camp Share</h1>

      <LoginButtonArea>
        <GoogleLoginButton>Sign in With Google</GoogleLoginButton>

        <TwitterLoginButton>
          <TwitterIcon style={{ marginRight: 10 }} />
          Sign in With Facebook
        </TwitterLoginButton>

        <FacebookLoginButton>
          <FacebookIcon style={{ marginRight: 10 }} />
          Sign in With Facebook
        </FacebookLoginButton>
      </LoginButtonArea>
    </StyledLogin>
  );
};
export default Login;

const StyledLogin = styled.section`
  background-color: grey;

  border-radius: 50px;
  width: 600px;
  margin: 0 auto;
  box-shadow: inset 1px 1px 8px 0px;
  button {
    margin: 0 auto;
    text-align: center;
    width: 230px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 10px;

    cursor: pointer;
    outline: none;
    font-size: 17px;
    box-sizing: border-box;
  }
  button:hover {
    opacity: 0.7;
  }
`;

const LoginButtonArea = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const GoogleLoginButton = styled.button`
  background-color: red;
  color: white;
`;

const TwitterLoginButton = styled.button`
  background-color: aqua;
`;
const FacebookLoginButton = styled.button`
  background-color: navy;
  color: white;
`;
