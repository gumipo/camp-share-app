export const FETCH_LOCATIONS = "FETCH_LOCATIONS";
export const fetchLocationsAction = (products) => {
  return {
    type: "FETCH_LOCATIONS",
    payload: products,
  };
};

export const DELETE_LOCATION = "DELETE_LOCATION";
export const deleteLocationAction = (locations) => {
  return {
    type: "DELETE_LOCATION",
    payload: locations,
  };
};
