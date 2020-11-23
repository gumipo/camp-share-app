import React from "react";
import Auth from "./Auth";
import { Route, Switch } from "react-router";
import addLocation from "./Component/Location/SaveLocations";
import {
  Login,
  SignUp,
  Reset,
  AppDescription,
  SerchLocation,
  LocationWeather,
} from "./Component/Templates/index";

const Router = () => {
  return (
    <Switch>
      <Route exact path={"/login"} component={Login} />
      <Route exact path={"/signup"} component={SignUp} />
      <Route exact path={"/reset"} component={Reset} />
      <Auth>
        <Route exact path={"/"} component={SerchLocation} />
        <Route exact path={"/location/add"} component={addLocation} />
        <Route exact path={"/app/description"} component={AppDescription} />
        <Route exact path={"/location/weather"} component={LocationWeather} />
      </Auth>
    </Switch>
  );
};
export default Router;
