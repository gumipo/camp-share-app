import React from "react";
import Auth from "./Auth";
import { Route, Switch } from "react-router";
import addLocation from "./Component/LocaTion/SaveLocations";
import {
  Login,
  SignUp,
  Reset,
  Home,
  AppDescription,
} from "./Component/Templates/index";
import CampReportForm from "./Component/LocaTion/CampReportForm";

const Router = () => {
  return (
    <Switch>
      <Route exact path={"/login"} component={Login} />
      <Route exact path={"/signup"} component={SignUp} />
      <Route exact path={"/reset"} component={Reset} />

      <Auth>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/location/add"} component={addLocation} />
        <Route exact path={"/app/description"} component={AppDescription} />
        <Route exact path={"/add/campreport"} component={CampReportForm} />
      </Auth>
    </Switch>
  );
};
export default Router;
