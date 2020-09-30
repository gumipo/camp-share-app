import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import WetherModal from "../LocaTion/WetherModal";
import { signOut } from "../../redux/Users/operations";
import { fetchLocations } from "../../redux/Location/operations";
import { getLocations } from "../../redux/Location/selector";
import LocationCard from "../LocaTion/LocationCard";

const Home = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const locations = getLocations(selector);

  useEffect(() => {
    dispatch(fetchLocations());
  }, []);

  return (
    <section>
      <h2 onClick={() => dispatch(signOut())}>home</h2>
      <div>
        {locations.length > 0 &&
          locations.map((location, index) => (
            <WetherModal
              key={location.name}
              name={location.name}
              address={location.address}
              lat={location.lat}
              lon={location.lon}
              index={index}
            />
          ))}
      </div>
      <div>
        {locations.length > 0 &&
          locations.map((location) => (
            <LocationCard
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
    </section>
  );
};
export default Home;
