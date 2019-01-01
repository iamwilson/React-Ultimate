import * as React from "react";
import { Redirect, Route } from "react-router-dom";

export const PrivateRoute = ({ auth, component: Component, ...misc }) => {
  return (
    <Route
      {...misc}
      render={() => (auth) ? <Component /> : <Redirect to="/login" />}
    />
  );
};
