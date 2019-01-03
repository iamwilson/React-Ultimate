import * as React from "react";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ authenticated, component: Component, ...misc }) => {
    return (
        <Route
            {...misc}
            render={() => (authenticated) ? <Component /> : <Redirect to="/login" />} />
    );
};
