import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { TextInput, SelectBox, PrimaryButton } from "../UIkit";
import { saveLocation } from "../../redux/Location/operations";
import LocationImageArea from "../LocaTion/LocationImageArea";

const SaveLocations = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState(""),
    [Url, setUrl] = useState(""),
    [images, setImages] = useState([]),
    [evaluation, setEvaluation] = useState(""),
    [address, setAddress] = useState(""),
    [prefecture, setPrefecture] = useState("");

  const inputName = useCallback(
    (event) => {
      setName(event.target.value);
    },
    [setName]
  );

  const inputUrl = useCallback(
    (event) => {
      setUrl(event.target.value);
    },
    [setUrl]
  );

  const inputAddres = useCallback(
    (event) => {
      setAddress(event.target.value);
    },
    [setAddress]
  );

  const inputEvaluation = useCallback(
    (event) => {
      setEvaluation(event.target.value);
    },
    [setEvaluation]
  );

  const prefectures = [
    { id: "aichi", name: "愛知" },
    { id: "gihu", name: "岐阜" },
    { id: "mie", name: "三重" },
    { id: "shizuoka", name: "静岡" },
    { id: "all", name: "全て" },
  ];

  return (
    <section>
      <div style={{ paddingTop: 200 }} />
      <h2 className="u-text__headline u-text-center">キャンプ場の登録</h2>
      <div className="c-section-container">
        <LocationImageArea images={images} setImages={setImages} />

        <TextInput
          fullWidth={true}
          label={"キャンプ場の名前"}
          multiline={false}
          required={true}
          rows={1}
          value={name}
          type={"text"}
          onChange={inputName}
        />
        <TextInput
          fullWidth={true}
          label={"キャンプ場HP"}
          multiline={false}
          required={true}
          rows={1}
          value={Url}
          type={"text"}
          onChange={inputUrl}
        />
        <SelectBox
          label={"県"}
          required={true}
          options={prefectures}
          select={setPrefecture}
          value={prefecture}
        />
        <TextInput
          fullWidth={true}
          label={"場所"}
          multiline={false}
          required={true}
          rows={1}
          value={address}
          type={"text"}
          onChange={inputAddres}
        />
        <TextInput
          fullWidth={true}
          label={"評価"}
          multiline={false}
          required={true}
          rows={1}
          value={evaluation}
          type={"number"}
          onChange={inputEvaluation}
        />

        <div className="center">
          <PrimaryButton
            label={"キャンプ場を登録"}
            onClick={() =>
              dispatch(
                saveLocation(images, name, Url, prefecture, evaluation, address)
              )
            }
          />
        </div>
      </div>
    </section>
  );
};
export default SaveLocations;
