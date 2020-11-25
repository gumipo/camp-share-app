import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLocations } from "../../redux/Location/operations";
import { getLocations } from "../../redux/Location/selector";
import LocationCard from "../LocaTion/LocationCard";
import styled from "styled-components";
import { PrimaryButton, SelectBox } from "../UIkit";

const SerchLocation = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const locations = getLocations(selector);
  const [prefecture, setPrefecture] = useState("");

  const prefectures = [
    { id: "all", name: "全て" },
    { id: "aichi", name: "愛知" },
    { id: "gihu", name: "岐阜" },
    { id: "mie", name: "三重" },
    { id: "shizuoka", name: "静岡" },
  ];

  return (
    <StyledSection className="c-section-wrapin">
      <StyledHomeTitle>キャンプ場を探す</StyledHomeTitle>
      <div className="module-spacer--medium" />
      <SelectBox
        label={"県"}
        required={true}
        options={prefectures}
        select={setPrefecture}
        value={prefecture}
      />
      <PrimaryButton
        label="検索する"
        onClick={() => dispatch(fetchLocations(prefecture))}
      />
      <div>
        {locations.length > 0 &&
          locations.map((location, index) => (
            <LocationCard
              index={index}
              key={location.name}
              name={location.name}
              url={location.Url}
              address={location.address}
              images={location.images}
              lat={location.lat}
              lon={location.lon}
            />
          ))}
      </div>
    </StyledSection>
  );
};
export default SerchLocation;

const StyledSection = styled.section`
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
`;

const StyledHomeTitle = styled.h1`
  margin-top: 64px;
  font-size: 50px;
  color: black;
`;
