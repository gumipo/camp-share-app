import { createSelector } from "reselect";

const productsSelector = (state) => state.locations;

export const getLocations = createSelector(
  [productsSelector],
  (state) => state.list
);
