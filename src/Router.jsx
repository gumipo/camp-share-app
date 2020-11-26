import React from "react";
import Auth from "./Auth";
import { Route, Switch } from "react-router";
// import SaveLocations from "./Component/LocaTion/SaveLocations";
import {
  Login,
  SignUp,
  Reset,
  AppDescription,
  Home,
  LocationWeather,
  WeatherStats,
} from "./Component/Templates/index";

const Router = () => {
  return (
    <Switch>
      <Route exact path={"/login"} component={Login} />
      <Route exact path={"/signup"} component={SignUp} />
      <Route exact path={"/reset"} component={Reset} />
      <Auth>
        <Route exact path={"/"} component={Home} />
        {/* <Route exact path={"/location/add"} component={SaveLocations} /> */}
        <Route exact path={"/app/description"} component={AppDescription} />
        <WeatherStats>
          <Route exact path={"/location/weather"} component={LocationWeather} />
        </WeatherStats>
      </Auth>
    </Switch>
  );
};
export default Router;
