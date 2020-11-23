import React, { useState, useCallback } from "react";
import { TextInput } from "../UIkit";
import styled from "styled-components";
import { signIn } from "../../redux/Users/operations";
import { useDispatch } from "react-redux";

const SignIn = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState(""),
    [password, setPassword] = useState("");

  const iunputEmail = useCallback(
    (event) => {
      setEmail(event.target.value);
    },
    [setEmail]
  );
  const iunputPassword = useCallback(
    (event) => {
      setPassword(event.target.value);
    },
    [setPassword]
  );

  return (
    <div className="c-section-container">
      <TextInput
        fullWidth={true}
        label={"メールアドレス"}
        multiline={false}
        required={true}
        rows={1}
        value={email}
        type={"email"}
        onChange={iunputEmail}
      />
      <TextInput
        fullWidth={true}
        label={"パスワード"}
        multiline={false}
        required={true}
        rows={1}
        value={password}
        type={"password"}
        onChange={iunputPassword}
      />

      <div className="module-spacer--medium" />
      <div className="center">
        <LoginButton onClick={() => dispatch(signIn(email, password))}>
          Login
        </LoginButton>
      </div>
    </div>
  );
};
export default SignIn;

const LoginButton = styled.button`
  background-color: green;
  color: white;
`;
