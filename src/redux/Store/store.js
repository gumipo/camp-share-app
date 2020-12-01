import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";

//import react-router
import { connectRouter, routerMiddleware } from "connected-react-router";

//import reducers
import { UsersReducer } from "../Users/reducers";
import { LocationsReducer } from "../Location/reducers";

export default function createStore(history) {
  return reduxCreateStore(
    combineReducers({
      router: connectRouter(history),
      users: UsersReducer,
      locations: LocationsReducer,
    }),
    applyMiddleware(routerMiddleware(history), thunk)
  );
}
