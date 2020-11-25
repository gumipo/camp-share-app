import React from "react";
import { useDispatch } from "react-redux";
import SignIn from "./SignIn";
import styled from "styled-components";
import { push } from "connected-react-router";
import logo from "../../assets/image/rampe.svg";
import logo2 from "../../assets/image/fire.svg";
import CampImage from "../../assets/image/loginphot.jpg";
import TwitterIcon from "@material-ui/icons/Twitter";
import MailIcon from "@material-ui/icons/Mail";
import { twitterLogin, googleLogin } from "../../redux/Users/operations";

const Login = () => {
  const dispatch = useDispatch();
  return (
    <StyledLogin className="c-main">
      <LoginTitle>
        <TitleLogo src={logo} />
        go Camp
        <TitleLogo src={logo2} />
      </LoginTitle>
      <div className="module-spacer--medium" />
      <LayoutFlex>
        <LoginImage src={CampImage} />
        <LoginButtonArea>
          <p style={{ fontSize: 25 }}>ログイン</p>
          <GoogleLoginButton onClick={() => dispatch(googleLogin())}>
            <MailIcon style={{ marginRight: 10 }} />
            Sign in With Google
          </GoogleLoginButton>
          <TwitterLoginButton onClick={() => dispatch(twitterLogin())}>
            <TwitterIcon style={{ marginRight: 10 }} />
            Sign in With Twitter
          </TwitterLoginButton>
          <SignIn />
        </LoginButtonArea>
      </LayoutFlex>
      <div className="module-spacer--medium" />
      <p onClick={() => dispatch(push("/signup"))} className="text-cursor">
        メールアドレスで登録の方はこちら
      </p>
      <div className="module-spacer--extra-small" />
      <p onClick={() => dispatch(push("/reset"))} className="text-cursor">
        パスワードをお忘れの方はこちら
      </p>
    </StyledLogin>
  );
};
export default Login;

const StyledLogin = styled.section`
  margin: 0 auto;
  text-align: center;
  @media screen and (max-width: 767px) {
    width: 350px;
  }
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
    box-shadow: 6px 7px 13px 0px black;
    cursor: pointer;
    outline: none;
    font-size: 17px;
    box-sizing: border-box;
  }
  button:hover {
    opacity: 0.7;
  }
`;
const LayoutFlex = styled.div`
  width: 800px;
  margin: 0 auto;
  display: flex;
  @media screen and (max-width: 767px) {
    width: 350px;
  }
`;
const LoginImage = styled.img`
  margin-right: 20px;
  width: 380px;
  border-radius: 10px;
  height: 500px;
  object-fit: cover;
  display: block;
  box-shadow: 0px 0px 17px 5px grey;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;
const LoginTitle = styled.div`
  width: 500px;
  margin: 0 auto;
  font-family: "Permanent Marker", cursive;
  font-size: 70px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media screen and (max-width: 767px) {
    width: 300px;
    font-size: 50px;
  }
`;
const TitleLogo = styled.img`
  width: 60px;
  height: 60px;
`;
const LoginButtonArea = styled.div`
  width: 400px;
  margin: 0 auto;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: solid 2px grey;
  border-radius: 5px;
  box-shadow: 0px 0px 17px 3px grey;
  background-color: white;
  @media screen and (max-width) {
    width: 400px;
  }
`;
const GoogleLoginButton = styled.button`
  background-color: rgb(226 4 0);
  color: white;
`;
const TwitterLoginButton = styled.button`
  background-color: aqua;
`;
