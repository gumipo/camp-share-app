import * as Actions from "./actions";
import initialState from "../Store/initialState";

export const LocationsReducer = (state = initialState.locations, action) => {
  switch (action.type) {
    case Actions.FETCH_LOCATIONS:
      return {
        ...state,
        list: [...action.payload],
      };
    case Actions.DELETE_LOCATION:
      return {
        ...state,
        list: [...action.payload],
      };
    case Actions.FETCH_WEATHER:
      return {
        ...state,
        weather: action.payload,
      };
    default:
      return state;
  }
};
