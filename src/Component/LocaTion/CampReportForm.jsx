import React, { useCallback, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const CampReportForm = () => {
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const inputLocation = useCallback(() => {
    setLocation(inputRef.current.value);
  }, [setLocation]);

  return (
    <StyledReportForm>
      <h1>キャンプのレーポートを共有しよう</h1>

      <h2>画像をアップロード</h2>

      <h2>キャンプ場の名前</h2>
      <input
        placeholder="キャンプ場の名前"
        type="text"
        ref={inputRef}
        value={location}
        onChange={() => inputLocation()}
      />

      

      <button>投稿する</button>
    </StyledReportForm>
  );
};

export default CampReportForm;

const StyledReportForm = styled.section`
  margin: 200px;
`;
