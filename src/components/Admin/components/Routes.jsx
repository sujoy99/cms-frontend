import React from "react";

import { Route, Switch } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import CategoryName from "../pages/CategoryName";
import Login from "../pages/Login";
import Coupon from "../pages/Coupon";
import Items from "../pages/Items";
import { PrivateRoute } from "./PrivateRoute";
const Routes = () => {
  return (
    <Switch>
     
      <PrivateRoute path="/coupon" exact component={Coupon} />
      <PrivateRoute path="/item" exact component={Items} />
      <PrivateRoute path="/categoryname" component={CategoryName} />
    </Switch>
  );
};

export default Routes;
