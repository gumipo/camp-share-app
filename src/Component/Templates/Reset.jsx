import React, { useState, useCallback } from "react";
import { TextInput } from "../UIkit";
import { PrimaryButton } from "../UIkit";
import { resetPassword } from "../../redux/Users/operations";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

const Reset = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");

  const iunputEmail = useCallback(
    (event) => {
      setEmail(event.target.value);
    },
    [setEmail]
  );

  return (
    <div>
      <h2>パスワードのリセット</h2>
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
      <div className="center">
        <PrimaryButton
          label={"メールを送信"}
          onClick={() => dispatch(resetPassword(email))}
        />
        <p className="text-cursor" onClick={() => dispatch(push("/login"))}>
          ログイン画面に戻る
        </p>
      </div>
    </div>
  );
};
export default Reset;
