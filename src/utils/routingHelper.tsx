import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ authenticated, component: Component, ...misc }) => {
    return (
        <Route
            render={() => authenticated ? <Component /> : <Redirect to='/login' />}
            {...misc}
        />
    );
};

export const PublicRoute = ({ component: Component, props: Props, ...misc }) => {
    return (
        <Route
            render={(props) => <Component {...props} {...Props} />}
            {...misc}
        />
    );
};
