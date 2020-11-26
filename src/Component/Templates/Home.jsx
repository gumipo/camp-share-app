import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLocations } from "../../redux/Location/operations";
import { getLocations } from "../../redux/Location/selector";
import LocationCard from "../LocaTion/LocationCard";
import styled from "styled-components";
import { useEffect } from "react";

const Home = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const locations = getLocations(selector);

  console.log(locations);
  useEffect(() => {
    dispatch(fetchLocations("all"));
  }, []);

  return (
    <StyledSection>
      <StyledCampLocationArea>
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
              prefecture={location.prefecture}
              evaluation={location.evaluation}
              id={location.id}
            />
          ))}
      </StyledCampLocationArea>
    </StyledSection>
  );
};
export default Home;

const StyledSection = styled.section`
  margin: 100px auto;
  width: 100%;
  min-height: 100vh;
  display: grid;
  place-items: center;
`;

const StyledCampLocationArea = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;
