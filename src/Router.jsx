import React from "react";
import Auth from "./Auth";
import { Route, Switch } from "react-router";
import addLocation from "./Component/LocaTion/SaveLocations";
import { Login, SignUp, Reset, Home } from "./Component/Templates/index";

const Router = () => {
  return (
    <Switch>
      <Route exact path={"/login"} component={Login} />
      <Route exact path={"/signup"} component={SignUp} />
      <Route exact path={"/reset"} component={Reset} />

      <Auth>
        <Route exact path={"/location/add"} component={addLocation} />
        <Route exact path={"/home"} component={Home} />
      </Auth>
    </Switch>
  );
};
export default Router;
